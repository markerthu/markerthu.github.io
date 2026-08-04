#!/usr/bin/env python3
"""Fetch visitor analytics from the GoatCounter API into _data/visitors.json.

Feeds two things:
  * _includes/visitor-map.html  -> the sidebar map (dots from `locations`)
  * _pages/visitors.html        -> the full /visitors/ page (everything else)

Individual pageviews come from the async export API, which GoatCounter rate-limits
to roughly one export per hour. If the export is unavailable (429 / disabled /
still running) we keep whatever `recent` rows are already in the file and carry on:
the aggregates are the important part and must never fail because of the export.

Token is read from env GOATCOUNTER_TOKEN (never hardcoded).
"""
import os, sys, io, csv, json, gzip, zipfile, time, datetime, urllib.request, urllib.error

SITE = os.environ.get("GOATCOUNTER_SITE", "https://jiajunfan.goatcounter.com").rstrip("/")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "_data", "visitors.json")
CENTROIDS = os.path.join(ROOT, "scripts", "country_centroids.json")
REGIONS = os.path.join(ROOT, "scripts", "region_centroids.json")
PROJ = os.path.join(ROOT, "scripts", "map_projection.json")

DAYS = 30          # window for the aggregate stats
MAX_DOTS = 60      # dots drawn on the map
MAX_ROWS = 200     # individual visits kept for the /visitors/ table
TOP_N = 25         # rows kept per aggregate table


def call(path, data=None, raw=False, timeout=60):
    token = os.environ["GOATCOUNTER_TOKEN"]
    body = json.dumps(data).encode() if data is not None else None
    req = urllib.request.Request(
        SITE + path, data=body,
        headers={"Authorization": "Bearer " + token, "Content-Type": "application/json"},
        method="POST" if data is not None else "GET")
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            b = r.read()
            return r.status, (b if raw else b.decode("utf-8", "replace"))
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", "replace")
    except Exception as e:
        return -1, "%s: %s" % (type(e).__name__, e)


def stats(page, qs):
    """GET /api/v0/stats/<page> -> list of {id,name,count}. [] on any failure."""
    code, body = call("/api/v0/stats/%s?%s&limit=100" % (page, qs))
    if code != 200:
        print("  warn: stats/%s -> %s %s" % (page, code, body[:120]), file=sys.stderr)
        return []
    try:
        return json.loads(body).get("stats", []) or []
    except Exception:
        return []


def clean(rows, top=TOP_N):
    out = []
    for r in rows:
        c = int(r.get("count") or 0)
        if c <= 0:
            continue
        name = (r.get("name") or r.get("id") or "").strip()
        if not name:
            name = "(unknown)"
        out.append({"name": name, "id": r.get("id") or "", "count": c})
    out.sort(key=lambda r: -r["count"])
    return out[:top]


def try_export(prev_rows):
    """Individual pageviews via the async export API. Returns (rows, note)."""
    start = datetime.datetime.utcnow() - datetime.timedelta(days=DAYS)
    # start_from_day is only accepted for JSON exports, and needs a full RFC3339 stamp.
    code, body = call("/api/v0/export", {
        "format": "json",
        "start_from_day": start.strftime("%Y-%m-%dT00:00:00Z"),
    })
    if code not in (200, 202):
        return prev_rows, "export unavailable (%s): %s" % (code, body[:90])

    try:
        eid = json.loads(body)["id"]
    except Exception:
        return prev_rows, "export: no id in response"

    for _ in range(20):
        time.sleep(6)
        code, body = call("/api/v0/export/%s" % eid)
        try:
            st = json.loads(body)
        except Exception:
            st = {}
        if st.get("error"):
            return prev_rows, "export error: %s" % str(st["error"])[:90]
        if st.get("finished_at"):
            break
    else:
        return prev_rows, "export did not finish in time"

    code, raw = call("/api/v0/export/%s/download" % eid, raw=True, timeout=120)
    if code != 200 or not isinstance(raw, bytes):
        return prev_rows, "export download failed (%s)" % code

    # JSON exports arrive as a ZIP holding info.json / paths.jsonl / hits.jsonl.
    # CSV exports are plain gzip. Handle both.
    text = ""
    if raw[:2] == b"PK":
        try:
            zf = zipfile.ZipFile(io.BytesIO(raw))
            names = zf.namelist()
            # pick the .jsonl with the most lines that is not the path lookup table
            best, best_n, sizes = None, -1, []
            for n in names:
                if not n.endswith(".jsonl"):
                    continue
                body = zf.read(n).decode("utf-8", "replace")
                cnt = sum(1 for l in body.splitlines() if l.strip())
                sizes.append("%s=%d" % (n.split("/")[-1], cnt))
                if "path" in n.lower():
                    continue
                if cnt > best_n:
                    best, best_n, text = n, cnt, body
            print("  export zip: %s | files: %s" % (names[:1], ", ".join(sizes)))
            if best is None:
                return prev_rows, "export zip has no hits file: %s" % names[:6]
            # paths.jsonl maps path_id -> path/title; join it so rows show real URLs
            pmap = {}
            for pn in [n for n in names if "path" in n.lower() and n.endswith(".jsonl")]:
                for line in zf.read(pn).decode("utf-8", "replace").splitlines():
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        o = json.loads(line)
                    except Exception:
                        continue
                    pid = o.get("id") or o.get("ID") or o.get("path_id")
                    if pid is not None:
                        pmap[str(pid)] = o.get("path") or o.get("Path") or ""
            try_export.pathmap = pmap
        except Exception as e:
            return prev_rows, "export zip read failed: %s" % e
    else:
        try:
            text = gzip.GzipFile(fileobj=io.BytesIO(raw)).read().decode("utf-8", "replace")
        except Exception:
            text = raw.decode("utf-8", "replace")

    # GoatCounter may hand back newline-delimited JSON, a JSON array, or CSV.
    # Try each; CSV needs newline='' so quoted fields containing newlines survive.
    text = text.lstrip("﻿").strip()
    rows = []
    if text[:1] in ("{", "["):
        try:
            if text[:1] == "[":
                rows = json.loads(text)
            else:
                rows = [json.loads(l) for l in text.splitlines() if l.strip()]
        except Exception as e:
            return prev_rows, "export JSON parse failed: %s (head=%r)" % (e, text[:120])
    else:
        try:
            rows = list(csv.DictReader(io.StringIO(text, newline="")))
        except Exception as e:
            return prev_rows, "export CSV parse failed: %s (head=%r)" % (e, text[:120])
    if not rows:
        return prev_rows, "export returned no rows (head=%r)" % text[:120]

    def g(row, *names):
        """Field lookup that tolerates CSV strings and JSON bools/ints, any casing."""
        for n in names:
            for k in row:
                if k and str(k).strip().lower().replace("_", "") == n:
                    v = row[k]
                    if v is None or v is False:
                        return ""
                    if v is True:
                        return "true"
                    v = str(v).strip()
                    if v:
                        return v
        return ""

    pathmap = getattr(try_export, "pathmap", {})
    out = []
    for row in rows:
        if not isinstance(row, dict):
            continue
        if g(row, "bot").lower() not in ("", "0", "false"):
            continue
        path = g(row, "path")
        if not path:
            path = pathmap.get(g(row, "pathid", "path_id"), "") or "/"
        out.append({
            "date": g(row, "date", "createdat", "createdatutc")[:16].replace("T", " "),
            "loc": g(row, "location"),
            "path": path,
            "ref": g(row, "referrer", "ref"),
            "browser": g(row, "browser", "useragentheader"),
            "system": g(row, "system"),
            "first": g(row, "firstvisit").lower() in ("1", "true"),
        })
    if rows and isinstance(rows[0], dict):
        print("  export row keys: %s" % sorted(rows[0].keys())[:14])
        print("  export sample  : %s" % json.dumps(rows[0])[:260])
    out = [r for r in out if r["date"]]          # drop rows we could not read a time from
    out.sort(key=lambda r: r["date"], reverse=True)
    return out[:MAX_ROWS], "ok (%d of %d rows usable)" % (len(out), len(rows))


def main():
    if not os.environ.get("GOATCOUNTER_TOKEN"):
        print("ERROR: GOATCOUNTER_TOKEN not set", file=sys.stderr)
        sys.exit(1)

    end = datetime.date.today()
    start = end - datetime.timedelta(days=DAYS - 1)
    qs = "start=%s&end=%s" % (start.isoformat(), end.isoformat())

    locations = stats("locations", qs)
    if not locations:
        print("No location rows returned; leaving _data/visitors.json unchanged.")
        return

    prev = {}
    if os.path.exists(OUT):
        try:
            prev = json.load(open(OUT, encoding="utf-8"))
        except Exception:
            prev = {}

    cent = json.load(open(CENTROIDS, encoding="utf-8"))
    proj = json.load(open(PROJ, encoding="utf-8"))
    W, H = proj["W"], proj["H"]
    LON0, LON1, LAT0, LAT1 = proj["LON0"], proj["LON1"], proj["LAT0"], proj["LAT1"]

    def xy(lon, lat):
        return (round((lon - LON0) / (LON1 - LON0) * W, 1),
                round((LAT1 - lat) / (LAT1 - LAT0) * H, 1))

    reg_cent = {}
    if os.path.exists(REGIONS):
        try:
            reg_cent = json.load(open(REGIONS, encoding="utf-8"))
        except Exception:
            reg_cent = {}

    dots, countries, regions, total, nocent = [], [], [], 0, []
    for row in locations:
        code = (row.get("id") or "").upper()
        name = row.get("name") or code or "(unknown)"
        n = int(row.get("count") or 0)
        total += n
        if n <= 0:
            continue
        countries.append({"code": code, "name": name, "count": n})

        # Drill into regions (states / provinces). GoatCounter only collects these
        # for the countries listed in the site's settings; elsewhere the name is "".
        placed = False
        rcode, rbody = call("/api/v0/stats/locations/%s?%s&limit=100" % (code, qs))
        if rcode == 200:
            try:
                rstats = json.loads(rbody).get("stats", []) or []
            except Exception:
                rstats = []
            for r in rstats:
                rname = (r.get("name") or "").strip()
                rn = int(r.get("count") or 0)
                if not rname or rn <= 0:
                    continue
                key = "%s|%s" % (code, rname.lower())
                ll = reg_cent.get(key)
                regions.append({"country": code, "country_name": name,
                                "name": rname, "count": rn, "located": bool(ll)})
                if ll:
                    cx, cy = xy(ll[1], ll[0])
                    dots.append({"code": code, "name": "%s, %s" % (rname, code),
                                 "count": rn, "cx": cx, "cy": cy,
                                 "r": round(2.0 + (rn ** 0.5) * 1.0, 1)})
                    placed = True

        # No usable region breakdown -> one dot at the country centroid.
        if not placed:
            if code not in cent:
                nocent.append(code or name)
                continue
            lat, lon = cent[code]
            cx, cy = xy(lon, lat)
            dots.append({"code": code, "name": name, "count": n, "cx": cx, "cy": cy,
                         "r": round(2.0 + (n ** 0.5) * 1.0, 1)})

    countries.sort(key=lambda c: -c["count"])
    dots.sort(key=lambda d: -d["count"])
    dots = dots[:MAX_DOTS]

    # most-visited pages
    pages = []
    code, body = call("/api/v0/stats/hits?%s&limit=100" % qs)
    if code == 200:
        try:
            for h in json.loads(body).get("hits", []) or []:
                c = int(h.get("count") or 0)
                if c > 0:
                    pages.append({"path": h.get("path") or "/",
                                  "title": (h.get("title") or "").strip(),
                                  "count": c})
        except Exception:
            pass
    pages.sort(key=lambda p: -p["count"])
    pages = pages[:TOP_N]

    recent, note = try_export(prev.get("recent") or [])
    print("  export: %s" % note)

    def fmt(dt):
        return dt.strftime("%b. %d") + {1: "st", 2: "nd", 3: "rd"}.get(
            dt.day if dt.day not in (11, 12, 13) else 0, "th")

    out = {
        "_updated": end.isoformat(),
        "_source": "GoatCounter API (%s)" % SITE,
        "_total": total,
        "_days": DAYS,
        "_range": "%s - %s" % (fmt(start), fmt(end)),
        "locations": dots,
        "countries": countries[:TOP_N],
        "regions": sorted(regions, key=lambda r: -r["count"])[:TOP_N],
        "pages": pages,
        "referrers": clean(stats("toprefs", qs)),
        "browsers": clean(stats("browsers", qs)),
        "systems": clean(stats("systems", qs)),
        "sizes": clean(stats("sizes", qs)),
        "recent": recent,
    }
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print("Updated: %d countries, %d regions, %d dots, %d pageviews, %d pages, %d referrers, %d recent rows"
          % (len(countries), len(regions), len(dots), total, len(pages),
             len(out["referrers"]), len(recent)))
    unplaced = [r["name"] for r in regions if not r["located"]]
    if unplaced:
        print("  regions without a centroid (kept in table, no dot): %s"
              % ", ".join(sorted(set(unplaced))[:12]))
    if nocent:
        print("  no centroid (dot skipped): %s" % ", ".join(sorted(set(nocent))))


if __name__ == "__main__":
    main()

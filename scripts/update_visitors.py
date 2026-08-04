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
import os, sys, io, csv, json, gzip, time, datetime, urllib.request, urllib.error

SITE = os.environ.get("GOATCOUNTER_SITE", "https://jiajunfan.goatcounter.com").rstrip("/")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "_data", "visitors.json")
CENTROIDS = os.path.join(ROOT, "scripts", "country_centroids.json")
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
    try:
        text = gzip.GzipFile(fileobj=io.BytesIO(raw)).read().decode("utf-8", "replace")
    except Exception:
        text = raw.decode("utf-8", "replace")

    # JSON exports are newline-delimited objects; fall back to CSV if it looks tabular.
    rows = []
    stripped = text.lstrip()
    try:
        if stripped.startswith("{") or stripped.startswith("["):
            if stripped.startswith("["):
                rows = json.loads(stripped)
            else:
                for line in text.splitlines():
                    line = line.strip()
                    if line:
                        rows.append(json.loads(line))
        else:
            rows = list(csv.DictReader(io.StringIO(text)))
    except Exception as e:
        return prev_rows, "export parse failed: %s" % e

    def g(row, *names):
        for n in names:
            for k in row:
                if k and k.strip().lower() == n:
                    v = (row[k] or "").strip()
                    if v:
                        return v
        return ""

    out = []
    for row in rows:
        if (g(row, "bot") or "0") not in ("0", "", "false"):
            continue
        out.append({
            "date": g(row, "date", "created_at")[:16].replace("T", " "),
            "loc": g(row, "location"),
            "path": g(row, "path") or "/",
            "ref": g(row, "referrer", "ref"),
            "browser": g(row, "browser"),
            "system": g(row, "system"),
            "first": g(row, "firstvisit", "first_visit") in ("1", "true", "TRUE"),
        })
    out.sort(key=lambda r: r["date"], reverse=True)
    return out[:MAX_ROWS], "ok (%d rows)" % len(out)


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

    dots, countries, total, nocent = [], [], 0, []
    for row in locations:
        code = (row.get("id") or "").upper()
        name = row.get("name") or code or "(unknown)"
        n = int(row.get("count") or 0)
        total += n
        if n <= 0:
            continue
        countries.append({"code": code, "name": name, "count": n})
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

    print("Updated: %d countries (%d dots), %d pageviews, %d pages, %d referrers, %d recent rows"
          % (len(countries), len(dots), total, len(pages), len(out["referrers"]), len(recent)))
    if nocent:
        print("  no centroid (dot skipped): %s" % ", ".join(sorted(set(nocent))))


if __name__ == "__main__":
    main()

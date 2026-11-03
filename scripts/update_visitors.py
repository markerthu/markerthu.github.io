#!/usr/bin/env python3
"""Fetch visitor analytics from the GoatCounter API into _data/visitors.json.

Feeds two things:
  * _includes/visitor-map.html  -> the sidebar map (dots from `locations`)
  * visitors/index.html         -> the full /visitors/ page (everything else)

Individual pageviews come from the async export API, which GoatCounter rate-limits
to roughly one export per hour. If the export is unavailable (429 / disabled /
still running) we keep whatever `recent` rows are already in the file and carry on:
the aggregates are the important part and must never fail because of the export.

Token is read from env GOATCOUNTER_TOKEN (never hardcoded).
"""
import os, re, sys, io, csv, json, gzip, zipfile, time, datetime, urllib.request, urllib.error
try:
    from zoneinfo import ZoneInfo
except ImportError:
    ZoneInfo = None

SITE = os.environ.get("GOATCOUNTER_SITE", "https://jiajunfan.goatcounter.com").rstrip("/")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "_data", "visitors.json")
CENTROIDS = os.path.join(ROOT, "scripts", "country_centroids.json")
REGIONS = os.path.join(ROOT, "scripts", "region_centroids.json")
REGION_NAMES = os.path.join(ROOT, "scripts", "region_names.json")
PROJ = os.path.join(ROOT, "scripts", "map_projection.json")

DAYS = 30          # window for the aggregate stats
MAX_DOTS = 60      # dots drawn on the map
R_MIN, R_MAX = 1.8, 4.2   # dot radius range in SVG units (viewBox is 360 wide)
MAX_ROWS = 30      # individual visits shown on the /visitors/ table
COUNTRY_NAMES = {}  # ISO_A2 -> full name, filled from the locations API
TOP_N = 25         # rows kept per aggregate table (not countries: the page says "every country")


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
    """GET /api/v0/stats/<page>.

    Returns a list on success (possibly empty, meaning "no data in this window"),
    or None when the fetch itself failed. The caller must keep the previous value
    on None — writing [] would silently blank a section of the live page.
    """
    code, body = call("/api/v0/stats/%s?%s&limit=100" % (page, qs))
    if code != 200:
        print("  warn: stats/%s failed -> %s %s" % (page, code, body[:120]), file=sys.stderr)
        return None
    try:
        return json.loads(body).get("stats", []) or []
    except Exception as e:
        print("  warn: stats/%s unparseable -> %s" % (page, e), file=sys.stderr)
        return None


def site_timezone():
    """GoatCounter buckets days in the SITE's timezone, while the Actions runner and the
    CSV export are both UTC. Mixing the two produced a day-long shortfall and a table
    whose timestamps disagreed with the chart. Resolve it once, here."""
    code, body = call("/api/v0/me")
    name = ""
    if code == 200:
        try:
            def find_tz(node):
                """The field moves around between payload shapes (user.site is an int id,
                not an object), so search rather than guess a path."""
                if isinstance(node, dict):
                    for k, v in node.items():
                        if k.lower() == "timezone" and isinstance(v, str) and v.strip():
                            return v.strip()
                        got = find_tz(v)
                        if got:
                            return got
                elif isinstance(node, list):
                    for v in node:
                        got = find_tz(v)
                        if got:
                            return got
                return ""
            name = find_tz(json.loads(body))
        except Exception:
            pass
    else:
        print("  warn: /api/v0/me -> %s, falling back to UTC" % code, file=sys.stderr)
    name = (name or "").split(".", 1)[-1].strip()      # "US.America/Los_Angeles" -> "America/Los_Angeles"
    if name and ZoneInfo:
        try:
            return name, ZoneInfo(name)
        except Exception:
            pass
    print("  warn: no usable timezone found (%r); using UTC" % name, file=sys.stderr)
    return (name or "UTC"), datetime.timezone.utc


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


# ---- pure helpers (no API calls; safe to run on an existing visitors.json) ----

def fmt_day(dt):
    d = dt.day
    suffix = "th" if 11 <= d % 100 <= 13 else {1: "st", 2: "nd", 3: "rd"}.get(d % 10, "th")
    return "%s. %d%s" % (dt.strftime("%b"), d, suffix)


def days_between(rows, a, b):
    """The daily rows dated a..b inclusive (site-timezone dates), oldest first.

    GoatCounter's stats/total shifts the requested range into the site's timezone
    before cutting it into days, so a request for whole dates comes back with a
    partial bucket at each edge. In Los Angeles, start=D gave a first bucket for D-1
    holding only its evening (2026-10-03: 8 views as the first bucket, 24-29 in runs
    where it sat inside the window), and
    the series ran one day longer than the label. Ask wider, keep exactly a..b."""
    a, b = a.isoformat(), b.isoformat()
    out = [r for r in rows if r.get("day") and a <= r["day"] <= b]
    out.sort(key=lambda r: r["day"])
    return out


def window_summary(daily, fallback_start, fallback_end):
    """Header total, day count and printed range, all read off the same daily rows,
    so 'N Pageviews', 'Last N days', the range and the chart describe one window."""
    if daily:
        a = datetime.date.fromisoformat(daily[0]["day"])
        b = datetime.date.fromisoformat(daily[-1]["day"])
        if (b - a).days + 1 != len(daily):
            print("  warn: daily series has gaps (%d rows over %s..%s)" % (len(daily), a, b),
                  file=sys.stderr)
    else:
        a, b = fallback_start, fallback_end
    return {
        "_total": sum(int(r.get("n") or 0) for r in daily),
        "_days": len(daily) if daily else (b - a).days + 1,
        "_range": "%s - %s" % (fmt_day(a), fmt_day(b)),
    }


def build_dots(countries, regions, cent, reg_cent, proj, max_dots=MAX_DOTS):
    """Map dots from the country and region tables.

    One dot per region we can place, plus one dot at the country's centroid for the
    rest of that country's views (all of them when no region could be placed). The
    rest used to be dropped, so the dots summed to less than the country table
    (877 vs 906: 22 US and 7 CN views had no region). Now the dots add up to the
    country table, unless a country has no centroid or the MAX_DOTS cap cuts some.
    Returns (dots, codes_without_centroid)."""
    W, H = proj["W"], proj["H"]
    LON0, LON1, LAT0, LAT1 = proj["LON0"], proj["LON1"], proj["LAT0"], proj["LAT1"]

    def xy(lon, lat):
        return (round((lon - LON0) / (LON1 - LON0) * W, 1),
                round((LAT1 - lat) / (LAT1 - LAT0) * H, 1))

    by_country = {}
    for r in regions:
        by_country.setdefault(r.get("country") or "", []).append(r)

    dots, nocent = [], []
    for c in countries:
        code, name, n = c.get("code") or "", c.get("name") or "", int(c.get("count") or 0)
        if n <= 0:
            continue
        placed = 0
        for r in by_country.get(code, []):
            rname, rn = (r.get("name") or "").strip(), int(r.get("count") or 0)
            ll = reg_cent.get("%s|%s" % (code, rname.lower())) if rname else None
            if not ll or rn <= 0:
                continue
            cx, cy = xy(ll[1], ll[0])
            dots.append({"code": code, "name": "%s, %s" % (rname, code),
                         "count": rn, "cx": cx, "cy": cy})
            placed += rn
        rest = n - placed
        if rest <= 0:
            continue
        if code not in cent:
            nocent.append(code or name)
            continue
        lat, lon = cent[code]
        cx, cy = xy(lon, lat)
        dots.append({"code": code,
                     "name": name if not placed else "%s, other regions" % name,
                     "count": rest, "cx": cx, "cy": cy})

    dots.sort(key=lambda d: -d["count"])
    dots = dots[:max_dots]
    # Radius is normalised against the busiest dot and capped, so a single hot region
    # cannot swallow its neighbours; area still scales with the count (sqrt).
    if dots:
        top = max(d["count"] for d in dots) or 1
        for d in dots:
            d["r"] = round(R_MIN + (R_MAX - R_MIN) * ((d["count"] / top) ** 0.5), 2)
    # biggest first in document order => smaller dots paint on top and stay visible
    dots.sort(key=lambda d: -d["r"])
    return dots, nocent


def try_export(prev_rows):
    """Individual pageviews via the async export API. Returns (rows, note)."""
    # Only the CSV export contains individual pageviews; the JSON export ships
    # lookup tables and per-day aggregates instead.
    code, body = call("/api/v0/export", {"format": "csv"})
    if code not in (200, 202):
        # older/newer builds may require the pagination cursor
        code, body = call("/api/v0/export", {"format": "csv", "start_from_hit_id": 0})
    if code not in (200, 202):
        return prev_rows, "export unavailable (%s): %s" % (code, body[:90])

    try:
        eid = json.loads(body)["id"]
    except Exception:
        return prev_rows, "export: no id in response"

    st = {}
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
    print("  export status: num_rows=%s size=%s last_hit_id=%s"
          % (st.get("num_rows"), st.get("size"), st.get("last_hit_id")))
    if not st.get("num_rows"):
        return prev_rows, ("export finished with 0 rows — GoatCounter only records "
                           "individual pageviews after 'Individual pageviews' is enabled, "
                           "and only for visits from that moment on")

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
    # The CSV export carries a format-version marker. Depending on how the bytes land
    # it arrives either as its own line or glued onto the first header cell ("2Path"),
    # which silently breaks the path column and makes every row fall back to "/".
    _lines = text.split("\n")
    if _lines and re.fullmatch(r"\s*\d+\s*", _lines[0] or ""):
        text = "\n".join(_lines[1:])
    elif _lines:
        _lines[0] = re.sub(r"^\s*\d+(?=[A-Za-z])", "", _lines[0])
        text = "\n".join(_lines)
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
                if k and str(k).strip().lower().replace("_", "").replace(" ", "") == n:
                    v = row[k]
                    if v is None or v is False:
                        return ""
                    if v is True:
                        return "true"
                    v = str(v).strip()
                    if v:
                        return v
        return ""

    def _parse_utc(raw):
        raw = (raw or "").strip()
        if not raw:
            return None
        try:
            dt = datetime.datetime.fromisoformat(raw.replace("Z", "+00:00"))
            return dt.replace(tzinfo=datetime.timezone.utc) if dt.tzinfo is None else dt
        except Exception:
            return None

    def _to_site_time(raw):
        """Export stamps are UTC; the page renders them in the site's timezone by
        default and re-renders client-side for readers in other zones."""
        dt = _parse_utc(raw)
        if dt is None:
            return (raw or "")[:16].replace("T", " ")
        return dt.astimezone(try_export.tz).strftime("%Y-%m-%d %H:%M")

    def _utc_iso(raw):
        dt = _parse_utc(raw)
        return dt.strftime("%Y-%m-%dT%H:%M:%SZ") if dt else ""

    pathmap = getattr(try_export, "pathmap", {})
    rnames = {}
    if os.path.exists(REGION_NAMES):
        try:
            rnames = json.load(open(REGION_NAMES, encoding="utf-8"))
        except Exception:
            rnames = {}

    def pretty_screen(raw):
        """GoatCounter stores 'width,height,scale'; height is often 0 (not reported)."""
        parts = [p.strip() for p in (raw or "").split(",")]
        try:
            w = int(parts[0]); h = int(parts[1]) if len(parts) > 1 else 0
        except (ValueError, IndexError):
            return ""
        if w <= 0:
            return ""
        return "%d×%d" % (w, h) if h > 0 else "%dpx" % w

    def pretty_loc(code):
        """'US-WA' -> 'Washington, US'; 'US' -> 'United States'; '' -> ''."""
        code = (code or "").strip().upper()
        if not code:
            return ""
        if "-" in code:
            country = code.split("-")[0]
            return "%s, %s" % (rnames.get(code, code.split("-")[-1]), country)
        return COUNTRY_NAMES.get(code, code)

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
            "date": _to_site_time(g(row, "date", "createdat", "createdatutc")),
            "ts": _utc_iso(g(row, "date", "createdat", "createdatutc")),
            "loc": pretty_loc(g(row, "location")),
            "path": path,
            "ref": g(row, "referrer", "ref"),
            "browser": g(row, "browser", "useragentheader"),
            "system": g(row, "system"),
            "screen": pretty_screen(g(row, "screensize", "size")),
            "first": g(row, "firstvisit").lower() in ("1", "true"),
        })
    if rows and isinstance(rows[0], dict):
        print("  export row keys: %s" % sorted(rows[0].keys())[:14])
        print("  export sample  : %s" % json.dumps(rows[0])[:260])
    out = [r for r in out if r["date"]]          # drop rows we could not read a time from
    out.sort(key=lambda r: r["date"], reverse=True)
    try_export.total_rows = len(out)
    return out[:MAX_ROWS], "ok (%d of %d rows usable)" % (len(out), len(rows))


def main():
    if not os.environ.get("GOATCOUNTER_TOKEN"):
        print("ERROR: GOATCOUNTER_TOKEN not set", file=sys.stderr)
        sys.exit(1)

    tz_name, tz = site_timezone()
    end = datetime.datetime.now(tz).date()
    start = end - datetime.timedelta(days=DAYS - 1)
    print("  site timezone: %s (today there is %s)" % (tz_name, end))
    # qs feeds the breakdown endpoints (locations, regions, pages, referrers, browsers,
    # systems). GoatCounter keeps those per UTC day, so they cannot be cut at site-
    # timezone midnight and their sums differ from the daily series; the page labels
    # them as their own counts. end=today+1 so that today is included. The daily
    # series is fetched separately (complete_days) and trimmed to exactly start..end.
    api_end = end + datetime.timedelta(days=1)
    qs = "start=%s&end=%s" % (start.isoformat(), api_end.isoformat())

    locations = None
    for attempt in range(4):
        locations = stats("locations", qs)
        if locations is not None:
            break
        if attempt < 3:
            wait = 10 * (attempt + 1)
            print("  locations fetch failed; retrying in %ds (%d/3)" % (wait, attempt + 1),
                  file=sys.stderr)
            time.sleep(wait)
    if locations is None:
        print("ERROR: locations fetch failed; leaving _data/visitors.json unchanged.",
              file=sys.stderr)
        sys.exit(1)
    if not locations:
        print("No visits in this window; leaving _data/visitors.json unchanged.")
        return

    prev = {}
    if os.path.exists(OUT):
        try:
            prev = json.load(open(OUT, encoding="utf-8"))
        except Exception:
            prev = {}

    cent = json.load(open(CENTROIDS, encoding="utf-8"))
    proj = json.load(open(PROJ, encoding="utf-8"))

    reg_cent = {}
    if os.path.exists(REGIONS):
        try:
            reg_cent = json.load(open(REGIONS, encoding="utf-8"))
        except Exception:
            reg_cent = {}

    # loc_total: every view the locations table attributes to a country. It comes
    # from GoatCounter's per-UTC-day location counts, NOT from the daily series, so
    # it is not the header total; the page labels it as its own count.
    countries, regions, loc_total = [], [], 0
    for row in locations:
        code = (row.get("id") or "").upper()
        name = row.get("name") or code or "(unknown)"
        n = int(row.get("count") or 0)
        loc_total += n
        if n <= 0:
            continue
        countries.append({"code": code, "name": name, "count": n})

        # Drill into regions (states / provinces). GoatCounter only collects these
        # for the countries listed in the site's settings; elsewhere the name is "".
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
                regions.append({"country": code, "country_name": name, "name": rname,
                                "count": rn,
                                "located": bool(reg_cent.get("%s|%s" % (code, rname.lower())))})

    countries.sort(key=lambda c: -c["count"])
    # Built from the FULL region list (the file keeps only the top TOP_N regions).
    dots, nocent = build_dots(countries, regions, cent, reg_cent, proj)

    # most-visited pages
    pages, pages_ok = [], False
    code, body = call("/api/v0/stats/hits?%s&limit=100" % qs)
    if code == 200:
        try:
            for h in json.loads(body).get("hits", []) or []:
                c = int(h.get("count") or 0)
                if c > 0:
                    pages.append({"path": h.get("path") or "/",
                                  "title": (h.get("title") or "").strip(),
                                  "count": c})
            pages_ok = True
        except Exception as e:
            print("  warn: stats/hits unparseable -> %s" % e, file=sys.stderr)
    else:
        print("  warn: stats/hits failed -> %s %s" % (code, body[:120]), file=sys.stderr)
    if pages_ok:
        pages.sort(key=lambda p: -p["count"])
        pages = pages[:TOP_N]
    else:
        pages = prev.get("pages") or []

    global COUNTRY_NAMES
    COUNTRY_NAMES = {c["code"]: c["name"] for c in countries if c.get("code")}

    # Daily series + period comparisons — /api/v0/stats/total returns one entry per day.
    def series(a, b):
        for attempt in range(3):
            code, body = call("/api/v0/stats/total?start=%s&end=%s"
                              % (a.isoformat(), b.isoformat()))
            if code == 200:
                break
            print("  warn: stats/total %s..%s -> %s (attempt %d/3)"
                  % (a, b, code, attempt + 1), file=sys.stderr)
            if attempt < 2:
                time.sleep(10 * (attempt + 1))
        if code != 200:
            return None
        try:
            d = json.loads(body)
        except Exception:
            return None
        return [{"day": x.get("day"), "n": int(x.get("daily") or 0)}
                for x in (d.get("stats") or []) if x.get("day")]

    one = datetime.timedelta(days=1)

    def complete_days(a, b):
        """Whole site-timezone days a..b. A whole-date request comes back with partial
        buckets at both edges (see days_between); end=b+1 means 00:00 UTC, which is
        only 16:00/17:00 of day b in Los Angeles, so the evening of b was cut off.
        Ask for [a-1, b+2], which covers a..b completely for any UTC offset, then
        keep exactly a..b."""
        rows = series(a - one, b + 2 * one)
        return None if rows is None else days_between(rows, a, b)

    daily, daily_stale = complete_days(start, end), False
    if daily is None:
        # Reuse the previous run's window as a whole (its own N days, range and
        # _updated), rather than mixing it with today's dates.
        daily, daily_stale = (prev.get("daily") or [])[-DAYS:], True
        print("  warn: daily series fetch failed; reusing the previous series",
              file=sys.stderr)
    elif len(daily) != DAYS:
        print("  warn: daily series has %d days for %s..%s, expected %d"
              % (len(daily), start, end, DAYS), file=sys.stderr)
    prev_start = start - datetime.timedelta(days=DAYS)
    prev_daily = complete_days(prev_start, start - one) or []

    def total_of(rows, days=None):
        if not rows:
            return 0
        rows = rows[-days:] if days else rows
        return sum(r["n"] for r in rows)

    by_day = {r["day"]: r["n"] for r in daily if r.get("day")}
    today_n = by_day.get(end.isoformat(), 0)
    yday_n = by_day.get((end - datetime.timedelta(days=1)).isoformat(), 0)
    # How far into the current day we are, so the page can say "so far" honestly
    # instead of showing a near-zero partial count as if the day were over.
    now_local = datetime.datetime.now(tz)
    day_frac = round((now_local.hour * 60 + now_local.minute) / 1440.0, 3)
    if daily and daily[-1].get("day") != end.isoformat():
        print("  warn: daily series ends %s but today is %s"
              % (daily[-1].get("day"), end.isoformat()), file=sys.stderr)
    periods = {
        "today": today_n,
        "yesterday": yday_n,
        "d7": total_of(daily, 7),
        "d7_prev": total_of(daily[:-7], 7) if len(daily) > 7 else 0,
        "d30": total_of(daily),
        "d30_prev": total_of(prev_daily) if prev_daily else 0,
        "day_frac": day_frac,
        "yesterday_day": (end - datetime.timedelta(days=1)).isoformat(),
    }
    if daily_stale and prev.get("periods"):
        periods = dict(prev["periods"])     # same stale window as the reused series

    try_export.tz = tz
    recent, note = try_export(prev.get("recent") or [])
    print("  export: %s" % note)
    # the true number of recorded visits, before MAX_ROWS truncation
    recent_total = getattr(try_export, "total_rows", None)
    if recent_total is None:
        recent_total = prev.get("_recent_total") or len(recent)

    kept = []

    def keep(key, fetched):
        """Never let a failed fetch blank a section: fall back to the previous file."""
        if fetched is None:
            kept.append(key)
            return prev.get(key) or []
        return clean(fetched)

    # The header total, "Last N days", the printed range and the chart all come from
    # the one daily series (window_summary). The country / browser / system tables
    # and the map dots come from GoatCounter's per-UTC-day breakdowns, which cover a
    # slightly different span and summed HIGHER than the series (906 vs 870 on
    # 2026-11-02), so they are never used as the header total; the page prints
    # their own sum next to them instead.
    win = window_summary(daily, start, end)

    out = {
        "_updated": (daily[-1]["day"] if daily else end.isoformat()),
        "_timezone": tz_name,
        "_source": "GoatCounter API (%s)" % SITE,
        "_total": win["_total"],
        "_days": win["_days"],
        "_range": win["_range"],
        "locations": dots,
        "countries": countries,
        "regions": sorted(regions, key=lambda r: -r["count"])[:TOP_N],
        "pages": pages,
        "referrers": keep("referrers", stats("toprefs", qs)),
        "browsers": keep("browsers", stats("browsers", qs)),
        "systems": keep("systems", stats("systems", qs)),
        "daily": daily,
        "periods": periods,
        "_last_visit": (recent[0]["date"] if recent else (prev.get("_last_visit") or "")),
        "recent": recent,
        "_recent_total": recent_total,
        "_recent_shown": len(recent),
    }
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print("Updated: %d countries, %d regions, %d dots, %d pageviews over %s (%d days), "
          "%d views by location, %d on the map, %d pages, %d referrers, %d recent rows"
          % (len(countries), len(regions), len(dots), out["_total"], out["_range"],
             out["_days"], loc_total, sum(d["count"] for d in dots), len(pages),
             len(out["referrers"]), len(recent)))
    unplaced = [r["name"] for r in regions if not r["located"]]
    if unplaced:
        print("  regions without a centroid (kept in table, counted in the country-centre dot): %s"
              % ", ".join(sorted(set(unplaced))[:12]))
    if kept:
        print("  kept previous data for (fetch failed): %s" % ", ".join(kept))
    if nocent:
        print("  no centroid (dot skipped): %s" % ", ".join(sorted(set(nocent))))


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Fetch visitor locations from the GoatCounter API and update _data/visitors.json.

The site renders _includes/visitor-map.html from this file: land is baked into the
include, the red dots come from `locations` (already projected to SVG coords here so
Liquid does not have to do trigonometry).

Token is read from env GOATCOUNTER_TOKEN (never hardcoded).
API docs: https://www.goatcounter.com/help/api
"""
import os, sys, json, datetime, urllib.request, urllib.error

SITE = os.environ.get("GOATCOUNTER_SITE", "https://jiajunfan.goatcounter.com")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "_data", "visitors.json")
CENTROIDS = os.path.join(ROOT, "scripts", "country_centroids.json")
PROJ = os.path.join(ROOT, "scripts", "map_projection.json")
DAYS = 30
MAX_DOTS = 40


def api(path, token):
    req = urllib.request.Request(
        SITE.rstrip("/") + path,
        headers={"Authorization": "Bearer " + token, "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def main():
    token = os.environ.get("GOATCOUNTER_TOKEN")
    if not token:
        print("ERROR: GOATCOUNTER_TOKEN not set", file=sys.stderr)
        sys.exit(1)

    end = datetime.date.today()
    start = end - datetime.timedelta(days=DAYS - 1)
    qs = "?start=%s&end=%s&limit=100" % (start.isoformat(), end.isoformat())

    try:
        data = api("/api/v0/stats/locations" + qs, token)
    except urllib.error.HTTPError as e:
        print("ERROR: locations API %s: %s" % (e.code, e.read()[:300]), file=sys.stderr)
        sys.exit(1)

    rows = data.get("stats", []) or []
    if not rows:
        print("No location rows returned; leaving _data/visitors.json unchanged.")
        return

    cent = json.load(open(CENTROIDS, encoding="utf-8"))
    proj = json.load(open(PROJ, encoding="utf-8"))
    W, H = proj["W"], proj["H"]
    LON0, LON1 = proj["LON0"], proj["LON1"]
    LAT0, LAT1 = proj["LAT0"], proj["LAT1"]

    def xy(lon, lat):
        return (round((lon - LON0) / (LON1 - LON0) * W, 1),
                round((LAT1 - lat) / (LAT1 - LAT0) * H, 1))

    locations, total, skipped = [], 0, []
    for row in rows:
        # GoatCounter returns {"id": "US", "name": "United States", "count": N}
        code = (row.get("id") or "").upper()
        name = row.get("name") or code
        count = int(row.get("count") or 0)
        total += count
        if count <= 0:
            continue
        if code not in cent:
            skipped.append(code or name)
            continue
        lat, lon = cent[code]
        cx, cy = xy(lon, lat)
        locations.append({
            "code": code, "name": name, "count": count,
            "cx": cx, "cy": cy, "r": round(2.0 + (count ** 0.5) * 1.0, 1),
        })

    # biggest dots drawn first so small ones stay clickable/visible on top
    locations.sort(key=lambda l: -l["count"])
    locations = locations[:MAX_DOTS]

    def fmt(d):
        return d.strftime("%b. %d") + {1: "st", 2: "nd", 3: "rd"}.get(
            d.day if d.day not in (11, 12, 13) else 0, "th")

    out = {
        "_updated": end.isoformat(),
        "_source": "GoatCounter API (%s)" % SITE,
        "_total": total,
        "_range": "%s - %s" % (fmt(start), fmt(end)),
        "locations": locations,
    }
    with open(OUT, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2, ensure_ascii=False)
        f.write("\n")

    print("Updated: %d locations, %d total pageviews, range %s" %
          (len(locations), total, out["_range"]))
    if skipped:
        print("  no centroid for (dot skipped): %s" % ", ".join(sorted(set(skipped))))


if __name__ == "__main__":
    main()

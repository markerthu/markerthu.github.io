#!/usr/bin/env python3
"""Temporary diagnostic: figure out which GoatCounter API endpoint actually returns
visitor locations for this account. Prints status + a short body snippet for each
candidate so we can pick the right one. Reads GOATCOUNTER_TOKEN from env.
"""
import os, sys, json, datetime, urllib.request, urllib.error

SITE = os.environ.get("GOATCOUNTER_SITE", "https://jiajunfan.goatcounter.com").rstrip("/")
TOKEN = os.environ.get("GOATCOUNTER_TOKEN")
if not TOKEN:
    print("ERROR: GOATCOUNTER_TOKEN not set", file=sys.stderr)
    sys.exit(1)

end = datetime.date.today()
start = end - datetime.timedelta(days=29)
RANGE = "start=%s&end=%s" % (start.isoformat(), end.isoformat())
RANGE_T = "start=%sT00:00:00Z&end=%sT23:00:00Z" % (start.isoformat(), end.isoformat())

CANDIDATES = [
    "/api/v0/me",
    "/api/v0/stats/total?" + RANGE,
    "/api/v0/stats/locations",
    "/api/v0/stats/locations?" + RANGE,
    "/api/v0/stats/locations?" + RANGE_T,
    "/api/v0/stats/locations?" + RANGE + "&limit=100",
    "/api/v0/stats/browsers?" + RANGE,
    "/api/v0/stats/toprefs?" + RANGE,
]


def probe(path):
    req = urllib.request.Request(
        SITE + path,
        headers={"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=45) as r:
            body = r.read().decode("utf-8", "replace")
            return r.status, body
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", "replace")
    except Exception as e:
        return -1, "%s: %s" % (type(e).__name__, e)


print("SITE =", SITE)
print("token length =", len(TOKEN), "| starts with:", TOKEN[:4] + "...")
print("-" * 72)
for p in CANDIDATES:
    code, body = probe(p)
    snippet = body.replace("\n", " ")[:260]
    print("%-4s  %s" % (code, p))
    print("        %s" % snippet)
    # if it worked and looks like stats, show the parsed shape
    if code == 200 and "stats" in body:
        try:
            d = json.loads(body)
            rows = d.get("stats", [])
            print("        -> %d rows; first row: %s" % (len(rows), json.dumps(rows[0]) if rows else "(none)"))
        except Exception:
            pass
print("-" * 72)

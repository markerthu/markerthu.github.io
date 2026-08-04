#!/usr/bin/env python3
"""Temporary diagnostic: can we export individual pageviews from GoatCounter,
and what do the other stats endpoints return? Decides what the /visitors/ page
can honestly show. Reads GOATCOUNTER_TOKEN from env.
"""
import os, sys, json, time, gzip, io, datetime, urllib.request, urllib.error

SITE = os.environ.get("GOATCOUNTER_SITE", "https://jiajunfan.goatcounter.com").rstrip("/")
TOKEN = os.environ.get("GOATCOUNTER_TOKEN")
if not TOKEN:
    print("ERROR: GOATCOUNTER_TOKEN not set", file=sys.stderr)
    sys.exit(1)
H = {"Authorization": "Bearer " + TOKEN, "Content-Type": "application/json"}


def call(path, data=None, raw=False):
    body = json.dumps(data).encode() if data is not None else None
    req = urllib.request.Request(SITE + path, data=body, headers=H,
                                 method="POST" if data is not None else "GET")
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            b = r.read()
            return r.status, (b if raw else b.decode("utf-8", "replace"))
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", "replace")
    except Exception as e:
        return -1, "%s: %s" % (type(e).__name__, e)


end = datetime.date.today()
start = end - datetime.timedelta(days=89)
RNG = "start=%s&end=%s" % (start.isoformat(), end.isoformat())

print("=" * 70)
print("A) aggregate stats endpoints (what the /visitors/ page could show)")
for page in ["locations", "browsers", "systems", "sizes", "languages", "toprefs", "campaigns"]:
    code, body = call("/api/v0/stats/%s?%s&limit=100" % (page, RNG))
    n = "?"
    try:
        n = len(json.loads(body).get("stats", []))
    except Exception:
        pass
    print("  %-4s %-11s rows=%-4s %s" % (code, page, n, body.replace("\n", " ")[:110]))

print()
code, body = call("/api/v0/paths?limit=100")
print("  %-4s paths        %s" % (code, body.replace("\n", " ")[:160]))
code, body = call("/api/v0/stats/hits?%s&limit=100" % RNG)
try:
    d = json.loads(body)
    print("  %-4s stats/hits   pages=%s first=%s" % (code, len(d.get("hits", [])),
          json.dumps(d.get("hits", [{}])[0])[:180] if d.get("hits") else "-"))
except Exception:
    print("  %-4s stats/hits   %s" % (code, body[:160]))

print()
print("=" * 70)
print("B) individual pageview export (the 'one row per visit' list)")
code, body = call("/api/v0/export",
                  {"format": "json", "start_from_day": start.isoformat()})
print("  POST /api/v0/export (json) ->", code, body.replace("\n", " ")[:220])
if code not in (200, 202):
    code, body = call("/api/v0/export", {"format": "csv", "start_from_hit_id": 0})
    print("  POST /api/v0/export (csv)  ->", code, body.replace("\n", " ")[:220])
if code not in (200, 202):
    print("  EXPORT NOT AVAILABLE -> the /visitors/ page must use aggregates only.")
    sys.exit(0)

eid = None
try:
    eid = json.loads(body).get("id")
except Exception:
    pass
if not eid:
    print("  no export id returned"); sys.exit(0)

for i in range(12):
    time.sleep(5)
    code, body = call("/api/v0/export/%s" % eid)
    try:
        st = json.loads(body)
    except Exception:
        st = {}
    print("  poll %d: %s finished_at=%s rows=%s err=%s" %
          (i, code, st.get("finished_at"), st.get("num_rows"), st.get("error")))
    if st.get("finished_at"):
        break

code, raw = call("/api/v0/export/%s/download" % eid, raw=True)
print("  download ->", code, type(raw), len(raw) if isinstance(raw, bytes) else "")
if code == 200 and isinstance(raw, bytes):
    try:
        text = gzip.GzipFile(fileobj=io.BytesIO(raw)).read().decode("utf-8", "replace")
    except Exception:
        text = raw.decode("utf-8", "replace")
    lines = text.splitlines()
    print("  CSV lines:", len(lines))
    for ln in lines[:6]:
        print("    ", ln[:220])

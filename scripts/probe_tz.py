#!/usr/bin/env python3
"""Diagnose the daily-bucket vs export-timestamp mismatch."""
import os, sys, json, datetime, urllib.request, urllib.error
SITE=os.environ.get("GOATCOUNTER_SITE","https://jiajunfan.goatcounter.com").rstrip("/")
H={"Authorization":"Bearer "+os.environ["GOATCOUNTER_TOKEN"],"Content-Type":"application/json"}
def get(p):
    try:
        with urllib.request.urlopen(urllib.request.Request(SITE+p,headers=H),timeout=60) as r:
            return r.status, r.read().decode()
    except urllib.error.HTTPError as e: return e.code, e.read().decode()
    except Exception as e: return -1, str(e)

end=datetime.date.today(); start=end-datetime.timedelta(days=29)
c,b=get("/api/v0/stats/total?start=%s&end=%s"%(start,end+datetime.timedelta(days=1)))
print("stats/total ->",c)
d=json.loads(b)
print("  response total     :",d.get("total"))
print("  response total_utc :",d.get("total_utc"))
rows=d.get("stats",[])
print("  buckets            :",len(rows), rows[0]["day"],"->",rows[-1]["day"])
sd=sum(r.get("daily") or 0 for r in rows)
sh=sum(sum(r.get("hourly") or []) for r in rows)
print("  sum(daily)         :",sd)
print("  sum(hourly)        :",sh)
print("  last 3 buckets     :")
for r in rows[-3:]:
    print("     %s daily=%-4s hourly_sum=%-4s"%(r["day"], r.get("daily"), sum(r.get("hourly") or [])))
c2,b2=get("/api/v0/me")
try:
    me=json.loads(b2); site=me.get("site") or {}
    print("  account/site tz    :", (me.get("user") or {}).get("settings",{}).get("timezone") or site.get("settings",{}).get("timezone") or "not exposed")
except Exception: pass

#!/usr/bin/env python3
"""Diagnose: (1) region drill-down for locations, (2) real field names in the export."""
import os, sys, json, gzip, io, time, datetime, urllib.request, urllib.error
SITE=os.environ.get("GOATCOUNTER_SITE","https://jiajunfan.goatcounter.com").rstrip("/")
H={"Authorization":"Bearer "+os.environ["GOATCOUNTER_TOKEN"],"Content-Type":"application/json"}
def call(p,data=None,raw=False,t=90):
    b=json.dumps(data).encode() if data is not None else None
    r=urllib.request.Request(SITE+p,data=b,headers=H,method="POST" if data is not None else "GET")
    try:
        with urllib.request.urlopen(r,timeout=t) as x:
            d=x.read(); return x.status,(d if raw else d.decode("utf-8","replace"))
    except urllib.error.HTTPError as e: return e.code,e.read().decode("utf-8","replace")
    except Exception as e: return -1,"%s: %s"%(type(e).__name__,e)

end=datetime.date.today(); start=end-datetime.timedelta(days=29)
RNG="start=%s&end=%s"%(start.isoformat(),end.isoformat())
print("="*70); print("1) REGION DRILL-DOWN  /api/v0/stats/locations/{code}")
for code in ["US","HK","EG","CN"]:
    c,b=call("/api/v0/stats/locations/%s?%s&limit=100"%(code,RNG))
    print("  %-4s %-3s %s"%(c,code,b.replace("\n"," ")[:230]))

print(); print("="*70); print("2) EXPORT FIELD NAMES")
c,b=call("/api/v0/export",{"format":"json","start_from_day":(datetime.datetime.utcnow()-datetime.timedelta(days=30)).strftime("%Y-%m-%dT00:00:00Z")})
print("  POST export ->",c,b[:150])
if c in (200,202):
    eid=json.loads(b).get("id")
    for _ in range(20):
        time.sleep(6); c2,b2=call("/api/v0/export/%s"%eid)
        st=json.loads(b2) if b2.startswith("{") else {}
        if st.get("error"): print("  export error:",st["error"]); break
        if st.get("finished_at"): break
    c3,raw=call("/api/v0/export/%s/download"%eid,raw=True,t=120)
    if c3==200 and isinstance(raw,bytes):
        try: text=gzip.GzipFile(fileobj=io.BytesIO(raw)).read().decode("utf-8","replace")
        except Exception: text=raw.decode("utf-8","replace")
        print("  first 400 chars of payload:"); print("   ",repr(text[:400]))
        first=None
        for line in text.splitlines():
            if line.strip():
                try: first=json.loads(line); break
                except Exception: pass
        if first: 
            print("  ROW KEYS:",sorted(first.keys()))
            print("  SAMPLE  :",json.dumps(first)[:400])

#!/usr/bin/env python3
"""Is the CSV export's Date column UTC or site-local? And does the aggregate filter
more than the export? Prints raw vs converted for the newest rows."""
import os,sys,io,csv,gzip,json,time,re,datetime,urllib.request,urllib.error
from zoneinfo import ZoneInfo
SITE=os.environ.get("GOATCOUNTER_SITE","https://jiajunfan.goatcounter.com").rstrip("/")
H={"Authorization":"Bearer "+os.environ["GOATCOUNTER_TOKEN"],"Content-Type":"application/json"}
def call(p,data=None,raw=False,t=90):
    b=json.dumps(data).encode() if data is not None else None
    r=urllib.request.Request(SITE+p,data=b,headers=H,method="POST" if data is not None else "GET")
    try:
        with urllib.request.urlopen(r,timeout=t) as x:
            d=x.read(); return x.status,(d if raw else d.decode())
    except urllib.error.HTTPError as e: return e.code,e.read().decode()
    except Exception as e: return -1,str(e)

tz=ZoneInfo("America/Los_Angeles")
now_utc=datetime.datetime.now(datetime.timezone.utc)
print("probe run at  %s UTC  =  %s site"%(now_utc.strftime("%Y-%m-%d %H:%M"),
      now_utc.astimezone(tz).strftime("%Y-%m-%d %H:%M %Z")))

c,b=call("/api/v0/export",{"format":"csv"})
if c not in (200,202): print("export start:",c,b[:120]); sys.exit()
eid=json.loads(b)["id"]
for _ in range(20):
    time.sleep(6); c2,b2=call("/api/v0/export/%s"%eid)
    st=json.loads(b2) if b2.startswith("{") else {}
    if st.get("finished_at"): break
c3,rawb=call("/api/v0/export/%s/download"%eid,raw=True,t=120)
text=gzip.GzipFile(fileobj=io.BytesIO(rawb)).read().decode("utf-8","replace")
lines=text.split("\n")
if re.fullmatch(r"\s*\d+\s*",lines[0] or ""): text="\n".join(lines[1:])
else: lines[0]=re.sub(r"^\s*\d+(?=[A-Za-z])","",lines[0]); text="\n".join(lines)
rows=list(csv.DictReader(io.StringIO(text,newline="")))
rows=[r for r in rows if (r.get("Bot") or "0")=="0"]
def key(r): return r.get("Date") or ""
rows.sort(key=key,reverse=True)
print("non-bot rows:",len(rows))
print("newest 5 RAW Date values:")
for r in rows[:5]:
    raw=r["Date"]
    try:
        dt=datetime.datetime.fromisoformat(raw.replace("Z","+00:00"))
        if dt.tzinfo is None: dt=dt.replace(tzinfo=datetime.timezone.utc)
        conv=dt.astimezone(tz).strftime("%Y-%m-%d %H:%M")
    except Exception: conv="?"
    print("   raw=%-26s  as-UTC->site=%s   path=%s"%(raw,conv,r.get("Path")))
from collections import Counter
def day_utc(r):
    dt=datetime.datetime.fromisoformat(r["Date"].replace("Z","+00:00"))
    if dt.tzinfo is None: dt=dt.replace(tzinfo=datetime.timezone.utc)
    return dt.date().isoformat(), dt.astimezone(tz).date().isoformat()
cu=Counter(day_utc(r)[0] for r in rows); cl=Counter(day_utc(r)[1] for r in rows)
print("\nexport counts for the last 3 days:")
for d in sorted(set(list(cu)+list(cl)))[-3:]:
    print("   %s  as-UTC-day=%-4s  as-site-day=%s"%(d,cu.get(d,0),cl.get(d,0)))
c4,b4=call("/api/v0/stats/total?start=%s&end=%s"%((now_utc.astimezone(tz).date()-datetime.timedelta(days=3)),
                                                  (now_utc.astimezone(tz).date()+datetime.timedelta(days=1))))
print("\naggregate buckets:", [(x["day"],x["daily"]) for x in json.loads(b4).get("stats",[])])

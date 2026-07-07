#!/usr/bin/env python3
"""Fetch Google Scholar citation data via SerpAPI and update _data/citations.json
+ _data/citations_history.json. Key is read from env SERPAPI_KEY (never hardcoded)."""
import os, sys, json, urllib.request, urllib.parse, datetime

AUTHOR_ID = "EjmzseUAAAAJ"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIT = os.path.join(ROOT, "_data", "citations.json")
HIST = os.path.join(ROOT, "_data", "citations_history.json")

# per-paper key -> lowercase title substring to match SerpAPI article titles
PAPER_MATCH = {
    "2510.20867": "incentivizing consistent",
    "2510.18053": "adaptive divergence regularized",
    "2510.18072": "fine-tuning flow matching generative models with intermediate",
    "2407.05010": "prance",
    "ORW-CFM-W2": "online reward-weighted fine-tuning of flow matching",
    "LBC":        "learnable behavior control",
    "GDI":        "generalized data distribution iteration",
    "SP-VLA":     "sp-vla",
    "VarCon":     "variational supervised contrastive",
}

def fetch():
    key = os.environ.get("SERPAPI_KEY")
    if not key:
        print("ERROR: SERPAPI_KEY not set", file=sys.stderr); sys.exit(1)
    q = urllib.parse.urlencode({
        "engine": "google_scholar_author", "author_id": AUTHOR_ID,
        "api_key": key, "num": 100})
    with urllib.request.urlopen("https://serpapi.com/search?" + q, timeout=60) as r:
        return json.load(r)

def main():
    d = fetch()
    if "error" in d:
        print("SerpAPI error:", d["error"], file=sys.stderr); sys.exit(1)

    # total / indices from cited_by table
    total = h_index = i10 = None
    for row in d.get("cited_by", {}).get("table", []):
        if "citations" in row: total = row["citations"].get("all")
        if "h_index" in row:   h_index = row["h_index"].get("all")
        if "i10_index" in row: i10 = row["i10_index"].get("all")
    if not total:
        print("ERROR: no total citations parsed", file=sys.stderr); sys.exit(1)

    # citations per year (honest Scholar histogram)
    by_year = [{"year": g.get("year"), "citations": g.get("citations")}
               for g in d.get("cited_by", {}).get("graph", []) if g.get("year")]

    # load existing json, preserve unknown fields
    with open(CIT, encoding="utf-8") as f:
        cur = json.load(f)
    cur["_updated"] = datetime.date.today().isoformat()
    cur["_source"]  = "Google Scholar (%s) via SerpAPI" % AUTHOR_ID
    cur["_total"]   = int(total)
    if h_index: cur["_h_index"] = int(h_index)
    if i10:     cur["_i10_index"] = int(i10)
    if by_year: cur["_by_year"] = by_year

    # per-paper counts (keep old value if a paper isn't matched)
    arts = d.get("articles", [])
    def cites(a): return (a.get("cited_by", {}) or {}).get("value") or 0
    for k, sub in PAPER_MATCH.items():
        hit = next((a for a in arts if sub in (a.get("title", "").lower())), None)
        if hit is not None:
            cur[k] = int(cites(hit))

    with open(CIT, "w", encoding="utf-8") as f:
        json.dump(cur, f, indent=2, ensure_ascii=False); f.write("\n")

    # append daily history point (idempotent per date)
    hist = []
    if os.path.exists(HIST):
        with open(HIST, encoding="utf-8") as f:
            hist = json.load(f)
    today = datetime.date.today().isoformat()
    hist = [h for h in hist if h.get("date") != today]
    hist.append({"date": today, "total": int(total)})
    hist.sort(key=lambda h: h["date"])
    with open(HIST, "w", encoding="utf-8") as f:
        json.dump(hist, f, indent=2, ensure_ascii=False); f.write("\n")

    print("Updated: total=%s h=%s i10=%s  by_year=%d  papers=%d  history=%d" %
          (total, h_index, i10, len(by_year), len(PAPER_MATCH), len(hist)))

if __name__ == "__main__":
    main()

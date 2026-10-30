---
permalink: /
title: "Jiajun Fan"
excerpt: "CS Ph.D. student at UIUC. I train multimodal generative and agentic models with reinforcement learning &mdash; stable enough to keep improving, autonomous enough to need less human data."
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
/* hide theme page-title visually (hero shows the name); keep for SEO/a11y */
.page__title{position:absolute!important;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}
/* ── Intro ── */
.tagline { font-size: 1.044em; line-height: 1.78; color: #333; margin-bottom: 1em; }

/* ── Internship banner ── */
.internship-banner-pulse {
  animation: bannerPulse 3s ease-in-out infinite;
}
@keyframes bannerPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(47,75,143,0); }
  50% { box-shadow: 0 0 0 6px rgba(47,75,143,0.12); }
}
html body .internship-banner {
  background: linear-gradient(135deg,#e8f4fd,#f0f7ff) !important;
  border: 1px solid #bfdbfe !important;
  border-radius: 8px; padding: 11px 18px;
  margin: 1em 0 1.2em; font-size: 0.907em;
  color: #1e3a5f !important;
}
html body .internship-banner a { color: #23396E !important; font-weight: 700; }
html body .internship-banner strong { color: #1e3a5f !important; }
body.dark-mode .internship-banner {
  background: linear-gradient(135deg,#13243a,#0f1d30) !important;
  border-color: #1f3a5f !important;
  color: #90caf9 !important;
}
body.dark-mode .internship-banner a { color: #9DB8EA !important; }
body.dark-mode .internship-banner strong { color: #90caf9 !important; }

/* ── Quick nav ── */
.quick-nav {
  background: #EEF3FA; border-radius: 8px;
  padding: 9px 16px; margin-bottom: 1.4em;
  font-size: 0.819em; display: flex; flex-wrap: wrap; gap: 4px 6px; align-items: center;
  position: sticky; top: 56px; z-index: 90;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
/* phones and narrow tablets: one swipeable row instead of stacked rows covering the page */
@media (max-width: 799px) {
  .quick-nav { flex-wrap: nowrap; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; gap: 4px 12px; padding: 8px 12px; }
  .quick-nav::-webkit-scrollbar { display: none; }
  .quick-nav a, .quick-nav .qn-label, .quick-nav .qn-cmdk { flex: 0 0 auto; white-space: nowrap; }
  .quick-nav .qn-cmdk { display: none; }
}
.quick-nav a img.qn-ico { width: 14px; height: 14px; object-fit: contain; vertical-align: -2px; margin-right: 5px; }
body.dark-mode .quick-nav a img.qn-ico { filter: brightness(1.5) saturate(1.1); }
.quick-nav a { color: #2F4B8F; text-decoration: none; padding: 2px 6px; border-radius: 5px; transition: background .15s, color .15s; }
.quick-nav a:hover { background: #EEF3FA; }
.quick-nav a.qn-active { background: #2F4B8F; color: #fff !important; }
.qn-label { font-weight: 800; color: #2F4B8F; }
body.dark-mode .qn-label { color: #9DB8EA; }

/* ── Section headers ── */
.section-header {
  display: flex; align-items: center; gap: 10px;
  margin: 2em 0 1em; padding: 0; font-family: Newsreader, Georgia, 'Times New Roman', serif; font-size: 1.534em; font-weight: 500; line-height: 1.2; color: #1a2332;
  letter-spacing: -0.01em; scroll-margin-top: 150px;
  border: none; background: none;
}
.section-header .sh-icon { width: 22px; height: 22px; object-fit: contain; flex-shrink: 0; }
body.dark-mode .section-header .sh-icon { filter: brightness(1.55) saturate(1.1); }
.section-header::after {
  content: ''; flex: 1; height: 2px;
  background: linear-gradient(to right, #2F4B8F, transparent); border-radius: 1px;
}

/* ── News timeline ── */
.news-list { margin: 0; padding: 0; list-style: none; }
.news-list li {
  display: flex; gap: 12px; align-items: flex-start;
  padding: 9px 0; border-bottom: 1px solid #f0f0f0; font-size: 0.906em;
}
.news-list li:last-child { border-bottom: none; }
.news-date { min-width: 78px; color: #767676; font-size: 0.836em; font-weight: 700; padding-top: 2px; }
.nbadge {
  display: inline-block; padding: 1px 7px; border-radius: 4px;
  font-size: 0.771em; font-weight: 800; margin-right: 5px; vertical-align: middle;
}
.nb-top    { background: #F5C8B5; color: #7A3B22; }
.nb-accept { background: #DCE7F5; color: #2F4B8F; }
.nb-service{ background: #EEF0F4; color: #5B6273; }
.nb-upcoming{ background: #E6F0F8; color: #3E6597; }
.nb-code    { background: #EEF0F4; color: #4A5160; }
.nb-talk    { background: #FBE3D8; color: #8A4A2E; }
.nb-finish { background: #DCE7F5; color: #2F4B8F; }
.nb-find { background: #E6F0F8; color: #3E6597; }
.nb-feature { background: #FBE3D8; color: #8A4A2E; }

/* ── Publication list ── */
.pub-list { margin: 0; padding: 0; }
.pub-entry {
  display: grid;
  grid-template-columns: 92px 1fr;
  gap: 16px;
  padding: 18px 0;
  border-bottom: 1px solid #f0f0f0;
  align-items: start;
}
.pub-entry:last-child { border-bottom: none; }
.pub-left {
  display: flex; flex-direction: column;
  gap: 4px; align-items: flex-start; padding-top: 2px;
}
/* Publication thumbnail — now INSIDE pub-right, full-width banner */
.pub-thumb-wrap {
  width: 100%; margin-bottom: 10px;
  border-radius: 8px; overflow: hidden;
  border: 1px solid #e0e8f0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  transition: box-shadow .2s;
}
.pub-thumb-wrap:hover { box-shadow: 0 4px 18px rgba(47,75,143,0.15); }
.pub-thumb-wrap img {
  width: 100%; height: auto; aspect-ratio: 3 / 1; display: block;
  object-fit: contain; object-position: center; background: #FBFAF7;
}
@media(max-width:560px){
  .news-list li { flex-direction: column; gap: 2px; }
  .news-date { min-width: 0; font-size: .78em; padding-top: 0; }
  .pub-entry { grid-template-columns: 1fr; }
  .pub-left { flex-direction: row; gap: 8px; }
  .stats-row { gap: 8px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
.pb { /* pub badge */
  display: inline-block; padding: 3px 8px; border-radius: 5px;
  font-size: 0.70em; font-weight: 900; letter-spacing: 0.02em; white-space: nowrap; line-height: 1.4;
}
.pb-oral   { background: #F5C8B5; color: #7A3B22; }
.pb-iclr   { background: #2F4B8F; color: #fff; }
.pb-neurips{ background: #2F4B8F; color: #fff; }
.pb-icml   { background: #2F4B8F; color: #fff; }
.pb-journal{ background: #2F4B8F; color: #fff; }
.pb-arxiv  { background: #546e7a; color: #fff; }
.pub-year  { font-size: 0.76em; color: #767676; font-weight: 700; }
.pub-title { font-weight: 700; font-size: 0.994em; color: #1a2332; line-height: 1.4; position: relative; cursor: default; }
.pub-abst-btn {
  display: inline-block; margin-left: 6px; font-size: 0.738em; font-weight: 700;
  color: #2F4B8F; cursor: pointer; background: #EEF3FA; border-radius: 8px;
  padding: 1px 7px; vertical-align: middle; user-select: none;
  transition: background .15s; border: none;
  -webkit-user-select: none;
}
.pub-abst-btn:hover { background: #bfdbfe; }
body.dark-mode .pub-abst-btn { background: #1A2333; color: #9DB8EA; }
body.dark-mode .pub-abst-btn:hover { background: #1e40af; }
@media (max-width: 640px) { .pub-abst-btn { padding: 6px 10px; } }
.pub-title a { color: #2F4B8F; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; text-decoration-color: rgba(47,75,143,.28); }
.pub-title a:hover { text-decoration: underline; }
.pub-authors { font-size: 0.819em; color: #6b7280; margin-top: 3px; }
.pub-authors strong { color: #1a2332; font-weight: 700; }
.pub-desc { font-size: 0.819em; color: #444; margin-top: 4px; line-height: 1.55; }
.dt-ico{display:inline-block;width:1.05em;height:1.05em;background-color:currentColor;-webkit-mask:url(/images/icons/h-moon.png) center/contain no-repeat;mask:url(/images/icons/h-moon.png) center/contain no-repeat;} body.dark-mode .dt-ico{-webkit-mask-image:url(/images/icons/h-sun.png);mask-image:url(/images/icons/h-sun.png);} .g-ico{display:inline-block;width:1.05em;height:1.05em;object-fit:contain;vertical-align:-0.16em;margin:0 2px;}
.lbl-ico{display:inline-block;width:1em;height:1em;vertical-align:-0.14em;margin-right:4px;background-color:currentColor;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;flex-shrink:0;}
.pub-hl {
  display: inline-block; background: #FBEDE6;
  border-left: 3px solid #E39A7A; padding: 2px 9px;
  border-radius: 0 4px 4px 0; font-size: 0.76em;
  color: #7A3B22; margin-top: 5px; font-weight: 700;
}
.pub-project {
  display: inline-block; margin-left: 6px;
  background: #EEF3FA; color: #23396E;
  border-radius: 4px; padding: 1px 7px; font-size: 0.74em; font-weight: 700;
  text-decoration: none !important;
}
.pub-project:hover { background: #bbdefb; }

/* ── Research grid ── */
.research-grid {
  display: grid; grid-template-columns: repeat(2,1fr); gap: 14px; margin-bottom: 1.5em;
}
.research-card {
  background: #fff; border: 1.5px solid #e0e8f0; border-radius: 12px;
  padding: 16px; transition: border-color .2s, box-shadow .2s;
}
.research-card:hover { border-color: #2F4B8F; box-shadow: 0 4px 14px rgba(47,75,143,.12); }
.rc-icon-img { width: 46px; height: 46px; object-fit: contain; margin-bottom: 10px; display: block; }
body.dark-mode .rc-icon-img { filter: brightness(1.35) !important; }
.rc-title { font-weight: 800; font-size: 0.907em; color: #1a2332; margin-bottom: 5px;  line-height:1.3; text-wrap:balance;}
.rc-desc  { font-size: 0.819em; color: #555; line-height: 1.55; }

/* ── Research overview: domain map (mirrors /publications/) ── */
.ro-home { margin: 0 0 1.7em; }
.ro-rows { display: grid; gap: 0; }
.ro-row { display: grid; grid-template-columns: 13.4em 1fr; gap: 18px; align-items: baseline;
  padding: 13px 0; border-bottom: 1px solid #e0e8f0; }
.ro-row:last-child { border-bottom: none; }
.ro-dom { font-size: 0.86rem; font-weight: 700; color: #1a2332; line-height: 1.4; }
.ro-dom span { display: block; font-weight: 500; font-size: 0.78rem; color: #767676; margin-top: 2px; }
.ro-papers { display: flex; flex-wrap: wrap; gap: 7px 9px; align-items: center; }
.ro-p { display: inline-flex; align-items: baseline; gap: 6px; font-size: 0.861rem; font-weight: 600;
  padding: 2px 4px; border-radius: 6px; text-decoration: none !important; }
/* the theme's `.page__content a` outranks a bare `.ro-p`, which would turn the paper
   names pure blue; scope it to .ro-home so the name stays dark and only the venue chip is blue */
.ro-home a.ro-p, .ro-home .ro-p.nolink { color: #333 !important; }
.ro-home a.ro-p:hover { color: #2F4B8F !important; background: rgba(47,75,143,.07); }
.ro-v { font-size: 0.667rem; font-weight: 700; letter-spacing: .04em; color: #2F4B8F;
  background: #f1f4f8; border: 1px solid #e0e8f0; border-radius: 20px; padding: 1px 8px; white-space: nowrap; }
body.dark-mode .ro-row { border-bottom-color: #30363d; }
body.dark-mode .ro-dom { color: #e6edf3; }
body.dark-mode .ro-dom span { color: #8b949e; }
body.dark-mode .ro-home a.ro-p, body.dark-mode .ro-home .ro-p.nolink { color: #cdd9e5 !important; }
body.dark-mode .ro-home a.ro-p:hover { color: #9DB8EA !important; background: rgba(157,184,234,.10); }
body.dark-mode .ro-v { color: #9DB8EA; background: #161b22; border-color: #30363d; }
@media (max-width: 820px) {
  .ro-row { grid-template-columns: 1fr; gap: 7px; }
  .ro-dom span { display: inline; margin-left: 6px; }
}

/* ── Stats row ── */
.stats-row { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 1.2em 0 1.6em; }
@media (max-width: 560px) { .stats-row { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; } }
.cit-chart{background:#fff;border:1.5px solid #e0e8f0;border-radius:12px;padding:16px 20px 12px;margin:0 0 1.8em;}
.cit-chart-head{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:4px;margin-bottom:12px;}
.cit-chart-title{font-weight:800;font-size:0.907em;color:#1a2332; line-height:1.3; text-wrap:balance;}
.cit-chart-sub{font-size:0.7em;color:#767676;}
.cit-bars{display:flex;align-items:stretch;gap:10px;height:170px;}
.cit-bar{flex:1;display:flex;flex-direction:column;align-items:center;}
.cit-bar-track{flex:1;width:100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;}
.cit-bar-fill{position:relative;width:100%;max-width:44px;min-height:3px;background:linear-gradient(to top,#2F4B8F,#6F94C6);border-radius:5px 5px 0 0;animation:citBarIn .7s ease both;}
.cit-bar.ytd .cit-bar-fill{background:linear-gradient(to top,#6F94C6,#BFD8EC);}
.cit-bar-val{position:absolute;top:-16px;left:-6px;right:-6px;text-align:center;font-size:0.68em;font-weight:800;color:#2F4B8F;}
.cit-bar.ytd .cit-bar-val{color:#6F94C6;}
.cit-bar-year{margin-top:6px;font-size:0.7em;color:#595959;font-weight:600;white-space:nowrap;}
.cit-ytd{color:#6F94C6;margin-left:1px;}
@keyframes citBarIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
body.dark-mode .cit-chart{background:#161b22;border-color:#30363d;}
body.dark-mode .cit-chart-title{color:#e6edf3;}
body.dark-mode .cit-bar-year{color:#8b949e;}
@media (prefers-reduced-motion:reduce){.cit-bar-fill{animation:none;}}
.ct-svg, .cit-chart .ct-svg{width:100%;height:auto;display:block;overflow:visible;}
.ct-area{fill:url(#ctArea);opacity:0;animation:ctFade .9s ease .45s forwards;}
.ct-line{fill:none;stroke:url(#ctLine);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;animation:ctDraw 1.5s cubic-bezier(.4,0,.2,1) forwards;}
.ct-dot{fill:#6F94C6;stroke:#fff;stroke-width:1.5;opacity:0;animation:ctFade .5s ease 1.2s forwards;}
.ct-dot-last{fill:#2F4B8F;}
.ct-val{fill:#2F4B8F;font-size:11px;font-weight:800;text-anchor:middle;opacity:0;animation:ctFade .5s ease 1.3s forwards;}
.ct-val-last{fill:#2F4B8F;}
.ct-year{fill:#64748b;font-size:11px;font-weight:600;text-anchor:middle;}
/* the SVG scales with the column, so on a phone 11px lands near 4px on screen */
@media(max-width:620px){.ct-val,.ct-year{font-size:20px;}}
@keyframes ctDraw{to{stroke-dashoffset:0;}}
@keyframes ctFade{to{opacity:1;}}
body.dark-mode .ct-year{fill:#8b949e;}
body.dark-mode .ct-dot{stroke:#161b22;}
body.dark-mode .ct-val{fill:#9DB8EA;} body.dark-mode .ct-val-last{fill:#9DB8EA;}
body.dark-mode .ct-dot{fill:#9DB8EA;} body.dark-mode .ct-dot-last{fill:#9DB8EA;}
@media (prefers-reduced-motion:reduce){.ct-line{animation:none;stroke-dashoffset:0;}.ct-area,.ct-dot,.ct-val{animation:none;opacity:1;}}

.stat-card {
  flex: 1 1 130px; background: #fff;
  border: 1.5px solid #e0e8f0; border-radius: 12px;
  padding: 14px 16px; text-align: center;
  box-shadow: 0 2px 8px rgba(47,75,143,.07);
  transition: transform .2s, box-shadow .2s;
  animation: fadeUp .5s ease both;
}
.stat-card:hover { transform: translateY(-3px); box-shadow: 0 6px 18px rgba(47,75,143,.15); }
.stat-number { font-size: 1.871em; font-weight: 900; color: #2F4B8F; line-height: 1.1; }
.stat-label  { font-size: 0.76em; color: #595959; margin-top: 4px; line-height: 1.35; }

/* ── Animated hero banner ── */
@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.hero-banner {
  background: linear-gradient(-45deg, #0a1626, #16345a, #1565c0, #0a2540, #0d47a1);
  background-size: 400% 400%;
  animation: gradientShift 16s ease infinite;
  border-radius: 18px;
  padding: 46px 32px 38px;
  margin-bottom: 1.8em;
  text-align: center;
  color: #fff;
  box-shadow: 0 10px 40px rgba(13,40,90,0.28), inset 0 1px 0 rgba(255,255,255,0.08);
  position: relative; overflow: hidden;
}
/* soft radial vignette for depth */
.hero-banner::after {
  content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 0;
  background: radial-gradient(120% 90% at 50% 0%, rgba(255,255,255,0.10), transparent 55%);
}
.hero-name {
  font-size: 2.456em;
  font-weight: 900;
  color: #fff;
  margin: 0 0 8px;
  padding: 0;
  letter-spacing: -0.025em;
  line-height: 1.1;
  border: none;
}
.hero-subtitle {
  font-size: 1em;
  color: #EEF3FA;
  margin-bottom: 16px;
  font-weight: 500;
  letter-spacing: 0.01em;
}
.hero-pills {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  max-width: 640px;
  margin: 0 auto 20px;
}
.hero-pills .hero-pill { text-align: center; white-space: normal; line-height: 1.35; text-wrap: balance; display: flex; align-items: center; justify-content: center; }
@media (max-width: 700px) { .hero-pills { grid-template-columns: 1fr; max-width: 340px; } }
.hero-pill {
  background: rgba(255,255,255,0.10);
  border: 1px solid rgba(255,255,255,0.20);
  color: #eaf3ff;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.80em;
  font-weight: 600;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  white-space: nowrap;
  transition: background .2s, border-color .2s, transform .15s;
}
.hero-pill:hover { background: rgba(255,255,255,0.17); border-color: rgba(255,255,255,0.4); transform: translateY(-1px); }
.hero-links {
  display: flex;
  gap: 9px;
  justify-content: center;
  flex-wrap: wrap;
}
.hero-ico { width: 16px; height: 16px; object-fit: contain; filter: brightness(0) invert(1); flex-shrink: 0; }
.hero-pill .hero-ico { width: 15px; height: 15px; vertical-align: -3px; margin-right: 5px; }
.hero-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.22);
  color: #fff !important;
  padding: 7px 16px;
  border-radius: 9px;
  font-size: 0.82em;
  font-weight: 700;
  text-decoration: none !important;
  transition: background .2s, transform .15s, box-shadow .2s, border-color .2s;
}
.hero-link:hover {
  background: rgba(255,255,255,0.92); color: #23396E !important;
  border-color: rgba(255,255,255,0.92);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.22);
}

/* ── Stat card animation ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.stat-card:nth-child(1) { animation-delay: .05s; }
.stat-card:nth-child(2) { animation-delay: .12s; }
.stat-card:nth-child(3) { animation-delay: .19s; }
.stat-card:nth-child(4) { animation-delay: .26s; }
.stat-card:nth-child(5) { animation-delay: .33s; }
.stat-card:nth-child(6) { animation-delay: .40s; }

/* ── Featured projects grid ── */
.featured-grid {
  display: grid; grid-template-columns: repeat(2,1fr); gap: 18px; margin-bottom: 1.8em;
}
.featured-card {
  border-radius: 12px; overflow: hidden;
  border: 1.5px solid #e0e8f0;
  background: #fff;
  position: relative;
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s;
  text-decoration: none !important; color: inherit;
  display: flex; flex-direction: column;
}
.featured-card:hover { box-shadow: 0 12px 36px rgba(47,75,143,.22); border-color: #2F4B8F; }
.featured-img {
  width: 100%; height: auto; aspect-ratio: 3 / 1; object-fit: contain; object-position: center; background: #FBFAF7;
  border-bottom: 1px solid #e0e8f0;
}
.featured-body { padding: 14px 16px; flex: 1; display: flex; flex-direction: column; }
.featured-venue {
  display: inline-block; padding: 2px 8px; border-radius: 4px;
  font-size: 0.702em; font-weight: 800; margin-bottom: 6px; width: fit-content;
}
.fv-iclr26 { background: #2F4B8F; color: #fff; }
.fv-neurips { background: #2F4B8F; color: #fff; }
.fv-iclr25 { background: #2F4B8F; color: #fff; }
.featured-title { font-weight: 800; font-size: 1em; color: #1a2332; line-height: 1.3; margin-bottom: 6px; text-wrap: balance; }
.featured-desc { font-size: 0.906em; color: #555; line-height: 1.55; flex: 1; }
.featured-stat {
  margin-top: 8px; font-size: 0.76em; font-weight: 700;
  color: #7A3B22; background: #FBEDE6;
  padding: 3px 8px; border-radius: 4px; border-left: 3px solid #E39A7A;
  width: fit-content;
  text-wrap: balance;
}

/* ── LBC featured card placeholder ── */
.fv-iclr23oral { background: #F5C8B5; color: #7A3B22; }
body.dark-mode .fv-iclr23oral { background: #9A6E5D !important; color: #FBE3D8 !important; }

/* ── Pub link buttons ── */
.pub-links { display: flex; gap: 5px; margin-top: 5px; flex-wrap: wrap; }
/* ── Publication action pills: one shape, one size, a soft tint per kind ── */
.pub-links { display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap; align-items: center; }
.pub-links .pub-link, .pub-links .cite-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-family: inherit; font-size: 0.76em; font-weight: 600; line-height: 1.15; letter-spacing: .01em;
  padding: 6px 11px; border-radius: 999px; border: 1px solid transparent;
  text-decoration: none !important; white-space: nowrap; cursor: pointer;
  transition: background .15s, border-color .15s, transform .15s;
}
.pub-links .pub-link:hover { transform: translateY(-1px); }
.pub-links .pub-link .lbl-ico, .pub-links .cite-badge .lbl-ico { width: 1.05em; height: 1.05em; margin: 0; }
/* link chips: three palette groups — primary (paper, project), media (video, arXiv, code), neutral (cite, press, count) */
.page__content .pub-links .pl-paper, .page__content .pub-links .pl-project { background: #EEF3FA; border-color: #BFD8EC; color: #2F4B8F; }
.page__content .pub-links .pl-video, .page__content .pub-links .pl-arxiv, .page__content .pub-links .pl-code { background: #FBEDE6; border-color: #F5C8B5; color: #8A4A2E; }
.page__content .pub-links .pl-press, .pub-links .pl-cite { background: #F3F4F6; border-color: #DDE2EA; color: #4A5160; font-family: inherit; }
.pub-links .cite-badge { background: transparent; border-color: #DDE2EA; color: #4A5160; cursor: default; }
.page__content .pub-links .pl-paper:hover, .page__content .pub-links .pl-project:hover { border-color: #6F94C6; }
.page__content .pub-links .pl-video:hover, .page__content .pub-links .pl-arxiv:hover, .page__content .pub-links .pl-code:hover { border-color: #E39A7A; }
.page__content .pub-links .pl-press:hover, .pub-links .pl-cite:hover { border-color: #BFC6D2; }
.pub-links .pl-video::before { content: ''; display: inline-block; border-left: 6px solid currentColor; border-top: 4px solid transparent; border-bottom: 4px solid transparent; margin-right: 1px; }
body.dark-mode .page__content .pub-links .pl-paper, body.dark-mode .page__content .pub-links .pl-project { background: #1A2333 !important; border-color: #2B3A55 !important; color: #9DB8EA !important; }
body.dark-mode .page__content .pub-links .pl-video, body.dark-mode .page__content .pub-links .pl-arxiv, body.dark-mode .page__content .pub-links .pl-code { background: #2B1E19 !important; border-color: #4A3128 !important; color: #E9A98C !important; }
body.dark-mode .page__content .pub-links .pl-press, body.dark-mode .pub-links .pl-cite { background: #1A1F27 !important; border-color: #2A303A !important; color: #A6ADBB !important; }
body.dark-mode .pub-links .cite-badge { background: transparent !important; border-color: #2A303A !important; color: #A6ADBB !important; }

/* ── Research timeline ── */
.research-timeline {
  position: relative; padding-left: 28px; margin: 1em 0 1.6em;
}
.research-timeline::before {
  content: ''; position: absolute; left: 8px; top: 0; bottom: 0;
  width: 3px; background: linear-gradient(to bottom, #2F4B8F, #6F94C6, #E39A7A);
  border-radius: 2px;
}
.rt-item {
  position: relative; padding: 10px 0 18px; font-size: 0.88em;
}
.rt-item::before {
  content: ''; position: absolute; left: -24px; top: 14px;
  width: 11px; height: 11px; border-radius: 50%;
  background: #fff; border: 3px solid #2F4B8F;
  z-index: 1;
}
.rt-item:nth-child(2)::before { border-color: #6F94C6; }
.rt-item:nth-child(3)::before { border-color: #E39A7A; }
.rt-item:nth-child(4)::before { border-color: #8F97A8; }
.rt-year { font-weight: 800; color: #2F4B8F; font-size: 0.82em; }
.rt-title { font-weight: 700; color: #1a2332; margin-top: 2px; }
.rt-desc { color: #555; font-size: 0.92em; line-height: 1.6; margin-top: 2px; }
.rt-item-ongoing { opacity: 0.7; }
.rt-year-ongoing { color: #e65100; }
body.dark-mode .rt-year-ongoing { color: #fb923c !important; }

/* ── Scroll-to-top button ── */
.scroll-top {
  position: fixed; bottom: 28px; right: 28px; z-index: 999;
  width: 40px; height: 40px; border-radius: 50%;
  background: #2F4B8F; color: #fff; border: none; cursor: pointer;
  font-size: 1.1em; display: none; align-items: center; justify-content: center;
  box-shadow: 0 4px 14px rgba(47,75,143,.35);
  transition: opacity .3s, transform .3s;
}
.scroll-top:hover { transform: scale(1.1); }
.scroll-top.show { display: flex; }

/* ── News toggle ── */
.news-list li.news-hidden { display: none; }  /* must outrank .news-list li{display:flex} */
.news-toggle {
  background: none; border: 1px solid #ddd; border-radius: 6px;
  padding: 5px 14px; font-size: 0.82em; color: #2F4B8F;
  cursor: pointer; font-weight: 700; margin-top: 6px;
  transition: background .15s;
}
.news-toggle:hover { background: #EEF3FA; }

/* ── Image comparison slider (reserved for future use) ── */

/* ── Hover glow on featured cards ── */
.featured-card::after {
  content: ''; position: absolute; inset: 0;
  border-radius: 12px;
  opacity: 0;
  background: linear-gradient(135deg, rgba(47,75,143,0.06), transparent);
  transition: opacity .3s;
  pointer-events: none;
}
.featured-card:hover::after { opacity: 1; }

/* ── Dark mode ── */
.dark-toggle {
  position: fixed; bottom: 28px; right: 78px; z-index: 999;
  width: 40px; height: 40px; border-radius: 50%;
  background: #fff; color: #2F4B8F; border: 1.5px solid rgba(0,0,0,.15);
  cursor: pointer; font-size: 1.1em;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 14px rgba(0,0,0,.25);
  transition: transform .3s, box-shadow .3s, background .3s, color .3s, border-color .3s;
}
.dark-toggle:hover { transform: scale(1.1); box-shadow: 0 6px 20px rgba(0,0,0,.35); }
body.dark-mode .dark-toggle { background: #1A2333; color: #F5C8B5; border-color: #2B3A55; }

/* ── Dark mode: Base ── */
body.dark-mode { background: #0d1117 !important; color: #c9d1d9 !important; }
body.dark-mode .page__content { color: #c9d1d9 !important; }

/* ── Dark mode: Masthead / Nav ── */
body.dark-mode .masthead {
  background: #161b22 !important;
  border-bottom: 2px solid #21262d !important;
  box-shadow: 0 1px 8px rgba(0,0,0,0.4) !important;
}
body.dark-mode .site-title { color: #e6edf3 !important; }
body.dark-mode .greedy-nav { background: #161b22 !important; }
body.dark-mode .greedy-nav a { color: #8b949e !important; }
body.dark-mode .greedy-nav a:hover { color: #9DB8EA !important; }
body.dark-mode .greedy-nav .visible-links a::before { background: #9DB8EA !important; }

/* ── Dark mode: Sidebar ── */
body.dark-mode .sidebar { background: #0d1117 !important; }
body.dark-mode .author__name { color: #e6edf3 !important; }
body.dark-mode .author__bio, body.dark-mode .author__bio span { color: #8b949e !important; }
body.dark-mode .author__bio a { color: #9DB8EA !important; }
body.dark-mode .author__avatar img { border-color: #5E77A8 !important; box-shadow: 0 4px 20px rgba(157,184,234,0.2) !important; }
body.dark-mode .author__urls a { color: #9DB8EA !important; }
body.dark-mode .author__urls-wrapper .btn { background: #21262d !important; color: #c9d1d9 !important; border-color: #30363d !important; }

/* ── Dark mode: Page Title ── */
body.dark-mode .page__title { color: #e6edf3 !important; }

/* ── Dark mode: Hero ── */
body.dark-mode .hero-banner { box-shadow: 0 8px 32px rgba(0,0,0,0.5) !important; }

/* ── Dark mode: Cards & Sections ── */
body.dark-mode .featured-card,
body.dark-mode .research-card,
body.dark-mode .stat-card {
  background: #161b22 !important; border-color: #30363d !important; color: #c9d1d9 !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
}
body.dark-mode .featured-card:hover,
body.dark-mode .research-card:hover,
body.dark-mode .stat-card:hover {
  border-color: #5E77A8 !important; box-shadow: 0 6px 18px rgba(157,184,234,.15) !important;
}
body.dark-mode .featured-img { border-bottom-color: #30363d !important; }

/* ── Dark mode: Section Headers ── */
body.dark-mode .section-header { color: #e6edf3 !important; border-bottom-color: #21262d !important; }
body.dark-mode .section-header::after { background: linear-gradient(to right, #5E77A8, transparent) !important; }

/* ── Dark mode: Text ── */
body.dark-mode .pub-title, body.dark-mode .pub-title a,
body.dark-mode .rc-title, body.dark-mode .featured-title,
body.dark-mode .rt-title { color: #e6edf3 !important; }
body.dark-mode .pub-desc, body.dark-mode .rc-desc,
body.dark-mode .featured-desc, body.dark-mode .rt-desc,
body.dark-mode .tagline, body.dark-mode p { color: #8b949e !important; }
body.dark-mode .pub-authors { color: #8b949e !important; }
body.dark-mode .pub-authors strong { color: #e6edf3 !important; }
body.dark-mode a { color: #9DB8EA !important; }
body.dark-mode .page__content a { color: #9DB8EA !important; }
body.dark-mode .hero-banner a.hero-link { color: #fff !important; }
body.dark-mode .hero-banner a.hero-link:hover, body.dark-mode .hero-banner a.hero-link:focus-visible { color: #24396E !important; }

/* ── Dark mode: Borders ── */
body.dark-mode .pub-entry { border-bottom-color: #21262d !important; }
body.dark-mode .news-list li { border-bottom-color: #21262d !important; }
body.dark-mode .pub-thumb-wrap { border-color: #30363d !important; }

/* ── Dark mode: Quick Nav & Banners ── */
body.dark-mode .quick-nav { background: #1c2333 !important; }
body.dark-mode .quick-nav a,
body.dark-mode .quick-nav span { color: #9DB8EA !important; }
body.dark-mode .quick-nav a:hover { background: #21262d !important; }
/* Active link in dark mode: white on navy #2F4B8F (site palette) */
body.dark-mode .quick-nav a.qn-active { background: #2F4B8F !important; color: #fff !important; }
/* banner-pulse dark mode needs no re-declaration — animation already inherited */

/* ── Dark mode: Badges & Highlights ── */
body.dark-mode .pub-hl { background: #2A2220 !important; color: #F2C3AE !important; border-left-color: #E9A98C !important; }
body.dark-mode .stat-number { color: #9DB8EA !important; }
body.dark-mode .stat-label { color: #8b949e !important; }
body.dark-mode .stat-label em { color: #8b949e !important; }
/* Override inline-styled secondary text colors that fail contrast on dark bg */
body.dark-mode p[style*="color:#767676"],
body.dark-mode p[style*="color:#595959"],
body.dark-mode li[style*="color:#767676"],
body.dark-mode span[style*="color:#767676"] { color: #8b949e !important; }
body.dark-mode .pub-project { background: #1c2333 !important; color: #9DB8EA !important; }
body.dark-mode .pub-project:hover { background: #1e3a5f !important; }

/* ── BibTeX cite button & popup ── */
.bib-popup { position: absolute; z-index: 9995; display: none; background: #fff; border: 1.5px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; box-shadow: 0 8px 32px rgba(0,0,0,.14); }
.bib-popup.show { display: block; }
.bib-pre { background: #f8fafc; border-radius: 6px; padding: 10px 12px; font-size: 0.76em; overflow-x: auto; white-space: pre; color: #1e293b; border: 1px solid #e2e8f0; margin: 0 0 10px; }
.bib-actions { display: flex; gap: 8px; }
.bib-copy { background: #2F4B8F; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 0.83em; font-weight: 600; transition: background .15s; }
.bib-copy:hover { background: #23396E; }
.bib-close { background: #f1f5f9; color: #4a5568; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 0.83em; font-weight: 600; }
.bib-close:hover { background: #e2e8f0; }
body.dark-mode .bib-popup { background: #161b22 !important; border-color: #30363d !important; }
body.dark-mode .bib-pre { background: #0d1117 !important; color: #c9d1d9 !important; border-color: #30363d !important; }
body.dark-mode .bib-copy { background: #2F4B8F !important; color: #fff !important; }
body.dark-mode .bib-copy:hover { background: #3F5F86 !important; }
body.dark-mode .bib-close { background: #21262d !important; color: #8b949e !important; }
body.dark-mode .bib-close:hover { background: #30363d !important; color: #c9d1d9 !important; }

/* ── Dark mode: News badges ── */
body.dark-mode .nbadge.nb-accept { background: #1E2A44 !important; color: #9DB8EA !important; }
body.dark-mode .nbadge.nb-finish { background: #1E2A44 !important; color: #9DB8EA !important; }
body.dark-mode .nbadge.nb-find { background: #1B2A3C !important; color: #7FA6D3 !important; }
body.dark-mode .nbadge.nb-feature { background: #33241F !important; color: #F2C3AE !important; }
body.dark-mode .nbadge.nb-talk { background: #33241F !important; color: #F2C3AE !important; }
body.dark-mode .nbadge.nb-code { background: #262B33 !important; color: #A6ADBB !important; }
body.dark-mode .nbadge.nb-top { background: #33241F !important; color: #F2C3AE !important; }
body.dark-mode .nbadge.nb-service { background: #21262d !important; color: #8b949e !important; }
body.dark-mode .nbadge.nb-upcoming { background: #1B2A3C !important; color: #7FA6D3 !important; }
body.dark-mode .news-date { color: #8b949e !important; }
body.dark-mode .news-toggle { border-color: #30363d !important; color: #9DB8EA !important; }
body.dark-mode .news-toggle:hover { background: #161b22 !important; }

/* ── Dark mode: Research Vision ── */
body.dark-mode blockquote { background: #161b22 !important; border-left-color: #7FA6D3 !important; color: #c9d1d9 !important; }
body.dark-mode blockquote p { color: #c9d1d9 !important; }
body.dark-mode .rt-year { color: #9DB8EA !important; }
body.dark-mode .research-timeline::before { background: linear-gradient(to bottom, #9DB8EA, #7FA6D3, #E9A98C) !important; }
body.dark-mode .rt-item::before { border-color: #5E77A8 !important; background: #0d1117 !important; }

/* ── Awards grid ── */
.awards-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 1.5em;
}
@media(max-width:560px){ .awards-grid { grid-template-columns: 1fr; } }

/* ── Vision blockquote ── */
.vision-quote {
  background: #F1F5FB; border-left: 4px solid #2F4B8F;
  border-radius: 0 8px 8px 0; padding: 14px 20px;
  color: #333; font-style: normal; margin-bottom: 1em;
}
.vision-quote-title {
  margin: 0 0 6px; font-weight: 800; color: #2F4B8F; font-size: 1.046em;
 line-height:1.3; text-wrap:balance;}
.vision-quote-body { margin: 0; font-size: 0.962em; line-height: 1.75; }
body.dark-mode .vision-quote { background: #161b22 !important; border-left-color: #7FA6D3 !important; }
body.dark-mode .vision-quote-title { color: #c9d1d9 !important; }
body.dark-mode .vision-quote-body { color: #8b949e !important; }

/* ── Global focus ring (WCAG 2.4.7) ── */
a:focus-visible, button:focus-visible, input:focus-visible, [tabindex]:focus-visible {
  outline: 2px solid #2F4B8F; outline-offset: 2px; border-radius: 4px;
}
body.dark-mode a:focus-visible,
body.dark-mode button:focus-visible,
body.dark-mode input:focus-visible { outline-color: #9DB8EA; }

/* ── Placeholder text ── */
.filter-search::placeholder, .ra-input::placeholder { color: #767676; }
body.dark-mode .filter-search::placeholder,
body.dark-mode .ra-input::placeholder { color: #8b949e; }

/* ── Input / button appearance reset (iOS Safari) ── */
.filter-search, .ra-input, .filter-btn, .news-toggle {
  -webkit-appearance: none; appearance: none;
}

/* ── Print styles ── */
@media print {
  /* the page paints through .dark-mode overrides, so a dark-mode visitor would
     otherwise print white-on-white (mirrors publications/index.html) */
  /* enumerating selectors could never keep up with 190+ dark-mode rules, so reset
     everything to ink-on-paper and re-colour only the few marks that carry meaning */
  body.dark-mode, body.dark-mode * {
    background-image: none !important; background-color: #fff !important; color: #000 !important;
    border-color: #ccc !important; box-shadow: none !important;
  }
  body.dark-mode a { color: #2F4B8F !important; }
  body.dark-mode .ct-val { fill: #2F4B8F !important; }
  body.dark-mode .ct-year, body.dark-mode .ct-bar { fill: #64748b !important; }
  body.dark-mode .ro-v { background: #fff !important; color: #000 !important; border-color: #ccc !important; }
  body.dark-mode .ro-row { border-bottom-color: #ccc !important; }
  .scroll-top, .dark-toggle, .ra-btn, .ra-panel, .quick-nav,
  #read-progress, .hero-particles, .pub-filter-bar { display: none !important; }
  .hero-banner { background: none !important; color: #000 !important; box-shadow: none !important; }
  .hero-name, .hero-subtitle { color: #000 !important; }
  body, .page__content { color: #000 !important; background: #fff !important; }
  a[href^="http"]::after { content: " (" attr(href) ")"; font-size: 0.8em; }
  .pub-entry, .featured-card { break-inside: avoid; }
  .hero-pills, .hero-links { display: none !important; }
}

/* ── Awards section headings ── */
.awards-col-title {
  font-weight: 800; margin-bottom: 8px; color: #1a2332;
}
.awards-col-list {
  font-size: 0.906em; color: #444; line-height: 2; padding-left: 1.2em; margin: 0;
}

/* ── Dark mode: Awards ── */
body.dark-mode ul li { color: #8b949e !important; }
body.dark-mode ul li strong { color: #e6edf3 !important; }
body.dark-mode .awards-col-title { color: #e6edf3 !important; }
body.dark-mode .awards-col-list { color: #8b949e !important; }

/* ── Dark mode: Footer ── */
body.dark-mode .page__footer { background: #0B0F16 !important; }
body.dark-mode .page__footer a { color: #9DB8EA !important; }
body.dark-mode .page__footer-follow .social-icons .fa { color: #9DB8EA !important; }
body.dark-mode .page__footer-copyright { color: #8b949e !important; }

/* ── Dark mode: Scroll-top ── */
body.dark-mode .scroll-top { background: #2F4B8F !important; box-shadow: 0 4px 14px rgba(157,184,234,.3) !important; }

/* ── Dark mode: Featured stat ── */
body.dark-mode .featured-stat { background: #2A2220 !important; color: #F2C3AE !important; border-left-color: #E9A98C !important; }
body.dark-mode .fv-iclr26  { background: #2F4B8F !important; color: #E3EEFA !important; }
body.dark-mode .fv-neurips { background: #2F4B8F !important; color: #E3EEFA !important; }
body.dark-mode .fv-iclr25  { background: #2F4B8F !important; color: #E3EEFA !important; }

/* ── Dark mode: Misc ── */
body.dark-mode .page__content h2 { color: #e6edf3 !important; }
body.dark-mode .page__content h3 { color: #e6edf3 !important; }
body.dark-mode .page__content blockquote { background: #161b22 !important; }
body.dark-mode .page__inner-wrap { background: #0d1117 !important; }
body.dark-mode #main { background: #0d1117 !important; }
body.dark-mode .page { background: #0d1117 !important; }

/* ── Animated counters ── */
.stat-number[data-target] { transition: none; }

/* ── Particle canvas ── */
/* ── AI Research Assistant chat widget ── */
.ra-btn { position: fixed; bottom: 68px; right: 22px; width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg,#2F4B8F,#2F4B8F); color: #fff; font-size: 1.3em; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 16px rgba(47,75,143,.4); z-index: 9990; transition: transform .2s, box-shadow .2s; user-select: none; -webkit-user-select: none; }
.ra-btn:hover { transform: scale(1.1); box-shadow: 0 6px 22px rgba(47,75,143,.5); }
.ra-panel { position: fixed; bottom: 120px; right: 22px; width: 320px; height: 440px; max-height: calc(100vh - 140px); background: #fff; border-radius: 16px; box-shadow: 0 12px 48px rgba(0,0,0,.18); display: flex; flex-direction: column; z-index: 9991; transform: scale(0.85) translateY(20px); opacity: 0; visibility: hidden; pointer-events: none; transition: transform .2s, opacity .2s, visibility .2s; transform-origin: bottom right; border: 1.5px solid #e5e7eb; }
.ra-panel.show { transform: scale(1) translateY(0); opacity: 1; visibility: visible; pointer-events: all; }
.ra-header { background: linear-gradient(135deg,#2F4B8F,#2F4B8F); color: #fff; padding: 12px 14px; border-radius: 14px 14px 0 0; display: flex; justify-content: space-between; align-items: center; font-weight: 700; font-size: 0.9em; }
.ra-close { background: rgba(255,255,255,.2); border: none; color: #fff; width: 24px; height: 24px; border-radius: 50%; cursor: pointer; font-size: 0.85em; display: flex; align-items: center; justify-content: center; }
.ra-close:hover { background: rgba(255,255,255,.35); }
.ra-msgs { flex: 1; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 8px; }
.ra-msg { max-width: 85%; padding: 8px 12px; border-radius: 12px; font-size: 0.82em; line-height: 1.5; overflow-wrap: anywhere; }
.ra-user { align-self: flex-end; background: #2F4B8F; color: #fff; border-radius: 12px 12px 2px 12px; }
.ra-bot { align-self: flex-start; background: #f1f5f9; color: #1e293b; border-radius: 12px 12px 12px 2px; }
.ra-typing { display: flex; gap: 4px; align-items: center; padding: 10px 14px; }
.ra-typing span { width: 7px; height: 7px; border-radius: 50%; background: #94a3b8; animation: ra-dot 1.2s infinite; }
.ra-typing span:nth-child(2) { animation-delay: .2s; }
.ra-typing span:nth-child(3) { animation-delay: .4s; }
@keyframes ra-dot { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-5px)} }
.ra-chips { display: flex; flex-wrap: wrap; gap: 6px; padding: 8px 10px 4px; border-top: 1.5px solid #e5e7eb; }
.ra-chip { background: #eff6ff; color: #23396E; border: 1.5px solid #bfdbfe; border-radius: 999px; padding: 3px 11px; font-size: 0.75em; font-weight: 700; cursor: pointer; transition: background .15s, transform .1s; white-space: nowrap; }
.ra-chip:hover { background: #EEF3FA; transform: translateY(-1px); }
.ra-chips.hidden { display: none; }
body.dark-mode .ra-chip { background: #1c2333 !important; color: #9DB8EA !important; border-color: #1f3a6e !important; }
.ra-input-row { display: flex; border-top: 1.5px solid #e5e7eb; padding: 8px 10px; gap: 6px; }
.ra-input { flex: 1; border: 1.5px solid #e5e7eb; border-radius: 8px; padding: 7px 10px; font-size: 0.83em; outline: none; font-family: inherit; }
.ra-input:focus { border-color: #2F4B8F; }
.ra-send { background: #2F4B8F; color: #fff; border: none; border-radius: 8px; padding: 7px 12px; cursor: pointer; font-size: 0.9em; font-weight: 700; transition: background .15s; }
.ra-send:hover { background: #23396E; }
body.dark-mode .ra-panel { background: #161b22 !important; border-color: #30363d !important; }
body.dark-mode .ra-bot { background: #21262d !important; color: #c9d1d9 !important; }
body.dark-mode .ra-input { background: #0d1117 !important; border-color: #30363d !important; color: #c9d1d9 !important; }
body.dark-mode .ra-input-row { border-color: #30363d !important; }
@media(max-width:400px){ .ra-panel { width: calc(100vw - 32px); right: 16px; } }

/* ── Conference Deadline Widget ── */
.conf-ddl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 1.8em; }
@media(max-width:700px){ .conf-ddl-grid { grid-template-columns: 1fr 1fr; } }
@media(max-width:450px){ .conf-ddl-grid { grid-template-columns: 1fr; } }
.ddl-card { border-radius: 12px; border: 1.5px solid #e5e7eb; border-left: 4px solid #2F4B8F; background: #fff; padding: 12px 14px; transition: box-shadow .2s, transform .15s; }
.ddl-card:hover { box-shadow: 0 4px 18px rgba(0,0,0,.1); transform: translateY(-2px); }
.ddl-top { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
.ddl-abbr { font-size: 1em; font-weight: 800; letter-spacing: -.01em; }
.ddl-type { font-size: 0.702em; font-weight: 700; padding: 1px 7px; border-radius: 20px; letter-spacing: .05em; }
.ddl-name { font-size: 0.818em; font-weight: 700; margin-bottom: 4px; }
.ddl-name a { color: #1a2332; text-decoration: none; }
.ddl-name a:hover { color: #2F4B8F; text-decoration: underline; }
.ddl-meta { font-size: 0.76em; color: #6b7280; margin-bottom: 8px; line-height: 1.5; }
.ddl-line { display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.ddl-chip { display: inline-block; font-size: 0.76em; font-weight: 700; padding: 2px 8px; border-radius: 20px; border: 1px solid; white-space: nowrap; }
/* ddl-chip: override inline styles when dark mode toggled after load */
body.dark-mode .ddl-chip[style*="#f1f5f9"] { background: #21262d !important; color: #8b949e !important; border-color: #30363d !important; }
body.dark-mode .ddl-chip[style*="#f0fdf4"] { background: #122117 !important; color: #3fb950 !important; border-color: #1a7f45 !important; }
/* light-mode restore: if page loaded in dark mode then toggled to light, undo dark inline styles */
body:not(.dark-mode) .ddl-chip[style*="#122117"] { background: #f0fdf4 !important; color: #16a34a !important; border-color: #bbf7d0 !important; }
body:not(.dark-mode) .ddl-chip[style*="#21262d"] { background: #f1f5f9 !important; color: #6b7280 !important; border-color: #e2e8f0 !important; }
/* urgency chips — inline style uses urgency+'20'/'40' hex suffixes */
body.dark-mode .ddl-chip[style*="#dc2626"] { background: rgba(220,38,38,.25) !important; color: #fca5a5 !important; border-color: rgba(220,38,38,.5) !important; }
body.dark-mode .ddl-chip[style*="#ea580c"] { background: rgba(234,88,12,.25) !important; color: #fdba74 !important; border-color: rgba(234,88,12,.5) !important; }
body.dark-mode .ddl-chip[style*="#d97706"] { background: rgba(217,119,6,.25) !important; color: #fcd34d !important; border-color: rgba(217,119,6,.5) !important; }
body.dark-mode .ddl-chip[style*="#6b7280"] { background: #21262d !important; color: #8b949e !important; border-color: #30363d !important; }
body.dark-mode .ddl-card { background: #161b22 !important; border-color: #30363d !important; }
body.dark-mode .ddl-name a { color: #c9d1d9 !important; }
body.dark-mode .ddl-meta { color: #8b949e !important; }

/* RA chatbot — mute jarring electric blues */
body.dark-mode .ra-user   { background: #1c3a6e !important; } /* muted navy, not electric #2F4B8F */
body.dark-mode .ra-send   { background: #2F4B8F !important; }
body.dark-mode .ra-send:hover { background: #3F5F86 !important; }
body.dark-mode .ra-chip:hover { background: #21262d !important; }
body.dark-mode .ra-chips  { border-color: #30363d !important; } /* was showing as bright #e5e7eb line */
body.dark-mode .ra-input:focus { border-color: #9DB8EA !important; }
body.dark-mode .ra-btn { box-shadow: 0 4px 16px rgba(0,0,0,0.5) !important; }
body.dark-mode .ra-btn:hover { box-shadow: 0 6px 22px rgba(157,184,234,.25) !important; }

/* pub-thumb-wrap hover — neutral shadow, not colored */
body.dark-mode .pub-thumb-wrap:hover { box-shadow: 0 4px 18px rgba(0,0,0,0.45) !important; }

/* ── Reading progress bar ── */
#read-progress {
  position: fixed; top: 0; left: 0; height: 3px; width: 0%;
  background: linear-gradient(90deg, #2F4B8F 0%, #6F94C6 60%, #E39A7A 100%);
  z-index: 9999; transition: width .08s linear;
  pointer-events: none;
}
/* .hero-banner: position/overflow merged into primary definition above */
.hero-particles {
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
}
.hero-banner > *:not(.hero-particles) { position: relative; z-index: 1; }

/* ── Typing cursor ── */
.typing-cursor {
  display: inline-block; width: 2px; height: 1em;
  background: #90caf9; margin-left: 2px;
  animation: blink 0.8s step-end infinite;
  vertical-align: text-bottom;
}
@keyframes blink { 50% { opacity: 0; } }

/* ── Image lazy-load fade ── */
h1, h2, h3, .section-header, .featured-title, .pub-title, .rc-title, .pillar-title { text-wrap: balance; }
.page__content p, .page__content li, .rc-desc, .pillar-desc, .featured-desc, .pub-desc { text-wrap: pretty; }
/* lazy images show as soon as they arrive (no fade from blank) */
img[loading="lazy"] { opacity: 1; }
img[loading="lazy"].loaded {
  opacity: 1;
}

/* ── Hero pills: allow wrap on very narrow viewports to prevent overflow ── */
@media (max-width: 380px) {
  .hero-pill { white-space: normal; font-size: 0.74em; }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto !important; }
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
}

/* ── Responsive ── */
@media(max-width:920px) {
  .featured-grid { grid-template-columns: 1fr 1fr; }
}
@media(max-width:760px) {
  .research-grid { grid-template-columns: 1fr 1fr; }
}
@media(max-width:560px) {
  .featured-grid { grid-template-columns: 1fr; }  /* 1-col on small phones */
}
@media(max-width:480px) {
  .hero-name { font-size: 1.65em; }
  .research-grid { grid-template-columns: 1fr; }
  .featured-grid { grid-template-columns: 1fr; }
  .pub-entry { grid-template-columns: 1fr; gap: 6px; }
  .pub-left  { flex-direction: row; }
  .stat-card { flex: 1 1 100px; padding: 10px 12px; }
  .stat-number { font-size: 1.5em; }
}

/* Stack the fixed controls into one column wherever the screen is narrow enough that
   they would otherwise sit edge-to-edge (the agent launcher owns 68..116px). */
@media(max-width:600px) {
  .ra-btn      { bottom: 16px;  right: 16px; }
  .scroll-top  { bottom: 74px;  right: 16px; }
  .dark-toggle { bottom: 122px; right: 16px; }
}

/* ── Dark mode scrollbar ── */
body.dark-mode { scrollbar-color: #30363d #0d1117; }
body.dark-mode .ra-msgs::-webkit-scrollbar { width: 8px; }
body.dark-mode .ra-msgs::-webkit-scrollbar-thumb { background: #30363d; border-radius: 4px; }
body.dark-mode .ra-msgs::-webkit-scrollbar-track { background: #0d1117; }


/* ── Thumbnail placeholder (no longer used — class removed from HTML) ── */

/* ── ① Citation count badge ── */

/* ── ② Filter bar ── */
.pub-filter-bar {
  display: flex; flex-wrap: wrap; align-items: center; gap: 8px;
  margin-bottom: 18px; padding: 14px 16px;
  background: #f8faff; border: 1px solid #e5e7eb; border-radius: 12px;

  overflow-x: auto; -webkit-overflow-scrolling: touch;
}
@media(max-width:560px){
  .pub-filter-bar { padding: 10px 12px; }
}
.filter-search {
  flex: 1; min-width: 180px; padding: 7px 14px 7px 34px;
  background-image: url(/images/icons/h-search.png); background-repeat: no-repeat; background-position: 11px center; background-size: 14px 14px;
  border: 1.5px solid #e5e7eb; border-radius: 8px;
  font-size: 0.906em; outline: none; font-family: inherit;
  background-color: #fff; color: #111;
}
.filter-search:focus { border-color: #2F4B8F; }
.filter-btn {
  padding: 5px 14px; border-radius: 999px; font-size: 0.819em; font-weight: 700;
  border: 1.5px solid #e5e7eb; background: #fff; color: #555; cursor: pointer;
  transition: all .15s;
}
.filter-btn:hover { background: #EEF3FA; color: #2F4B8F; border-color: #2F4B8F; }
.filter-btn.active { background: #2F4B8F; color: #fff; border-color: #2F4B8F; }
body.dark-mode .pub-filter-bar { background: #161b22; border-color: #30363d; }
body.dark-mode .filter-search { background-color: #0d1117; color: #e6edf3; border-color: #30363d; }
body.dark-mode .filter-btn { background: #21262d; color: #8b949e; border-color: #30363d; }
body.dark-mode .filter-btn:hover { background: #1c2333; color: #9DB8EA; border-color: #5E77A8; }
body.dark-mode .filter-btn.active { background: #2F4B8F; color: #fff; border-color: #2F4B8F; }
.pub-entry.hidden { display: none !important; }

/* ── ④ Abstract tooltip ── */
/* .pub-title: position/cursor merged into primary definition above */
.pub-abstract-preview {
  display: none; margin: 8px 0 4px; padding: 12px 14px; font-weight: 400;
  background: #F6F8FB; border-left: 3px solid #BFD8EC; border-radius: 0 8px 8px 0;
  font-size: 0.86em; color: #374151; line-height: 1.6; max-width: 68ch;
}
.pub-abstract-preview a { color: #2F4B8F; word-break: break-all; }
.pub-entry.abstract-open .pub-abstract-preview { display: block; }
body.dark-mode .pub-abstract-preview { background: #161b22; border-color: #30363d; color: #b5c2c8; }

/* ── ⑧ Research graph ── */
#research-graph-section { margin-top: 0; }
#research-graph {
  width: 100%; height: 460px; border-radius: 14px; border: 1.5px solid #e5e7eb;
  background: #fafbff; overflow: hidden; position: relative;
}
@media(max-width:600px){ #research-graph { height: 320px; } }
body.dark-mode #research-graph { border-color: #30363d; background: #0d1117 !important; }
#research-graph svg { width: 100%; height: 100%; }
/* Animated flow along research-evolution links */
.rg-flow { stroke-dasharray: 2 8; animation: rgFlow 1.0s linear infinite; pointer-events: none; }
@keyframes rgFlow { to { stroke-dashoffset: -10; } }
@media (prefers-reduced-motion: reduce) { .rg-flow { animation: none; } }
/* Graph nodes/links/legend are drawn as raw SVG by drawGraph() — no extra CSS classes needed. */
/* ── Dark mode: Hero pills ── */
body.dark-mode .hero-pill { background: rgba(255,255,255,0.12) !important; color: rgba(255,255,255,0.85) !important; border-color: rgba(255,255,255,0.2) !important; }
/* ── Dark mode: Awards grid text ── */
/* dead selectors removed — replaced by .awards-col-title / .awards-col-list classes */

/* ══════════════ POLISH PACK: smooth scroll · reveal · hero glow · agent ══════════════ */
@media (prefers-reduced-motion: no-preference) {
  html { scroll-behavior: smooth; scroll-padding-top: 150px; }
}
::selection { background: #2F4B8F; color: #fff; }
body.dark-mode ::selection { background: #9DB8EA; color: #0d1117; }

/* Scroll-reveal */
.sr { opacity: 0; transform: translateY(18px); transition: opacity .6s cubic-bezier(.22,.61,.36,1), transform .6s cubic-bezier(.22,.61,.36,1); will-change: opacity, transform; }
.sr.sr-in { opacity: 1; transform: none; }
.sr-d1 { transition-delay: .08s; } .sr-d2 { transition-delay: .16s; } .sr-d3 { transition-delay: .24s; }
@media (prefers-reduced-motion: reduce) { .sr { opacity: 1; transform: none; transition: none; } }

/* Hero name — animated gradient sheen */
.hero-name {
  background: linear-gradient(90deg, #fff 0%, #fff 38%, #93c5fd 50%, #fff 62%, #fff 100%);
  background-size: 250% 100%;
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: heroSheen 5.5s ease-in-out infinite;
}
@media (prefers-reduced-motion: reduce) { .hero-name { animation: none; -webkit-text-fill-color: #fff; } }
@keyframes heroSheen { 0%, 60% { background-position: 110% 0; } 90%, 100% { background-position: -60% 0; } }

/* Hero status badge */
.hero-status {
  display: inline-flex; align-items: center; gap: 7px;
  background: rgba(255,255,255,0.10); border: 1px solid rgba(245,200,181,0.55);
  color: #FBE3D8; font-size: 0.76em; font-weight: 700;
  padding: 4px 14px; border-radius: 999px; margin: 2px 0 16px;
}
.hs-dot { width: 8px; height: 8px; border-radius: 50%; background: #F5C8B5; box-shadow: 0 0 0 0 rgba(245,200,181,.6); animation: hsPulse 2s ease-out infinite; }
@media (prefers-reduced-motion: reduce) { .hs-dot { animation: none; } }
@keyframes hsPulse { 0% { box-shadow: 0 0 0 0 rgba(245,200,181,.55); } 70% { box-shadow: 0 0 0 7px rgba(245,200,181,0); } 100% { box-shadow: 0 0 0 0 rgba(245,200,181,0); } }

/* Featured card — shine sweep on hover */
.featured-card::before {
  content: ''; position: absolute; top: 0; left: -80%;
  width: 50%; height: 100%; z-index: 1; pointer-events: none;
  background: linear-gradient(105deg, transparent, rgba(255,255,255,0.45), transparent);
  transform: skewX(-20deg); transition: left .55s ease;
}
.featured-card:hover::before { left: 130%; }
body.dark-mode .featured-card::before { background: linear-gradient(105deg, transparent, rgba(148,197,253,0.18), transparent); }

/* AI Agent — FAB pulse ring + tooltip */
.ra-btn::after {
  content: ''; position: absolute; inset: -4px; border-radius: 50%;
  border: 2px solid rgba(47,75,143,.45);
  animation: raPulse 2.4s ease-out infinite; pointer-events: none;
}
@media (prefers-reduced-motion: reduce) { .ra-btn::after { animation: none; opacity: 0; } }
@keyframes raPulse { 0% { transform: scale(.9); opacity: .9; } 70% { transform: scale(1.35); opacity: 0; } 100% { transform: scale(1.35); opacity: 0; } }
.ra-tip {
  position: fixed; bottom: 76px; right: 80px; z-index: 9990;
  background: #1a2332; color: #fff; font-size: 0.78em; font-weight: 700;
  padding: 7px 13px; border-radius: 10px 10px 2px 10px;
  box-shadow: 0 6px 20px rgba(0,0,0,.25);
  opacity: 0; transform: translateY(6px); pointer-events: none;
  transition: opacity .4s, transform .4s; white-space: nowrap;
}
.ra-tip.show { opacity: 1; transform: none; }
body.dark-mode .ra-tip { background: #21262d; color: #e6edf3; }

/* AI Agent — header status */
.ra-dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #4ade80; margin: 0 4px 0 8px; vertical-align: 1px; }
.ra-status { font-size: 0.78em; font-weight: 600; opacity: .85; }

/* AI Agent — action chips under bot replies */
.ra-acts { display: flex; flex-wrap: wrap; gap: 5px; margin: 2px 0 4px; max-width: 85%; }
.ra-act {
  display: inline-block; background: #eff6ff; color: #23396E !important;
  border: 1.5px solid #bfdbfe; border-radius: 999px;
  padding: 2px 10px; font-size: 0.73em; font-weight: 700;
  text-decoration: none !important; cursor: pointer;
  transition: background .15s, transform .1s;
}
.ra-act:hover { background: #EEF3FA; transform: translateY(-1px); }
body.dark-mode .ra-act { background: #1c2333 !important; color: #9DB8EA !important; border-color: #1f3a6e !important; }
.ra-btn.ra-quiet::after { animation: none; opacity: 0; }

/* ── ⌘K Command Palette ── */
.qn-cmdk {
  margin-left: auto; background: #fff; border: 1.5px solid #c7d7f5; border-radius: 7px;
  padding: 2px 10px; font-size: 0.86em; font-weight: 800; color: #2F4B8F;
  cursor: pointer; letter-spacing: .02em; transition: background .15s, transform .1s;
}
.qn-cmdk:hover { background: #EEF3FA; transform: translateY(-1px); }
body.dark-mode .qn-cmdk { background: #21262d !important; border-color: #30363d !important; color: #9DB8EA !important; }
#cmdk-overlay {
  position: fixed; inset: 0; z-index: 10050; display: none;
  background: rgba(15,23,42,0.42); backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px);
}
#cmdk-overlay.open { display: block; }
#cmdk {
  position: absolute; top: 14vh; left: 50%; transform: translateX(-50%);
  width: min(560px, calc(100vw - 32px));
  background: rgba(255,255,255,0.96); border: 1px solid #e2e8f0; border-radius: 16px;
  box-shadow: 0 24px 80px rgba(2,6,23,.35); overflow: hidden;
  animation: cmdkIn .18s cubic-bezier(.16,1,.3,1);
}
@keyframes cmdkIn { from { opacity: 0; transform: translateX(-50%) translateY(-8px) scale(.98); } to { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); } }
@media (prefers-reduced-motion: reduce) { #cmdk { animation: none; } }
#cmdk-input {
  width: 100%; border: none; outline: none; background: transparent;
  padding: 16px 18px; font-size: 1.02em; font-weight: 600; color: #0f172a;
  border-bottom: 1px solid #e2e8f0; box-sizing: border-box;
}
#cmdk-list { max-height: 46vh; overflow-y: auto; padding: 6px; margin: 0; list-style: none; }
.cmdk-item {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 12px; border-radius: 9px; cursor: pointer;
  font-size: 0.88em; color: #1e293b;
}
.cmdk-item .ck-icon { width: 22px; text-align: center; flex-shrink: 0; }
.cmdk-item .ck-hint { margin-left: auto; font-size: 0.76em; color: #94a3b8; font-weight: 700; }
.cmdk-item.active { background: #eff6ff; color: #23396E; }
.cmdk-item.active .ck-hint { color: #60a5fa; }
.cmdk-empty { padding: 22px 12px; text-align: center; color: #94a3b8; font-size: 0.86em; }
.cmdk-foot {
  display: flex; gap: 14px; padding: 8px 14px; border-top: 1px solid #e2e8f0;
  font-size: 0.72em; color: #94a3b8; font-weight: 600;
}
.cmdk-foot kbd { background: #f1f5f9; border: 1px solid #e2e8f0; border-radius: 4px; padding: 0 5px; font-family: inherit; }
body.dark-mode #cmdk { background: rgba(22,27,34,0.97); border-color: #30363d; }
body.dark-mode #cmdk-input { color: #e6edf3; border-bottom-color: #30363d; }
body.dark-mode .cmdk-item { color: #c9d1d9; }
body.dark-mode .cmdk-item.active { background: #1c2333; color: #9DB8EA; }
body.dark-mode .cmdk-foot { border-top-color: #30363d; color: #8b949e; }
body.dark-mode .cmdk-foot kbd { background: #21262d; border-color: #30363d; }

/* ── Cursor glow on cards (desktop, hover-capable only) ── */
@media (hover: hover) and (pointer: fine) {
  .research-card, .stat-card { position: relative; overflow: hidden; }
  .research-card::after, .stat-card::after {
    content: ''; position: absolute; inset: 0; pointer-events: none; opacity: 0;
    background: radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(47,75,143,0.10), transparent 65%);
    transition: opacity .25s;
  }
  /* no cursor-following glow on cards: the border highlight is enough */
  body.dark-mode .research-card::after, body.dark-mode .stat-card::after {
    background: radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(157,184,234,0.12), transparent 65%);
  }
}

/* ── Research North-Star pillars ── */
.pillar-intro { font-size: 0.915em; color: #555; margin: -0.4em 0 1.3em; line-height: 1.7; }
body.dark-mode .pillar-intro { color: #adbac7; }
.pillar-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 1.8em; }
@media (max-width: 720px) { .pillar-grid { grid-template-columns: 1fr; } }
.pillar-card {
  background: #fff; border: 1.5px solid #e0e8f0; border-radius: 12px; overflow: hidden;
  display: flex; flex-direction: column; transition: transform .18s, box-shadow .18s, border-color .18s;
}
.pillar-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(47,75,143,.16); border-color: #2F4B8F; }
.pillar-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; border-bottom: 1px solid #e0e8f0; display: block; background: #fafbff; }
.pillar-body { padding: 15px 17px 18px; flex: 1; }
.pillar-kicker { font-size: 0.7em; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; color: #2F4B8F; }
.pillar-title { font-size: 0.994em; font-weight: 800; color: #1a2332; margin: 3px 0 7px; letter-spacing: -.01em;  line-height:1.3; text-wrap:balance;}
.pillar-desc { font-size: 0.819em; color: #555; line-height: 1.6; }
.pillar-papers { margin-top: 9px; display: flex; flex-wrap: wrap; gap: 5px; }
.pillar-tag { font-size: 0.7em; font-weight: 700; background: #EEF3FA; color: #2F4B8F; border-radius: 6px; padding: 2px 7px; }
body.dark-mode .pillar-card { background: #161b22; border-color: #30363d; }
body.dark-mode .pillar-img { border-bottom-color: #30363d; }
body.dark-mode .pillar-title { color: #e6edf3; }
body.dark-mode .pillar-desc { color: #adbac7; }
body.dark-mode .pillar-kicker { color: #9DB8EA; }
body.dark-mode .pillar-tag { background: #1c2333; color: #9DB8EA; }

/* Print safety for polish pack */
@media print {
  .sr { opacity: 1 !important; transform: none !important; }
  .hero-name { background: none; -webkit-text-fill-color: #000; animation: none; }
  .ra-btn, .ra-tip, .ra-panel { display: none !important; }
}


/* film teaser (links to /film/) */
.film-teaser{position:relative;display:flex;align-items:center;gap:16px;min-height:128px;margin:18px 0 8px;padding:20px 24px;border-radius:14px;overflow:hidden;background:#0b0b0c;color:#ece6da !important;text-decoration:none !important;border:1px solid rgba(201,166,107,.22);transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
.film-teaser:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(0,0,0,.22);border-color:rgba(201,166,107,.45)}
.film-teaser:focus-visible{outline:2px solid #c9a66b;outline-offset:3px}
.film-teaser .ft-img{position:absolute;right:0;top:50%;transform:translateY(-50%);height:150%;width:auto;max-width:none;opacity:.95;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 45%);mask-image:linear-gradient(90deg,transparent 0,#000 45%);pointer-events:none}
.film-teaser .ft-text{position:relative;z-index:1;display:flex;flex-direction:column;gap:5px;max-width:64%}
.film-teaser .ft-kicker{font:600 11px Inter,system-ui,sans-serif;letter-spacing:.28em;color:#c9a66b}
.film-teaser .ft-title{font-family:Newsreader,Georgia,'Times New Roman',serif;font-weight:400;font-size:1.9rem;line-height:1.1;color:#ece6da}
.film-teaser .ft-sub{font-family:Newsreader,Georgia,'Times New Roman',serif;font-style:italic;font-size:1rem;line-height:1.45;color:rgba(236,230,218,.72)}
.film-teaser .ft-play{position:relative;z-index:1;margin-left:auto;flex:none;width:50px;height:50px;border-radius:50%;border:1px solid rgba(236,230,218,.5);background:rgba(10,10,11,.55);transition:background .25s ease}
.film-teaser:hover .ft-play{background:rgba(201,166,107,.28)}
.film-teaser .ft-play::after{content:'';position:absolute;left:20px;top:16px;border-left:14px solid #ece6da;border-top:9px solid transparent;border-bottom:9px solid transparent}
@media (max-width:600px){.film-teaser{padding:18px}.film-teaser .ft-text{max-width:80%}.film-teaser .ft-title{font-size:1.55rem}.film-teaser .ft-img{opacity:.5}}
@media (prefers-reduced-motion:reduce){.film-teaser,.film-teaser .ft-play{transition:none}.film-teaser:hover{transform:none}}

/* animated figures shared with the project pages (strips, schematics) */
.page__content figure.chart{margin:1.4em auto 1.8em;max-width:100%;color:var(--muted)}
.page__content figure.chart svg{display:block;width:100%;height:auto}
.page__content figure.chart figcaption{font-family:Inter,system-ui,sans-serif;font-size:.8rem;color:var(--muted);margin:.9em auto 0;text-align:center;line-height:1.55;max-width:640px}
.page__content figure.chart figcaption b{color:var(--link);font-weight:600}
figure.anim-fig{--ink:#1a2332;--muted:#5f6b7a;--card:#fff;--fig-border:#dfe6ef;--rule:#e6ebf2;--link:#2F4B8F;--good:#1b7f4b;--bad:#c0392b;--bg:#fff}
body.dark-mode figure.anim-fig{--ink:#e6edf3;--muted:#8b949e;--card:#161b22;--fig-border:#30363d;--rule:#21262d;--good:#3fb950;--bad:#f85149;--bg:#0d1117}

/* figure palette (shared by every chart and animation; Jev-style: navy = ours, misty blue = our variant,
   peach = competing RL baseline, cool gray = base model / others) */
:root{--c-ours:#2F4B8F;--c-ours-fill:#90A4C5;--c-var:#BFD8EC;--c-var-line:#6F94C6;--c-rl:#F5C8B5;--c-rl-line:#E39A7A;
  --c-base:#DDE2EA;--c-base-line:#8F97A8;--c-other:#C9CED8;--c-other-line:#9AA1B0;--c-grid:#E4E8EF;--c-ink2:#5B6273}
body.dark-mode{--c-ours:#9DB8EA;--c-ours-fill:#5E77A8;--c-var:#3F5F86;--c-var-line:#7FA6D3;--c-rl:#9A6E5D;--c-rl-line:#E9A98C;
  --c-base:#3A414E;--c-base-line:#8F97A8;--c-other:#4A5260;--c-other-line:#9AA1B0;--c-grid:#2A303A;--c-ink2:#A6ADBB}
figure.anim-fig{--link:var(--c-ours);--good:#3E7D5A;--bad:var(--c-rl-line)}
/* deadline cards in the site palette */
.ddl-card{border-left-color:var(--c-ours-fill)!important}
.ddl-card .ddl-abbr{color:var(--c-ours)!important}
.ddl-card .ddl-type{background:var(--c-base)!important;color:var(--c-ink2)!important}
.ddl-chip.u-hot{background:var(--c-rl)!important;border-color:var(--c-rl-line)!important;color:#7A3B22!important}
.ddl-chip.u-soon{background:var(--c-var)!important;border-color:var(--c-var-line)!important;color:var(--c-ours)!important}
.ddl-chip.u-later{background:var(--c-base)!important;border-color:var(--c-grid)!important;color:var(--c-ink2)!important}
body.dark-mode .ddl-chip.u-hot{color:#FBE3D8!important}
body.dark-mode .ddl-chip.u-soon{color:#E3EEFA!important}
body.dark-mode figure.anim-fig{--good:#7FC79A}
</style>

<!-- Hero banner -->
<div id="read-progress" aria-hidden="true"></div>
<div class="hero-banner">
  <canvas class="hero-particles" id="particles" aria-hidden="true"></canvas>
  <div class="hero-name">Jiajun Fan</div>
  <div class="hero-subtitle" id="hero-typed"></div>
  <div class="hero-status"><span class="hs-dot" aria-hidden="true"></span>Open to Research Internships — Fall 2026 / 2027</div>
  {% include hero-arc.html %}
  <div class="hero-links">
    <a class="hero-link" href="/cv/"><img class="hero-ico" src="/images/icons/h-cv.png" alt="">CV</a>
    <a class="hero-link" href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer"><img class="hero-ico" src="/images/icons/h-scholar.png" alt="">Scholar</a>
    <a class="hero-link" href="mailto:jiajunf3@illinois.edu"><img class="hero-ico" src="/images/icons/h-email.png" alt="">Email</a>
    <a class="hero-link" href="https://openreview.net/profile?id=~Jiajun_Fan1" target="_blank" rel="noopener noreferrer"><img class="hero-ico" src="/images/icons/h-openreview.png" alt="">OpenReview</a>
    <a class="hero-link" href="https://github.com/markerthu" target="_blank" rel="noopener noreferrer"><img class="hero-ico" src="/images/icons/h-github.png" alt="">GitHub</a>
    <a class="hero-link" href="https://www.linkedin.com/in/jiajun-fan-57b12b26b" target="_blank" rel="noopener noreferrer"><img class="hero-ico" src="/images/icons/h-linkedin.png" alt="">LinkedIn</a>
  </div>
</div>

<!-- Quick nav -->
<div class="quick-nav">
  <a href="#news" data-qn="news">News</a>
  <a href="#featured" data-qn="featured">Featured</a>
  <a href="#publications" data-qn="publications">Publications</a>
  <a href="#northstar" data-qn="northstar">North Star</a>
  <a href="#research" data-qn="research">Research</a>
  <a href="#impact" data-qn="impact">Impact</a>
  <a href="#vision" data-qn="vision">Vision</a>
  <a href="#awards" data-qn="awards">Awards</a>
  <a href="#deadlines" data-qn="deadlines">Deadlines</a>
  <button class="qn-cmdk" onclick="cmdkOpen()" aria-label="Open command palette (Cmd+K)" title="Command palette">⌘K</button>
</div>

<div class="internship-banner internship-banner-pulse">
<i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-scholar.png);mask-image:url(/images/icons/h-scholar.png)"></i><strong>Seeking research internship — Fall 2026 / 2027.</strong> RL · Generative Models · Reasoning LLMs · Agentic RL
&nbsp;<a href="/cv/">[CV]</a>
&nbsp;<a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">[Scholar]</a>
&nbsp;<a href="mailto:jiajunf3@illinois.edu">[Email]</a>
</div>

<!-- Intro -->
<p class="tagline">
I am a CS Ph.D. student at <strong>UIUC</strong>, where I study how to train <strong>multimodal large generative/agentic models with reinforcement learning</strong> in a way that is <strong>stable</strong> (<strong>e.g., lifelong continual learning</strong>) — avoiding the diversity and performance collapse that RL fine-tuning tends to cause — and <strong>progressively autonomous</strong> (<strong>e.g., recursive self-improvement, RSI</strong>), step by step taking the human out of the loop: first human data collection, then human labelling and hyper-parameter tuning, and finally hand-designed rewards. That work spans these domains:
</p>


<div class="ro-home">
<div class="ro-rows">
  <div class="ro-row">
    <div class="ro-dom">Data-distribution optimization<span>game agents</span></div>
    <div class="ro-papers">
      <a class="ro-p" href="https://proceedings.mlr.press/v162/fan22c.html" target="_blank" rel="noopener">GDI <span class="ro-v">ICML 2022</span></a>
      <a class="ro-p" href="https://openreview.net/forum?id=FeWvD0L_a4" target="_blank" rel="noopener">LBC <span class="ro-v">ICLR 2023 Oral</span></a>
    </div>
  </div>
  <div class="ro-row">
    <div class="ro-dom">Text-to-image generation<span>flow matching &amp; diffusion</span></div>
    <div class="ro-papers">
      <a class="ro-p" href="https://openreview.net/forum?id=2IoFFexvuw" target="_blank" rel="noopener">ORW-CFM-W2 <span class="ro-v">ICLR 2025</span></a>
      <a class="ro-p" href="https://openreview.net/forum?id=aXO0xg0ttW" target="_blank" rel="noopener">ADRPO <span class="ro-v">NeurIPS 2025</span></a>
    </div>
  </div>
  <div class="ro-row">
    <div class="ro-dom">Audio reasoning LLMs<span>multimodal reasoning</span></div>
    <div class="ro-papers">
      <a class="ro-p" href="/projects/audiorsi/">AudioRSI <span class="ro-v">arXiv 2026</span></a>
      <a class="ro-p" href="https://openreview.net/forum?id=DUr48hxO2h" target="_blank" rel="noopener">CESAR <span class="ro-v">ICLR 2026</span></a>
      <a class="ro-p" href="/projects/read-the-mind/">Read the Mind <span class="ro-v">arXiv 2026</span></a>
    </div>
  </div>
  <div class="ro-row">
    <div class="ro-dom">Tool-use agents<span>agentic RL</span></div>
    <div class="ro-papers">
      <a class="ro-p" href="/projects/procedure-aware-rl/">Procedure-Aware RL <span class="ro-v">COLM 2026</span></a>
      <a class="ro-p" href="https://openreview.net/forum?id=Tt8lCe1NrW" target="_blank" rel="noopener">BAR-RAG <span class="ro-v">ICML 2026</span></a>
      <a class="ro-p" href="https://arxiv.org/abs/2605.12975" target="_blank" rel="noopener">PyRAG <span class="ro-v">arXiv 2026</span></a>
      <a class="ro-p" href="/projects/speechgym/">SpeechGym <span class="ro-v">arXiv 2026</span></a>
    </div>
  </div>
    <div class="ro-row">
    <div class="ro-dom">AI for Science<span>protein &amp; materials design</span></div>
    <div class="ro-papers">
      <a class="ro-p" href="/projects/proteinzero/">ProteinZero <span class="ro-v">TMLR 2026</span></a>
      <a class="ro-p" href="https://arxiv.org/abs/2607.09039" target="_blank" rel="noopener">GPFlow <span class="ro-v">NeurIPS 2026</span></a>
      <a class="ro-p" href="https://openreview.net/forum?id=stiehhc5y6" target="_blank" rel="noopener">EDiSon <span class="ro-v">AI4Mat 2024</span></a>
    </div>
  </div>
  <div class="ro-row">
    <div class="ro-dom">Math reasoning<span>token efficiency</span></div>
    <div class="ro-papers">
      <a class="ro-p" href="https://openreview.net/forum?id=8Oc3Mx754M" target="_blank" rel="noopener">BCR <span class="ro-v">ICML 2026</span></a>
      <a class="ro-p" href="https://openreview.net/forum?id=aXO0xg0ttW" target="_blank" rel="noopener">ADRPO <span class="ro-v">NeurIPS 2025</span></a>
    </div>
  </div>
  <div class="ro-row">
    <div class="ro-dom">Embodied AI<span>VLA &amp; efficient inference</span></div>
    <div class="ro-papers">
      <a class="ro-p" href="https://arxiv.org/abs/2605.29438" target="_blank" rel="noopener">ElegantVLA <span class="ro-v">NeurIPS 2026</span></a>
      <a class="ro-p" href="https://openreview.net/forum?id=RwdGIIjPlC" target="_blank" rel="noopener">SP-VLA <span class="ro-v">ICLR 2026</span></a>
      <a class="ro-p" href="https://arxiv.org/abs/2407.05010" target="_blank" rel="noopener">PRANCE <span class="ro-v">TPAMI 2026</span></a>
    </div>
  </div>
  <div class="ro-row">
    <div class="ro-dom">Robot design<span>morphology &amp; control</span></div>
    <div class="ro-papers">
      <a class="ro-p" href="https://openreview.net/forum?id=stiehhc5y6" target="_blank" rel="noopener">EDiSon <span class="ro-v">AI4Mat 2024</span></a>
    </div>
  </div>
</div>
</div>

<a class="film-teaser" href="/film/" aria-label="Watch From RL to AGI, a one-minute film about this research">
  <img class="ft-img" src="/film/teaser.jpg" alt="" width="870" height="810" loading="lazy" decoding="async">
  <span class="ft-text">
    <span class="ft-kicker">A ONE-MINUTE FILM</span>
    <span class="ft-title">From RL to AGI</span>
    <span class="ft-sub">The research above as one story: taking the human out of the loop, step by step, toward an AI scientist.</span>
  </span>
  <span class="ft-play" aria-hidden="true"></span>
</a>

<!-- ═══════════════════════════════ NEWS ═══════════════════════════════ -->
<h2 class="section-header" id="news"><img class="sh-icon" src="/images/icons/sh-news.png" alt="">Latest News</h2>

<ul class="news-list">
  <li>
    <span class="news-date">Oct 2026</span>
    <span><span class="nbadge nb-find">Finding</span><strong>AudioRSI</strong> is on arXiv: to our knowledge, the first recursively self-improving audio LLM. One model is both student and teacher, and the student surpasses its teacher, then becomes it. Recursive self-improvement here improves the teacher (judge) and the student together: the teacher is the student&rsquo;s own copy, refreshed as it improves, so the two co-evolve. <a href="/projects/audiorsi/">Project page</a> &middot; <a href="/film/?s=audiorsi">Video</a> &middot; <a href="https://arxiv.org/abs/2610.36578" target="_blank" rel="noopener noreferrer">Paper</a></span>
  </li>
  <li>
    <span class="news-date">Oct 2026</span>
    <span><span class="nbadge nb-find">Finding</span><strong>Training-Free On-Policy Distillation</strong> is on arXiv. On-policy distillation usually costs rollouts, teacher passes and gradient steps for every teacher, so let&rsquo;s try it with no training at all: with forward passes only, specialists that share a base model fuse into one model that is, on average, more accurate than either specialist alone. <a href="/projects/tf-opd/">Project page</a> &middot; <a href="/film/?s=tf-opd">Video</a> &middot; <a href="https://arxiv.org/abs/2610.22236" target="_blank" rel="noopener noreferrer">Paper</a></span>
  </li>
  <li>
    <span class="news-date">Oct 2026</span>
    <span><span class="nbadge nb-talk">Talk</span>Gave a talk at the <strong>IGB</strong> (Lunch with CNRG) on building LLM post-training projects with an AI coding agent. Always happy to give talks on <strong>LLM post-training with RL</strong> and on <strong>AI scientists</strong> &mdash; agentic methods for automated scientific discovery &mdash; just reach out. <a href="https://www.igb.illinois.edu/igb-calendar/lunch-cnrg-building-llm-post-training-projects-claude-code" target="_blank" rel="noopener">Event</a></span>
  </li>
  <li>
    <span class="news-date">Oct 2026</span>
    <span><span class="nbadge nb-code">Code</span><strong>ProteinZero</strong> (TMLR 2026) is now open source &mdash; feel free to use it, for example as a tool in your own agent or design pipeline, and I am always happy to discuss collaborations. <a href="/projects/proteinzero/">Project page</a> &middot; <a href="https://github.com/ziwenwang28/ProteinZero" target="_blank" rel="noopener">Code</a></span>
  </li>
  <li>
    <span class="news-date">Sep 2026</span>
    <span><span class="nbadge nb-accept">Accept</span>Multiple papers accepted at <strong>NeurIPS 2026</strong>, including ElegantVLA and GPFlow. See you in Atlanta&nbsp;<img class="g-ico" src="/images/icons/flag-us.png" alt=""></span>
  </li>
  <li>
    <span class="news-date">Sep 2026</span>
    <span><span class="nbadge nb-accept">Accept</span>Paper accepted at <strong>IEEE TMM</strong> (Transactions on Multimedia).</span>
  </li>
  <li>
    <span class="news-date">Aug 2026</span>
    <span><span class="nbadge nb-find">Finding</span>Voice agents could be measured, never improved &mdash; so we closed the loop and trained one in native audio. <a href="/posts/2026/08/speechgym-voice-agent-rl/">Blog</a> &middot; <a href="https://arxiv.org/abs/2608.26432" target="_blank" rel="noopener noreferrer">Paper</a></span>
  </li>
  <li>
    <span class="news-date">Aug 2026</span>
    <span><span class="nbadge nb-find">Finding</span>For the first time, we can see the brain map of an Audio LLM &mdash; its global workspace, the &ldquo;consciousness space&rdquo;. <a href="/posts/2026/08/read-the-mind-audio-llm/">Blog</a> &middot; <a href="https://arxiv.org/abs/2608.24958" target="_blank" rel="noopener noreferrer">Paper</a></span>
  </li>
  <li>
    <span class="news-date">Jul 2026</span>
    <span><span class="nbadge nb-accept">Accept</span><strong>ProteinZero</strong> accepted at <strong>TMLR</strong> — online RL that lets an inverse-folding model keep improving from its own designs. <a href="/projects/proteinzero/">Project page</a></span>
  </li>
  <li>
    <span class="news-date">Jul 2026</span>
    <span><span class="nbadge nb-feature">Feature</span>CESAR is now featured on <a href="https://www.amazon.science/publications/incentivizing-consistent-effective-and-scalable-reasoning-capability-in-audio-llms-via-reasoning-process-rewards"><strong>Amazon Science</strong></a>.</span>
  </li>
  <li>
    <span class="news-date">Jul 2026</span>
    <span><span class="nbadge nb-accept">Accept</span>Papers accepted at <strong>COLM 2026</strong> (San Francisco, Oct 6–9). See you in San Francisco&nbsp;<img class="g-ico" src="/images/icons/flag-us.png" alt=""></span>
  </li>
  <li>
    <span class="news-date">Apr 2026</span>
    <span><span class="nbadge nb-accept">Accept</span>Several papers accepted at <strong>ICML 2026</strong> (Seoul, Jul 6–11). See you in Seoul&nbsp;<img class="g-ico" src="/images/icons/flag-kr.png" alt=""></span>
  </li>
  <li>
    <span class="news-date">Apr 2026</span>
    <span><span class="nbadge nb-talk">Talk</span>Presented CESAR &amp; SP-VLA at <strong>ICLR 2026</strong>, Rio de Janeiro, Apr 23–27&nbsp;<img class="g-ico" src="/images/icons/flag-br.png" alt=""></span>
  </li>
  <li>
    <span class="news-date">Jan 2026</span>
    <span><span class="nbadge nb-accept">Accept</span><strong>2 papers at ICLR 2026</strong> — CESAR &amp; SP-VLA. See you in Rio&nbsp;<img class="g-ico" src="/images/icons/flag-br.png" alt=""></span>
  </li>
  <li>
    <span class="news-date">Sep 2025</span>
    <span><span class="nbadge nb-accept">Accept</span><strong>2 papers at NeurIPS 2025</strong> — ADRPO &amp; VarCon. See you in San Diego&nbsp;<img class="g-ico" src="/images/icons/flag-us.png" alt=""></span>
  </li>
  <li>
    <span class="news-date">Jun 2025</span>
    <span><span class="nbadge nb-accept">Accept</span>Paper accepted at <strong>IEEE TPAMI</strong>: PRANCE.</span>
  </li>
  <li>
    <span class="news-date">Feb 2025</span>
    <span><span class="nbadge nb-accept">Accept</span>Paper accepted at <strong>ICLR 2025</strong>: ORW-CFM-W2 (Flow Matching self-evolution).</span>
  </li>
  <li class="news-hidden" id="news-extra-1">
    <span class="news-date">Jan 2025</span>
    <span><span class="nbadge nb-service">Service</span>Reviewer: ICML 2023–26, ICLR 2024–26, NeurIPS 2022–26, COLM 2026, CVPR 2026, WACV 2027, AAAI 2025 &amp; 2027, AISTATS 2025, KDD 2024.</span>
  </li>
  <li class="news-hidden" id="news-extra-2">
    <span class="news-date">Aug 2024</span>
    <span><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-scholar.png);mask-image:url(/images/icons/h-scholar.png)"></i>Started Ph.D. at <strong>UIUC CS</strong> (GPA 4.0/4.0).</span>
  </li>
  <li class="news-hidden" id="news-extra-3">
    <span class="news-date">Jan 2023</span>
    <span><span class="nbadge nb-top">Oral · Top 5%</span>LBC at <strong>ICLR 2023</strong>, ranked <strong>5/4176</strong> — broke 24 Atari world records.</span>
  </li>
</ul>
<button class="news-toggle" id="news-toggle" aria-expanded="false" onclick="
  var extras = document.querySelectorAll('.news-hidden');
  var btn = document.getElementById('news-toggle');
  var expanded = btn.getAttribute('data-expanded') === '1';
  extras.forEach(function(e){ e.style.display = expanded ? 'none' : 'flex'; });
  btn.setAttribute('data-expanded', expanded ? '0' : '1');
  btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  btn.textContent = expanded ? '▼ Show more news' : '▲ Show less';
">▼ Show more news</button>

<!-- ═══════════════════════════════ FEATURED ═══════════════════════════ -->
<h2 class="section-header" id="featured"><img class="sh-icon" src="/images/icons/sh-featured.png" alt="">Featured Research</h2>

<div class="featured-grid">
  <a class="featured-card" href="/projects/cesar/">
    <img class="featured-img" loading="lazy" src="/images/featured/cesar-ai.jpg" width="1000" height="333" alt="CESAR concept: audio LLM, process-reward reasoning chain, accuracy sweet-spot curve">
  <div class="featured-body">
      <span class="featured-venue fv-iclr26">ICLR 2026</span>
      <div class="featured-title">CESAR: Audio LLM Reasoning via Process Rewards</div>
      <div class="featured-desc">First to show test-time inverse scaling in Audio LLMs — and fix it with process rewards via online RL.</div>
      <div class="featured-stat"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-awards.png);mask-image:url(/images/icons/sh-awards.png)"></i>SOTA MMAU&nbsp;· Beats Gemini 2.5&nbsp;Pro</div>
    </div>
  </a>
  <a class="featured-card" href="/projects/adrpo/">
    <img class="featured-img" loading="lazy" src="/images/featured/adrpo-ai.jpg" width="1000" height="333" alt="ADRPO concept: samples on springs of adaptive tension, small model beating big">
  <div class="featured-body">
      <span class="featured-venue fv-neurips">NeurIPS 2025</span>
      <div class="featured-title">ADRPO: Adaptive Divergence for Generative Models</div>
      <div class="featured-desc">Sample-level adaptive divergence regularization — 2B model outperforms 12B competitors.</div>
      <div class="featured-stat"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-rocket.png);mask-image:url(/images/icons/h-rocket.png)"></i>2B SD3 &gt; FLUX 12B &amp; SANA 4.8B</div>
    </div>
  </a>
  <a class="featured-card" href="/projects/orw-cfm-w2/">
    <img class="featured-img" loading="lazy" src="/images/featured/orw-ai.jpg" width="1000" height="333" alt="ORW-CFM-W2 concept: noise flowing into diverse data clusters">
  <div class="featured-body">
      <span class="featured-venue fv-iclr25">ICLR 2025</span>
      <div class="featured-title">ORW-CFM-W2: Online RLHF for Flow Matching</div>
      <div class="featured-desc">First collapse-free online RL framework for flow matching models with W2 regularization.</div>
      <div class="featured-stat"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-sparkle.png);mask-image:url(/images/icons/h-sparkle.png)"></i>First online RLHF for flow matching</div>
    </div>
  </a>
  <a class="featured-card" href="/projects/lbc/">
    <img class="featured-img" loading="lazy" src="/images/featured/lbc-ai.jpg" width="1000" height="333" alt="LBC concept: game controller, behavior selection, bars breaking the human-record line">
  <div class="featured-body">
      <span class="featured-venue fv-iclr23oral">ICLR 2023 · Oral</span>
      <div class="featured-title">LBC: Breaking 24 Atari World Records</div>
      <div class="featured-desc">Breaking 24 Atari human world records with 100× less data than prior SOTA (Agent57).</div>
      <div class="featured-stat"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-awards.png);mask-image:url(/images/icons/sh-awards.png)"></i>Rank 5/4176&nbsp;· 10,077% mean human-normalized score</div>
    </div>
  </a>
</div>

<!-- ══════════════════ CONFERENCE DEADLINES ══════════════════ -->
<!-- ═══════════════════════════════ PUBLICATIONS ═══════════════════════ -->
<h2 class="section-header" id="publications"><img class="sh-icon" src="/images/icons/sh-pubs.png" alt="">Selected Publications</h2>

<p style="font-size:0.83em;color:#767676;margin-top:-0.6em;">* = first/co-first author &nbsp;·&nbsp;
<a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Full list on Google Scholar</a> &nbsp;/&nbsp;
<a href="/publications/">Publications page</a></p>

<div class="pub-filter-bar">
  <input class="filter-search" id="pubSearch" type="text" placeholder="Search papers…" aria-label="Search publications" oninput="filterPubs()">
  <button class="filter-btn active" aria-label="Show all papers" onclick="filterByVenue(this,'all')">All</button>
  <button class="filter-btn" aria-label="Filter by ICLR papers" onclick="filterByVenue(this,'ICLR')">ICLR</button>
  <button class="filter-btn" aria-label="Filter by NeurIPS papers" onclick="filterByVenue(this,'NeurIPS')">NeurIPS</button>
  <button class="filter-btn" aria-label="Filter by ICML papers" onclick="filterByVenue(this,'ICML')">ICML</button>
  <button class="filter-btn" aria-label="Filter by COLM papers" onclick="filterByVenue(this,'COLM')">COLM</button>
  <button class="filter-btn" aria-label="Filter by TPAMI papers" onclick="filterByVenue(this,'TPAMI')">TPAMI</button>
  <button class="filter-btn" aria-label="Filter by TMLR papers" onclick="filterByVenue(this,'TMLR')">TMLR</button>
  <button class="filter-btn" aria-label="Filter by preprints" onclick="filterByVenue(this,'Preprint')">Preprint</button>
</div>

<div class="pub-list">

<div class="pub-entry" role="article" data-venue="NeurIPS" data-year="2026" data-arxiv="2605.29438">
  <div class="pub-left"><span class="pb pb-neurips">NeurIPS 2026</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://arxiv.org/abs/2605.29438" target="_blank" rel="noopener noreferrer">ElegantVLA: Learning When to Think for Efficient Vision-Language-Action Models</a></div>
    <div class="pub-authors">Y. Li, H. Liu, K. Ji, Y. Meng, <strong>J. Fan</strong>, Y. Wang, S. Qin, C. Wu, S.-T. Xia, Z. Wang</div>
    <div class="pub-desc">A plug-in scheduler that decides when a VLA model needs full computation, reusing vision, language and denoising states during stable motion. No retraining of the base model.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-awards.png);mask-image:url(/images/icons/sh-awards.png)"></i>Up to 2.55&times; (GR00T) / 3.77&times; (CogACT) speedup &middot; 13.8 &rarr; 26.3 Hz on real-world GR00T tasks</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://arxiv.org/abs/2605.29438" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="NeurIPS" data-year="2026" data-arxiv="2607.09039">
  <div class="pub-left"><span class="pb pb-neurips">NeurIPS 2026</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://arxiv.org/abs/2607.09039" target="_blank" rel="noopener noreferrer">Variable-Length Generative Protein Design via Generalized Poisson Flow</a></div>
    <div class="pub-authors">C. Cheng, Z. Ni, Y. Qu, Y. Chen, R. Guo, <strong>J. Fan</strong>, G. Liu</div>
    <div class="pub-desc">GPFlow: protein generation without fixing the length in advance, by learning the rate function of an inhomogeneous generalized Poisson process over both structure and sequence.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-awards.png);mask-image:url(/images/icons/sh-awards.png)"></i>First on 10 of 16 motif-scaffolding tasks &middot; up to 10&times; success rate on the hardest targets</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://arxiv.org/abs/2607.09039" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="ICML" data-year="2026" data-arxiv="Tt8lCe1NrW">
  <div class="pub-left"><span class="pb pb-icml">ICML 2026</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=Tt8lCe1NrW" target="_blank" rel="noopener noreferrer">Rethinking the Reranker: Boundary-Aware Evidence Selection for Robust Retrieval-Augmented Generation</a></div>
    <div class="pub-authors">J. Sun, P. Jiang, S. Wang, <strong>J. Fan</strong>, H. Wang, S. Ouyang, M. Zhong, Y. Jiao, C. Huang, X. Xu, P. Han, P. Li, J. Huang, G. Liu, H. Ji, J. Han</div>
    <div class="pub-desc">BAR-RAG: a reranker trained with RL from generator feedback to pick evidence that is challenging yet sufficient, not just answer-revealing.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-awards.png);mask-image:url(/images/icons/sh-awards.png)"></i>+10.3% over strong RAG and reranking baselines under noisy retrieval</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=Tt8lCe1NrW" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
      <a class="pub-link pl-arxiv" href="https://arxiv.org/abs/2602.03689" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-paperclip.png);mask-image:url(/images/icons/h-paperclip.png)"></i>arXiv</a>
      <a class="pub-link pl-code" href="https://github.com/GasolSun36/BAR-RAG" target="_blank" rel="noopener noreferrer">Code</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="ICML" data-year="2026" data-arxiv="8Oc3Mx754M">
  <div class="pub-left"><span class="pb pb-icml">ICML 2026</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=8Oc3Mx754M" target="_blank" rel="noopener noreferrer">Batched Contextual Reinforcement</a></div>
    <div class="pub-authors">B. Yang, H. Ma, <strong>J. Fan</strong>, G. Liu</div>
    <div class="pub-desc">BCR: one model solves several problems in a single shared context, rewarded only by per-problem accuracy &mdash; the shared window becomes an implicit token budget.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-awards.png);mask-image:url(/images/icons/sh-awards.png)"></i>15.8&ndash;62.6% fewer tokens at equal or better accuracy</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=8Oc3Mx754M" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
      <a class="pub-link pl-arxiv" href="https://arxiv.org/abs/2604.02322" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-paperclip.png);mask-image:url(/images/icons/h-paperclip.png)"></i>arXiv</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="COLM" data-year="2026" data-arxiv="d4wrBuJ4xo" data-abstract="Training tool-augmented large language models has evolved from supervised fine-tuning (SFT) to reinforcement learning with verifiable rewards (RLVR). Yet existing methods rarely examine whether intermediate execution logic—specifically, the procedural fidelity of multi-turn tool invocations—requires explicit supervision. We hypothesize that enforcing sequential validity at the turn level is a prerequisite for robust multi-turn task completion. To this end, we introduce a Procedure-Aware Reinforcement Learning Framework that explicitly evaluates procedural validity through both invocation chain quality and final system state correctness. Using Group Relative Policy Optimization (GRPO) with KL regularization to fine-tune Qwen2.5-3B-Instruct, we demonstrate on API-Bank, Bamboogle, and BFCL-V3 that our approach consistently outperforms correctness-only baselines. Despite operating at a substantially smaller scale, our 3B model achieves average accuracy competitive with proprietary models such as GPT-5-mini, GPT-4.1-mini, Claude-Haiku-4.5, and Gemini-2.5-Flash-Lite, whose scores are obtained under BFCL’s official per-model evaluation protocols. Qualitative analysis reveals that optimizing tool sequencing yields emergent benefits, simultaneously enhancing multi-turn performance and error recovery from failed tool calls.">
  <div class="pub-left"><span class="pb pb-iclr">COLM 2026</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/images/featured/parl-ai.jpg" width="1000" height="333" alt="Procedure-Aware RL: the same tool calls in the right order succeed and in the wrong order fail"></div>
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=d4wrBuJ4xo" target="_blank" rel="noopener noreferrer">Procedure-Aware Reinforcement Learning for Tool-Augmented Large Language Models</a>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">Training tool-augmented large language models has evolved from supervised fine-tuning (SFT) to reinforcement learning with verifiable rewards (RLVR). Yet existing methods rarely examine whether intermediate execution logic—specifically, the procedural fidelity of multi-turn tool invocations—requires explicit supervision. We hypothesize that enforcing sequential validity at the turn level is a prerequisite for robust multi-turn task completion. To this end, we introduce a Procedure-Aware Reinforcement Learning Framework that explicitly evaluates procedural validity through both invocation chain quality and final system state correctness. Using Group Relative Policy Optimization (GRPO) with KL regularization to fine-tune Qwen2.5-3B-Instruct, we demonstrate on API-Bank, Bamboogle, and BFCL-V3 that our approach consistently outperforms correctness-only baselines. Despite operating at a substantially smaller scale, our 3B model achieves average accuracy competitive with proprietary models such as GPT-5-mini, GPT-4.1-mini, Claude-Haiku-4.5, and Gemini-2.5-Flash-Lite, whose scores are obtained under BFCL’s official per-model evaluation protocols. Qualitative analysis reveals that optimizing tool sequencing yields emergent benefits, simultaneously enhancing multi-turn performance and error recovery from failed tool calls.</div></div>
    <div class="pub-authors">Q. Zheng*, <strong>J. Fan*</strong>, C. Cheng, G. Liu</div>
    <div class="pub-desc">Procedure-Aware RL: a procedural reward and an error-aware penalty on top of GRPO, so tool-using agents learn to order their calls.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-awards.png);mask-image:url(/images/icons/sh-awards.png)"></i>3B model competitive with GPT-5-mini and Claude-Haiku-4.5 on BFCL-V3</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=d4wrBuJ4xo" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
      <a class="pub-link pl-project" href="/projects/procedure-aware-rl/"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-link.png);mask-image:url(/images/icons/h-link.png)"></i>Project</a>
      <a class="pub-link pl-video" href="/film/?s=procedure-aware-rl">Video</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="TMLR" data-year="2026" data-arxiv="2506.07459" data-abstract="Protein generative models have shown remarkable promise in protein design, yet their success rates remain constrained by reliance on curated sequence-structure datasets and by misalignment between supervised objectives and real design goals. We present ProteinZero, an online reinforcement learning framework for inverse folding models that enables scalable, automated, and continuous self-improvement with computationally efficient feedback. ProteinZero employs a reward pipeline that combines structural guidance from ESMFold with a novel self-derived ddG predictor, providing stable multi-objective signals while avoiding the prohibitive cost of physics-based methods. To ensure robustness in online RL, we further introduce a novel embedding-level diversity regularizer that mitigates mode collapse and promotes sequence-level diversity among generated designs. Within a general RL formulation balancing multi-reward optimization, KL-divergence from a reference model, and diversity regularization, ProteinZero achieves robust improvements across designability, predicted stability, recovery, and diversity. On the CATH-4.3 benchmark, it consistently outperforms state-of-the-art baselines including ProteinMPNN, ESM-IF, and InstructPLM, reducing design failure rates by 36-48% and achieving success rates above 90% across diverse folds. Importantly, a complete RL run can be executed on a single 8xGPU node within three days, including reward computation and data generation. These results indicate that efficient online RL fine-tuning can complement supervised pretraining by allowing protein generative models to evolve continuously from their own outputs and optimize multiple design objectives without labeled data, opening new possibilities for exploring the vast protein design space. Code and model checkpoints are available at https://github.com/ziwenwang28/ProteinZero.">
  <div class="pub-left"><span class="pb pb-journal">TMLR 2026</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/images/featured/proteinzero-ai.jpg" width="1000" height="333" alt="ProteinZero: a protein inside an online learning loop, spreading into diverse new designs"></div>
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2506.07459" target="_blank" rel="noopener noreferrer">ProteinZero: Self-Improving Protein Generation via Online Reinforcement Learning</a>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">Protein generative models have shown remarkable promise in protein design, yet their success rates remain constrained by reliance on curated sequence-structure datasets and by misalignment between supervised objectives and real design goals. We present ProteinZero, an online reinforcement learning framework for inverse folding models that enables scalable, automated, and continuous self-improvement with computationally efficient feedback. ProteinZero employs a reward pipeline that combines structural guidance from ESMFold with a novel self-derived ddG predictor, providing stable multi-objective signals while avoiding the prohibitive cost of physics-based methods. To ensure robustness in online RL, we further introduce a novel embedding-level diversity regularizer that mitigates mode collapse and promotes sequence-level diversity among generated designs. Within a general RL formulation balancing multi-reward optimization, KL-divergence from a reference model, and diversity regularization, ProteinZero achieves robust improvements across designability, predicted stability, recovery, and diversity. On the CATH-4.3 benchmark, it consistently outperforms state-of-the-art baselines including ProteinMPNN, ESM-IF, and InstructPLM, reducing design failure rates by 36-48% and achieving success rates above 90% across diverse folds. Importantly, a complete RL run can be executed on a single 8xGPU node within three days, including reward computation and data generation. These results indicate that efficient online RL fine-tuning can complement supervised pretraining by allowing protein generative models to evolve continuously from their own outputs and optimize multiple design objectives without labeled data, opening new possibilities for exploring the vast protein design space. Code and model checkpoints are available at <a href="https://github.com/ziwenwang28/ProteinZero" target="_blank" rel="noopener noreferrer">https://github.com/ziwenwang28/ProteinZero</a>.</div></div>
    <div class="pub-authors">Z. Wang*, <strong>J. Fan*</strong>, R. Guo, T. Nguyen, H. Ji, G. Liu</div>
    <div class="pub-desc">ProteinZero: online RL for protein design — the model keeps improving from its own generations while staying diverse.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-rocket.png);mask-image:url(/images/icons/h-rocket.png)"></i>&gt;90% success on CATH-4.3 · code released</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://arxiv.org/abs/2506.07459" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
      <a class="pub-link pl-project" href="/projects/proteinzero/"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-link.png);mask-image:url(/images/icons/h-link.png)"></i>Project</a>
      <a class="pub-link pl-video" href="/film/?s=proteinzero">Video</a>
      <a class="pub-link pl-code" href="https://github.com/ziwenwang28/ProteinZero" target="_blank" rel="noopener noreferrer">Code</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="ICLR" data-year="2026" data-arxiv="2510.20867" data-abstract="The role of reasoning in Audio Large Language Models remains widely underexplored, as introducing a reasoning process often degrades rather than improves performance during inference, a phenomenon we term test-time inverse scaling, where longer reasoning chains yield progressively worse results. We demonstrate that this stems not from fundamental limitations of reasoning itself, but from inadequate training: models without proper guidance for the reasoning process produce hallucinatory, inconsistent reasoning that accumulates errors over longer chains. To address these challenges, we introduce CESAR (Consistent, Effective, and Scalable Audio Reasoners), shifting from outcome verification to rewarding the reasoning process. Our online reinforcement learning framework employs Group Relative Policy Optimization with a multi-faceted reward suite that incentivizes not only correctness and format but also consistency, structured analytical patterns, causal reasoning, domain-knowledge integration, and calibrated reasoning depth. CESAR resolves test-time inverse scaling, transforming reasoning from detriments into gains while revealing model-specific &quot;reasoning sweet spots&quot;, where performance peaks during test-time scaling. We achieve state-of-the-art results on MMAU Test-mini, substantially outperforming Gemini 2.5 Pro and GPT-4o Audio, and near-human-level performance on MMSU reasoning tasks. Through AI-as-judge evaluations and qualitative comparisons, we provide both quantitative and qualitative validation of our improved reasoning quality. Importantly, enhanced reasoning creates synergistic effects, simultaneously improving multimodal reasoning and perception capabilities. Overall, CESAR establishes a principled method for developing robust and scalable reasoning in Audio LLMs.">
  <div class="pub-left"><span class="pb pb-iclr">ICLR 2026</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/images/featured/cesar-ai.jpg" width="1000" height="333" alt="CESAR concept banner"></div>
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=DUr48hxO2h" target="_blank" rel="noopener noreferrer">Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards</a>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">The role of reasoning in Audio Large Language Models remains widely underexplored, as introducing a reasoning process often degrades rather than improves performance during inference, a phenomenon we term test-time inverse scaling, where longer reasoning chains yield progressively worse results. We demonstrate that this stems not from fundamental limitations of reasoning itself, but from inadequate training: models without proper guidance for the reasoning process produce hallucinatory, inconsistent reasoning that accumulates errors over longer chains. To address these challenges, we introduce CESAR (Consistent, Effective, and Scalable Audio Reasoners), shifting from outcome verification to rewarding the reasoning process. Our online reinforcement learning framework employs Group Relative Policy Optimization with a multi-faceted reward suite that incentivizes not only correctness and format but also consistency, structured analytical patterns, causal reasoning, domain-knowledge integration, and calibrated reasoning depth. CESAR resolves test-time inverse scaling, transforming reasoning from detriments into gains while revealing model-specific "reasoning sweet spots", where performance peaks during test-time scaling. We achieve state-of-the-art results on MMAU Test-mini, substantially outperforming Gemini 2.5 Pro and GPT-4o Audio, and near-human-level performance on MMSU reasoning tasks. Through AI-as-judge evaluations and qualitative comparisons, we provide both quantitative and qualitative validation of our improved reasoning quality. Importantly, enhanced reasoning creates synergistic effects, simultaneously improving multimodal reasoning and perception capabilities. Overall, CESAR establishes a principled method for developing robust and scalable reasoning in Audio LLMs.</div></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, R. Ren, J. Li, R. Pandey, P.G. Shivakumar, I. Bulyko, A. Gandhe, G. Liu, Y. Gu</div>
    <div class="pub-desc">CESAR: process-reward RL (GRPO) resolving test-time inverse scaling in Audio LLMs — models produce hallucinatory reasoning without proper guidance; CESAR fixes that.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-awards.png);mask-image:url(/images/icons/sh-awards.png)"></i>SOTA on MMAU Test-mini · Outperforms Gemini 2.5 Pro &amp; GPT-4o Audio</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=DUr48hxO2h" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
      <a class="pub-link pl-project" href="/projects/cesar/"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-link.png);mask-image:url(/images/icons/h-link.png)"></i>Project</a>
      <a class="pub-link pl-arxiv" href="https://arxiv.org/abs/2510.20867" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-paperclip.png);mask-image:url(/images/icons/h-paperclip.png)"></i>arXiv</a>
      <a class="pub-link pl-press" href="https://www.amazon.science/publications/incentivizing-consistent-effective-and-scalable-reasoning-capability-in-audio-llms-via-reasoning-process-rewards" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-megaphone.png);mask-image:url(/images/icons/h-megaphone.png)"></i>Amazon Science</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="ICLR" data-year="2026" data-arxiv="SP-VLA" data-abstract="Vision-Language-Action (VLA) models have attracted increasing attention for their strong control capabilities. However, their high computational cost and low execution frequency hinder their suitability for real-time tasks such as robotic manipulation and autonomous navigation. Existing VLA acceleration methods primarily focus on structural optimization, overlooking the fact that these models operate in sequential decision-making environments. As a result, temporal redundancy in sequential action generation and spatial redundancy in visual input remain unaddressed. To this end, we propose SP-VLA, a unified framework that accelerates VLA models by jointly scheduling models and pruning tokens. Specifically, we design an action-aware model scheduling mechanism that reduces temporal redundancy by dynamically switching between VLA model and a lightweight generator. Inspired by the human motion pattern of focusing on key decision points while relying on intuition for other actions, we categorize VLA actions into deliberative and intuitive, assigning the former to the VLA model and the latter to the lightweight generator, enabling frequency-adaptive execution through collaborative model scheduling. To address spatial redundancy, we further develop a spatio-semantic dual-aware token pruning method. Tokens are classified into spatial and semantic types and pruned based on their dual-aware importance to accelerate VLA inference. These two mechanisms work jointly to guide the VLA in focusing on critical actions and salient visual information, achieving effective acceleration while maintaining high accuracy. Extensive experiments show that our method achieves 1.5× lossless acceleration in LIBERO and 2.4× in SimplerEnv, with up to 6% average performance gain. Inference frequency and latency improve by 2.2× in SimplerEnv and 1.4× in LIBERO.">
  <div class="pub-left">
    
    <span class="pb pb-iclr">ICLR 2026</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/images/featured/spvla-ai.jpg" width="1000" height="333" alt="SPVLA concept banner"></div>
    <div class="pub-title"><a href="https://openreview.net/forum?id=RwdGIIjPlC" target="_blank" rel="noopener noreferrer">SP-VLA: A Joint Model Scheduling and Token Pruning Approach for VLA Model Acceleration</a>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">Vision-Language-Action (VLA) models have attracted increasing attention for their strong control capabilities. However, their high computational cost and low execution frequency hinder their suitability for real-time tasks such as robotic manipulation and autonomous navigation. Existing VLA acceleration methods primarily focus on structural optimization, overlooking the fact that these models operate in sequential decision-making environments. As a result, temporal redundancy in sequential action generation and spatial redundancy in visual input remain unaddressed. To this end, we propose SP-VLA, a unified framework that accelerates VLA models by jointly scheduling models and pruning tokens. Specifically, we design an action-aware model scheduling mechanism that reduces temporal redundancy by dynamically switching between VLA model and a lightweight generator. Inspired by the human motion pattern of focusing on key decision points while relying on intuition for other actions, we categorize VLA actions into deliberative and intuitive, assigning the former to the VLA model and the latter to the lightweight generator, enabling frequency-adaptive execution through collaborative model scheduling. To address spatial redundancy, we further develop a spatio-semantic dual-aware token pruning method. Tokens are classified into spatial and semantic types and pruned based on their dual-aware importance to accelerate VLA inference. These two mechanisms work jointly to guide the VLA in focusing on critical actions and salient visual information, achieving effective acceleration while maintaining high accuracy. Extensive experiments show that our method achieves 1.5× lossless acceleration in LIBERO and 2.4× in SimplerEnv, with up to 6% average performance gain. Inference frequency and latency improve by 2.2× in SimplerEnv and 1.4× in LIBERO.</div></div>
    <div class="pub-authors">Y. Li, Y. Meng, Z. Sun, K. Ji, C. Tang, <strong>J. Fan</strong>, X. Ma, S.-T. Xia, Z. Wang, W. Zhu</div>
    <div class="pub-desc">Action-aware model scheduling + spatio-semantic token pruning for VLA acceleration.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-impact.png);mask-image:url(/images/icons/sh-impact.png)"></i>1.5× lossless speedup (LIBERO) · 2.4× speedup (SimplerEnv)</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=RwdGIIjPlC" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="NeurIPS" data-year="2025" data-arxiv="2510.18053" data-abstract="Balancing exploration and exploitation during reinforcement learning fine-tuning of generative models presents a critical challenge, as existing approaches rely on fixed divergence regularization that creates an inherent dilemma: strong regularization preserves model capabilities but limits reward optimization, while weak regularization enables greater alignment but risks instability or reward hacking. We introduce Adaptive Divergence Regularized Policy Optimization (ADRPO), which automatically adjusts regularization strength based on advantage estimates-reducing regularization for high-value samples while applying stronger regularization to poor samples, enabling policies to navigate between exploration and aggressive exploitation according to data quality. Our implementation with Wasserstein-2 regularization for flow matching generative models achieves remarkable results on text-to-image generation, achieving better semantic alignment and diversity than offline methods like DPO and online methods with fixed regularization like ORW-CFM-W2. ADRPO enables a 2B parameter SD3 model to surpass much larger models with 4.8B and 12B parameters in attribute binding, semantic consistency, artistic style transfer, and compositional control while maintaining generation diversity. ADRPO generalizes to KL-regularized fine-tuning of both text-only LLMs and multi-modal reasoning models, enhancing existing online RL methods like GRPO. In LLM fine-tuning, ADRPO demonstrates an emergent ability to escape local optima through active exploration, while in multi-modal audio reasoning, it outperforms GRPO through superior step-by-step reasoning, enabling a 7B model to outperform substantially larger commercial models including Gemini 2.5 Pro and GPT-4o Audio, offering an effective plug-and-play solution to the exploration-exploitation challenge across diverse generative architectures and modalities.">
  <div class="pub-left"><span class="pb pb-neurips">NeurIPS 2025</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/images/featured/adrpo-ai.jpg" width="1000" height="333" alt="ADRPO concept banner"></div>
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=aXO0xg0ttW" target="_blank" rel="noopener noreferrer">Adaptive Divergence Regularized Policy Optimization for Fine-tuning Generative Models</a>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">Balancing exploration and exploitation during reinforcement learning fine-tuning of generative models presents a critical challenge, as existing approaches rely on fixed divergence regularization that creates an inherent dilemma: strong regularization preserves model capabilities but limits reward optimization, while weak regularization enables greater alignment but risks instability or reward hacking. We introduce Adaptive Divergence Regularized Policy Optimization (ADRPO), which automatically adjusts regularization strength based on advantage estimates-reducing regularization for high-value samples while applying stronger regularization to poor samples, enabling policies to navigate between exploration and aggressive exploitation according to data quality. Our implementation with Wasserstein-2 regularization for flow matching generative models achieves remarkable results on text-to-image generation, achieving better semantic alignment and diversity than offline methods like DPO and online methods with fixed regularization like ORW-CFM-W2. ADRPO enables a 2B parameter SD3 model to surpass much larger models with 4.8B and 12B parameters in attribute binding, semantic consistency, artistic style transfer, and compositional control while maintaining generation diversity. ADRPO generalizes to KL-regularized fine-tuning of both text-only LLMs and multi-modal reasoning models, enhancing existing online RL methods like GRPO. In LLM fine-tuning, ADRPO demonstrates an emergent ability to escape local optima through active exploration, while in multi-modal audio reasoning, it outperforms GRPO through superior step-by-step reasoning, enabling a 7B model to outperform substantially larger commercial models including Gemini 2.5 Pro and GPT-4o Audio, offering an effective plug-and-play solution to the exploration-exploitation challenge across diverse generative architectures and modalities.</div></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, T. Wei, C. Cheng, Y. Chen, G. Liu</div>
    <div class="pub-desc">ADRPO: sample-level adaptive divergence regularization — high-value samples get more freedom, poor samples get stronger constraint. Plug-and-play on top of any RLHF method.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-rocket.png);mask-image:url(/images/icons/h-rocket.png)"></i>2B SD3 surpasses 4.8B &amp; 12B models · Generalizes to LLMs &amp; audio reasoning</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=aXO0xg0ttW" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
      <a class="pub-link pl-project" href="/projects/adrpo/"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-link.png);mask-image:url(/images/icons/h-link.png)"></i>Project</a>
      <a class="pub-link pl-arxiv" href="https://arxiv.org/abs/2510.18053" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-paperclip.png);mask-image:url(/images/icons/h-paperclip.png)"></i>arXiv</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="NeurIPS" data-year="2025" data-arxiv="VarCon" data-abstract="Contrastive learning has proven to be highly efficient and adaptable in shaping representation spaces across diverse modalities by pulling similar samples together and pushing dissimilar ones apart. However, two key limitations persist: (1) Without explicit regulation of the embedding distribution, semantically related instances can inadvertently be pushed apart unless complementary signals guide pair selection, and (2) excessive reliance on large in-batch negatives and tailored augmentations hinders generalization. To address these limitations, we propose Variational Supervised Contrastive Learning (VarCon), which reformulates supervised contrastive learning as variational inference over latent class variables and maximizes a posterior-weighted evidence lower bound (ELBO) that replaces exhaustive pair-wise comparisons for efficient class-aware matching and grants fine-grained control over intra-class dispersion in the embedding space. Trained exclusively on image data, our experiments on CIFAR-10, CIFAR-100, ImageNet-100, and ImageNet-1K show that VarCon (1) achieves state-of-the-art performance for contrastive learning frameworks, reaching 79.36% Top-1 accuracy on ImageNet-1K and 78.29% on CIFAR-100 with a ResNet-50 encoder while converging in just 200 epochs; (2) yields substantially clearer decision boundaries and semantic organization in the embedding space, as evidenced by KNN classification, hierarchical clustering results, and transfer-learning assessments; and (3) demonstrates superior performance in few-shot learning than supervised baseline and superior robustness across various augmentation strategies. Our code is available at https://github.com/ziwenwang28/VarContrast.">
  <div class="pub-left">
    
    <span class="pb pb-neurips">NeurIPS 2025</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/images/featured/varcon-ai.jpg" width="1000" height="333" alt="VARCON concept banner"></div>
    <div class="pub-title"><a href="https://openreview.net/forum?id=uOOlHOq500" target="_blank" rel="noopener noreferrer">Variational Supervised Contrastive Learning</a>
      <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
      <div class="pub-abstract-preview">Contrastive learning has proven to be highly efficient and adaptable in shaping representation spaces across diverse modalities by pulling similar samples together and pushing dissimilar ones apart. However, two key limitations persist: (1) Without explicit regulation of the embedding distribution, semantically related instances can inadvertently be pushed apart unless complementary signals guide pair selection, and (2) excessive reliance on large in-batch negatives and tailored augmentations hinders generalization. To address these limitations, we propose Variational Supervised Contrastive Learning (VarCon), which reformulates supervised contrastive learning as variational inference over latent class variables and maximizes a posterior-weighted evidence lower bound (ELBO) that replaces exhaustive pair-wise comparisons for efficient class-aware matching and grants fine-grained control over intra-class dispersion in the embedding space. Trained exclusively on image data, our experiments on CIFAR-10, CIFAR-100, ImageNet-100, and ImageNet-1K show that VarCon (1) achieves state-of-the-art performance for contrastive learning frameworks, reaching 79.36% Top-1 accuracy on ImageNet-1K and 78.29% on CIFAR-100 with a ResNet-50 encoder while converging in just 200 epochs; (2) yields substantially clearer decision boundaries and semantic organization in the embedding space, as evidenced by KNN classification, hierarchical clustering results, and transfer-learning assessments; and (3) demonstrates superior performance in few-shot learning than supervised baseline and superior robustness across various augmentation strategies. Our code is available at <a href="https://github.com/ziwenwang28/VarContrast" target="_blank" rel="noopener noreferrer">https://github.com/ziwenwang28/VarContrast</a>.</div></div>
    <div class="pub-authors">Z. Wang, <strong>J. Fan</strong>, T. Nguyen, H. Ji, G. Liu</div>
    <div class="pub-desc">VarCon: supervised contrastive learning as variational inference — posterior-weighted ELBO replaces pairwise comparisons.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-chart.png);mask-image:url(/images/icons/h-chart.png)"></i>SOTA 79.36% Top-1 on ImageNet-1K with ResNet-50</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=uOOlHOq500" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="ICLR" data-year="2025" data-arxiv="ORW-CFM-W2" data-abstract="Recent advancements in reinforcement learning (RL) have achieved great success in fine-tuning diffusion-based generative models. However, fine-tuning continuous flow-based generative models to align with arbitrary user-defined reward functions remains challenging, particularly due to issues such as policy collapse from overoptimization and the prohibitively high computational cost of likelihoods in continuous-time flows. In this paper, we propose an easy-to-use and theoretically sound RL fine-tuning method, which we term Online Reward-Weighted Conditional Flow Matching with Wasserstein-2 Regularization (ORW-CFM-W2). Our method integrates RL into the flow matching framework to fine-tune generative models with arbitrary reward functions, without relying on gradients of rewards or filtered datasets. By introducing an online reward-weighting mechanism, our approach guides the model to prioritize high-reward regions in the data manifold. To prevent policy collapse and maintain diversity, we incorporate Wasserstein-2 (W2) distance regularization into our method and derive a tractable upper bound for it in flow matching, effectively balancing exploration and exploitation of policy optimization. We provide theoretical analyses to demonstrate the convergence properties and induced data distributions of our method, establishing connections with traditional RL algorithms featuring Kullback-Leibler (KL) regularization and offering a more comprehensive understanding of the underlying mechanisms and learning behavior of our approach. Extensive experiments on tasks including target image generation, image compression, and text-image alignment demonstrate the effectiveness of our method, where our method achieves optimal policy convergence while allowing controllable trade-offs between reward maximization and diversity preservation.">
  <div class="pub-left"><span class="pb pb-iclr">ICLR 2025</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/images/featured/orw-ai.jpg" width="1000" height="333" alt="ORW concept banner"></div>
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=2IoFFexvuw" target="_blank" rel="noopener noreferrer">Online Reward-Weighted Fine-Tuning of Flow Matching with Wasserstein Regularization</a>
      <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
      <div class="pub-abstract-preview">Recent advancements in reinforcement learning (RL) have achieved great success in fine-tuning diffusion-based generative models. However, fine-tuning continuous flow-based generative models to align with arbitrary user-defined reward functions remains challenging, particularly due to issues such as policy collapse from overoptimization and the prohibitively high computational cost of likelihoods in continuous-time flows. In this paper, we propose an easy-to-use and theoretically sound RL fine-tuning method, which we term Online Reward-Weighted Conditional Flow Matching with Wasserstein-2 Regularization (ORW-CFM-W2). Our method integrates RL into the flow matching framework to fine-tune generative models with arbitrary reward functions, without relying on gradients of rewards or filtered datasets. By introducing an online reward-weighting mechanism, our approach guides the model to prioritize high-reward regions in the data manifold. To prevent policy collapse and maintain diversity, we incorporate Wasserstein-2 (W2) distance regularization into our method and derive a tractable upper bound for it in flow matching, effectively balancing exploration and exploitation of policy optimization. We provide theoretical analyses to demonstrate the convergence properties and induced data distributions of our method, establishing connections with traditional RL algorithms featuring Kullback-Leibler (KL) regularization and offering a more comprehensive understanding of the underlying mechanisms and learning behavior of our approach. Extensive experiments on tasks including target image generation, image compression, and text-image alignment demonstrate the effectiveness of our method, where our method achieves optimal policy convergence while allowing controllable trade-offs between reward maximization and diversity preservation.</div></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, S. Shen, C. Cheng, Y. Chen, C. Liang, G. Liu</div>
    <div class="pub-desc">ORW-CFM-W2: first online RLHF for flow matching — no human data, no likelihood, no collapse. W2 regularization keeps generation diverse.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-awards.png);mask-image:url(/images/icons/sh-awards.png)"></i>First online RLHF for flow matching · Collapse-free W2 regularization</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=2IoFFexvuw" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
      <a class="pub-link pl-project" href="/projects/orw-cfm-w2/"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-link.png);mask-image:url(/images/icons/h-link.png)"></i>Project</a>
      <a class="pub-link pl-arxiv" href="https://arxiv.org/abs/2502.06061" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-paperclip.png);mask-image:url(/images/icons/h-paperclip.png)"></i>arXiv</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="Preprint" data-year="2025" data-arxiv="2510.18072" data-abstract="Flow-based generative models have shown remarkable success in text-to-image generation, yet fine-tuning them with intermediate feedback remains challenging, especially for continuous-time flow matching models. Most existing approaches solely learn from outcome rewards, struggling with the credit assignment problem. Alternative methods that attempt to learn a critic via direct regression on cumulative rewards often face training instabilities and model collapse in online settings. We present AC-Flow, a robust actor-critic framework that addresses these challenges through three key innovations: (1) reward shaping that provides well-normalized learning signals to enable stable intermediate value learning and gradient control, (2) a novel dual-stability mechanism that combines advantage clipping to prevent destructive policy updates with a warm-up phase that allows the critic to mature before influencing the actor, and (3) a scalable generalized critic weighting scheme that extends traditional reward-weighted methods while preserving model diversity through Wasserstein regularization. Through extensive experiments on Stable Diffusion 3, we demonstrate that AC-Flow achieves state-of-the-art performance in text-to-image alignment tasks and generalization to unseen human preference models. Our results demonstrate that even with a computationally efficient critic model, we can robustly finetune flow models without compromising generative quality, diversity, or stability.">
  <div class="pub-left">
    
    <span class="pb pb-arxiv">Preprint</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/images/featured/acflow-ai.jpg" width="1000" height="333" alt="ACFLOW concept banner"></div>
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2510.18072" target="_blank" rel="noopener noreferrer">Fine-tuning Flow Matching Generative Models with Intermediate Feedback</a>
      <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
      <div class="pub-abstract-preview">Flow-based generative models have shown remarkable success in text-to-image generation, yet fine-tuning them with intermediate feedback remains challenging, especially for continuous-time flow matching models. Most existing approaches solely learn from outcome rewards, struggling with the credit assignment problem. Alternative methods that attempt to learn a critic via direct regression on cumulative rewards often face training instabilities and model collapse in online settings. We present AC-Flow, a robust actor-critic framework that addresses these challenges through three key innovations: (1) reward shaping that provides well-normalized learning signals to enable stable intermediate value learning and gradient control, (2) a novel dual-stability mechanism that combines advantage clipping to prevent destructive policy updates with a warm-up phase that allows the critic to mature before influencing the actor, and (3) a scalable generalized critic weighting scheme that extends traditional reward-weighted methods while preserving model diversity through Wasserstein regularization. Through extensive experiments on Stable Diffusion 3, we demonstrate that AC-Flow achieves state-of-the-art performance in text-to-image alignment tasks and generalization to unseen human preference models. Our results demonstrate that even with a computationally efficient critic model, we can robustly finetune flow models without compromising generative quality, diversity, or stability.</div></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, C. Cheng, S. Shen, X. Zhou, G. Liu &nbsp;·&nbsp; <em>Under Review</em></div>
    <div class="pub-desc">AC-Flow: actor-critic with intermediate feedback for flow matching — reward shaping + dual-stability + Wasserstein regularization. Robust fine-tuning on SD3 without collapse.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-gear.png);mask-image:url(/images/icons/h-gear.png)"></i>Actor-critic with step-level reward · Stable SD3 fine-tuning without collapse</div>
    <div class="pub-links">
      <a class="pub-link pl-project" href="/projects/ac-flow/"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-link.png);mask-image:url(/images/icons/h-link.png)"></i>Project</a>
      <a class="pub-link pl-arxiv" href="https://arxiv.org/abs/2510.18072" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-paperclip.png);mask-image:url(/images/icons/h-paperclip.png)"></i>arXiv</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="TPAMI" data-year="2026" data-arxiv="2407.05010" data-abstract="We introduce PRANCE, a Vision Transformer compression framework that jointly optimizes the activated channels and reduces tokens, based on the characteristics of inputs. Specifically, PRANCE leverages adaptive token optimization strategies for a certain computational budget, aiming to accelerate ViTs&#x27; inference from a unified data and architectural perspective. However, the joint framework poses challenges to both architectural and decision-making aspects. Firstly, while ViTs inherently support variable-token inference, they do not facilitate dynamic computations for variable channels. To overcome this limitation, we propose a meta-network using weight-sharing techniques to support arbitrary channels of the Multi-head Self-Attention and Multi-layer Perceptron layers, serving as a foundational model for architectural decision-making. Second, simultaneously optimizing the structure of the meta-network and input data constitutes a combinatorial optimization problem with an extremely large decision space, reaching up to around 10^14, making supervised learning infeasible. To this end, we design a lightweight selector employing Proximal Policy Optimization for efficient decision-making. Furthermore, we introduce a novel &quot;Result-to-Go&quot; training mechanism that models ViTs&#x27; inference process as a Markov decision process, significantly reducing action space and mitigating delayed-reward issues during training. Extensive experiments demonstrate the effectiveness of PRANCE in reducing FLOPs by approximately 50%, retaining only about 10% of tokens while achieving lossless Top-1 accuracy. Additionally, our framework is shown to be compatible with various token optimization techniques such as pruning, merging, and sequential pruning-merging strategies. The code is available at https://github.com/ChildTang/PRANCE.">
  <div class="pub-left">
    
    <span class="pb pb-journal">TPAMI 2026</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/images/featured/prance-ai.jpg" width="1000" height="333" alt="PRANCE concept banner"></div>
    <div class="pub-title"><a href="https://arxiv.org/abs/2407.05010" target="_blank" rel="noopener noreferrer">PRANCE: Joint Token-Optimization and Structural Channel-Pruning for Adaptive ViT Inference</a>
      <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
      <div class="pub-abstract-preview">We introduce PRANCE, a Vision Transformer compression framework that jointly optimizes the activated channels and reduces tokens, based on the characteristics of inputs. Specifically, PRANCE leverages adaptive token optimization strategies for a certain computational budget, aiming to accelerate ViTs' inference from a unified data and architectural perspective. However, the joint framework poses challenges to both architectural and decision-making aspects. Firstly, while ViTs inherently support variable-token inference, they do not facilitate dynamic computations for variable channels. To overcome this limitation, we propose a meta-network using weight-sharing techniques to support arbitrary channels of the Multi-head Self-Attention and Multi-layer Perceptron layers, serving as a foundational model for architectural decision-making. Second, simultaneously optimizing the structure of the meta-network and input data constitutes a combinatorial optimization problem with an extremely large decision space, reaching up to around 10<sup>14</sup>, making supervised learning infeasible. To this end, we design a lightweight selector employing Proximal Policy Optimization for efficient decision-making. Furthermore, we introduce a novel "Result-to-Go" training mechanism that models ViTs' inference process as a Markov decision process, significantly reducing action space and mitigating delayed-reward issues during training. Extensive experiments demonstrate the effectiveness of PRANCE in reducing FLOPs by approximately 50%, retaining only about 10% of tokens while achieving lossless Top-1 accuracy. Additionally, our framework is shown to be compatible with various token optimization techniques such as pruning, merging, and sequential pruning-merging strategies. The code is available at <a href="https://github.com/ChildTang/PRANCE" target="_blank" rel="noopener noreferrer">https://github.com/ChildTang/PRANCE</a>.</div></div>
    <div class="pub-authors">Y. Li, C. Tang, Y. Meng, <strong>J. Fan</strong>, Z. Chai, X. Ma, Z. Wang, W. Zhu &nbsp;·&nbsp; <em>IEEE TPAMI</em></div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-impact.png);mask-image:url(/images/icons/sh-impact.png)"></i>Joint token + channel pruning · Adaptive ViT inference · IEEE TPAMI 2026</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://doi.org/10.1109/TPAMI.2025.3605239" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
      <a class="pub-link pl-arxiv" href="https://arxiv.org/abs/2407.05010" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-paperclip.png);mask-image:url(/images/icons/h-paperclip.png)"></i>arXiv</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="ICLR" data-year="2023" data-arxiv="LBC" data-abstract="The exploration problem is one of the main challenges in deep reinforcement learning (RL). Recent promising works tried to handle the problem with population-based methods, which collect samples with diverse behaviors derived from a population of different exploratory policies. Adaptive policy selection has been adopted for behavior control. However, the behavior selection space is largely limited by the predefined policy population, which further limits behavior diversity. In this paper, we propose a general framework called Learnable Behavioral Control (LBC) to address the limitation, which a) enables a significantly enlarged behavior selection space via formulating a hybrid behavior mapping from all policies; b) constructs a unified learnable process for behavior selection. We introduce LBC into distributed off-policy actor-critic methods and achieve behavior control via optimizing the selection of the behavior mappings with bandit-based meta-controllers. Our agents have achieved 10077.52% mean human normalized score and surpassed 24 human world records within 1B training frames in the Arcade Learning Environment, which demonstrates our significant state-of-the-art (SOTA) performance without degrading the sample efficiency.">
  <div class="pub-left">
    
    <span class="pb pb-oral">ICLR 2023<br>Oral</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/images/featured/lbc-ai.jpg" width="1000" height="333" alt="LBC concept banner"></div>
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=FeWvD0L_a4" target="_blank" rel="noopener noreferrer">Learnable Behavior Control: Breaking Atari Human World Records via Sample-Efficient Behavior Selection</a>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">The exploration problem is one of the main challenges in deep reinforcement learning (RL). Recent promising works tried to handle the problem with population-based methods, which collect samples with diverse behaviors derived from a population of different exploratory policies. Adaptive policy selection has been adopted for behavior control. However, the behavior selection space is largely limited by the predefined policy population, which further limits behavior diversity. In this paper, we propose a general framework called Learnable Behavioral Control (LBC) to address the limitation, which a) enables a significantly enlarged behavior selection space via formulating a hybrid behavior mapping from all policies; b) constructs a unified learnable process for behavior selection. We introduce LBC into distributed off-policy actor-critic methods and achieve behavior control via optimizing the selection of the behavior mappings with bandit-based meta-controllers. Our agents have achieved 10077.52% mean human normalized score and surpassed 24 human world records within 1B training frames in the Arcade Learning Environment, which demonstrates our significant state-of-the-art (SOTA) performance without degrading the sample efficiency.</div></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, Y. Zhuang, Y. Liu, J. Hao, B. Wang, J. Zhu, H. Wang, S.-T. Xia</div>
    <div class="pub-desc">LBC: learnable hybrid behavior mapping + bandit meta-controller. Unified framework for exploration control in deep RL.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-awards.png);mask-image:url(/images/icons/sh-awards.png)"></i>Ranked 5/4176 · 10,077% mean human-normalized score · 24 world records · 100× data efficiency</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=FeWvD0L_a4" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
      <a class="pub-link pl-project" href="/projects/lbc/"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-link.png);mask-image:url(/images/icons/h-link.png)"></i>Project</a>
      <a class="pub-link pl-arxiv" href="https://arxiv.org/abs/2305.05239" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-paperclip.png);mask-image:url(/images/icons/h-paperclip.png)"></i>arXiv</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="ICML" data-year="2022" data-arxiv="GDI" data-abstract="To obtain higher sample efficiency and superior final performance simultaneously has been one of the major challenges for deep reinforcement learning (DRL). Previous work could handle one of these challenges but typically failed to address them concurrently. In this paper, we try to tackle these two challenges simultaneously. To achieve this, we firstly decouple these challenges into two classic RL problems: data richness and exploration-exploitation trade-off. Then, we cast these two problems into the training data distribution optimization problem, namely to obtain desired training data within limited interactions, and address them concurrently via i) explicit modeling and control of the capacity and diversity of behavior policy and ii) more fine-grained and adaptive control of selective/sampling distribution of the behavior policy using a monotonic data distribution optimization. Finally, we integrate this process into Generalized Policy Iteration (GPI) and obtain a more general framework called Generalized Data Distribution Iteration (GDI). We use the GDI framework to introduce operator-based versions of well-known RL methods from DQN to Agent57. Theoretical guarantee of the superiority of GDI compared with GPI is concluded. We also demonstrate our state-of-the-art (SOTA) performance on Arcade Learning Environment (ALE), wherein our algorithm has achieved 9620.33% mean human normalized score (HNS), 1146.39% median HNS and surpassed 22 human world records using only 200M training frames. Our performance is comparable to Agent57&#x27;s while we consume 500 times less data. We argue that there is still a long way to go before obtaining real superhuman agents in ALE.">
  <div class="pub-left">
    
    <span class="pb pb-icml">ICML 2022</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/images/featured/gdi-ai.jpg" width="1000" height="333" alt="GDI concept banner"></div>
    <div class="pub-title">
      <a href="https://proceedings.mlr.press/v162/fan22c.html" target="_blank" rel="noopener noreferrer">Generalized Data Distribution Iteration</a>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">To obtain higher sample efficiency and superior final performance simultaneously has been one of the major challenges for deep reinforcement learning (DRL). Previous work could handle one of these challenges but typically failed to address them concurrently. In this paper, we try to tackle these two challenges simultaneously. To achieve this, we firstly decouple these challenges into two classic RL problems: data richness and exploration-exploitation trade-off. Then, we cast these two problems into the training data distribution optimization problem, namely to obtain desired training data within limited interactions, and address them concurrently via i) explicit modeling and control of the capacity and diversity of behavior policy and ii) more fine-grained and adaptive control of selective/sampling distribution of the behavior policy using a monotonic data distribution optimization. Finally, we integrate this process into Generalized Policy Iteration (GPI) and obtain a more general framework called Generalized Data Distribution Iteration (GDI). We use the GDI framework to introduce operator-based versions of well-known RL methods from DQN to Agent57. Theoretical guarantee of the superiority of GDI compared with GPI is concluded. We also demonstrate our state-of-the-art (SOTA) performance on Arcade Learning Environment (ALE), wherein our algorithm has achieved 9620.33% mean human normalized score (HNS), 1146.39% median HNS and surpassed 22 human world records using only 200M training frames. Our performance is comparable to Agent57's while we consume 500 times less data. We argue that there is still a long way to go before obtaining real superhuman agents in ALE.</div></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, C. Xiao</div>
    <div class="pub-desc">GDI: optimizing the data distribution is the key to superhuman RL efficiency. Unified framework for diverse RL algorithms.</div>
    <div class="pub-hl"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-chart.png);mask-image:url(/images/icons/h-chart.png)"></i>9,620% mean human-normalized score · 22 world records · 500× less data than Agent57</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://proceedings.mlr.press/v162/fan22c.html" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-pubs.png);mask-image:url(/images/icons/sh-pubs.png)"></i>Paper</a>
      <a class="pub-link pl-project" href="/projects/gdi/"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-link.png);mask-image:url(/images/icons/h-link.png)"></i>Project</a>
      <a class="pub-link pl-arxiv" href="https://arxiv.org/abs/2206.03192" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-paperclip.png);mask-image:url(/images/icons/h-paperclip.png)"></i>arXiv</a>
    </div>
  </div>
</div>

<p id="pub-empty-state" style="display:none;text-align:center;color:#767676;padding:24px 0;font-size:0.9em;">No publications match your search. <a href="/publications/">Browse the full list →</a></p>

</div>


<!-- ════════════ RESEARCH GRAPH ════════════ -->
<h2 class="section-header" id="research-graph-section"><img class="sh-icon" src="/images/icons/sh-network.png" alt="">Research Paper Network</h2>
<p style="font-size:0.88em;color:#595959;margin-bottom:14px;">Hover a node to highlight connections; click or tap it to open the paper. Colours mark the research theme; arrows show how ideas evolved.</p>
<div id="research-graph" role="img" aria-label="Network graph showing how Jiajun Fan's papers connect by research theme: from Deep RL (GDI, LBC) to RL training and flow matching for generative models (ORW-CFM-W2, ADRPO, AC-Flow, ProteinZero) to audio reasoning (CESAR) and tool-use agents (PARL)."></div>

<!-- ═══════════════════════════════ NORTH STAR ═══════════════════════════ -->
<h2 class="section-header" id="northstar"><img class="sh-icon" src="/images/icons/sh-northstar.png" alt="">Research North Star</h2>
<p class="pillar-intro">My long-term goal is <strong>AI that improves itself with minimal human supervision</strong>. Everything I build ladders into three autonomous capabilities:</p>

<div class="pillar-grid">
  <div class="pillar-card">
    <img class="pillar-img" loading="lazy" src="/images/featured/pillar-evolve.jpg" alt="Auto self-evolution: a model leveling itself up from its own outputs">
    <div class="pillar-body">
      <div class="pillar-kicker">Auto Self-Evolution</div>
      <div class="pillar-title">Models that improve themselves</div>
      <div class="pillar-desc">Generative models and reasoning LLMs that self-improve from their own outputs and environment feedback — no human-labeled data. Reward-weighted, collapse-free, process-supervised online RL.</div>
      <div class="pillar-papers"><span class="pillar-tag">ORW-CFM-W2</span><span class="pillar-tag">ADRPO</span><span class="pillar-tag">AC-Flow</span><span class="pillar-tag">CESAR</span></div>
    </div>
  </div>
  <div class="pillar-card">
    <img class="pillar-img" loading="lazy" src="/images/featured/pillar-explore.jpg" alt="Auto exploration: an agent autonomously searching a vast space">
    <div class="pillar-body">
      <div class="pillar-kicker">Auto Exploration</div>
      <div class="pillar-title">Agents that explore on their own</div>
      <div class="pillar-desc">Sample-efficient, self-directed exploration that enlarges what an agent can discover — learnable behavior control and data-distribution optimization that reached superhuman play with orders of magnitude less data.</div>
      <div class="pillar-papers"><span class="pillar-tag">LBC</span><span class="pillar-tag">GDI</span></div>
    </div>
  </div>
  <div class="pillar-card">
    <img class="pillar-img" loading="lazy" src="/images/featured/pillar-research.jpg" alt="Auto research: an AI agent running the scientific loop autonomously">
    <div class="pillar-body">
      <div class="pillar-kicker">Auto Research</div>
      <div class="pillar-title">AI that does research</div>
      <div class="pillar-desc">The horizon: agents that run the full scientific loop — hypothesize, experiment, analyze, refine — autonomously. Agentic RL that turns self-evolution and self-exploration into self-driven discovery.</div>
      <div class="pillar-papers"><span class="pillar-tag">Agentic RL</span><span class="pillar-tag">Ongoing</span></div>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════ RESEARCH ═══════════════════════════ -->
<h2 class="section-header" id="research"><img class="sh-icon" src="/images/icons/sh-research.png" alt="">Research Interests</h2>

<div class="research-grid">
  <div class="research-card">
    <img class="rc-icon-img" loading="lazy" src="/images/icons/ri-flow.png" alt="">
    <div class="rc-title">RL Post-Training for Generative Models</div>
    <div class="rc-desc">Collapse-free online RLHF for flow/diffusion models. No human-collected preference data needed — models improve from their own generations (ORW-CFM-W2, ADRPO, AC-Flow).</div>
  </div>
  <div class="research-card">
    <img class="rc-icon-img" loading="lazy" src="/images/icons/ri-reason.png" alt="">
    <div class="rc-title">Multimodal Reasoning LLMs</div>
    <div class="rc-desc">Process-reward RL for audio/visual LLMs — fixing test-time inverse scaling so reasoning actually helps, not hurts (CESAR).</div>
  </div>
  <div class="research-card">
    <img class="rc-icon-img" loading="lazy" src="/images/icons/ri-superhuman.png" alt="">
    <div class="rc-title">Superhuman Deep RL</div>
    <div class="rc-desc">Sample-efficient RL that exceeds human performance. Broke 24 Atari world records with 100× less data (LBC), and matched Agent57 with 500× less data (GDI).</div>
  </div>
  <div class="research-card">
    <img class="rc-icon-img" loading="lazy" src="/images/icons/ri-agentic.png" alt="">
    <div class="rc-title">Agentic RL</div>
    <div class="rc-desc">RL for tool-using, multi-turn agents — rewarding the order of tool calls and the state they leave behind, and training voice agents end to end in native speech (Procedure-Aware RL, SpeechGym).</div>
  </div>
  <div class="research-card">
    <img class="rc-icon-img" loading="lazy" src="/images/icons/ri-rsi.png" alt="">
    <div class="rc-title">Recursive Self-Improvement</div>
    <div class="rc-desc">Models that keep improving themselves: each improved policy becomes the critic and teacher of its successor, removing human scaffolding from RL post-training step by step (AudioRSI).</div>
  </div>
  <div class="research-card">
    <img class="rc-icon-img" loading="lazy" src="/images/icons/ri-discovery.png" alt="">
    <div class="rc-title">Agentic Scientific Discovery</div>
    <div class="rc-desc">Agents that run a design loop on their own — propose, test, learn — starting with protein design that keeps improving from its own designs (ProteinZero), toward agents that run the research loop itself.</div>
  </div>
</div>

<!-- ═══════════════════════════════ STATS ═══════════════════════════════ -->
<h2 class="section-header" id="impact"><img class="sh-icon" src="/images/icons/sh-impact.png" alt="">Impact at a Glance</h2>

<div class="stats-row">
  <div class="stat-card">
    <div class="stat-number" data-target="13" data-suffix="+">0</div>
    <div class="stat-label">Top Venue Papers<br><em>ICLR · NeurIPS · ICML · TPAMI</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number" data-target="24">0</div>
    <div class="stat-label">Atari World Records<br><em>broken by LBC (ICLR'23 Oral)</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number" data-target="500" data-suffix="×">0</div>
    <div class="stat-label">More Data-Efficient<br><em>than Agent57 — GDI (ICML'22)</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number">SOTA</div>
    <div class="stat-label">MMAU Audio Reasoning<br><em>Beats Gemini 2.5 Pro</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number" data-target="{{ site.data.citations._total | default: 560 }}" data-suffix="+">0</div>
    <div class="stat-label">Google Scholar Citations</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">4.0</div>
    <div class="stat-label">GPA — UIUC Ph.D.<br><em>Computer Science</em></div>
  </div>
</div>


<!-- Citations over time (cumulative) — auto-updated daily via SerpAPI → _data/citations.json (static Liquid-rendered SVG, never a broken widget) -->
{% assign by_year = site.data.citations._by_year %}
{% if by_year and by_year.size > 0 %}
{% assign n = by_year.size %}{% assign span = n | minus: 1 %}
{% assign total = 0 %}{% for y in by_year %}{% assign total = total | plus: y.citations %}{% endfor %}
{% comment %} scale/end the curve at the true grand total; Scholar's per-year histogram can miss undated citations {% endcomment %}
{% assign gt = site.data.citations._total | default: total %}{% if gt < total %}{% assign gt = total %}{% endif %}
{% assign cum = 0 %}{% assign linePts = "" %}
{% for y in by_year %}{% assign cum = cum | plus: y.citations %}{% if forloop.last %}{% assign cum = gt %}{% endif %}
  {% assign x = forloop.index0 | times: 680 | divided_by: span | plus: 20 %}
  {% assign yv = cum | times: 152 | divided_by: gt %}{% assign yy = 176 | minus: yv %}
  {% assign linePts = linePts | append: x | append: ',' | append: yy | append: ' ' %}{% endfor %}
<div class="cit-chart">
  <div class="cit-chart-head">
    <span class="cit-chart-title">Cumulative citations</span>
    <span class="cit-chart-sub">Google Scholar &middot; {{ site.data.citations._total }} citations &middot; h-index {{ site.data.citations._h_index | default: 12 }} &middot; i10 {{ site.data.citations._i10_index | default: 13 }} &middot; auto-updated daily</span>
  </div>
  <svg class="ct-svg" viewBox="0 0 720 210" preserveAspectRatio="none" role="img" aria-label="Cumulative citations over time">
    <defs>
      <linearGradient id="ctLine" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6F94C6"/><stop offset="1" stop-color="#2F4B8F"/></linearGradient>
      <linearGradient id="ctArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F4B8F" stop-opacity="0.30"/><stop offset="1" stop-color="#2F4B8F" stop-opacity="0.02"/></linearGradient>
    </defs>
    <polygon class="ct-area" points="{{ linePts }}700,176 20,176"/>
    <polyline class="ct-line" pathLength="1" points="{{ linePts }}"/>
    {% assign cum = 0 %}{% for y in by_year %}{% assign cum = cum | plus: y.citations %}{% if forloop.last %}{% assign cum = gt %}{% endif %}
    {% assign x = forloop.index0 | times: 680 | divided_by: span | plus: 20 %}
    {% assign yv = cum | times: 152 | divided_by: gt %}{% assign yy = 176 | minus: yv %}
    <circle class="ct-dot{% if forloop.last %} ct-dot-last{% endif %}" cx="{{ x }}" cy="{{ yy }}" r="4"><title>{{ y.year }}: {{ cum }} total</title></circle>
    <text class="ct-val{% if forloop.last %} ct-val-last{% endif %}" x="{{ x }}" y="{{ yy | minus: 11 }}">{{ cum }}</text>
    <text class="ct-year" x="{{ x }}" y="197">{{ y.year }}</text>{% endfor %}
  </svg>
</div>
{% endif %}

<!-- ═══════════════════════════════ VISION ════════════════════════════ -->
<h2 class="section-header" id="vision"><img class="sh-icon" src="/images/icons/sh-vision.png" alt="">Research Vision</h2>

<blockquote class="vision-quote">
<p class="vision-quote-title">Making AI Systems That Improve Themselves</p>
<p class="vision-quote-body">
Today's AI is frozen after training. I work to change that: AI that <strong>never stops getting better</strong>, with progressively less human scaffolding.
</p>
</blockquote>

{% include anim/strip_vision.html %}

<!-- ═══════════════════════════════ AWARDS ════════════════════════════ -->
<h2 class="section-header" id="awards"><img class="sh-icon" src="/images/icons/sh-awards.png" alt="">Awards &amp; Academic Service</h2>

<div class="awards-grid">
  <div>
    <p class="awards-col-title"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-awards.png);mask-image:url(/images/icons/sh-awards.png)"></i>Selected Awards</p>
    <ul class="awards-col-list">
      <li>National Scholarship ×2, Top 1% — Nankai Univ.</li>
      <li>Ranked <strong>1st / 83</strong> in major — Nankai Univ.</li>
      <li>Outstanding Graduates (Top 1%) — Nankai Univ.</li>
      <li>Tang Lixin Scholarship (Top 1%)</li>
      <li>GPA <strong>4.0/4.0</strong> — UIUC Ph.D.</li>
      <li>ICLR 2023 Oral (notable top 5%; ranked <strong>5/4176</strong>) — LBC paper</li>
      <li>GPA <strong>3.97/4.0</strong>, Top 1.3% — Tsinghua M.Eng.</li>
    </ul>
  </div>
  <div>
    <p class="awards-col-title"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-search.png);mask-image:url(/images/icons/h-search.png)"></i>Reviewer</p>
    <ul class="awards-col-list">
      <li>ICML 2023–2024 · <strong>2025 · 2026</strong></li>
      <li>ICLR 2024 · <strong>2025 · 2026</strong></li>
      <li>NeurIPS 2022–2023 · <strong>2024–2026</strong></li>
      <li>COLM <strong>2026</strong> · CVPR <strong>2026</strong> · WACV <strong>2027</strong></li>
      <li>AAAI 2025 · <strong>2027</strong> · AISTATS 2025 · KDD 2024</li>
    </ul>
  </div>
</div>

<!-- ═══════════════════════════════ CONTACT ══════════════════════════ -->
<h2 class="section-header" id="deadlines"><img class="sh-icon" src="/images/icons/sh-deadlines.png" alt="">Conference Deadlines</h2>
<p style="font-size:0.84em;color:#595959;margin-bottom:14px;">Key AI/ML venue deadlines I track — for the full list see <a href="https://ccfddl.com/" target="_blank" rel="noopener noreferrer">ccfddl.com</a>.</p>
<div id="conf-ddl-grid" class="conf-ddl-grid"></div>

<script>
(function(){
  /* Dates checked against each official site on 2026-10-19 (AoE). Cards sort themselves by the next date. */
  var CONF = [
    { name:'NeurIPS 2026', abbr:'NeurIPS', type:'ML', color:'#1565c0',
      location:'Sydney \u00b7 Atlanta \u00b7 Paris', conf:'Dec 6\u201313, 2026', url:'https://neurips.cc/Conferences/2026',
      deadlines:[
        {label:'Notification',       date:'2026-09-24', passed:true},
        {label:'Early Registration', date:'2026-10-30'},
        {label:'Conference',         date:'2026-12-06'},
      ]},
    { name:'ICLR 2027', abbr:'ICLR', type:'ML', color:'#7c3aed',
      location:'California, USA', conf:'Apr 26\u201330, 2027', url:'https://iclr.cc/Conferences/2027',
      deadlines:[
        {label:'Paper Submission', date:'2026-09-25', passed:true},
        {label:'Reviews Released', date:'2026-11-05'},
        {label:'Decisions',        date:'2026-12-16'},
      ]},
    { name:'CVPR 2027', abbr:'CVPR', type:'CV', color:'#059669',
      location:'Seattle, WA, USA', conf:'Jun 20\u201325, 2027', url:'https://cvpr.thecvf.com/Conferences/2027/CallForPapers',
      deadlines:[
        {label:'Paper Enrollment', date:'2026-11-10'},
        {label:'Paper Submission', date:'2026-11-16'},
        {label:'Supplementary',    date:'2026-11-23'},
        {label:'Decisions',        date:'2027-02-25'},
      ]},
    { name:'ACL 2027', abbr:'ACL', type:'NLP', color:'#c2410c',
      location:'Kyoto, Japan', conf:'Aug 17\u201322, 2027', url:'https://2027.aclweb.org/',
      deadlines:[
        {label:'ARR Submission', date:'2027-01-04'},
      ]},
    { name:'IJCAI 2027', abbr:'IJCAI', type:'AI', color:'#0e7490',
      location:'Kyoto, Japan', conf:'Aug 7\u201313, 2027', url:'https://2027.ijcai.org/',
      deadlines:[
        {label:'Abstract',         date:'2027-01-04'},
        {label:'Paper Submission', date:'2027-01-11'},
      ]},
    { name:'ICML 2027', abbr:'ICML', type:'ML', color:'#1565c0',
      location:'South America', conf:'Dates TBA', url:'https://icml.cc/Conferences/FutureMeetings',
      deadlines:[
        {label:'Abstract',         date:null},
        {label:'Paper Submission', date:null},
      ]},
  ];
  (function sortByNext(){
    var now = new Date();
    function next(c){ for (var i = 0; i < c.deadlines.length; i++) { var d = c.deadlines[i]; if (!d.date || d.passed) continue;
      var q = d.date.split('-'), dt = new Date(+q[0], +q[1]-1, +q[2], 23, 59, 59); if (dt >= now) return dt.getTime(); } return Infinity; }
    CONF.sort(function(a, b){ return next(a) - next(b); });
  })();

  var grid = document.getElementById('conf-ddl-grid');
  if (!grid) return;
  var now = new Date();

  CONF.forEach(function(c) {
    var next = null;
    for (var i = 0; i < c.deadlines.length; i++) {
      var d = c.deadlines[i];
      if (!d.date) continue;
      if (d.passed) continue;
      var p = d.date.split('-');
      var dt = new Date(+p[0], +p[1]-1, +p[2], 23, 59, 59);
      if (dt >= now) { next = {label: d.label, dt: dt}; break; }
    }

    var chip = '';
    if (next) {
      var diff = Math.ceil((next.dt - now) / 86400000);
      var urgency = diff <= 14 ? 'u-hot' : diff <= 60 ? 'u-soon' : 'u-later';
      chip = '<span class="ddl-chip ' + urgency + '">'
           + next.label + ' · ' + (diff <= 0 ? 'Today!' : diff + 'd') + '</span>';
    } else if (c.deadlines.length && c.deadlines[0].date === null) {
      chip = '<span class="ddl-chip u-later">Submission TBA</span>';
    } else {
      chip = '<span class="ddl-chip u-later">Done <i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-check.png);mask-image:url(/images/icons/h-check.png)"></i></span>';
    }

    var card = document.createElement('div');
    card.className = 'ddl-card';
    card.innerHTML = '<div class="ddl-top">'
      + '<span class="ddl-abbr">' + c.abbr + '</span>'
      + '<span class="ddl-type">' + c.type + '</span>'
      + '</div>'
      + '<div class="ddl-name"><a href="' + c.url + '" target="_blank" rel="noopener noreferrer">' + c.name + '</a></div>'
      + '<div class="ddl-meta"><span class="ddl-line"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-pin.png);mask-image:url(/images/icons/h-pin.png)"></i>' + c.location + '</span><span class="ddl-line"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-deadlines.png);mask-image:url(/images/icons/sh-deadlines.png)"></i>' + c.conf + '</span></div>'
      + chip;
    grid.appendChild(card);
  });
})();
</script>

<h2 class="section-header" id="contact"><img class="sh-icon" src="/images/icons/sh-contact.png" alt="">Contact</h2>
<p style="font-size:0.94em;">
Happy to discuss research, internships, or collaborations. Best reached by email.<br>
<i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-email.png);mask-image:url(/images/icons/h-email.png)"></i><a href="mailto:jiajunf3@illinois.edu"><strong>jiajunf3@illinois.edu</strong></a> &nbsp;·&nbsp;
<i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-building.png);mask-image:url(/images/icons/h-building.png)"></i>Siebel Center for CS, UIUC &nbsp;·&nbsp;
<a href="/cv/"><strong>CV</strong></a> &nbsp;·&nbsp;
<a href="https://www.linkedin.com/in/jiajun-fan-57b12b26b" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-linkedin.png);mask-image:url(/images/icons/h-linkedin.png)"></i>LinkedIn</a> &nbsp;·&nbsp;
<a href="https://orcid.org/0000-0002-0263-2103" target="_blank" rel="noopener noreferrer"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/sh-research.png);mask-image:url(/images/icons/sh-research.png)"></i>ORCID</a>
</p>

<!-- Scroll-to-top + Dark mode buttons -->
<button class="scroll-top" id="scrollTop" onclick="window.scrollTo(0,0)" aria-label="Back to top">↑</button>
<button class="dark-toggle" id="darkToggle" title="Toggle dark mode" aria-label="Toggle dark mode"><i class="dt-ico"></i></button>

<!-- ══════════════════ COMMAND PALETTE (⌘K) ══════════════════ -->
<div id="cmdk-overlay" role="dialog" aria-modal="true" aria-label="Command palette" aria-hidden="true">
  <div id="cmdk">
    <input id="cmdk-input" type="text" placeholder="Search papers, sections, actions…" aria-label="Command palette search" autocomplete="off">
    <ul id="cmdk-list" role="listbox"></ul>
    <div class="cmdk-foot"><span><kbd>↑↓</kbd> navigate</span><span><kbd>↵</kbd> select</span><span><kbd>esc</kbd> close</span></div>
  </div>
</div>

<!-- ══════════════════ AI RESEARCH ASSISTANT ══════════════════ -->
{% include ai-agent.html %}


<script>
/* ── Scroll-to-top ── */
(function(){
  var btn = document.getElementById('scrollTop');
  if(!btn) return;
  window.addEventListener('scroll', function(){
    btn.classList.toggle('show', window.scrollY > 500);
  }, {passive:true});
})();

/* ── Dark mode toggle ── */
(function(){
  var btn = document.getElementById('darkToggle');
  if(!btn) return;
  try {
    var saved = localStorage.getItem('darkMode');
    if(saved === 'true') { document.body.classList.add('dark-mode'); }
  } catch(e) {}
  btn.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    var on = document.body.classList.contains('dark-mode');
    var gc = document.getElementById('research-graph');
    if(gc && typeof d3 !== 'undefined') { drawGraph(gc); }
    try { localStorage.setItem('darkMode', on); } catch(e) {}
  });
})();

/* ── Typing effect ── */
(function(){
  var el = document.getElementById('hero-typed');
  if(!el) return;
  var texts = [
    'Reinforcement Learning · Post-Training',
    'Self-Improvement for Generative Models',
    'Multimodal & Audio Reasoning',
    'Agentic RL',
    'CS Ph.D. Student @ UIUC'
  ];
  /* Respect prefers-reduced-motion: show static text, skip the animation loop */
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    el.textContent = texts[0]; return;
  }
  var ti=0, ci=0, deleting=false, pause=0;
  function tick(){
    var t = texts[ti];
    if(!deleting){
      el.innerHTML = t.substring(0,ci) + '<span class="typing-cursor"></span>';
      ci++;
      if(ci > t.length){ pause++; if(pause > 30){ deleting=true; pause=0; } }
    } else {
      ci--;
      el.innerHTML = t.substring(0,ci) + '<span class="typing-cursor"></span>';
      if(ci === 0){ deleting=false; ti=(ti+1) % texts.length; }
    }
    setTimeout(tick, deleting ? 25 : (ci > t.length ? 60 : 45));
  }
  tick();
})();

/* ── Animated counters (IntersectionObserver — fires reliably on scroll-into-view) ── */
(function(){
  var els = document.querySelectorAll('.stat-number[data-target]');
  if(!els.length) return;
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function runCounter(el) {
    if(el._counted) return;
    el._counted = true;
    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    /* Skip animation for users who prefer reduced motion */
    if(reducedMotion){ el.textContent = target + suffix; return; }
    var dur = 1400, start = performance.now();
    function step(now){
      var p = Math.min((now - start) / dur, 1);
      p = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * p) + suffix;
      if(p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ runCounter(e.target); io.unobserve(e.target); } });
    }, {threshold: 0.3});
    els.forEach(function(el){ io.observe(el); });
  } else {
    /* fallback for old browsers */
    els.forEach(function(el){ runCounter(el); });
  }
})();

/* ── Particle canvas ── */
(function(){
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var c = document.getElementById('particles');
  if(!c) return;
  var ctx = c.getContext('2d');
  var pts = [];
  function resize(){
    c.width = c.parentElement.offsetWidth;
    c.height = c.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  for(var i=0;i<40;i++){
    pts.push({
      x: Math.random()*c.width, y: Math.random()*c.height,
      vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.4,
      r: Math.random()*2+1
    });
  }
  var _rafId = null;
  function draw(){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    for(var i=0;i<pts.length;i++){
      var p=pts[i];
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>c.width) p.vx*=-1;
      if(p.y<0||p.y>c.height) p.vy*=-1;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
      /* draw lines between nearby particles */
      for(var j=i+1;j<pts.length;j++){
        var q=pts[j], dx=p.x-q.x, dy=p.y-q.y, d=Math.sqrt(dx*dx+dy*dy);
        if(d<120){
          ctx.strokeStyle='rgba(255,255,255,'+(0.12*(1-d/120))+')';
          ctx.lineWidth=0.8;
          ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y); ctx.stroke();
        }
      }
    }
    if(!document.hidden) _rafId = requestAnimationFrame(draw);
  }
  document.addEventListener('visibilitychange', function(){
    if(document.hidden){ cancelAnimationFrame(_rafId); _rafId = null; }
    else if(!_rafId){ _rafId = requestAnimationFrame(draw); }
  });
  _rafId = requestAnimationFrame(draw);
})();

/* ── Abstract toggle (click/tap on button) ── */
document.querySelectorAll('.pub-entry').forEach(function(entry){
  entry.querySelectorAll('.pub-abst-btn').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var isOpen = entry.classList.contains('abstract-open');
      document.querySelectorAll('.pub-entry.abstract-open').forEach(function(el){
        el.classList.remove('abstract-open');
        el.querySelectorAll('.pub-abst-btn').forEach(function(b){ b.textContent = '▾ Abstract'; b.setAttribute('aria-expanded','false'); });
      });
      if(!isOpen){
        entry.classList.add('abstract-open');
        btn.textContent = '▴ Hide';
        btn.setAttribute('aria-expanded','true');
      }
    });
  });
});

/* ── Lazy load fade-in ── */
document.querySelectorAll('img[loading="lazy"]').forEach(function(img){
  if(img.complete) img.classList.add('loaded');
  else {
    img.addEventListener('load', function(){ img.classList.add('loaded'); });
    img.addEventListener('error', function(){ img.classList.add('loaded'); });
  }
});

/* ── ③ Reading progress bar ── */
(function(){
  var bar = document.getElementById('read-progress');
  if(!bar) return;
  window.addEventListener('scroll', function(){
    var st = document.documentElement.scrollTop || document.body.scrollTop;
    var sh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    bar.style.width = (sh > 0 ? Math.min(st / sh * 100, 100) : 0) + '%';
  }, {passive: true});
})();

/* ── ② Featured card 3D tilt ── */
document.querySelectorAll('.featured-card').forEach(function(card){
  card.addEventListener('mousemove', function(e){
    var r = card.getBoundingClientRect();
    var x = (e.clientX - r.left - r.width / 2) / r.width;
    var y = (e.clientY - r.top - r.height / 2) / r.height;
    card.style.transform = 'perspective(700px) rotateY(' + (x * 10) + 'deg) rotateX(' + (-y * 8) + 'deg) translateY(-5px)';
  });
  card.addEventListener('mouseleave', function(){
    card.style.transform = '';
  });
});

/* ── ⑤ BibTeX one-click copy ── */
(function(){
  var BIB = {
    'd4wrBuJ4xo': '@inproceedings{zheng2026procedure,\n  title={Procedure-Aware Reinforcement Learning for Tool-Augmented Large Language Models},\n  author={Qinglong Zheng and Jiajun Fan and Chaoran Cheng and Ge Liu},\n  booktitle={Conference on Language Modeling (COLM)},\n  year={2026},\n  url={https://openreview.net/forum?id=d4wrBuJ4xo}\n}',
    '2506.07459': '@article{wang2026proteinzero,\n  title={ProteinZero: Self-Improving Protein Generation via Online Reinforcement Learning},\n  author={Ziwen Wang and Jiajun Fan and Ruihan Guo and Thao Nguyen and Heng Ji and Ge Liu},\n  journal={Transactions on Machine Learning Research},\n  year={2026},\n  url={https://arxiv.org/abs/2506.07459}\n}',
    '8Oc3Mx754M': '@inproceedings{yang2026bcr,\n  title={Batched Contextual Reinforcement},\n  author={Yang, Bangji and Ma, Hongbo and Fan, Jiajun and Liu, Ge},\n  booktitle={Forty-third International Conference on Machine Learning},\n  year={2026},\n  url={https://openreview.net/forum?id=8Oc3Mx754M}\n}',
    '2605.29438': '@inproceedings{li2026elegantvla,\n  title={ElegantVLA: Learning When to Think for Efficient Vision-Language-Action Models},\n  author={Li, Ye and Liu, Huanan and Ji, Kangye and Meng, Yuan and Fan, Jiajun and Wang, Yuansong and Qin, Shiyu and Wu, Chenglei and Xia, Shu-Tao and Wang, Zhi},\n  booktitle={Advances in Neural Information Processing Systems},\n  year={2026},\n  url={https://arxiv.org/abs/2605.29438}\n}',
    '2607.09039': '@inproceedings{cheng2026gpflow,\n  title={Variable-Length Generative Protein Design via Generalized Poisson Flow},\n  author={Cheng, Chaoran and Ni, Zhanghan and Qu, Yanru and Chen, Yuxin and Guo, Ruihan and Fan, Jiajun and Liu, Ge},\n  booktitle={Advances in Neural Information Processing Systems},\n  year={2026},\n  url={https://arxiv.org/abs/2607.09039}\n}',
    'Tt8lCe1NrW': '@inproceedings{sun2026barrag,\n  title={Rethinking the Reranker: Boundary-Aware Evidence Selection for Robust Retrieval-Augmented Generation},\n  author={Sun, Jiashuo and Jiang, Pengcheng and Wang, Saizhuo and Fan, Jiajun and Wang, Heng and Ouyang, Siru and Zhong, Ming and Jiao, Yizhu and Huang, Chengsong and Xu, Xueqiang and Han, Pengrui and Li, Peiran and Huang, Jiaxin and Liu, Ge and Ji, Heng and Han, Jiawei},\n  booktitle={Forty-third International Conference on Machine Learning},\n  year={2026},\n  url={https://openreview.net/forum?id=Tt8lCe1NrW}\n}',
    'FeWvD0L_a4': '@inproceedings{fan2023learnable,\n  title={Learnable Behavior Control: Breaking Atari Human World Records via Sample-Efficient Behavior Selection},\n  author={Jiajun Fan and Yuzheng Zhuang and Yuecheng Liu and Jianye HAO and Bin Wang and Jiangcheng Zhu and Hao Wang and Shu-Tao Xia},\n  booktitle={The Eleventh International Conference on Learning Representations},\n  year={2023},\n  url={https://openreview.net/forum?id=FeWvD0L_a4}\n}',
    'DUr48hxO2h': '@inproceedings{fan2026incentivizing,\n  title={Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio {LLM}s via Reasoning Process Rewards},\n  author={Jiajun Fan and Roger Ren and Jingyuan Li and Rahul Pandey and Prashanth Gurunath Shivakumar and Ivan Bulyko and Ankur Gandhe and Ge Liu and Yile Gu},\n  booktitle={The Fourteenth International Conference on Learning Representations},\n  year={2026},\n  url={https://openreview.net/forum?id=DUr48hxO2h}\n}',
    'aXO0xg0ttW': '@inproceedings{fan2025adaptive,\n  title={Adaptive Divergence Regularized Policy Optimization for Fine-tuning Generative Models},\n  author={Jiajun Fan and Tong Wei and Chaoran Cheng and Yuxin Chen and Ge Liu},\n  booktitle={The Thirty-ninth Annual Conference on Neural Information Processing Systems},\n  year={2025},\n  url={https://openreview.net/forum?id=aXO0xg0ttW}\n}',
    'uOOlHOq500': '@inproceedings{wang2025variational,\n  title={Variational Supervised Contrastive Learning},\n  author={Ziwen Wang and Jiajun Fan and Thao Nguyen and Heng Ji and Ge Liu},\n  booktitle={The Thirty-ninth Annual Conference on Neural Information Processing Systems},\n  year={2025},\n  url={https://openreview.net/forum?id=uOOlHOq500}\n}',
    '2IoFFexvuw': '@inproceedings{fan2025online,\n  title={Online Reward-Weighted Fine-Tuning of Flow Matching with Wasserstein Regularization},\n  author={Jiajun Fan and Shuaike Shen and Chaoran Cheng and Yuxin Chen and Chumeng Liang and Ge Liu},\n  booktitle={The Thirteenth International Conference on Learning Representations},\n  year={2025},\n  url={https://openreview.net/forum?id=2IoFFexvuw}\n}',
    'RwdGIIjPlC': '@inproceedings{li2026spvla,\n  title={SP-VLA: A Joint Model Scheduling and Token Pruning Approach for VLA Model Acceleration},\n  author={Ye Li and Yuan Meng and Zewen Sun and Kangye Ji and Chen Tang and Jiajun Fan and Xinzhu Ma and Shu-Tao Xia and Zhi Wang and Wenwu Zhu},\n  booktitle={The Fourteenth International Conference on Learning Representations},\n  year={2026},\n  url={https://openreview.net/forum?id=RwdGIIjPlC}\n}',
    '2510.18072': '@misc{fan2025finetuningflowmatchinggenerative,\n  title={Fine-tuning Flow Matching Generative Models with Intermediate Feedback},\n  author={Jiajun Fan and Chaoran Cheng and Shuaike Shen and Xiangxin Zhou and Ge Liu},\n  year={2025},\n  eprint={2510.18072},\n  archivePrefix={arXiv},\n  primaryClass={cs.LG},\n  url={https://arxiv.org/abs/2510.18072}\n}',
    '2407.05010': '@ARTICLE{11146899,\n  author={Li, Ye and Tang, Chen and Meng, Yuan and Fan, Jiajun and Chai, Zenghao and Ma, Xinzhu and Wang, Zhi and Zhu, Wenwu},\n  journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},\n  title={PRANCE: Joint Token-Optimization and Structural Channel-Pruning for Adaptive ViT Inference},\n  year={2026},\n  volume={48},\n  number={1},\n  pages={283--298},\n  doi={10.1109/TPAMI.2025.3605239}\n}',
    'fan22c': '@InProceedings{pmlr-v162-fan22c,\n  title     = {Generalized Data Distribution Iteration},\n  author    = {Fan, Jiajun and Xiao, Changnan},\n  booktitle = {Proceedings of the 39th International Conference on Machine Learning},\n  pages     = {6103--6184},\n  year      = {2022},\n  editor    = {Chaudhuri, Kamalika and Jegelka, Stefanie and Song, Le and Szepesvari, Csaba and Niu, Gang and Sabato, Sivan},\n  volume    = {162},\n  series    = {Proceedings of Machine Learning Research},\n  month     = {17--23 Jul},\n  publisher = {PMLR},\n  pdf       = {https://proceedings.mlr.press/v162/fan22c/fan22c.pdf},\n  url       = {https://proceedings.mlr.press/v162/fan22c.html},\n}',
  };

  var popup = document.createElement('div');
  popup.className = 'bib-popup';
  popup.innerHTML = '<pre class="bib-pre"></pre><div class="bib-actions"><button class="bib-copy"><i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-list.png);mask-image:url(/images/icons/h-list.png)"></i> Copy BibTeX</button><button class="bib-close">&#x2715; Close</button></div>';
  document.body.appendChild(popup);

  var activeEntry = null;
  popup.querySelector('.bib-copy').addEventListener('click', function(){
    var btn = this;
    var text = popup.querySelector('.bib-pre').textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function(){
        btn.innerHTML = '<i class=\"lbl-ico\" style=\"-webkit-mask-image:url(/images/icons/h-check.png);mask-image:url(/images/icons/h-check.png)\"></i> Copied!'; btn.style.background = '#059669';
        setTimeout(function(){ btn.innerHTML = '<i class=\"lbl-ico\" style=\"-webkit-mask-image:url(/images/icons/h-list.png);mask-image:url(/images/icons/h-list.png)\"></i> Copy BibTeX'; btn.style.background = ''; }, 2000);
      }).catch(function(){ btn.textContent = 'Select + copy manually'; setTimeout(function(){ btn.innerHTML = '<i class=\"lbl-ico\" style=\"-webkit-mask-image:url(/images/icons/h-list.png);mask-image:url(/images/icons/h-list.png)\"></i> Copy BibTeX'; }, 2000); });
    } else {
      btn.textContent = 'Select + copy manually';
      setTimeout(function(){ btn.innerHTML = '<i class=\"lbl-ico\" style=\"-webkit-mask-image:url(/images/icons/h-list.png);mask-image:url(/images/icons/h-list.png)\"></i> Copy BibTeX'; }, 2000);
    }
  });
  popup.querySelector('.bib-close').addEventListener('click', function(){ popup.classList.remove('show'); activeEntry = null; });
  document.addEventListener('click', function(e){
    if (!popup.contains(e.target) && !(activeEntry && activeEntry.contains(e.target))) {
      popup.classList.remove('show'); activeEntry = null;
    }
  });

  document.querySelectorAll('.pub-entry').forEach(function(entry){
    var bib = null;
    var ax = entry.dataset.arxiv;
    if (ax && BIB[ax]) bib = BIB[ax];
    if (!bib) {
      [].forEach.call(entry.querySelectorAll('a[href]'), function(a){
        if (bib) return;
        Object.keys(BIB).forEach(function(k){ if (a.href && a.href.indexOf(k) >= 0) bib = BIB[k]; });
      });
    }
    if (!bib) return;
    var linksDiv = entry.querySelector('.pub-links');
    if (!linksDiv) {
      linksDiv = document.createElement('div'); linksDiv.className = 'pub-links';
      var pr = entry.querySelector('.pub-right'); if (pr) pr.appendChild(linksDiv);
    }
    var btn = document.createElement('button');
    btn.className = 'pub-link pl-cite'; btn.innerHTML = '<i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-book.png);mask-image:url(/images/icons/h-book.png)"></i>Cite';
    var captured = bib;
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      if (activeEntry === entry && popup.classList.contains('show')) {
        popup.classList.remove('show'); activeEntry = null; return;
      }
      popup.querySelector('.bib-pre').textContent = captured;
      var rect = entry.getBoundingClientRect();
      var scrollY = window.scrollY || window.pageYOffset;
      var scrollX = window.scrollX || window.pageXOffset;
      var leftPos = Math.max(rect.left + scrollX, 8);
      var maxW = Math.min(rect.width, window.innerWidth - 16);
      if (leftPos + maxW > scrollX + window.innerWidth - 8) {
        leftPos = scrollX + window.innerWidth - maxW - 8;
      }
      popup.style.top = (rect.bottom + scrollY + 6) + 'px';
      popup.style.left = leftPos + 'px';
      popup.style.maxWidth = maxW + 'px';
      popup.classList.add('show'); activeEntry = entry;
    });
    linksDiv.appendChild(btn);
  });
})();

/* ══════════════════════════════════════════════════
   ② PUBLICATION FILTER / SEARCH
══════════════════════════════════════════════════ */
var _activeVenue = 'all';
function filterPubs() {
  var box = document.getElementById('pubSearch');
  var q = (box && box.value || '').toLowerCase();
  var visible = 0;
  document.querySelectorAll('.pub-list .pub-entry').forEach(function(el) {
    var venue = (el.dataset.venue || '').toLowerCase();
    var titleEl = el.querySelector('.pub-title > a');
    var title = titleEl ? titleEl.textContent.toLowerCase() : '';
    var authors = el.querySelector('.pub-authors') ? el.querySelector('.pub-authors').textContent.toLowerCase() : '';
    var venueOk = _activeVenue === 'all' || venue === _activeVenue.toLowerCase();
    var extra = ((el.dataset.abstract || '') + ' ' +
      (el.querySelector('.pub-desc') ? el.querySelector('.pub-desc').textContent : '') + ' ' +
      (el.querySelector('.pub-hl') ? el.querySelector('.pub-hl').textContent : '')).toLowerCase();
    var searchOk = !q || title.includes(q) || authors.includes(q) || venue.includes(q) || extra.includes(q);
    var show = venueOk && searchOk;
    el.classList.toggle('hidden', !show);
    if (show) visible++;
  });
  var empty = document.getElementById('pub-empty-state');
  if (empty) empty.style.display = visible === 0 ? 'block' : 'none';
}
function filterByVenue(btn, venue) {
  _activeVenue = venue;
  document.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  filterPubs();
}

/* ══════════════════════════════════════════════════
   ① CITATION COUNTS — from _data/citations.json
   (auto-updated daily by GitHub Actions → scripts/update_citations.py)
══════════════════════════════════════════════════ */
(function(){
  /* Jekyll injects citation data at build time */
  var citations = ({{ site.data.citations | jsonify }}) || {};
  document.querySelectorAll('.pub-entry[data-arxiv]').forEach(function(el){
    var key = el.dataset.arxiv;
    var count = citations[key];
    if(count == null || count === 0) return;
    var links = el.querySelector('.pub-links') || el.querySelector('.pub-right');
    if(!links) return;
    var badge = document.createElement('span');
    badge.className = 'cite-badge';
    badge.innerHTML = '<i class="lbl-ico" style="-webkit-mask-image:url(/images/icons/h-chart.png);mask-image:url(/images/icons/h-chart.png)"></i>' + count + (count === 1 ? ' citation' : ' citations');
    links.appendChild(badge);
  });
})();

/* ══════════════════════════════════════════════════
   ⑧ RESEARCH PAPER NETWORK (D3.js)
══════════════════════════════════════════════════ */
(function(){
  var container = document.getElementById('research-graph');
  if(!container) return;
  var loaded = false;
  function loadD3(){
    if(loaded) return;
    loaded = true;
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js';
    s.onload = function(){ drawGraph(container); };
    s.onerror = function(){
      container.innerHTML = '<p style="text-align:center;color:#767676;padding:40px 0;">Network error — <a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ" target="_blank" rel="noopener noreferrer">view paper network on Google Scholar</a></p>';
    };
    document.head.appendChild(s);
  }
  /* Lazy: only fetch d3 (~280KB) when the graph approaches the viewport */
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ io.disconnect(); loadD3(); } });
    }, { rootMargin: '600px 0px' });
    io.observe(container);
  } else {
    loadD3();
  }
})();

function drawGraph(container) {
  if(typeof d3 === 'undefined' || !container) return;
  d3.select(container).selectAll('svg').remove();
  var isDark = document.body.classList.contains('dark-mode');
  var W = Math.max(container.offsetWidth || 700, 520);
  var H = 460;
  var bg  = isDark ? '#0d1117' : '#fafbff';
  var ink = isDark ? '#e6edf3' : '#1e293b';
  var sub = isDark ? '#8b949e' : '#64748b';
  var edgeClr = isDark ? '#475569' : '#94a3b8';
  /* theme colours = site palette (navy / misty blue / peach / slate / sage / mauve) */
  var TC = isDark ? {deep:'#E9A98C',train:'#9DB8EA',flow:'#7FA6D3',eff:'#A6ADBB',rep:'#C3A6C0',audio:'#86B9A6'}
                  : {deep:'#E39A7A',train:'#2F4B8F',flow:'#6F94C6',eff:'#8F97A8',rep:'#A98BA6',audio:'#5E9A86'};

  /* ── Column x positions (fraction of W) ── */
  var CX = {'1':0.09,'2':0.28,'3':0.50,'4':0.70,'5':0.90};

  /* ── Papers: fixed fractional y in working area [0.0–1.0] ── */
  var nodes = [
    {id:'GDI',        label:'GDI',        venue:'ICML 2022',    col:'1', fy:0.40, r:21, clr:TC.deep, url:'/projects/gdi/'},
    {id:'LBC',        label:'LBC',        venue:'ICLR 2023',    col:'1', fy:0.72, r:24, clr:TC.deep, url:'/projects/lbc/'},
    {id:'PRANCE',     label:'PRANCE',     venue:'TPAMI 2026',   col:'2', fy:0.14, r:18, clr:TC.eff, url:'https://arxiv.org/abs/2407.05010'},
    {id:'ORW-CFM-W2', label:'ORW-CFM-W2', venue:'ICLR 2025',  col:'3', fy:0.40, r:22, clr:TC.flow, url:'/projects/orw-cfm-w2/'},
    {id:'VarCon',     label:'VarCon',     venue:'NeurIPS 2025', col:'3', fy:0.72, r:18, clr:TC.rep, url:'https://openreview.net/forum?id=uOOlHOq500'},
    {id:'ADRPO',      label:'ADRPO',      venue:'NeurIPS 2025', col:'4', fy:0.16, r:20, clr:TC.train, url:'/projects/adrpo/'},
    {id:'SP-VLA',     label:'SP-VLA',     venue:'ICLR 2026',    col:'4', fy:0.60, r:22, clr:TC.eff, url:'https://openreview.net/forum?id=RwdGIIjPlC'},
    {id:'AC-Flow',    label:'AC-Flow',    venue:'arXiv 2025',   col:'5', fy:0.48, r:18, clr:TC.flow, url:'/projects/ac-flow/'},
    {id:'CESAR',      label:'CESAR',      venue:'ICLR 2026',    col:'5', fy:0.13, r:24, clr:TC.audio, url:'/projects/cesar/'},
    {id:'ProteinZero',label:'ProteinZero',venue:'TMLR 2026',   col:'4', fy:0.84, r:20, clr:TC.train, url:'/projects/proteinzero/'},
    {id:'PARL',       label:'PARL',       venue:'COLM 2026',   col:'5', fy:0.84, r:20, clr:TC.train, url:'/projects/procedure-aware-rl/'},
  ];

  /* Apply pixel coordinates (working area: y ∈ [36, H-46]) */
  var WY0 = 36, WYH = H - 46;
  var nodeMap = {};
  nodes.forEach(function(d){
    d.x = CX[d.col] * W;
    d.y = WY0 + d.fy * WYH;
    nodeMap[d.id] = d;
  });

  /* ── Evolution links (bend = px perpendicular offset for bezier) ── */
  var links = [
    {s:'GDI', t:'LBC',        bend:0},
    {s:'GDI', t:'ORW-CFM-W2', bend:-18},
    {s:'GDI', t:'PRANCE',     bend:-22},
    {s:'PRANCE', t:'SP-VLA',  bend:72},
    {s:'ORW-CFM-W2', t:'ADRPO',  bend:-22},
    {s:'ORW-CFM-W2', t:'VarCon', bend:0},
    {s:'ADRPO', t:'AC-Flow',  bend:22},
    {s:'ADRPO', t:'CESAR',    bend:-18},
    {s:'VarCon', t:'CESAR',   bend:-28},
    {s:'AC-Flow', t:'CESAR',   bend:0},
    {s:'ORW-CFM-W2', t:'ProteinZero', bend:0},
    {s:'ADRPO', t:'PARL',     bend:0},
  ];

  /* ── Build SVG ── */
  var svg = d3.select(container).append('svg')
    .attr('width', W).attr('height', H).attr('viewBox', '0 0 ' + W + ' ' + H).attr('preserveAspectRatio', 'xMidYMid meet').style('display','block').style('overflow','visible');

  svg.append('rect').attr('width',W).attr('height',H).attr('fill','transparent').attr('rx',14);

  /* Arrowhead marker */
  svg.append('defs').append('marker')
    .attr('id','rg-arr').attr('viewBox','0 0 8 8')
    .attr('refX',7).attr('refY',4)
    .attr('markerWidth',5).attr('markerHeight',5)
    .attr('orient','auto')
    .append('path').attr('d','M0,1 L7,4 L0,7 Z').attr('fill',edgeClr);

  /* Year labels at top — span reflects the papers in each column */
  [{t:'2022–23',cx:CX['1']},{t:'2025–26',cx:(CX['2']+CX['5'])/2}]
  .forEach(function(d){
    svg.append('text').attr('x',d.cx*W).attr('y',18)
      .attr('text-anchor','middle').attr('font-size','12px')
      .attr('font-family','Inter,sans-serif').attr('font-weight','700')
      .attr('letter-spacing','.08em')
      .attr('fill', isDark ? '#A6ADBB' : '#5B6273')
      .text(d.t);
  });

  /* Subtle column guide lines */
  Object.values(CX).forEach(function(cx){
    svg.append('line')
      .attr('x1',cx*W).attr('y1',24).attr('x2',cx*W).attr('y2',H-36)
      .attr('stroke', isDark ? '#21262d' : '#EEF3FA')
      .attr('stroke-width',1).attr('stroke-dasharray','3,5');
  });

  /* Draw links: base path (hover/arrow) in lGroup + animated flow overlay in flowGroup */
  var lGroup = svg.append('g');
  var flowGroup = svg.append('g').attr('pointer-events','none');
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  links.forEach(function(l){
    var s = nodeMap[l.s], t = nodeMap[l.t]; if(!s||!t) return;
    var dx=t.x-s.x, dy=t.y-s.y, dist=Math.sqrt(dx*dx+dy*dy);
    var nx=-dy/dist, ny=dx/dist;
    var sx=s.x+(dx/dist)*s.r, sy=s.y+(dy/dist)*s.r;
    var ex=t.x-(dx/dist)*(t.r+9), ey=t.y-(dy/dist)*(t.r+9);
    var mx=(sx+ex)/2+nx*(l.bend||0), my=(sy+ey)/2+ny*(l.bend||0);
    var dPath='M'+sx+','+sy+' Q'+mx+','+my+' '+ex+','+ey;
    lGroup.append('path')
      .attr('d',dPath)
      .attr('stroke',edgeClr).attr('stroke-width',1.5)
      .attr('fill','none').attr('opacity',0.55)
      .attr('marker-end','url(#rg-arr)');
    if(!reduceMotion){
      flowGroup.append('path')
        .attr('class','rg-flow')
        .attr('d',dPath)
        .attr('stroke', s.clr).attr('stroke-width',2.2)
        .attr('fill','none').attr('opacity',0.5).attr('stroke-linecap','round');
    }
  });

  /* Draw nodes */
  nodes.forEach(function(d, ni){
    var g = svg.append('g')
      .attr('cursor', d.url ? 'pointer' : 'default')
      .on('mouseenter', function(){
        d3.select(this).select('circle.main').transition().duration(120).attr('r', d.r+4);
        lGroup.selectAll('path').attr('opacity', function(){
          var paths = links.filter(function(l){ return l.s===d.id||l.t===d.id; });
          return paths.length ? 0.18 : 0.65;
        });
        /* Highlight connected links */
        links.forEach(function(l,i){
          if(l.s===d.id||l.t===d.id){
            lGroup.selectAll('path').filter(function(_,j){ return j===i; })
              .attr('opacity',1).attr('stroke-width',2.5).attr('stroke', d.clr);
          }
        });
      })
      .on('mouseleave', function(){
        d3.select(this).select('circle.main').transition().duration(120).attr('r', d.r);
        lGroup.selectAll('path').attr('opacity',0.65).attr('stroke-width',1.5).attr('stroke',edgeClr);
      });
    if(d.url) g.on('click', function(){ window.open(d.url,'_blank','noopener,noreferrer'); });

    /* Glow (two-ring soft halo) */
    g.append('circle').attr('cx',d.x).attr('cy',d.y).attr('r',d.r+12)
      .attr('fill',d.clr).attr('opacity',0.06);
    g.append('circle').attr('cx',d.x).attr('cy',d.y).attr('r',d.r+7)
      .attr('fill',d.clr).attr('opacity',0.12);
    /* Main circle — entrance scale-in */
    var main = g.append('circle').attr('class','main')
      .attr('cx',d.x).attr('cy',d.y)
      .attr('fill',d.clr).attr('fill-opacity',0.9)
      .attr('stroke', isDark ? '#161b22' : '#fff').attr('stroke-width',2.5);
    if(reduceMotion){
      main.attr('r', d.r);
    } else {
      main.attr('r', 0)
        .transition().delay(ni*55).duration(420).ease(d3.easeBackOut.overshoot(1.5))
        .attr('r', d.r);
    }
    /* Label above */
    g.append('text').attr('x',d.x).attr('y',d.y-d.r-7)
      .attr('text-anchor','middle').attr('font-size','12.5px')
      .attr('font-weight','700').attr('font-family','Inter,sans-serif')
      .attr('paint-order','stroke').attr('stroke',bg).attr('stroke-width',5).attr('stroke-linejoin','round')
      .attr('fill',ink).text(d.label);
    /* Venue below */
    g.append('text').attr('x',d.x).attr('y',d.y+d.r+14)
      .attr('text-anchor','middle').attr('font-size','11.5px')
      .attr('paint-order','stroke').attr('stroke',bg).attr('stroke-width',5).attr('stroke-linejoin','round')
      .attr('font-family','Inter,sans-serif').attr('fill',sub).text(d.venue);
  });

  /* Legend */
  var legItems = [
    {c:TC.deep,l:'Deep RL'},{c:TC.train,l:'RL Training'},
    {c:TC.flow,l:'Flow Matching'},{c:TC.eff,l:'Efficiency'},
    {c:TC.rep,l:'Representation'},{c:TC.audio,l:'Audio Reasoning'},
    {c:edgeClr,  l:'Research evolution', dash:true},
  ];
  var legW = legItems.reduce(function(s, it){ return s + (it.dash ? 18 : 14) + it.l.length * 6.2 + 18; }, 8);
  var lx = 8, ly = H - (legW > W ? 30 : 16);
  legItems.forEach(function(item){
    if(lx + (item.dash ? 18 : 14) + item.l.length * 6.2 > W - 8){ lx = 8; ly += 15; }
    if(item.dash){
      svg.append('line').attr('x1',lx).attr('y1',ly).attr('x2',lx+14).attr('y2',ly)
        .attr('stroke',item.c).attr('stroke-width',1.5).attr('marker-end','url(#rg-arr)');
      lx += 18;
    } else {
      svg.append('circle').attr('cx',lx+5).attr('cy',ly).attr('r',5).attr('fill',item.c);
      lx += 14;
    }
    var lt = svg.append('text').attr('x',lx).attr('y',ly+4)
      .attr('font-size','11px').attr('font-family','Inter,sans-serif').attr('fill',sub)
      .text(item.l);
    lx += (lt.node().getComputedTextLength() || item.l.length * 6.2) + 18;
  });
}

/* ══════════════════════════════════════════════════
   ⑨ QUICK NAV SCROLL HIGHLIGHT
══════════════════════════════════════════════════ */
(function(){
  var sections = ['news','featured','publications','northstar','research','impact','vision','awards','deadlines'];
  var navLinks = document.querySelectorAll('.quick-nav a[data-qn]');
  if (!navLinks.length) return;
  var heads = sections.map(function(id){ return document.getElementById(id); }).filter(Boolean);
  var ticking = false;
  function upd(){
    ticking = false;
    var cur = '';
    heads.forEach(function(el){ if (el.getBoundingClientRect().top < 160) cur = el.id; });
    navLinks.forEach(function(a){ a.classList.toggle('qn-active', a.dataset.qn === cur); });
  }
  function req(){ if (!ticking) { ticking = true; requestAnimationFrame(upd); } }
  window.addEventListener('scroll', req, { passive: true });
  window.addEventListener('resize', req);
  upd();
})();

</script>
<script>
/* Video button: every publication with a project film gets one, right after its Project link */
(function(){
  var FILMS = ['audiorsi','tf-opd','speechgym','read-the-mind','proteinzero','procedure-aware-rl','cesar','adrpo','orw-cfm-w2','ac-flow','lbc','gdi'];
  document.querySelectorAll('.pub-entry').forEach(function(entry){
    var proj = entry.querySelector('.pub-links a.pl-project') || entry.querySelector('a.pub-project');
    if (!proj) return;
    var m = (proj.getAttribute('href') || '').match(/^\/projects\/([a-z0-9-]+)\/?$/);
    if (!m || FILMS.indexOf(m[1]) < 0 || entry.querySelector('.pl-video')) return;
    var links = entry.querySelector('.pub-links');
    if (!links) { links = document.createElement('div'); links.className = 'pub-links'; (entry.querySelector('.pub-right') || entry).appendChild(links); }
    var a = document.createElement('a');
    a.className = 'pub-link pl-video'; a.href = '/film/?s=' + m[1]; a.textContent = 'Video';
    a.setAttribute('aria-label', 'Watch the project film');
    if (proj.classList.contains('pl-project') && proj.parentNode === links) links.insertBefore(a, proj.nextSibling);
    else links.insertBefore(a, links.firstChild);
  });
})();
</script>

<script>
/* Sections are visible at once: no per-section scroll reveal (it left blank gaps on fast scrolls). */


</script>

<script>
/* ── ⌘K Command Palette ── */
(function(){
  var ITEMS = [
    {i:'/images/icons/sh-news.png', t:'News', k:'news latest updates', h:'#news', hint:'Section'},
    {i:'/images/icons/sh-featured.png', t:'Featured Research', k:'featured highlights best', h:'#featured', hint:'Section'},
    {i:'/images/icons/sh-pubs.png', t:'Publications', k:'papers publications list', h:'#publications', hint:'Section'},
    {i:'/images/icons/sh-research.png', t:'Research Areas', k:'research focus areas', h:'#research', hint:'Section'},
    {i:'/images/icons/sh-impact.png', t:'Impact & Stats', k:'impact statistics citations', h:'#impact', hint:'Section'},
    {i:'/images/icons/sh-vision.png', t:'Vision', k:'vision roadmap future', h:'#vision', hint:'Section'},
    {i:'/images/icons/sh-awards.png', t:'Awards', k:'awards honors scholarship', h:'#awards', hint:'Section'},
    {i:'/images/icons/sh-deadlines.png', t:'Conference Deadlines', k:'deadlines conferences ddl', h:'#deadlines', hint:'Section'},
    {i:'/images/icons/sh-contact.png', t:'Contact', k:'contact email reach', h:'#contact', hint:'Section'},
    {i:'/images/icons/h-music.png', t:'CESAR — Audio LLM Reasoning', k:'cesar audio mmau process reward iclr 2026', h:'/projects/cesar/', hint:'ICLR 2026'},
    {i:'/images/icons/h-agentic.png', t:'SP-VLA — VLA Acceleration', k:'sp-vla vla robot token pruning iclr 2026', h:'https://openreview.net/forum?id=RwdGIIjPlC', hint:'ICLR 2026'},
    {i:'/images/icons/h-target.png', t:'ADRPO — Adaptive Regularization RLHF', k:'adrpo adaptive divergence neurips 2025', h:'/projects/adrpo/', hint:'NeurIPS 2025'},
    {i:'/images/icons/h-flow.png', t:'ORW-CFM-W2 — Online RLHF for Flow Matching', k:'orw flow matching wasserstein iclr 2025', h:'/projects/orw-cfm-w2/', hint:'ICLR 2025'},
    {i:'/images/icons/h-gear.png', t:'AC-Flow — Intermediate Feedback', k:'ac-flow actor critic flow', h:'/projects/ac-flow/', hint:'Preprint'},
    {i:'/images/icons/h-palette.png', t:'PRANCE — Adaptive ViT Inference', k:'prance vit pruning tpami', h:'https://arxiv.org/abs/2407.05010', hint:'TPAMI'},
    {i:'/images/icons/sh-awards.png', t:'LBC — 24 Atari World Records', k:'lbc atari world records iclr 2023 oral', h:'/projects/lbc/', hint:'ICLR 2023 Oral'},
    {i:'/images/icons/h-chart.png', t:'GDI — Generalized Data Distribution Iteration', k:'gdi data distribution icml 2022', h:'/projects/gdi/', hint:'ICML 2022'},
    {i:'/images/icons/h-cv.png', t:'Open CV', k:'cv resume curriculum vitae', h:'/cv/', hint:'Page'},
    {i:'/images/icons/h-cv.png', t:'Download CV (PDF)', k:'cv pdf download resume', h:'/files/CV.pdf', hint:'File'},
    {i:'/images/icons/h-projects.png', t:'All Projects', k:'projects pages portfolio', h:'/projects/', hint:'Page'},
    {i:'/images/icons/h-blog.png', t:'Blog', k:'blog posts writing', h:'/year-archive/', hint:'Page'},
    {i:'/images/icons/h-scholar.png', t:'Google Scholar', k:'scholar citations profile', h:'https://scholar.google.com/citations?user=EjmzseUAAAAJ', hint:'External'},
    {i:'/images/icons/h-github.png', t:'GitHub', k:'github code repos', h:'https://github.com/markerthu', hint:'External'},
    {i:'/images/icons/h-linkedin.png', t:'LinkedIn', k:'linkedin profile', h:'https://www.linkedin.com/in/jiajun-fan-57b12b26b', hint:'External'},
    {i:'/images/icons/h-email.png', t:'Email Jiajun', k:'email contact mail', h:'mailto:jiajunf3@illinois.edu', hint:'Action'},
    {i:'/images/icons/h-moon.png', t:'Toggle Dark Mode', k:'dark mode theme light toggle', act:'dark', hint:'Action'},
    {i:'/images/icons/h-agentic.png', t:'Ask the AI Agent', k:'ai agent chat assistant ask', act:'agent', hint:'Action'}
  ];
  var overlay = document.getElementById('cmdk-overlay');
  var input = document.getElementById('cmdk-input');
  var list = document.getElementById('cmdk-list');
  if(!overlay || !input || !list) return;
  var filtered = ITEMS, sel = 0, lastFocus = null;

  function render(){
    list.innerHTML = '';
    if(!filtered.length){
      var li = document.createElement('li');
      li.className = 'cmdk-empty';
      li.textContent = 'No results — try \u201ccesar\u201d, \u201ccv\u201d or \u201cdark\u201d';
      list.appendChild(li);
      return;
    }
    filtered.forEach(function(it, idx){
      var li = document.createElement('li');
      li.className = 'cmdk-item' + (idx === sel ? ' active' : '');
      li.setAttribute('role','option');
      li.innerHTML = '<span class="ck-icon"></span><span class="ck-t"></span><span class="ck-hint"></span>';
      if (it.i && it.i.charAt(0) === '/') {
        li.children[0].innerHTML = '<i class="lbl-ico" style="margin:0;width:1.15em;height:1.15em;-webkit-mask-image:url('+it.i+');mask-image:url('+it.i+')"></i>';
      } else {
        li.children[0].textContent = it.i;
      }
      li.children[1].textContent = it.t;
      li.children[2].textContent = it.hint || '';
      li.addEventListener('click', function(){ exec(it); });
      li.addEventListener('mousemove', function(){ if(sel !== idx){ sel = idx; render(); } });
      list.appendChild(li);
    });
    var act = list.children[sel];
    if(act && act.scrollIntoView) act.scrollIntoView({ block: 'nearest' });
  }

  function filter(){
    var q = input.value.trim().toLowerCase();
    filtered = !q ? ITEMS : ITEMS.filter(function(it){
      return (it.t + ' ' + it.k).toLowerCase().indexOf(q) >= 0;
    });
    sel = 0;
    render();
  }

  function exec(it){
    cmdkClose();
    if(it.act === 'dark'){ var d = document.getElementById('darkToggle'); if(d) d.click(); return; }
    if(it.act === 'agent'){ if(window.raOpen) window.raOpen(); return; }
    if(it.h.charAt(0) === '#'){
      var el = document.querySelector(it.h);
      if(el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if(/^(https?:|mailto:)/.test(it.h)){ window.open(it.h, it.h.indexOf('mailto:')===0 ? '_self' : '_blank', 'noopener'); return; }
    window.location.href = it.h;
  }

  window.cmdkOpen = function(){
    lastFocus = document.activeElement;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden','false');
    input.value = ''; filter();
    setTimeout(function(){ input.focus(); }, 30);
  };
  function cmdkClose(){
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden','true');
    if(lastFocus && lastFocus.focus) lastFocus.focus();
  }

  input.addEventListener('input', filter);
  overlay.addEventListener('mousedown', function(e){ if(e.target === overlay) cmdkClose(); });
  document.addEventListener('keydown', function(e){
    var isOpen = overlay.classList.contains('open');
    if((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')){
      e.preventDefault();
      if(isOpen) cmdkClose(); else window.cmdkOpen();
      return;
    }
    if(!isOpen) return;
    if(e.isComposing) return; /* don't act on IME composition (CJK input) */
    if(e.key === 'Tab'){ e.preventDefault(); input.focus(); } /* focus trap: input is the only focusable */
    else if(e.key === 'Escape'){ e.stopPropagation(); cmdkClose(); }
    else if(e.key === 'ArrowDown'){ e.preventDefault(); if(filtered.length){ sel = (sel + 1) % filtered.length; render(); } }
    else if(e.key === 'ArrowUp'){ e.preventDefault(); if(filtered.length){ sel = (sel - 1 + filtered.length) % filtered.length; render(); } }
    else if(e.key === 'Enter'){ e.preventDefault(); if(filtered[sel]) exec(filtered[sel]); }
  }, true);
})();

/* ── Cursor glow tracking on cards ── */
(function(){
  if(!(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches)) return;
  document.addEventListener('mousemove', function(e){
    var card = e.target.closest && e.target.closest('.research-card, .stat-card');
    if(!card) return;
    var r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });
})();
</script>

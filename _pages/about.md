---
permalink: /
title: "Jiajun Fan"
excerpt: "CS Ph.D. Student at UIUC | RL Post-Training for Generative Models"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
/* ── Intro ── */
.tagline { font-size: 1.05em; line-height: 1.78; color: #333; margin-bottom: 1em; }

/* ── Internship banner ── */
.internship-banner-pulse {
  animation: bannerPulse 3s ease-in-out infinite;
}
@keyframes bannerPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(21,101,192,0); }
  50% { box-shadow: 0 0 0 6px rgba(21,101,192,0.12); }
}
.internship-banner {
  background: linear-gradient(135deg,#e8f4fd,#f0f7ff) !important;
  border: 1px solid #93c5fd !important;
  border-radius: 8px; padding: 11px 18px;
  margin: 1em 0 1.2em; font-size: 0.93em;
  color: #1e3a5f !important;
}
.internship-banner a { color: #1d4ed8 !important; font-weight:700; }
.internship-banner strong { color: #1e3a5f !important; }
.internship-banner a { color: #1565c0; font-weight: 700; }

/* ── Quick nav ── */
.quick-nav {
  background: #f0f4ff; border-radius: 8px;
  padding: 9px 16px; margin-bottom: 1.4em;
  font-size: 0.84em; display: flex; flex-wrap: wrap; gap: 5px 16px; align-items: center;
}
.quick-nav a { color: #1565c0; text-decoration: none; padding: 2px 6px; border-radius: 5px; transition: background .15s, color .15s; }
.quick-nav a:hover { background: #e8effe; }
.quick-nav a.qn-active { background: #1565c0; color: #fff !important; }

/* ── Section headers ── */
.section-header {
  display: flex; align-items: center; gap: 10px;
  margin: 2em 0 1em; font-size: 1.18em; font-weight: 800; color: #1a2332;
  letter-spacing: -0.01em;

  scroll-margin-top: 80px;}
.section-header::after {
  content: ''; flex: 1; height: 2px;
  background: linear-gradient(to right, #1565c0, transparent); border-radius: 1px;
}

/* ── News timeline ── */
.news-list { margin: 0; padding: 0; list-style: none; }
.news-list li {
  display: flex; gap: 12px; align-items: flex-start;
  padding: 9px 0; border-bottom: 1px solid #f0f0f0; font-size: 0.91em;
}
.news-list li:last-child { border-bottom: none; }
.news-date { min-width: 78px; color: #aaa; font-size: 0.84em; font-weight: 700; padding-top: 2px; }
.nbadge {
  display: inline-block; padding: 1px 7px; border-radius: 4px;
  font-size: 0.74em; font-weight: 800; margin-right: 5px; vertical-align: middle;
}
.nb-top    { background: #ffd700; color: #5a4000; }
.nb-accept { background: #d4edda; color: #155724; }
.nb-service{ background: #e2e3e5; color: #383d41; }
.nb-upcoming{ background: #dbeafe; color: #1e40af; }

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
.pub-thumb-wrap:hover { box-shadow: 0 4px 18px rgba(21,101,192,0.15); }
.pub-thumb-wrap img {
  width: 100%; height: 160px; display: block;
  object-fit: cover; object-position: center top;
}
@media(max-width:560px){
  .pub-entry { grid-template-columns: 1fr; }
  .pub-left { flex-direction: row; gap: 8px; }
  .stats-row { gap: 8px; }
  .stat-card { min-width: calc(50% - 4px); flex: 1 1 calc(50% - 4px); }
  .pub-filter-bar { padding: 10px 12px; }
}
.pb { /* pub badge */
  display: inline-block; padding: 3px 8px; border-radius: 5px;
  font-size: 0.70em; font-weight: 900; letter-spacing: 0.02em; white-space: nowrap; line-height: 1.4;
}
.pb-oral   { background: #1b5e20; color: #fff; }
.pb-iclr   { background: #1565c0; color: #fff; }
.pb-neurips{ background: #6a1b9a; color: #fff; }
.pb-icml   { background: #b71c1c; color: #fff; }
.pb-journal{ background: #e65100; color: #fff; }
.pb-arxiv  { background: #546e7a; color: #fff; }
.pub-year  { font-size: 0.77em; color: #bbb; font-weight: 700; }
.pub-title { font-weight: 700; font-size: 0.95em; color: #1a2332; line-height: 1.4; }
.pub-abst-btn {
  display: inline-block; margin-left: 6px; font-size: 0.72em; font-weight: 700;
  color: #1565c0; cursor: pointer; background: #dbeafe; border-radius: 8px;
  padding: 1px 7px; vertical-align: middle; user-select: none;
  transition: background .15s; border: none;
}
.pub-abst-btn:hover { background: #bfdbfe; }
body.dark-mode .pub-abst-btn { background: #1e3a5f; color: #93c5fd; }
body.dark-mode .pub-abst-btn:hover { background: #1e40af; }
.pub-title a { color: #1565c0; text-decoration: none; }
.pub-title a:hover { text-decoration: underline; }
.pub-authors { font-size: 0.81em; color: #777; margin-top: 3px; }
.pub-authors strong { color: #1a2332; font-weight: 700; }
.pub-desc { font-size: 0.81em; color: #444; margin-top: 4px; line-height: 1.55; }
.pub-hl {
  display: inline-block; background: #fff8e1;
  border-left: 3px solid #ffa000; padding: 2px 9px;
  border-radius: 0 4px 4px 0; font-size: 0.77em;
  color: #5a4000; margin-top: 5px; font-weight: 700;
}
.pub-project {
  display: inline-block; margin-left: 6px;
  background: #e3f2fd; color: #0d47a1;
  border-radius: 4px; padding: 1px 7px; font-size: 0.74em; font-weight: 700;
  text-decoration: none !important;
}
.pub-project:hover { background: #bbdefb; }

/* ── Research grid ── */
.research-grid {
  display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-bottom: 1.5em;
}
.research-card {
  background: #fff; border: 1.5px solid #e0e8f0; border-radius: 10px;
  padding: 16px; transition: border-color .2s, box-shadow .2s;
}
.research-card:hover { border-color: #1565c0; box-shadow: 0 4px 14px rgba(21,101,192,.12); }
.rc-icon { font-size: 1.7em; margin-bottom: 8px; }
.rc-title { font-weight: 800; font-size: 0.93em; color: #1a2332; margin-bottom: 5px; }
.rc-desc  { font-size: 0.81em; color: #555; line-height: 1.55; }

/* ── Stats row ── */
.stats-row { display: flex; flex-wrap: wrap; gap: 12px; margin: 1.2em 0 1.6em; }
.stat-card {
  flex: 1 1 130px; background: #fff;
  border: 1.5px solid #e0e8f0; border-radius: 10px;
  padding: 14px 16px; text-align: center;
  box-shadow: 0 2px 8px rgba(21,101,192,.07);
  transition: transform .2s, box-shadow .2s;
}
.stat-card:hover { transform: translateY(-3px); box-shadow: 0 6px 18px rgba(21,101,192,.15); }
.stat-number { font-size: 1.85em; font-weight: 900; color: #1565c0; line-height: 1.1; }
.stat-label  { font-size: 0.77em; color: #666; margin-top: 4px; line-height: 1.35; }

/* ── Animated hero banner ── */
@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.hero-banner {
  background: linear-gradient(-45deg, #0d1b2a, #1a3a5c, #1565c0, #0a2540, #0d47a1);
  background-size: 400% 400%;
  animation: gradientShift 14s ease infinite;
  border-radius: 14px;
  padding: 36px 28px 30px;
  margin-bottom: 1.6em;
  text-align: center;
  color: #fff;
  box-shadow: 0 8px 32px rgba(21,101,192,0.18);
}
.hero-name {
  font-size: 2.1em;
  font-weight: 900;
  color: #fff;
  margin-bottom: 6px;
  letter-spacing: -0.02em;
  line-height: 1.15;
}
.hero-subtitle {
  font-size: 0.96em;
  color: #90caf9;
  margin-bottom: 18px;
  font-weight: 500;
}
.hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  justify-content: center;
  margin-bottom: 20px;
}
.hero-pill {
  background: rgba(255,255,255,0.10);
  border: 1px solid rgba(255,255,255,0.18);
  color: #e3f2fd;
  padding: 4px 13px;
  border-radius: 20px;
  font-size: 0.80em;
  font-weight: 600;
  backdrop-filter: blur(4px);
}
.hero-links {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}
.hero-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background: rgba(255,255,255,0.13);
  border: 1px solid rgba(255,255,255,0.22);
  color: #fff !important;
  padding: 6px 15px;
  border-radius: 8px;
  font-size: 0.82em;
  font-weight: 700;
  text-decoration: none !important;
  transition: background .2s, transform .15s;
}
.hero-link:hover { background: rgba(255,255,255,0.22); transform: translateY(-1px); }

/* ── Stat card animation ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.stat-card { animation: fadeUp .5s ease both; }
.stat-card:nth-child(1) { animation-delay: .05s; }
.stat-card:nth-child(2) { animation-delay: .12s; }
.stat-card:nth-child(3) { animation-delay: .19s; }
.stat-card:nth-child(4) { animation-delay: .26s; }
.stat-card:nth-child(5) { animation-delay: .33s; }
.stat-card:nth-child(6) { animation-delay: .40s; }

/* ── Featured projects grid ── */
.featured-grid {
  display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; margin-bottom: 1.8em;
}
.featured-card {
  border-radius: 12px; overflow: hidden;
  border: 1.5px solid #e0e8f0;
  background: #fff;
  transition: transform .18s ease, box-shadow .18s ease;
  text-decoration: none !important; color: inherit;
  display: flex; flex-direction: column;
  will-change: transform; transform-style: preserve-3d;
}
.featured-card:hover { box-shadow: 0 12px 36px rgba(21,101,192,.22); }
.featured-img {
  width: 100%; height: 130px; object-fit: cover; object-position: top;
  border-bottom: 1px solid #e0e8f0;
}
.featured-body { padding: 14px 16px; flex: 1; display: flex; flex-direction: column; }
.featured-venue {
  display: inline-block; padding: 2px 8px; border-radius: 4px;
  font-size: 0.68em; font-weight: 800; margin-bottom: 6px; width: fit-content;
}
.fv-iclr26 { background: #1565c0; color: #fff; }
.fv-neurips { background: #6a1b9a; color: #fff; }
.fv-iclr25 { background: #1976d2; color: #fff; }
.featured-title { font-weight: 800; font-size: 0.88em; color: #1a2332; line-height: 1.4; margin-bottom: 6px; }
.featured-desc { font-size: 0.78em; color: #555; line-height: 1.5; flex: 1; }
.featured-stat {
  margin-top: 8px; font-size: 0.74em; font-weight: 700;
  color: #5a4000; background: #fff8e1;
  padding: 3px 8px; border-radius: 4px; border-left: 3px solid #ffa000;
  width: fit-content;
}

/* ── Pub link buttons ── */
.pub-links { display: flex; gap: 5px; margin-top: 5px; flex-wrap: wrap; }
.pub-link {
  display: inline-flex; align-items: center; gap: 3px;
  font-size: 0.72em; font-weight: 700;
  padding: 2px 8px; border-radius: 4px;
  text-decoration: none !important;
  transition: background .15s;
}
.pl-paper { background: #e3f2fd; color: #0d47a1; }
.pl-paper:hover { background: #bbdefb; }
.pl-project { background: #e8f5e9; color: #1b5e20; }
.pl-project:hover { background: #c8e6c9; }
.pl-code { background: #fce4ec; color: #880e4f; }
.pl-code:hover { background: #f8bbd0; }
.pl-arxiv { background: #fff3e0; color: #bf360c; }
.pl-arxiv:hover { background: #ffe0b2; }

/* ── Research timeline ── */
.research-timeline {
  position: relative; padding-left: 28px; margin: 1em 0 1.6em;
}
.research-timeline::before {
  content: ''; position: absolute; left: 8px; top: 0; bottom: 0;
  width: 3px; background: linear-gradient(to bottom, #1565c0, #7c4dff, #00897b);
  border-radius: 2px;
}
.rt-item {
  position: relative; padding: 10px 0 18px; font-size: 0.88em;
}
.rt-item::before {
  content: ''; position: absolute; left: -24px; top: 14px;
  width: 11px; height: 11px; border-radius: 50%;
  background: #fff; border: 3px solid #1565c0;
  z-index: 1;
}
.rt-item:nth-child(2)::before { border-color: #7c4dff; }
.rt-item:nth-child(3)::before { border-color: #00897b; }
.rt-item:nth-child(4)::before { border-color: #e65100; }
.rt-year { font-weight: 800; color: #1565c0; font-size: 0.82em; }
.rt-title { font-weight: 700; color: #1a2332; margin-top: 2px; }
.rt-desc { color: #555; font-size: 0.92em; line-height: 1.6; margin-top: 2px; }

/* ── Smooth scroll ── */
html { scroll-behavior: smooth; }

/* ── Scroll-to-top button ── */
.scroll-top {
  position: fixed; bottom: 28px; right: 28px; z-index: 999;
  width: 40px; height: 40px; border-radius: 50%;
  background: #1565c0; color: #fff; border: none; cursor: pointer;
  font-size: 1.1em; display: none; align-items: center; justify-content: center;
  box-shadow: 0 4px 14px rgba(21,101,192,.35);
  transition: opacity .3s, transform .3s;
}
.scroll-top:hover { transform: scale(1.1); }
.scroll-top.show { display: flex; }

/* ── News toggle ── */
.news-hidden { display: none; }
.news-toggle {
  background: none; border: 1px solid #ddd; border-radius: 6px;
  padding: 5px 14px; font-size: 0.82em; color: #1565c0;
  cursor: pointer; font-weight: 700; margin-top: 6px;
  transition: background .15s;
}
.news-toggle:hover { background: #e3f2fd; }

/* ── Footer ── */
.site-footer {
  margin-top: 3em; padding: 24px 0 16px;
  border-top: 2px solid #e0e8f0;
  text-align: center; font-size: 0.82em; color: #999;
}
.site-footer a { color: #1565c0; }
.footer-links { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; margin-bottom: 8px; }
.footer-links a { font-weight: 700; }

/* ── Image comparison slider ── */
.img-compare {
  position: relative; overflow: hidden; border-radius: 12px;
  border: 1.5px solid #e0e8f0; cursor: ew-resize;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.img-compare img { display: block; width: 100%; }
.img-compare .img-overlay {
  position: absolute; top: 0; left: 0; width: 50%; height: 100%;
  overflow: hidden;
}
.img-compare .img-overlay img { width: 200%; max-width: none; }
.img-compare .slider-line {
  position: absolute; top: 0; left: 50%; width: 3px; height: 100%;
  background: #fff; box-shadow: 0 0 8px rgba(0,0,0,0.3); z-index: 2;
  transform: translateX(-50%);
}
.img-compare .slider-handle {
  position: absolute; top: 50%; left: 50%; width: 36px; height: 36px;
  background: #fff; border-radius: 50%; z-index: 3;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 10px rgba(0,0,0,0.25);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7em; color: #333; font-weight: 800;
}

/* ── Hover glow on featured cards ── */
.featured-card::after {
  content: ''; position: absolute; inset: 0;
  border-radius: 12px;
  opacity: 0;
  background: linear-gradient(135deg, rgba(21,101,192,0.06), transparent);
  transition: opacity .3s;
  pointer-events: none;
}
.featured-card { position: relative; }
.featured-card:hover::after { opacity: 1; }

/* ── Dark mode ── */
.dark-toggle {
  position: fixed; bottom: 28px; right: 78px; z-index: 999;
  width: 40px; height: 40px; border-radius: 50%;
  background: #1a2332; color: #ffd54f; border: 2px solid rgba(255,255,255,0.1);
  cursor: pointer; font-size: 1.1em;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 14px rgba(0,0,0,.25);
  transition: all .3s;
}
.dark-toggle:hover { transform: scale(1.1); box-shadow: 0 6px 20px rgba(0,0,0,.35); }
body.dark-mode .dark-toggle { background: #ffd54f; color: #1a2332; border-color: #ffd54f; }

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
body.dark-mode .greedy-nav a:hover { color: #58a6ff !important; }
body.dark-mode .greedy-nav .visible-links a::before { background: #58a6ff !important; }

/* ── Dark mode: Sidebar ── */
body.dark-mode .sidebar { background: #0d1117 !important; }
body.dark-mode .author__name { color: #e6edf3 !important; }
body.dark-mode .author__bio, body.dark-mode .author__bio span { color: #8b949e !important; }
body.dark-mode .author__bio a { color: #58a6ff !important; }
body.dark-mode .author__avatar img { border-color: #388bfd !important; box-shadow: 0 4px 20px rgba(56,139,253,0.2) !important; }
body.dark-mode .author__urls a { color: #58a6ff !important; }
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
}
body.dark-mode .featured-card:hover,
body.dark-mode .research-card:hover,
body.dark-mode .stat-card:hover {
  border-color: #388bfd !important; box-shadow: 0 6px 18px rgba(56,139,253,.15) !important;
}
body.dark-mode .featured-img { border-bottom-color: #30363d !important; }

/* ── Dark mode: Section Headers ── */
body.dark-mode .section-header { color: #e6edf3 !important; }
body.dark-mode .section-header::after { background: linear-gradient(to right, #388bfd, transparent) !important; }

/* ── Dark mode: Text ── */
body.dark-mode .pub-title, body.dark-mode .pub-title a,
body.dark-mode .rc-title, body.dark-mode .featured-title,
body.dark-mode .rt-title { color: #e6edf3 !important; }
body.dark-mode .pub-desc, body.dark-mode .rc-desc,
body.dark-mode .featured-desc, body.dark-mode .rt-desc,
body.dark-mode .tagline, body.dark-mode p { color: #8b949e !important; }
body.dark-mode .pub-authors { color: #6e7681 !important; }
body.dark-mode .pub-authors strong { color: #e6edf3 !important; }
body.dark-mode a { color: #58a6ff !important; }

/* ── Dark mode: Borders ── */
body.dark-mode .pub-entry { border-bottom-color: #21262d !important; }
body.dark-mode .news-list li { border-bottom-color: #21262d !important; }
body.dark-mode .pub-thumb-wrap { border-color: #30363d !important; }

/* ── Dark mode: Quick Nav & Banners ── */
body.dark-mode 
body.dark-mode .quick-nav a { color: #58a6ff !important; }
body.dark-mode .quick-nav a:hover { background: #21262d !important; }
body.dark-mode .quick-nav a
body.dark-mode .quick-nav span { color: #58a6ff !important; }
/* internship-banner: unified light blue — no dark mode override */
body.dark-mode .internship-banner-pulse {
  animation: bannerPulse 3s ease-in-out infinite;
}
@keyframes bannerPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(21,101,192,0); }
  50% { box-shadow: 0 0 0 6px rgba(21,101,192,0.12); }
}
.internship-banner { background: linear-gradient(135deg,#161b22,#1c2333) !important; border-color: #30363d !important; color: #c9d1d9 !important; }
body.dark-mode .internship-banner a { color: #58a6ff !important; }

/* ── Dark mode: Badges & Highlights ── */
body.dark-mode .pub-hl { background: #1c1e21 !important; color: #ffd54f !important; border-left-color: #d29922 !important; }
body.dark-mode .stat-number { color: #58a6ff !important; }
body.dark-mode .stat-label { color: #6e7681 !important; }
body.dark-mode .stat-label em { color: #6e7681 !important; }
body.dark-mode .pub-project { background: #1c2333 !important; color: #58a6ff !important; }
body.dark-mode .pub-link.pl-paper { background: #1c2333 !important; color: #58a6ff !important; }
body.dark-mode .pub-link.pl-project { background: #122117 !important; color: #3fb950 !important; }

/* ── BibTeX cite button & popup ── */
.pl-cite { background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; cursor: pointer; font-family: inherit; font-size: 0.78em; font-weight: 600; padding: 3px 9px; border-radius: 20px; transition: background .15s, color .15s; }
.pl-cite:hover { background: #dcfce7; }
.bib-popup { position: absolute; z-index: 9990; display: none; background: #fff; border: 1.5px solid #e5e7eb; border-radius: 10px; padding: 14px 16px; box-shadow: 0 8px 32px rgba(0,0,0,.14); }
.bib-popup.show { display: block; }
.bib-pre { background: #f8fafc; border-radius: 6px; padding: 10px 12px; font-size: 0.76em; overflow-x: auto; white-space: pre; color: #1e293b; border: 1px solid #e2e8f0; margin: 0 0 10px; }
.bib-actions { display: flex; gap: 8px; }
.bib-copy { background: #2563eb; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; cursor: pointer; font-size: 0.83em; font-weight: 600; transition: background .15s; }
.bib-copy:hover { background: #1d4ed8; }
.bib-close { background: #f1f5f9; color: #64748b; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 0.83em; font-weight: 600; }
.bib-close:hover { background: #e2e8f0; }
body.dark-mode .pl-cite { background: #0f3d2e !important; color: #3fb950 !important; border-color: #1a7f45 !important; }
body.dark-mode .bib-popup { background: #161b22 !important; border-color: #30363d !important; }
body.dark-mode .bib-pre { background: #0d1117 !important; color: #c9d1d9 !important; border-color: #30363d !important; }

/* ── Dark mode: News badges ── */
body.dark-mode .nbadge.nb-accept { background: #122117 !important; color: #3fb950 !important; }
body.dark-mode .nbadge.nb-top { background: #2d2000 !important; color: #ffd54f !important; }
body.dark-mode .nbadge.nb-service { background: #21262d !important; color: #8b949e !important; }
body.dark-mode .nbadge.nb-upcoming { background: #0d2137 !important; color: #58a6ff !important; }
body.dark-mode .news-date { color: #484f58 !important; }
body.dark-mode .news-toggle { border-color: #30363d !important; color: #58a6ff !important; }
body.dark-mode .news-toggle:hover { background: #161b22 !important; }

/* ── Dark mode: Research Vision ── */
body.dark-mode blockquote { background: #161b22 !important; border-left-color: #8957e5 !important; color: #c9d1d9 !important; }
body.dark-mode blockquote p { color: #c9d1d9 !important; }
body.dark-mode .rt-year { color: #58a6ff !important; }
body.dark-mode .research-timeline::before { background: linear-gradient(to bottom, #388bfd, #8957e5, #3fb950) !important; }
body.dark-mode .rt-item::before { border-color: #388bfd !important; background: #0d1117 !important; }

/* ── Dark mode: Awards ── */
body.dark-mode ul li { color: #8b949e !important; }
body.dark-mode ul li strong { color: #e6edf3 !important; }

/* ── Dark mode: Footer ── */
body.dark-mode .site-footer { border-top-color: #21262d !important; color: #484f58 !important; }
body.dark-mode .site-footer a { color: #58a6ff !important; }
body.dark-mode .page__footer { background: #010409 !important; border-top-color: #21262d !important; }
body.dark-mode .page__footer a { color: #58a6ff !important; }
body.dark-mode .page__footer-follow .social-icons .fa { color: #58a6ff !important; }
body.dark-mode .page__footer-copyright { color: #484f58 !important; }

/* ── Dark mode: Scroll-top ── */
body.dark-mode .scroll-top { background: #388bfd !important; box-shadow: 0 4px 14px rgba(56,139,253,.3) !important; }

/* ── Dark mode: Featured stat ── */
body.dark-mode .featured-stat { background: #1c1e21 !important; color: #ffd54f !important; border-left-color: #d29922 !important; }
body.dark-mode .featured-venue { opacity: 0.9; }

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
.ra-btn { position: fixed; bottom: 68px; right: 22px; width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg,#2563eb,#7c3aed); color: #fff; font-size: 1.3em; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 4px 16px rgba(37,99,235,.4); z-index: 9990; transition: transform .2s, box-shadow .2s; user-select: none; }
.ra-btn:hover { transform: scale(1.1); box-shadow: 0 6px 22px rgba(37,99,235,.5); }
.ra-panel { position: fixed; bottom: 120px; right: 22px; width: 320px; height: 440px; background: #fff; border-radius: 16px; box-shadow: 0 12px 48px rgba(0,0,0,.18); display: flex; flex-direction: column; z-index: 9991; transform: scale(0.85) translateY(20px); opacity: 0; pointer-events: none; transition: transform .2s, opacity .2s; transform-origin: bottom right; border: 1.5px solid #e5e7eb; }
.ra-panel.show { transform: scale(1) translateY(0); opacity: 1; pointer-events: all; }
.ra-header { background: linear-gradient(135deg,#2563eb,#7c3aed); color: #fff; padding: 12px 14px; border-radius: 14px 14px 0 0; display: flex; justify-content: space-between; align-items: center; font-weight: 700; font-size: 0.9em; }
.ra-close { background: rgba(255,255,255,.2); border: none; color: #fff; width: 24px; height: 24px; border-radius: 50%; cursor: pointer; font-size: 0.85em; display: flex; align-items: center; justify-content: center; }
.ra-close:hover { background: rgba(255,255,255,.35); }
.ra-msgs { flex: 1; overflow-y: auto; padding: 12px; display: flex; flex-direction: column; gap: 8px; }
.ra-msg { max-width: 85%; padding: 8px 12px; border-radius: 12px; font-size: 0.82em; line-height: 1.5; word-break: break-word; }
.ra-user { align-self: flex-end; background: #2563eb; color: #fff; border-radius: 12px 12px 2px 12px; }
.ra-bot { align-self: flex-start; background: #f1f5f9; color: #1e293b; border-radius: 12px 12px 12px 2px; }
.ra-typing { display: flex; gap: 4px; align-items: center; padding: 10px 14px; }
.ra-typing span { width: 7px; height: 7px; border-radius: 50%; background: #94a3b8; animation: ra-dot 1.2s infinite; }
.ra-typing span:nth-child(2) { animation-delay: .2s; }
.ra-typing span:nth-child(3) { animation-delay: .4s; }
@keyframes ra-dot { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-5px)} }
.ra-chips { display: flex; flex-wrap: wrap; gap: 6px; padding: 8px 10px 4px; border-top: 1.5px solid #e5e7eb; }
.ra-chip { background: #eff6ff; color: #1d4ed8; border: 1.5px solid #bfdbfe; border-radius: 999px; padding: 3px 11px; font-size: 0.75em; font-weight: 700; cursor: pointer; transition: background .15s, transform .1s; white-space: nowrap; }
.ra-chip:hover { background: #dbeafe; transform: translateY(-1px); }
.ra-chips.hidden { display: none; }
body.dark-mode .ra-chip { background: #1c2333 !important; color: #58a6ff !important; border-color: #1f3a6e !important; }
.ra-input-row { display: flex; border-top: 1.5px solid #e5e7eb; padding: 8px 10px; gap: 6px; }
.ra-input { flex: 1; border: 1.5px solid #e5e7eb; border-radius: 8px; padding: 7px 10px; font-size: 0.83em; outline: none; font-family: inherit; }
.ra-input:focus { border-color: #2563eb; }
.ra-send { background: #2563eb; color: #fff; border: none; border-radius: 8px; padding: 7px 12px; cursor: pointer; font-size: 0.9em; font-weight: 700; transition: background .15s; }
.ra-send:hover { background: #1d4ed8; }
body.dark-mode .ra-panel { background: #161b22 !important; border-color: #30363d !important; }
body.dark-mode .ra-bot { background: #21262d !important; color: #c9d1d9 !important; }
body.dark-mode .ra-input { background: #0d1117 !important; border-color: #30363d !important; color: #c9d1d9 !important; }
body.dark-mode .ra-input-row { border-color: #30363d !important; }
@media(max-width:400px){ .ra-panel { width: calc(100vw - 32px); right: 16px; } }

/* ── Conference Deadline Widget ── */
.conf-ddl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 1.8em; }
@media(max-width:700px){ .conf-ddl-grid { grid-template-columns: 1fr 1fr; } }
@media(max-width:450px){ .conf-ddl-grid { grid-template-columns: 1fr; } }
.ddl-card { border-radius: 10px; border: 1.5px solid #e5e7eb; border-left: 4px solid #2563eb; background: #fff; padding: 12px 14px; transition: box-shadow .2s, transform .15s; }
.ddl-card:hover { box-shadow: 0 4px 18px rgba(0,0,0,.1); transform: translateY(-2px); }
.ddl-top { display: flex; align-items: center; gap: 6px; margin-bottom: 4px; }
.ddl-abbr { font-size: 1em; font-weight: 800; letter-spacing: -.01em; }
.ddl-type { font-size: 0.68em; font-weight: 700; padding: 1px 7px; border-radius: 20px; letter-spacing: .05em; }
.ddl-name { font-size: 0.85em; font-weight: 700; margin-bottom: 4px; }
.ddl-name a { color: #1a2332; text-decoration: none; }
.ddl-name a:hover { color: #2563eb; text-decoration: underline; }
.ddl-meta { font-size: 0.74em; color: #6b7280; margin-bottom: 8px; line-height: 1.5; }
.ddl-chip { display: inline-block; font-size: 0.74em; font-weight: 700; padding: 2px 8px; border-radius: 20px; border: 1px solid; white-space: nowrap; }
body.dark-mode .ddl-card { background: #161b22 !important; border-color: #30363d !important; }
body.dark-mode .ddl-name a { color: #c9d1d9 !important; }
body.dark-mode .ddl-meta { color: #8b949e !important; }

/* ── Reading progress bar ── */
#read-progress {
  position: fixed; top: 0; left: 0; height: 3px; width: 0%;
  background: linear-gradient(90deg, #2563eb 0%, #7c3aed 60%, #059669 100%);
  z-index: 9999; transition: width .08s linear;
  pointer-events: none;
}
.hero-banner { position: relative; overflow: hidden; }
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
img[loading="lazy"] {
  opacity: 0; transition: opacity 0.4s;
}
img[loading="lazy"].loaded, img[loading="lazy"][complete] {
  opacity: 1;
}

/* ── Responsive ── */
@media(max-width:920px) {
  .featured-grid { grid-template-columns: 1fr 1fr; }  /* 2-col from 920px down */
}
@media(max-width:760px) {
  .research-grid { grid-template-columns: 1fr 1fr; }
  .featured-grid { grid-template-columns: 1fr 1fr; }
}
@media(max-width:480px) {
  .hero-name { font-size: 1.65em; }
  .research-grid { grid-template-columns: 1fr; }
  .featured-grid { grid-template-columns: 1fr; }
  .pub-entry { flex-direction: column; gap: 6px; }
  .pub-left  { flex-direction: row; }
  .stat-card { flex: 1 1 100px; padding: 10px 12px; }
  .stat-number { font-size: 1.5em; }
  .dark-toggle { bottom: 76px; right: 16px; }
  .scroll-top { right: 16px; }
}






/* ── Thumbnail placeholder: hide empty wrapper until image loads ── */
.pub-thumb-wrap img { opacity: 0; transition: opacity .3s; }
.pub-thumb-wrap img.loaded { opacity: 1; }
.pub-thumb { width: 100%; aspect-ratio: 16/9; min-height: 80px; border-radius: 6px; }

/* ── ① Citation count badge ── */
.cite-badge {
  display: inline-flex; align-items: center; gap: 4px;
  background: #f0f9ff; color: #0369a1;
  border: 1px solid #bae6fd; border-radius: 999px;
  padding: 1px 9px; font-size: 0.74em; font-weight: 700;
  margin-left: 6px; vertical-align: middle; white-space: nowrap;
}
body.dark-mode .cite-badge { background: #0c2340; color: #7dd3fc; border-color: #1e4976; }

/* ── ② Filter bar ── */
.pub-filter-bar {
  display: flex; flex-wrap: wrap; align-items: center; gap: 8px;
  margin-bottom: 18px; padding: 14px 16px;
  background: #f8faff; border: 1px solid #e5e7eb; border-radius: 12px;

  overflow-x: auto; -webkit-overflow-scrolling: touch;}
.filter-search {
  flex: 1; min-width: 180px; padding: 7px 14px;
  border: 1.5px solid #e5e7eb; border-radius: 8px;
  font-size: 0.88em; outline: none; font-family: inherit;
  background: #fff; color: #111;
}
.filter-search:focus { border-color: #1565c0; }
.filter-btn {
  padding: 5px 14px; border-radius: 999px; font-size: 0.8em; font-weight: 700;
  border: 1.5px solid #e5e7eb; background: #fff; color: #555; cursor: pointer;
  transition: all .15s;
}
.filter-btn.active, .filter-btn:hover { background: #1565c0; color: #fff; border-color: #1565c0; }
body.dark-mode .pub-filter-bar { background: #161b22; border-color: #30363d; }
body.dark-mode .filter-search { background: #0d1117; color: #e6edf3; border-color: #30363d; }
body.dark-mode .filter-btn { background: #21262d; color: #8b949e; border-color: #30363d; }
body.dark-mode .filter-btn.active, body.dark-mode .filter-btn:hover { background: #388bfd; color: #fff; border-color: #388bfd; }
.pub-entry.hidden { display: none !important; }

/* ── ④ Abstract tooltip ── */
.pub-title { position: relative; cursor: default; }
.pub-abstract-preview {
  display: none; position: absolute; top: calc(100% + 8px); left: 0; right: 0; z-index: 50;
  background: #fff; border: 1.5px solid #e5e7eb; border-radius: 10px;
  padding: 14px 16px; font-size: 0.84em; color: #374151; line-height: 1.65;
  box-shadow: 0 8px 28px rgba(0,0,0,.12); max-width: 520px; min-width: 280px;
  pointer-events: none;
}
.pub-entry:hover .pub-abstract-preview,
.pub-entry.abstract-open .pub-abstract-preview { display: block; }
body.dark-mode .pub-abstract-preview { background: #161b22; border-color: #30363d; color: #b5c2c8; box-shadow: 0 8px 28px rgba(0,0,0,.4); }

/* ── ⑧ Research graph ── */
#research-graph-section { margin-top: 0; }
#research-graph {
  width: 100%; height: 460px; border-radius: 14px; border: 1.5px solid #e5e7eb;
  background: #fafbff; overflow: hidden; position: relative;
}
@media(max-width:600px){ #research-graph { height: 320px; } }
body.dark-mode #research-graph { background: #0d1117; border-color: #30363d; }
#research-graph svg { width: 100%; height: 100%; }
.graph-node circle { cursor: pointer; transition: r .15s; }
.graph-node:hover circle { filter: brightness(1.15); }
.graph-node text { font-size: 10px; font-family: Inter, sans-serif; pointer-events: none; }
.graph-link { stroke: #cbd5e1; stroke-opacity: 0.6; }
body.dark-mode .graph-link { stroke: #334155; }
.graph-legend { position: absolute; bottom: 12px; left: 14px; display: flex; flex-wrap: wrap; gap: 8px; }
.gl-item { display: flex; align-items: center; gap: 5px; font-size: 0.74em; font-weight: 600; color: #444; }
.gl-dot { width: 10px; height: 10px; border-radius: 50%; }
body.dark-mode .gl-item { color: #8b949e; }
/* ── Dark mode: Hero pills ── */
body.dark-mode .hero-pill { background: rgba(255,255,255,0.12) !important; color: rgba(255,255,255,0.85) !important; border-color: rgba(255,255,255,0.2) !important; }
/* ── Dark mode: Awards grid text ── */
body.dark-mode #awards + div ul { color: #8b949e !important; }
body.dark-mode #awards + div li { color: #8b949e !important; }
body.dark-mode #awards + div p[style] { color: #c9d1d9 !important; }

</style>

<!-- Hero banner -->
<div id="read-progress"></div>
<div class="hero-banner">
  <canvas class="hero-particles" id="particles"></canvas>
  <div class="hero-name">Jiajun Fan</div>
  <div class="hero-subtitle" id="hero-typed"></div>
  <div class="hero-pills">
    <span class="hero-pill">🌊 RL Post-Training for Generative Models</span>
    <span class="hero-pill">🧠 Multimodal Reasoning LLMs</span>
    <span class="hero-pill">🎮 Superhuman Deep RL</span>
  </div>
  <div class="hero-links">
    <a class="hero-link" href="files/CV.pdf">📋 CV</a>
    <a class="hero-link" href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">🎓 Scholar</a>
    <a class="hero-link" href="mailto:jiajunf3@illinois.edu">✉️ Email</a>
    <a class="hero-link" href="https://openreview.net/profile?id=~Jiajun_Fan1" target="_blank" rel="noopener noreferrer">📝 OpenReview</a>
    <a class="hero-link" href="https://github.com/markerthu" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
    <a class="hero-link" href="https://www.linkedin.com/in/jiajun-fan-57b12b26b" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
  </div>
</div>

<!-- Quick nav -->
<div class="quick-nav">
  <span style="font-weight:800;color:#1565c0;">↓ Jump to:</span>
  <a href="#news"         data-qn="news">📰 News</a>
  <a href="#featured"     data-qn="featured">🔥 Featured</a>
  <a href="#publications" data-qn="publications">📄 Publications</a>
  <a href="#research"     data-qn="research">🔬 Research</a>
  <a href="#awards"       data-qn="awards">🏅 Awards</a>
  <a href="/year-archive/">✍️ Blog</a>
  <a href="files/CV.pdf">📋 CV</a>
  <a href="#contact">📬 Contact</a>
</div>

<!-- Intro -->
<p class="tagline">
CS Ph.D. student at <strong>UIUC</strong>. I work on <strong>RL post-training for generative models</strong> — making diffusion/flow models and multimodal reasoning LLMs continuously self-improve with minimal human supervision. Previously: <strong>24 Atari world records</strong>, 500× more data-efficient than Agent57, <strong>ICLR 2023 Oral</strong> (rank 5/4176).
</p>

<div class="internship-banner internship-banner-pulse">
🎓 <strong>Seeking research internship — Summer/Fall 2026.</strong> RL · Generative Models · Reasoning LLMs
&nbsp;<a href="files/CV.pdf">[CV]</a>
&nbsp;<a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">[Scholar]</a>
&nbsp;<a href="mailto:jiajunf3@illinois.edu">[Email]</a>
</div>

<!-- ═══════════════════════════════ NEWS ═══════════════════════════════ -->
<div class="section-header" id="news">📰 Latest News</div>

<ul class="news-list">
  <li>
    <span class="news-date">Apr 2026</span>
    <span><span class="nbadge nb-upcoming">Upcoming</span>🇧🇷 <strong>ICLR 2026</strong> in Rio de Janeiro, Apr 23–27. Presenting CESAR &amp; SP-VLA.</span>
  </li>
  <li>
    <span class="news-date">Jan 2026</span>
    <span><span class="nbadge nb-accept">Accept</span><strong>2 papers at ICLR 2026</strong> — CESAR &amp; SP-VLA. See you in Rio 🇧🇷</span>
  </li>
  <li>
    <span class="news-date">Sep 2025</span>
    <span><span class="nbadge nb-accept">Accept</span><strong>2 papers at NeurIPS 2025</strong> — ADRPO &amp; VarCon. See you in San Diego 🌊</span>
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
    <span><span class="nbadge nb-service">Service</span>Reviewer: ICLR 2025–26, NeurIPS 2024–25, ICML 2025–26, CVPR 2026, AAAI 2025, AISTATS 2025.</span>
  </li>
  <li class="news-hidden" id="news-extra-2">
    <span class="news-date">Aug 2024</span>
    <span>🎓 Started Ph.D. at <strong>UIUC CS</strong> (GPA 4.0/4.0).</span>
  </li>
  <li class="news-hidden" id="news-extra-3">
    <span class="news-date">Jan 2023</span>
    <span><span class="nbadge nb-top">Oral · Top 5%</span>LBC at <strong>ICLR 2023</strong>, ranked <strong>5/4176</strong> — broke 24 Atari world records.</span>
  </li>
</ul>
<button class="news-toggle" id="news-toggle" onclick="
  var extras = document.querySelectorAll('.news-hidden');
  var btn = document.getElementById('news-toggle');
  var showing = extras[0].style.display === 'flex';
  extras.forEach(function(e){ e.style.display = showing ? 'none' : 'flex'; });
  btn.textContent = showing ? '▼ Show more news' : '▲ Show less';
" aria-label="Show more news">▼ Show more news</button>

<!-- ═══════════════════════════════ FEATURED ═══════════════════════════ -->
<div class="section-header" id="featured">🔥 Featured Research</div>

<div class="featured-grid">
  <a class="featured-card" href="/projects/cesar/">
    <img class="featured-img" loading="lazy" src="/projects/cesar/images/teaser.png" alt="CESAR">
    <div class="featured-body">
      <span class="featured-venue fv-iclr26">ICLR 2026</span>
      <div class="featured-title">CESAR: Process Rewards for Audio LLM Reasoning</div>
      <div class="featured-desc">First to show test-time inverse scaling in Audio LLMs — and fix it with process rewards via online RL.</div>
      <div class="featured-stat">🏆 SOTA MMAU · Beats Gemini 2.5 Pro</div>
    </div>
  </a>
  <a class="featured-card" href="/projects/adrpo/">
    <img class="featured-img" loading="lazy" src="/projects/adrpo/images/compare_models.png" alt="ADRPO">
    <div class="featured-body">
      <span class="featured-venue fv-neurips">NeurIPS 2025</span>
      <div class="featured-title">ADRPO: Adaptive Regularization for Generative Model RLHF</div>
      <div class="featured-desc">Sample-level adaptive divergence regularization — 2B model outperforms 12B competitors.</div>
      <div class="featured-stat">🚀 2B SD3 &gt; FLUX 12B &amp; SANA 4.8B</div>
    </div>
  </a>
  <a class="featured-card" href="/projects/orw-cfm-w2/">
    <img class="featured-img" loading="lazy" src="/projects/orw-cfm-w2/images/method.png" alt="ORW-CFM-W2">
    <div class="featured-body">
      <span class="featured-venue fv-iclr25">ICLR 2025</span>
      <div class="featured-title">ORW-CFM-W2: Online RLHF for Flow Matching</div>
      <div class="featured-desc">First collapse-free online RL framework for flow matching models with W2 regularization.</div>
      <div class="featured-stat">✨ First online RLHF for flow matching</div>
    </div>
  </a>
  <a class="featured-card" href="/projects/lbc/">
    <div class="featured-img" style="background:linear-gradient(135deg,#2d1b5e 0%,#7c3aed 45%,#c084fc 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;">
      <div style="font-size:2.2em;line-height:1;">🏅</div>
      <div style="font-size:0.75em;font-weight:800;color:#fff;letter-spacing:.05em;text-align:center;">ATARI WORLD<br>RECORDS</div>
      <div style="font-size:1.4em;font-weight:900;color:#fde68a;">×24</div>
    </div>
    <div class="featured-body">
      <span class="featured-venue" style="background:#7c3aed;color:#fff;font-size:0.68em;font-weight:800;letter-spacing:.04em;border-radius:12px;padding:2px 9px;">ICLR 2023 · Oral</span>
      <div class="featured-title">LBC: Superhuman Atari — 24 World Records</div>
      <div class="featured-desc">Breaking 24 Atari human world records with 500× less data than prior SOTA (Agent57).</div>
      <div class="featured-stat">🏅 Rank 5/4176 · 10,077% mean human performance</div>
    </div>
  </a>
</div>

<!-- ══════════════════ CONFERENCE DEADLINES ══════════════════ -->
<!-- ═══════════════════════════════ PUBLICATIONS ═══════════════════════ -->
<div class="section-header" id="publications">📄 Selected Publications</div>

<p style="font-size:0.83em;color:#999;margin-top:-0.6em;">* = first/co-first author &nbsp;·&nbsp;
<a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Full list on Google Scholar</a> &nbsp;/&nbsp;
<a href="/publications/">Publications page</a></p>

<div class="pub-filter-bar">
  <input class="filter-search" id="pubSearch" type="text" placeholder="🔍  Search papers…" aria-label="Search publications" oninput="filterPubs()">
  <button class="filter-btn active" aria-label="Show all papers" onclick="filterByVenue(this,'all')">All</button>
  <button class="filter-btn" aria-label="Filter by ICLR papers" onclick="filterByVenue(this,'ICLR')">ICLR</button>
  <button class="filter-btn" aria-label="Filter by NeurIPS papers" onclick="filterByVenue(this,'NeurIPS')">NeurIPS</button>
  <button class="filter-btn" aria-label="Filter by ICML papers" onclick="filterByVenue(this,'ICML')">ICML</button>
  <button class="filter-btn" aria-label="Filter by TPAMI papers" onclick="filterByVenue(this,'TPAMI')">TPAMI</button>
  <button class="filter-btn" aria-label="Filter by preprints" onclick="filterByVenue(this,'Preprint')">Preprint</button>
</div>

<div class="pub-list">

<div class="pub-entry" role="article" data-venue="ICLR" data-year="2026" data-arxiv="2510.20867" data-abstract="CESAR resolves test-time inverse scaling in Audio LLMs by rewarding the reasoning process via GRPO, achieving SOTA on MMAU — outperforming Gemini 2.5 Pro and GPT-4o Audio.">
  <div class="pub-left"><span class="pb pb-iclr">ICLR 2026</span><span class="pub-year">2026</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/projects/cesar/images/framework.png" alt="CESAR framework"></div>
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=DUr48hxO2h" target="_blank" rel="noopener noreferrer">Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards</a>
      <a class="pub-project" href="/projects/cesar/">Project Page</a>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">CESAR resolves test-time inverse scaling in Audio LLMs by rewarding the reasoning process via GRPO, achieving SOTA on MMAU — outperforming Gemini 2.5 Pro and GPT-4o Audio.</div></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, R. Ren, J. Li, R. Pandey, P.G. Shivakumar, I. Bulyko, A. Gandhe, G. Liu, Y. Gu</div>
    <div class="pub-desc">CESAR: process-reward RL (GRPO) resolving test-time inverse scaling in Audio LLMs — models produce hallucinatory reasoning without proper guidance; CESAR rewrites that.</div>
    <div class="pub-hl">🏆 SOTA on MMAU Test-mini · Outperforms Gemini 2.5 Pro &amp; GPT-4o Audio</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=DUr48hxO2h" target="_blank" rel="noopener noreferrer">📄 Paper</a>
      <a class="pub-link pl-project" href="/projects/cesar/">🔗 Project</a>
      <a class="pub-link pl-arxiv" href="https://arxiv.org/abs/2510.20867" target="_blank" rel="noopener noreferrer">📎 arXiv</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="ICLR" data-year="2026" data-arxiv="SP-VLA" data-abstract="SP-VLA introduces action-aware model scheduling and spatio-semantic token pruning for VLA model acceleration, achieving 1.5× lossless speedup on LIBERO and 2.4× speedup on SimplerEnv.">
  <div class="pub-left">
    
    <span class="pb pb-iclr">ICLR 2026</span><span class="pub-year">2026</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=RwdGIIjPlC" target="_blank" rel="noopener noreferrer">SP-VLA: A Joint Model Scheduling and Token Pruning Approach for VLA Model Acceleration</a><div class="pub-abstract-preview">SP-VLA introduces action-aware model scheduling and spatio-semantic token pruning for VLA model acceleration, achieving 1.5× lossless speedup on LIBERO and 2.4× speedup on SimplerEnv.</div></div>
    <div class="pub-authors">Y. Li, Y. Meng, Z. Sun, K. Ji, C. Tang, <strong>J. Fan</strong>, X. Ma, S.-T. Xia, Z. Wang, W. Zhu</div>
    <div class="pub-desc">Action-aware model scheduling + spatio-semantic token pruning for VLA acceleration.</div>
    <div class="pub-hl">⚡ 1.5× lossless speedup (LIBERO) · 2.4× speedup (SimplerEnv)</div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="NeurIPS" data-year="2025" data-arxiv="2510.18053" data-abstract="ADRPO introduces sample-level adaptive divergence regularization for RLHF — high-value samples get more freedom, poor samples get stronger constraints. Plug-and-play on any RL method.">
  <div class="pub-left"><span class="pb pb-neurips">NeurIPS 2025</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/projects/adrpo/images/compare_models.png" alt="ADRPO qualitative results"></div>
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=aXO0xg0ttW" target="_blank" rel="noopener noreferrer">Adaptive Divergence Regularized Policy Optimization for Fine-tuning Generative Models</a>
      <a class="pub-project" href="/projects/adrpo/">Project Page</a>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">ADRPO introduces sample-level adaptive divergence regularization for RLHF — high-value samples get more freedom, poor samples get stronger constraints. Plug-and-play on any RL method.</div></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, T. Wei, C. Cheng, Y. Chen, G. Liu</div>
    <div class="pub-desc">ADRPO: sample-level adaptive divergence regularization — high-value samples get more freedom, poor samples get stronger constraint. Plug-and-play on top of any RLHF method.</div>
    <div class="pub-hl">🚀 2B SD3 surpasses 4.8B &amp; 12B models · Generalizes to LLMs &amp; audio reasoning</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=aXO0xg0ttW" target="_blank" rel="noopener noreferrer">📄 Paper</a>
      <a class="pub-link pl-project" href="/projects/adrpo/">🔗 Project</a>
      <a class="pub-link pl-arxiv" href="https://arxiv.org/abs/2510.18053" target="_blank" rel="noopener noreferrer">📎 arXiv</a>
    </div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="NeurIPS" data-year="2025" data-arxiv="VarCon" data-abstract="VarCon reformulates supervised contrastive learning as variational inference, achieving SOTA 79.36% Top-1 accuracy on ImageNet-1K with ResNet-50.">
  <div class="pub-left">
    
    <span class="pb pb-neurips">NeurIPS 2025</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=uOOlHOq500" target="_blank" rel="noopener noreferrer">Variational Supervised Contrastive Learning</a>
      <div class="pub-hl">📊 SOTA 79.36% Top-1 on ImageNet-1K with ResNet-50</div><div class="pub-abstract-preview">VarCon reformulates supervised contrastive learning as variational inference, achieving SOTA 79.36% Top-1 accuracy on ImageNet-1K with ResNet-50.</div></div>
    <div class="pub-authors">Z. Wang, <strong>J. Fan</strong>, T. Nguyen, H. Ji, G. Liu</div>
    <div class="pub-desc">VarCon: supervised contrastive learning as variational inference — posterior-weighted ELBO replaces pairwise comparisons.</div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="ICLR" data-year="2025" data-arxiv="ORW-CFM-W2" data-abstract="ORW-CFM-W2 is the first online RLHF method for flow matching — no human data, no likelihood estimation. Wasserstein regularization maintains generation diversity.">
  <div class="pub-left"><span class="pb pb-iclr">ICLR 2025</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/projects/orw-cfm-w2/images/main_figure.png" alt="ORW-CFM-W2 method"></div>
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=2IoFFexvuw" target="_blank" rel="noopener noreferrer">Online Reward-Weighted Fine-Tuning of Flow Matching with Wasserstein Regularization</a>
      <a class="pub-project" href="/projects/orw-cfm-w2/">Project Page</a>
      <div class="pub-hl">🥇 First online RLHF for flow matching · Collapse-free W2 regularization</div>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">ORW-CFM-W2 is the first online RLHF method for flow matching — no human data, no likelihood estimation. Wasserstein regularization maintains generation diversity.</div></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, S. Shen, C. Cheng, Y. Chen, C. Liang, G. Liu</div>
    <div class="pub-desc">ORW-CFM-W2: first online RLHF for flow matching — no human data, no likelihood, no collapse. W2 regularization keeps generation diverse.</div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="Preprint" data-year="2025" data-arxiv="2510.18072" data-abstract="AC-Flow introduces actor-critic with intermediate feedback for flow matching — reward shaping + dual-stability mechanism + Wasserstein regularization enables robust SD3 fine-tuning without collapse.">
  <div class="pub-left">
    
    <span class="pb pb-arxiv">Preprint</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2510.18072" target="_blank" rel="noopener noreferrer">Fine-tuning Flow Matching Generative Models with Intermediate Feedback</a>
      <a class="pub-project" href="/projects/ac-flow/">Project Page</a>
      <div class="pub-hl">⚙️ Actor-critic with step-level reward · Stable SD3 fine-tuning without collapse</div>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">AC-Flow introduces actor-critic with intermediate feedback for flow matching — reward shaping + dual-stability mechanism + Wasserstein regularization enables robust SD3 fine-tuning without collapse.</div></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, C. Cheng, S. Shen, X. Zhou, G. Liu &nbsp;·&nbsp; <em>Under Review</em></div>
    <div class="pub-desc">AC-Flow: actor-critic with intermediate feedback for flow matching — reward shaping + dual-stability + Wasserstein regularization. Robust fine-tuning on SD3 without collapse.</div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="TPAMI" data-year="2026" data-arxiv="2407.05010" data-abstract="PRANCE jointly optimizes token pruning and structural channel pruning for adaptive ViT inference, achieving significant speedup while maintaining accuracy.">
  <div class="pub-left">
    
    <span class="pb pb-journal">TPAMI 2026</span><span class="pub-year">2026</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://arxiv.org/abs/2407.05010" target="_blank" rel="noopener noreferrer">PRANCE: Joint Token-Optimization and Structural Channel-Pruning for Adaptive ViT Inference</a>
      <div class="pub-hl">⚡ Joint token + channel pruning · Adaptive ViT inference · IEEE TPAMI 2026</div><div class="pub-abstract-preview">PRANCE jointly optimizes token pruning and structural channel pruning for adaptive ViT inference, achieving significant speedup while maintaining accuracy.</div></div>
    <div class="pub-authors">Y. Li, C. Tang, Y. Meng, <strong>J. Fan</strong>, Z. Chai, X. Ma, Z. Wang, W. Zhu &nbsp;·&nbsp; <em>IEEE TPAMI</em></div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="ICLR" data-year="2023" data-arxiv="LBC" data-abstract="LBC introduces a learnable hybrid behavior mapping and bandit meta-controller for exploration control in deep RL, breaking 24 Atari human world records with 500× less data than prior SOTA.">
  <div class="pub-left">
    
    <span class="pb pb-oral">ICLR 2023<br>Oral</span><span class="pub-year">2023</span></div>
  <div class="pub-right">
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=FeWvD0L_a4" target="_blank" rel="noopener noreferrer">Learnable Behavior Control: Breaking Atari Human World Records via Sample-Efficient Behavior Selection</a>
      <a class="pub-project" href="/projects/lbc/">Project Page</a>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">LBC introduces a learnable hybrid behavior mapping and bandit meta-controller for exploration control in deep RL, breaking 24 Atari human world records with 500× less data than prior SOTA.</div></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, Y. Zhuang, Y. Liu, J. Hao, B. Wang, J. Zhu, H. Wang, S.-T. Xia</div>
    <div class="pub-desc">LBC: learnable hybrid behavior mapping + bandit meta-controller. Unified framework for exploration control in deep RL.</div>
    <div class="pub-hl">🏅 Ranked 5/4176 · 10,077% mean human score · 24 world records · 500× data efficiency</div>
  </div>
</div>

<div class="pub-entry" role="article" data-venue="ICML" data-year="2022" data-arxiv="GDI" data-abstract="GDI shows that optimizing the training data distribution is the key lever for superhuman RL efficiency. Provides a unified framework that subsumes diverse RL algorithms as special cases.">
  <div class="pub-left">
    
    <span class="pb pb-icml">ICML 2022</span><span class="pub-year">2022</span></div>
  <div class="pub-right">
    <div class="pub-title">
      <a href="https://proceedings.mlr.press/v162/fan22c.html" target="_blank" rel="noopener noreferrer">Generalized Data Distribution Iteration</a>
      <a class="pub-project" href="/projects/gdi/">Project Page</a>
    <button class="pub-abst-btn" aria-expanded="false" aria-label="Toggle abstract">▾ Abstract</button>
    <div class="pub-abstract-preview">GDI shows that optimizing the training data distribution is the key lever for superhuman RL efficiency. Provides a unified framework that subsumes diverse RL algorithms as special cases.</div></div>
    <div class="pub-authors"><strong>J. Fan*</strong>, C. Xiao</div>
    <div class="pub-desc">GDI: optimizing the data distribution is the key to superhuman RL efficiency. Unified framework for diverse RL algorithms.</div>
    <div class="pub-hl">📈 Agent57 beaten with 500× less data &amp; 2× avg performance</div>
  </div>
</div>

</div>


<!-- ════════════ RESEARCH GRAPH ════════════ -->
<div class="section-header" id="research-graph-section">🕸️ Research Paper Network</div>
<p style="font-size:0.88em;color:#666;margin-bottom:14px;">Hover a node to highlight connections. Papers are grouped by research theme.</p>
<div id="research-graph"></div>

<!-- ═══════════════════════════════ RESEARCH ═══════════════════════════ -->
<div class="section-header" id="research">🔬 Research Interests</div>

<div class="research-grid">
  <div class="research-card">
    <div class="rc-icon">🌊</div>
    <div class="rc-title">RL Post-Training for Generative Models</div>
    <div class="rc-desc">Collapse-free online RLHF for flow/diffusion models. No human-collected preference data needed — models improve from their own generations (ORW-CFM-W2, ADRPO, AC-Flow).</div>
  </div>
  <div class="research-card">
    <div class="rc-icon">🧠</div>
    <div class="rc-title">Reasoning in Multimodal LLMs</div>
    <div class="rc-desc">Process-reward RL for audio/visual LLMs — fixing test-time inverse scaling so reasoning actually helps, not hurts (CESAR).</div>
  </div>
  <div class="research-card">
    <div class="rc-icon">🎮</div>
    <div class="rc-title">Superhuman-Level Deep RL</div>
    <div class="rc-desc">Sample-efficient RL that exceeds human performance. Broke 24 Atari world records with 500× less data than prior SOTA (LBC, GDI).</div>
  </div>
</div>

<!-- ═══════════════════════════════ STATS ═══════════════════════════════ -->
<div class="section-header" id="impact">⚡ Impact at a Glance</div>

<div class="stats-row">
  <div class="stat-card">
    <div class="stat-number" data-target="9" data-suffix="+">0</div>
    <div class="stat-label">Top Venue Papers<br><em>ICLR · NeurIPS · ICML · TPAMI</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number" data-target="24">0</div>
    <div class="stat-label">Atari World Records<br><em>broken by LBC (ICLR'23 Oral)</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number" data-target="500" data-suffix="×">0</div>
    <div class="stat-label">More Data-Efficient<br><em>than Agent57</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number">SOTA</div>
    <div class="stat-label">MMAU Audio Reasoning<br><em>Beats Gemini 2.5 Pro</em></div>
  </div>
  <div class="stat-card">
    <div class="stat-number" data-target="{{ site.data.citations._total | default: 300 }}" data-suffix="+">0</div>
    <div class="stat-label">Google Scholar Citations</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">4.0</div>
    <div class="stat-label">GPA — UIUC Ph.D.<br><em>Computer Science</em></div>
  </div>
</div>

<!-- ═══════════════════════════════ VISION ════════════════════════════ -->
<div class="section-header" id="vision">💡 Research Vision</div>

<blockquote style="background:#f8f4ff;border-left:4px solid #7c4dff;border-radius:0 8px 8px 0;padding:14px 20px;color:#333;font-style:normal;margin-bottom:1em;">
<p style="margin:0 0 6px;font-weight:800;color:#4a148c;font-size:1em;">Making AI Systems That Improve Themselves</p>
<p style="margin:0;font-size:0.92em;line-height:1.75;">
Today's AI is frozen after training. I work to change that: AI that <strong>never stops getting better</strong>, with progressively less human scaffolding.
</p>
</blockquote>

<div class="research-timeline">
  <div class="rt-item">
    <div class="rt-year">Step 1 — ICLR 2025</div>
    <div class="rt-title">Eliminate human-collected preference data</div>
    <div class="rt-desc">ORW-CFM-W2: online reward-weighted training lets models improve from their own generations — no paired human data needed.</div>
  </div>
  <div class="rt-item">
    <div class="rt-year">Step 2 — NeurIPS 2025</div>
    <div class="rt-title">Remove manual KL tuning</div>
    <div class="rt-desc">ADRPO: adaptive divergence control eliminates the need for hand-tuned regularization — each sample gets its own constraint.</div>
  </div>
  <div class="rt-item">
    <div class="rt-year">Step 3 — ICLR 2026</div>
    <div class="rt-title">Reward the reasoning process, not just outcomes</div>
    <div class="rt-desc">CESAR: process-level rewards resolve test-time inverse scaling in Audio LLMs — reasoning finally helps instead of hurts, achieving SOTA on MMAU.</div>
  </div>
  <div class="rt-item" style="opacity:0.7;">
    <div class="rt-year" style="color:#e65100;">Step 4 — Ongoing</div>
    <div class="rt-title">Fully autonomous self-improvement</div>
    <div class="rt-desc">The endgame: generative models that continuously improve with progressively less human intervention — from data collection to reward design to training itself.</div>
  </div>
</div>

<!-- ═══════════════════════════════ AWARDS ════════════════════════════ -->
<div class="section-header" id="awards">🏅 Awards &amp; Academic Service</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:1.5em;">
  <div>
    <p style="font-weight:800;margin-bottom:8px;color:#1a2332;">🎖 Selected Awards</p>
    <ul style="font-size:0.87em;color:#444;line-height:2;padding-left:1.2em;margin:0;">
      <li>National Scholarship ×2, Top 1% — Nankai Univ.</li>
      <li>Ranked <strong>1st / 83</strong> in major — Nankai Univ.</li>
      <li>Outstanding Graduates (Top 1%) — Nankai Univ.</li>
      <li>Tang Lixin Scholarship (Top 1%)</li>
      <li>GPA <strong>4.0/4.0</strong> — UIUC Ph.D.</li>
      <li>ICLR 2023 Oral (Top 1.2%, <strong>5/4176</strong>) — LBC paper</li>
      <li>GPA <strong>3.97/4.0</strong>, Top 1.3% — Tsinghua M.Eng.</li>
    </ul>
  </div>
  <div>
    <p style="font-weight:800;margin-bottom:8px;color:#1a2332;">🔍 Reviewer</p>
    <ul style="font-size:0.87em;color:#444;line-height:2;padding-left:1.2em;margin:0;">
      <li>ICLR 2024 · 2025 · <strong>2026</strong></li>
      <li>NeurIPS 2022–2024 · <strong>2025</strong></li>
      <li>ICML 2023–2024 · <strong>2025 · 2026</strong></li>
      <li>CVPR <strong>2026</strong></li>
      <li>AAAI 2025 · AISTATS 2025 · KDD 2024</li>
    </ul>
  </div>
</div>

<!-- ═══════════════════════════════ CONTACT ══════════════════════════ -->
<div class="section-header" id="deadlines">📅 Conference Deadlines</div>
<p style="font-size:0.84em;color:#666;margin-bottom:14px;">Key AI/ML venue deadlines I track — for the full list see <a href="https://ccfddl.com/" target="_blank" rel="noopener noreferrer">ccfddl.com</a>.</p>
<div id="conf-ddl-grid" class="conf-ddl-grid"></div>

<script>
(function(){
  var CONF = [
    { name:'ECCV 2026', abbr:'ECCV', type:'CV', color:'#059669',
      location:'Malmö, Sweden', conf:'Sep 8–13, 2026', url:'https://eccv.ecva.net/Conferences/2026',
      deadlines:[
        {label:'Paper Submission', date:'2026-03-05', passed:true},
        {label:'Supplemental',     date:'2026-03-12'},
        {label:'Rebuttal',         date:'2026-05-11'},
        {label:'Decisions',        date:'2026-06-17'},
      ]},
    { name:'ICML 2026', abbr:'ICML', type:'ML', color:'#2563eb',
      location:'Seoul, South Korea', conf:'Jul 6–11, 2026', url:'https://icml.cc/Conferences/2026',
      deadlines:[
        {label:'Abstract',         date:'2026-01-23', passed:true},
        {label:'Paper Submission', date:'2026-01-28', passed:true},
        {label:'Notification',     date:'2026-04-30'},
      ]},
    { name:'CVPR 2027', abbr:'CVPR', type:'CV', color:'#059669',
      location:'Nashville, TN, USA', conf:'Jun 2027', url:'https://cvpr.thecvf.com/',
      deadlines:[
        {label:'Abstract',         date:'2026-11-06'},
        {label:'Paper Submission', date:'2026-11-13'},
      ]},
    { name:'ICLR 2026', abbr:'ICLR', type:'ML', color:'#7c3aed',
      location:'Rio de Janeiro, Brazil', conf:'Apr 23–27, 2026', url:'https://iclr.cc/Conferences/2026',
      deadlines:[
        {label:'Submission',       date:'2025-09-24', passed:true},
        {label:'Notification',     date:'2026-01-25', passed:true},
        {label:'Conference',       date:'2026-04-23'},
      ]},
    { name:'NeurIPS 2026', abbr:'NeurIPS', type:'ML', color:'#2563eb',
      location:'San Diego, CA, USA', conf:'Dec 6–12, 2026', url:'https://neurips.cc/Conferences/2026',
      deadlines:[
        {label:'Abstract',         date:'2026-05-04'},
        {label:'Full Paper',       date:'2026-05-06'},
      ]},
    { name:'ICLR 2027', abbr:'ICLR', type:'ML', color:'#7c3aed',
      location:'TBA', conf:'TBA', url:'https://iclr.cc/',
      deadlines:[
        {label:'Abstract',         date:null},
        {label:'Paper Submission', date:null},
      ]},
  ];

  var grid = document.getElementById('conf-ddl-grid');
  if (!grid) return;
  var now = new Date();

  CONF.forEach(function(c) {
    var next = null;
    for (var i = 0; i < c.deadlines.length; i++) {
      var d = c.deadlines[i];
      if (!d.date) break;
      if (d.passed) continue;
      var dt = new Date(d.date); dt.setHours(23, 59, 59);
      if (dt >= now) { next = {label: d.label, dt: dt}; break; }
    }

    var chip = '';
    if (next) {
      var diff = Math.ceil((next.dt - now) / 86400000);
      var urgency = diff <= 2 ? '#dc2626' : diff <= 14 ? '#ea580c' : diff <= 60 ? '#d97706' : '#6b7280';
      chip = '<span class="ddl-chip" style="background:' + urgency + '20;color:' + urgency + ';border-color:' + urgency + '40">'
           + next.label + ' · ' + (diff <= 0 ? 'Today!' : diff + 'd') + '</span>';
    } else if (c.deadlines[0].date === null) {
      chip = '<span class="ddl-chip" style="background:#f1f5f9;color:#94a3b8;border-color:#e2e8f0">Submission TBA</span>';
    } else {
      chip = '<span class="ddl-chip" style="background:#f0fdf4;color:#16a34a;border-color:#bbf7d0">Under review / Done</span>';
    }

    var card = document.createElement('div');
    card.className = 'ddl-card';
    card.style.borderLeftColor = c.color;
    card.innerHTML = '<div class="ddl-top">'
      + '<span class="ddl-abbr" style="color:' + c.color + '">' + c.abbr + '</span>'
      + '<span class="ddl-type" style="background:' + c.color + '15;color:' + c.color + '">' + c.type + '</span>'
      + '</div>'
      + '<div class="ddl-name"><a href="' + c.url + '" target="_blank">' + c.name + '</a></div>'
      + '<div class="ddl-meta">📍 ' + c.location + ' &nbsp;·&nbsp; 🗓 ' + c.conf + '</div>'
      + chip;
    grid.appendChild(card);
  });
})();
</script>

<div class="section-header" id="contact">📬 Contact</div>
<p style="font-size:0.94em;">
Happy to discuss research, internships, or collaborations. Best reached by email.<br>
📧 <a href="mailto:jiajunf3@illinois.edu"><strong>jiajunf3@illinois.edu</strong></a> &nbsp;·&nbsp;
🏛 Siebel Center for CS, UIUC &nbsp;·&nbsp;
<a href="files/CV.pdf"><strong>CV (PDF)</strong></a> &nbsp;·&nbsp;
<a href="https://www.linkedin.com/in/jiajun-fan-57b12b26b" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a> &nbsp;·&nbsp;
<a href="https://orcid.org/0000-0002-0263-2103" target="_blank" rel="noopener noreferrer">🔬 ORCID</a>
</p>

<!-- Footer -->
<div class="site-footer">
  <div class="footer-links">
    <a href="mailto:jiajunf3@illinois.edu">✉️ Email</a>
    <a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">🎓 Scholar</a>
    <a href="https://openreview.net/profile?id=~Jiajun_Fan1" target="_blank" rel="noopener noreferrer">📝 OpenReview</a>
    <a href="https://github.com/markerthu" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
    <a href="/cv/">📋 CV</a>
    <a href="/projects/">🔬 Projects</a>
  </div>
  <p>© 2026 Jiajun Fan · CS Ph.D. @ UIUC · Built with ☕ and curiosity</p>
</div>

<!-- Scroll-to-top + Dark mode buttons -->
<div style="display:contents">
<button class="scroll-top" id="scrollTop" onclick="window.scrollTo(0,0)" aria-label="Back to top">↑</button>
<button class="dark-toggle" id="darkToggle" title="Toggle dark mode" aria-label="Toggle dark mode">🌙</button>
</div>

<!-- ══════════════════ AI RESEARCH ASSISTANT ══════════════════ -->
<div id="ra-btn" class="ra-btn" onclick="raOpen()" title="Ask about my research">💬</div>
<div id="ra-panel" class="ra-panel">
  <div class="ra-header">
    <span>🤖 Research Assistant</span>
    <button onclick="raClose()" class="ra-close" aria-label="Close chat widget">✕</button>
  </div>
  <div id="ra-msgs" class="ra-msgs"></div>
  <div id="ra-chips" class="ra-chips">
    <button class="ra-chip" onclick="raAsk(this)">🎯 Latest papers</button>
    <button class="ra-chip" onclick="raAsk(this)">🔬 Research focus</button>
    <button class="ra-chip" onclick="raAsk(this)">🏅 Awards</button>
    <button class="ra-chip" onclick="raAsk(this)">📬 Contact</button>
    <button class="ra-chip" onclick="raAsk(this)">💼 Internship</button>
    <button class="ra-chip" onclick="raAsk(this)">🎮 Hobbies</button>
  </div>
  <div class="ra-input-row">
    <input id="ra-input" class="ra-input" type="text" placeholder="Ask about my research…" onkeydown="if(event.key==='Enter')raSend()">
    <button onclick="raSend()" class="ra-send" aria-label="Send message">↵</button>
  </div>
</div>

<script>
(function(){
  var QA = [
    { kw:['hello','hi','hey','who are you','what are you','start'],
      a:"Hi! I'm a static assistant pre-trained on Jiajun's research. Ask me about any of his papers, research topics, or background — e.g. \"What is CESAR?\" or \"Tell me about LBC\"." },
    { kw:['research','focus','interest','direction','work on','studying','topic','about you'],
      a:"My research focuses on autonomous RL post-training for large generative models — making diffusion models, flow matching models, and multimodal LLMs continuously self-improve with minimal human supervision." },
    { kw:['cesar','audio','mmau','audio llm','process reward','test-time inverse','reasoning process'],
      a:"CESAR (ICLR 2026) resolves test-time inverse scaling in Audio LLMs — a paradox where longer reasoning chains hurt accuracy. We use process-level reward signals (GRPO) to guide reasoning quality, achieving SOTA on MMAU and outperforming Gemini 2.5 Pro & GPT-4o Audio." },
    { kw:['test-time','inverse scaling','longer reasoning','reasoning length'],
      a:"Test-time inverse scaling is when giving a model more reasoning steps actually hurts accuracy. In Audio LLMs, standard RL leads to verbose, irrelevant chains. CESAR fixes this with process-level rewards that reward correct intermediate steps, not just final answers." },
    { kw:['lbc','atari','world record','behavior control','exploration','bandit'],
      a:"LBC (ICLR 2023, Oral — Ranked 5/4176) broke 24 Atari human world records using 500× less data than Agent57. Key idea: a learnable hybrid behavior mapping + bandit meta-controller for exploration that dramatically enlarges the effective policy space." },
    { kw:['gdi','generalized data','distribution iteration','icml 2022'],
      a:"GDI (ICML 2022) shows that optimizing the training data distribution is the key lever for superhuman RL efficiency. We achieve 9620% mean HNS on Atari ALE with 200M frames, comparable to Agent57 but 500× more data-efficient." },
    { kw:['adrpo','adaptive divergence','adaptive regularization','neurips 2025'],
      a:"ADRPO (NeurIPS 2025) adapts divergence regularization at the sample level — high-value samples get more exploration freedom, low-value samples get stronger KL constraints. Our 2B SD3 surpasses 12B FLUX and 4.8B SANA." },
    { kw:['orw','cfm','wasserstein','flow matching','iclr 2025','online rlhf'],
      a:"ORW-CFM-W2 (ICLR 2025) is the first online RLHF framework for flow matching generative models. No human data needed — just a differentiable reward. Wasserstein-2 regularization prevents mode collapse while maintaining diversity." },
    { kw:['ac-flow','actor critic','intermediate feedback','dual-stability','sd3'],
      a:"AC-Flow (preprint) introduces actor-critic with intermediate timestep feedback for flow matching. The dual-stability mechanism combines advantage clipping with critic warm-up, enabling robust SD3 fine-tuning without reward hacking." },
    { kw:['prance','token pruning','channel pruning','vit','tpami','efficient inference'],
      a:"PRANCE (IEEE TPAMI 2026, Vol. 48) jointly optimizes token pruning and structural channel pruning for adaptive ViT inference — ~50% FLOP reduction, retaining only ~10% tokens with lossless Top-1 accuracy." },
    { kw:['sp-vla','spvla','sp vla','vla','robot','vision language action','token pruning','model scheduling'],
      a:"SP-VLA (ICLR 2026) accelerates Vision-Language-Action models via joint model scheduling and spatio-semantic token pruning. It achieves 1.5× lossless speedup on LIBERO and 2.4× on SimplerEnv. Co-first author with Zhuoran Li et al." },
    { kw:['varcon','variational contrastive','supervised contrastive','imagenet','resnet'],
      a:"VarCon (NeurIPS 2025) reformulates supervised contrastive learning as variational inference, introducing a principled probabilistic framework. Achieves SOTA 79.36% Top-1 accuracy on ImageNet-1K with ResNet-50." },

    { kw:['phd','uiuc','illinois','university','where study','school','student'],
      a:"I'm a CS PhD student at the University of Illinois Urbana-Champaign (UIUC), one of the top CS programs globally." },
    { kw:['contact','email','reach','collaborate','talk','message'],
      a:"You can reach me at jiajunf3 [at] illinois.edu. I'm open to research discussions and collaboration, especially around RL post-training, generative models, and multimodal reasoning." },
    { kw:['publication','paper','published','conference','venue','list','all papers'],
      a:"I've published at ICLR (2023 Oral, 2025, 2026), NeurIPS (2025), ICML (2022), and IEEE TPAMI (2026), with ongoing preprints. Full list on Google Scholar (EjmzseUAAAAJ)." },
    { kw:['citation','cited','impact','scholar','h-index','how many'],
      a:"My work has 290+ citations. LBC (ICLR 2023 Oral) leads with 26 citations, followed by GDI (ICML 2022) with 21. Full profile: Google Scholar EjmzseUAAAAJ." },
    { kw:['self-improve','self-play','autonomous','annotation-free','human supervision'],
      a:"My long-term vision: generative models that self-improve autonomously — learning from environment feedback and their own outputs, with minimal human annotation. This drives my work on process rewards, actor-critic methods, and online RL post-training." },
    { kw:['flow matching','diffusion','generative','score','ode','trajectory'],
      a:"Flow matching is a generative modeling framework that learns straight interpolation paths between noise and data distributions, often more training-stable than diffusion. My work (ORW-CFM-W2, AC-Flow) applies RL fine-tuning to flow matching models like SD3 and FLUX." },
    { kw:['github','code','open source','repository','implementation'],
      a:"My GitHub is @markerthu. Several projects have open-source code — check the individual project pages for repository links." },
    { kw:['blog','arxiv','reading','papers','feed','recent papers'],
      a:"I track recent arXiv papers in RL post-training, reasoning, self-improvement, and multimodal LLMs — updated weekly. Browse at /blog/reading-papers/." },
    { kw:['intern','job','position','opportunity','hiring','open to'],
      a:"I'm primarily focused on my PhD research. I'm open to discussing research collaborations and internship opportunities at companies working on frontier RL, post-training, or generative AI." },
    { kw:['education','background','undergrad','bachelor','nankai','tsinghua','master','before uiuc','degree'],
      a:"I did my B.Eng. at Nankai University (ranked 1st/83 in my major, GPA top 1%) and M.Eng. at Tsinghua University (GPA 3.97/4.0, top 1.3%). I'm now a CS Ph.D. student at UIUC with a 4.0/4.0 GPA." },
    { kw:['award','scholarship','gpa','rank','prize','honor','national scholarship','outstanding'],
      a:"Academic highlights: National Scholarship ×2 and Outstanding Graduates (top 1%) from Nankai; Tang Lixin Scholarship; ranked 1st/83 in my CS major; GPA 3.97/4.0 at Tsinghua; 4.0/4.0 at UIUC Ph.D." },
    { kw:['reviewer','review','service','program committee','pc member','area chair','conference service'],
      a:"I serve as a reviewer for ICLR (2024–2026), NeurIPS (2022–2025), ICML (2023–2026), CVPR (2026), AAAI 2025, AISTATS 2025, and KDD 2024." },
    { kw:['vision','goal','future','long-term','endgame','plan','dream','aspire'],
      a:"My long-term goal: generative models that self-improve autonomously — progressing from process rewards → actor-critic RL → fully self-referential training loops, with progressively less human intervention at every step." },
    { kw:['deadline','submission deadline','next conference','when submit','upcoming conference'],
      a:"There's a 📅 Conference Deadlines tracker at the bottom of this page — ECCV, ICML, CVPR, ICLR 2026 (Apr 23, Rio), NeurIPS 2026 (May 7), and ICLR 2027. Full list at ccfddl.com." },
    { kw:['dark mode','night mode','theme','light dark','toggle','appearance'],
      a:"Yes, this site supports dark mode! Click the 🌙 button in the bottom-right corner to switch. Your preference is saved for next visit." },
    { kw:['paper network','graph','visualization','map','network','research graph','timeline'],
      a:"The Research Paper Network below the publications section shows how my papers connect thematically — from early RL theory (GDI/LBC) to RLHF for generative models (ORW-CFM-W2, ADRPO, AC-Flow) to process reward reasoning (CESAR). Hover to highlight connections." },
    { kw:['website','this site','built','how made','jekyll','github pages','tech stack'],
      a:"This site is built with Jekyll + Minimal Mistakes theme, hosted on GitHub Pages. Custom features include a D3 paper network graph, live citation counts from Google Scholar, a conference deadline tracker, and this chat widget — all running client-side with no backend." },
    { kw:['summer','intern 2026','looking for','open position','2026 internship'],
      a:"I'm open to summer 2026 research internships in RL post-training, generative models, and LLM reasoning. Feel free to reach out at jiajunf3@illinois.edu!" },
    { kw:['hobby','hobbies','outside research','free time','personal','fun','enjoy','game design','game','creative','interest besides'],
      a:"Outside of research, I love designing games and building creative AI agents — things that have interesting emergent behaviors or unexpected dynamics. There's a natural overlap with my research: designing reward functions for RL feels a lot like designing game mechanics." },
    { kw:['thank','thanks','great','awesome','cool','helpful','nice'],
      a:"Glad I could help! Feel free to ask more questions, or reach out directly at jiajunf3 [at] illinois.edu for deeper discussions." },
  ];

  var DEFAULT = "I'm not sure about that specific question. Try asking about a paper (CESAR, LBC, GDI, ADRPO…) or topic (RL, flow matching, audio reasoning). For anything else, email jiajunf3 [at] illinois.edu.";

  function findAnswer(q) {
    q = q.toLowerCase();
    var best = null, bestScore = 0;
    QA.forEach(function(qa) {
      var score = 0;
      qa.kw.forEach(function(k) { if (q.indexOf(k) >= 0) score++; });
      if (score > bestScore) { bestScore = score; best = qa; }
    });
    return bestScore > 0 ? best.a : DEFAULT;
  }

  function addMsg(text, role) {
    var msgs = document.getElementById('ra-msgs');
    var div = document.createElement('div');
    div.className = 'ra-msg ra-' + role;
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function typeMsg(text) {
    var msgs = document.getElementById('ra-msgs');
    var div = document.createElement('div');
    div.className = 'ra-msg ra-bot';
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    var i = 0;
    function tick() {
      if (i <= text.length) {
        div.textContent = text.substring(0, i);
        msgs.scrollTop = msgs.scrollHeight;
        i++;
        setTimeout(tick, i < 20 ? 8 : 3);
      }
    }
    tick();
  }

  function showTyping() {
    var msgs = document.getElementById('ra-msgs');
    var div = document.createElement('div');
    div.className = 'ra-msg ra-bot ra-typing';
    div.id = 'ra-typing-indicator';
    div.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function removeTyping() {
    var el = document.getElementById('ra-typing-indicator');
    if (el) el.parentNode.removeChild(el);
  }

  window.raAsk = function(btn) {
    var text = btn.textContent.replace(/^[^\w]+/, '').trim();
    document.getElementById('ra-chips').classList.add('hidden');
    document.getElementById('ra-input').value = text;
    raSend();
  };

  window.raOpen = function() {
    var panel = document.getElementById('ra-panel');
    var btn = document.getElementById('ra-btn');
    panel.classList.add('show');
    btn.style.display = 'none';
    var msgs = document.getElementById('ra-msgs');
    if (!msgs.children.length) {
      setTimeout(function() {
        typeMsg("Hi! I'm a research assistant for Jiajun's work. Ask me about any paper or research topic!");
      }, 200);
    }
    setTimeout(function() { document.getElementById('ra-input').focus(); }, 300);
  };

  window.raClose = function() {
    document.getElementById('ra-panel').classList.remove('show');
    document.getElementById('ra-btn').style.display = 'flex';
  };

  window.raSend = function() {
    var inp = document.getElementById('ra-input');
    var q = inp.value.trim();
    if (!q) return;
    inp.value = '';
    addMsg(q, 'user');
    showTyping();
    setTimeout(function() {
      removeTyping();
      typeMsg(findAnswer(q));
    }, 600 + Math.random() * 400);
  };
})();
</script>

<script>
/* ── Scroll-to-top ── */
window.addEventListener('scroll', function(){
  var btn = document.getElementById('scrollTop');
  if(window.scrollY > 500) btn.classList.add('show');
  else btn.classList.remove('show');
});

/* ── Dark mode toggle ── */
(function(){
  var btn = document.getElementById('darkToggle');
  var saved = localStorage.getItem('darkMode');
  if(saved === 'true') { document.body.classList.add('dark-mode'); btn.textContent = '☀️'; }
  btn.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
    var on = document.body.classList.contains('dark-mode');
    btn.textContent = on ? '☀️' : '🌙';
    localStorage.setItem('darkMode', on);
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
    'CS Ph.D. Student @ UIUC'
  ];
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
    setTimeout(tick, deleting ? 25 : (ci===t.length ? 60 : 45));
  }
  tick();
})();

/* ── Animated counters (IntersectionObserver — fires reliably on scroll-into-view) ── */
(function(){
  var els = document.querySelectorAll('.stat-number[data-target]');
  if(!els.length) return;
  function runCounter(el) {
    if(el._counted) return;
    el._counted = true;
    var target = parseInt(el.getAttribute('data-target')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
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
      entries.forEach(function(e){ if(e.isIntersecting) runCounter(e.target); });
    }, {threshold: 0.3});
    els.forEach(function(el){ io.observe(el); });
  } else {
    /* fallback for old browsers */
    els.forEach(function(el){ runCounter(el); });
  }
})();

/* ── Particle canvas ── */
(function(){
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
    if(!document.hidden) requestAnimationFrame(draw);
  }
  var _rafId = null;
  function startDraw(){ if(!_rafId) _rafId = requestAnimationFrame(draw); }
  document.addEventListener('visibilitychange', function(){
    if(document.hidden){ _rafId = null; } else { startDraw(); }
  });
  draw();
})();

/* ── Mobile tap: abstract preview ── */
document.querySelectorAll('.pub-entry').forEach(function(entry){
  entry.addEventListener('touchstart', function(e){
    var isOpen = entry.classList.contains('abstract-open');
    document.querySelectorAll('.pub-entry.abstract-open').forEach(function(el){
      el.classList.remove('abstract-open');
      el.querySelectorAll('.pub-abst-btn').forEach(function(b){ b.textContent = '▾ Abstract'; b.setAttribute('aria-expanded','false'); });
    });
    if(!isOpen){
      entry.classList.add('abstract-open');
      entry.querySelectorAll('.pub-abst-btn').forEach(function(b){ b.textContent = '▴ Hide'; b.setAttribute('aria-expanded','true'); });
    }
  }, {passive: true});
  /* Click toggle for keyboard/mouse users */
  entry.querySelectorAll('.pub-abst-btn').forEach(function(btn){
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var isOpen = entry.classList.contains('abstract-open');
      document.querySelectorAll('.pub-entry.abstract-open').forEach(function(el){
        el.classList.remove('abstract-open');
        el.querySelectorAll('.pub-abst-btn').forEach(function(b){ b.textContent = '▾ Abstract'; });
      });
      if(!isOpen){
        entry.classList.add('abstract-open');
        btn.textContent = '▴ Hide';
      }
    });
  });
});

/* ── Lazy load fade-in ── */
document.querySelectorAll('img[loading="lazy"]').forEach(function(img){
  if(img.complete) img.classList.add('loaded');
  else img.addEventListener('load', function(){ img.classList.add('loaded'); });
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
  popup.innerHTML = '<pre class="bib-pre"></pre><div class="bib-actions"><button class="bib-copy">&#x1F4CB; Copy BibTeX</button><button class="bib-close">&#x2715; Close</button></div>';
  document.body.appendChild(popup);

  var activeEntry = null;
  popup.querySelector('.bib-copy').addEventListener('click', function(){
    var btn = this;
    navigator.clipboard.writeText(popup.querySelector('.bib-pre').textContent).then(function(){
      btn.textContent = '\u2713 Copied!'; btn.style.background = '#059669';
      setTimeout(function(){ btn.textContent = '\uD83D\uDCCB Copy BibTeX'; btn.style.background = ''; }, 2000);
    });
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
    btn.className = 'pub-link pl-cite'; btn.textContent = '\uD83D\uDCCB Cite';
    var captured = bib;
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      if (activeEntry === entry && popup.classList.contains('show')) {
        popup.classList.remove('show'); activeEntry = null; return;
      }
      popup.querySelector('.bib-pre').textContent = captured;
      var rect = entry.getBoundingClientRect();
      var scrollY = window.scrollY || window.pageYOffset;
      popup.style.top = (rect.bottom + scrollY + 6) + 'px';
      popup.style.left = Math.max(rect.left, 8) + 'px';
      popup.style.maxWidth = Math.min(rect.width, window.innerWidth - 16) + 'px';
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
  var q = (document.getElementById('pubSearch').value || '').toLowerCase();
  document.querySelectorAll('.pub-list .pub-entry').forEach(function(el) {
    var venue = (el.dataset.venue || '').toLowerCase();
    var title = el.querySelector('.pub-title') ? el.querySelector('.pub-title').textContent.toLowerCase() : '';
    var authors = el.querySelector('.pub-authors') ? el.querySelector('.pub-authors').textContent.toLowerCase() : '';
    var venueOk = _activeVenue === 'all' || venue === _activeVenue.toLowerCase();
    var searchOk = !q || title.includes(q) || authors.includes(q) || venue.includes(q);
    el.classList.toggle('hidden', !(venueOk && searchOk));
  });
}
function filterByVenue(btn, venue) {
  _activeVenue = venue;
  document.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  filterPubs();
}

/* ══════════════════════════════════════════════════
   ① CITATION COUNTS — from _data/citations.json
   (auto-updated weekly by GitHub Actions)
══════════════════════════════════════════════════ */
(function(){
  /* Jekyll injects citation data at build time */
  var citations = {{ site.data.citations | jsonify }};
  document.querySelectorAll('.pub-entry[data-arxiv]').forEach(function(el){
    var key = el.dataset.arxiv;
    var count = citations[key];
    if(count == null || count === 0) return;
    var links = el.querySelector('.pub-links') || el.querySelector('.pub-right');
    if(!links) return;
    var badge = document.createElement('span');
    badge.className = 'cite-badge';
    badge.innerHTML = '📊 ' + count + ' citations';
    links.appendChild(badge);
  });
})();

/* ══════════════════════════════════════════════════
   ⑧ RESEARCH PAPER NETWORK (D3.js)
══════════════════════════════════════════════════ */
(function(){
  var container = document.getElementById('research-graph');
  if(!container) return;

  /* Load D3 only when graph section enters viewport */
  var loaded = false;
  function loadD3(){
    if(loaded) return; loaded = true;
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js';
    s.async = true;
    s.onload = function(){ drawGraph(container); };
    document.head.appendChild(s);
  }
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      if(entries[0].isIntersecting){ loadD3(); io.disconnect(); }
    }, {rootMargin:'200px'});
    io.observe(container);
  } else { loadD3(); }
})();

function drawGraph(container) {
  d3.select(container).selectAll('svg').remove();
  var isDark = document.body.classList.contains('dark-mode');
  var W = Math.max(container.offsetWidth || 700, 520);
  var H = 460;
  var bg  = isDark ? '#0d1117' : '#fafbff';
  var ink = isDark ? '#e6edf3' : '#1e293b';
  var sub = isDark ? '#8b949e' : '#64748b';
  var edgeClr = isDark ? '#475569' : '#94a3b8';

  /* ── Column x positions (fraction of W) ── */
  var CX = {'1':0.09,'2':0.28,'3':0.50,'4':0.70,'5':0.90};

  /* ── Papers: fixed fractional y in working area [0.0–1.0] ── */
  var nodes = [
    {id:'GDI',        label:'GDI',        venue:'ICML 2022',    col:'1', fy:0.40, r:21, clr:'#ea580c', url:'/projects/gdi/'},
    {id:'LBC',        label:'LBC',        venue:'ICLR 2023',    col:'1', fy:0.72, r:24, clr:'#ea580c', url:'/projects/lbc/'},
    {id:'PRANCE',     label:'PRANCE',     venue:'TPAMI 2026',   col:'2', fy:0.14, r:18, clr:'#0891b2', url:'https://arxiv.org/abs/2407.05010'},
    {id:'ORW-CFM-W2', label:'ORW-CFM-W2', venue:'ICLR 2025',  col:'3', fy:0.40, r:22, clr:'#2563eb', url:'/projects/orw-cfm-w2/'},
    {id:'VarCon',     label:'VarCon',     venue:'NeurIPS 2025', col:'3', fy:0.72, r:18, clr:'#be185d', url:'https://openreview.net/forum?id=uOOlHOq500'},
    {id:'ADRPO',      label:'ADRPO',      venue:'NeurIPS 2025', col:'4', fy:0.16, r:20, clr:'#2563eb', url:'/projects/adrpo/'},
    {id:'SP-VLA',     label:'SP-VLA',     venue:'ICLR 2026',    col:'4', fy:0.60, r:22, clr:'#0891b2', url:'https://openreview.net/forum?id=RwdGIIjPlC'},
    {id:'AC-Flow',    label:'AC-Flow',    venue:'arXiv 2025',   col:'5', fy:0.48, r:18, clr:'#059669', url:'/projects/ac-flow/'},
    {id:'CESAR',      label:'CESAR',      venue:'ICLR 2026',    col:'5', fy:0.13, r:24, clr:'#7c3aed', url:'/projects/cesar/'},
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
  ];

  /* ── Build SVG ── */
  var svg = d3.select(container).append('svg')
    .attr('width', W).attr('height', H).style('display','block').style('overflow','visible');

  svg.append('rect').attr('width',W).attr('height',H).attr('fill',bg).attr('rx',14);

  /* Arrowhead marker */
  svg.append('defs').append('marker')
    .attr('id','rg-arr').attr('viewBox','0 0 8 8')
    .attr('refX',7).attr('refY',4)
    .attr('markerWidth',5).attr('markerHeight',5)
    .attr('orient','auto')
    .append('path').attr('d','M0,1 L7,4 L0,7 Z').attr('fill',edgeClr);

  /* Year labels at top */
  [{t:'2022',cx:CX['1']},{t:'2024–25',cx:(CX['2']+CX['3'])/2},{t:'2025',cx:CX['4']},{t:'2026',cx:CX['5']}]
  .forEach(function(d){
    svg.append('text').attr('x',d.cx*W).attr('y',18)
      .attr('text-anchor','middle').attr('font-size','10px')
      .attr('font-family','Inter,sans-serif').attr('font-weight','700')
      .attr('letter-spacing','.08em')
      .attr('fill', isDark ? '#388bfd' : '#93c5fd')
      .text(d.t);
  });

  /* Subtle column guide lines */
  Object.values(CX).forEach(function(cx){
    svg.append('line')
      .attr('x1',cx*W).attr('y1',24).attr('x2',cx*W).attr('y2',H-36)
      .attr('stroke', isDark ? '#21262d' : '#f0f4ff')
      .attr('stroke-width',1).attr('stroke-dasharray','3,5');
  });

  /* Draw links */
  var lGroup = svg.append('g');
  links.forEach(function(l){
    var s = nodeMap[l.s], t = nodeMap[l.t]; if(!s||!t) return;
    var dx=t.x-s.x, dy=t.y-s.y, dist=Math.sqrt(dx*dx+dy*dy);
    var nx=-dy/dist, ny=dx/dist;
    var sx=s.x+(dx/dist)*s.r, sy=s.y+(dy/dist)*s.r;
    var ex=t.x-(dx/dist)*(t.r+9), ey=t.y-(dy/dist)*(t.r+9);
    var mx=(sx+ex)/2+nx*(l.bend||0), my=(sy+ey)/2+ny*(l.bend||0);
    lGroup.append('path')
      .attr('d','M'+sx+','+sy+' Q'+mx+','+my+' '+ex+','+ey)
      .attr('stroke',edgeClr).attr('stroke-width',1.5)
      .attr('fill','none').attr('opacity',0.65)
      .attr('marker-end','url(#rg-arr)');
  });

  /* Draw nodes */
  nodes.forEach(function(d){
    var g = svg.append('g')
      .attr('cursor', d.url ? 'pointer' : 'default')
      .on('mouseenter', function(){
        d3.select(this).select('circle.main').transition().duration(120).attr('r', d.r+4);
        lGroup.selectAll('path').attr('opacity', function(){
          var paths = links.filter(function(l){ return l.s===d.id||l.t===d.id; });
          return paths.length ? 0.18 : 0.65;
        });
        lGroup.selectAll('path').filter(function(){ return true; }).each(function(_,i,arr){
          var el = d3.select(arr[i]);
          var pathD = el.attr('d');
          /* highlight if connected */
        });
        /* Simpler highlight: just brighten connected links */
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
    if(d.url) g.on('click', function(){ window.open(d.url,'_blank'); });

    /* Glow */
    g.append('circle').attr('cx',d.x).attr('cy',d.y).attr('r',d.r+8)
      .attr('fill',d.clr).attr('opacity',0.10);
    /* Main circle */
    g.append('circle').attr('class','main')
      .attr('cx',d.x).attr('cy',d.y).attr('r',d.r)
      .attr('fill',d.clr).attr('fill-opacity',0.88)
      .attr('stroke','#fff').attr('stroke-width',2);
    /* Label above */
    g.append('text').attr('x',d.x).attr('y',d.y-d.r-7)
      .attr('text-anchor','middle').attr('font-size','11.5px')
      .attr('font-weight','700').attr('font-family','Inter,sans-serif')
      .attr('fill',ink).text(d.label);
    /* Venue below */
    g.append('text').attr('x',d.x).attr('y',d.y+d.r+13)
      .attr('text-anchor','middle').attr('font-size','10px')
      .attr('font-family','Inter,sans-serif').attr('fill',sub).text(d.venue);
  });

  /* Legend */
  var legItems = [
    {c:'#ea580c',l:'Deep RL'},{c:'#2563eb',l:'RL Training'},
    {c:'#059669',l:'Flow Matching'},{c:'#0891b2',l:'Efficiency'},
    {c:'#be185d',l:'Representation'},{c:'#7c3aed',l:'Audio Reasoning'},
    {c:edgeClr,  l:'Research evolution →', dash:true},
  ];
  var lx = 8, ly = H - 16;
  legItems.forEach(function(item){
    if(item.dash){
      svg.append('line').attr('x1',lx).attr('y1',ly).attr('x2',lx+14).attr('y2',ly)
        .attr('stroke',item.c).attr('stroke-width',1.5).attr('marker-end','url(#rg-arr)');
      lx += 18;
    } else {
      svg.append('circle').attr('cx',lx+5).attr('cy',ly).attr('r',5).attr('fill',item.c);
      lx += 14;
    }
    svg.append('text').attr('x',lx).attr('y',ly+4)
      .attr('font-size','10px').attr('font-family','Inter,sans-serif').attr('fill',sub)
      .text(item.l);
    lx += item.l.length * 6 + 16;
  });
}

/* ══════════════════════════════════════════════════
   ⑨ QUICK NAV SCROLL HIGHLIGHT
══════════════════════════════════════════════════ */
(function(){
  var sections = ['news','featured','deadlines','publications','research-graph-section','awards'];
  var navLinks = document.querySelectorAll('.quick-nav a[data-qn]');
  if (!navLinks.length || !window.IntersectionObserver) return;

  var current = '';
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) current = e.target.id;
    });
    navLinks.forEach(function(a) {
      a.classList.toggle('qn-active', a.dataset.qn === current);
    });
  }, { rootMargin: '-15% 0px -75% 0px', threshold: 0 });

  sections.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) obs.observe(el);
  });
})();

</script>




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
.internship-banner {
  background: linear-gradient(135deg,#e8f4fd,#f0f7ff);
  border: 1.5px solid #1565c0;
  border-radius: 8px; padding: 11px 18px;
  margin: 1em 0 1.2em; font-size: 0.93em;
}
.internship-banner a { color: #1565c0; font-weight: 700; }

/* ── Quick nav ── */
.quick-nav {
  background: #f0f4ff; border-radius: 8px;
  padding: 9px 16px; margin-bottom: 1.4em;
  font-size: 0.84em; display: flex; flex-wrap: wrap; gap: 5px 16px; align-items: center;
}
.quick-nav a { color: #1565c0; text-decoration: none; }
.quick-nav a:hover { text-decoration: underline; }

/* ── Section headers ── */
.section-header {
  display: flex; align-items: center; gap: 10px;
  margin: 2em 0 1em; font-size: 1.18em; font-weight: 800; color: #1a2332;
  letter-spacing: -0.01em;
}
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
  width: 100%; height: auto; display: block;
  max-height: 160px; object-fit: cover; object-position: center top;
}
@media(max-width:560px){
  .pub-entry { grid-template-columns: 1fr; }
  .pub-left { flex-direction: row; gap: 8px; }
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
  display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-bottom: 1.8em;
}
.featured-card {
  border-radius: 12px; overflow: hidden;
  border: 1.5px solid #e0e8f0;
  background: #fff;
  transition: transform .25s, box-shadow .25s;
  text-decoration: none !important; color: inherit;
  display: flex; flex-direction: column;
}
.featured-card:hover { transform: translateY(-5px); box-shadow: 0 8px 30px rgba(21,101,192,.18); }
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
  background: #1a2332; color: #ffd54f; border: none; cursor: pointer;
  font-size: 1.1em; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 14px rgba(0,0,0,.25);
  transition: background .3s, transform .3s;
}
.dark-toggle:hover { transform: scale(1.1); }
body.dark-mode .dark-toggle { background: #ffd54f; color: #1a2332; }

body.dark-mode,
body.dark-mode .page__content,
body.dark-mode .masthead,
body.dark-mode .sidebar {
  background: #0d1117 !important; color: #c9d1d9 !important;
}
body.dark-mode .hero-banner {
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
}
body.dark-mode .featured-card,
body.dark-mode .research-card,
body.dark-mode .stat-card {
  background: #161b22 !important; border-color: #30363d !important;
  color: #c9d1d9 !important;
}
body.dark-mode .featured-card:hover,
body.dark-mode .research-card:hover,
body.dark-mode .stat-card:hover {
  box-shadow: 0 6px 18px rgba(56,139,253,.2) !important;
}
body.dark-mode .section-header { color: #e6edf3 !important; }
body.dark-mode .section-header::after { background: linear-gradient(to right, #388bfd, transparent) !important; }
body.dark-mode .pub-title, body.dark-mode .pub-title a,
body.dark-mode .rc-title, body.dark-mode .featured-title,
body.dark-mode .rt-title { color: #e6edf3 !important; }
body.dark-mode .pub-desc, body.dark-mode .rc-desc,
body.dark-mode .featured-desc, body.dark-mode .rt-desc,
body.dark-mode .tagline { color: #8b949e !important; }
body.dark-mode .pub-authors { color: #8b949e !important; }
body.dark-mode .pub-authors strong { color: #e6edf3 !important; }
body.dark-mode .pub-entry { border-bottom-color: #21262d !important; }
body.dark-mode .news-list li { border-bottom-color: #21262d !important; }
body.dark-mode .quick-nav { background: #161b22 !important; }
body.dark-mode .quick-nav a { color: #388bfd !important; }
body.dark-mode .internship-banner { background: #161b22 !important; border-color: #388bfd !important; }
body.dark-mode .pub-thumb-wrap { border-color: #30363d !important; }
body.dark-mode .site-footer { border-top-color: #21262d !important; color: #484f58 !important; }
body.dark-mode .page__footer { background: #010409 !important; }
body.dark-mode .author__name { color: #e6edf3 !important; }
body.dark-mode .author__bio { color: #8b949e !important; }
body.dark-mode .site-title { color: #e6edf3 !important; }
body.dark-mode .greedy-nav a { color: #c9d1d9 !important; }
body.dark-mode .masthead { border-bottom-color: #388bfd !important; box-shadow: 0 2px 12px rgba(0,0,0,0.3) !important; }
body.dark-mode .stat-number { color: #58a6ff !important; }
body.dark-mode .pub-hl { background: #1c1e21 !important; color: #ffd54f !important; border-left-color: #ffa000 !important; }

/* ── Animated counters ── */
.stat-number[data-target] { transition: none; }

/* ── Particle canvas ── */
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
</style>

<!-- Hero banner -->
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
    <a class="hero-link" href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en">🎓 Google Scholar</a>
    <a class="hero-link" href="mailto:jiajunf3@illinois.edu">✉️ Email</a>
    <a class="hero-link" href="https://openreview.net/profile?id=~Jiajun_Fan1">📝 OpenReview</a>
  </div>
</div>

<!-- Quick nav -->
<div class="quick-nav">
  <span style="font-weight:800;color:#1565c0;">↓ Jump to:</span>
  <a href="#news">📰 News</a>
  <a href="#featured">🔥 Featured</a>
  <a href="#publications">📄 Publications</a>
  <a href="#research">🔬 Research</a>
  <a href="#awards">🏅 Awards</a>
  <a href="files/CV.pdf">📋 CV</a>
</div>

<!-- Intro -->
<p class="tagline">
I am a Computer Science Ph.D. student at <strong>UIUC</strong>, advised by Prof. <a href="https://geliu.web.illinois.edu/">Ge Liu</a>. My research focuses on <strong>autonomous RL post-training for large generative models</strong> — making diffusion/flow models and multi-modal reasoning LLMs continuously self-improve with less and less human intervention. Previously, I pushed RL to <strong>superhuman performance</strong>: breaking 24 Atari world records and outperforming Agent57 with 500× less data.
</p>

<div class="internship-banner">
🎓 <strong>Seeking research internship — Summer 2026.</strong>
&nbsp;<a href="files/CV.pdf">[CV]</a>
&nbsp;<a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en">[Scholar]</a>
&nbsp;<a href="mailto:jiajunf3@illinois.edu">[Email]</a>
</div>

<!-- ═══════════════════════════════ NEWS ═══════════════════════════════ -->
<div class="section-header" id="news">📰 Latest News</div>

<ul class="news-list">
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
    <span><span class="nbadge nb-service">Service</span>Area reviewer: ICLR 2025, NeurIPS 2024, CVPR 2026, AAAI 2025, AISTATS 2025.</span>
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
">▼ Show more news</button>

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
    <img class="featured-img" loading="lazy" src="/projects/adrpo/images/teaser.png" alt="ADRPO">
    <div class="featured-body">
      <span class="featured-venue fv-neurips">NeurIPS 2025</span>
      <div class="featured-title">ADRPO: Adaptive KL for Generative Model RLHF</div>
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
</div>

<!-- ═══════════════════════════════ PUBLICATIONS ═══════════════════════ -->
<div class="section-header" id="publications">📄 Selected Publications</div>

<p style="font-size:0.83em;color:#999;margin-top:-0.6em;">* = first/co-first author &nbsp;·&nbsp;
<a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en">Full list on Google Scholar</a> &nbsp;/&nbsp;
<a href="/publications/">Publications page</a></p>

<div class="pub-list">

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-iclr">ICLR 2026</span><span class="pub-year">2026</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/projects/cesar/images/framework.png" alt="CESAR framework"></div>
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=DUr48hxO2h">Incentivizing Consistent, Effective and Scalable Reasoning Capability in Audio LLMs via Reasoning Process Rewards</a>
      <a class="pub-project" href="/projects/cesar/">Project Page</a>
    </div>
    <div class="pub-authors"><strong>J. Fan*</strong>, R. Ren, J. Li, R. Pandey, P.G. Shivakumar, Y. Gu, A. Gandhe, G. Liu, I. Bulyko</div>
    <div class="pub-desc">CESAR: process-reward RL (GRPO) resolving test-time inverse scaling in Audio LLMs — models produce hallucinatory reasoning without proper guidance; CESAR rewrites that.</div>
    <div class="pub-hl">🏆 SOTA on MMAU Test-mini · Outperforms Gemini 2.5 Pro &amp; GPT-4o Audio</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=DUr48hxO2h">📄 Paper</a>
      <a class="pub-link pl-project" href="/projects/cesar/">🔗 Project</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-iclr">ICLR 2026</span><span class="pub-year">2026</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=RwdGIIjPlC">SP-VLA: A Joint Model Scheduling and Token Pruning Approach for VLA Model Acceleration</a></div>
    <div class="pub-authors">Y. Li, Y. Meng, Z. Sun, K. Ji, C. Tang, <strong>J. Fan</strong>, X. Ma, S.-T. Xia, Z. Wang, W. Zhu</div>
    <div class="pub-desc">Action-aware model scheduling + spatio-semantic token pruning for VLA acceleration.</div>
    <div class="pub-hl">⚡ 1.5× lossless speedup (LIBERO) · 2.4× speedup (SimplerEnv)</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-neurips">NeurIPS 2025</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/projects/adrpo/images/compare_models.png" alt="ADRPO qualitative results"></div>
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=aXO0xg0ttW">Adaptive Divergence Regularized Policy Optimization for Fine-tuning Generative Models</a>
      <a class="pub-project" href="/projects/adrpo/">Project Page</a>
    </div>
    <div class="pub-authors"><strong>J. Fan*</strong>, T. Wei, C. Cheng, Y. Chen, G. Liu</div>
    <div class="pub-desc">ADRPO: sample-level adaptive KL — high-value samples get more freedom, poor samples get stronger constraint. Plug-and-play on top of any RLHF method.</div>
    <div class="pub-hl">🚀 2B SD3 surpasses 4.8B &amp; 12B models · Generalizes to LLMs &amp; audio reasoning</div>
    <div class="pub-links">
      <a class="pub-link pl-paper" href="https://openreview.net/forum?id=aXO0xg0ttW">📄 Paper</a>
      <a class="pub-link pl-project" href="/projects/adrpo/">🔗 Project</a>
    </div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-neurips">NeurIPS 2025</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://openreview.net/forum?id=uOOlHOq500">Variational Supervised Contrastive Learning</a></div>
    <div class="pub-authors">Z. Wang, <strong>J. Fan</strong>, T. Nguyen, H. Ji, G. Liu</div>
    <div class="pub-desc">VarCon: supervised contrastive learning as variational inference — posterior-weighted ELBO replaces pairwise comparisons.</div>
    <div class="pub-hl">📊 SOTA 79.36% Top-1 on ImageNet-1K (ResNet-50)</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-iclr">ICLR 2025</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-thumb-wrap"><img loading="lazy" src="/projects/orw-cfm-w2/images/main_figure.png" alt="ORW-CFM-W2 method"></div>
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=2IoFFexvuw">Online Reward-Weighted Fine-Tuning of Flow Matching with Wasserstein Regularization</a>
      <a class="pub-project" href="/projects/orw-cfm-w2/">Project Page</a>
    </div>
    <div class="pub-authors"><strong>J. Fan*</strong>, S. Shen, C. Cheng, Y. Chen, C. Liang, G. Liu</div>
    <div class="pub-desc">ORW-CFM-W2: first online RLHF for flow matching — no human data, no likelihood, no collapse. W2 regularization keeps generation diverse.</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-arxiv">Preprint</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-title">
      <a href="https://arxiv.org/abs/2510.18072">Fine-tuning Flow Matching Generative Models with Intermediate Feedback</a>
      <a class="pub-project" href="/projects/ac-flow/">Project Page</a>
    </div>
    <div class="pub-authors"><strong>J. Fan*</strong>, C. Cheng, S. Shen, X. Zhou, G. Liu &nbsp;·&nbsp; <em>Under Review</em></div>
    <div class="pub-desc">AC-Flow: actor-critic with intermediate feedback for flow matching — reward shaping + dual-stability + Wasserstein regularization. Robust fine-tuning on SD3 without collapse.</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-journal">TPAMI 2025</span><span class="pub-year">2025</span></div>
  <div class="pub-right">
    <div class="pub-title"><a href="https://arxiv.org/abs/2407.05010">PRANCE: Joint Token-Optimization and Structural Channel-Pruning for Adaptive ViT Inference</a></div>
    <div class="pub-authors">Y. Li, C. Tang, Y. Meng, <strong>J. Fan</strong>, Z. Chai, X. Ma, Z. Wang, W. Zhu &nbsp;·&nbsp; <em>IEEE TPAMI</em></div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-oral">ICLR 2023<br>Oral</span><span class="pub-year">2023</span></div>
  <div class="pub-right">
    <div class="pub-title">
      <a href="https://openreview.net/forum?id=FeWvD0L_a4">Learnable Behavior Control: Breaking Atari Human World Records via Sample-Efficient Behavior Selection</a>
      <a class="pub-project" href="/projects/lbc/">Project Page</a>
    </div>
    <div class="pub-authors"><strong>J. Fan*</strong>, Y. Zhuang, Y. Liu, J. Hao, B. Wang, J. Zhu, H. Wang, S.-T. Xia</div>
    <div class="pub-desc">LBC: learnable hybrid behavior mapping + bandit meta-controller. Unified framework for exploration control in deep RL.</div>
    <div class="pub-hl">🏅 Ranked 5/4176 · 10,077% mean human score · 24 world records · 500× data efficiency</div>
  </div>
</div>

<div class="pub-entry">
  <div class="pub-left"><span class="pb pb-icml">ICML 2022</span><span class="pub-year">2022</span></div>
  <div class="pub-right">
    <div class="pub-title">
      <a href="https://proceedings.mlr.press/v162/fan22c.html">Generalized Data Distribution Iteration</a>
      <a class="pub-project" href="/projects/gdi/">Project Page</a>
    </div>
    <div class="pub-authors"><strong>J. Fan*</strong>, C. Xiao</div>
    <div class="pub-desc">GDI: optimizing the data distribution is the key to superhuman RL efficiency. Unified framework for diverse RL algorithms.</div>
    <div class="pub-hl">📈 Agent57 beaten with 500× less data &amp; 2× avg performance</div>
  </div>
</div>

</div>

<!-- ═══════════════════════════════ RESEARCH ═══════════════════════════ -->
<div class="section-header" id="research">🔬 Research Interests</div>

<div class="research-grid">
  <div class="research-card">
    <div class="rc-icon">🌊</div>
    <div class="rc-title">RL Post-Training for Generative Models</div>
    <div class="rc-desc">Collapse-free online RLHF for flow/diffusion models. No human-collected data needed — the model rewards itself (ORW-CFM-W2, ADRPO, AC-Flow).</div>
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
<div class="section-header">⚡ Impact at a Glance</div>

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
    <div class="stat-number" data-target="200" data-suffix="+">0</div>
    <div class="stat-label">Google Scholar Citations</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">4.0</div>
    <div class="stat-label">GPA — UIUC Ph.D.<br><em>Computer Science</em></div>
  </div>
</div>

<!-- ═══════════════════════════════ VISION ════════════════════════════ -->
<div class="section-header">💡 Research Vision</div>

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
    <div class="rt-title">Drop hand-crafted process rewards</div>
    <div class="rt-desc">CESAR: the model learns to evaluate its own reasoning process — no manually designed reward signals required.</div>
  </div>
  <div class="rt-item" style="opacity:0.7;">
    <div class="rt-year" style="color:#e65100;">Step 4 — Ongoing</div>
    <div class="rt-title">Fully autonomous self-critique</div>
    <div class="rt-desc">The endgame: models that design their own training curriculum, evaluate their own outputs, and improve without any human oversight.</div>
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
<div class="section-header">📬 Contact</div>
<p style="font-size:0.94em;">
Happy to discuss research, internships, or collaborations. Best reached by email.<br>
📧 <a href="mailto:jiajunf3@illinois.edu"><strong>jiajunf3@illinois.edu</strong></a> &nbsp;·&nbsp;
🏛 Siebel Center for CS, UIUC &nbsp;·&nbsp;
<a href="files/CV.pdf"><strong>CV (PDF)</strong></a>
</p>

<!-- Footer -->
<div class="site-footer">
  <div class="footer-links">
    <a href="mailto:jiajunf3@illinois.edu">✉️ Email</a>
    <a href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en">🎓 Scholar</a>
    <a href="https://openreview.net/profile?id=~Jiajun_Fan1">📝 OpenReview</a>
    <a href="https://github.com/markerthu">💻 GitHub</a>
    <a href="/cv/">📋 CV</a>
    <a href="/projects/">🔬 Projects</a>
  </div>
  <p>© 2026 Jiajun Fan · CS Ph.D. @ UIUC · Built with ☕ and curiosity</p>
</div>

<!-- Scroll-to-top + Dark mode buttons -->
<div style="display:contents">
<button class="scroll-top" id="scrollTop" onclick="window.scrollTo(0,0)">↑</button>
<button class="dark-toggle" id="darkToggle" title="Toggle dark mode">🌙</button>
</div>

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
    'CS Ph.D. Student · University of Illinois Urbana-Champaign',
    'RL Post-Training for Generative Models',
    'Making AI Systems That Improve Themselves'
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

/* ── Animated counters ── */
(function(){
  var animated = false;
  function animateCounters(){
    if(animated) return;
    var els = document.querySelectorAll('.stat-number[data-target]');
    var rect = els[0] && els[0].getBoundingClientRect();
    if(!rect || rect.top > window.innerHeight) return;
    animated = true;
    els.forEach(function(el){
      var target = parseInt(el.getAttribute('data-target'));
      var suffix = el.getAttribute('data-suffix') || '';
      var dur = 1200, start = performance.now();
      function step(now){
        var p = Math.min((now-start)/dur, 1);
        p = 1 - Math.pow(1-p, 3); /* easeOutCubic */
        el.textContent = Math.round(target * p) + suffix;
        if(p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  window.addEventListener('scroll', animateCounters);
  animateCounters();
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
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── Lazy load fade-in ── */
document.querySelectorAll('img[loading="lazy"]').forEach(function(img){
  if(img.complete) img.classList.add('loaded');
  else img.addEventListener('load', function(){ img.classList.add('loaded'); });
});
</script>

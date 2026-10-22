---
layout: single
title: "What's Happening in My Field"
permalink: /blog/reading-papers/
author_profile: false
excerpt: "Papers Jiajun Fan is reading — latest arXiv papers in RL post-training, reasoning, and self-improvement."
---

<style>
.page__title{display:none!important}
html{overflow-x:hidden;background:#fdfcfa;}
html:has(body.dark-mode),html.dark-mode-pending{background:#0f1216;}
body{background:#fdfcfa!important;}
.site-masthead{background:#fdfcfa!important;box-shadow:0 1px 0 #e8e3d9!important;}
.masthead-nav a{color:#6c6860!important;}
.page__footer{background:#fdfcfa!important;color:#6c6860!important;border-top:1px solid #e8e3d9!important;box-shadow:none!important;margin-top:3.5em;}
.page__footer a{color:#6c6860!important;}
.page__footer a:hover{color:#2F4B8F!important;}
html.dark-mode-pending{background:#0f1216!important;}
body.dark-mode{background:#0f1216!important;}
body.dark-mode .site-masthead{background:#0f1216!important;box-shadow:0 1px 0 #262b33!important;}
.masthead-title{color:#1a1815!important;}
body.dark-mode .masthead-title{color:#ece8e0!important;}
body.dark-mode .masthead-nav a{color:#8f8a80!important;}
body.dark-mode .masthead-nav a:hover,body.dark-mode .masthead-nav a.nav-active{color:#6ea8fe!important;}
body.dark-mode .page__footer{background:#0f1216!important;color:#8f8a80!important;border-top-color:#262b33!important;}
body.dark-mode .page__footer a{color:#8f8a80!important;}
.ed-head{margin:0 0 1.4em}
.ed-kicker{font-family:'Inter',system-ui,sans-serif;text-transform:uppercase;letter-spacing:.145em;font-size:.72rem;font-weight:600;color:#6c6860;margin-bottom:.7em}
.ed-h1{font-family:Newsreader,Georgia,serif!important;font-weight:500!important;font-size:2.6rem!important;line-height:1.1!important;letter-spacing:-.02em;color:#1a1815!important;margin:0 0 .3em!important;text-wrap:balance}
.ed-sub{font-family:Newsreader,Georgia,serif;font-size:1.12rem;line-height:1.55;color:#6c6860;margin:0 0 .5em;max-width:40em}
.ed-meta{font-family:'Inter',system-ui,sans-serif;font-size:.8rem;color:#787369}
body.dark-mode .ed-h1{color:#ece8e0!important} body.dark-mode .ed-sub,body.dark-mode .ed-kicker,body.dark-mode .ed-meta{color:#8f8a80}
@media(max-width:600px){.ed-h1{font-size:2.05rem!important}}
.arxiv-page-meta { font-size:0.88em; color:#666; margin-bottom:24px; border-left:3px solid #2F4B8F; padding-left:12px; }
.arxiv-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 8px;
}
@media(max-width:900px){ .arxiv-grid { grid-template-columns: repeat(2,1fr); } }
@media(max-width:600px){ .arxiv-grid { grid-template-columns: 1fr; } }
.arxiv-card {
  display: block; padding: 14px 16px; border-radius: 12px; border: 1px solid #e8e3d9;
  background: #fdfcfa; transition: transform .2s, box-shadow .2s, border-color .2s; text-decoration: none;
}
.arxiv-card:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(0,0,0,.1); border-color: #2F4B8F; }
.arxiv-tag {
  display: inline-block; font-size: 0.72em; font-weight: 700; border-radius: 20px;
  padding: 2px 9px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: .04em;
}
.arxiv-tag-rl-training     { background: #DCE7F5; color: #2F4B8F; }
.arxiv-tag-flow-matching   { background: #E6F0F8; color: #3E6597; }
.arxiv-tag-audio-reasoning { background: #EEF0F4; color: #4A5160; }
.arxiv-tag-reasoning       { background: #FBE3D8; color: #8A4A2E; }
.arxiv-tag-self-improvement{ background: #F5C8B5; color: #7A3B22; }
.arxiv-tag-multimodal      { background: #E6F0F8; color: #3E6597; }
.arxiv-title   { font-size: 0.84em; font-weight: 700; color: #1a2332; line-height: 1.4; margin-bottom: 5px; }
.arxiv-authors { font-size: 0.76em; color: #6c6860; margin-bottom: 3px; }
.arxiv-date    { font-size: 0.73em; color: #787369; }
body.dark-mode .arxiv-card { background: #161b22; border-color: #30363d; }
body.dark-mode .arxiv-tag-rl-training{background:#1E2A44;color:#9DB8EA} body.dark-mode .arxiv-tag-flow-matching,body.dark-mode .arxiv-tag-multimodal{background:#1B2A3C;color:#7FA6D3} body.dark-mode .arxiv-tag-audio-reasoning{background:#262B33;color:#A6ADBB} body.dark-mode .arxiv-tag-reasoning,body.dark-mode .arxiv-tag-self-improvement{background:#33241F;color:#F2C3AE}
body.dark-mode .arxiv-card:hover { border-color: #388bfd; }
body.dark-mode .arxiv-title { color: #e6edf3; }
.page__content a.arxiv-card, .page__content a.arxiv-card:hover, .page__content a.arxiv-card * { text-decoration: none !important; }
.arxiv-card:hover .arxiv-title { color: #2F4B8F; }
body.dark-mode .arxiv-card:hover .arxiv-title { color: #58a6ff; }
.rp-back{margin-top:32px;font-family:Inter,system-ui,sans-serif;font-size:.92rem;font-weight:600}.page__content .rp-back a{color:#2F4B8F;text-decoration:none!important}body.dark-mode .page__content .rp-back a{color:#6ea8fe}
</style>

<div class="ed-head">
  <div class="ed-kicker">Reading</div>
  <h1 class="ed-h1">What's happening in my field</h1>
  <p class="ed-sub">Recent arXiv papers in RL post-training, reasoning, self-improvement and multimodal LLMs.</p>
  <div class="ed-meta">Updated weekly · last update {{ site.data.arxiv_feed.updated }}</div>
</div>

<div class="arxiv-grid">
{% for p in site.data.arxiv_feed.papers %}
<a class="arxiv-card" href="{{ p.url }}" target="_blank" rel="noopener">
  <span class="arxiv-tag arxiv-tag-{{ p.tag | downcase | replace: ' ', '-' | replace: '/', '' }}">{{ p.tag }}</span>
  <div class="arxiv-title">{{ p.title }}</div>
  <div class="arxiv-authors">{{ p.authors }}</div>
  <div class="arxiv-date">{{ p.date }}</div>
</a>
{% endfor %}
</div>

<p class="rp-back"><a href="/year-archive/">&larr; All posts</a></p>

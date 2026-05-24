---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
excerpt: "Full list of publications by Jiajun Fan — ICLR, NeurIPS, ICML, TPAMI papers."
---

<style>
.scholar-link {
  display: inline-flex; align-items: center; gap: 6px;
  background: #1565c0; color: #fff !important;
  padding: 8px 18px; border-radius: 8px; font-size: 0.88em;
  font-weight: 700; text-decoration: none !important;
  margin-bottom: 1.6em; transition: background 0.2s, transform 0.15s;
  box-shadow: 0 2px 8px rgba(21,101,192,.25);
}
.scholar-link:hover { background: #0d47a1; transform: translateY(-1px); }

/* Publication list card style */
.pub-cv-entry {
  padding: 14px 16px; margin-bottom: 10px;
  border-radius: 10px; border: 1.5px solid #e5e7eb;
  background: #fff; transition: border-color .2s, box-shadow .2s;
}
.pub-cv-entry:hover { border-color: #2563eb; box-shadow: 0 4px 16px rgba(37,99,235,.10); }
.pub-cv-venue {
  display: inline-block; font-size: 0.72em; font-weight: 700;
  background: #dbeafe; color: #1d4ed8; border-radius: 20px;
  padding: 2px 9px; margin-bottom: 6px; letter-spacing: .04em; text-transform: uppercase;
}
.pub-cv-title { font-size: 0.95em; font-weight: 700; line-height: 1.45; }
.pub-cv-title a { color: #1a2332; text-decoration: none; }
.pub-cv-title a:hover { color: #2563eb; text-decoration: underline; }
.pub-cv-authors { font-size: 0.80em; color: #6b7280; margin-top: 5px; line-height: 1.5; }
/* Project page badge */
.project-badge { margin-left:6px; font-size:0.78em; font-weight:700; color:#1565c0; background:#dbeafe; border-radius:10px; padding:1px 8px; white-space:nowrap; text-decoration:none !important; display:inline-block; }
.project-badge:hover { background:#bfdbfe; }
/* BibTeX toggle block */
.pub-bib-wrap { margin-top: 6px; }
.pub-bib-btn {
  background: none; border: 1px solid #d1d5db; border-radius: 6px;
  color: #6b7280; font-size: 0.75em; font-weight: 600; padding: 2px 8px;
  cursor: pointer; transition: border-color .15s, color .15s;
}
.pub-bib-btn:hover { border-color: #2563eb; color: #2563eb; }
.pub-bib-block {
  display: none; position: relative; margin-top: 6px;
  background: #1e293b; border-radius: 8px; padding: 14px 16px 10px;
}
.pub-bib-block.open { display: block; }
.pub-bib-block pre {
  margin: 0; font-size: 0.78em; line-height: 1.65;
  color: #e2e8f0; font-family: 'JetBrains Mono', 'Fira Code', monospace;
  white-space: pre; overflow-x: auto;
}
.pub-bib-copy {
  position: absolute; top: 8px; right: 10px;
  background: #334155; border: none; border-radius: 5px;
  color: #94a3b8; font-size: 0.72em; font-weight: 600;
  padding: 3px 10px; cursor: pointer; transition: background .15s, color .15s;
}
.pub-bib-copy:hover { background: #2563eb; color: #fff; }
/* Dark mode overrides */
body.dark-mode .pub-cv-entry { background: #161b22 !important; border-color: #30363d !important; }
body.dark-mode .pub-cv-title a { color: #e6edf3 !important; }
body.dark-mode .pub-cv-authors { color: #8b949e !important; }
body.dark-mode .pub-cv-venue { background: #1e3a5f !important; color: #7dd3fc !important; }
body.dark-mode .scholar-link { background: #388bfd !important; }
body.dark-mode .project-badge { background: #1e3a5f !important; color: #7dd3fc !important; }
body.dark-mode .pub-bib-btn { border-color: #30363d !important; color: #8b949e !important; }
body.dark-mode .pub-bib-btn:hover { border-color: #58a6ff !important; color: #58a6ff !important; }
</style>

<a class="scholar-link" href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">
  📚 View full profile on Google Scholar
</a>

<div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:1.2em;">
  <span style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:20px;padding:3px 12px;font-size:0.83em;font-weight:700;color:#0369a1;">📊 {{ site.data.citations._total | default: 334 }}+ Citations</span>
  <span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:20px;padding:3px 12px;font-size:0.83em;font-weight:700;color:#065f46;">🎯 h-index 9</span>
  <span style="background:#fef3c7;border:1px solid #fde68a;border-radius:20px;padding:3px 12px;font-size:0.83em;font-weight:700;color:#92400e;">🏅 ICLR 2023 Oral</span>
  <span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:20px;padding:3px 12px;font-size:0.83em;font-weight:700;color:#065f46;">🎯 ICML 2026 Accept</span>
</div>

> Publications are listed in reverse chronological order. **\*** denotes first authorship.

{% include base_path %}

<ul style="padding:0; margin:0;">{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
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
</style>

<a class="scholar-link" href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en" target="_blank">
  📚 View full profile on Google Scholar
</a>

> Publications are listed in reverse chronological order. **\*** denotes first authorship.

{% include base_path %}

<ul style="padding:0; margin:0;">{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

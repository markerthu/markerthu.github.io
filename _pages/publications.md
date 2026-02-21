---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<style>
.scholar-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #1565c0;
  color: #fff !important;
  padding: 7px 16px;
  border-radius: 6px;
  font-size: 0.88em;
  font-weight: 600;
  text-decoration: none !important;
  margin-bottom: 1.5em;
  transition: background 0.2s;
}
.scholar-link:hover { background: #0d47a1; }
</style>

<a class="scholar-link" href="https://scholar.google.com/citations?user=EjmzseUAAAAJ&hl=en" target="_blank">
  📚 View full profile on Google Scholar
</a>

> Publications are listed in reverse chronological order. **\*** denotes first authorship.

{% include base_path %}

<ul style="padding:0; margin:0;">{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

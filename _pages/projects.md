---
layout: page
title: projects
permalink: /projects/
description: Current books, datasets, and digital projects.
nav: true
nav_order: 3
display_categories: [research]
horizontal: false
---

<div class="projects">
{% assign research_projects = site.projects | where: "category", "research" | sort: "importance" %}
<div class="row row-cols-1 row-cols-md-2">
{% for project in research_projects %}
  {% include projects.liquid %}
{% endfor %}
</div>
</div>

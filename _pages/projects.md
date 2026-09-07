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

<style>
  .projects .card figure {
    height: 135px;
    margin: 0;
    overflow: hidden;
    background: var(--global-bg-color);
  }

  .projects .card figure picture {
    display: block;
    width: 100%;
    height: 100%;
  }

  .projects .card .card-img-top {
    width: 100%;
    height: 100% !important;
    object-fit: cover;
  }

  .projects .card-body {
    padding: 0.75rem 0.85rem 0.85rem;
  }

  .projects .card-title {
    margin-bottom: 0.35rem;
    font-size: 1.05rem;
    line-height: 1.2;
  }

  .projects .card-text {
    display: -webkit-box;
    margin-bottom: 0;
    overflow: hidden;
    font-size: 0.9rem;
    line-height: 1.35;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>

<div class="projects">
{% assign research_projects = site.projects | where: "category", "research" | sort: "importance" %}
<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
{% for project in research_projects %}
  {% include projects.liquid %}
{% endfor %}
</div>
</div>

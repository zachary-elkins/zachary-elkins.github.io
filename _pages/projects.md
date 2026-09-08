---
layout: page
title: projects
permalink: /projects/
description: Books, research, data, software, and creative work.
nav: true
nav_order: 3
display_categories: [research]
horizontal: false
---

<style>
  .projects .card {
    position: relative;
    overflow: hidden;
  }

  .projects .project-media {
    position: relative;
    height: 120px;
    overflow: hidden;
    background: var(--global-bg-color);
  }

  .projects .project-media-placeholder {
    background: linear-gradient(135deg, var(--global-card-bg-color), var(--global-divider-color));
  }

  .projects .card figure {
    height: 100%;
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

  .projects .project-type {
    position: absolute;
    top: 0.55rem;
    right: 0.55rem;
    z-index: 2;
    padding: 0.22rem 0.48rem;
    border-radius: 0.2rem;
    background: rgba(22, 26, 30, 0.84);
    color: #fff;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.035em;
    line-height: 1.2;
    text-transform: uppercase;
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
    -webkit-line-clamp: 2;
  }

  .projects > .row > .col {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  @media (max-width: 991.98px) {
    .projects > .row > .col {
      flex-basis: 50%;
      max-width: 50%;
    }
  }

  @media (max-width: 575.98px) {
    .projects > .row > .col {
      flex-basis: 100%;
      max-width: 100%;
    }
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

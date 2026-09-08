---
layout: page
permalink: /publications/
title: publications
description: Books, articles, working papers, and digital scholarship.
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/publication-filters.css' | relative_url }}">

<div class="ze-filters" aria-label="Publication filters">
  <div class="ze-filter-row">
    <span>topic</span>
    <div data-filter="topic">
      <button class="active" data-value="all">all</button>
      <button data-value="constitutional-design">constitutional design</button>
      <button data-value="democracy">democracy &amp; citizenship</button>
      <button data-value="executive-power">executive power</button>
      <button data-value="diffusion">diffusion</button>
      <button data-value="human-rights">rights &amp; identity</button>
      <button data-value="data-methods">concepts &amp; methods</button>
      <button data-value="international-politics">international politics</button>
      <button data-value="latin-america">Latin America</button>
    </div>
  </div>
  <div class="ze-filter-row">
    <span>type</span>
    <div data-filter="type">
      <button class="active" data-value="all">all</button>
      <button data-value="books">books</button>
      <button data-value="peer-reviewed articles">peer-reviewed articles</button>
      <button data-value="chapters and other articles">chapters &amp; other articles</button>
      <button data-value="working papers">working papers</button>
      <button data-value="software and multimedia">software &amp; multimedia</button>
    </div>
  </div>
</div>

{% include bib_search.liquid %}

<div class="publications">
{% bibliography %}
</div>

<p class="ze-no-results" hidden>No publications match those filters.</p>
<script src="{{ '/assets/js/publication-filters.js' | relative_url }}"></script>

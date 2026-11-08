---
layout: page
permalink: /publications/
title: publications
description: Books, articles, working papers, and digital scholarship.
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/ze-publications.css' | relative_url }}">

<section class="ze-featured" aria-labelledby="featured-work">
  <h2 id="featured-work">Featured work</h2>
  <div class="ze-featured-grid">
    <div class="ze-featured-item">
      <p class="ze-featured-label">Concepts &amp; methods</p>
      <h3><a href="https://www.cambridge.org/core/books/working-with-concepts/9B3E0F1EA525D9416341AD83D551AD9C">Working with Concepts</a></h3>
      <p>David Collier’s foundational essays on concept formation and measurement, with new research notes. Open access.</p>
    </div>
    <div class="ze-featured-item">
      <p class="ze-featured-label">Constitutional design</p>
      <h3><a href="https://www.cambridge.org/core/books/endurance-of-national-constitutions/CD671879ADBFF7420C25C3707E6135F0">The Endurance of National Constitutions</a></h3>
      <p>Why some constitutions last longer than others. With Tom Ginsburg and James Melton.</p>
    </div>
    <div class="ze-featured-item">
      <p class="ze-featured-label">Executive power</p>
      <h3><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8216587/">Term-Limit Evasions and the Non-Compliance Cycle</a></h3>
      <p>How leaders evade presidential term limits and how those evasions shape future compliance. Open access.</p>
    </div>
  </div>
</section>

<h2 id="full-bibliography">Full bibliography</h2>

<div class="ze-filters" role="group" aria-label="Publication filters">
  <label class="ze-search-label" for="ze-publication-search">Search publications</label>
  <input type="search" id="ze-publication-search" placeholder="Title, author, venue, or keyword">
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
  <div class="ze-filter-row">
    <span>date</span>
    <div data-filter="year">
      <button class="active" data-value="all">all</button>
      <button data-value="2020">2020s</button>
      <button data-value="2010">2010s</button>
      <button data-value="2000">2000s</button>
      <button data-value="in-progress">in progress</button>
    </div>
  </div>
  <div class="ze-filter-status" aria-live="polite">
    <span data-result-count></span>
    <button type="button" class="ze-reset-filters">clear filters</button>
  </div>
</div>

<div class="publications">
{% bibliography %}
</div>

<p class="ze-no-results" hidden>No publications match those filters.</p>
<script src="{{ '/assets/js/ze-publication-filters.js' | relative_url }}"></script>

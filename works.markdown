---
layout: portfolio
title: Works
permalink: /works/
---

<section id="works">
  <div class="filter-container">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="installations">Installations</button>
    <button class="filter-btn" data-filter="live-acts">Live Acts</button>
    <button class="filter-btn" data-filter="releases">Releases</button>
  </div>

  <div class="portfolio-grid">
    {% assign sorted_portfolio = site.portfolio | sort: 'order' | reverse %}
    {% comment %} Filter out unpublished items {% endcomment %}
    {% for item in sorted_portfolio %}
      {% if item.published == false %}
        {% continue %}
      {% endif %}
      <div class="portfolio-item" data-category="{{ item.category }}">
        <a href="{{ item.url | relative_url }}" class="portfolio-link">
          <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
          <div class="portfolio-overlay">
            <h3>{{ item.title }}</h3>
            <p>{{ item.category | replace: '-', ' ' | capitalize }}</p>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</section>

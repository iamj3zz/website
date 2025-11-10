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
    <button class="filter-btn" data-filter="collabs">Collabs</button>
  </div>

  <div class="portfolio-grid">
    {% assign sorted_portfolio = site.portfolio | sort: 'order' | reverse %}
    {% comment %} Filter out unpublished items {% endcomment %}
    {% for item in sorted_portfolio %}
      {% if item.published == false %}
        {% continue %}
      {% endif %}
      {% comment %} Support both single category and multiple categories {% endcomment %}
      {% if item.categories %}
        {% assign item_categories = item.categories | join: ' ' %}
        {% assign all_categories = item.categories %}
      {% else %}
        {% assign item_categories = item.category %}
        {% assign all_categories = item.category | split: ',' %}
      {% endif %}
      <div class="portfolio-item" data-category="{{ item_categories }}">
        <a href="{{ item.url | relative_url }}" class="portfolio-link">
          <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
          <div class="portfolio-overlay">
            <h3>{{ item.title }}</h3>
            <div class="overlay-categories">
              {% for cat in all_categories %}
                <span class="category-tag" data-category="{{ cat }}">{{ cat | replace: '-', ' ' | capitalize }}</span>
              {% endfor %}
            </div>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</section>

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
            {% if item.abstract %}
              <p class="overlay-abstract">{{ item.abstract }}</p>
            {% endif %}
          </div>
        </a>
      </div>
    {% endfor %}
  </div>

  <div class="works-list-print">
    <div class="works-list-header">
      <div>NO.</div>
      <div></div>
      <div>TITLE</div>
      <div>CATEGORY</div>
      <div>YEAR</div>
      <div>LOCATION</div>
    </div>
    {% assign sorted_portfolio = site.portfolio | sort: 'order' | reverse %}
    {% for item in sorted_portfolio %}
      {% if item.published == false %}
        {% continue %}
      {% endif %}
      {% comment %} Support both single category and multiple categories {% endcomment %}
      {% if item.categories %}
        {% assign display_categories = item.categories | join: ', ' | replace: '-', ' ' %}
      {% else %}
        {% assign display_categories = item.category | replace: '-', ' ' %}
      {% endif %}
      <div class="works-list-row">
        <div class="works-col-no">{{ item.order }}</div>
        <div class="works-col-image">
          <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
        </div>
        <div class="works-col-title">{{ item.title }}</div>
        <div class="works-col-category">{{ display_categories | capitalize }}</div>
        <div class="works-col-year">{% if item.year %}{{ item.year }}{% else %}—{% endif %}</div>
        <div class="works-col-location">{% if item.location %}{{ item.location }}{% else %}—{% endif %}</div>
        {% if item.abstract %}
        <div class="works-col-abstract">{{ item.abstract }}</div>
        {% endif %}
      </div>
    {% endfor %}
  </div>
</section>

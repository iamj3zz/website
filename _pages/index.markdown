---
layout: portfolio
permalink: /
---

<h1 class="visually-hidden">Portfolio Works</h1>

<section id="works">
  <div class="filter-container">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="installations">Installations</button>
    <button class="filter-btn" data-filter="live-acts">Live Acts</button>
    <button class="filter-btn" data-filter="releases">Releases</button>
    <button class="filter-btn" data-filter="commissions">Commissions</button>
  </div>

  <div class="portfolio-grid">
    {% assign sorted_portfolio = site.portfolio | sort: 'metadata.release_date' | reverse %}
    {% comment %} Filter out unpublished items {% endcomment %}
    {% for item in sorted_portfolio %}
      {% if item.published == false %}
        {% continue %}
      {% endif %}
      <div class="portfolio-item" data-category="{{ item.category }}">
        <a href="{{ item.url | relative_url }}" class="portfolio-link">
          <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
          <div class="portfolio-overlay">
            <h2>{{ item.title }}</h2>
            <p>{{ item.category | replace: '-', ' ' | capitalize }}</p>
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</section>

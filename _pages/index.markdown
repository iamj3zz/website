---
layout: portfolio
title: "J3ZZ - Experimental Sound Art & Immersive Installations"
permalink: /
description: "French sound artist J3ZZ creates experimental electronic music, immersive installations, and audiovisual performances merging art, science, and technology. Explore works, events, and releases."
image: /assets/img/J3ZZ-logo-black-300px.png
---

<h1 class="visually-hidden">Portfolio Works</h1>

<section id="works">
  <div class="filter-container">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="installations">Installations</button>
    <button class="filter-btn" data-filter="live-acts">Live Acts</button>
    <button class="filter-btn" data-filter="films">Films</button>
    <button class="filter-btn" data-filter="performances">Performances</button>
    <button class="filter-btn" data-filter="releases">Releases</button>
    <button class="filter-btn" data-filter="workshops">Workshops</button>
    <label class="commissioned-toggle">
      <input type="checkbox" id="commissioned-filter" aria-label="Show only commissioned works">
      <span>Commissioned only</span>
    </label>
  </div>

  <div class="portfolio-grid">
    {% assign sorted_portfolio = site.portfolio | sort: 'metadata.release_date' | reverse %}
    {% comment %} Filter out unpublished items and items not shown in grid {% endcomment %}
    {% for item in sorted_portfolio %}
      {% if item.published == false or item.show_in_grid == false %}
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
      <div class="portfolio-item" data-category="{{ item_categories }}" data-commissioned="{{ item.commissioned }}">
        <a href="{{ item.url | relative_url }}" class="portfolio-link">
          {% if item.commissioned == true %}
            <span class="commissioned-badge" aria-label="Commissioned work">C</span>
          {% endif %}
          <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
          <div class="portfolio-overlay">
            <h2>{{ item.title }}</h2>
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
    {% assign categories_order = "installations,live-acts,films,performances,releases,workshops" | split: "," %}
    {% assign all_works = site.portfolio | sort: 'metadata.release_date' | reverse %}

    {% for cat in categories_order %}
      {% comment %} Collect works in this category {% endcomment %}
      {% assign cat_works = "" | split: "" %}
      {% for item in all_works %}
        {% if item.published == false or item.show_in_grid == false %}
          {% continue %}
        {% endif %}
        {% if item.categories %}
          {% assign item_cats = item.categories %}
        {% else %}
          {% assign item_cats = item.category | split: "," %}
        {% endif %}
        {% for c in item_cats %}
          {% assign c_trimmed = c | strip %}
          {% if c_trimmed == cat %}
            {% assign cat_works = cat_works | push: item %}
            {% break %}
          {% endif %}
        {% endfor %}
      {% endfor %}

      {% if cat_works.size > 0 %}
        <div class="works-print-category-section">
          <h2 class="works-print-category-header">{{ cat | replace: '-', ' ' | upcase }}</h2>
          {% for item in cat_works %}
            <div class="works-list-row" data-work-url="{{ site.url }}{{ item.url }}">
              <div class="works-col-image">
                <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
                <div class="works-qr-code" id="qr-{{ item.work_id }}"></div>
              </div>
              <div class="works-col-content">
                <div class="works-col-title"><a href="{{ item.url | relative_url }}">{{ item.title }}</a></div>
                {% if item.commissioned == true %}
                  <div class="works-col-commissioned">※ Commissioned</div>
                {% endif %}
                {% comment %} Display categories separately {% endcomment %}
                {% if item.categories %}
                  {% assign display_categories = item.categories | join: ', ' | replace: '-', ' ' | upcase %}
                {% else %}
                  {% assign display_categories = item.category | replace: '-', ' ' | upcase %}
                {% endif %}
                <div class="works-col-categories">{{ display_categories }}</div>
                {% if item.abstract %}
                <div class="works-col-abstract">{{ item.abstract }}</div>
                {% endif %}
                {% if item.description %}
                <div class="works-col-description">{{ item.description }}</div>
                {% endif %}
                {% comment %} Build metadata string WITHOUT categories {% endcomment %}
                {% assign metadata_string = "" %}
                {% if item.metadata.release_date %}
                  {% assign formatted_date = item.metadata.release_date | date: "%B %-d, %Y" %}
                  {% if metadata_string != "" %}{% assign metadata_string = metadata_string | append: " • " %}{% endif %}
                  {% assign metadata_string = metadata_string | append: "Released: " | append: formatted_date %}
                {% endif %}
                {% if item.metadata.location %}
                  {% if metadata_string != "" %}{% assign metadata_string = metadata_string | append: " • " %}{% endif %}
                  {% assign metadata_string = metadata_string | append: "Location: " | append: item.metadata.location %}
                {% endif %}
                {% if item.metadata.role %}
                  {% if metadata_string != "" %}{% assign metadata_string = metadata_string | append: " • " %}{% endif %}
                  {% assign metadata_string = metadata_string | append: "Role: " | append: item.metadata.role %}
                {% endif %}
                {% if item.metadata.technology %}
                  {% if metadata_string != "" %}{% assign metadata_string = metadata_string | append: " • " %}{% endif %}
                  {% assign metadata_string = metadata_string | append: "Technology: " | append: item.metadata.technology %}
                {% endif %}
                {% if item.metadata.collaborators %}
                  {% if metadata_string != "" %}{% assign metadata_string = metadata_string | append: " • " %}{% endif %}
                  {% assign metadata_string = metadata_string | append: "Collaborators: " | append: item.metadata.collaborators %}
                {% endif %}
                {% if item.metadata.client %}
                  {% if metadata_string != "" %}{% assign metadata_string = metadata_string | append: " • " %}{% endif %}
                  {% assign metadata_string = metadata_string | append: "Client: " | append: item.metadata.client %}
                {% endif %}
                {% if item.metadata.commissioned_by %}
                  {% if metadata_string != "" %}{% assign metadata_string = metadata_string | append: " • " %}{% endif %}
                  {% assign metadata_string = metadata_string | append: "Commissioned by: " | append: item.metadata.commissioned_by %}
                {% endif %}
                {% if item.metadata.isrc %}
                  {% if metadata_string != "" %}{% assign metadata_string = metadata_string | append: " • " %}{% endif %}
                  {% assign metadata_string = metadata_string | append: "ISRC: " | append: item.metadata.isrc %}
                {% endif %}
                {% if item.metadata.upc %}
                  {% if metadata_string != "" %}{% assign metadata_string = metadata_string | append: " • " %}{% endif %}
                  {% assign metadata_string = metadata_string | append: "UPC: " | append: item.metadata.upc %}
                {% endif %}
                {% if item.metadata.iswc %}
                  {% if metadata_string != "" %}{% assign metadata_string = metadata_string | append: " • " %}{% endif %}
                  {% assign metadata_string = metadata_string | append: "ISWC: " | append: item.metadata.iswc %}
                {% endif %}
                {% if metadata_string != "" %}
                <div class="works-col-metadata">{{ metadata_string }}</div>
                {% endif %}
              </div>
            </div>
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}
  </div>
</section>

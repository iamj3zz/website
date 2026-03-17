---
layout: portfolio
title: "Gallery — Visual Art by J3ZZ"
permalink: /gallery/
description: "Original drawings, paintings, and visual artworks by J3ZZ."
---

<section class="gallery-section">
  <h1 class="visually-hidden">Gallery</h1>
  <div class="gallery-grid">
    {% assign sorted_artworks = site.artworks | sort: 'year' | reverse %}
    {% for artwork in sorted_artworks %}
      {% if artwork.published == false %}{% continue %}{% endif %}
      <div class="gallery-item gallery-item--{{ artwork.status | default: 'available' }}">
        <a href="{{ artwork.url | relative_url }}" class="gallery-link">
          {% if artwork.status == "sold" %}<span class="gallery-status-badge gallery-status-badge--sold">SOLD</span>{% endif %}
          {% if artwork.status == "reserved" %}<span class="gallery-status-badge gallery-status-badge--reserved">RESERVED</span>{% endif %}
          <img src="{{ artwork.image | relative_url }}" alt="{{ artwork.title }}">
          <div class="gallery-overlay">
            <h2>{{ artwork.title }}</h2>
            {% if artwork.medium %}<p class="gallery-overlay-medium">{{ artwork.medium }}</p>{% endif %}
            {% if artwork.year %}<p class="gallery-overlay-year">{{ artwork.year }}</p>{% endif %}
          </div>
        </a>
      </div>
    {% endfor %}
  </div>
</section>

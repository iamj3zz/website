---
layout: portfolio
title: "Agenda"
permalink: /fr/events/
description: "Performances et installations à venir et passées de J3ZZ. Lives, installations sonores et performances audiovisuelles dans le monde entier."
image: /assets/bio/bio-photo.jpg
lang: fr
lang_alternate: /events/
page_type: events
---

<h1 class="visually-hidden">Agenda</h1>

<section class="events-section">

  {% assign sorted_events = site.events | sort: 'date' | reverse %}

  {% comment %} Filter out unpublished events {% endcomment %}
  {% assign published_events = "" | split: "" %}
  {% for event in sorted_events %}
    {% if event.published == false %}
      {% continue %}
    {% endif %}
    {% assign published_events = published_events | push: event %}
  {% endfor %}

  {% comment %} Group events by year {% endcomment %}
  {% assign years = "" | split: "" %}

  {% for event in published_events %}
    {% assign event_year = event.date | date: "%Y" %}
    {% unless years contains event_year %}
      {% assign years = years | push: event_year %}
    {% endunless %}
  {% endfor %}

  {% for year in years %}
  <div class="events-year-section" id="year-{{ year }}">
    <h2 class="events-year-title">{{ year }}</h2>

    <div class="events-table">
      <div class="events-table-header">
        <div class="event-col-date">DATE</div>
        <div class="event-col-time">HEURE</div>
        <div class="event-col-country">PAYS</div>
        <div class="event-col-city">VILLE</div>
        <div class="event-col-venue">LIEU</div>
        <div class="event-col-tickets">BILLETS</div>
        <div class="event-col-work">ŒUVRE</div>
      </div>

      {% for event in published_events %}
        {% assign event_year = event.date | date: "%Y" %}
        {% if event_year == year %}
        <div class="events-table-row">
          <div class="event-col-date">{{ event.date | date: "%b %d" }}</div>
          <div class="event-col-time">{{ event.time }}</div>
          <div class="event-col-country">{{ event.country }}</div>
          <div class="event-col-city">{{ event.city }}</div>
          <div class="event-col-venue">{% if event.venue_link and event.venue_link != "" %}<a href="{{ event.venue_link }}" target="_blank" rel="noopener noreferrer">{{ event.venue_name }}</a>{% else %}{{ event.venue_name }}{% endif %}{% if event.venue_address %}<span class="event-venue-address">{{ event.venue_address }}</span>{% endif %}</div>
          <div class="event-col-tickets">
            {% if event.ticket_link and event.ticket_link != "" %}
            <a href="{{ event.ticket_link }}" target="_blank" rel="noopener noreferrer" class="event-ticket-link">BILLETS</a>
            <span class="event-ticket-qr" data-ticket-url="{{ event.ticket_link }}"></span>
            {% endif %}
          </div>
          <div class="event-col-work">
            {% if event.work_id %}
              {% assign linked_work = site.portfolio | where: "work_id", event.work_id | first %}
              {% if linked_work %}
                <a href="{{ linked_work.url }}" class="event-work-link">{{ linked_work.title | upcase }}</a>
              {% endif %}
            {% endif %}
          </div>
        </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</section>

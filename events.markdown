---
layout: portfolio
title: Events
permalink: /events/
---

<section class="events-section">
  <h1>Events</h1>

  {% assign sorted_events = site.events | sort: 'date' | reverse %}

  {% comment %} Group events by year {% endcomment %}
  {% assign events_by_year = "" | split: "" %}
  {% assign years = "" | split: "" %}

  {% for event in sorted_events %}
    {% assign event_year = event.date | date: "%Y" %}
    {% unless years contains event_year %}
      {% assign years = years | push: event_year %}
    {% endunless %}
  {% endfor %}

  {% for year in years %}
  <div class="events-year-section">
    <h2 class="events-year-title">{{ year }}</h2>

    <div class="events-table">
      <div class="events-table-header">
        <div class="event-col-date">DATE</div>
        <div class="event-col-time">TIME</div>
        <div class="event-col-country">COUNTRY</div>
        <div class="event-col-city">CITY</div>
        <div class="event-col-venue">VENUE</div>
        <div class="event-col-tickets">TICKETS</div>
        <div class="event-col-description">DESCRIPTION</div>
      </div>

      {% for event in sorted_events %}
        {% assign event_year = event.date | date: "%Y" %}
        {% if event_year == year %}
        <div class="events-table-row">
          <div class="event-col-date">{{ event.date | date: "%b %d" }}</div>
          <div class="event-col-time">{{ event.time }}</div>
          <div class="event-col-country">{{ event.country }}</div>
          <div class="event-col-city">{{ event.city }}</div>
          <div class="event-col-venue"><a href="{{ event.venue_link }}" target="_blank" rel="noopener noreferrer">{{ event.venue_name }}</a></div>
          <div class="event-col-tickets">{% if event.ticket_link %}<a href="{{ event.ticket_link }}" target="_blank" rel="noopener noreferrer">Tickets</a>{% endif %}</div>
          <div class="event-col-description">{{ event.description }}</div>
        </div>
        {% endif %}
      {% endfor %}
    </div>
  </div>
  {% endfor %}
</section>

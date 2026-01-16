# Jerome Li-Thiao-Te Event Files

## Summary

This directory contains **105 event markdown files** automatically generated from the CSV data.

## Source Data
- **CSV File**: `data/events/jerome-lithiaote-all-events.csv`
- **Template**: `documentation/2023-05-27-electric-paris.md`
- **Events**: 105 total events (from 2013 to 2023)

## File Naming Convention

**Format**: `YYYY-MM-DD-event-slug.md`

**Examples**:
- `2023-12-18-vibrotanica-dann-lekol-cursus-scolaire.md`
- `2023-09-23-j3zz-vibrotanica-concert.md`
- `2019-12-15-rajzolj-zenét-draw-music.md`

## Duplicate Event Handling

Events on the same date with the same title are differentiated by adding time suffixes:

**Example** (Home Base events on 2016-10-05):
- `2016-10-05-home-base-1900.md` (19:00 performance)
- `2016-10-05-home-base-2130.md` (21:30 performance)

**Example** (Home Base events on 2016-04-14):
- `2016-04-14-home-base-1900.md` (19:00 performance)
- `2016-04-14-home-base-2130.md` (21:30 performance)

## Front Matter Structure

Each file contains:
```yaml
---
published: true 
title: Event Title
date: YYYY-MM-DD
time: "HH:MM" or "HH:MM-HH:MM"
country: Country Name
city: City Name
venue_name: Venue Name
venue_link: Google Maps URL or venue website
ticket_link: Ticketing URL
description: Event description
---
```

## Event Timeline

- **Earliest Event**: 2013-09-12 (Frau Frisor, Florence, Italy)
- **Latest Event**: 2023-12-18 (Réunion Island)
- **Primary Locations**: Budapest (Hungary), Réunion Island, France
- **Event Types**: Concerts, workshops, dance performances, exhibitions, festivals

## Generated On

2026-01-16

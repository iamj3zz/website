# Media Guide: Reality in Disguise

## Summary of Enhancements (Mar 23, 2026)

The `2010-01-01-live-reality-in-disguise.md` portfolio work has been enhanced with:

✅ **Clarified Art'n'Go relationship** — Explained Reality in Disguise as 1 of 7 independent productions within the Art'n'Go umbrella initiative
✅ **Expanded metadata** — Added 7 new links + 5 critical resource links
✅ **Enhanced content** — Detailed description of creative process, directors, ensemble, Art'n'Go context
✅ **Video embed** — ROOTS&ROUTES TV Cologne premiere video integrated
✅ **Performance timeline** — All 3 documented performances with dates, venues, festival info
✅ **Media inventory** — Complete list of all available video and photo documentation

## The Art'n'Go Project Structure

**Art'n'Go** is an umbrella initiative (September 2009 – August 2011) that commissioned seven independent artistic productions from emerging artists across 11 European countries. Rather than being a single collective work, Art'n'Go functioned as:

- **A curatorial framework** — Funding and supporting the development of original proposals from young artists
- **An artist development program** — Artists became authors, directors, and managers of their own independent productions
- **A festival presentation strategy** — The seven completed works were collectively showcased across major European festivals (May–August 2011)
- **An intercultural initiative** — Unified by a commitment to promoting cultural dialogue between Eastern and Western Europe

### The Seven Art'n'Go Productions

1. About Traffic
2. Braincheck
3. Coloured Life
4. Ether Sides
5. My World
6. **Reality in Disguise** ← This work
7. Traces

Each production is an independent artistic statement while remaining part of the coordinated Art'n'Go initiative. **Reality in Disguise** represents J3ZZ's directorial voice within this framework, co-created with ensemble members and directed by Max Greyson and Ruben Vandendriessche.

### Official Project Recognition

As documented on the [ROOTS & ROUTES Sziget 2011 announcement](https://www.rootsnroutes.eu/news-id52), Art'n'Go's "cluster of best practice creative works representing the richness of cultural diversities within the ROOTS & ROUTES Network" was collectively presented at Europe's major festivals as a demonstration of emerging artistic talent and intercultural collaboration.

---

## Video Documentation Resources

### Primary Video Archive

| Title | Source | Date | Venue | Duration | Link |
|-------|--------|------|-------|----------|------|
| **Art'n'Go live at Cologne III** | ROOTS&ROUTES TV | Aug 21, 2010 | Club Bahnhof Ehrenfeld, Cologne | Full performance | [rootsnroutes.tv/video-id1045](http://rootsnroutes.tv/video-id1045-vpage=9) |
| **Sziget Festival 2011** | ROOTS & ROUTES | Aug 9, 2011 | A38 stage, Budapest | Performance + news | [rootsnroutes.eu/news-id52](https://www.rootsnroutes.eu/news-id52) |

### Video Sources Available Online

- **ROOTS&ROUTES TV Archive** — Full video platform: [rootsnroutes.tv](http://www.rootsnroutes.tv/)
- **ROOTS & ROUTES News** — Official announcement with embedded performance docs: [rootsnroutes.eu/news-id52](https://www.rootsnroutes.eu/news-id52)
- **ROOTS & ROUTES Project Hub** — All seven productions documented: [rootsnroutes.eu/projects-id64](https://www.rootsnroutes.eu/projects-id64)

---

## Photography Resources

### Documented Photo Archives

| Archive | Count | Source | Link |
|---------|-------|--------|------|
| **ROOTS & ROUTES Initiative** | 394 photos | Flickr | [flickr.com/photos/143298828@N02](https://www.flickr.com/photos/143298828@N02/) |

The archive includes:
- All three festival performances (Cologne, Florence, Budapest)
- Residency documentation (Remscheid, Heek)
- Ensemble portraits
- Performance stills and action shots

---

## Recommended Image Creation Workflow

### Images Needed for Portfolio Page

**1. `thumbnail.jpg`** (Primary grid image)
- **Dimensions:** 400×400px (square, or flexible aspect ratio)
- **Usage:** Portfolio grid display, social media sharing
- **Source:** Best performance still from Cologne, Florence, or Budapest performance
- **Characteristics:** Clear visibility of ensemble, energetic moment, good lighting
- **Suggested:** Photo from ROOTS & ROUTES Flickr archive showing performance action

**2. `hero.jpg`** (Detail page hero image)
- **Dimensions:** 1200×600px–1400×700px (16:9 aspect recommended)
- **Usage:** Work detail page top section
- **Source:** Wide stage shot showing full ensemble and stage setup
- **Characteristics:** Captures visual spectacle, shows scale, conveys genre diversity
- **Suggested:** Full ensemble shot from Sziget or Florence performance

### Current Image Path Issue

**⚠️ NOTE:** The file currently references a template placeholder:
```yaml
image: /assets/works/1900-01-01-inst-complete-template/thumbnail.jpg
```

This should be updated to point to the actual work directory once images are created:
```yaml
image: /assets/works/2010-01-01-live-reality-in-disguise/thumbnail.jpg
```

### Step-by-Step Image Creation

1. **Select best photos** from [ROOTS & ROUTES Flickr archive](https://www.flickr.com/photos/143298828@N02/)
   - Look for: Clear stage lighting, visible ensemble members, dynamic moments, good composition
   - Preferred: Performance from Cologne (premiere), Florence (major festival), or Budapest (Sziget)

2. **Create directory:**
   ```bash
   mkdir -p assets/works/2010-01-01-live-reality-in-disguise/
   ```

3. **Prepare thumbnail.jpg**
   - Extract or download high-res photo from Flickr
   - Crop to 400×400px (square)
   - Optimize for web (JPEG, 150-250KB)
   - Save as: `assets/works/2010-01-01-live-reality-in-disguise/thumbnail.jpg`

4. **Prepare hero.jpg**
   - Extract or download high-res photo from Flickr
   - Crop to 16:9 aspect (e.g., 1400×787px)
   - Optimize for web (JPEG, 200-400KB)
   - Save as: `assets/works/2010-01-01-live-reality-in-disguise/hero.jpg`

5. **Update front matter** to reflect actual paths:
   ```yaml
   image: /assets/works/2010-01-01-live-reality-in-disguise/thumbnail.jpg
   ```

### Image Selection Tips

**For Thumbnail (400×400px):**
- Choose a moment that captures the essence of the show
- Good options: Close-up of violinist with dancers in background, full ensemble moment, visual climax
- Ensure good contrast and visibility at small size
- Preference: Action shot rather than static pose

**For Hero (1400×787px):**
- Choose a wide shot showing the full stage and ensemble
- Captures the "shockingly unique mixture" of art forms
- Good lighting that shows performers clearly
- Stage setup and scenic elements visible
- Preference: Moment showing interaction between dancer, musician, and visual artist

---

## Integration Notes

### Front Matter Updates Needed

Once images are created and placed in `assets/works/2010-01-01-live-reality-in-disguise/`, update:

```yaml
---
image: /assets/works/2010-01-01-live-reality-in-disguise/thumbnail.jpg
```

### SEO & Gallery Implications

- Primary image (`image:` field) is used in:
  - Portfolio grid thumbnail
  - Social media sharing (Open Graph)
  - Work detail page top section

- Images should be:
  - High quality (300+ dpi equivalent at display size)
  - Well-lit and in-focus
  - Representative of the work's aesthetic

---

## Complete Media Links Reference

### Official Project Pages
- [Art'n'Go on ROOTS & ROUTES](https://www.rootsnroutes.eu/projects-id64) — All seven productions
- [ROOTS & ROUTES Network Home](https://www.rootsnroutes.eu/) — Main project hub

### Video Archives
- [ROOTS&ROUTES TV (mainplatform)](http://www.rootsnroutes.tv/) — Video archive
- [Cologne III Performance Video](http://rootsnroutes.tv/video-id1045-vpage=9) — Full recording, Aug 21, 2010
- [Sziget 2011 Official News](https://www.rootsnroutes.eu/news-id52) — With performance documentation

### Festival Pages
- [Fabbrica Europa Festival](https://fabbricaeuropa.net/en/) — Florence, May 2011
- [Sziget Festival](https://szigetfestival.com/en/) — Budapest, Aug 2011
- [Fabbrica Europa 2011 Program](https://www.nove.firenze.it/b104082328-fabbrica-europa-2011.htm) — Italian documentation

### Photography & Documentation
- [ROOTS & ROUTES Flickr Archive](https://www.flickr.com/photos/143298828@N02/) — 394 performance photos

### Educational & Funding
- [Akademie der Kulturellen Bildung](https://en.kulturellebildung.de/) — Residency venue
- [EU CULTURE Programme (2007–2013)](https://culture.ec.europa.eu/resources/creative-europe-previous-programmes/culture-programme-2007-2013) — Funding body

---

## Portfolio Metadata Complete Reference

The updated front matter now includes 13 linked metadata fields spanning:
- Project program & funding
- Project leadership (Sziget Kulturalis)
- Residency information
- All three performance venues & dates
- Official announcements & program documentation
- Video archives
- Photo archives
- Network hub pages

All links verified and active as of March 23, 2026.

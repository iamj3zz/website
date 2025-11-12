# Metadata Fields Reference by Category

This section provides category-specific guidance for populating metadata fields. Use these as templates when creating new works.

## Installations

Installations focus on venue, commissioners, curators, and visitor engagement.

**Recommended Fields:**
```yaml
metadata:
  year: "2024"
  date: "March 10 - May 25, 2024"  # Exhibition period
  location: "Paris, France"
  places: "Palais de Tokyo"  # Specific venue name
  role: "Sound artist, composer, installation artist"
  technology: "Multi-channel sound system, sensors, custom software"
  collaborators: "Visual artist Name, Engineer Name"
  commissioned_by: "Museum or Festival Name"
  client: "Organization or Ministry Name"  # Optional: funding body
  produced_by: "Production Company"
  curated_by: "Curator Name"
  credits: "Concept & sound: Artist. Collaborator: Name (role). Production: Company"
  partners: "Partner Organization 1, Partner Organization 2"
  supporters: "Foundation Name, Funding Body"
  interview: "Featured in Art Magazine"  # Optional: press coverage
  press_kit: "Download at example.com"  # Optional: press materials
  special_thanks: "To the museum team and all collaborators"
  custom:
    - label: "Capacity"
      value: "20 visitors per session"
    - label: "System"
      value: "24-channel immersive audio"
    - label: "Visitors"
      value: "Over 35,000 during exhibition"
```

**Key Considerations:**
- Use `date` field for exhibition periods (start - end date)
- Include venue name in `places` field
- Document visitor capacity and engagement metrics in `custom` fields
- List all institutional partners and supporters

## Live Acts

Live acts emphasize performance dates, venues, tours, and live presentation details.

**Recommended Fields:**
```yaml
metadata:
  year: "2024"
  date: "June 15, 2024"  # Performance date or tour period
  location: "Berlin, Germany"  # Primary location or tour region
  performed_in: "Europe, North America"  # Geographic scope
  places: "Berghain, Funkhaus, Tresor"  # Multiple venues
  role: "Live performer, sound artist"
  technology: "Modular synthesizers, MaxMSP, live sampling"
  collaborators: "Visual artist Name, Lighting designer Name"
  commissioned_by: "Festival Name"  # If commissioned performance
  curated_by: "Festival Curator"  # If curated event
  credits: "Performance: Artist. Visuals: Name. Production: Company"
  partners: "Festival Partner Organizations"
  supporters: "Arts Council, Funding Body"
  custom:
    - label: "Tour"
      value: "12 cities, 3 continents"
    - label: "Duration"
      value: "60 minutes"
    - label: "Performances"
      value: "15 shows"
```

**Key Considerations:**
- Use `performed_in` for tour geographic scope
- List multiple venues in `places` field
- Document tour statistics in `custom` fields
- Include performance duration and format details

## Releases

Releases require industry identifiers (ISRC, UPC, ISWC), production credits, and distribution information.

**Recommended Fields:**
```yaml
metadata:
  year: "2024"
  location: "Reykjavik, Iceland"  # Recording location
  role: "Composer, producer, field recordist"
  technology: "Field recordings, modular synthesizers, tape manipulation"
  isrc: "USRC17607839"  # International Standard Recording Code
  upc: "123456789012"  # Universal Product Code (barcode)
  iswc: "T-345.246.800-1"  # International Standard Musical Work Code (optional)
  composer_performer_producer: "Artist Name"
  mastering_by: "Studio Name / Engineer Name"
  mastering_by_link: "https://studio.com"  # Optional: link to studio
  artwork_by: "Designer Name / Photographer Name"
  credits: "All tracks composed and produced by Artist. Mastering: Name. Artwork: Name"
  produced_by: "Label Name"  # Record label or self-released
  interview: "Featured on Resident Advisor"  # Optional: press coverage
  press_kit: "Download at artist.com/press"  # Optional: EPK link
  socials: "@artist_name on Bandcamp, Spotify"  # Streaming links
  special_thanks: "To everyone who supported this release"
  custom:
    - label: "Format"
      value: "Digital, Limited Edition Vinyl, CD"
    - label: "Duration"
      value: "45 minutes, 10 tracks"
    - label: "Genre"
      value: "Experimental Electronic, Ambient"
    - label: "Label"
      value: "Label Name (Catalog: LAB123)"
```

**Key Considerations:**
- **Always include ISRC** for individual recordings
- **Include UPC** for albums/EPs (barcode number)
- Include ISWC for composition registration (optional but recommended)
- Document all production credits (mastering, artwork, mixing)
- Specify all release formats (digital, vinyl, CD, cassette)
- Include catalog number in custom fields if released on label
- Link to streaming platforms in `socials` field

**Industry Identifier Information:**
- **ISRC** (International Standard Recording Code): Unique identifier for individual sound recordings. Format: CC-XXX-YY-NNNNN
- **UPC** (Universal Product Code): 12-digit barcode number for physical/digital releases
- **ISWC** (International Standard Musical Work Code): Unique identifier for musical compositions. Format: T-345.246.800-1

## Collaborations

Collaborations highlight multiple artists, shared creative process, and partnership details.

**Recommended Fields:**
```yaml
metadata:
  year: "2024"
  location: "Remote collaboration (worldwide)"  # or specific location
  role: "Co-composer, producer, curator"
  technology: "Collaborative online production, various techniques"
  collaborators: "Artist 1 (Country), Artist 2 (Country), Artist 3 (Country)"
  commissioned_by: "Organization Name"  # If commissioned
  produced_by: "Collective Name or Independent"
  credits: "Artist 1: tracks 1,3,5. Artist 2: tracks 2,4. All artists: track 6. Mastering: Name"
  partners: "Supporting Organizations"
  interview: "Conversation in Electronic Beats"
  press_kit: "Download at project.net"
  socials: "@project_name @artist1 @artist2"
  special_thanks: "To all collaborators for their trust and contributions"
  # Include category-specific fields based on format
  # If release: add ISRC, UPC, mastering_by, artwork_by
  # If installation: add places, commissioned_by, curated_by
  # If live act: add performed_in, places, date
  custom:
    - label: "Format"
      value: "Digital album, Installation, Live performance"
    - label: "Artists"
      value: "5 international collaborators"
    - label: "Duration"
      value: "60 minutes, 12 tracks"
```

**Key Considerations:**
- Emphasize the collaborative nature in `role` field
- List all collaborators with their locations/roles
- Use `credits` field to specify individual contributions
- Include format-specific metadata (ISRC for releases, venues for performances, etc.)
- Document collaborative process and geographic scope
- Multi-category works should include metadata from all relevant categories

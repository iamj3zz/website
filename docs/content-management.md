# Content Management

## Front Matter Standards

All collection items must follow these front matter standards to ensure consistency across the site.

### Portfolio Items (_portfolio/)

**Required Fields:**
- `layout: work` - Must be "work" for all portfolio items
- `title` - The display title of the work (string)
- `work_id` - Unique identifier (alphanumeric, hyphens, underscores only: A-Z, a-z, 0-9, -, _). Used for linking to events and internal references. Should be lowercase and based on title (e.g., "My Project" → "my-project")
- `abstract` - Brief description (1-2 sentences, 150-200 characters) displayed in grid hover and printable page. Should focus on what the work IS with key descriptors.
- `description` - **NEW**: Comprehensive description of the work (3-5 sentences, 200-400 characters) displayed on the work detail page via the description module. Supports Markdown formatting. Provides context beyond the abstract. Use this for introducing the work's concept, goals, and key features.
- `image` - Path to preview image (e.g., `/assets/img/filename.jpg`)
- `order` - Numeric order for sorting (higher numbers appear first)
- `metadata` - Centralized metadata structure with category-specific fields (see [Metadata Reference](metadata-reference.md))

**Category Fields (Required - choose one format):**
- **Single category:** `category: value` (where value is: installations, live-acts, releases, or commissions)
- **Multiple categories:**
  ```yaml
  categories: [category1, category2]
  primary_category: category1
  ```

**Optional Fields:**
- `published` - Set to `false` to hide from site (defaults to true if omitted)
- `sections` - Array of modular layout sections (for modular layout mode)
- Content below front matter (for simple layout mode)

**Example - Recommended Structure with Centralized Metadata:**
```yaml
---
layout: work
title: Project Title
work_id: project-title
abstract: "Brief description of what this work is, including medium and key themes."
description: |
  A comprehensive introduction to the work that provides context, goals, and key
  features. This description appears on the work detail page and can include
  **Markdown formatting** for emphasis. Explain the concept, approach, and impact
  of the work in 3-5 sentences.
category: installations
image: /assets/img/project.jpg
order: 15

# Centralized metadata
metadata:
  year: "2024"
  location: "City, Country"
  role: "Sound artist, composer"
  technology: "Technologies used"
  commissioned_by: "Organization Name"
  # ... additional category-specific fields

sections:
  - type: description  # Displays the description from front matter

  - type: metadata

  - type: text
    title: "About the Work"
    content: |
      Additional detailed project information here.

  - type: image-grid
    columns: 3
    images: [...]
    captions: [...]
---
```

**Example - Multiple Categories:**
```yaml
---
layout: work
title: Project Title
work_id: project-title
abstract: "Multi-format work combining installation and performance elements."
description: |
  This collaborative work explores the intersection of installation art and live
  performance, bringing together multiple artists to create an immersive experience.
  The project was commissioned for a major festival and combines **visual art**,
  **sound design**, and **interactive elements**.
categories: [installations, commissions, live-acts]
primary_category: installations
image: /assets/img/project.jpg
order: 15

metadata:
  year: "2024"
  location: "Paris, France"
  places: "Venue Name"
  role: "Co-creator, performer"
  collaborators: "Artist 1, Artist 2"
  commissioned_by: "Festival Name"
  # Include fields from all relevant categories

sections:
  - type: description  # Displays the description from front matter

  - type: split-hero-metadata
    content_type: "image"
    image: /assets/img/hero.jpg

  - type: text
    title: "About the Collaboration"
    content: |
      Additional details about the collaboration process...
---
```

### Events (_events/)

**Required Fields:**
- `title` - Event name (string)
- `date` - Event date in YYYY-MM-DD format (e.g., 2025-03-15)
- `time` - Event start time in 24-hour format with quotes (e.g., "20:00")
- `country` - Country name (string)
- `city` - City name (string)
- `venue_name` - Venue name (string)
- `venue_link` - Full URL to venue website (must be valid URL)
- `ticket_link` - Full URL to ticket purchase page (must be valid URL)
- `description` - Event description (string, can be multiple sentences)

**Optional Fields:**
- `work_id` - Links event to a specific work (must match a work's `work_id` exactly)
- `published` - Set to `false` to hide from site (defaults to true if omitted)

**Example - Basic Event:**
```yaml
---
title: Festival Performance
date: 2025-06-15
time: "20:30"
country: Spain
city: Barcelona
venue_name: Festival Venue
venue_link: https://www.venue.com
ticket_link: https://www.tickets.com/event
description: Live performance at the festival main stage.
---
```

**Example - Event Linked to Work:**
```yaml
---
title: Festival Performance
date: 2025-06-15
time: "20:30"
country: Spain
city: Barcelona
venue_name: Festival Venue
venue_link: https://www.venue.com
ticket_link: https://www.tickets.com/event
description: Live performance at the festival main stage.
work_id: my-project-title
---
```

**Important Notes:**
- No blank lines within YAML front matter (between the `---` markers)
- All URLs must be complete with protocol (https://)
- Time values must be quoted strings ("HH:MM")
- Date format must be YYYY-MM-DD
- Boolean values (published) should be lowercase: `true` or `false`
- Arrays use bracket notation: `[item1, item2, item3]`

## Multi-Category Support

Works can belong to multiple categories. Use either format:

**Single category:**
```yaml
category: installations
```

**Multiple categories:**
```yaml
categories: [installations, commissions]
primary_category: installations  # Used for primary overlay color
```

## Adding a New Portfolio Work

**IMPORTANT**: All new works should follow the standardized structure with centralized metadata and modular sections (see [Best Practices](best-practices.md)).

**⭐ RECOMMENDED**: Copy `_portfolio/31-complete-template.md` as your starting point - it includes ALL metadata fields and module types with comprehensive examples and guidance.

### Recommended Approach - Modular Layout with Centralized Metadata

1. **Create the file**: `##-work-name.md` in `_portfolio/` (e.g., `31-new-work.md`)
2. **Add front matter** with required fields:
```yaml
---
layout: work
title: New Work Title
work_id: new-work-title  # Required: unique ID (A-Z, a-z, 0-9, -, _)
abstract: "Brief description of what this work is, medium, and themes."
category: installations  # or live-acts, releases, commissions
image: /assets/img/work-preview.jpg
order: 31  # Higher numbers appear first

# Centralized metadata - use category-specific template
metadata:
  year: "2024"
  location: "City, Country"
  role: "Your role"
  technology: "Technologies used"
  # ... add category-specific fields (see Metadata Reference)
  custom:
    - label: "Custom Field"
      value: "Value"

sections:
  - type: metadata  # Display metadata

  - type: text
    title: "About the Work"
    content: |
      Full description with **markdown** support.

  - type: image-grid
    columns: 3
    images:
      - /assets/img/image1.jpg
      - /assets/img/image2.jpg
      - /assets/img/image3.jpg
    captions:
      - "Caption 1"
      - "Caption 2"
      - "Caption 3"

  # Add more modules as needed
---
```
3. **Place images** in `assets/img/`
4. **Test locally**: `bundle exec jekyll serve`
5. **Verify display**: Check both web view and printable WORKS page

**Category-Specific Templates:**
- **Installations**: See [Metadata Reference > Installations](metadata-reference.md#installations)
- **Live Acts**: See [Metadata Reference > Live Acts](metadata-reference.md#live-acts)
- **Releases**: See [Metadata Reference > Releases](metadata-reference.md#releases)
- **Collaborations**: See [Metadata Reference > Collaborations](metadata-reference.md#collaborations)

### Legacy Simple Layout (Not Recommended)

The simple layout (single image + text content) is still supported for backward compatibility, but all new works should use the modular layout with centralized metadata.

If you must use simple layout:
```yaml
---
layout: work
title: Work Title
work_id: work-title
abstract: "Brief description"
category: installations
image: /assets/img/work.jpg
order: 25

metadata:
  year: "2024"
  location: "City, Country"
  # ... other fields
---
Optional markdown content here.
```

**Note**: This approach lacks the flexibility and consistency of the modular sections system.

# Best Practices for Portfolio Works

## Standardized Structure

All portfolio works in this site follow a standardized structure using centralized metadata and modular sections. This ensures consistency, maintainability, and optimal display in both web and print formats.

**Required Structure:**
```yaml
---
layout: work
title: Work Title
work_id: work-title-slug
abstract: "Brief description for grid view and printable page"
description: |
  Comprehensive description (3-5 sentences) that provides context about the work,
  its goals, key features, and impact. Supports **Markdown formatting**.
category: installations  # or categories: [cat1, cat2] with primary_category
image: /assets/img/preview.jpg
order: ##

# Centralized metadata - define once, use everywhere
metadata:
  year: "2024"
  location: "City, Country"
  role: "Your role(s)"
  technology: "Technologies used"
  # ... category-specific fields (see Metadata Reference)
  custom:
    - label: "Custom Field"
      value: "Value"

sections:
  - type: description  # Display work description (required)

  - type: metadata  # Display metadata as standalone section (optional)

  - type: text
    title: "About the Work"
    content: |
      Additional detailed information using full markdown support...

  - type: image-grid
    columns: 3
    images: [...]
    captions: [...]

  # ... additional modules
---
```

## Creating New Works - Step by Step

1. **Create the file**: Use format `##-work-slug.md` in `_portfolio/` directory
2. **Define basic front matter**: title, work_id, abstract, **description**, category, image, order
3. **Add centralized metadata**: Use category-specific template from [Metadata Reference](metadata-reference.md)
4. **Build sections array**: Start with `description` module, then combine other modules to tell the work's story (see [Modules Reference](modules-reference.md))
5. **Test locally**: Run `bundle exec jekyll serve` and verify display
6. **Check printable version**: View works.markdown to ensure proper print display

## Metadata Best Practices

**DO:**
- ✅ Use the centralized `metadata:` field in front matter
- ✅ Include all relevant metadata for your work's category
- ✅ Add `abstract` field for grid hover and printable page display
- ✅ Add `description` field for work detail page (required, 200-400 characters)
- ✅ Use category-specific fields (see [Metadata Reference](metadata-reference.md))
- ✅ Include industry identifiers (ISRC, UPC) for releases
- ✅ Add links to metadata fields using `_link` suffix where appropriate
- ✅ Use `custom` array for fields not covered by standard metadata
- ✅ Quote all year values as strings: `year: "2024"`
- ✅ Include `description` module in sections array (typically first)

**DON'T:**
- ❌ Duplicate metadata across multiple sections
- ❌ Mix section-level and front matter metadata (choose one approach)
- ❌ Forget the `work_id` field (required for event linking)
- ❌ Leave `abstract` field empty (used in grid and printable page)
- ❌ Leave `description` field empty (required for work detail page)
- ❌ Use unquoted year values: `year: 2024` (will cause errors)

## Sections Array Best Practices

**Typical Section Order:**
1. `description` - Display work description (required, typically first)
2. `metadata` - Display project metadata (optional)
3. `split-hero-metadata` or `split-bandcamp-metadata` - Combine hero content with metadata
4. `text` - Additional detailed sections
5. `iframe` or `hero-image` - Primary media content
5. `image-grid` - Gallery of additional images
6. `quote` - Testimonials or reviews
7. `linked-events` - Related events (if applicable)

**Module Selection Guide:**
- **Installations**: Use `split-hero-metadata` with installation photos
- **Releases**: Use `split-bandcamp-metadata` for audio player + metadata
- **Live Acts**: Use `iframe` (responsive) for video documentation
- **Collaborations**: Use multiple `text` modules to highlight each collaborator

## Abstract Field Guidelines

The `abstract` field appears in:
- Portfolio grid hover overlay
- Printable WORKS page (enhanced layout with categories and labeled metadata)
- Search engine results (if SEO is implemented)

**Best Practices:**
- Keep it concise: 1-2 sentences (150-200 characters)
- Focus on what the work IS, not background story
- Include key descriptors: medium, theme, approach
- Make it compelling and informative

**Good Examples:**
```yaml
abstract: "An immersive spatial audio installation exploring boundaries between physical space and sonic environments through real-time algorithmic processing."

abstract: "A collaborative album featuring five international artists, blending ambient soundscapes with experimental electronic textures in a cohesive sonic journey."

abstract: "Live performance series combining modular synthesis with generative visuals, creating improvised audiovisual compositions across European venues."
```

**Bad Examples:**
```yaml
abstract: "My latest work."  # Too vague

abstract: "This project started in 2023 when I was invited to participate in a residency program where I met several collaborators and we decided to create something together using various techniques and technologies that we had been experimenting with over the past few years..."  # Way too long

abstract: "Sound installation."  # Too brief, no descriptive detail
```

## Description Field Guidelines

**NEW**: The `description` field appears on the work detail page via the description module. This is distinct from the `abstract` and provides more comprehensive context.

The `description` field appears in:
- Work detail page (via description module)
- Print version of work detail pages

**Purpose:**
- Provides comprehensive overview of the work (3-5 sentences)
- Explains concept, approach, goals, and impact
- More detailed than abstract but still concise
- Supports Markdown formatting for emphasis

**Best Practices:**
- Length: 200-400 characters (3-5 sentences)
- Include: concept, methodology, goals, impact
- Use Markdown for emphasis: `**bold**`, `*italic*`
- Explain WHY the work matters, not just WHAT it is
- Position description module early in sections array

**Good Examples:**
```yaml
description: |
  This immersive installation explores the symbiotic relationship between humans and
  plants using bioelectrical sensors. The work captures micro-electrical variations in
  plants and transforms them into real-time audiovisual responses, creating a unique
  **sensory experience**. It aims to raise awareness about **biodiversity** and foster
  empathy towards nature.

description: |
  A collaborative album that emerged from a three-year exploration of **analog synthesis**
  and **modular systems**. Five international artists contributed compositions that blend
  ambient soundscapes with experimental textures. The work investigates the intersection
  of improvisation and structured composition, resulting in a cohesive **sonic journey**.
```

**Relationship between Abstract and Description:**
- **Abstract**: Brief (150-200 chars), for grid/print list, focuses on WHAT
- **Description**: Comprehensive (200-400 chars), for work page, focuses on WHY and HOW
- Both are required but serve different purposes

## Multi-Category Works

For works spanning multiple categories (e.g., collaborative installations, release with live performances):

```yaml
categories: [installations, commissions, live-acts]
primary_category: installations  # Determines hover color

metadata:
  # Include metadata from ALL relevant categories
  # Installation fields
  places: "Museum Name"
  commissioned_by: "Commissioner"
  curated_by: "Curator Name"

  # Release fields (if applicable)
  isrc: "CODE12345"
  mastering_by: "Studio Name"

  # Collaboration fields
  collaborators: "Artist 1, Artist 2, Artist 3"
  credits: "Detailed credits..."
```

## Template Works

The portfolio includes template works that demonstrate best practices:

- **Work 31** (`_portfolio/31-complete-template.md`): **⭐ ULTIMATE TEMPLATE** - Comprehensive reference demonstrating:
  - ALL possible metadata fields with examples and links
  - ALL 10 module types with multiple configuration examples
  - Multi-category work setup (installations, releases, live-acts, commissions)
  - Category-specific metadata guidelines in comments
  - Section module recommendations by category
  - Complete usage guide in HTML comments
  - **Use this as your primary template for new works**
- **Work 28** (`_portfolio/28-modular-example.md`): Complete example using all standard module types
- **Work 29** (`_portfolio/29-split-layout-example.md`): Split layout modules demonstration
- **Work 30** (`_portfolio/30-centralized-metadata-example.md`): Centralized metadata system example

**Recommended workflow**: Copy Work 31 as starting point for new works, then remove fields/modules that don't apply.

## Maintaining Consistency

**Current Portfolio Status:**
- All 30+ works follow centralized metadata structure
- All works include comprehensive category-appropriate metadata
- All works use modular sections array
- Printable WORKS page displays all metadata automatically with labels

**When Adding New Works:**
1. Follow the structure of Work 31 (complete template) or works 28-30 as templates
2. Use category-specific metadata templates from [Metadata Reference](metadata-reference.md)
3. Test both web and print display before committing
4. Ensure `work_id` is unique across all portfolio works
5. Add `abstract` field for proper grid and print display
6. Verify metadata displays correctly in printable version with labels (Year:, Location:, etc.)

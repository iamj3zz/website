# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll static site deployed to GitHub Pages at www.j3zz.com. The site is a portfolio website with a custom design inspired by julienbayle.net, featuring a grid-based portfolio system with filterable works.

## Development Commands

### Local Development
```bash
bundle exec jekyll serve
```
Starts local development server at http://localhost:4000 with auto-regeneration enabled. The server watches for file changes and rebuilds automatically.

**Important**: Changes to `_config.yml` require a server restart to take effect.

### Build Site
```bash
bundle exec jekyll build
```
Generates the static site in the `_site/` directory.

### Install/Update Dependencies
```bash
bundle install
```
Run after modifying `Gemfile` or when setting up the project for the first time.

```bash
bundle update github-pages
```
Updates GitHub Pages and all associated Jekyll dependencies.

## Architecture

### Site Structure

**Core Files:**
- `_config.yml` - Main Jekyll configuration file containing site metadata (title, description, URL, social links, logo path) and collection settings
- `_site/` - Generated static site (git-ignored, auto-generated on build)
- `.jekyll-cache/` - Build cache (git-ignored)
- `CNAME` - Contains custom domain for GitHub Pages
- `404.html` - Custom 404 error page

**Pages:**
- `index.markdown` - Homepage displaying portfolio grid (uses `portfolio` layout)
- `bio.markdown` - About/bio page at `/bio/`
- `works.markdown` - Portfolio works page at `/works/` with filterable grid
- `events.markdown` - Events page at `/events/`
- `contact.markdown` - Contact page at `/contact/`

**Layouts:**
- `_layouts/portfolio.html` - Main layout for pages with navigation and logo
- `_layouts/work.html` - Layout for individual portfolio work detail pages

**Collections:**
- `_portfolio/` - Portfolio items collection (24 items numbered 01-24)
  - Each item has: `title`, `category`, `image`, `order`, and optional content
  - Categories: `installations`, `live-acts`, `releases`
  - Items generate individual pages at `/works/:name/`

**Assets:**
- `assets/css/portfolio.css` - Custom CSS for entire site
- `assets/js/portfolio.js` - JavaScript for portfolio filtering
- `assets/img/` - Images including logo and portfolio work images

### Navigation

**Main Navigation (appears on all pages):**
- Logo (clickable, links to homepage) - configured via `site.logo` in `_config.yml`
- BIO | WORKS | EVENTS | CONTACT
- Active page is underlined
- Navigation state uses `class="active"` based on page URL

**Works Page Sub-Navigation:**
- Filter buttons: All | Installations | Live Acts | Releases
- Active filter is underlined
- JavaScript-powered filtering (portfolio.js)

### Portfolio System

**Collection Configuration (_config.yml):**
```yaml
collections:
  portfolio:
    output: true
    permalink: /works/:name/
    sort_by: order
```

**Portfolio Item Structure:**
Each file in `_portfolio/` follows this format:
```yaml
---
layout: work
title: Work Title
category: installations|live-acts|releases
image: /assets/img/filename.jpg
order: 1
---
Optional work description content in markdown.
```

**Display Order:**
- Portfolio grid displays in reverse order (highest order number first)
- Uses Liquid: `{% assign sorted_portfolio = site.portfolio | sort: 'order' | reverse %}`

### Styling Features

**Portfolio Grid:**
- CSS Grid layout (4 columns desktop, responsive down to 1 column mobile)
- 7.5px gap between items
- Hover overlay with category-specific colors:
  - Installations: Blue `rgba(66, 135, 245, 0.68)`
  - Live Acts: Red `rgba(245, 66, 66, 0.68)`
  - Releases: Green `rgba(66, 245, 135, 0.68)`
- Displays work title and category on hover

**Individual Work Pages:**
- Large image display
- Work title and category
- Content/description area
- Navigation: Previous work (← left) | Back to Works (center) | Next work (→ right)

**Active Navigation States:**
- Main nav: 2px solid underline on active page
- Filter buttons: 2px solid underline on active filter
- Both use `border-bottom-color: #333`

### Color Scheme
- Primary text: `#333`
- Secondary text: `#666`
- Light text: `#999`
- Background light: `#f9f9f9`
- Border color: `#e0e0e0`

### Configuration Variables (_config.yml)

**Site Settings:**
- `title` - Site title
- `email` - Contact email
- `description` - Site description
- `url` - Base URL (https://www.j3zz.com)
- `logo` - Path to logo image

**Social Media:**
- `twitter_username`
- `github_username`
- `soundcloud_username`
- `vimeo_username`
- `facebook_username`

### Deployment

Site deploys to GitHub Pages automatically when pushed to the `main` branch. The custom domain www.j3zz.com is configured via the `CNAME` file and GitHub Pages settings.

**Note**: This site uses the `github-pages` gem instead of a specific Jekyll version to ensure compatibility with GitHub Pages infrastructure.

## Content Management

### Adding a New Portfolio Work

1. Create a new file in `_portfolio/` with format: `##-work-name.md` (e.g., `25-new-work.md`)
2. Add front matter:
```yaml
---
layout: work
title: New Work Title
category: installations  # or live-acts, releases
image: /assets/img/work-image.jpg
order: 25  # Higher numbers appear first
---
```
3. Add description content below front matter (optional)
4. Place image in `assets/img/`
5. Restart Jekyll server if needed

### Modifying Page Content

- **Bio**: Edit `bio.markdown`
- **Events**: Edit `events.markdown`
- **Contact**: Edit `contact.markdown`
- **Homepage/Works Grid**: Managed by portfolio collection, edit individual items in `_portfolio/`

### Updating Logo

Change the `logo` path in `_config.yml`:
```yaml
logo: /assets/img/your-logo.png
```
Restart Jekyll server after config changes.

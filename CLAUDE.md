# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll static site using the Minima theme, deployed to GitHub Pages at www.j3zz.com. The site uses the `github-pages` gem for deployment compatibility.

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
- `_config.yml` - Main Jekyll configuration file containing site metadata (title, description, URL, social links) and build settings
- `_posts/` - Blog posts following Jekyll naming convention: `YEAR-MONTH-DAY-title.MARKUP`
- `_site/` - Generated static site (git-ignored, auto-generated on build)
- `.jekyll-cache/` - Build cache (git-ignored)
- `index.markdown` - Homepage using `home` layout
- `about.markdown` - About page using `page` layout
- `404.html` - Custom 404 error page
- `CNAME` - Contains custom domain for GitHub Pages

### Content Creation

Blog posts must:
- Be placed in `_posts/` directory
- Follow naming format: `YYYY-MM-DD-title.markdown`
- Include YAML front matter with at minimum: `layout`, `title`, `date`, `categories`

Pages can be created in the root directory with YAML front matter specifying `layout` and `permalink`.

### Theme and Styling

Uses Minima theme (v2.5). Theme customization requires:
- Creating corresponding files in local directories to override theme defaults
- Sass configuration is in `_config.yml` (currently set to quiet mode)

### Deployment

Site deploys to GitHub Pages automatically when pushed to the `main` branch. The custom domain www.j3zz.com is configured via the `CNAME` file and GitHub Pages settings.

**Note**: This site uses the `github-pages` gem instead of a specific Jekyll version to ensure compatibility with GitHub Pages infrastructure.

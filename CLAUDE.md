# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll static site deployed to GitHub Pages at www.j3zz.com. The site is a portfolio website with a custom design inspired by julienbayle.net, featuring a grid-based portfolio system with filterable works.

**Key Features:**
- Modular layout system with 11 customizable modules (including new description module)
- Centralized metadata architecture
- Dual-description system: `abstract` for grid/print lists, `description` for work detail pages
- Multi-category portfolio support (installations, live-acts, releases, commissions)
- Responsive design with comprehensive print functionality (all pages A4-optimized with QR codes)
- Event management system with work linking
- SEO optimization with structured data, Open Graph tags, and automatic sitemap generation
- Privacy-compliant Google Analytics 4 integration with GDPR cookie consent
- GDPR-compliant cookie consent system for analytics and embedded content

## Quick Start

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

### Run Tests

**⚠️ IMPORTANT: All testing happens LOCALLY. GitHub Actions only builds and deploys - it does NOT run tests!**

**Tests run automatically before EVERY commit:**
```bash
git add .
git commit -m "Your message"  # ← Full tests run here automatically
git push origin main          # ← Push proceeds immediately (tests already passed)
```
The **pre-commit hook** automatically runs the complete test suite (`./test-before-push.sh`) before EVERY commit. This ensures you never commit broken code.

**Commits will be blocked if tests fail.** Fix the errors, then try committing again.

**Optional - Manual testing during development:**
```bash
./test-before-push.sh
```
Run this to test your changes before committing. Useful for catching errors early during development.

**Individual test commands:**
```bash
yamllint .
```
Validates YAML syntax and formatting in all configuration files and workflows. Very fast.

```bash
bundle exec rake test
```
Runs automated tests (html-proofer) to validate links, images, and HTML structure.

```bash
npm run lighthouse
```
Runs Lighthouse CI for performance, accessibility, and SEO validation (requires Chrome/Chromium). Optional but recommended for major releases.

```bash
npm run test:print
```
Runs print tests to validate QR codes, print layouts, and A4 formatting (requires Chrome/Chromium).

**Note**: Print tests may skip locally in WSL due to Chrome availability, but the pre-push hook handles this gracefully.

### Install/Update Dependencies
```bash
bundle install
```
Run after modifying `Gemfile` or when setting up the project for the first time.

```bash
npm install
```
Installs Node.js dependencies for Lighthouse CI testing and Lefthook git hooks.

```bash
bundle update github-pages
```
Updates GitHub Pages and all associated Jekyll dependencies.

### Git Hooks (Lefthook)

This project uses [Lefthook](https://github.com/evilmartians/lefthook) to **enforce local testing** before commits and pushes.

**⚠️ CRITICAL: These hooks are your ONLY safety net!** GitHub Actions does NOT run tests.

**Setup (first time only):**
```bash
npm install
npx lefthook install
```

**What runs automatically and BLOCKS commits if tests fail:**
- **Pre-commit**: Complete test suite via `./test-before-push.sh` on **ALL files** (YAML, build, HTML, print tests - ~30-60 sec)
- **Pre-push**: Informational message only (tests already passed during commit)

**Tests run before EVERY commit** to ensure you never commit broken code. All commits are validated and safe.

**Skipping hooks (use with EXTREME caution):**
```bash
LEFTHOOK=0 git commit -m "message"
# or
git commit --no-verify -m "message"
```

**⚠️ WARNING**: Skipping hooks means committing untested code. Only skip if:
- You already ran `./test-before-push.sh` manually and all tests passed
- You're committing non-code changes (documentation only)
- You know exactly what you're doing

**Manual hook testing:**
```bash
npx lefthook run pre-commit
npx lefthook run pre-push
```

Configuration is in `lefthook.yml`.

## Workflow

**New to the project?** See [Development Workflow](docs/WORKFLOW.md) for complete step-by-step instructions from making changes to deployment with all necessary commands.

**Quick workflow:**
1. Make changes → 2. Preview locally → 3. Commit → 4. Push → 5. Auto-deploy

## Documentation Structure

This project's documentation is organized into topic-specific files for better performance and maintainability:

### 🚀 [Development Workflow](docs/WORKFLOW.md)
**⭐ START HERE** - Complete workflow from making changes to deployment.

**Read this for:**
- Step-by-step workflow with all commands
- Standard workflow (automatic testing with Lefthook)
- Manual testing workflow
- Workflow diagrams and timelines
- Common scenarios and troubleshooting
- Quick command reference

### 📐 [Architecture](docs/architecture.md)
Site structure, navigation system, portfolio configuration, styling, print functionality, SEO, analytics, and deployment details.

**Read this for:**
- Understanding the overall site structure
- Navigation and routing configuration
- Portfolio grid and work page layouts
- Print functionality (A4-optimized layouts with QR codes for all pages)
- SEO system (structured data, Open Graph, sitemap)
- Analytics and cookie consent implementation
- Color scheme and styling conventions
- Deployment to GitHub Pages

### 📝 [Content Management](docs/content-management.md)
Front matter standards, adding portfolio works and events, multi-category support.

**Read this for:**
- Required and optional front matter fields
- Adding new portfolio works
- Creating and linking events
- Multi-category work configuration
- Front matter examples and templates

### 🧩 [Modules Reference](docs/modules-reference.md)
Complete reference for all 11 modular layout components with examples.

**Read this for:**
- Centralized metadata system
- All 11 module types (hero-image, text, description, image-grid, metadata, quote, spacer, linked-events, iframe, split-hero-metadata, split-bandcamp-metadata)
- Module configuration and parameters
- Layout and ordering guidelines
- Working examples

### 🏷️ [Metadata Reference](docs/metadata-reference.md)
Category-specific metadata templates and field documentation.

**Read this for:**
- Installations metadata template
- Live Acts metadata template
- Releases metadata template (with ISRC, UPC, ISWC)
- Collaborations metadata template
- Industry identifier information

### ✅ [Best Practices](docs/best-practices.md)
Workflows, guidelines, and standards for creating and maintaining portfolio works.

**Read this for:**
- Step-by-step workflow for creating new works
- Metadata best practices (DO's and DON'Ts)
- Sections array organization
- Abstract field guidelines
- Multi-category work configuration
- Template works reference
- Consistency maintenance

### 🧪 [Testing](docs/testing.md)
Automated testing system to prevent breaking changes during development.

**Read this for:**
- Running tests locally (html-proofer, Lighthouse CI)
- Understanding CI/CD workflows
- Common test failures and solutions
- Performance, accessibility, and SEO validation
- Configuring test thresholds
- Viewing test reports

### 🎓 [Testing & Deployment Tutorial](docs/TUTORIAL-testing-deployment.md)
**⭐ START HERE** - Step-by-step practical guide for testing and deployment.

**Read this for:**
- Clear separation of local vs GitHub processes
- Complete local testing workflow with examples
- Understanding GitHub Actions automation
- Deployment process explained
- Troubleshooting common issues
- Quick reference commands
- Pre-commit checklist

## Common Tasks

### Adding a New Portfolio Work

1. Create file: `_portfolio/YYYY-MM-DD-work-slug.md` (e.g., `2026-01-01-new-work.md` using the actual release/creation date)
2. Follow the standardized structure from [Best Practices](docs/best-practices.md#creating-new-works---step-by-step)
3. Use category-specific metadata template from [Metadata Reference](docs/metadata-reference.md)
4. Combine modules from [Modules Reference](docs/modules-reference.md)
5. Test locally: `bundle exec jekyll serve`
6. Verify printable page: `/works/`

### Adding a New Event

1. Create file: `_events/YYYY-MM-DD-event-name.md` (e.g., `2025-06-15-festival-performance.md` using the actual event date)
2. Follow event front matter standards from [Content Management](docs/content-management.md#events-_events)
3. Optionally link to a work using `work_id` field
4. Test locally and verify display on `/events/`

### Modifying Site Pages

- **Bio**: Edit `_pages/bio.markdown`
- **Events**: Edit `_pages/events.markdown`
- **Contact**: Edit `_pages/contact.markdown`
- **Homepage/Works Grid**: Edit `_pages/index.markdown` or managed by portfolio collection in `_portfolio/`

All page files are located in the `_pages/` directory.

For detailed information, see [Architecture > Modifying Page Content](docs/architecture.md#modifying-page-content)

### Updating Site Configuration

Edit `_config.yml` for:
- Site metadata (title, description, URL)
- Logo path
- Email addresses (general and booking)
- Social media usernames (bandcamp, soundcloud, youtube, vimeo, facebook, instagram, twitter, linkedin, github)
- SEO configuration (author info, social links, tagline, default image, language)
- Google Analytics 4 measurement ID
- Mailchimp newsletter integration (action URL and bot field)
- Collection settings

**Remember**: Restart Jekyll server after config changes.

See [Architecture > Configuration Variables](docs/architecture.md#configuration-variables-_configyml) for all available settings.

### Configuring Mailchimp Newsletter

The contact page includes a Mailchimp newsletter signup form. To enable it:

1. Log into Mailchimp
2. Go to **Audience** → **Signup forms** → **Embedded forms**
3. Copy the form action URL from `<form action="...">`
4. Copy the bot field name from the hidden field (e.g., `b_XXXXXXXXXX_XXXXXXXXXX`)
5. Update `_config.yml`:
   ```yaml
   mailchimp_action_url: "https://XXXX.usX.list-manage.com/subscribe/post?u=XXXXXX&id=XXXXXX"
   mailchimp_bot_field: "b_XXXXXXXXXX_XXXXXXXXXX"
   ```
6. Restart Jekyll server

If Mailchimp is not configured, the form will show "Newsletter signup coming soon."

### Configuring SEO

The site includes comprehensive SEO optimization powered by the `jekyll-seo-tag` plugin with custom enhancements.

**SEO Features:**
- Automatic meta tags (title, description, keywords)
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data (JSON-LD) for portfolio works as Creative Works
- Canonical URLs
- Automatic sitemap generation (`jekyll-sitemap` plugin)
- robots.txt for search engine crawler control

**Configuration in `_config.yml`:**
```yaml
# Basic site info
title: J3ZZ
description: >-
  French sound artist creating experimental electronic music...

# Author information
author:
  name: J3ZZ
  email: hello@j3zz.com
  twitter: j3zz

# Social profiles for SEO
social:
  name: J3ZZ
  links:
    - https://bandcamp.com/iamj3zz
    - https://soundcloud.com/j3zz
    # ... additional social links

# Additional SEO settings
tagline: "Experimental sound art merging music, generative systems, and immersive installations"
default_image: /assets/img/J3ZZ-logo-black-300px.png
lang: en_US
```

**SEO Implementation:**
- `_includes/seo.html` - Main SEO include with jekyll-seo-tag and custom enhancements
- `robots.txt` - Search engine crawler configuration
- Structured data automatically generated for portfolio works
- Work-specific Open Graph tags (article type, published/modified dates, categories)

**Note**: The site automatically generates a sitemap at `/sitemap.xml` and declares it in `robots.txt`.

### Configuring Google Analytics 4

The site includes privacy-compliant Google Analytics 4 integration that respects GDPR cookie consent preferences.

**To enable Google Analytics:**

1. Create a GA4 property in Google Analytics
2. Copy your Measurement ID (format: `G-XXXXXXXXXX`)
3. Update `_config.yml`:
   ```yaml
   google_analytics: G-XXXXXXXXXX  # Replace with your actual GA4 measurement ID
   ```
4. Restart Jekyll server

**Privacy Features:**
- Analytics only loads after user consent via cookie consent banner
- IP anonymization enabled (`anonymize_ip: true`)
- Secure cookie flags (`SameSite=None;Secure`)
- Respects user's cookie preferences stored in localStorage
- Users can revoke consent at any time via cookie settings button

**Implementation:**
- `_includes/analytics.html` - Privacy-compliant GA4 integration
- Automatically included in default layout
- Listens for `cookieConsentUpdated` events to load/reload analytics

**Note**: If `google_analytics` is not configured in `_config.yml`, no analytics code is loaded.

### Cookie Consent System

The site includes a GDPR-compliant cookie consent system for managing user privacy preferences.

**Cookie Categories:**
1. **Essential cookies** - Always enabled (site functionality, localStorage for preferences)
2. **Analytics cookies** - Google Analytics 4 (optional, requires user consent)
3. **Embedded content cookies** - Third-party embeds like YouTube, Vimeo, Bandcamp (optional, requires user consent)

**User Controls:**
- Cookie consent banner on first visit
- Three options: Accept All, Accept Selected (customize), Reject All
- Cookie settings button (visible after initial consent) to modify preferences anytime
- Preferences stored in browser localStorage

**Implementation:**
- `assets/js/cookie-consent.js` - Cookie consent manager
- UI integrated in default layout (`_layouts/default.html`)
- Preferences stored as JSON: `{analytics: boolean, embedded: boolean, timestamp: ISO8601}`
- Dispatches `cookieConsentUpdated` events for analytics and other scripts

**Customization:**
Cookie banner styling can be customized in `assets/css/style.css` (search for `.cookie-consent-banner`).

## Template Works

Reference these portfolio works for implementation examples:

- **Work 31** (`_portfolio/1900-01-01-complete-template.md`): **⭐ ULTIMATE TEMPLATE** - Comprehensive reference with ALL metadata fields and module types
- **Work 28** (`_portfolio/1900-01-01-modular-example.md`): All standard module types
- **Work 29** (`_portfolio/1900-01-01-split-layout-example.md`): Split layout modules
- **Work 30** (`_portfolio/1900-01-01-centralized-metadata-example.md`): Centralized metadata system

## Testing & Quality Assurance

**⚠️ CRITICAL: All testing happens LOCALLY. GitHub Actions does NOT run tests!**

The site includes comprehensive automated testing that runs **on your machine before pushing**:

**Tests enforced by Lefthook git hooks:**
- ✅ **yamllint** - Validates YAML syntax and formatting (blocks commits)
- ✅ **Jekyll build** - Ensures site builds successfully (blocks pushes)
- ✅ **html-proofer** - Validates HTML, links, images (blocks pushes)
- ✅ **Print tests** - Validates print layouts, QR codes, A4 formatting (blocks pushes)
- ⚠️ **Lighthouse CI** - Tests performance, accessibility, SEO (optional, run with `--full` flag)

**Required workflow:**
1. Make your changes
2. Run `./test-before-push.sh` (or let Lefthook run it automatically on `git push`)
3. Fix any errors
4. Repeat until all tests pass
5. Commit and push (hooks will block if tests fail)

**Getting started:**
- **New to testing?** See [Testing & Deployment Tutorial](docs/TUTORIAL-testing-deployment.md) for step-by-step guidance
- **Need reference info?** See [Testing](docs/testing.md) for detailed configuration and troubleshooting

## Deployment

Site deploys automatically to GitHub Pages when pushed to the `main` branch. Custom domain www.j3zz.com is configured via `CNAME` file.

**Deployment workflow:**
1. Run tests locally (`./test-before-push.sh` or automatic via Lefthook)
2. All tests pass → push to `main` branch
3. GitHub Actions builds the site with Jekyll
4. Deploys to GitHub Pages immediately

**⚠️ Important**: GitHub Actions does NOT run tests - it only builds and deploys. Your local Lefthook hooks are the ONLY quality gate.

**Note**: This site uses the `github-pages` gem for compatibility with GitHub Pages infrastructure.

## Need Help?

- **Architecture questions**: See [Architecture](docs/architecture.md)
- **Adding content**: See [Content Management](docs/content-management.md)
- **Module usage**: See [Modules Reference](docs/modules-reference.md)
- **Metadata fields**: See [Metadata Reference](docs/metadata-reference.md)
- **Best practices**: See [Best Practices](docs/best-practices.md)
- **Testing and CI/CD**: See [Testing](docs/testing.md)

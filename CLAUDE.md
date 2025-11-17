# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll static site deployed to GitHub Pages at www.j3zz.com. The site is a portfolio website with a custom design inspired by julienbayle.net, featuring a grid-based portfolio system with filterable works.

**Key Features:**
- Modular layout system with 10 customizable modules
- Centralized metadata architecture
- Multi-category portfolio support (installations, live-acts, releases, commissions)
- Responsive design with comprehensive print functionality (all pages A4-optimized with QR codes)
- Event management system with work linking

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

**Easiest way - Automated script:**
```bash
./test-before-push.sh
```
Runs all tests automatically (YAML lint, build, HTML validation, print tests). Fix errors, then commit and push.

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
Runs Lighthouse CI for performance, accessibility, and SEO validation (requires Chrome/Chromium).

```bash
npm run test:print
```
Runs print tests to validate QR codes, print layouts, and A4 formatting (requires Chrome/Chromium).

**Note**: All tests run automatically in GitHub Actions on every push/PR. Print tests may skip locally in WSL but will run in CI.

### Install/Update Dependencies
```bash
bundle install
```
Run after modifying `Gemfile` or when setting up the project for the first time.

```bash
npm install
```
Installs Node.js dependencies for Lighthouse CI testing.

```bash
bundle update github-pages
```
Updates GitHub Pages and all associated Jekyll dependencies.

## Documentation Structure

This project's documentation is organized into topic-specific files for better performance and maintainability:

### 📐 [Architecture](docs/architecture.md)
Site structure, navigation system, portfolio configuration, styling, print functionality, and deployment details.

**Read this for:**
- Understanding the overall site structure
- Navigation and routing configuration
- Portfolio grid and work page layouts
- Print functionality (A4-optimized layouts with QR codes for all pages)
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
Complete reference for all 10 modular layout components with examples.

**Read this for:**
- Centralized metadata system
- All 10 module types (hero-image, text, image-grid, metadata, quote, spacer, linked-events, iframe, split-hero-metadata, split-bandcamp-metadata)
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

1. Create file: `_portfolio/##-work-slug.md` (e.g., `31-new-work.md`)
2. Follow the standardized structure from [Best Practices](docs/best-practices.md#creating-new-works---step-by-step)
3. Use category-specific metadata template from [Metadata Reference](docs/metadata-reference.md)
4. Combine modules from [Modules Reference](docs/modules-reference.md)
5. Test locally: `bundle exec jekyll serve`
6. Verify printable page: `/works/`

### Adding a New Event

1. Create file: `_events/event-name.md`
2. Follow event front matter standards from [Content Management](docs/content-management.md#events-_events)
3. Optionally link to a work using `work_id` field
4. Test locally and verify display on `/events/`

### Modifying Site Pages

- **Bio**: Edit `bio.markdown`
- **Events**: Edit `events.markdown`
- **Contact**: Edit `contact.markdown`
- **Homepage/Works Grid**: Managed by portfolio collection in `_portfolio/`

For detailed information, see [Architecture > Modifying Page Content](docs/architecture.md#modifying-page-content)

### Updating Site Configuration

Edit `_config.yml` for:
- Site metadata (title, description, URL)
- Logo path
- Email addresses (general and booking)
- Social media usernames (bandcamp, soundcloud, youtube, vimeo, facebook, instagram, twitter, linkedin, github)
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

## Template Works

Reference these portfolio works for implementation examples:

- **Work 31** (`_portfolio/31-complete-template.md`): **⭐ ULTIMATE TEMPLATE** - Comprehensive reference with ALL metadata fields and module types
- **Work 28** (`_portfolio/28-modular-example.md`): All standard module types
- **Work 29** (`_portfolio/29-split-layout-example.md`): Split layout modules
- **Work 30** (`_portfolio/30-centralized-metadata-example.md`): Centralized metadata system

## Testing & Quality Assurance

The site includes comprehensive automated testing:

**Tests run automatically on every push/PR via GitHub Actions:**
- ✅ **yamllint** - Validates YAML syntax and formatting
- ✅ **html-proofer** - Validates HTML, links, images
- ✅ **Lighthouse CI** - Tests performance, accessibility, SEO
- ✅ **Print tests** - Validates print layouts, QR codes, A4 formatting

**Deployment is blocked if tests fail**, ensuring only working code goes live.

**Getting started:**
- **New to testing?** See [Testing & Deployment Tutorial](docs/TUTORIAL-testing-deployment.md) for step-by-step guidance
- **Need reference info?** See [Testing](docs/testing.md) for detailed configuration and troubleshooting

## Deployment

Site deploys automatically to GitHub Pages when pushed to the `main` branch. Custom domain www.j3zz.com is configured via `CNAME` file.

**Deployment workflow:**
1. Push to `main` branch
2. GitHub Actions validates YAML files with yamllint
3. Builds the site with Jekyll
4. Runs html-proofer tests
5. Runs Lighthouse CI audits
6. If all tests pass → deploys to GitHub Pages
7. If any test fails → deployment blocked

**Note**: This site uses the `github-pages` gem for compatibility with GitHub Pages infrastructure.

## Need Help?

- **Architecture questions**: See [Architecture](docs/architecture.md)
- **Adding content**: See [Content Management](docs/content-management.md)
- **Module usage**: See [Modules Reference](docs/modules-reference.md)
- **Metadata fields**: See [Metadata Reference](docs/metadata-reference.md)
- **Best practices**: See [Best Practices](docs/best-practices.md)
- **Testing and CI/CD**: See [Testing](docs/testing.md)

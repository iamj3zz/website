# J3ZZ Portfolio Website

Official portfolio website for J3ZZ, featuring a modular grid-based design system with comprehensive testing and automated deployment.

**Live Site:** [www.j3zz.com](https://www.j3zz.com)

---

## Features

- **Modular Layout System** - 11 customizable content modules
- **Multi-Category Portfolio** - Installations, Live Acts, Releases, Collaborations
- **Responsive Design** - Mobile-first, tablet, and desktop optimized
- **Print Functionality** - A4-optimized layouts with QR codes for all pages
- **Event Management** - Link events to portfolio works
- **SEO Optimized** - Structured data, Open Graph tags, automatic sitemap generation
- **Privacy-Compliant Analytics** - Google Analytics 4 with GDPR cookie consent
- **Cookie Consent System** - GDPR-compliant preference management
- **Automated Testing** - html-proofer + Lighthouse CI
- **CI/CD Pipeline** - Automatic deployment via GitHub Actions
- **Performance Optimized** - Fast load times, accessibility compliant

---

## Quick Start

### Prerequisites

- Ruby 2.7+
- Bundler
- Node.js 14+ (for testing)
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/website.git
cd website

# Install dependencies
bundle install
npm install  # Automatically installs Lefthook git hooks via prepare script

# Start development server
bundle exec jekyll serve
```

Visit http://localhost:4000

**Note:** Git hooks are automatically installed via Lefthook during `npm install`. This ensures code quality by running tests before commits/pushes.

### Development Workflow

```bash
# Start dev server with live reload
bundle exec jekyll serve

# Build for production
bundle exec jekyll build

# Run tests
bundle exec rake test

# Run performance tests (requires Chrome)
npm run lighthouse

# Skip git hooks when needed
LEFTHOOK=0 git commit -m "message"
# or
git commit --no-verify -m "message"
```

---

## Documentation

Comprehensive documentation is available in the `/docs` folder:

### 📚 Core Documentation

- **[CLAUDE.md](CLAUDE.md)** - Project overview and quick reference
- **[Development Workflow](docs/development-workflow.md)** - Complete guide to compile, test, and deploy

### 📐 Architecture & Design

- **[Architecture](docs/architecture.md)** - Site structure, navigation, styling, print functionality
- **[Modules Reference](docs/modules-reference.md)** - All 10 modular layout components with examples

### 📝 Content Management

- **[Content Management](docs/content-management.md)** - Adding portfolio works and events
- **[Metadata Reference](docs/metadata-reference.md)** - Category-specific metadata templates
- **[Best Practices](docs/best-practices.md)** - Workflows and guidelines

### 🧪 Testing & Quality

- **[Testing](docs/testing.md)** - Automated testing, CI/CD, troubleshooting

---

## Testing

The site includes comprehensive automated testing to prevent breaking changes:

### Local Testing

```bash
# Quick test (HTML, links, images)
bundle exec rake test

# Full test (includes external links)
bundle exec rake test_external

# Performance/accessibility/SEO audit
npm run lighthouse

# Run all tests
npm run test:all
```

### Continuous Integration

Tests run automatically on every push and pull request via GitHub Actions:

- ✅ HTML validation
- ✅ Link checking (internal and external)
- ✅ Image verification
- ✅ Performance metrics
- ✅ Accessibility compliance (WCAG 2.1)
- ✅ SEO validation

**Deployment is blocked if any test fails.**

---

## Deployment

### Automatic Deployment

The site deploys automatically to GitHub Pages when you push to the `main` branch:

```bash
# Make changes and test locally
bundle exec rake test

# Commit and push
git add .
git commit -m "Your changes"
git push origin main
```

**Deployment Workflow:**
1. GitHub Actions builds the site
2. Runs html-proofer tests
3. Runs Lighthouse CI audits
4. If all tests pass → deploys to GitHub Pages
5. If any test fails → deployment blocked

### View Results

- **Live Site:** www.j3zz.com
- **GitHub Actions:** See the Actions tab for build logs
- **Lighthouse Reports:** Download artifacts from GitHub Actions runs

---

## Project Structure

```
website/
├── _config.yml              # Site configuration
├── robots.txt               # SEO crawler configuration
├── _portfolio/              # Portfolio works (31+ examples)
│   ├── 01-lorem-ipsum.md
│   ├── 28-modular-example.md
│   ├── 29-split-layout-example.md
│   ├── 30-centralized-metadata-example.md
│   └── 31-complete-template.md  # ⭐ Complete reference
├── _events/                 # Events collection
├── _layouts/                # Page templates
├── _includes/               # Reusable components
│   ├── seo.html            # SEO optimization with structured data
│   ├── analytics.html      # Privacy-compliant Google Analytics 4
│   └── work-modules/       # 11 modular layout components
├── _sass/                   # SASS stylesheets
├── assets/                  # Images, CSS, JavaScript
│   └── js/
│       ├── cookie-consent.js      # GDPR cookie consent manager
│       ├── portfolio.js           # Portfolio filtering
│       └── ...                    # Other JavaScript files
├── docs/                    # Documentation
│   ├── architecture.md
│   ├── best-practices.md
│   ├── content-management.md
│   ├── WORKFLOW.md
│   ├── metadata-reference.md
│   ├── modules-reference.md
│   └── testing.md
├── .github/workflows/       # CI/CD pipelines
│   └── jekyll.yml          # Build and deploy
├── Gemfile                  # Ruby dependencies
├── package.json             # Node.js dependencies
├── Rakefile                 # Test tasks
└── lighthouserc.json        # Lighthouse configuration
```

---

## Technology Stack

### Core

- **Jekyll** - Static site generator
- **GitHub Pages** - Hosting and deployment
- **Liquid** - Templating language
- **SASS** - CSS preprocessing

### Testing & Quality

- **html-proofer** - HTML/link validation
- **Lighthouse CI** - Performance/accessibility/SEO audits
- **Lefthook** - Git hooks for automated testing
- **GitHub Actions** - CI/CD automation

### Dependencies

- **Ruby Gems** - github-pages, jekyll-feed, jekyll-seo-tag, jekyll-sitemap, jekyll-last-modified-at, html-proofer, rake
- **npm Packages** - @lhci/cli, @evilmartians/lefthook, puppeteer

---

## Development

### Adding a New Portfolio Work

```bash
# 1. Create new file
touch _portfolio/32-new-work.md

# 2. Use template from work 31 as reference
# See: _portfolio/31-complete-template.md

# 3. Add front matter and content modules
# See: docs/best-practices.md

# 4. Test locally
bundle exec jekyll serve
bundle exec rake test

# 5. Commit and push
git add _portfolio/32-new-work.md
git commit -m "Add new work: New Work Title"
git push origin main
```

### Adding a New Event

```bash
# 1. Create new file (using event date YYYY-MM-DD)
touch _events/2025-06-15-event-name.md

# 2. Add front matter (see docs/content-management.md)
# 3. Test and deploy
```

---

## Configuration

### Site Settings

Edit `_config.yml` for:
- Site metadata (title, description, URL)
- SEO configuration (author info, social links, tagline, default image, language)
- Google Analytics 4 measurement ID
- Social media usernames
- Email addresses
- Logo path
- Mailchimp newsletter integration

**Remember:** Restart Jekyll server after changing `_config.yml`

### Optional Features

**SEO Optimization:**
- Pre-configured with jekyll-seo-tag and jekyll-sitemap plugins
- Automatic sitemap generation at `/sitemap.xml`
- Structured data (JSON-LD) for portfolio works
- Open Graph tags for social media sharing
- Customize author and social settings in `_config.yml`

**Google Analytics 4:**
- Privacy-compliant implementation with cookie consent
- Set `google_analytics: G-XXXXXXXXXX` in `_config.yml`
- IP anonymization enabled
- Respects GDPR cookie preferences

**Cookie Consent:**
- GDPR-compliant cookie consent system
- Automatic banner on first visit
- User preference management (analytics & embedded content)
- No configuration needed - works automatically

See [CLAUDE.md](CLAUDE.md#optional-configuration) for detailed setup instructions.

### Test Configuration

**html-proofer:** Edit `Rakefile`
- Adjust test thresholds
- Ignore specific URLs
- Enable/disable external link checking

**Lighthouse CI:** Edit `lighthouserc.json`
- Set performance/accessibility/SEO thresholds
- Add/remove pages to test
- Configure assertion levels

---

## Common Tasks

### Start Development Server
```bash
bundle exec jekyll serve
# Visit: http://localhost:4000
```

### Build Site
```bash
bundle exec jekyll build
# Output: _site/
```

### Run Tests
```bash
bundle exec rake test           # Quick test
bundle exec rake test_external  # Full test with external links
npm run lighthouse              # Performance/accessibility
```

### Clean Build
```bash
bundle exec rake clean
```

### Update Dependencies
```bash
bundle update github-pages      # Update Jekyll and GitHub Pages
npm update                      # Update Lighthouse CI
```

---

## Troubleshooting

### Common Issues

**Port 4000 already in use:**
```bash
lsof -ti:4000 | xargs kill -9
bundle exec jekyll serve
```

**Bundle install fails:**
```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

**Tests failing:**
- Check `docs/testing.md` for common test failures
- Review GitHub Actions logs
- Run tests locally: `bundle exec rake test`

**Site not updating after push:**
- Check GitHub Actions tab for failures
- Hard refresh browser (Ctrl+Shift+R)
- Verify CNAME file exists

### Getting Help

1. Check documentation in `/docs` folder
2. Review [Development Workflow](docs/development-workflow.md)
3. See [Troubleshooting section](docs/development-workflow.md#troubleshooting)
4. Check GitHub Actions logs for CI/CD issues

---

## Template Works

Reference these portfolio works for implementation examples:

- **Work 31** (`_portfolio/31-complete-template.md`) - ⭐ **ULTIMATE TEMPLATE**
  - All metadata fields
  - All module types
  - Multi-category example
  - Complete reference

- **Work 28** (`_portfolio/28-modular-example.md`) - Standard modules
- **Work 29** (`_portfolio/29-split-layout-example.md`) - Split layouts
- **Work 30** (`_portfolio/30-centralized-metadata-example.md`) - Centralized metadata

---

## Contributing

### Workflow

1. Create a feature branch
2. Make changes
3. Test locally: `bundle exec rake test`
4. Commit with descriptive message
5. Push and create pull request
6. CI tests run automatically
7. Merge when tests pass

### Code Quality

All code must:
- Pass html-proofer validation
- Meet Lighthouse performance thresholds (85%+)
- Meet Lighthouse accessibility thresholds (85%+)
- Follow existing code style
- Include documentation updates if needed

---

## License

Copyright © 2024 J3ZZ. All rights reserved.

---

## Resources

- **Live Site:** [www.j3zz.com](https://www.j3zz.com)
- **Jekyll Docs:** [jekyllrb.com/docs](https://jekyllrb.com/docs/)
- **GitHub Pages:** [docs.github.com/pages](https://docs.github.com/en/pages)
- **Lighthouse:** [github.com/GoogleChrome/lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci)
- **html-proofer:** [github.com/gjtorikian/html-proofer](https://github.com/gjtorikian/html-proofer)

---

## Quick Reference

```bash
# Development
bundle exec jekyll serve              # Start dev server
bundle exec jekyll build              # Build for production

# Testing
bundle exec rake test                 # Quick test
npm run lighthouse                    # Performance test
npm run test:all                      # All tests

# Deployment
git push origin main                  # Auto-deploy to GitHub Pages

# Utilities
bundle exec rake -T                   # List all tasks
bundle exec rake clean                # Clean build directory
```

For detailed documentation, see [CLAUDE.md](CLAUDE.md) and the `/docs` folder.

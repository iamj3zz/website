# Development Workflow

Complete guide for compiling, testing, and deploying the J3ZZ portfolio website.

## Table of Contents

1. [Initial Setup](#initial-setup)
2. [Development Workflow](#development-workflow-1)
3. [Testing](#testing)
4. [Deployment](#deployment)
5. [Troubleshooting](#troubleshooting)

---

## Initial Setup

### Prerequisites

**Required:**
- **Ruby** (version 2.7 or higher) - For Jekyll
- **Bundler** - Ruby dependency manager
- **Git** - Version control
- **Node.js** (version 14 or higher) - For Lighthouse CI (optional for local dev)
- **npm** - Node package manager

**Check installed versions:**
```bash
ruby --version
bundler --version
git --version
node --version
npm --version
```

### First-Time Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/website.git
cd website
```

#### 2. Install Ruby Dependencies
```bash
bundle install
```

This installs:
- Jekyll (static site generator)
- GitHub Pages gem
- html-proofer (testing tool)
- All other Ruby dependencies

**Troubleshooting:**
```bash
# If you get permission errors, configure Bundler to install locally:
bundle config set --local path 'vendor/bundle'
bundle install
```

#### 3. Install Node.js Dependencies
```bash
npm install
```

This installs:
- Lighthouse CI (performance/accessibility/SEO testing)

**Output:**
```
added 342 packages in 7s
```

#### 4. Verify Installation
```bash
# Check Jekyll
bundle exec jekyll --version

# Check html-proofer (via Rake)
bundle exec rake -T

# Check Lighthouse CI
npm run lighthouse --version
```

---

## Development Workflow

### Starting Development Server

```bash
bundle exec jekyll serve
```

**What this does:**
- Builds the site
- Starts local server at http://localhost:4000
- Watches for file changes
- Auto-rebuilds on changes

**Output:**
```
Server address: http://127.0.0.1:4000/
Server running... press ctrl-c to stop.
```

**Open in browser:** http://localhost:4000

### Making Changes

#### 1. Edit Files
Make changes to:
- Portfolio works (`_portfolio/*.md`)
- Pages (`*.markdown`, `*.html`)
- Styles (`assets/css/*.scss`, `_sass/*.scss`)
- Layouts (`_layouts/*.html`)
- Includes (`_includes/*.html`)

#### 2. See Changes
The server auto-rebuilds when you save files. Refresh your browser to see changes.

**Exception:** Changes to `_config.yml` require restarting the server:
```bash
# Stop server: Ctrl+C
# Restart:
bundle exec jekyll serve
```

#### 3. Build for Production
```bash
bundle exec jekyll build
```

Builds the site with production settings:
- Minified CSS/JS
- Optimized for performance
- Output to `_site/` directory

**Use this before deploying or testing.**

### Development Tips

**Fast iteration:**
```bash
# Live reload with drafts
bundle exec jekyll serve --drafts --livereload
```

**Build only (no server):**
```bash
bundle exec jekyll build
```

**Clean and rebuild:**
```bash
bundle exec rake clean
bundle exec jekyll build
```

**Check build speed:**
```bash
bundle exec jekyll build --profile
```

---

## Testing

The site has two levels of testing:
1. **html-proofer** - Fast, checks links/images/HTML
2. **Lighthouse CI** - Slower, checks performance/accessibility/SEO

### Quick Test (Recommended for Local Dev)

```bash
bundle exec rake test
```

**What it does:**
1. Builds the site
2. Validates HTML structure
3. Checks internal links work
4. Verifies images exist
5. Checks scripts/CSS load

**Takes:** ~5-10 seconds

**Example output:**
```
Building Jekyll site...
Testing with html-proofer...
Running 3 checks (Images, Links, Scripts) in ["./_site"] on *.html files...
Checking 60 internal links
Ran on 44 files!
✓ All tests passed!
```

### Full Test (Including External Links)

```bash
bundle exec rake test_external
```

**What it does:**
- Everything from quick test
- Plus: checks external URLs are reachable
- Caches external checks for 24 hours

**Takes:** ~30-60 seconds (first run)

**Use when:**
- Before major deployment
- Checking external embed links (YouTube, Bandcamp, etc.)
- Verifying external documentation links

### Performance/Accessibility Test

```bash
npm run lighthouse
```

**What it does:**
1. Runs Lighthouse audits on key pages
2. Tests performance metrics
3. Validates accessibility (WCAG compliance)
4. Checks SEO optimization
5. Verifies best practices

**Takes:** ~60-120 seconds

**Requires:** Chrome or Chromium browser installed

**Output:** Detailed HTML reports in `.lighthouseci/` directory

**Pages tested:**
- Homepage
- Bio
- Events
- Contact
- Sample work pages

**Scores:**
```
Performance:    89/100 ✓
Accessibility:  87/100 ✓
SEO:           92/100 ✓
Best Practices: 95/100 ✓
```

### All Tests

```bash
npm run test:all
```

Runs both html-proofer and Lighthouse CI sequentially.

**Takes:** ~2-3 minutes

**Use before:**
- Creating pull requests
- Major deployments
- After significant changes

### Individual Rake Tasks

```bash
# List all available tasks
bundle exec rake -T

# Build only
bundle exec rake build

# Clean build directory
bundle exec rake clean

# Default task (runs test)
bundle exec rake
```

---

## Deployment

### Automatic Deployment (Recommended)

The site deploys automatically via GitHub Actions when you push to the `main` branch.

#### Workflow

```bash
# 1. Make changes locally
# 2. Test locally
bundle exec rake test

# 3. Commit changes
git add .
git commit -m "Description of changes"

# 4. Push to GitHub
git push origin main
```

**What happens next:**

1. **GitHub Actions triggers** (`.github/workflows/jekyll.yml`)
2. **Build** - Jekyll builds the site
3. **Test** - html-proofer validates content
4. **Audit** - Lighthouse CI checks quality
5. **Deploy** - If all tests pass, deploys to GitHub Pages
6. **Block** - If any test fails, deployment is prevented

#### Viewing GitHub Actions

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. See the workflow run in progress
4. Click on a run to see detailed logs

**Status indicators:**
- 🟢 Green checkmark = Success
- 🔴 Red X = Failed
- 🟡 Yellow dot = In progress

#### Viewing Lighthouse Reports

After a GitHub Actions run:

1. Click on the workflow run
2. Scroll to **Artifacts** section at the bottom
3. Download `lighthouse-deployment-results`
4. Extract the ZIP file
5. Open the HTML files in a browser

### Manual Deployment

If you need to deploy manually (not recommended):

```bash
# 1. Build the site
bundle exec jekyll build

# 2. The _site/ directory contains the static site
# 3. Upload _site/ contents to your web server
```

**Note:** GitHub Pages deployment is automatic and preferred.

### Deployment Checklist

Before deploying important changes:

- [ ] Test locally: `bundle exec rake test`
- [ ] Run Lighthouse (if available): `npm run lighthouse`
- [ ] Check all pages render correctly
- [ ] Verify print layouts (browser print preview)
- [ ] Test on mobile (browser dev tools)
- [ ] Review git diff: `git diff`
- [ ] Write descriptive commit message
- [ ] Push to GitHub
- [ ] Monitor GitHub Actions
- [ ] Verify deployment at www.j3zz.com
- [ ] Check Lighthouse artifacts if needed

---

## Troubleshooting

### Build Errors

#### "Could not find gem 'github-pages'"
```bash
# Solution: Install dependencies
bundle install
```

#### "Permission denied"
```bash
# Solution: Configure Bundler to install locally
bundle config set --local path 'vendor/bundle'
bundle install
```

#### "Bundler version mismatch"
```bash
# Solution: Update Bundler
gem install bundler
bundle update --bundler
```

### Testing Errors

#### html-proofer Failures

**"internally linking to /works/foo/, which does not exist"**

**Cause:** Broken internal link

**Solution:**
1. Check the file exists in `_portfolio/`
2. Verify the permalink in front matter
3. Update or remove the broken link

**"image has no src or srcset attribute"**

**Cause:** Image tag missing src

**Solution:**
```html
<!-- Bad -->
<img alt="description">

<!-- Good -->
<img src="/assets/images/photo.jpg" alt="description">
```

**"External link failed"**

**Cause:** External URL is down or changed

**Solution:**
- Verify the URL in a browser
- Update the URL if it changed
- Remove the link if the resource is gone
- Or add to ignore list in `Rakefile` if temporary

#### Lighthouse Failures

**"Performance score below threshold"**

**Common causes:**
- Large unoptimized images
- Render-blocking CSS/JS
- No caching headers

**Solutions:**
- Optimize images (compress, resize, use WebP)
- Minify CSS/JavaScript
- Use lazy loading for images
- Enable caching in hosting settings

**"Accessibility errors"**

**Common causes:**
- Missing alt text on images
- Poor color contrast
- Missing form labels
- No ARIA attributes

**Solutions:**
- Add descriptive alt text to all images
- Increase text/background contrast (use contrast checker)
- Add labels to all form inputs
- Use semantic HTML (nav, main, article, etc.)

**"SEO issues"**

**Common causes:**
- Missing meta description
- Duplicate or missing title tags
- No heading hierarchy

**Solutions:**
- Add meta description to page front matter
- Ensure unique titles for all pages
- Use proper heading structure (h1 → h2 → h3)

### Server Errors

#### "Port 4000 already in use"
```bash
# Solution 1: Kill the process using port 4000
lsof -ti:4000 | xargs kill -9

# Solution 2: Use a different port
bundle exec jekyll serve --port 4001
```

#### "Cannot find Chrome for Lighthouse"
```bash
# Lighthouse requires Chrome/Chromium
# In WSL, this may not work locally
# Tests will run automatically in GitHub Actions (which has Chrome)

# To install Chrome on Linux:
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
```

### Git/Deployment Errors

#### "GitHub Actions failing"

1. Go to Actions tab on GitHub
2. Click the failed run
3. Read the error logs
4. Common issues:
   - Test failures (fix locally first)
   - Syntax errors in YAML files
   - Missing dependencies

#### "Site not updating after push"

**Possible causes:**
- GitHub Actions workflow failed (check Actions tab)
- Caching issue (hard refresh: Ctrl+Shift+R)
- Custom domain DNS not configured

**Solutions:**
1. Check GitHub Actions logs
2. Clear browser cache
3. Verify CNAME file exists
4. Check GitHub Pages settings

### Performance Tips

**Speed up builds:**
```bash
# Exclude drafts and future posts
bundle exec jekyll build --no-future

# Use incremental builds (experimental)
bundle exec jekyll build --incremental
```

**Speed up tests:**
```bash
# Skip external link checking
bundle exec rake test

# Only test specific files (modify Rakefile)
```

---

## Additional Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [html-proofer GitHub](https://github.com/gjtorikian/html-proofer)
- [Lighthouse CI Documentation](https://github.com/GoogleChrome/lighthouse-ci)
- [Testing Documentation](testing.md)
- [Architecture Documentation](architecture.md)

---

## Quick Reference

### Common Commands

```bash
# Development
bundle exec jekyll serve              # Start dev server
bundle exec jekyll build              # Build production site

# Testing
bundle exec rake test                 # Quick test (internal only)
bundle exec rake test_external        # Full test (includes external)
npm run lighthouse                    # Performance/accessibility test
npm run test:all                      # All tests

# Utilities
bundle exec rake clean                # Clean build directory
bundle exec rake -T                   # List all Rake tasks
git status                           # Check git status
git diff                             # See changes

# Deployment
git add .                            # Stage changes
git commit -m "message"              # Commit changes
git push origin main                 # Deploy to GitHub Pages
```

### File Structure

```
website/
├── _config.yml              # Site configuration
├── _portfolio/              # Portfolio works
├── _events/                 # Events
├── _layouts/                # Page layouts
├── _includes/               # Reusable components
├── _sass/                   # SASS partials
├── assets/                  # Images, CSS, JS
├── docs/                    # Documentation
├── .github/workflows/       # CI/CD workflows
├── Gemfile                  # Ruby dependencies
├── package.json             # Node.js dependencies
├── Rakefile                 # Test tasks
└── lighthouserc.json        # Lighthouse config
```

### Support

For questions or issues:
1. Check documentation in `docs/` folder
2. Review [CLAUDE.md](../CLAUDE.md) for project overview
3. Check GitHub Issues
4. Review GitHub Actions logs for deployment issues

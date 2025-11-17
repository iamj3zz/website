# Testing

This document explains the automated testing system for the website to prevent breaking changes.

## Overview

The site uses a comprehensive testing suite to ensure quality:

### **yamllint** validates:
- ✓ YAML syntax and structure
- ✓ Consistent formatting and indentation
- ✓ Configuration files (_config.yml, GitHub Actions workflows)
- ✓ Front matter in content files

### **html-proofer** validates:
- ✓ HTML syntax and structure
- ✓ Internal links (all links between pages work)
- ✓ Images exist and have proper attributes
- ✓ JavaScript and CSS files load correctly
- ✓ No broken references

### **Lighthouse CI** validates:
- ✓ Performance (page load speed, optimization)
- ✓ Accessibility (WCAG compliance, color contrast)
- ✓ SEO (meta tags, structured data)
- ✓ Best practices (HTTPS, console errors)
- ✓ Progressive Web App capabilities (optional)

## Running Tests Locally

### YAML Linting
```bash
yamllint .
```
This is **very fast** and checks:
- YAML syntax errors in all `.yml` and `.yaml` files
- Configuration files (_config.yml, GitHub Actions workflows)
- Consistent indentation and formatting
- Line length limits (max 150 characters)

**Note:** Automatically ignores `node_modules/`, `vendor/`, `_site/`, and `.bundle/` directories.

### Quick Test (Internal Links Only)
```bash
bundle exec rake test
```
This is **fast** and checks:
- Internal links and anchors
- Images exist
- Scripts are valid
- HTML structure
- Ignores external links

### Full Test (Including External Links)
```bash
bundle exec rake test_external
```
This is **slower** but also checks:
- All external URLs are reachable
- Caches results for 24 hours for faster subsequent runs

### Lighthouse CI Tests
```bash
npm run lighthouse
```
**Note:** Requires Chrome/Chromium to be installed. In WSL environments, this may not work locally. The primary value is in **GitHub Actions** (CI/CD) where Chrome is pre-installed.

Tests:
- Performance metrics (First Contentful Paint, Speed Index, etc.)
- Accessibility (color contrast, alt text, ARIA labels)
- SEO (meta descriptions, titles, structured data)
- Best practices (HTTPS, console errors)

### All Tests Together
```bash
npm run test:all
```
Runs both html-proofer and Lighthouse CI sequentially.

### Other Commands
```bash
# Just build the site
bundle exec rake build

# Clean the build directory
bundle exec rake clean

# Default task (runs test)
bundle exec rake
```

## Continuous Integration (CI)

Tests run automatically on:
- **Every push to main** - via GitHub Actions
- **Every pull request** - prevents merging broken code
- **Before deployment** - ensures only working sites go live

### GitHub Actions Workflows

Both workflows run the complete test suite:

1. **`.github/workflows/test.yml`** - Test workflow for PRs and pushes
   - Lints all YAML files with yamllint
   - Builds Jekyll site
   - Runs html-proofer (links, images, HTML validation)
   - Runs Lighthouse CI (performance, accessibility, SEO)
   - Uploads Lighthouse reports as artifacts

2. **`.github/workflows/jekyll.yml`** - Build and deployment workflow
   - Lints all YAML files with yamllint
   - Builds Jekyll site for production
   - Runs html-proofer
   - Runs Lighthouse CI
   - Uploads Lighthouse reports
   - Deploys to GitHub Pages (only if all tests pass)

**If any test fails, deployment is automatically blocked.**

### Viewing Lighthouse Reports

After each CI run:
1. Go to the GitHub Actions run
2. Scroll to "Artifacts" section
3. Download `lighthouse-results` or `lighthouse-deployment-results`
4. Open the HTML reports locally to see detailed scores and recommendations

## Common Issues and Solutions

### yamllint Issues

#### YAML Syntax Errors
```
syntax error: expected <block end>, but found '<block mapping start>'
```
**Solution**: Check indentation - YAML requires consistent 2-space indentation. Ensure no tabs are used.

#### Line Too Long
```
line too long (150 > 120 characters)
```
**Solution**:
- Increase `line-length.max` in `.yamllint` if needed
- Break long strings across multiple lines
- For URLs, consider increasing the limit to 150-200

#### Wrong Indentation
```
wrong indentation: expected 4 but found 2
```
**Solution**: Ensure consistent 2-space indentation. Check parent element indentation level.

#### Trailing Spaces
```
trailing spaces
```
**Solution**: Remove whitespace at end of lines. Most editors can do this automatically on save.

### html-proofer Issues

#### Images without src/srcset
```
image has no src or srcset attribute
```
**Solution**: Ensure all `<img>` tags have a `src` attribute or use `srcset` for responsive images.

#### Broken internal links
```
internally linking to /works/foo/, which does not exist
```
**Solution**:
- Check the file exists in `_portfolio/`
- Verify the `permalink` in front matter
- Update or remove the broken link

#### Missing files
```
internally linking to /assets/cv.pdf, which does not exist
```
**Solution**:
- Add the missing file to the assets directory
- Remove the reference if the file is not needed
- Update the link to point to the correct location

### Lighthouse CI Issues

#### Low Performance Score
```
Performance: 72/100 (required: 85/100)
```
**Common causes:**
- Images too large (not optimized)
- Render-blocking CSS/JavaScript
- Slow server response time

**Solutions:**
- Optimize and compress images
- Use WebP format for images
- Minify CSS and JavaScript
- Use lazy loading for images

#### Accessibility Violations
```
Categories:accessibility: 78/100 (required: 85/100)
```
**Common causes:**
- Missing alt text on images
- Insufficient color contrast
- Missing form labels
- No ARIA attributes on interactive elements

**Solutions:**
- Add descriptive alt text to all images
- Increase text/background color contrast
- Add proper labels to form inputs
- Use semantic HTML and ARIA labels

#### SEO Issues
```
Document does not have a meta description
```
**Solution:**
- Add meta description to page front matter
- Ensure all pages have unique, descriptive titles
- Use semantic heading hierarchy (h1, h2, h3)

#### Color Contrast
```
Background and foreground colors do not have sufficient contrast ratio
```
**Solution:**
- Use tools like WebAIM Contrast Checker
- Minimum ratio: 4.5:1 for normal text, 3:1 for large text
- Update colors in your SCSS files

## Configuring Tests

### yamllint Configuration

Edit `.yamllint` to customize YAML linting behavior:

```yaml
---
extends: default

ignore: |
  node_modules/
  vendor/
  _site/
  .bundle/

rules:
  line-length:
    max: 150              # Maximum line length
    level: warning        # Can be: warning, error, or disable

  indentation:
    spaces: 2             # Number of spaces for indentation
    indent-sequences: true

  truthy:
    allowed-values: ['true', 'false', 'yes', 'no', 'on', 'off']

  document-start: disable # Don't require --- at start
```

**Key settings:**
- `ignore`: Directories/patterns to skip
- `line-length.max`: Maximum characters per line
- `indentation.spaces`: Spaces per indent level
- `truthy.allowed-values`: Accepted boolean values (for Jekyll compatibility)
- `document-start`: Whether to require `---` at file start

### html-proofer Configuration

Edit `Rakefile` to customize test behavior:

```ruby
options = {
  :disable_external => true,     # Set to false to check external links
  :ignore_missing_alt => true,   # Set to false to enforce alt tags
  :check_html => true,            # Validate HTML structure
  :enforce_https => false,        # Set to true to require HTTPS
  # Add URLs to ignore:
  :ignore_urls => [
    /localhost/,
    /example\.com/
  ]
}
```

### Lighthouse CI Configuration

Edit `lighthouserc.json` to customize Lighthouse behavior:

```json
{
  "ci": {
    "collect": {
      "numberOfRuns": 3,
      "url": [
        "http://localhost/index.html",
        "http://localhost/bio/index.html"
      ]
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", {"minScore": 0.85}],
        "categories:accessibility": ["error", {"minScore": 0.85}],
        "categories:seo": ["warn", {"minScore": 0.85}]
      }
    }
  }
}
```

**Key settings:**
- `numberOfRuns`: How many times to test each page (median score used)
- `url`: Array of pages to test
- `minScore`: Minimum score (0.0 to 1.0) required to pass
- `"error"`: Fails build if score below threshold
- `"warn"`: Shows warning but doesn't fail build
- `"off"`: Disables specific check

## Best Practices

1. **Run YAML linting before committing**
   ```bash
   yamllint .
   ```
   Fast check for YAML syntax errors in config files and workflows.

2. **Run tests before committing**
   ```bash
   bundle exec rake test
   ```

3. **Fix issues immediately** - Don't accumulate broken links

4. **Check external links periodically**
   ```bash
   bundle exec rake test_external
   ```

5. **Review CI failures** - If GitHub Actions fails, check the logs for details

6. **Template/Example works** - May intentionally have broken links for demonstration purposes. Add them to `ignore_urls` in Rakefile if needed.

## Ignoring Specific Issues

To ignore specific files or URLs, edit `Rakefile`:

```ruby
# Ignore specific URLs
:ignore_urls => [
  %r{/works/template-example/}  # Ignore template works
]

# Ignore specific files
:ignore_files => [
  /templates\//
]
```

## Additional Testing Options (Future)

If you need even more comprehensive testing, consider:

- **Pa11y/axe** - Deeper accessibility testing (more comprehensive than Lighthouse)
  - Full WCAG 2.1 AA/AAA compliance checking
  - More detailed accessibility reports

- **Visual regression testing** with BackstopJS or Percy
  - Screenshot comparison to detect unintended visual changes
  - Useful when CSS/design is finalized
  - Catches layout bugs automatically

Current testing suite (yamllint + html-proofer + Lighthouse CI) covers:
- ✅ YAML configuration validation
- ✅ Links and HTML validation
- ✅ Performance optimization
- ✅ Basic accessibility (WCAG subset)
- ✅ SEO best practices
- ✅ General web quality

This is comprehensive for most portfolio websites!

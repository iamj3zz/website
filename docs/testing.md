# Testing

This document explains the automated testing system for the website to prevent breaking changes.

**⚠️ CRITICAL: All testing happens LOCALLY. GitHub Actions does NOT run tests - it only builds and deploys!**

**Looking for a step-by-step tutorial?** See [Testing & Deployment Tutorial](TUTORIAL-testing-deployment.md) for practical, hands-on guidance with examples.

## Overview

The site uses a comprehensive testing suite that runs **on your local machine before pushing**. Your Lefthook git hooks automatically enforce these tests:

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

### **Print Tests** validate:
- ✓ QR codes render correctly in print mode
- ✓ Print-only elements are visible
- ✓ No-print elements are hidden
- ✓ A4 layout optimization
- ✓ Print media queries applied correctly
- ✓ Generates PDFs for manual review

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
**Note:** Requires Chrome/Chromium to be installed. In WSL environments, this may not work locally. Install Chrome dependencies if you need to run these tests locally.

Tests:
- Performance metrics (First Contentful Paint, Speed Index, etc.)
- Accessibility (color contrast, alt text, ARIA labels)
- SEO (meta descriptions, titles, structured data)
- Best practices (HTTPS, console errors)

### Print Tests
```bash
npm run test:print
```
Validates print layouts and generates PDFs for manual review. Tests:
- QR codes are visible and valid in print mode
- Print-only elements (.print-only) are displayed
- No-print elements (.no-print) are hidden
- Social links, ticket links, contact info display correctly
- Metadata sections are visible on work pages

**Output**: PDFs saved to `./print-test-results/` directory for manual inspection.

**Note**: Requires Chrome/Chromium with proper dependencies. In WSL or headless environments where Chrome is not available, print tests will automatically skip locally. Install Chrome dependencies if you need to run these tests locally.

**Pages tested**:
- Homepage (index.html)
- Bio page (bio/index.html)
- Events page (events/index.html)
- Contact page (contact/index.html)
- Example work page (works/28-modular-example/index.html)

### All Tests Together
```bash
npm run test:all
```
Runs html-proofer, Lighthouse CI, and print tests sequentially.

### Other Commands
```bash
# Just build the site
bundle exec rake build

# Clean the build directory
bundle exec rake clean

# Default task (runs test)
bundle exec rake
```

## Automated Testing with Lefthook

**⚠️ IMPORTANT**: This project uses Lefthook git hooks to enforce ALL tests locally. GitHub Actions does NOT run tests.

### Git Hooks (Automatic Enforcement)

**Pre-commit hook** (runs when you `git commit`):
- Validates YAML syntax in staged files
- **Blocks the commit** if YAML validation fails

**Pre-push hook** (runs when you `git push`):
- Runs complete test suite via `./test-before-push.sh`
- **Blocks the push** if any test fails

### How It Works

1. Make your changes
2. Run `git commit` - pre-commit hook validates YAML
3. Run `git push` - pre-push hook runs ALL tests automatically
4. If tests pass → push succeeds → GitHub deploys
5. If tests fail → push is blocked → fix errors and try again

**Skip hooks (use with extreme caution)**:
```bash
LEFTHOOK=0 git push
# or
git push --no-verify
```

**⚠️ WARNING**: Skipping hooks bypasses ALL testing. Only skip if you've already run `./test-before-push.sh` manually and all tests passed.

## GitHub Actions Workflow

**`.github/workflows/jekyll.yml`** - Build and deployment ONLY:
- Checks out code
- Sets up Ruby
- Installs dependencies
- Builds Jekyll site with `bundle exec jekyll build`
- Deploys to GitHub Pages

**That's it!** No tests run in GitHub Actions. All quality gates are enforced locally via Lefthook.

### Viewing Local Test Results

**Lighthouse Reports**:
- Generated in `.lighthouseci/` directory
- Open the HTML files to see detailed performance, accessibility, and SEO scores

**Print Test PDFs**:
- Generated in `./print-test-results/` directory
- Open the PDFs to visually inspect print layouts and QR codes

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

### Print Test Issues

#### QR Codes Not Visible
```
QR codes found but none are valid/visible in print mode
```
**Solution:**
- Check print-specific CSS is loading (@media print)
- Verify QR code JavaScript runs before print
- Ensure .qr-code elements have canvas/SVG content
- Check print.scss for display rules

#### Print-only Elements Hidden
```
Print-only elements not visible
```
**Solution:**
- Verify .print-only class has `display: block !important` in @media print
- Check for conflicting CSS rules
- Ensure print.scss is included in main stylesheet

#### No-print Elements Still Visible
```
No-print elements still visible
```
**Solution:**
- Add `display: none !important` to .no-print in @media print
- Check specificity of CSS rules
- Verify print.scss is properly loaded

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

### Print Test Configuration

Edit `test-print.js` to customize print testing:

```javascript
const CONFIG = {
  siteDir: './_site',           // Built site directory
  outputDir: './print-test-results',  // PDF output directory
  pages: [
    {
      path: 'index.html',
      name: 'homepage',
      checks: ['qr-code', 'print-layout']
    },
    // Add more pages to test
  ],
  a4: {
    width: 210,    // mm
    height: 297,   // mm
    margin: 15     // mm
  }
};
```

**Available checks:**
- `qr-code`: Validates QR codes are visible and valid
- `print-layout`: Checks .print-only and .no-print elements
- `social-links`: Validates social links (bio page)
- `ticket-links`: Checks ticket QR codes (events page)
- `contact-info`: Validates contact information display
- `metadata`: Checks metadata visibility (work pages)

**Adding new pages:**
```javascript
{
  path: 'works/new-work/index.html',
  name: 'new-work',
  checks: ['qr-code', 'print-layout', 'metadata']
}
```

## Best Practices

1. **Let Lefthook handle testing automatically (recommended)**
   - Just commit and push normally
   - Pre-commit hook: Quick YAML check on staged files
   - Pre-push hook: Complete test suite via `./test-before-push.sh` (automatic)
   - No need to run `./test-before-push.sh` manually

2. **Run tests manually during development (optional)**
   ```bash
   ./test-before-push.sh
   ```
   Run this while developing to catch issues early, before committing. The pre-push hook will run the same tests again automatically when you push (but will pass quickly since you already fixed everything).

3. **Quick YAML check during editing**
   ```bash
   yamllint .
   ```
   Fast check for YAML syntax errors in config files and front matter.

4. **Fix issues immediately** - Don't accumulate broken links or test failures

5. **Check external links periodically**
   ```bash
   bundle exec rake test_external
   ```

6. **Test print layouts after CSS changes**
   ```bash
   npm run test:print
   ```
   Review generated PDFs in `./print-test-results/` to ensure print styles work correctly.

7. **Run full Lighthouse tests before major releases**
   ```bash
   ./test-before-push.sh --full
   ```
   Includes performance, accessibility, and SEO validation.

8. **Never skip hooks unless absolutely necessary**
   - Skipping hooks = deploying untested code
   - Only skip if you've already run `./test-before-push.sh` successfully

9. **Template/Example works** - May intentionally have broken links for demonstration purposes. Add them to `ignore_urls` in Rakefile if needed.

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

Current testing suite (yamllint + html-proofer + Lighthouse CI + print tests) enforced locally covers:
- ✅ YAML configuration validation (pre-commit hook)
- ✅ Jekyll build validation (pre-push hook)
- ✅ Links and HTML validation (pre-push hook)
- ✅ Print layout validation (pre-push hook)
- ✅ QR code rendering (pre-push hook)
- ⚠️ Performance optimization (optional with --full flag)
- ⚠️ Accessibility validation (optional with --full flag)
- ⚠️ SEO best practices (optional with --full flag)

**All critical tests run automatically via Lefthook hooks before you can push!**

This is comprehensive for most portfolio websites!

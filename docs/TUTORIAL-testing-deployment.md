# Testing & Deployment Tutorial

A practical, step-by-step guide to testing and deploying this Jekyll website.

## Table of Contents
- [Overview: Local vs GitHub](#overview-local-vs-github)
- [Prerequisites & Setup](#prerequisites--setup)
- [Pre-Push Script (Recommended)](#pre-push-script-recommended)
- [Local Testing Workflow](#local-testing-workflow)
- [GitHub Actions Workflow](#github-actions-workflow)
- [Deployment Process](#deployment-process)
- [Troubleshooting](#troubleshooting)
- [Quick Reference](#quick-reference)

---

## Overview: Local vs GitHub

### What Runs Locally (On Your Computer)

**Location:** Your development machine
**Purpose:** Fast feedback while developing
**Manual control:** You decide when to run tests

Tests you can run locally:
1. **yamllint** - Validates YAML files (very fast, <1 second)
2. **html-proofer** - Validates links and HTML (fast, ~10-30 seconds)
3. **Lighthouse CI** - Performance/accessibility testing (requires Chrome, ~1-2 minutes)

### What Runs on GitHub (Automatically)

**Location:** GitHub's cloud servers
**Purpose:** Automated quality gate before deployment
**Automatic:** Runs on every push/PR without your intervention

When GitHub Actions run:
- **On every push to main** → Full test suite + deployment
- **On every pull request** → Full test suite (no deployment)
- **Manual trigger** → Can run workflows manually via GitHub UI

**Key difference:** Local tests are for rapid development feedback. GitHub tests are the final quality gate that blocks deployment if anything fails.

---

## Prerequisites & Setup

### Initial Installation

Run these commands once when setting up the project:

```bash
# Install Ruby dependencies (Jekyll, html-proofer)
bundle install

# Install Node.js dependencies (Lighthouse CI)
npm install

# Install yamllint (Python tool)
pip install yamllint
# or on some systems:
pip3 install yamllint
```

**Verify installation:**
```bash
yamllint --version        # Should show version number
bundle exec jekyll --version
npx lhci --version
```

---

## Pre-Push Script (Recommended)

### The Easy Way: Automated Testing Script

**⭐ RECOMMENDED:** Use the `test-before-push.sh` script to run all tests automatically before pushing.

#### Quick Start

```bash
# Run all tests (fast - no Lighthouse)
./test-before-push.sh

# Run all tests including Lighthouse (slower)
./test-before-push.sh --full

# Quick YAML check only (fastest)
./test-before-push.sh --quick
```

#### What It Does

The script automatically runs:
1. **YAML linting** - Validates syntax
2. **Jekyll build** - Ensures site builds
3. **HTML validation** - Checks links, images, HTML
4. **Lighthouse** (optional with `--full`) - Performance, accessibility, SEO

**Stops immediately** if any test fails, so you can fix issues before pushing.

#### Recommended Workflow

```bash
# 1. Make your changes
vim _portfolio/31-new-work.md

# 2. Run tests
./test-before-push.sh

# 3. If tests fail, fix the errors
# The script will show you exactly what's wrong

# 4. Run tests again
./test-before-push.sh

# 5. When all tests pass, commit and push
git add .
git commit -m "Add new portfolio work"
git push origin main
```

#### Example Output

**Success:**
```
═══════════════════════════════════════════════════════════
  Test Results Summary
═══════════════════════════════════════════════════════════

✓ All tests passed! ✨

Your changes are ready to push:

  git add .
  git commit -m "Your commit message"
  git push origin main
```

**Failure:**
```
═══════════════════════════════════════════════════════════
  Step 1/4: YAML Linting
═══════════════════════════════════════════════════════════

→ Checking YAML syntax in all .yml files and front matter...

_portfolio/31-work.md
  42:81     warning  line too long (151 > 150 characters)

✗ YAML linting failed!

Fix the YAML errors listed above, then run this script again.
```

#### Why Use This Script?

**Benefits:**
- ✅ Catches errors before GitHub Actions
- ✅ Saves time (no waiting for GitHub)
- ✅ Clear, colored output
- ✅ Stops at first failure
- ✅ Shows exactly what to fix
- ✅ One command instead of multiple

**Skip Lighthouse locally:** GitHub Actions will run it automatically. Use `--full` only before major releases.

---

## Local Testing Workflow

This section covers everything that happens **on your computer**.

**Note:** If you use the `test-before-push.sh` script (recommended), you can skip this section. The script runs all these steps automatically.

### Step 1: Start Development Server

```bash
bundle exec jekyll serve
```

**What this does:**
- Builds the site to `_site/` directory
- Starts web server at http://localhost:4000
- Watches for file changes and auto-rebuilds
- Shows build errors immediately in terminal

**Output example:**
```
Server address: http://127.0.0.1:4000/
Server running... press ctrl-c to stop.
```

**Keep this running in one terminal** while you develop.

### Step 2: Make Changes

Edit files (portfolio works, pages, CSS, etc.) and save. Jekyll will automatically rebuild.

**Watch the terminal** for build errors:
```
Regenerating: 1 file(s) changed at 2025-01-17 14:23:45
              _portfolio/31-complete-template.md
              ...done in 0.456 seconds.
```

### Step 3: Test YAML Syntax (Fast Check)

**When to run:** Before committing, after editing any `.yml` files or front matter

```bash
yamllint .
```

**What it checks:**
- YAML syntax in all `.yml` and `.yaml` files
- Front matter in all markdown files
- Configuration files (`_config.yml`)
- GitHub Actions workflows

**Success output:**
```
(no output = all good!)
```

**Error example:**
```
_portfolio/31-complete-template.md
  42:81     warning  line too long (151 > 150 characters)  (line-length)

_config.yml
  12:1      error    syntax error: expected <block end>, but found '<block mapping start>'
```

**How to fix:** See line numbers and fix indentation/syntax errors.

### Step 4: Test HTML & Links

**When to run:** Before committing, after adding/changing links or images

```bash
bundle exec rake test
```

**What it does:**
1. Builds the site (`bundle exec jekyll build`)
2. Scans `_site/` directory
3. Validates:
   - All internal links work
   - All images exist
   - HTML structure is valid
   - JavaScript files load

**Success output:**
```
Building Jekyll site...
Testing with html-proofer...
Running ["Links", "Images", "Scripts"] on ["./_site"]

Ran on 15 files!
✓ All tests passed!
```

**Error example:**
```
- _site/works/foo/index.html
  *  internally linking to /assets/image.jpg, which does not exist
     (line 42)

- _site/bio/index.html
  *  image has no src or srcset attribute
     (line 18)
```

**Note:** This test **ignores external links** for speed. See next section for full testing.

### Step 5: Test External Links (Slower)

**When to run:** Periodically (weekly/monthly), before major releases

```bash
bundle exec rake test_external
```

**What's different:**
- Also checks external URLs (slower)
- Caches results for 24 hours
- Same validation as `rake test` but includes external sites

**Takes longer:** 2-5 minutes depending on number of external links.

**Error example:**
```
- _site/works/example/index.html
  *  External link https://example.com/broken failed: 404 No error
     (line 89)
```

### Step 6: Test Performance & Accessibility

**When to run:** Before major releases, after design changes

**Requirements:**
- Chrome or Chromium installed
- May not work in WSL (use GitHub Actions instead)

```bash
npm run lighthouse
```

**What it does:**
1. Starts local server
2. Tests multiple pages (home, bio, events, contact, sample works)
3. Runs 3 times per page (uses median score)
4. Checks:
   - Performance (speed, optimization)
   - Accessibility (WCAG compliance)
   - SEO (meta tags, structure)
   - Best practices

**Success output:**
```
✅  .lighthouseci/report-1.html for http://localhost/index.html
✅  .lighthouseci/report-2.html for http://localhost/bio/index.html
...
Assertion results:
  ✓  categories:performance ≥ 0.85
  ✓  categories:accessibility ≥ 0.85
  ✓  categories:seo ≥ 0.85
```

**Error example:**
```
✖  categories:accessibility
   Expected: ≥ 0.85
   Actual:   0.78

   Issues found:
   - Image elements do not have [alt] attributes (3 instances)
   - Background and foreground colors do not have sufficient contrast ratio
```

**View detailed reports:**
```bash
# Open HTML reports in browser
open .lighthouseci/report-*.html
```

---

## GitHub Actions Workflow

This section covers everything that happens **automatically on GitHub**.

### What Triggers GitHub Actions?

#### 1. Push to Main Branch

```bash
git add .
git commit -m "Add new portfolio work"
git push origin main
```

**What happens on GitHub:**
1. **Test workflow** (`.github/workflows/test.yml`) starts
2. **Deploy workflow** (`.github/workflows/jekyll.yml`) starts
3. Both run the full test suite
4. If all tests pass → Deploy to GitHub Pages
5. If any test fails → Deployment blocked

#### 2. Create Pull Request

```bash
git checkout -b new-feature
# ... make changes ...
git push origin new-feature
# Create PR via GitHub UI
```

**What happens on GitHub:**
1. **Test workflow** runs automatically
2. Tests must pass before PR can be merged
3. **No deployment** (only testing)

#### 3. Manual Trigger

**Via GitHub UI:**
1. Go to your repository on GitHub
2. Click "Actions" tab
3. Select workflow (Test or Deploy)
4. Click "Run workflow" button
5. Select branch and click "Run workflow"

### Understanding the Workflows

#### Test Workflow (`.github/workflows/test.yml`)

**Purpose:** Validate code quality on every push/PR

**Steps:**
```
1. Checkout code from repository
2. Install yamllint → Lint YAML files
3. Install Ruby & dependencies
4. Build Jekyll site → Run html-proofer tests
5. Install Node.js dependencies
6. Run Lighthouse CI tests
7. Upload Lighthouse reports as artifacts
```

**Duration:** ~3-5 minutes

**When it runs:**
- Every push to main
- Every pull request

**What it does NOT do:** Deploy the site

#### Deploy Workflow (`.github/workflows/jekyll.yml`)

**Purpose:** Build, test, and deploy to production

**Steps:**
```
1. Checkout code
2. Install yamllint → Lint YAML files
3. Install Ruby & dependencies
4. Setup GitHub Pages
5. Build Jekyll site (production mode)
6. Run html-proofer tests
7. Install Node.js dependencies
8. Run Lighthouse CI tests
9. Upload Lighthouse reports
10. Upload site artifact
11. Deploy to GitHub Pages (only if all tests passed)
```

**Duration:** ~4-6 minutes

**When it runs:**
- Every push to main
- Manual trigger

**Critical:** Step 11 (Deploy) only runs if steps 1-10 succeed.

### Viewing Test Results on GitHub

#### 1. Check Workflow Status

**Via GitHub UI:**
1. Go to your repository
2. Click "Actions" tab
3. See list of recent workflow runs
4. Green checkmark = passed
5. Red X = failed
6. Yellow circle = running

**Via commit:**
1. Go to "Commits" page
2. Each commit shows status icon
3. Click icon to see workflow details

#### 2. View Workflow Logs

**Steps:**
1. Click on a workflow run
2. Click on job name ("test" or "build")
3. Expand steps to see detailed logs
4. Failed steps are highlighted in red

**Example of viewing yamllint errors:**
```
Run yamllint .
_portfolio/31-complete-template.md
  42:81     warning  line too long (151 > 150 characters)  (line-length)
Error: Process completed with exit code 1.
```

#### 3. Download Lighthouse Reports

**Steps:**
1. Go to failed/completed workflow run
2. Scroll to bottom "Artifacts" section
3. Download `lighthouse-results` (test workflow) or `lighthouse-deployment-results` (deploy workflow)
4. Extract ZIP file
5. Open `report-*.html` files in browser

**Reports show:**
- Detailed performance metrics
- Accessibility violations with screenshots
- SEO issues with recommendations
- Best practice violations

### What Happens When Tests Fail?

#### Scenario: yamllint Fails

**Error in workflow:**
```
Run yamllint .
_config.yml
  12:1      error    syntax error: expected <block end>
Error: Process completed with exit code 1.
```

**What happens:**
- Workflow stops immediately
- No deployment happens
- You get email notification (if enabled)
- PR shows "Some checks were not successful"

**How to fix:**
1. Fix YAML syntax in `_config.yml` line 12
2. Test locally: `yamllint .`
3. Commit and push fix
4. Workflow runs again automatically

#### Scenario: html-proofer Fails

**Error in workflow:**
```
Run bundle exec rake test
- _site/works/foo/index.html
  *  internally linking to /assets/missing.jpg, which does not exist
✗ Tests failed
Error: Process completed with exit code 1.
```

**What happens:**
- Workflow stops at testing step
- No deployment
- Site remains at previous version

**How to fix:**
1. Add missing image or fix link
2. Test locally: `bundle exec rake test`
3. Commit and push fix
4. Workflow runs again

#### Scenario: Lighthouse Fails

**Error in workflow:**
```
Run npm run lighthouse
✖  categories:accessibility
   Expected: ≥ 0.85
   Actual:   0.78
Error: Process completed with exit code 1.
```

**What happens:**
- Workflow fails at Lighthouse step
- No deployment
- Artifacts still uploaded (can download reports)

**How to fix:**
1. Download Lighthouse reports from workflow artifacts
2. Review detailed issues in HTML reports
3. Fix accessibility issues
4. Test locally: `npm run lighthouse`
5. Commit and push fix
6. Workflow runs again

---

## Deployment Process

### How Deployment Works

**Trigger:** Push to main branch

**Process:**
```
1. Code pushed to main
   ↓
2. GitHub Actions starts deploy workflow
   ↓
3. Tests run (yamllint → html-proofer → Lighthouse)
   ↓
4. IF all tests pass:
   - Build site artifact uploaded
   - Deploy job starts
   - Site deployed to GitHub Pages
   - Available at www.j3zz.com
   ↓
5. IF any test fails:
   - Workflow stops
   - No deployment
   - Site remains at previous version
```

**Deployment target:** GitHub Pages
**Live URL:** https://www.j3zz.com
**DNS:** Configured via `CNAME` file

### Deployment Timeline

**From push to live:**
- Tests: ~4-6 minutes
- Deployment: ~1-2 minutes
- DNS propagation: ~5-10 minutes (first time only)

**Total time:** Usually 5-8 minutes from push to visible on live site

### Viewing Deployment Status

**Via GitHub:**
1. Go to "Actions" tab
2. Click on latest workflow run
3. See "build" and "deploy" jobs
4. Deploy job shows deployment URL

**Via GitHub Pages settings:**
1. Go to repository Settings
2. Click "Pages" in sidebar
3. See "Your site is live at https://www.j3zz.com"
4. Shows last deployment time

### Manual Deployment

**When needed:** Redeploy without code changes

**Steps:**
1. Go to repository on GitHub
2. Click "Actions" tab
3. Select "Deploy Jekyll site to Pages"
4. Click "Run workflow" button
5. Select "main" branch
6. Click "Run workflow"

**Use cases:**
- Test deployment process
- Force rebuild after GitHub Pages incident
- Redeploy after GitHub settings change

---

## Troubleshooting

### Local Issues

#### Issue: Jekyll won't start

**Error:**
```
Could not find gem 'jekyll' in locally installed gems
```

**Solution:**
```bash
bundle install
bundle exec jekyll serve
```

#### Issue: yamllint not found

**Error:**
```
bash: yamllint: command not found
```

**Solution:**
```bash
pip install yamllint
# or
pip3 install yamllint
# or on some systems:
sudo apt install yamllint
```

#### Issue: Lighthouse fails locally

**Error:**
```
Error: no chrome installations found
```

**Solution:**
- Install Chrome or Chromium
- On WSL: May not work, use GitHub Actions instead
- Skip local Lighthouse, rely on GitHub Actions

#### Issue: Tests pass locally but fail on GitHub

**Common causes:**
- Different file paths (case sensitivity)
- Missing files not committed to git
- External links work locally but not from GitHub servers
- Different Ruby/Node versions

**Solution:**
```bash
# Check what files are actually committed
git status
git ls-files

# Ensure all files are tracked
git add .
git status
```

### GitHub Actions Issues

#### Issue: Workflow doesn't start

**Possible causes:**
- Workflow file has syntax errors
- Workflow disabled in repository settings

**Solution:**
1. Check `.github/workflows/*.yml` syntax
2. Go to Settings → Actions → General
3. Ensure Actions are enabled
4. Check workflow-specific enable/disable settings

#### Issue: Workflow stuck "Queued"

**Possible causes:**
- GitHub Actions outage
- Concurrent workflow limit reached

**Solution:**
1. Check https://www.githubstatus.com
2. Wait a few minutes
3. Cancel and restart workflow

#### Issue: Permission denied on deployment

**Error:**
```
Error: Resource not accessible by integration
```

**Solution:**
1. Go to Settings → Actions → General
2. Scroll to "Workflow permissions"
3. Ensure "Read and write permissions" is selected
4. Check "Allow GitHub Actions to create and approve pull requests"
5. Save

#### Issue: Cannot view Lighthouse reports

**Error:**
```
No artifacts found
```

**Cause:** Lighthouse step failed or was skipped

**Solution:**
1. Check workflow logs for Lighthouse step
2. Ensure `if: always()` is set on upload step (already configured)
3. Artifacts only kept for 30 days

### Deployment Issues

#### Issue: Site shows old content

**Possible causes:**
- Browser cache
- DNS cache
- Deployment in progress

**Solution:**
```bash
# Force refresh in browser
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)

# Clear browser cache
# Or use incognito/private window

# Check deployment status on GitHub Actions
```

#### Issue: 404 errors on live site

**Possible causes:**
- Broken links in site
- Incorrect permalink configuration
- Missing files

**Solution:**
1. Check html-proofer results
2. Run `bundle exec rake test` locally
3. Check `_config.yml` baseurl setting
4. Verify files exist in `_site/` directory locally

#### Issue: Custom domain not working

**Possible causes:**
- CNAME file missing/incorrect
- DNS not configured
- GitHub Pages not enabled

**Solution:**
1. Verify `CNAME` file contains: `www.j3zz.com`
2. Check DNS settings at domain registrar
3. Go to Settings → Pages → Custom domain
4. Re-enter custom domain and save

---

## Quick Reference

### Recommended: Pre-Push Script

```bash
# ⭐ EASIEST WAY - Run automated test script
./test-before-push.sh              # All tests (fast - no Lighthouse)
./test-before-push.sh --full       # All tests including Lighthouse
./test-before-push.sh --quick      # Only YAML validation
./test-before-push.sh --help       # Show usage

# If tests pass, then push:
git add .
git commit -m "Your message"
git push origin main
```

### Essential Local Commands

```bash
# Start development server
bundle exec jekyll serve

# Fast YAML check
yamllint .

# Test HTML & links (fast - internal only)
bundle exec rake test

# Test including external links (slow)
bundle exec rake test_external

# Test performance & accessibility
npm run lighthouse

# Run all tests
npm run test:all

# Just build (no testing)
bundle exec jekyll build

# Clean build directory
bundle exec rake clean
```

### Pre-Commit Checklist

**Option 1: Using Script (Recommended)**
```bash
# 1. Run test script
./test-before-push.sh

# 2. Fix any errors, run again

# 3. When all tests pass, commit
git add .
git commit -m "Your message"
git push origin main
```

**Option 2: Manual Testing**
```bash
# 1. Run fast checks
yamllint .

# 2. Test site
bundle exec rake test

# 3. If all looks good, commit
git add .
git commit -m "Your message"
git push origin main
```

### Common Git + Testing Workflow

**With Script (Easiest):**
```bash
# 1. Make changes
vim _portfolio/31-work.md

# 2. Run test script
./test-before-push.sh

# 3. Fix errors if any, run again

# 4. When tests pass, commit and push
git add _portfolio/31-work.md
git commit -m "Add new portfolio work"
git push origin main
```

**Manual (Alternative):**
```bash
# 1. Make changes
vim _portfolio/31-work.md

# 2. Quick syntax check
yamllint _portfolio/31-work.md

# 3. Test locally
bundle exec jekyll serve
# View at http://localhost:4000

# 4. Run tests
bundle exec rake test

# 5. Commit if tests pass
git add _portfolio/31-work.md
git commit -m "Add new portfolio work"
git push origin main
```

**What happens next:**
```
GitHub Actions will now:
1. Run all tests automatically
2. Deploy if tests pass
3. Block deployment if tests fail
```

### Viewing Test Results

**Local:**
- Terminal shows all output immediately
- Lighthouse reports: `.lighthouseci/*.html`

**GitHub:**
- Actions tab → Click workflow run
- Expand steps to see logs
- Download artifacts for Lighthouse reports

### File Locations

```
Configuration files:
├── .yamllint              # YAML linting rules
├── Rakefile               # html-proofer configuration
├── lighthouserc.json      # Lighthouse CI configuration
├── _config.yml            # Jekyll configuration
└── .github/workflows/
    ├── test.yml           # Test workflow (PRs + pushes)
    └── jekyll.yml         # Build + deploy workflow

Test outputs:
├── _site/                 # Built site (tested by html-proofer)
└── .lighthouseci/         # Lighthouse reports (HTML files)
```

### Getting Help

**Test failures:**
- Read error messages carefully
- Check line numbers in files
- Run tests locally to reproduce
- View detailed docs: `docs/testing.md`

**Workflow issues:**
- Check workflow logs on GitHub
- Look for red X steps
- Download artifacts for reports
- Check GitHub Status: https://www.githubstatus.com

**Configuration questions:**
- See `docs/architecture.md` for site structure
- See `docs/content-management.md` for front matter
- See `CLAUDE.md` for project overview

---

## Summary

### Local Development (Your Computer)

**You control:** When tests run
**Purpose:** Fast feedback while coding
**Commands:**
- `yamllint .` - Check YAML syntax
- `bundle exec rake test` - Test HTML/links
- `npm run lighthouse` - Test performance

**When to use:**
- Before every commit
- While developing
- For rapid feedback

### GitHub Actions (Cloud)

**Automatic:** Runs on every push/PR
**Purpose:** Quality gate before deployment
**Process:**
- Runs full test suite automatically
- Blocks deployment if tests fail
- Deploys only if all tests pass

**When it runs:**
- Every push to main → Full tests + deploy
- Every pull request → Full tests only
- Manual trigger → Full tests + deploy

### Key Principle

**Test locally first** → **Push to GitHub** → **Let automation handle the rest**

If local tests pass, GitHub tests should pass too. If they don't, something is missing from git or there's an environment difference.

---

**Happy testing and deploying!**

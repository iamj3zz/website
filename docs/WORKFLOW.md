# Development to Deployment Workflow

**Complete step-by-step workflow from making code changes to live deployment.**

⚠️ **IMPORTANT**: All testing happens locally. GitHub Actions only builds and deploys.

---

## Table of Contents
- [Quick Reference](#quick-reference)
- [Standard Workflow (Automatic Testing)](#standard-workflow-automatic-testing)
- [Manual Testing Workflow](#manual-testing-workflow)
- [Emergency Workflow (Skip Hooks)](#emergency-workflow-skip-hooks)
- [First Time Setup](#first-time-setup)
- [Optional Configuration](#optional-configuration)
  - [SEO Configuration](#seo-configuration)
  - [Google Analytics 4 Setup](#google-analytics-4-setup)
  - [Cookie Consent System](#cookie-consent-system)
  - [Mailchimp Newsletter Setup](#mailchimp-newsletter-setup)
  - [Social Media Configuration](#social-media-configuration)
- [Workflow Diagrams](#workflow-diagrams)

---

## Quick Reference

### Fastest Workflow (Recommended)
```bash
# 1. Make changes
vim _portfolio/31-new-work.md

# 2. Preview locally (optional)
bundle exec jekyll serve  # View at http://localhost:4000

# 3. Commit and push (tests run automatically via Lefthook)
git add .
git commit -m "Add new portfolio work"
git push origin main

# ✅ Done! Hooks test automatically, GitHub deploys if tests pass
# No need to run ./test-before-push.sh manually - hooks do it for you!
```

### Commands You'll Use Daily
```bash
bundle exec jekyll serve    # Start local dev server
git add .                   # Stage changes
git commit -m "message"     # Commit (triggers YAML validation on staged files)
git push origin main        # Push (triggers ./test-before-push.sh automatically)

# Optional - only if you want to test BEFORE committing:
./test-before-push.sh       # Manual test run (catches errors early)
```

---

## Standard Workflow (Automatic Testing)

**⭐ RECOMMENDED FOR MOST USERS - Lefthook handles testing automatically**

**Important:** You do NOT need to run `./test-before-push.sh` manually. The pre-push hook runs it automatically when you `git push`. Only run the script manually if you want to catch errors early during development.

### Step 1: Make Your Changes

Edit any files in the project:

```bash
# Edit portfolio work
vim _portfolio/31-new-work.md

# Edit bio page
vim bio.markdown

# Edit styles
vim _sass/main.scss

# Edit config
vim _config.yml
```

### Step 2: Preview Changes Locally (Optional)

Start the Jekyll development server:

```bash
bundle exec jekyll serve
```

**What happens:**
- Builds site to `_site/` directory
- Starts server at http://localhost:4000
- Auto-rebuilds when files change
- Shows build errors in terminal

**Output:**
```
Configuration file: /home/synse/DEV/wwwj3zz/website/_config.yml
            Source: /home/synse/DEV/wwwj3zz/website
       Destination: /home/synse/DEV/wwwj3zz/website/_site
      Generating...
                    done in 1.649 seconds.
Server address: http://127.0.0.1:4000/
Server running... press ctrl-c to stop.
```

**Keep this running in one terminal** while you work. Open browser to http://localhost:4000

**Note:** Changes to `_config.yml` require server restart (Ctrl+C, then run command again).

### Step 3: Stage Your Changes

Add files to git staging area:

```bash
# Stage all changes
git add .

# Or stage specific files
git add _portfolio/31-new-work.md
git add bio.markdown
```

**Check what will be committed:**
```bash
git status
```

**Output:**
```
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   _portfolio/31-new-work.md
        new file:   assets/images/work31/image.jpg
```

### Step 4: Commit Your Changes

Commit with a descriptive message:

```bash
git commit -m "Add new portfolio work: Interactive Installation"
```

**What happens automatically:**
1. Lefthook **pre-commit hook** runs
2. Validates YAML syntax in staged files
3. If YAML is valid → commit succeeds
4. If YAML is invalid → commit is BLOCKED

**Success output:**
```
LEFTHOOK (pre-commit):

  EXECUTE > yaml-lint

✓ YAML linting passed!

[main abc1234] Add new portfolio work: Interactive Installation
 2 files changed, 150 insertions(+)
 create mode 100644 _portfolio/31-new-work.md
```

**Failure output:**
```
LEFTHOOK (pre-commit):

  EXECUTE > yaml-lint

_portfolio/31-new-work.md
  42:81     warning  line too long (151 > 150 characters)  (line-length)

❌ YAML validation failed. Fix the errors above before committing.

  SUMMARY: (SKIP BY LEFTHOOK ENV=0)

    🥊  yaml-lint

ERROR: (pre-commit) - "yaml-lint" failed with exit code 1
```

**If commit is blocked:**
1. Fix the YAML errors shown
2. Save the file
3. Stage changes again: `git add .`
4. Try committing again: `git commit -m "message"`

### Step 5: Push to GitHub

Push your committed changes:

```bash
git push origin main
```

**What happens automatically:**
1. Lefthook **pre-push hook** runs
2. Executes `./test-before-push.sh` script **automatically**
3. Runs the **COMPLETE** test suite on **ALL files**:
   - YAML linting (all .yml/.yaml files and front matter)
   - Jekyll build (entire site)
   - HTML validation (all links, images, scripts)
   - Print tests (QR codes, layouts, A4 formatting)
4. If all tests pass → push succeeds → GitHub deploys
5. If any test fails → push is BLOCKED → fix errors and try again

**This is the same as running `./test-before-push.sh` manually** - you don't need to run it yourself unless you want to test during development before committing.

**Success output:**
```
LEFTHOOK (pre-push):

  EXECUTE > full-tests

═══════════════════════════════════════════════════════════
  Pre-Push Testing - Local Validation
═══════════════════════════════════════════════════════════

⚠️  IMPORTANT: This is your ONLY test gate!
GitHub Actions does NOT run tests - it only builds and deploys.

→ Step 1/5: YAML Linting
✓ YAML linting passed!

→ Step 2/5: Building Jekyll Site
✓ Jekyll build completed successfully!

→ Step 3/5: HTML Validation & Link Checking
✓ HTML validation passed!

→ Step 4/5: Print Testing
✓ Print tests passed!

→ Step 5/5: Lighthouse CI (Skipped)

═══════════════════════════════════════════════════════════
  Test Results Summary
═══════════════════════════════════════════════════════════

✓ All tests passed! ✨

Your changes are ready to push.

  SUMMARY: (SKIP BY LEFTHOOK ENV=0)

Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 1.23 KiB | 1.23 MiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
To github.com:yourusername/website.git
   abc1234..def5678  main -> main
```

**Failure output:**
```
LEFTHOOK (pre-push):

  EXECUTE > full-tests

═══════════════════════════════════════════════════════════
  Step 3/5: HTML Validation & Link Checking
═══════════════════════════════════════════════════════════

✗ HTML validation failed!

- _site/works/new-work/index.html
  *  internally linking to /assets/missing-image.jpg, which does not exist
     (line 42)

═══════════════════════════════════════════════════════════
  Test Results Summary
═══════════════════════════════════════════════════════════

✗ Some tests failed!

Please fix the errors listed above, then run this script again.

❌ Tests failed! Push blocked.

Fix the errors above, then run again:
  ./test-before-push.sh

Once all tests pass, try pushing again.

  SUMMARY: (SKIP BY LEFTHOOK ENV=0)

    🥊  full-tests

ERROR: (pre-push) - "full-tests" failed with exit code 1
```

**If push is blocked:**
1. Read the error messages carefully
2. Fix the issues (add missing files, fix broken links, etc.)
3. Stage changes: `git add .`
4. Commit changes: `git commit -m "Fix missing image"`
5. Try pushing again: `git push origin main`

### Step 6: GitHub Actions Deployment (Automatic)

**Once push succeeds, GitHub Actions automatically:**

1. **Receives your push**
2. **Builds Jekyll site** (~1-2 minutes)
   - Checks out code
   - Sets up Ruby environment
   - Installs dependencies
   - Runs `bundle exec jekyll build`
3. **Deploys to GitHub Pages**
   - Uploads build artifact
   - Deploys to www.j3zz.com

**NO TESTING happens in GitHub Actions** - it only builds and deploys.

### Step 7: Verify Deployment

**Watch GitHub Actions progress:**

1. Go to https://github.com/yourusername/website
2. Click **"Actions"** tab
3. See latest workflow run (should show green ✓)
4. Click on workflow to see detailed logs

**Timeline:**
- Push → GitHub receives push: Instant
- GitHub builds site: ~1-2 minutes
- Site deploys to GitHub Pages: ~30 seconds
- **Total: ~2-3 minutes from push to live**

**Verify site is live:**
```bash
# Open your site
open https://www.j3zz.com

# Or check specific page
open https://www.j3zz.com/works/new-work/
```

**Success indicators:**
- ✅ Green checkmark on GitHub Actions workflow
- ✅ Commit on main branch shows green checkmark
- ✅ Your changes visible on www.j3zz.com

---

## Manual Testing Workflow

**For when you want to test DURING DEVELOPMENT (before committing/pushing)**

**When to use this:** You want to catch errors early while developing, instead of waiting until push time.

**When NOT needed:** The pre-push hook already runs `./test-before-push.sh` automatically, so you don't need to run it manually unless you want faster feedback during development.

### Step 1: Make Your Changes

Same as standard workflow:

```bash
vim _portfolio/31-new-work.md
```

### Step 2: Run Tests Manually

**Option A: Run all tests (recommended)**
```bash
./test-before-push.sh
```

**Option B: Run quick YAML check only**
```bash
./test-before-push.sh --quick
# or
yamllint .
```

**Option C: Run individual tests**
```bash
# YAML validation
yamllint .

# Jekyll build
bundle exec jekyll build

# HTML validation
bundle exec rake test

# Print tests
npm run test:print

# Lighthouse (optional, slow)
npm run lighthouse
```

### Step 3: Fix Any Errors

If tests fail:
1. Read error messages
2. Fix the issues
3. Run tests again
4. Repeat until all pass

### Step 4: Commit and Push

Once tests pass manually:

```bash
git add .
git commit -m "Add new work"
git push origin main
```

**Note:** Lefthook pre-push hook will run `./test-before-push.sh` AGAIN automatically. Since you already fixed all issues, the tests will pass quickly (they're just validating what you already tested). This redundancy is intentional - it ensures nothing slips through.

---

## Emergency Workflow (Skip Hooks)

**⚠️ USE WITH EXTREME CAUTION - Only when absolutely necessary**

### When to Skip Hooks

**ONLY skip hooks if:**
- ✅ You already ran `./test-before-push.sh` manually and all tests passed
- ✅ You're pushing documentation-only changes (no code)
- ✅ You know exactly what you're doing
- ✅ You're willing to risk deploying broken code

**NEVER skip hooks if:**
- ❌ You haven't tested your changes
- ❌ You're not sure if tests will pass
- ❌ You're changing code/content
- ❌ You're in a hurry (bad reason!)

### How to Skip Hooks

**Skip for single commit:**
```bash
git commit --no-verify -m "message"
# or
LEFTHOOK=0 git commit -m "message"
```

**Skip for single push:**
```bash
git push --no-verify origin main
# or
LEFTHOOK=0 git push origin main
```

**Example workflow with skip:**
```bash
# 1. Test manually FIRST
./test-before-push.sh
# ✓ All tests passed!

# 2. Commit normally (will re-run YAML check)
git add .
git commit -m "Update documentation"

# 3. Skip pre-push hook (you already tested)
LEFTHOOK=0 git push origin main
```

**⚠️ WARNING:** Skipping hooks means GitHub will deploy **without any quality checks**. If there are errors, your site may break!

---

## First Time Setup

**Run these commands once when setting up the project:**

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/website.git
cd website
```

### 2. Install Dependencies

```bash
# Ruby dependencies (Jekyll, html-proofer)
bundle install

# Node.js dependencies (Lighthouse, Lefthook)
npm install

# Python dependencies (yamllint)
pip install yamllint
# or
pip3 install yamllint
```

### 3. Install Lefthook Hooks

```bash
npx lefthook install
```

**Verify installation:**
```bash
ls -la .git/hooks/
# Should see: pre-commit, pre-push
```

### 4. Test Setup

```bash
# Run test script
./test-before-push.sh

# Should see all tests pass
```

### 5. Ready to Work!

```bash
# Start development server
bundle exec jekyll serve

# Make changes and follow standard workflow
```

---

## Optional Configuration

After setting up the project, you can configure optional features like SEO, Google Analytics, and other integrations.

### SEO Configuration

The site includes comprehensive SEO optimization powered by `jekyll-seo-tag` and `jekyll-sitemap` plugins.

**What's already configured:**
- Automatic sitemap generation at `/sitemap.xml`
- robots.txt for search engine crawlers
- Structured data (JSON-LD) for portfolio works
- Open Graph tags for social media sharing

**To customize SEO settings:**

Edit `_config.yml`:

```yaml
# Author information for SEO
author:
  name: Your Name
  email: your@email.com
  twitter: yourusername

# Social profiles for structured data
social:
  name: Your Name
  links:
    - https://bandcamp.com/yourusername
    - https://soundcloud.com/yourusername
    - https://youtube.com/@yourusername
    # Add all your social profile URLs

# Additional SEO settings
tagline: "Your site tagline for SEO"
default_image: /assets/img/your-default-image.png
lang: en_US  # or your language code
```

**After editing:**
```bash
# Restart Jekyll server to apply config changes
bundle exec jekyll serve
```

### Google Analytics 4 Setup

The site includes privacy-compliant Google Analytics 4 integration with GDPR cookie consent.

**To enable analytics:**

1. **Create GA4 property:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Update configuration:**

   Edit `_config.yml`:
   ```yaml
   # Replace the placeholder with your actual Measurement ID
   google_analytics: G-XXXXXXXXXX  # Your actual GA4 measurement ID
   ```

3. **Restart server:**
   ```bash
   bundle exec jekyll serve
   ```

**Privacy features:**
- Analytics only loads after user consent via cookie banner
- IP anonymization enabled
- Secure cookie flags
- Users can revoke consent anytime

**To disable analytics:**
- Remove or comment out the `google_analytics` line in `_config.yml`
- Or set it to empty: `google_analytics: ""`

### Cookie Consent System

The site includes a GDPR-compliant cookie consent system that's automatically enabled.

**What it does:**
- Shows cookie consent banner on first visit
- Manages user preferences for:
  - Analytics cookies (Google Analytics)
  - Embedded content cookies (YouTube, Vimeo, Bandcamp)
- Stores preferences in browser localStorage
- Provides cookie settings button for users to change preferences

**No configuration needed** - it works automatically with Google Analytics integration.

**Customization:**
To customize cookie banner styling, edit `_includes/cookie-consent.html` (styles are inline within that file).

### Mailchimp Newsletter Setup

To enable the newsletter signup form on the contact page:

1. **Get Mailchimp credentials:**
   - Log into Mailchimp
   - Go to **Audience** → **Signup forms** → **Embedded forms**
   - Copy the form action URL from `<form action="...">`
   - Copy the bot field name (e.g., `b_XXXXXXXXXX_XXXXXXXXXX`)

2. **Update configuration:**

   Edit `_config.yml`:
   ```yaml
   mailchimp_action_url: "https://XXXX.usX.list-manage.com/subscribe/post?u=XXXXXX&id=XXXXXX"
   mailchimp_bot_field: "b_XXXXXXXXXX_XXXXXXXXXX"
   ```

3. **Restart server:**
   ```bash
   bundle exec jekyll serve
   ```

**Note:** If not configured, the form shows "Newsletter signup coming soon."

### Social Media Configuration

Update your social media usernames in `_config.yml`:

```yaml
# Social media usernames (without @ or full URLs)
bandcamp_username: yourusername
soundcloud_username: yourusername
youtube_username: @yourusername
vimeo_username: yourusername
facebook_username: yourusername
instagram_username: yourusername
twitter_username: yourusername
linkedin_username: yourusername
github_username: yourusername
```

**Remember:** After any `_config.yml` changes, restart the Jekyll server!

---

## Workflow Diagrams

### Complete Workflow: Changes to Deployment

```
┌─────────────────────────────────────────────────────────────┐
│  YOUR LOCAL MACHINE                                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Step 1: Make Changes                                       │
│  ├─ Edit files: vim _portfolio/31-new-work.md              │
│  ├─ Preview: bundle exec jekyll serve                       │
│  └─ View: http://localhost:4000                             │
│                                                             │
│  Step 2: Stage Changes                                      │
│  └─ Command: git add .                                      │
│                                                             │
│  Step 3: Commit Changes                                     │
│  ├─ Command: git commit -m "message"                        │
│  ├─ Hook runs: pre-commit (YAML validation)                 │
│  ├─ If pass: Commit succeeds ✓                              │
│  └─ If fail: Commit blocked ✗ → Fix errors → Try again      │
│                                                             │
│  Step 4: Push to GitHub                                     │
│  ├─ Command: git push origin main                           │
│  ├─ Hook runs: pre-push (ALL tests)                         │
│  │   ├─ YAML linting                                        │
│  │   ├─ Jekyll build                                        │
│  │   ├─ HTML validation                                     │
│  │   └─ Print tests                                         │
│  ├─ If all pass: Push succeeds ✓                            │
│  └─ If any fail: Push blocked ✗ → Fix errors → Try again    │
│                                                             │
└─────────────────┬───────────────────────────────────────────┘
                  │ Push successful
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  GITHUB ACTIONS (Automatic, ~1-2 minutes)                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Step 5: Build Site                                         │
│  ├─ Checkout code from GitHub                               │
│  ├─ Setup Ruby environment                                  │
│  ├─ Install dependencies: bundle install                    │
│  ├─ Build site: bundle exec jekyll build                    │
│  └─ NO TESTING - Only builds                                │
│                                                             │
│  Step 6: Deploy                                             │
│  ├─ Upload build artifact (_site/)                          │
│  └─ Deploy to GitHub Pages                                  │
│                                                             │
└─────────────────┬───────────────────────────────────────────┘
                  │ Deployment complete
                  ▼
┌─────────────────────────────────────────────────────────────┐
│  LIVE SITE                                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Step 7: Site Updated                                       │
│  ├─ URL: https://www.j3zz.com                               │
│  ├─ Time: ~2-3 minutes total from push                      │
│  └─ Status: Live and accessible ✓                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Testing Flow Detail

```
┌──────────────────────────────────────────────────────────┐
│  git commit -m "message"                                 │
└────────┬─────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────┐
│  PRE-COMMIT HOOK (Lefthook)                              │
├──────────────────────────────────────────────────────────┤
│  ✓ Runs: yamllint {staged_files}                         │
│  ✓ Checks: YAML syntax in STAGED files only              │
│  ✓ Fast: <1 second                                       │
│  ✓ Purpose: Quick check to catch obvious errors          │
│  ✓ If pass → Commit succeeds                             │
│  ✗ If fail → Commit blocked                              │
└────────┬─────────────────────────────────────────────────┘
         │ Commit successful
         ▼
┌──────────────────────────────────────────────────────────┐
│  git push origin main                                    │
└────────┬─────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────┐
│  PRE-PUSH HOOK (Lefthook) - COMPLETE TEST SUITE          │
├──────────────────────────────────────────────────────────┤
│  ✓ Runs: ./test-before-push.sh (automatically!)          │
│  ✓ Duration: ~30-60 seconds                              │
│  ✓ Scope: ALL files in project (not just staged)         │
│                                                          │
│  Tests executed (same as manual script):                 │
│  ├─ [1/5] YAML linting (ALL files)     <1 sec            │
│  ├─ [2/5] Jekyll build (entire site)    ~10 sec          │
│  ├─ [3/5] HTML validation (all links)   ~20 sec          │
│  ├─ [4/5] Print tests (all pages)       ~10 sec          │
│  └─ [5/5] Lighthouse (skipped)          0 sec            │
│                                                          │
│  ✓ All pass → Push succeeds                             │
│  ✗ Any fail → Push blocked                              │
└────────┬─────────────────────────────────────────────────┘
         │ Push successful
         ▼
┌──────────────────────────────────────────────────────────┐
│  GitHub Actions → Build → Deploy                         │
└──────────────────────────────────────────────────────────┘

NOTE: Running ./test-before-push.sh manually is OPTIONAL.
      The pre-push hook runs it automatically for you.
      Only run manually if you want to catch errors early.
```

### Error Handling Flow

```
┌──────────────────────────────────────────────────────────┐
│  Push attempt: git push origin main                      │
└────────┬─────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────┐
│  Pre-push hook runs tests                                │
└────────┬──────────────┬──────────────────────────────────┘
         │              │
    ✓ PASS         ✗ FAIL
         │              │
         ▼              ▼
┌─────────────┐  ┌──────────────────────────────────────┐
│  Push       │  │  Push blocked                        │
│  succeeds   │  │  Error messages shown                │
│  ↓          │  │  ↓                                   │
│  GitHub     │  │  1. Read error messages              │
│  deploys    │  │  2. Fix the issues                   │
│             │  │  3. git add .                        │
│             │  │  4. git commit -m "Fix errors"       │
│             │  │  5. git push origin main             │
│             │  │     └─→ Tests run again              │
└─────────────┘  └──────────────────────────────────────┘
```

---

## Common Scenarios

### Scenario 1: Adding New Portfolio Work (Simple - Let Hooks Do Everything)

```bash
# Create new work file
vim _portfolio/32-new-installation.md

# Add images
mkdir -p assets/images/work32
cp ~/images/*.jpg assets/images/work32/

# Preview
bundle exec jekyll serve
# Check http://localhost:4000/works/

# Commit and push (tests run automatically via hooks)
git add .
git commit -m "Add new installation work"
git push origin main
# → Pre-push hook runs ./test-before-push.sh automatically
# → If tests pass: push succeeds, GitHub deploys
# → If tests fail: fix errors and push again

# ✅ Site updates in ~2-3 minutes
```

### Scenario 2: Updating Bio (With Manual Testing During Development)

```bash
# Edit bio
vim bio.markdown

# Preview
bundle exec jekyll serve
# Check http://localhost:4000/bio/

# Test during development (optional - catch errors early)
./test-before-push.sh --quick
# ✓ All tests passed!

# Commit and push
git add bio.markdown
git commit -m "Update bio with recent exhibitions"
git push origin main
# → Hook runs ./test-before-push.sh again (passes quickly)
```

**Why test manually here?** To catch errors immediately while editing, instead of waiting until push time. The hook will still run the full test suite, but it will pass quickly since you already fixed everything.

### Scenario 3: Fixing Broken Link

```bash
# Edit file with broken link
vim _portfolio/28-modular-example.md

# Fix the link
# Save file

# Test manually before pushing
./test-before-push.sh
# ✓ HTML validation passed!

# Commit and push
git add .
git commit -m "Fix broken link in work 28"
git push origin main
```

### Scenario 4: Major Release (Full Testing)

```bash
# Make significant changes
vim _sass/main.scss
vim _layouts/work.html

# Preview extensively
bundle exec jekyll serve

# Run FULL test suite (including Lighthouse)
./test-before-push.sh --full

# Review Lighthouse reports
open .lighthouseci/*.html

# Review print PDFs
open print-test-results/*.pdf

# If all good, commit and push
git add .
git commit -m "Redesign work pages layout"
git push origin main
```

### Scenario 5: Quick Documentation Fix

```bash
# Edit docs
vim docs/testing.md

# No need to preview or test content changes
# Hooks will still run, but will pass quickly

git add docs/testing.md
git commit -m "Fix typo in testing docs"
git push origin main

# Or skip hooks (docs only, low risk)
git add docs/testing.md
git commit -m "Fix typo in testing docs"
LEFTHOOK=0 git push origin main
```

---

## Troubleshooting

### "Hooks didn't run"

```bash
# Check if hooks are installed
ls -la .git/hooks/
# Should see: pre-commit, pre-push

# Reinstall hooks
npx lefthook install

# Verify Lefthook config
cat lefthook.yml
```

### "Tests pass locally but push is blocked"

The pre-push hook runs tests again. If it fails:

```bash
# Run manually to see detailed error
./test-before-push.sh

# Fix the errors shown
# Try pushing again
git push origin main
```

### "Want to test without committing"

```bash
# Run tests anytime
./test-before-push.sh

# Quick YAML check
./test-before-push.sh --quick

# Full test with Lighthouse
./test-before-push.sh --full
```

### "GitHub Actions deployment failed"

```bash
# Check if build fails locally with production env
JEKYLL_ENV=production bundle exec jekyll build

# View GitHub Actions logs
# Go to: https://github.com/yourusername/website/actions
# Click failed workflow → Click "build" job → Read logs
```

---

## Quick Command Reference

```bash
# Development
bundle exec jekyll serve          # Start dev server
bundle exec jekyll build          # Build site
bundle exec jekyll clean          # Clean build cache

# Testing (automatic via hooks)
git commit -m "message"           # Triggers YAML validation
git push origin main              # Triggers full test suite

# Testing (manual)
./test-before-push.sh             # All tests (no Lighthouse)
./test-before-push.sh --full      # All tests + Lighthouse
./test-before-push.sh --quick     # YAML only
yamllint .                        # YAML validation
bundle exec rake test             # HTML validation
npm run test:print                # Print tests
npm run lighthouse                # Lighthouse only

# Git operations
git status                        # Check status
git add .                         # Stage all changes
git add file.md                   # Stage specific file
git commit -m "message"           # Commit with message
git push origin main              # Push to GitHub
git log --oneline                 # View commit history

# Lefthook
npx lefthook install              # Install hooks
npx lefthook run pre-commit       # Test pre-commit hook
npx lefthook run pre-push         # Test pre-push hook
LEFTHOOK=0 git push               # Skip hooks (caution!)

# Deployment verification
open https://www.j3zz.com         # View live site
# GitHub Actions: https://github.com/yourusername/website/actions
```

---

## Summary

**The complete workflow is:**

1. **Make changes** to files
2. **Preview locally** with `bundle exec jekyll serve` (optional)
3. **Test during development** with `./test-before-push.sh` (optional - for early error detection)
4. **Stage changes** with `git add .`
5. **Commit changes** with `git commit -m "message"` (YAML validation on staged files runs automatically)
6. **Push to GitHub** with `git push origin main` (complete test suite runs automatically via hook)
7. **GitHub deploys automatically** if tests pass (~2-3 minutes)
8. **Verify live site** at www.j3zz.com

**Remember:**
- ✅ All testing happens locally via Lefthook hooks
- ✅ The pre-push hook automatically runs `./test-before-push.sh` - you don't need to run it manually
- ✅ Only run `./test-before-push.sh` manually if you want to catch errors early during development
- ✅ GitHub Actions only builds and deploys (no testing)
- ✅ Hooks will block commits/pushes if tests fail
- ✅ Fix errors and try again until tests pass
- ⚠️ Only skip hooks if you know what you're doing

**For more information:**
- [CLAUDE.md](../CLAUDE.md) - Project overview
- [Testing Documentation](testing.md) - Detailed test configuration
- [Testing Tutorial](TUTORIAL-testing-deployment.md) - Step-by-step guide

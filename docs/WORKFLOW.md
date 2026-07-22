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
git commit -m "message"     # Commit (triggers the full test suite, blocks on failure)
git push origin main        # Push (informational Lighthouse reminder only, does not block)

# Optional - only if you want to test BEFORE committing:
./test-before-push.sh       # Manual test run (catches errors early)
```

---

## Standard Workflow (Automatic Testing)

**⭐ RECOMMENDED FOR MOST USERS - Lefthook handles testing automatically**

**Important:** You do NOT need to run `./test-before-push.sh` manually. The pre-commit hook runs it automatically when you `git commit`. Only run the script manually if you want to catch errors early during development.

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
2. Executes `./test-before-push.sh` script **automatically** (the `full-tests` command)
3. Runs the **COMPLETE** test suite (steps 0–4) on **ALL files**, not just staged ones:
   - Image dimensions/naming conventions, file size limits
   - YAML linting (all .yml/.yaml files and front matter)
   - Jekyll build + sitemap generation (entire site)
   - HTML validation (all links, images, scripts) + SEO invariants
   - Print tests (QR codes, layouts, A4 formatting)
4. If all tests pass → commit succeeds
5. If any test fails → commit is BLOCKED → fix errors and try again

**This is the same as running `./test-before-push.sh` manually** - you don't need to run it yourself unless you want to test during development before committing.

**Success output:**
```
LEFTHOOK (pre-commit):

  EXECUTE > full-tests

═══════════════════════════════════════════════════════════
  Pre-Commit Testing - Local Validation
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

Your changes are ready to commit.

  SUMMARY: (SKIP BY LEFTHOOK ENV=0)

[main abc1234] Add new portfolio work: Interactive Installation
 2 files changed, 150 insertions(+)
 create mode 100644 _portfolio/31-new-work.md
```

**Failure output:**
```
LEFTHOOK (pre-commit):

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

❌ Tests failed! Commit blocked.

Fix the errors above, then run again:
  ./test-before-push.sh

Once all tests pass, try committing again.

  SUMMARY: (SKIP BY LEFTHOOK ENV=0)

    🥊  full-tests

ERROR: (pre-commit) - "full-tests" failed with exit code 1
```

**If commit is blocked:**
1. Read the error messages carefully
2. Fix the issues (add missing files, fix broken links, etc.)
3. Stage changes again: `git add .`
4. Try committing again: `git commit -m "message"`

### Step 5: Push to GitHub

Push your committed changes:

```bash
git push origin main
```

**What happens automatically:**
1. Lefthook **pre-push hook** runs
2. Prints an **informational reminder** that Lighthouse (step 5, performance/accessibility/SEO audits) is available via `./test-before-push.sh --full`
3. Does **not** re-run the test suite and does **not** block the push — the push always proceeds

**Note:** All blocking tests already ran at commit time (Step 4). Push is not a second test gate — if your commits succeeded, your push will always go through.

**Output:**
```
LEFTHOOK (pre-push):

  EXECUTE > lighthouse-optional

✨ Pre-commit tests already passed. Running optional Lighthouse CI...

Skipping Lighthouse (too slow for regular pushes).
To run Lighthouse: ./test-before-push.sh --full

Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 1.23 KiB | 1.23 MiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
To github.com:yourusername/website.git
   abc1234..def5678  main -> main
```

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

**When NOT needed:** The pre-commit hook already runs `./test-before-push.sh` automatically, so you don't need to run it manually unless you want faster feedback during development.

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

**Note:** Lefthook pre-commit hook will run `./test-before-push.sh` again automatically when you commit. Since you already fixed all issues, the tests will pass quickly (they're just validating what you already tested). The pre-push hook that runs afterward is informational only and won't re-run the suite.

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

# 2. Skip pre-commit hook (you already tested) - this is the actual test gate
git add .
LEFTHOOK=0 git commit -m "Update documentation"

# 3. Push normally (pre-push never blocks anyway - informational only)
git push origin main
```

**⚠️ WARNING:** Skipping the pre-commit hook means GitHub will deploy **without any quality checks**. If there are errors, your site may break! Skipping pre-push accomplishes nothing on its own since it never blocks — the commit is the only real gate.

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

The site includes comprehensive SEO optimization powered by `jekyll-seo-tag` with automated sitemap generation.

**What's already configured:**
- Automatic sitemap generation with bilingual xhtml:link alternates at `/sitemap.xml` (via `generate-sitemap.rb`)
- robots.txt for search engine crawlers
- Structured data (JSON-LD) for portfolio works and artworks
- Open Graph tags for social media sharing
- hreflang tags for bilingual page pairs

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
- Analytics only loads after user consent via the cookie notice
- IP anonymization enabled
- Secure cookie flags
- Users can revoke consent anytime

**To disable analytics:**
- Remove or comment out the `google_analytics` line in `_config.yml`
- Or set it to empty: `google_analytics: ""`

### Cookie Consent System

The site sets no marketing/tracking cookies. Google Analytics 4 is the only feature that needs a consent choice — the system is a minimal, GDPR-compliant analytics opt-in, not a general cookie-category banner.

**What it does:**
- Shows a one-line notice on first visit ("Accept" / "Decline" for Google Analytics), localized EN/FR
- Stores the analytics preference in browser localStorage
- Provides a cookie settings button for users to change their preference anytime
- Embedded content (YouTube, Vimeo, Bandcamp, SoundCloud) loads unconditionally with the page — it's disclosed, not consent-gated, in the privacy policy (§6.3)

**No configuration needed** - it works automatically with the Google Analytics integration.

**Customization:**
To customize the notice copy, edit `_includes/cookie-consent.html`. Styling lives in `_sass/_cookie-consent.scss`.

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

Social platform links are **not** in `_config.yml` — edit `_data/social.yml` instead, one entry per platform:

```yaml
- name: Bandcamp
  url: https://yourusername.bandcamp.com
  sameas: true          # include in JSON-LD sameAs
  svg: '<path d="..." fill="currentColor"/>'
```

Add `icon: false` to keep a platform in `sameAs` without rendering a clickable icon anywhere, or `disabled: true` to render a non-clickable icon with an explanatory tooltip instead of a link (the tooltip text itself lives in `_data/translations.yml` under `social:`, bilingual). See `docs/architecture.md` → "Social Platforms (`_data/social.yml`)" for the full field reference and why this replaced the old `_config.yml`-based setup.

**Remember:** After any `_data/*.yml` changes, restart the Jekyll server!

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
│  ├─ Hook runs: pre-commit (ALL tests)                        │
│  │   ├─ YAML linting                                        │
│  │   ├─ Jekyll build                                        │
│  │   ├─ HTML validation                                     │
│  │   └─ Print tests                                         │
│  ├─ If all pass: Commit succeeds ✓                           │
│  └─ If any fail: Commit blocked ✗ → Fix errors → Try again  │
│                                                             │
│  Step 4: Push to GitHub                                     │
│  ├─ Command: git push origin main                           │
│  ├─ Hook runs: pre-push (informational Lighthouse reminder) │
│  └─ Always proceeds - not a test gate                       │
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
│  PRE-COMMIT HOOK (Lefthook) - COMPLETE TEST SUITE        │
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
│  ✓ All pass → Commit succeeds                            │
│  ✗ Any fail → Commit blocked                             │
└────────┬─────────────────────────────────────────────────┘
         │ Commit successful
         ▼
┌──────────────────────────────────────────────────────────┐
│  git push origin main                                    │
└────────┬─────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────┐
│  PRE-PUSH HOOK (Lefthook) - INFORMATIONAL ONLY           │
├──────────────────────────────────────────────────────────┤
│  ✓ Prints reminder: Lighthouse available via --full      │
│  ✓ Does NOT re-run the test suite                        │
│  ✓ Never blocks - push always proceeds                   │
└────────┬─────────────────────────────────────────────────┘
         │ Push successful
         ▼
┌──────────────────────────────────────────────────────────┐
│  GitHub Actions → Build → Deploy                         │
└──────────────────────────────────────────────────────────┘

NOTE: Running ./test-before-push.sh manually is OPTIONAL.
      The pre-commit hook runs it automatically for you.
      Only run manually if you want to catch errors early.
```

### Error Handling Flow

```
┌──────────────────────────────────────────────────────────┐
│  Commit attempt: git commit -m "message"                 │
└────────┬─────────────────────────────────────────────────┘
         │
         ▼
┌──────────────────────────────────────────────────────────┐
│  Pre-commit hook runs the full test suite                │
└────────┬──────────────┬──────────────────────────────────┘
         │              │
    ✓ PASS         ✗ FAIL
         │              │
         ▼              ▼
┌─────────────┐  ┌──────────────────────────────────────┐
│  Commit     │  │  Commit blocked                      │
│  succeeds   │  │  Error messages shown                │
│  ↓          │  │  ↓                                   │
│  git push   │  │  1. Read error messages              │
│  (never     │  │  2. Fix the issues                   │
│  blocked -  │  │  3. git add .                        │
│  informa-   │  │  4. git commit -m "Fix errors"       │
│  tional     │  │     └─→ Tests run again              │
│  only)      │  │                                       │
│  ↓          │  │                                       │
│  GitHub     │  │                                       │
│  deploys    │  │                                       │
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
# → Pre-commit hook runs ./test-before-push.sh automatically
# → If tests pass: commit succeeds
# → If tests fail: fix errors and commit again
git push origin main
# → Pre-push hook only prints an informational Lighthouse reminder; always proceeds

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
# → Pre-commit hook runs ./test-before-push.sh again (passes quickly)
git push origin main
```

**Why test manually here?** To catch errors immediately while editing, instead of waiting until commit time. The pre-commit hook will still run the full test suite, but it will pass quickly since you already fixed everything.

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

### "Commit is blocked by failing tests"

The pre-commit hook runs the full suite on every commit. If it fails:

```bash
# Run manually to see detailed error
./test-before-push.sh

# Fix the errors shown
# Try committing again
git commit -m "message"
```

**Note:** Pushing is never blocked — the pre-push hook is informational only (a Lighthouse reminder). If your commit succeeded, `git push` will always go through.

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
git commit -m "message"           # Triggers the full test suite (blocks on failure)
git push origin main              # Informational Lighthouse reminder only (never blocks)

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
5. **Commit changes** with `git commit -m "message"` (complete test suite runs automatically via hook)
6. **Push to GitHub** with `git push origin main` (informational Lighthouse reminder only, never blocks)
7. **GitHub deploys automatically** once pushed (~2-3 minutes)
8. **Verify live site** at www.j3zz.com

**Remember:**
- ✅ All testing happens locally via the Lefthook pre-commit hook
- ✅ The pre-commit hook automatically runs `./test-before-push.sh` - you don't need to run it manually
- ✅ Only run `./test-before-push.sh` manually if you want to catch errors early during development
- ✅ GitHub Actions only builds and deploys (no testing)
- ✅ The pre-commit hook will block commits if tests fail; pushing itself is never blocked
- ✅ Fix errors and try again until tests pass
- ⚠️ Only skip hooks if you know what you're doing

**For more information:**
- [CLAUDE.md](../CLAUDE.md) - Project overview
- [Testing Documentation](testing.md) - Detailed test configuration
- [Testing Tutorial](TUTORIAL-testing-deployment.md) - Step-by-step guide

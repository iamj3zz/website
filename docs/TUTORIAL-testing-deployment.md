# Testing & Deployment Tutorial

A practical, step-by-step guide to testing and deploying this Jekyll website.

**⚠️ IMPORTANT: All testing happens LOCALLY. GitHub Actions only builds and deploys!**

## Table of Contents
- [Overview: How Testing Works](#overview-how-testing-works)
- [Prerequisites & Setup](#prerequisites--setup)
- [Recommended Workflow (Easiest)](#recommended-workflow-easiest)
- [Manual Testing (Advanced)](#manual-testing-advanced)
- [Deployment Process](#deployment-process)
- [Troubleshooting](#troubleshooting)
- [Quick Reference](#quick-reference)

---

## Overview: How Testing Works

### The New Model: Local Testing Only

**Your local machine is the ONLY quality gate.**

```
┌─────────────────────────────────────────────────────────┐
│  LOCAL MACHINE (You)                                    │
├─────────────────────────────────────────────────────────┤
│  1. Make changes                                        │
│  2. Run tests locally (via Lefthook hooks)              │
│  3. Fix any errors                                      │
│  4. Tests pass → commit and push                        │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  GITHUB ACTIONS (Automated)                             │
├─────────────────────────────────────────────────────────┤
│  1. Receives your push                                  │
│  2. Builds Jekyll site                                  │
│  3. Deploys to GitHub Pages                             │
│  NO TESTING - Deploys immediately                       │
└─────────────────────────────────────────────────────────┘
```

### Why This Approach?

**Benefits:**
- ✅ **Faster deployment** - GitHub Actions completes in ~1-2 minutes instead of 5-10 minutes
- ✅ **Full control** - Test on your machine, see results immediately
- ✅ **No CI/CD wait time** - Fix issues locally without waiting for GitHub
- ✅ **No redundancy** - Tests run once, not twice

**Your safety net:**
- **Lefthook git hooks** automatically enforce all tests before you can push
- **Can't push broken code** - Hooks block the push if tests fail
- **Manual override available** - Skip hooks only when absolutely necessary

### What Gets Tested?

**Automatically enforced by Lefthook:**
1. ✅ **YAML linting** - Validates syntax (pre-commit hook, blocks commits)
2. ✅ **Jekyll build** - Ensures site builds (pre-push hook, blocks pushes)
3. ✅ **html-proofer** - Validates HTML, links, images (pre-push hook, blocks pushes)
4. ✅ **Print tests** - Validates print layouts, QR codes (pre-push hook, blocks pushes)

**Optional (run manually with --full flag):**
5. ⚠️ **Lighthouse CI** - Performance, accessibility, SEO (recommended before major releases)

---

## Prerequisites & Setup

### Initial Installation

Run these commands once when setting up the project:

```bash
# Install Ruby dependencies (Jekyll, html-proofer)
bundle install

# Install Node.js dependencies (Lighthouse CI, Lefthook)
npm install

# Install Lefthook git hooks
npx lefthook install

# Install yamllint (Python tool)
pip install yamllint
# or on some systems:
pip3 install yamllint
```

**Verify installation:**
```bash
yamllint --version        # Should show version number
bundle exec jekyll --version
npx lefthook --version
npx lhci --version
```

**Check hooks are installed:**
```bash
ls -la .git/hooks/
# Should see: pre-commit, pre-push (symlinks or files)
```

---

## Recommended Workflow (Easiest)

### The Simple Way: Let Lefthook Handle Everything

**⭐ RECOMMENDED FOR MOST USERS**

Just work normally - Lefthook will automatically run tests when you commit and push.

**You do NOT need to run `./test-before-push.sh` manually** - the pre-push hook runs it automatically for you!

```bash
# 1. Make your changes
vim _portfolio/31-new-work.md

# 2. Start local server (optional, to preview)
bundle exec jekyll serve
# View at http://localhost:4000

# 3. Commit your changes
git add .
git commit -m "Add new portfolio work"
# → Lefthook pre-commit hook runs YAML validation
# → If YAML fails, commit is blocked

# 4. Push to GitHub
git push origin main
# → Lefthook pre-push hook runs ALL tests automatically
# → If tests pass: push succeeds → GitHub deploys
# → If tests fail: push is blocked → fix errors and try again
```

**That's it!** No need to remember to run tests manually.

### What Happens Automatically

**When you run `git commit`:**
```
→ Running pre-commit hook...
→ Validating YAML in staged files (quick check)...
✓ YAML validation passed!
[main abc123] Add new portfolio work
```

**When you run `git push`:**
The pre-push hook automatically runs `./test-before-push.sh` - the COMPLETE test suite:
```
→ Running pre-push hook...
→ Running: ./test-before-push.sh

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

Counting objects: 5, done.
[... git push output ...]
```

### When Tests Fail

**Example: YAML error on commit**
```bash
git commit -m "Add work"

→ Running pre-commit hook...
→ Validating YAML in staged files...

_portfolio/31-work.md
  42:81     warning  line too long (151 > 150 characters)

❌ YAML validation failed. Fix the errors above before committing.

# Commit blocked! Fix the error and try again.
```

**Example: HTML error on push**
```bash
git push origin main

→ Running pre-push hook...
→ Running: ./test-before-push.sh

[... tests running ...]

→ Step 3/5: HTML Validation & Link Checking
✗ HTML validation failed!

- _site/works/new-work/index.html
  *  internally linking to /assets/missing.jpg, which does not exist

❌ Tests failed! Push blocked.

Fix the errors above, then run again:
  ./test-before-push.sh

# Push blocked! Fix the error and try again.
```

### Skipping Hooks (Use with EXTREME Caution)

**Only skip hooks if:**
- You already ran `./test-before-push.sh` manually and all tests passed
- You're pushing non-code changes (documentation only)
- You know exactly what you're doing

```bash
# Skip hooks for this push only
LEFTHOOK=0 git push
# or
git push --no-verify

# Skip hooks for this commit only
LEFTHOOK=0 git commit -m "message"
# or
git commit --no-verify -m "message"
```

**⚠️ WARNING**: Skipping hooks = deploying untested code = potential site breakage!

---

## Manual Testing (Advanced)

### The Manual Way: Run Tests Yourself

If you want to test before committing, or run specific tests, use these commands:

### Option 1: Use the Test Script (Recommended)

```bash
# Run all tests (fast - no Lighthouse)
./test-before-push.sh

# Run all tests including Lighthouse (slower, ~2 minutes)
./test-before-push.sh --full

# Quick YAML check only (fastest, <1 second)
./test-before-push.sh --quick
```

**This is the same script that the pre-push hook runs automatically.**

### Option 2: Run Individual Tests

**YAML validation (very fast):**
```bash
yamllint .
```

**Jekyll build:**
```bash
bundle exec jekyll build
```

**HTML validation:**
```bash
bundle exec rake test
```

**Print tests:**
```bash
npm run test:print
# PDFs saved to ./print-test-results/
```

**Lighthouse CI (optional):**
```bash
npm run lighthouse
# Reports saved to .lighthouseci/
```

**External links check (slow):**
```bash
bundle exec rake test_external
```

### Development Workflow with Manual Testing

```bash
# 1. Start development server
bundle exec jekyll serve
# Keep this running in one terminal

# 2. Make changes and preview at http://localhost:4000

# 3. Run quick tests while developing
yamllint .                    # Fast YAML check
./test-before-push.sh --quick # Or use the script

# 4. Before committing, run full tests
./test-before-push.sh

# 5. If tests pass, commit and push
git add .
git commit -m "message"
git push origin main
# Hooks will run tests again automatically
```

---

## Deployment Process

### How Deployment Works

```
┌─────────────────────────────────────────────────────────┐
│  Step 1: Local Testing (You)                            │
├─────────────────────────────────────────────────────────┤
│  • Make changes                                         │
│  • Lefthook runs tests on git push                      │
│  • Tests pass → push succeeds                           │
│  • Tests fail → push blocked                            │
└────────────────┬────────────────────────────────────────┘
                 │
                 │ git push origin main
                 ▼
┌─────────────────────────────────────────────────────────┐
│  Step 2: GitHub Actions Build                           │
├─────────────────────────────────────────────────────────┤
│  • Checks out code                                      │
│  • Sets up Ruby                                         │
│  • Runs: bundle exec jekyll build                       │
│  • NO TESTING - Just builds                             │
└────────────────┬────────────────────────────────────────┘
                 │
                 │ Build artifact
                 ▼
┌─────────────────────────────────────────────────────────┐
│  Step 3: GitHub Pages Deployment                        │
├─────────────────────────────────────────────────────────┤
│  • Deploys to www.j3zz.com                              │
│  • Site live in ~30-60 seconds                          │
└─────────────────────────────────────────────────────────┘
```

### Typical Deployment Timeline

**Local testing (Lefthook):** ~30-60 seconds
- YAML validation: <1 second
- Jekyll build: ~5-10 seconds
- HTML proofer: ~20-30 seconds
- Print tests: ~10-20 seconds

**GitHub Actions:** ~1-2 minutes
- Checkout & setup: ~20 seconds
- Bundle install: ~30 seconds
- Jekyll build: ~10 seconds
- Upload & deploy: ~30 seconds

**Total time from push to live:** ~2-3 minutes

**Old system (with CI testing):** ~5-10 minutes

### Watching Deployment

**View GitHub Actions progress:**
1. Go to your repository on GitHub
2. Click "Actions" tab
3. Click on the latest workflow run
4. Watch build and deploy steps

**Success indicators:**
- ✅ Green checkmark on workflow
- ✅ Commit shows green checkmark on main branch
- ✅ Site updated at www.j3zz.com

### What If Build Fails?

**Rare, but possible if:**
- Production environment differs from local
- Dependencies changed
- GitHub Pages infrastructure issue

**Check the logs:**
1. Go to Actions tab
2. Click failed workflow
3. Click "build" job
4. Expand "Build with Jekyll" step
5. Read error messages

**Common fixes:**
- Update `Gemfile.lock`: `bundle update github-pages`
- Check Jekyll version compatibility
- Verify `_config.yml` is valid

---

## Troubleshooting

### "Hooks didn't run when I pushed"

**Check if hooks are installed:**
```bash
ls -la .git/hooks/
# Should see: pre-commit, pre-push
```

**Reinstall hooks:**
```bash
npx lefthook install
```

**Check Lefthook config:**
```bash
cat lefthook.yml
# Should have pre-commit and pre-push sections
```

### "Tests pass locally but I want to skip hooks"

**You shouldn't need to**, but if you must:
```bash
LEFTHOOK=0 git push
```

**Better approach:**
```bash
# Run tests manually first
./test-before-push.sh

# If all pass, push normally (hooks will run again but pass quickly)
git push origin main
```

### "YAML validation is too strict"

**Adjust rules in `.yamllint`:**
```yaml
rules:
  line-length:
    max: 200  # Increase if needed
    level: warning  # Change to warning instead of error
```

### "Tests are too slow"

**Default tests (without --full) should be fast:**
- YAML: <1 second
- Build: ~5-10 seconds
- HTML: ~20-30 seconds
- Print: ~10-20 seconds
- **Total: ~30-60 seconds**

**If slower:**
- Check disk space
- Clear build cache: `bundle exec jekyll clean`
- Check for large image files

**Lighthouse is intentionally optional** (use --full flag only before releases)

### "Print tests fail in WSL"

**Expected!** Chrome may not be available in WSL.

**The script handles this gracefully:**
```
⚠ Print tests skipped - Chrome not available in this environment
This is expected in WSL/headless environments.
```

**This is OK** - print tests validate QR codes and layouts, not critical for every push.

**To test print layouts:**
1. Run on a machine with Chrome installed, or
2. Test manually by printing pages in your browser

### "GitHub Actions deployment failed"

**Check the logs:**
1. Actions tab → Failed workflow → build job → logs

**Common causes:**
- GitHub Pages outage (rare)
- Invalid `CNAME` file
- `_config.yml` has production-only setting that breaks build

**Quick fix:**
```bash
# Test production build locally
JEKYLL_ENV=production bundle exec jekyll build

# If it fails locally, fix the issue
# If it builds locally but fails on GitHub, check GitHub status
```

### "Want to test before major release"

**Run full test suite including Lighthouse:**
```bash
./test-before-push.sh --full
```

**Review reports:**
```bash
# Open Lighthouse reports
open .lighthouseci/*.html

# Check print PDFs
open print-test-results/*.pdf
```

---

## Quick Reference

### Common Commands

```bash
# Development
bundle exec jekyll serve          # Start local server
bundle exec jekyll build          # Build site

# Testing (automatic via hooks)
git commit -m "message"           # Triggers YAML validation
git push origin main              # Triggers full test suite

# Testing (manual)
./test-before-push.sh             # All tests (fast)
./test-before-push.sh --full      # All tests + Lighthouse
./test-before-push.sh --quick     # YAML only

# Individual tests
yamllint .                        # YAML validation
bundle exec rake test             # HTML + links
npm run test:print                # Print layouts
npm run lighthouse                # Performance/a11y

# Hooks
npx lefthook install              # Install hooks
npx lefthook run pre-commit       # Test pre-commit hook
npx lefthook run pre-push         # Test pre-push hook
LEFTHOOK=0 git push               # Skip hooks (caution!)
```

### Pre-Commit Checklist

Before pushing changes:

- [ ] Tests ran automatically via pre-push hook (or manually via `./test-before-push.sh`)
- [ ] All tests passed (YAML, build, HTML, print)
- [ ] Previewed changes locally at http://localhost:4000
- [ ] Checked for console errors in browser
- [ ] (Optional) Ran Lighthouse for major changes (`--full` flag)
- [ ] Committed with clear, descriptive message
- [ ] Pushed to main branch
- [ ] Verified deployment on www.j3zz.com after push

### When to Run Full Tests

**Quick tests (default, via hooks):**
- Every commit and push (automatic)
- During development
- Small changes

**Full tests (with `--full` flag):**
- Before major releases
- After significant design changes
- After changing CSS/JavaScript
- Monthly/quarterly quality checks

### Test Output Locations

```
.lighthouseci/          # Lighthouse HTML reports
print-test-results/     # Print test PDFs
_site/                  # Built Jekyll site
.bundle/                # Ruby gems cache
node_modules/           # Node.js packages
vendor/                 # Bundler packages
```

### Getting Help

**Test failures:**
1. Read the error message carefully
2. Check line numbers and file paths
3. See [Testing](testing.md) for detailed troubleshooting

**Deployment issues:**
1. Check Actions tab on GitHub
2. Review build logs
3. Test production build locally: `JEKYLL_ENV=production bundle exec jekyll build`

**Hook issues:**
1. Verify hooks installed: `ls -la .git/hooks/`
2. Reinstall: `npx lefthook install`
3. Check config: `cat lefthook.yml`

**General questions:**
- See [CLAUDE.md](../CLAUDE.md) for project overview
- See [Testing](testing.md) for detailed test configuration
- Check GitHub Actions logs for deployment details

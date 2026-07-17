# AI Image-Cloaking Workflow (Reference Only)

**Status: not implemented. This is a reference doc for future decision-making, not a description of an active workflow.** It lives in `docs/`, which is excluded from the Jekyll build (`_config.yml` → `exclude:`), so nothing here ships to the live site.

## How this differs from the existing rights-protection layers

CLAUDE.md's "AI-Scraping & Rights Protection Workflow" section documents five layers already in place: `robots.txt`, the `noai`/`noimageai` meta tag, structured-data licensing fields, the Licensing & Rights page, and embedded EXIF/XMP metadata via `scripts/embed-image-rights.sh`. All five are **opt-out signals** — they either ask a crawler to behave, or attach an invisible, lossless notice to the file. None of them change what happens if a crawler ignores the signal and trains on the image anyway.

Image-cloaking tools are a different category: they perturb the actual pixel data so that even a non-compliant scraper gets degraded or poisoned training data. Source: [MIT Technology Review, "Four ways to protect your art from AI," Nov 2024](https://www.technologyreview.com/2024/11/21/1107108/four-ways-to-protect-your-art-from-ai/).

## Tool comparison

| Tool | What it does | Visible effect? | How it's applied | Key caveat |
|---|---|---|---|---|
| **Glaze** | Cloaks artistic style so models misidentify/fail to mimic it | No (imperceptible pixel noise) | Free desktop app (Mac/Windows), or WebGlaze queue for artists without suitable hardware | Protection can be stripped by newer techniques (e.g. LightShed); needs periodic reapplication as the arms race evolves |
| **Nightshade** | Poisons training data by mislabeling subject matter, corrupting future model behavior | No (imperceptible pixel noise) | Separate desktop app from Glaze — the two are not combined in one download | Only affects models trained *after* poisoning; doesn't retroactively fix already-trained models |
| **Mist** | Adds noise that produces visible artifacts in AI-generated forgeries derived from the image | Yes, in downstream AI outputs (not in the original) | Desktop app / web tool | The visible-artifact approach is a deterrent rather than a block — it doesn't stop scraping, just degrades misuse |
| **PhotoGuard** | Immunizes photos against malicious manipulation/deepfake editing | No | Research tool, less consumer-packaged than Glaze/Nightshade | Oriented at photo manipulation resistance, not style-mimicry protection — a different threat model than the others |
| **Do Not Train Registry** (Spawning AI) | Centralized opt-out list; partner AI companies (Hugging Face, Stability AI) exclude registered work before training | N/A (registry, not pixel-level) | Sign up work via the registry | Depends entirely on voluntary compliance by participating companies — no enforcement mechanism |

## Recommended workflow, if adopted

**This section describes a hypothetical pipeline addition — nothing below is currently automated or wired into the site's scripts.**

1. **Scope to high-value originals, not derivatives.** Candidates are the master high-res files that are actually training-quality: artwork sources in `docs/HIGHRES-IMAGES/` (used by `scripts/process-artworks.sh`) and bio gallery hi-res files in `assets/bio/gallery/hires/`. Downsized web thumbnails are lower priority since they're less useful for style mimicry than the hi-res originals.

2. **Cloak before deriving.** Apply Glaze/Nightshade to the master high-res source **before** running `scripts/process-artworks.sh` (which generates `thumbnail.png`/`print.png`) and before `scripts/embed-image-rights.sh` (which only writes metadata tags, it doesn't touch pixels). That way every downstream derivative — thumbnail, print version — inherits the cloaked pixels automatically, and the existing metadata-embedding step still runs last as today.

3. **Stays manual — cannot be scripted into Lefthook.** Unlike `embed-image-rights.sh`, which runs as an automatic `pre-commit` hook on staged images, Glaze and Nightshade are separate GUI desktop apps with no CLI suitable for a git hook. This would remain a one-off manual step performed on each new artwork or press photo before it enters the existing automated pipeline — not something the pre-commit hook can enforce or verify.

4. **Registry signup is separate and passive.** Registering work with the Do Not Train Registry is a one-time, per-artist action (not per-image, not repo-related) — it doesn't touch files in this repository at all.

## Social Media & Video Platforms (YouTube, Vimeo, Instagram, etc.)

Distinct scope from everything above: this content lives entirely on third-party servers, not in this repo. There are no files here to cloak or embed metadata into — none of the layers above (robots.txt, EXIF/XMP embedding, Glaze/Nightshade) reach content hosted on a platform's own infrastructure. Protection is limited to whatever account-level settings and ToS terms each platform offers.

**Why this matters for this site specifically:** the homepage splash and bio page embed a hosted video (YouTube or Vimeo) via `<iframe>`, per CLAUDE.md's "Intro / Press Video Workflow." The embed itself grants no additional AI-training rights beyond what already exists once the video is public on that platform — exposure is determined entirely by the hosting platform's policy, not by how this site displays it.

### Platform opt-out settings (account-level, not per-post/per-video)

| Platform | Opt-out mechanism | Caveat |
|---|---|---|
| YouTube / Google | Google account / YouTube Studio privacy settings — look for a data-use-for-AI-training toggle | Google's ToS has historically reserved broad usage rights for uploaded content; toggle location and scope have changed before and may again — verify current setting rather than assuming it still exists as described |
| Vimeo | Vimeo has publicly stated customer content isn't used to train AI models | Reconfirm this is still current before relying on it; policies get revised |
| Instagram / Facebook (Meta) | Meta's AI-training objection mechanism (strongest for EU/EEA accounts under GDPR); some regions get an in-app toggle | Opt-out, not opt-in — no action means content is treated as available for training |
| X (Twitter) | Settings → Privacy → data-sharing-with-Grok/xAI toggle | Reported to default to enabled for most accounts; must be manually disabled |
| TikTok | Privacy settings — check for a data/AI-training toggle | Policy and toggle location change frequently; re-check periodically rather than trusting a past check |
| LinkedIn | Settings → Data Privacy → "Data for Generative AI Improvement" toggle | Off is the protective setting |

### Recommended action

- These are personal-account settings, not code — nothing here is implementable in this repo. Treat the table above as a periodic manual checklist, not a one-time task, since toggle locations and policies shift without notice.
- The one concrete, low-effort lever this project already supports: if AI-training exposure for the intro video becomes a higher priority than reach, switching from YouTube to Vimeo requires editing only the five keys in `_config.yml` described in CLAUDE.md's "Intro / Press Video Workflow" (`intro_video_embed_url`, `intro_video_title[_fr]`, `intro_video_caption[_fr]`) — no template changes.
- Where a caption/description field exists (YouTube description, Instagram caption, etc.), a short "not licensed for AI/ML training" note can be added as a weak, non-binding signal — same limitation as the site's own `robots.txt`/meta-tag approach: it only affects platforms or downstream scrapers that choose to respect it.

### Known limitations specific to this scope

- Opt-out toggles are frequently **not retroactive** — they may only exclude content from future training runs, not models already trained on existing uploads.
- Regional rights differ: EU/EEA objection mechanisms (GDPR-backed) don't necessarily extend the same protection to accounts/viewers elsewhere.
- Platform ToS changes unilaterally and without much notice; a setting verified today isn't a permanent guarantee.

## Governance: same category as the watermarking decision

CLAUDE.md explicitly lists watermarking gallery images as **out of scope, requiring separate sign-off** — because it's a visual/quality trade-off, unlike the current metadata layer which is invisible and lossless. Image cloaking belongs in that same bucket for the same reason: Glaze/Nightshade/Mist intensity settings trade protection strength against perceptible quality loss, and that trade-off should be a per-series or per-image call, not a blanket default.

This is especially true for the **bio gallery press photos**: CLAUDE.md notes those are *intentionally* left downloadable at high resolution for press/media use. Any cloaking applied there would need to be verified as not degrading the image for its intended press use case — a stronger cloaking setting that's fine for a gallery artwork print might not be acceptable for a press photo meant for print publication.

## Known limitations

- **Cat-and-mouse dynamic.** LightShed and similar techniques have already demonstrated they can strip Glaze/Nightshade protection from cloaked images. These tools are a deterrent, not a permanent guarantee.
- **Re-evaluation needed over time.** Because the underlying arms race is ongoing, any adopted cloaking workflow would need periodic review — a tool effective today may be defeated within a year or two.
- **Defense-in-depth, not a replacement.** Cloaking would supplement, not replace, the five existing opt-out-signal layers already documented in CLAUDE.md.

## References

- [MIT Technology Review — "Four ways to protect your art from AI" (Nov 2024)](https://www.technologyreview.com/2024/11/21/1107108/four-ways-to-protect-your-art-from-ai/)
- Glaze / Nightshade — developed by the Glaze Project, University of Chicago
- Mist, PhotoGuard — referenced in the above article; consult current tool homepages before adoption, as availability and effectiveness both shift over time
- Do Not Train Registry — operated by Spawning AI

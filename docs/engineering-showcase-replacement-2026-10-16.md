# Homepage engineering showcase replacement — 2026-10-16

## Final owner instructions

The owner supplied a two-page engineering image, a CAD bearing/restraint sheet, and a client reply. Replace the currently displayed technical-proposal module with a combined image, preserve every engineering detail, remove the two company-information lines at the top of the two-page image, and place the homepage video and proposal next to each other with balanced B2B proportions. This supersedes the earlier two-card engineering draft.

## Baseline and coordination

Another computer advanced main from `c32aebd` to `625000ba7b07e5f93c4e7615e0a0a504e59dc39b`, including the owner's prior removal of the countertop proposal and selection of the stone-cutting video for the homepage. The superseded, uncommitted two-card draft was preserved in a local named Git stash. The managed checkout fast-forwarded to current main before implementation. Do not reapply that draft or restore the removed countertop case.

## Combined image

- Final size: 3187×1569. Source 1 stays at native 1502×1047; source 2 stays at native 1525×1031. No resampling, cropped notes, reconstructed CAD or altered values inside either source.
- Only source 1 has two opaque white masks, covering the two top company-information lines requested by the owner. Source 2 is unmodified. Pixel comparison of each source rectangle extracted from the final PNG found zero changed channels outside those two authorized masks.
- The supplied client feedback is transcribed verbatim in the outer quote panel. No star rating, approval badge or completed-installation assertion is added. Engineering review and production-release notes inside the supplied drawings remain visible.
- Public files: `/assets/project-evidence/engineering-proposal-original-details-v2.png` and its lossless `.webp` rendition. They decode to identical pixels without EXIF/XMP. PNG SHA-256: `f78c780ccba9db79c6a649f347288b767718d954b193ae35ed6da5a6ae6bcccc`.
- The built-in image tool was used for a combined layout study. The final image inserts the actual screenshot pixels; generated interpretations are not used as engineering source evidence.
- Prompt summary: complete engineering images side by side, ivory/slate B2B frame, remove only top company-information lines, preserve every detail and development-stage note, and quote the client's reply exactly without invented ratings or validation claims.
- Source screenshots, fidelity reports, old assets and intermediate drafts stay outside the implementation checkout in `F:\Atelier-Marble-Site\outputs\engineering-showcase-replacement-20261016`.

## Page layout and copy

- Homepage evidence area uses a 1:2 desktop grid: stone-cutting video on the left, technical proposal on the right. It stacks into one column below the desktop breakpoint.
- Both cards share borders, spacing, title scale and action styling. The portrait video is constrained to a comfortable width; the combined image always retains its complete aspect ratio. Full-resolution viewing opens the PNG in a new tab, without a lightbox modal.
- Native HTML client feedback remains readable on phones. The existing `home-workshop-walkthrough` and `engineering-case-study` anchors and page-specific inquiry route are retained.
- The standalone fabrication-page walkthrough retains its existing presentation; the owner's newer homepage stone-cutting selection is preserved.
- Removed unsupported old-module claims of verified structural load/clearances and 100% elimination of installation conflicts. The case is presented as a technical proposal under engineering review. No Review/AggregateRating markup.
- The old two `stone-fixing-technical-proposal` assets are backed up locally and removed from publication as requested. The replacement is a new versioned filename.
- Existing service titles, descriptions and vanity observation-window metadata are unchanged; homepage lastmod remains the actual update date 2026-10-16.

## Acceptance

Eleven targeted tests passed, covering exact quotation/status, absence of old claims, lossless images, sitemap parity, homepage positioning and both existing video modes. Build passed with 333 pages and 202 audited manifest assets. The 30-page local SEO audit passed with 248 displayed image associations across 24 pages.

Actual browser acceptance at 1440px measured a 418.66px left card and 837.34px right card, equal top coordinates and equal heights, with no horizontal overflow. At 390px both cards were 343px wide and stacked in order, with no overflow. The featured cutting clip played through to 12.817 seconds, ended without a media error and kept the current homepage URL. The full combined image loaded at its expected intrinsic width of 3187px. Source-specific inquiry links were verified without submitting a form.

Production SHA/asset and browser verification are recorded during release execution. No customer form or outreach message is submitted for acceptance.

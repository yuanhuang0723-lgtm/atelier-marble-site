# 18-second workshop walkthrough — 2026-10-14

## Scope and provenance

The owner supplied `F:/copy_B9BFCDE9-F776-4101-B5D4-78576C8CE7B0.MP4` and explicitly authorized implementation of the proposed video module. Reviewed frames show workshop-wide views, stone handling, work-station activity, wooden packing frames, and the closing brand card. The new descriptions state only those visible facts.

This work starts from remote main `045a35c`, preserving the changes made on the other computer. It uses managed branch `codex/factory-workshop-video`; the original F-drive checkout's uncommitted documents and outputs were retained. No customer messages, inquiries, or automated outreach were sent by this release task.

## Media

- Original: 79,171,702 bytes; 3840 x 2160 HEVC, AAC; container duration 17.880033 seconds.
- Web copy: `/videos/atelier-marble-workshop-walkthrough.mp4`; 7,908,467 bytes; 1920 x 1080 H.264 / yuv420p and AAC; duration 17.866667 seconds. It is about 90 percent smaller. All scenes and the original audio track are retained; the original file is untouched. FFmpeg strips container metadata and puts the moov atom ahead of mdat for fast start.
- Poster: `/videos/posters/atelier-marble-workshop-walkthrough.jpg`; reviewed original frame near 1 second, 1280 x 720; 107,045 bytes.
- Original SHA-256: `1a331e919098ead52d7265f7db30d60e7e90abba02e9a34430afcb85a2ce0bdd`.
- Web video SHA-256: `98432ca09928f2b65a4873888792d8ecede4969226c847eceb43059e85c64d88`.
- Poster SHA-256: `118c1265101ed0209062e0609c5c3417eae704ac55467c78c88b830a262bc7bf`.

## Implementation

- The existing commercial landing shell has an optional afterHero slot. Only custom fabrication enables it, before the drawing and detailed procurement sections.
- A 16:9 player sits beside brief copy and an inquiry link, stacking on mobile. Initial state displays the poster; preload=none, no autoplay, muted by default, inline playback. Native controls appear after the user starts playback; a load error provides a direct-video fallback.
- Homepage workshop area displays the poster with a link to the fabrication-page player, and has no video/source element. The factory gallery retains all 16 existing clips and adds this landscape clip as number 17.
- Inquiry URL retains the exact sourcePage and Commercial Stone Projects type. New video_start, video_complete, workshop_video_entry_click and workshop_inquiry_click are diagnostics, not generate_lead or Ads conversions. Start/complete are counted once per mounted player. These are implemented event hooks; GA4 receiver acceptance for the new events has not been established by the local checks.
- Fabrication and factory pages expose the video's actual public content URL, thumbnail, description, publication date and duration in VideoObject. Adding this schema does not guarantee a Google video result or index entry.
- Image sitemap regeneration includes the new poster's actual page associations. Significant lastmod dates for homepage, fabrication and factory are updated to October 14. Vanity metadata and inquiry API are not edited by this release.

## Local acceptance

- Six relevant test files: 16/16 checks passed. They cover retained homepage routes/gallery, video framing and initial loading, schema/media references, image-sitemap parity, snippet lengths, and keeping video diagnostics out of Ads conversion counting.
- Full ordinary Turbopack build passed with 333 pages; asset audit passed 202 records. A cross-drive dependency junction initially failed Turbopack root validation; it was removed without touching its original target, and an independent npm ci resolved the environment issue.
- Local SEO audit passed 30 sitemap pages, 29 strict snippets, and 246 displayed image associations on 24 image pages.
- Actual controlled browser: 1440 x 900 desktop and 390 x 844 mobile have no horizontal overflow. Player is 754 x 424.125 desktop and 341 x 191.8125 mobile, both 16:9. Before click it was paused and readyState=0; after one actual click it played to ended=true at 17.866667 seconds, with 1920 x 1080 decoded dimensions and no media error.
- Actual mobile inquiry link opened the correct contact URL and lightweight form. No submission was made. Home preview image loaded at 1280 x 720, and the home module contained zero video elements.
- Screenshots: original checkout `outputs/factory-video-review-20261014/acceptance/`. These are local evidence, not proof of the public deployment. Production acceptance must separately verify the public video bytes, range delivery, schema and actual browser playback after deployment.

## Evidence boundary

The imported October 13 upstream page already contains statements about five-axis equipment, fixed dimensional tolerances and ASTM values. This video does not verify those claims; no new model, capacity, test result, delivery guarantee or equipment-ownership claim was added by this task. Those existing statements require a separate source review. No new ranking, click or inquiry improvement is claimed.

## Homepage inline playback correction — 2026-10-14

The owner requested playback directly on the homepage. This later revision supersedes the original c6ac30d poster-link homepage behavior described above. Home now renders the same native player with preload=none and default mute. Its play button does not navigate. The hero Watch Workshop Videos link scrolls to #home-workshop-walkthrough on the same page. The nearby quote retains sourcePage=/, and the homepage VideoObject uses the homepage watch URL. The factory gallery remains a separately labeled navigation link. Media files are unchanged. Thirteen targeted checks passed; actual homepage playback and production acceptance are verified after this revision's build/deployment.

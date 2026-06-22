# Atelier Marble

Premium B2B stone website built with Next.js for an international luxury marble and architectural stone studio.

The site uses:

- one generated homepage hero image for luxury first impression
- generated card cover thumbnails for selected featured cards
- enhanced real local images from the user's source folder for project trust, materials, factory evidence, and case study galleries

## Asset Pipeline

Run the reusable pipeline whenever new source images are added:

```powershell
npm run prepare:assets -- "D:\石材素材"
```

Run the naming audit after regenerating assets:

```powershell
npm run audit:assets -- "D:\石材素材"
```

The script scans local image files, classifies them by source folder, enhances them non-destructively, writes optimized WebP files into `public/materials/*`, and regenerates `data/assets.json`.

Target folders:

- `public/materials/kitchen-countertop`
- `public/materials/hotel-project`
- `public/materials/coffee-table`
- `public/materials/carving-decor`
- `public/materials/factory`
- `public/materials/materials`
- `public/materials/projects`

The enhancement pass improves exposure, white balance feel, soft contrast, natural texture sharpness, noise appearance, and export-friendly sizing while preserving the original stone type, product shape, and real project authenticity.

## Asset Naming Integrity

Website asset titles, labels, alt text, and project detail names are generated from the local source folder and file names. Do not hardcode product names in components when a real source asset exists.

Current source-folder naming map:

- `发货` -> `Shipping & Export`
- `石材厨柜板、洗手台` -> `Stone Cabinet & Basin Slab`
- `石材台面、茶几` -> `Stone Countertop & Coffee Table`
- `石材成品` -> `Finished Stone Product`
- `石材雕刻摆件` -> `Stone Sculpture Piece`
- `车间` -> `Workshop Production`
- root-level video files -> `Production Process Video - [Date/Name]`

Every manifest item also stores `sourceFolder` and `sourceName` so the website display text can be audited against `D:\石材素材`.

Root-level video media are surfaced in the `Projects` page as documentary production references, with the original file name preserved in the generated title.

## Build Guard

The `npm run build` command runs the asset audit first through `prebuild`. A GitHub Actions workflow in `.github/workflows/ci.yml` mirrors the same guarded build so naming regressions fail before deployment.

## Dynamic Project Case Studies

Project detail pages are generated from `data/assets.json`.

- Project URLs use category-prefixed slugs, for example `/project/kitchen-countertop-{asset-id}`.
- Legacy `/projects/{asset-id}` links redirect to the canonical `/project/{category}-{asset-id}` route.
- Each project detail page uses the clicked image as the hero and automatically shows all enhanced local images from the same category as the full gallery.
- Each page includes a professional English case description, material type, application, finish type, production evidence, and the CTA `Request Similar Project Quote`.

This keeps the site curated like a luxury portfolio while still exposing the full real local asset archive for buyer trust.

## Conversion Tracking

The site includes an environment-driven Google tracking layer. It is safe by default: if no public tracking IDs are configured, no Google script is loaded.

Configure these variables in Vercel when Google Analytics or Google Ads conversion tracking is ready:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=XXXXXXXXXXXXXXX
```

Tracked inquiry events:

- `whatsapp_inquiry_click`
- `email_inquiry_click`
- `qualified_inquiry_form_submit`

If `NEXT_PUBLIC_GOOGLE_ADS_ID` and `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` are both present, each inquiry event also sends a Google Ads `conversion` event. Campaign parameters such as `utm_source`, `utm_campaign`, `utm_term`, and `gclid` are stored in session storage and attached to inquiry events.

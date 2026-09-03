# Production Inquiry Setup

This checklist activates private CAD/BOQ uploads for the production site:

`https://atelier-marble-site.vercel.app`

## 1. Create the R2 bucket

Use the Cloudflare account that owns the site and create a private bucket, for example:

`atelier-marble-inquiries`

Do not enable public `r2.dev` access. Uploaded project files must remain private.

## 2. Create the least-privilege R2 credentials

Create an R2 API token limited to this bucket with object read and write access. Do not use an account-wide administrator token for the website runtime.

The credentials are used only by the server-side signing routes:

```text
R2_ACCOUNT_ID
R2_ACCESS_KEY_ID
R2_SECRET_ACCESS_KEY
R2_BUCKET_NAME
```

## 3. Configure CORS and lifecycle

From the repository root, run the configuration helper with the variables set in the local shell. Do not commit the shell values or a `.env` file.

```bash
npm run configure:r2
```

The helper configures:

- PUT, GET, and HEAD from the Vercel origin only.
- `content-type` and `x-amz-*` request headers.
- 90-day expiration for objects under `inquiries/`.

## 4. Add Vercel Production variables

In the Vercel project settings, add these variables to the **Production** environment:

```text
NEXT_PUBLIC_SITE_URL=https://atelier-marble-site.vercel.app
R2_ACCOUNT_ID=...
R2_ACCESS_KEY_ID=...
R2_SECRET_ACCESS_KEY=...
R2_BUCKET_NAME=atelier-marble-inquiries
INQUIRY_RECIPIENT=ding@atelier-marble.ltd
```

Never add `R2_SECRET_ACCESS_KEY` to GitHub, browser code, or a `NEXT_PUBLIC_*` variable.

## 5. Redeploy and verify

Push or redeploy the current `main` branch, then run:

```bash
npm run check:public
```

On `/contact`, verify all of the following manually:

- A PDF uploads successfully.
- A JPG uploads successfully.
- An XLSX uploads successfully.
- The selected file name and size are visible.
- A selected file can be removed before submission.
- EXE, HTML, and JS files are rejected.
- Files over 25 MB are rejected.
- More than 5 files are rejected.
- The inquiry email contains the file names and temporary download links.
- Opening the object without the signed link returns no public file.
- The signed download link expires after its configured period.
- GA4 receives `file_upload_completed`, `qualified_inquiry_submitted`, and `generate_lead`.

The website can remain online while this setup is pending. Before the R2 variables exist, the form must show an upload configuration error rather than report a false success.

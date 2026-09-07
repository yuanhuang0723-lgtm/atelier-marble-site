# Production Inquiry Setup

This checklist configures the private CAD/BOQ upload flow for:

`https://ateliermarblestone.com`

## 1. Supabase project and private bucket

Use the intended Supabase account and an existing free project when one is available. Do not activate billing for this site without explicit approval.

Run the reviewed migration from the repository root with the Supabase CLI or SQL editor:

`supabase/migrations/20260907220000_inquiry_storage.sql`

It creates or updates the private `inquiry-files` bucket with a 25 MiB object limit and creates the server-only `inquiry_idempotency` table. The migration enables RLS and grants no table access to `anon` or `authenticated`. Do not add public bucket access or anonymous object policies.

## 2. Vercel Production variables

Add these to the existing Vercel project `atelier-marble-site`, Production environment only:

```text
NEXT_PUBLIC_SITE_URL=https://ateliermarblestone.com
SUPABASE_URL=https://<project-ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<server-only-secret>
SUPABASE_INQUIRY_BUCKET=inquiry-files
INQUIRY_UPLOAD_SECRET=<optional-independent-server-secret>
INQUIRY_RECIPIENT=ding@atelier-marble.ltd
```

`SUPABASE_SERVICE_ROLE_KEY` and `INQUIRY_UPLOAD_SECRET` must never be committed, sent to the browser, added to GitHub, or exposed as `NEXT_PUBLIC_*`. The browser receives only a short-lived signed upload URL and an opaque, signed receipt. File bytes go directly from the browser to Supabase Storage; they do not pass through a Vercel function.

## 3. Application behavior and limits

- Up to 5 files, 25 MiB per file.
- PDF, DWG, DXF, XLS, XLSX, JPG/JPEG, PNG, and ZIP are accepted.
- CAD files are accepted when the browser reports an empty MIME type; extension and the shared MIME policy are still checked.
- Empty files, unsupported extensions/MIME combinations, forged receipts, mismatched sizes, duplicate keys, missing objects, and cross-session substitutions are rejected.
- Download links are private signed URLs with a maximum 7-day expiry.
- Submission idempotency is durable in Supabase. `processing`, `pending`, `failed`, and `sent` records prevent a retry from blindly sending a second email. The application also has an in-memory rate limit per instance; it is not presented as a cross-instance rate limiter.

## 4. Verify without sending a customer inquiry

Before any live test, run the local focused tests and build. Do not submit invalid data or real customer files to production. A real success test requires an explicitly approved test inquiry and checking the received message in the intended mailbox; until then email delivery is **unverified** even if the provider accepts an HTTP request.

For an approved live test, verify:

- PDF, JPG, and XLSX upload successfully and display their names and sizes.
- A file can be removed and selected again; more than 5 files and files over 25 MiB are rejected.
- Direct unauthenticated access to the private bucket/object is denied.
- The email contains project fields, file names, and temporary private links.
- The final response is not successful for provider rejection, malformed provider response, upload failure, or uncertain delivery.
- Reloading `/contact/thank-you` does not generate a second lead event.
- GA4 receives only non-personal context; it must never receive email, phone, notes, file names, or signed URLs.

If Supabase account/project access is unavailable, leave the website upload flow unconfigured and report that exact missing step. The temporary alternative is for a buyer to submit project details and send attachments separately by email; that is not fulfillment of direct website upload.

# Contact inquiry repair and simplification — 2026-10-22

## Verified problem

The user's existing production contact tab displayed `The inquiry service is temporarily unavailable.` after a submission. Its unsent draft was preserved; it was not submitted again. The configured Supabase host `wdrolyfczxmphbglgana.supabase.co` returned DNS name-not-found locally. The API requires its durable submission claim before email delivery unless `INQUIRY_DEGRADED_NO_FILE_FALLBACK=true` is enabled. Production SMTP was configured, while this fallback flag was false.

This establishes an unavailable database endpoint and the API failure path. It does not establish whether the Supabase project is paused, deleted or otherwise unavailable; its dashboard could not be read successfully.

## Changes

- `/contact` uses a compact form containing email and a short project note, with a single `Send inquiry` submit action. Name, company, country, quantity, budget, deadline and online attachments are omitted from this short form. Drawings can follow by email or WhatsApp.
- Replace the large hero and repeated preparation lists with a concise introduction and a direct-contact panel. Clarify that the email link opens the visitor's email app.
- Hide the floating WhatsApp control on this page so it cannot cover the mobile submit button. Keep the in-page WhatsApp link and retain the floating control elsewhere.
- Preserve existing API validation, honeypot, submission lock, attribution, project context, idempotency logic and thank-you tracking. Other commercial pages retain their published detailed form.
- Enable the existing production `INQUIRY_DEGRADED_NO_FILE_FALLBACK` setting. No SMTP password or other credential is changed. This setting takes effect in a new deployment.
- Update only `/contact`'s sitemap modification date, reflecting the real page change. Titles, descriptions and vanity observation metadata are retained.

## Delivery boundaries

During database failure, the existing fallback sends text inquiries through the configured SMTP transport. Its fallback duplicate cache is process-local rather than durable across server instances or restarts. The durable database service has not been restored by this work. Online attachment delivery on detailed forms remains dependent on storage; the simplified contact form deliberately asks buyers to share drawings afterwards.

An API success proves provider acceptance, not independently observed inbox arrival. Report actual production submission, SMTP evidence and any available mailbox verification separately. Use clearly identified internal tests with `utm_source=internal_verification&utm_medium=internal_test`; exclude them from business inquiry counts.

## Workspace and validation

Implementation: `C:\Users\86580\.codex\worktrees\contact-simplify\Atelier-Marble-Site`, branch `codex/contact-simplify`, based on remote main `292fb8f`. The previous worktree has an unpublished about-page commit and active drafts; these were not published. Related original drafts were copied into the local evidence folder before review; the previous checkout itself was not changed.

Evidence: `F:\Atelier-Marble-Site\outputs\contact-simplify-20261022\`. Credentials and deployment environment values are not included in that folder or Git.

Baseline build and production public-route check passed. Final acceptance includes static/API tests, production build, local public-route/SEO checks, actual browser layout at desktop and mobile widths, and a production internal submit. The two existing homepage browser checks are verified through the approved interactive browser instead of launching a second browser through the terminal. The detailed outcomes and production deployment identity are saved with the evidence.

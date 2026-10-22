# Inquiry mailbox discrepancy and delivery tracing — 2026-10-22

## Evidence and remaining uncertainty

The owner confirmed receiving `INTERNAL_DELIVERY_TEST_20261022_SIMPLE_FORM`, then reported that a separate self-submission did not arrive in `ding@atelier-marble.ltd`, despite seeing the thank-you page.

Production request logs show two POSTs to `/api/inquiry`, at Beijing time 11:55:11 and 12:02:34, both HTTP 200 through the no-file fallback. Neither request logged an SMTP failure. These logs establish application/provider acceptance, not actual inbox placement. The earlier internal-test receipt does not prove that the owner's separate inquiry was received.

The previous SMTP subject was identical for every inquiry of the same project type. Mail-thread grouping is therefore a plausible explanation to check, not a verified cause. The owner was asked to search the old subject and expand its conversation; that finding must be recorded separately. Enterprise webmail's login pane rendered blank during the check, so its folders, message headers and delivery tracing have not been inspected.

## Improvements

- Generate a stable, non-personal inquiry reference from the idempotency key (`AM-` plus 12 hex characters).
- Put that reference in every transport's subject and message body; retries retain it, while separate inquiries have separate subjects.
- Use a traceable SMTP Message-ID. Log the reference, provider Message-ID, recipient acceptance count, provider queue response and whether the configured recipient matches the intended business inbox. Do not log the buyer email, name or message content.
- Return the reference on successful submissions and display it on the thank-you page. Validate the URL reference before displaying it; preserve the noindex/canonical and existing lead-event safeguards.
- Explicitly set the production `INQUIRY_RECIPIENT` to the owner's stated business inbox, `ding@atelier-marble.ltd`. The previous value could not be read because the platform marked it sensitive, so this does not establish that the old value was incorrect. Preserve the two-field contact form, authenticated sender, buyer Reply-To, rate limit and duplicate handling. No customer autoresponder, additional recipient or tracking pixel is added.

## Acceptance

Regression tests cover unique subject/reference for separate inquiries, stable references and no additional email on retry, SMTP recipient/Reply-To handling, trace-log privacy, and safe reference display. A production internal test with an external Reply-To is required to mirror the owner's submission more closely. Correlate its displayed reference with the actual provider queue record and owner mailbox confirmation.

An API 200, SMTP 250 or thank-you reference alone is not proof of actual inbox receipt. Do not close the discrepancy solely because the new diagnostic code deploys. The unavailable database/durable storage and process-local fallback boundaries from the previous release remain relevant.

Raw requests, sanitized summaries, before/after test logs and subsequent delivery evidence are stored locally at `F:\Atelier-Marble-Site\outputs\contact-delivery-debug-20261022\`, outside the committed source evidence.

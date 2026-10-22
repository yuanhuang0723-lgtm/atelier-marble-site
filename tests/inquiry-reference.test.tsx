import assert from 'node:assert/strict';
import test from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';
import InquiryThankYouPage from '../app/contact/thank-you/page';

test('the success page shows a valid inquiry reference for mailbox lookup', async () => {
  const html = renderToStaticMarkup(await InquiryThankYouPage({ searchParams: Promise.resolve({ ref: 'AM-123456ABCDEF' }) }));
  assert.match(html, /Your inquiry reference/);
  assert.match(html, /AM-123456ABCDEF/);
});

test('the success page does not echo arbitrary query content as a reference', async () => {
  const html = renderToStaticMarkup(await InquiryThankYouPage({ searchParams: Promise.resolve({ ref: 'not-a-reference-<script>mailbox-marker</script>' }) }));
  assert.doesNotMatch(html, /Your inquiry reference/);
  assert.doesNotMatch(html, /mailbox-marker/);
});

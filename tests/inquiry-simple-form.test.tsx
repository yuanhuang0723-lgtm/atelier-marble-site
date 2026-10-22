import assert from 'node:assert/strict';
import test from 'node:test';
import { renderToStaticMarkup } from 'react-dom/server';
import InquiryForm from '../components/InquiryForm';

const context = { sourcePage: '/countertops/vanity-tops', projectType: 'Luxury Vanity Tops & Cabinet Panels', intent: 'Project inquiry' };

test('simple inquiry requires only email and a project note and uses the website submit action', () => {
  const html = renderToStaticMarkup(<InquiryForm context={context} simple />);
  assert.equal((html.match(/required=""/g) || []).length, 2);
  assert.match(html, /name="contact"/);
  assert.match(html, /name="message"/);
  assert.match(html, /type="submit"/);
  assert.match(html, />Send inquiry<\/button>/);
  assert.doesNotMatch(html, /name="(?:company|budgetRange|country|timeline|deliveryDate|quantity)"/);
  assert.doesNotMatch(html, /type="file"/);
  assert.doesNotMatch(html, /Email Project Details/);
  assert.doesNotMatch(html, /Discuss on WhatsApp/);
});

test('the detailed inquiry remains available on other commercial pages', () => {
  const html = renderToStaticMarkup(<InquiryForm context={context} />);
  assert.match(html, /Add project details \(optional\)/);
  assert.match(html, /name="company"/);
  assert.match(html, /type="file"/);
});

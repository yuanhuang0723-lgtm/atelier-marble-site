# Google Search Console Indexing

Use the verified URL-prefix property:

`https://ateliermarblestone.com/`

## Submit both sitemaps

Open **Sitemaps**, enter each value separately, and submit:

```text
sitemap.xml
image-sitemap.xml
```

The full URLs are:

```text
https://ateliermarblestone.com/sitemap.xml
https://ateliermarblestone.com/image-sitemap.xml
```

## Request indexing for priority pages

Use **URL inspection** for these pages and choose **Request indexing** after the live URL test succeeds:

```text
https://ateliermarblestone.com/
https://ateliermarblestone.com/countertops
https://ateliermarblestone.com/countertops/vanity-tops
https://ateliermarblestone.com/countertops/integrated-stone-sinks
https://ateliermarblestone.com/projects/hotel-stone-supply
https://ateliermarblestone.com/projects/commercial-stone
https://ateliermarblestone.com/projects/canada-shower-niches-2025
https://ateliermarblestone.com/factory
https://ateliermarblestone.com/resources
```

Do not request indexing for `/contact/thank-you` or the generated `/project/{uuid}` pages. The thank-you page is `noindex`, and unverified generated project pages are intentionally `noindex, follow`.

## Verify after submission

Check that:

- Both sitemap rows show a successful fetch.
- The inspected URL is accessible and canonicalizes to `https://ateliermarblestone.com`.
- The page is not blocked by robots.txt.
- The page has one clear H1 and a unique title.
- Search performance data begins accumulating under **Pages**, **Queries**, and **Countries**.

Indexing is not immediate. Use the first 7-14 days as a baseline period rather than treating a same-day impression count as a ranking result.

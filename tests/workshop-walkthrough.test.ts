import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import test from "node:test";
import fs from "node:fs";
import * as WalkthroughModule from "../components/WorkshopWalkthrough";
import { workshopVideos, workshopWalkthroughVideo } from "../data/workshop-videos";
import { workshopWalkthroughSchema } from "../lib/workshop-video-schema";

const Walkthrough = typeof WalkthroughModule.default === "function" ? WalkthroughModule.default : (WalkthroughModule.default as any).default;

test("the walkthrough keeps landscape framing and user-initiated playback", () => {
  const html = renderToStaticMarkup(createElement(Walkthrough, { video: workshopWalkthroughVideo, sourcePage: "/custom-stone-fabrication-china" }));
  assert.match(html, /aspect-video/);
  assert.match(html, /preload="none"/);
  assert.match(html, /muted=""/);
  assert.match(html, /playsInline=""/);
  assert.doesNotMatch(html, /autoPlay=/i);
  assert.match(html, /sourcePage=%2Fcustom-stone-fabrication-china/);
  assert.match(html, /projectType=Commercial%20Stone%20Projects/);
});

test("the home entry renders only a poster and links to the actual player", () => {
  const html = renderToStaticMarkup(createElement(Walkthrough, { video: workshopWalkthroughVideo, sourcePage: "/", preview: true }));
  assert.doesNotMatch(html, /<video\b|<source\b/);
  assert.match(html, /href="\/custom-stone-fabrication-china#workshop-walkthrough"/);
  assert.match(html, /width="1280" height="720" loading="lazy"/);
});

test("the public video schema refers to the actual reviewed media and the existing gallery is retained", () => {
  const schema = workshopWalkthroughSchema(workshopWalkthroughVideo);
  assert.equal(schema["@type"], "VideoObject");
  assert.equal(schema.duration, "PT17.87S");
  assert.ok(schema.contentUrl.endsWith(workshopWalkthroughVideo.src));
  assert.ok(schema.thumbnailUrl[0].endsWith(workshopWalkthroughVideo.poster));
  for (const media of [workshopWalkthroughVideo.src, workshopWalkthroughVideo.poster]) assert.ok(fs.existsSync(`public${media}`));
  assert.equal(new Set(workshopVideos.map((video) => video.id)).size, workshopVideos.length);
  assert.ok(workshopVideos.some((video) => video.id === "07"));
});

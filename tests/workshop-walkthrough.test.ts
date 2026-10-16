import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import test from "node:test";
import fs from "node:fs";
import * as WalkthroughModule from "../components/WorkshopWalkthrough";
import { featuredWorkshopVideo, workshopVideos, workshopWalkthroughVideo } from "../data/workshop-videos";
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

test("the homepage plays inline without a fabrication-page redirect and retains homepage inquiry attribution", () => {
  const html = renderToStaticMarkup(createElement(Walkthrough, { video: workshopWalkthroughVideo, sourcePage: "/", home: true }));
  assert.match(html, /<video\b/);
  assert.match(html, /preload="none"/);
  assert.doesNotMatch(html, /href="\/custom-stone-fabrication-china#workshop-walkthrough"/);
  assert.match(html, /sourcePage=%2F&amp;projectType=Commercial%20Stone%20Projects/);
  assert.equal(workshopWalkthroughSchema(workshopWalkthroughVideo, "/#home-workshop-walkthrough").url, "https://ateliermarblestone.com/#home-workshop-walkthrough");
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

test("the featured stone cutting video renders properly on homepage with valid schema and video element", () => {
  const html = renderToStaticMarkup(createElement(Walkthrough, { video: featuredWorkshopVideo, sourcePage: "/", home: true }));
  assert.match(html, /<video\b/);
  assert.match(html, /atelier-marble-workshop-clip-07\.mp4/);
  assert.match(html, /atelier-marble-workshop-clip-07\.jpg/);
  assert.match(html, /Stone cutting in progress/);
  assert.equal(workshopWalkthroughSchema(featuredWorkshopVideo, "/#home-workshop-walkthrough").duration, "PT13S");
});

import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import test from "node:test";
import * as WorkshopVideoCardModule from "../components/WorkshopVideoCard";
import { workshopVideos } from "../data/workshop-videos";

const WorkshopVideoCard = typeof WorkshopVideoCardModule.default === "function"
  ? WorkshopVideoCardModule.default
  : WorkshopVideoCardModule.default.default;

test("every workshop video poster exposes its reviewed description as image alt text", () => {
  for (const video of workshopVideos) {
    const html = renderToStaticMarkup(createElement(WorkshopVideoCard, { video }));
    const image = html.match(/<img\b[^>]*>/i)?.[0] ?? "";
    const alt = image.match(/\balt="([^"]*)"/i)?.[1] ?? "";

    assert.equal(alt, video.description, `${video.id}: poster alt should describe the visible frame`);
  }
});

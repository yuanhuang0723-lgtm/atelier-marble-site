import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import * as VanityTopsModule from "../app/countertops/vanity-tops/page";
import * as CustomFabricationModule from "../app/custom-stone-fabrication-china/page";

const VanityTopsPage = typeof VanityTopsModule.default === "function"
  ? VanityTopsModule.default
  : VanityTopsModule.default.default;
const CustomFabricationPage = typeof CustomFabricationModule.default === "function"
  ? CustomFabricationModule.default
  : CustomFabricationModule.default.default;

test("vanity and custom-fabrication buyers can open the redacted drawing-review example", () => {
  for (const Page of [VanityTopsPage, CustomFabricationPage]) {
    const html = renderToStaticMarkup(Page());
    assert.match(html, /href="\/factory#factory-evidence"/);
    assert.match(html, /View redacted drawing-review example/i);
  }
});

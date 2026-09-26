import assert from "node:assert/strict";
import test from "node:test";
import * as Home from "../app/page";
import * as ArchitecturalStone from "../app/architectural-stone/page";
import * as WallCladding from "../app/architectural-stone/wall-cladding/page";
import * as MarbleMaterials from "../app/materials/marble/page";
import * as QuartziteMaterials from "../app/materials/quartzite/page";
import * as GraniteMaterials from "../app/materials/granite/page";
import * as HotelSupply from "../app/projects/hotel-stone-supply/page";
import * as Countertops from "../app/countertops/page";
import * as CanadaProject from "../app/projects/canada-shower-niches-2025/page";
import * as CustomFabrication from "../app/custom-stone-fabrication-china/page";
import * as Resources from "../app/resources/page";
import * as HowWeWork from "../app/how-we-work/page";
import * as HotelPricing from "../app/guides/hotel-stone-pricing/page";
import * as QualityControl from "../app/guides/quality-control-delivery/page";
import * as Vanity from "../app/countertops/vanity-tops/page";
import * as Factory from "../app/factory/page";
import * as HotelLobby from "../app/guides/hotel-lobby-case-study/page";
import * as About from "../app/about/page";

const brand = " | Atelier Marble";
const candidates = [
  ["/", Home, "Custom Stone Fabrication from China | Atelier Marble", "Custom marble and stone components from Yunfu, China. Send CAD, BOQ, or dimensions for one-piece orders, small MOQs, factory-direct work, and global shipping."],
  ["/architectural-stone", ArchitecturalStone, "Architectural Stone Fabrication from China | Atelier Marble", "Architectural stone for hotel and commercial interiors, made from project drawings. Share wall or floor layouts, quantities, finish, and destination for review."],
  ["/architectural-stone/wall-cladding", WallCladding, "Stone Wall Cladding Fabrication from China | Atelier Marble", "Custom stone wall cladding from China for hotel lobbies and commercial interiors. Review material, panel layout, finish, quantities, and packing from drawings."],
  ["/materials/marble", MarbleMaterials, "Marble Materials & Slabs for Projects | Atelier Marble", "Explore marble for hotel, commercial, and countertop projects. Confirm current lot, thickness, finish, veining, and matching before fabrication."],
  ["/materials/quartzite", QuartziteMaterials, "Quartzite Countertop Fabrication from China | Atelier Marble", "Quartzite countertops from China. Confirm current lot, thickness, finish, slab matching, and cut-outs for your fabrication project before requesting a quote."],
  ["/materials/granite", GraniteMaterials, "Granite for Commercial Projects in China | Atelier Marble", "Review granite for hotel and commercial projects. Confirm the available lot, thickness, finish, matching, and fabrication details before the project quotation."],
  ["/projects/hotel-stone-supply", HotelSupply, "Hotel Stone Supply & Fabrication in China | Atelier Marble", "Stone supply and fabrication for hotel vanity tops, lobby surfaces, countertops, and wall applications. Share drawings, quantities, material, and destination."],
  ["/countertops", Countertops, "Custom Stone Countertops from China | Atelier Marble", "Custom stone countertops from China for kitchens, hotels, and commercial spaces. Share dimensions, cut-outs, edges, finish, quantities, and destination."],
  ["/projects/canada-shower-niches-2025", CanadaProject, "Custom Stone Shower Niches in Canada | Atelier Marble", "See a Canada project reference for custom stone shower niches, with CAD detailing, shop drawings, cut lists, and multi-batch coordination across the program."],
  ["/custom-stone-fabrication-china", CustomFabrication, "Custom Stone Fabrication & Cut-to-Size | Atelier Marble", "Custom stone fabrication and cut-to-size work from China. Send CAD, dimensions, material, finish, quantities, and destination for a component quote."],
  ["/resources", Resources, "Stone Buyer Guides & Project Resources | Atelier Marble", "Buyer guides for stone materials, hotel pricing, project checklists, quality review, export packing, and choosing a supplier before you order."],
  ["/how-we-work", HowWeWork, "Stone Project Workflow for Overseas Buyers | Atelier Marble", "Stone workflow for overseas buyers. Share scope, drawings, materials, and quantities to review quotation, inspection, packing, and delivery requirements."],
  ["/guides/hotel-stone-pricing", HotelPricing, "Hotel Stone Pricing for Overseas Buyers | Atelier Marble", "Plan a hotel stone quotation with materials, room counts, drawings, finishes, cut-outs, packing, destination, and delivery scope before comparing bids."],
  ["/guides/quality-control-delivery", QualityControl, "Stone Quality Control & Delivery Guide | Atelier Marble", "Review stone inspection, finish approval, labeling, packing, and delivery checks for hotel and commercial projects before shipment leaves China."],
  ["/factory", Factory, "Stone Fabrication Factory in China | Atelier Marble", "Selected workshop videos and buyer guidance for reviewing scope, drawings, materials, inspection points, packing, and destination requirements."],
  ["/guides/hotel-lobby-case-study", HotelLobby, "Hotel Lobby Stone Planning Guide for Buyers | Atelier Marble", "Hotel lobby stone planning guide for scope, materials, inspection checkpoints, packing, and delivery planning. The image is a concept visualization only."],
  ["/about", About, "About Atelier Marble Stone Supply | Atelier Marble", "Learn about Atelier Marble, a Yunfu-based stone project studio coordinating material review, fabrication, packing, and delivery planning for overseas projects."]
];

test("core production snippet candidates match the strict title and description lengths", () => {
  for (const [route, page, renderedTitle, description] of candidates) {
    const metadata = page.metadata ?? page.default.metadata;
    const pageTitle = route === "/" ? renderedTitle : renderedTitle.slice(0, -brand.length);
    assert.equal(metadata.title, pageTitle, `${route} title candidate`);
    assert.equal(metadata.description, description, `${route} description candidate`);
    assert.ok(renderedTitle.length >= 50 && renderedTitle.length <= 60, `${route} title length`);
    assert.ok(description.length >= 140 && description.length <= 160, `${route} description length`);
  }

});

test("vanity title and description remain stable until a comparable post-release GSC window", () => {
  assert.equal(Vanity.metadata.title, "Hotel Vanity Tops & Marble Bathroom Counters");
  assert.equal(Vanity.metadata.description, "Custom marble hotel vanity tops and bathroom counters from China for hospitality projects. Send drawings, basin cut-outs, quantities, and destination for a project quotation.");
});

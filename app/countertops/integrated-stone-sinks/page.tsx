import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Integrated Stone Sinks & Vanity Basins",
  description: "Custom integrated stone sinks and vanity basins coordinated with countertop dimensions, cut-outs, edges, drainage details, finish, and export packing.",
  alternates: { canonical: absoluteUrl("/countertops/integrated-stone-sinks") },
  openGraph: {
    title: "Integrated Stone Sinks & Vanity Basins",
    description: "Custom integrated stone sinks and vanity basins coordinated with countertop dimensions, cut-outs, edges, drainage details, finish, and export packing.",
    url: absoluteUrl("/countertops/integrated-stone-sinks"),
    siteName,
    images: [{ url: absoluteUrl("/assets/vanity-cabinet/hero.webp") }]
  }
};

const contentSections = [
  {
    heading: "Define what integrated means for this project",
    paragraphs: [
      "For an integrated stone sink, the vanity top and bowl cannot be priced as unrelated pieces. Their shared dimensions, usable deck, drain position, edge, wall return, and cabinet support determine how the set fits together. Put these items on the same plan and section view, or mark them on coordinated drawings, before comparing quotations.",
      "The word integrated can describe different product concepts. State whether you expect a bowl formed within the stone top, a basin joined to a separate counter, or a sink-and-counter package assembled on site. Do not assume the word defines one construction method. The supplier, designer, cabinet maker, and plumber should agree which party provides each component."
    ]
  },
  {
    heading: "Dimension the basin and the surrounding deck",
    paragraphs: [
      "Show the outside countertop size, finished bowl opening, interior bowl width and length, depth, corner radii, wall clearance, and position relative to the front edge. Indicate whether dimensions are finished sizes or cabinet-opening sizes. A plan view helps establish location; a section view is needed to show depth, wall thickness, deck height, and any change in level.",
      "For paired basins or repeated vanities, add centerlines and dimensions from a fixed datum such as a wall or cabinet end. Mark the distance between bowls, faucet centerlines, and usable counter space. If the design must align with mirror lights, drawers, doors, or tile joints, include those references instead of asking the fabricator to infer them from a room photograph."
    ]
  },
  {
    heading: "Coordinate the drain, faucet, and plumbing envelope",
    paragraphs: [
      "Identify the drain opening, waste fitting, overflow requirement if any, faucet holes, tap type, and the location of the plumbing behind or below the cabinet. Provide the fitting template or manufacturer drawing when it is available. The sink cut-out alone does not show whether the trap, supply lines, drawer boxes, or cabinet rails will occupy the same space.",
      "Confirm the intended bowl slope and the relationship between the low point and drain with the project designer or plumbing professional. Show the direction of water flow on the section drawing. Do not rely on a rendered image to establish slope, drainage performance, or code compliance; these depend on the approved geometry, fitting, installation, and local requirements."
    ]
  },
  {
    heading: "Select material and finish for the intended use",
    paragraphs: [
      "Name the preferred stone or provide a reference sample, then confirm the current lot, thickness, visible face, veining direction, and finish before the final scope is accepted. Natural stone varies from piece to piece. If multiple basins or rooms need a coordinated appearance, describe which surfaces must be reviewed together and who approves the selected material.",
      "A bathroom surface is exposed to water, cleaning products, cosmetics, and daily handling. Discuss the proposed finish and maintenance expectations with the stone supplier and project team. Do not assume every stone, surface treatment, or bowl geometry is suitable for every wet-area use. Record any care limitations and confirm that the selected material meets the project specification."
    ]
  },
  {
    heading: "Resolve the countertop, cabinet, and wall interface",
    paragraphs: [
      "Show the cabinet width, support rails, finished wall position, backsplash or upstand, side returns, overhang, and any joint or seam. Mark the exposed edges and state which ones are finished. If the top is supported by a frame or brackets, the responsible designer or installer should provide the support plan and confirm that the proposed stone dimensions and loads are compatible.",
      "Separate fabrication dimensions from site conditions that still need measurement. Walls may not be square, cabinets may vary, and field tolerances can affect the final fit. Agree which dimensions are fixed, who checks the site, how deviations are reported, and whether the final production drawing needs an approval before the stone is cut."
    ]
  },
  {
    heading: "Plan hotel and multi-unit packages by room type",
    paragraphs: [
      "For hospitality work, group the schedule by room type, floor, bathroom layout, or other stable project identifier. List each top and basin separately when sizes, faucet positions, or finishes differ. Repeated units benefit from a common datum, consistent drawing revisions, and a clear count of standard pieces, mirrored pieces, and exceptions.",
      "If the project uses several production batches, define how material selection, visible face, finish, and labeling are to remain consistent across them. Identify any approved spare units and where they belong in the schedule. These are coordination requirements to confirm with the project team; a page or rendering alone cannot establish batch capacity or guarantee a match between natural-stone pieces."
    ]
  },
  {
    heading: "Prepare a quote package that can be reviewed",
    paragraphs: [
      "A useful request includes a plan and section, finished dimensions, quantities, material direction, finish, basin and drain details, faucet template, edge profile, backsplash, support condition, and destination. Add a room schedule or BOQ for repeat work. Identify the drawing revision and list any open decisions so a preliminary estimate is not confused with production approval.",
      "If a complete drawing is not ready, start with approximate dimensions, a reference image, intended application, and target quantity. Label what is confirmed and what remains provisional. The first review can identify missing information, but a usable production quotation depends on the final material, geometry, finish, quantity, packing scope, and delivery terms being agreed."
    ]
  },
  {
    heading: "Agree approvals and inspection evidence before production",
    paragraphs: [
      "Before an order is released, identify who approves the final drawing, material lot, visible surfaces, edge details, openings, and finish. Record the approved revision and how later changes will be handled. If a sample, mock-up, or first-piece review is required, state that in the project documents and confirm whether it is feasible, who pays for it, and what decision it is intended to resolve.",
      "Define the checks that matter for the order, such as overall dimensions, basin position, drain opening, edge completion, finish, visible stone character, and piece identification. Ask which checks can be documented and at what stage. Do not assume a certification, machine capability, inspection record, or pass result unless it is supplied for the actual project."
    ]
  },
  {
    heading: "Specify packing and delivery responsibilities",
    paragraphs: [
      "Stone basins and tops have edges, openings, and finished surfaces that need protection during handling. List the pieces that must travel together, how they should be identified, which faces need protection, and whether the packing must follow room or floor groupings. Ask the supplier to state what packing is included in the quotation and what must be arranged by the buyer or forwarder.",
      "Confirm destination, delivery term, hand-off point, labeling language, and any carrier or site restrictions before pricing is finalized. If photographs or packing records are required, agree on the timing and expected contents in advance. The page does not establish a specific crate design, route, freight cost, or delivery time; these are project details to confirm in writing."
    ]
  }
];

export default function IntegratedStoneSinksPage() {
  return (
    <CommercialLandingPage
      eyebrow="Integrated stone sinks"
      title="Integrated stone sinks and vanity basins."
      description="For buyers who need the basin, countertop, cut-outs, edges, and surrounding stone details reviewed together before fabrication and packing."
      image="/assets/vanity-cabinet/hero.webp"
      heroBackgroundImage={null}
      imageAlt="Illustrative 3D bathroom vanity rendering with a stone countertop and basin; not a completed project photograph."
      imageCaption="Illustrative design rendering only. It does not document a specific Atelier Marble sink, factory process, or completed project. Confirm actual basin geometry and finish against approved drawings."
      contentSectionTitle="Plan the basin and work surface as one project scope."
      bullets={[
        "Coordinate basin dimensions with the surrounding vanity top",
        "Review edge, drainage, surface, and installation details together",
        "Scope repeat hotel bathroom units by room type and drawing revision",
        "Confirm material, finish, quantity, packing, and delivery terms before pricing"
      ]}
      details={[
        "Integrated vanity basin and countertop interfaces",
        "Drain, faucet, edge, backsplash, and support details",
        "Repeatable hotel bathroom schedules and custom dimensions",
        "Project-specific drawing, material, and finish review"
      ]}
      contentSections={contentSections}
      specificationGroups={[
        { title: "Basin geometry", items: ["Finished bowl width, length, depth, and corner radii", "Countertop outline, deck width, and wall clearance", "Bowl position from cabinet ends, front edge, and centerlines"] },
        { title: "Fittings and plumbing", items: ["Drain opening, waste fitting, and overflow requirement", "Faucet model, hole template, and centerline", "Trap, supply-line, drawer, and support clearance"] },
        { title: "Material and appearance", items: ["Stone selection, lot approval, thickness, and visible face", "Surface finish, veining direction, and matching expectations", "Exposed edges, backsplash, side returns, and joint locations"] },
        { title: "Repeat units", items: ["Room type, floor, quantity, mirrored pieces, and exceptions", "Drawing revision and approval owner for each unit group", "Batch identification, spares, and packing labels if required"] },
        { title: "Quote and delivery", items: ["Drawings or provisional dimensions, BOQ, and quantity schedule", "Destination, delivery term, packing scope, and site restrictions", "Target timing and any required sample or first-piece review"] }
      ]}
      faqs={[
        { question: "Can the basin and vanity top be reviewed together?", answer: "Yes. Provide the basin dimensions, countertop outline, cut-outs, edges, drain and faucet details, support condition, and wall interface as one scope for review." },
        { question: "What does integrated mean in a quotation?", answer: "It can refer to different construction arrangements. Specify whether the bowl is formed in the top, joined to a separate counter, or assembled on site, then confirm responsibility with the project team." },
        { question: "What drawings help price a custom stone sink?", answer: "A plan and section showing finished sizes, bowl depth, drain and faucet locations, material, finish, quantity, cabinet interface, packing scope, and destination provide a useful starting package." },
        { question: "Can the same sink design be repeated in a hotel?", answer: "Repeat units can be scheduled by room type and revision. Confirm quantities, mirrored layouts, material approvals, batch labeling, and any exception pieces before quotation and production planning." },
        { question: "Does a rendering confirm the final basin design?", answer: "No. The image on this page is illustrative. The actual bowl geometry, material, finish, fittings, and installation interface must be confirmed against project drawings and approvals." }
      ]}
      faqTitle="Integrated stone sink details, answered clearly."
      purchaseInfo={{
        materialOptions: "Stone choice depends on basin geometry and intended use. Confirm lot, thickness, surface finish, and maintenance needs.",
        customCapability: "Plan basin geometry, drain, faucet openings, edges, finish, and the countertop interface from drawings."
      }}
      metadata={metadata}
    />
  );
}

import type { Metadata } from "next";
import CommercialLandingPage from "../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../lib/seo";
import { fabricationHeroImage, fabricationDrawingImage, fabricationReferenceImages } from "../../data/fabrication-page-images";

export const metadata: Metadata = {
  title: "Cut-to-Size Stone Fabrication in China",
  description: "Drawing-based stone fabrication from Yunfu, China. Review cut-to-size parts, openings, edges, repeat quantities, and export packing for a quotation.",
  alternates: { canonical: absoluteUrl("/custom-stone-fabrication-china") },
  openGraph: {
    title: "Cut-to-Size Stone Fabrication in China",
    description: "Drawing-based stone fabrication from Yunfu, China. Review cut-to-size parts, openings, edges, repeat quantities, and export packing for a quotation.",
    url: absoluteUrl("/custom-stone-fabrication-china"),
    siteName,
    images: [{ url: absoluteUrl(fabricationHeroImage) }]
  }
};

const contentSections = [
  {
    heading: "Prepare a drawing package that can be reviewed",
    summary: "Link each component to its current drawing revision, dimensions, and quantity.",
    paragraphs: [
      "Keep drawing revisions and component schedules linked, and identify the current version for each part being priced. Include a plan or elevation, sections where thickness or depth matters, units of measure, overall dimensions, quantities, and a short note describing where each component will be used. If a BOQ or room schedule exists, identify its revision and link each line to a drawing number. This helps the buyer and supplier discuss the same scope instead of comparing assumptions hidden in separate files.",
      "If the final CAD set is not ready, send the best available dimensions, marked-up sketches, reference images, and a list of open decisions. Label provisional information as provisional. A preliminary review can identify missing dimensions or conflicting references, but it should not be mistaken for a production-ready drawing or a fixed quotation. Agree which file controls if a schedule and a drawing show different quantities or sizes."
    ]
  },
  {
    heading: "Define geometry, edges, openings, and interfaces",
    summary: "Mark finished sizes, visible faces, edges, openings, and adjoining parts.",
    paragraphs: [
      "For each cut-to-size part, distinguish the finished dimension from the cabinet opening, wall opening, or raw material size. Mark the visible face, finished edges, backsplashes, returns, joints, curves, cut-outs, and any fixing or service openings. Add a template or coordinate dimensions for sink, faucet, drain, electrical, or mounting points when they apply. A photograph can show intent, but it usually cannot establish dimensions or the location of an opening accurately enough for fabrication.",
      "Set the required tolerance against the component and its adjoining parts. A countertop meeting a cabinet, a wall panel aligning with a reveal, and a decorative piece with a loose fit have different measurement risks. Confirm tolerances in the project quotation and in the approved drawing set; do not assume one general tolerance applies to every material, shape, or installation. When site conditions may change a dimension, identify who measures it and when that measurement becomes final."
    ]
  },
  {
    heading: "Choose material and finish for the intended use",
    summary: "Agree the stone lot, surface finish, and matching expectations for the application.",
    paragraphs: [
      "State the preferred stone, color family, finish, thickness, and visible face, or provide a sample or product reference for discussion. Natural stone variation means a name or photograph alone does not guarantee a particular vein, shade, or pattern. For bookmatched surfaces, paired pieces, or repeated hotel units, show which components must be reviewed together and explain what kind of visual match matters to the project.",
      "Ask how current availability, lot selection, natural variation, finishing, and the intended wet or public-area use affect the proposed scope. Confirm any sample, slab, or finish approval before the final production release. The project team should also agree who accepts the selected appearance and how a change in material or finish affects cost, schedule, and replacement pieces. This page does not imply that every stone or finish is suitable for every application."
    ]
  },
  {
    heading: "Plan repeat components with schedules and identifiers",
    summary: "Use consistent piece marks for repeated, mirrored, and exception components.",
    paragraphs: [
      "For multi-room or multi-unit work, group parts by room type, floor, area, or another identifier used on the project's drawings. Keep standard, mirrored, handed, and exception pieces distinct. Show piece marks on the drawings and repeat the same marks in the BOQ or component schedule. A shared naming system helps reviewers trace a quantity back to its location and reduces ambiguity when revisions add, remove, or change parts.",
      "List the quantity by component and state whether spares, samples, mock-ups, or replacement parts are included. If work is released in batches, identify which drawing revision and material decision each batch follows. Confirm how approved changes will be communicated and whether earlier pieces remain valid. These planning details make repeat orders easier to quote and check; they do not by themselves establish production capacity or guarantee that natural stone pieces will look identical."
    ]
  },
  {
    heading: "Agree approvals and inspection points before release",
    summary: "Agree who approves the drawing, material, first piece, and inspection scope.",
    paragraphs: [
      "Before fabrication is authorized, agree who approves the drawing revision, material choice, visible face, edge details, openings, quantities, and finish. Keep the approved revision and any exceptions in a place the buyer, designer, and supplier can reference. If a sample or first-piece review is needed, state what it is meant to confirm, who reviews it, and whether production waits for that decision. A quotation, rendering, or reference image is not a substitute for approval of the actual project dimensions.",
      "Define the checks that matter for the order, such as overall dimensions, opening locations, edge completion, finish, piece identification, and visible stone character. Ask which items can be recorded and when those records are available. Inspection scope should match the written order and the evidence actually supplied for it. Do not assume an unlisted test, certification, inspection record, or pass result is included. A clear checklist gives buyers a way to compare offers and agree on responsibility before work starts."
    ]
  },
  {
    heading: "Separate fabrication from site measuring and installation",
    summary: "Identify who supplies final site dimensions and who installs the components.",
    paragraphs: [
      "Stone fabrication, site measurement, cabinetry, plumbing, and installation can involve different parties. Mark the hand-off between them in the project brief. State whether dimensions come from approved construction drawings, a site survey, a cabinet maker, or a final field measurement, and identify who confirms them. If walls, cabinets, or adjacent finishes are not complete, note which dimensions may change and what event makes them final.",
      "The page describes fabrication and export preparation; it does not establish that local site measuring or installation is included. Buyers should name the installer or local contractor when the component depends on site conditions, and confirm who resolves a fit issue if the measured opening differs from the drawing. This boundary affects the quotation, schedule, packaging, and coordination plan. It also helps keep fabrication dimensions separate from installation allowances that need approval from the project team."
    ]
  },
  {
    heading: "Specify packing and delivery responsibilities",
    summary: "Define protection, labels, destination, delivery term, and receiving responsibilities.",
    paragraphs: [
      "Packing requirements depend on the part's shape, edges, openings, visible surfaces, and the way pieces will be handled after dispatch. State which surfaces need protection, whether fragile parts should travel with a set, how parts should be labeled, and whether packages should be grouped by room, floor, or installation sequence. If the buyer or forwarder has handling rules, share them before the scope is priced so the proposed packing can be checked against the actual route.",
      "Provide the destination, requested delivery term, receiving constraints, and any documents or labels the buyer expects. Confirm who arranges freight, insurance, customs clearance, unloading, and last-mile handling rather than assuming those services are included in fabrication. The final quotation should list its packing and delivery scope, open decisions, and any buyer-provided requirements. No fixed freight price or transit time can be inferred without the destination, shipment details, carrier, and agreed delivery terms."
    ]
  }
];

export default function CustomStoneFabricationPage() {
  return (
    <CommercialLandingPage
      eyebrow="Custom stone fabrication"
      heroCtaLabel="Request Custom Fabrication Pricing"
      primaryCtaLabel="Request Custom Fabrication Pricing"
      title="Custom stone fabrication in China, from your drawings."
      description="Cut-to-size countertops, vanity tops, architectural panels, and custom stone parts for overseas project buyers. Share drawings, quantities, material direction, and destination."
      heroBackgroundImage={fabricationHeroImage}
      heroBackgroundImageAlt="Workshop photo with an overhead hoist, stone pieces, and wooden packing frames."
      image={fabricationDrawingImage}
      imageAlt="Redacted stone drawing excerpt with plan and elevation views; identifying details and dimension values removed."
      imageFit="contain"
      imageCaption="Drawing-review example with identifying details removed. It illustrates drawing inputs and does not document a completed order."
      overviewHeading="Cut-to-size stone parts, scoped for your project."
      overviewDescription="For importers, stone fabricators, contractors, and project buyers: review natural stone components from CAD, a BOQ, or a marked-up sketch. From Yunfu, China, we combine our own processing with partner coordination; the fabrication scope is confirmed in your quotation."
      scopeRows={[
        { component: "Countertops and vanity tops", inputs: "Finished sizes, basin or appliance templates, openings, exposed edges, and quantities." },
        { component: "Architectural stone parts", inputs: "Panel marks, elevations, thickness, joints, and the responsible party for fixing and support design." },
        { component: "Repeated project components", inputs: "Room or type schedule, piece marks, drawing revision, material and finish, and packing groups." },
      ]}
      referenceImages={fabricationReferenceImages}
      referencePlacement="before-content"
      referenceSectionTitle="Workshop and component references."
      referenceSectionDescription="Use these photographs to discuss component geometry and preparation. They do not identify a specific machine model, completed shipment, or inspection result."
      bullets={[
        "Start with drawings, BOQ files, dimensions, quantities, or reference imagery",
        "Coordinate cutting, openings, edges, joints, visible faces, and surface finish",
        "Keep piece labels, revisions, batches, inspection, and packing in one scope",
        "Confirm material direction and project requirements before pricing"
      ]}
      details={[
        "Custom stone countertops and cut-to-size components",
        "Architectural wall, floor, and feature elements",
        "Stone furniture, tables, and sculptural forms",
        "Project fabrication with export preparation"
      ]}
      contentSections={contentSections}
      contentSectionLayout="disclosure"
      contentSectionTitle="Drawing and fabrication details, when you need them."
      specificationGroups={[
        { title: "Scope and documents", items: ["Application, drawing or BOQ reference, dimensions, units, quantities, and drawing revision", "Material reference, visible face, surface finish, edge profile, openings, joints, and support conditions", "Destination market, required timing, packing expectations, and quotation format"] },
        { title: "Fabrication details", items: ["Cut-to-size dimensions and tolerances to be confirmed against the project drawings", "Basin, faucet, service, fixing, or other openings marked with the correct template", "Piece numbers, room or area grouping, batch information, and replacement requirements"] },
        { title: "Review and approval", items: ["Confirm material availability, natural variation, sample or lot approval, and finish direction", "Review dimensions, edges, openings, visible surfaces, labels, and quantities before packing", "Keep open decisions visible rather than treating an estimate as a production approval"] },
        { title: "Export preparation", items: ["Confirm protective packing, grouping, labels, loading requirements, and destination", "Share the latest approved documents with the inquiry", "Final pricing depends on confirmed scope, material, dimensions, quantity, and delivery requirements"] }
      ]}
      relatedLink={{ label: "Review the buyer workflow", href: "/how-we-work" }}
      relatedLinks={[
        { label: "View redacted drawing-review example", href: "/factory#factory-evidence" },
        { label: "Review Canada shower niches case reference", href: "/projects/canada-shower-niches-2025" },
        { label: "Review countertop packages and cut-outs", href: "/countertops" },
        { label: "Review hotel vanity top schedules", href: "/countertops/vanity-tops" },
      ]}
      faqTitle="Custom fabrication details, answered clearly."
      faqs={[
        { question: "What can be made from drawings or a BOQ?", answer: "The review can cover cut-to-size countertops, architectural stone parts, furniture, tables, sculptural forms, and other components when the scope and dimensions are clear." },
        { question: "What does cut-to-size stone fabrication require?", answer: "A practical review usually needs dimensions, units, quantities, material direction, finish, edges, openings, drawings or marked-up references, and the destination." },
        { question: "Are tolerances and lead times fixed?", answer: "They depend on the confirmed material, component, drawing, quantity, production path, and delivery requirements. They should be agreed in the project quotation rather than assumed." },
        { question: "Does fabrication include site measuring and installation?", answer: "Those responsibilities are not assumed. Identify the local installer and who supplies final site measurements before the scope is priced." },
        { question: "How should repeated project parts be scheduled?", answer: "Group the parts by room, area, or floor and use consistent piece marks across the current drawing revision, BOQ, approvals, and packing labels." }
      ]}
      purchaseInfo={{ materialOptions: "Marble, granite, quartzite, and other approved stone, subject to current lot, geometry, finish, and application.", customCapability: "Translate CAD or BOQ details into cut-to-size components, edge work, repeat quantities, inspection points, and packing groups." }} metadata={metadata}
    />
  );
}

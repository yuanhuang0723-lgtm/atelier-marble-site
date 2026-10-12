import type { Metadata } from "next";
import CommercialLandingPage from "../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../lib/seo";
import { fabricationHeroImage, fabricationDrawingImage, fabricationReferenceImages } from "../../data/fabrication-page-images";

export const metadata: Metadata = {
  title: "Custom Stone Fabrication & Cut to Size",
  description: "Custom stone fabrication and natural stone OEM fabrication in Yunfu, China. CAD to stone production, cut-to-size parts, and export crate quotation.",
  alternates: { canonical: absoluteUrl("/custom-stone-fabrication-china") },
  openGraph: {
    title: "Custom Stone Fabrication & Cut to Size",
    description: "Custom stone fabrication and natural stone OEM fabrication in Yunfu, China. CAD to stone production, cut-to-size parts, and export crate quotation.",
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
  },
  {
    heading: "CAD to stone production workflow and CNC machining",
    summary: "Translate CAD shop drawings, DWG/DXF vectors, and cutting tickets into precision CNC fabrication.",
    paragraphs: [
      "CAD to stone production translates architectural CAD files, DWG/DXF drawings, and cutting schedules into machine-readable toolpaths. Our technical team verifies dimensions, sink and faucet cut-outs, edge details, and miters before generating shop tickets for 5-axis CNC bridge saws and waterjets. This digital review identifies drawing conflicts and reveals tolerances before cutting begins.",
      "Providing clean vector CAD drawings accelerates production planning and minimizes dimensional discrepancy. When 3D step files or 2D CAD details are supplied alongside the bill of quantities, each stone component is assigned an explicit piece mark that follows the slab through CNC cutting, edge profiling, dry-lay verification, and crate packaging."
    ]
  },
  {
    heading: "Natural stone OEM fabrication for overseas stone contractors",
    summary: "Contract machining, private labeling, and crate packing for overseas stone masonry shops.",
    paragraphs: [
      "Natural stone OEM fabrication supports overseas stone masonry shops, general contractors, and trade distributors who need dependable contract fabrication capacity in China. We operate as an offshore fabrication partner, executing cut-to-size parts according to your exact workshop standards, tolerances, and packaging guidelines.",
      "Our OEM fabrication service handles full project scope or overflow production, from luxury residential vanities to commercial cladding. Finished components receive dry-lay photo inspections, protective corner guards, and private crate labeling so shipments arrive ready for immediate installation on your jobsite."
    ]
  }
];

const customFabricationProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Stone Fabrication & Natural Stone OEM Fabrication Services",
  description: "Drawing-led custom stone fabrication and natural stone OEM fabrication from Yunfu, China. CAD to stone production processing marble, quartzite, granite, and limestone with 5-axis CNC routing, waterjet cut-outs, calibrated ±1mm tolerances, bookmatched vein sequencing, and fumigated export crate packaging.",
  category: "Building Materials > Natural Stone > Custom Stone Fabrication",
  material: "Natural Stone (Marble, Quartzite, Granite, Limestone)",
  brand: {
    "@type": "Brand",
    name: "Atelier Marble"
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Fabrication Scope", value: "Custom Stone Fabrication, CAD to Stone Production, Natural Stone OEM Machining" },
    { "@type": "PropertyValue", name: "Machining Capability", value: "5-Axis CNC Milling, Automated Edge Profiling & High-Pressure Waterjet" },
    { "@type": "PropertyValue", name: "Dimensional Tolerance", value: "Strict ±1mm Calibration on Sizing and Thickness" },
    { "@type": "PropertyValue", name: "Inspection & Quality", value: "Pre-Assembly Dry-Lay Inspection, Vein Continuity & Full Photo Verification" },
    { "@type": "PropertyValue", name: "Physical Standards", value: "ASTM C97 bulk density ~2.7 g/cm³, ASTM C170 compressive strength >100 MPa" },
    { "@type": "PropertyValue", name: "Export Packaging", value: "Fumigated Sturdy Wooden Crates with Protective Film Spacers & Steel Strapping" }
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    price: "0",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceType: "https://schema.org/InvoicePrice",
      unitText: "Project RFQ Quotation Based on CAD Shop Drawings & BOQ"
    },
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Atelier Marble",
      url: absoluteUrl("/")
    }
  }
};

const customFabricationHowToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Bespoke Cut-to-Size Natural Stone Fabrication Protocol",
  description: "A 7-stage architectural fabrication workflow for overseas stone buyers, translating CAD shop drawings and BOQ schedules into CNC-machined, quality-inspected, and crated stone components.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Drawing Package & BOQ Review",
      text: "Link each component to its current architectural drawing revision, dimension units, piece marks, and bill of quantities."
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Geometry, Edge & Opening Coordination",
      text: "Confirm finished component dimensions, CNC edge profiles (e.g. eased, mitered), sink/faucet cut-out templates, and joinery interfaces."
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Material Lot Selection & Surface Finishing",
      text: "Select stone lots (marble, quartzite, granite) and specify finishes (polished, honed, leathered) with vein flow and matching guidelines."
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Repeat Component Scheduling & Markings",
      text: "Group multi-unit components by room type or floor, applying consistent piece marks across drawings, schedules, and packing labels."
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Shop Drawing Approval & Inspection Sign-Off",
      text: "Obtain formal sign-off on shop drawings, lot approval, and define workshop dry-lay photo/video inspection requirements prior to cutting."
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Interface Demarcation & Site Tolerances",
      text: "Delineate factory fabrication tolerances (±1mm) from site measurement and installation responsibilities."
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Protective Export Packing & Logistics Hand-Off",
      text: "Pack finished stone pieces into fumigated ISPM 15 wooden crates with foam cushioning and organize shipping documents and container loading."
    }
  ]
};

export default function CustomStoneFabricationPage() {
  return (
    <CommercialLandingPage
      eyebrow="Custom stone fabrication"
      heroCtaLabel="Request Custom Fabrication Pricing"
      primaryCtaLabel="Request Custom Fabrication Pricing"
      title="Custom stone fabrication and CAD to stone production in China."
      description="Cut-to-size countertops, vanity tops, architectural panels, and natural stone OEM fabrication for overseas project buyers. Share CAD drawings, BOQ schedules, and destination."
      heroBackgroundImage={fabricationHeroImage}
      heroBackgroundImageAlt="Workshop photo with an overhead hoist, stone pieces, and wooden packing frames."
      image={fabricationDrawingImage}
      imageAlt="Redacted stone drawing excerpt with plan and elevation views; identifying details and dimension values removed."
      imageFit="contain"
      imageCaption="Drawing-review example with identifying details removed. It illustrates drawing inputs and does not document a completed order."
      overviewHeading="Cut-to-size stone parts, scoped for your project."
      overviewDescription="For stone importers, contractors, and overseas stone fabricators: review CAD to stone production workflows and natural stone OEM fabrication. From Yunfu, China, we combine our own processing with partner coordination for precision 5-axis CNC machining, waterjet cuts, and export crating."
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
        "CAD to stone production from DWG, DXF, shop drawings, or BOQ files",
        "Natural stone OEM fabrication with CNC saw, waterjet, and edge profiling",
        "Strict ±1mm cut-to-size tolerance, dry-lay inspection, and piece marks",
        "Export crate packaging organized by room, level, or project phase"
      ]}
      details={[
        "Custom stone fabrication for countertops and architectural elements",
        "CAD to stone production from DWG, DXF, and shop tickets",
        "Natural stone OEM fabrication and contract processing",
        "Cut-to-size project orders with export crating"
      ]}
      contentSections={contentSections}
      contentSectionLayout="disclosure"
      contentSectionTitle="Drawing and fabrication details, when you need them."
      specificationGroups={[
        { title: "Scope and documents", items: ["Application, CAD drawing (DWG/DXF/PDF) or BOQ reference, dimensions, units, quantities, and drawing revision", "Material reference, visible face, surface finish, edge profile, openings, joints, and support conditions", "Destination market, required timing, packing expectations, and quotation format"] },
        { title: "Fabrication details", items: ["CAD to stone production: 5-axis CNC saw/waterjet programming, calibrated ±1mm cut-to-size tolerances", "Basin, faucet, service, fixing, or other openings marked with the correct digital template", "Natural stone OEM fabrication: contract piece numbering, room/area grouping, batching, and replacement spares"] },
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
        { question: "What can be made from drawings or a BOQ?", answer: "The review can cover custom stone fabrication for cut-to-size countertops, architectural stone parts, furniture, tables, sculptural forms, and other components when the scope and dimensions are clear." },
        { question: "How does the CAD to stone production workflow work?", answer: "CAD to stone production converts architectural CAD drawings (DWG, DXF, PDF) and BOQ cut lists into machine toolpaths for 5-axis CNC bridge saws and waterjets, verifying cutouts and edge profiles before fabrication starts." },
        { question: "Does Atelier Marble provide natural stone OEM fabrication?", answer: "Yes. We provide natural stone OEM fabrication and contract processing for overseas stone fabricators, contractors, and distributors, handling cut-to-size machining, dry-lay inspection, and export crating under strict specifications." },
        { question: "Are tolerances and lead times fixed?", answer: "They depend on the confirmed material, component, drawing, quantity, production path, and delivery requirements. Calibrated ±1mm tolerance is verified against project shop drawings." },
        { question: "Does fabrication include site measuring and installation?", answer: "Those responsibilities are not assumed. Identify the local installer and who supplies final site measurements before the scope is priced." },
        { question: "How should repeated project parts be scheduled?", answer: "Group the parts by room, area, or floor and use consistent piece marks across the current drawing revision, BOQ, approvals, and packing labels." }
      ]}
      purchaseInfo={{
        materialOptions: "Natural marble, granite, quartzite, and other approved stone (ASTM C97 density ~2.7 g/cm³, absorption <0.20%, ASTM C170 compressive strength >100 MPa), subject to current lot, geometry, finish, and application.",
        customCapability: "One-piece custom prototypes and small MOQ project lots supported. CAD to stone production and natural stone OEM fabrication translate drawings into cut-to-size components, ±1mm edge work, repeat quantities, dry-lay inspection points, and fumigated crate packing groups."
      }}
      additionalJsonLd={[customFabricationProductJsonLd, customFabricationHowToJsonLd]}
      metadata={metadata}
    />
  );
}

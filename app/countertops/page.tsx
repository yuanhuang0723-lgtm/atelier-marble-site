import type { Metadata } from "next";
import CommercialLandingPage from "../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../lib/seo";
import { getAssets } from "../../lib/assets";

export const metadata: Metadata = {
  title: "Custom Stone Countertops from China",
  description: "Custom stone countertops from China for kitchens, hotels, and commercial spaces. Share dimensions, cut-outs, edges, finish, quantities, and destination.",
  alternates: { canonical: absoluteUrl("/countertops") },
  openGraph: {
    title: "Custom Stone Countertops from China",
    description: "Review custom stone countertop scope, material direction, cut-outs, edges, finish, and export packing before quotation.",
    url: absoluteUrl("/countertops"),
    siteName,
    images: [{ url: absoluteUrl("/assets/home-top-cover.webp") }]
  }
};

const countertopContentSections = [
  {
    heading: "List each countertop by room, area, and piece mark",
    summary: "Tie every top to a specific room, piece mark, finished dimension, and drawing revision so bids compare the same scope.",
    paragraphs: [
      "A countertop quotation is easier to review when each top is tied to a kitchen, guestroom, bar, reception desk, or other named area. Use a piece mark that appears on the plan and BOQ, then state the overall size, quantity, material direction, finish, and drawing revision. Separate standard tops from mirrored, corner, island, and exception pieces. If the request includes several buildings or floors, identify them instead of combining every surface into one total area.",
      "Show whether measurements are finished sizes, cabinet sizes, or preliminary design dimensions. Include a plan and sections where depth, overhang, thickness, support, or wall return affects the part. If one schedule and one drawing use different names or quantities, identify which source controls and list the difference. This gives buyers a useful basis for comparing quotes and helps prevent an estimate from being read as approval of an incomplete scope."
    ]
  },
  {
    heading: "Coordinate the worktop with cabinets and support",
    summary: "Confirm cabinet dimensions, support rails, overhangs, and site tolerances before final fabrication release.",
    paragraphs: [
      "Show cabinet widths, finished wall positions, support rails, brackets, overhangs, cut-outs, joints, and any exposed underside. Identify which edges meet a wall, another top, or a separate panel. Confirm support conditions with the cabinet and design teams. For long spans, cantilevers, or unusual loads, the responsible designer or structural professional should confirm the support plan and its suitability. A photograph of an installed kitchen can communicate style, but it does not establish the cabinet dimensions or support conditions for a new project.",
      "Confirm with cabinet and design teams whether a dimension is fixed or needs a final site measure. Mark the point from which the dimension is taken and note if walls, cabinets, or finished surfaces are not yet complete. If local measuring or installation is required, identify who provides it and when. Fabrication should use an agreed final dimension rather than an assumed allowance hidden in a sketch or quotation."
    ]
  },
  {
    heading: "Detail an island and waterfall end as connected parts",
    summary: "Define island tops, waterfall panel joints, exposed edges, and vein alignment expectations across connected faces.",
    paragraphs: [
      "An island may include a top, one or more waterfall ends, a seating overhang, a seam, and a support frame. Show these parts in plan and section views, including how the vertical panel meets the work surface and which edges are exposed. If the design expects the vein to continue across the corner, state the visual direction and identify which pieces are intended to relate to one another. Do not rely on a room image alone to specify that relationship.",
      "Confirm whether the waterfall panel is part of the stone quotation or another trade's package, and define its dimensions and visible faces. Note where the panel meets the floor, cabinet, or adjacent finish. Thickness, joint treatment, edge profiles, and support conditions may affect how the parts are quoted, so keep them on the same revision as the island plan. Material matching depends on the available pieces and should be reviewed for the actual order."
    ]
  },
  {
    heading: "Map sink, faucet, appliance, and service openings",
    summary: "Provide exact cutout locations, product templates, and fitting coordination for sinks, faucets, and appliances.",
    paragraphs: [
      "Mark each sink, faucet, cooktop, soap dispenser, outlet, cable, or other opening with dimensions from fixed edges or centerlines. Share the product template or model reference where one exists and say whether the opening is centered, offset, or aligned with another feature. For undermount or integrated sink designs, show the counter opening and the basin relationship together; the separate sink page covers the additional basin and drainage coordination.",
      "Confirm which trade supplies the fitting, template, plumbing information, and final opening position. A cut-out can change if the appliance or faucet model changes, so record those decisions before the drawing is approved. Keep electrical, plumbing, ventilation, and cabinet requirements with their responsible trades. The stone schedule can show the opening locations it is based on, but it does not replace fitting instructions or site-code review."
    ]
  },
  {
    heading: "Choose material and finish for the intended use",
    summary: "Align stone type, thickness, surface finish, and variation tolerance with the intended room environment and care needs.",
    paragraphs: [
      "Specify the preferred stone, thickness, surface finish, visible face, and any matching requirement. Marble, granite, quartzite, and other natural stone differ in appearance and may vary from piece to piece. If several tops need a coordinated appearance, state which pieces should be reviewed together and what variation is acceptable. Mark the vein direction on the plan when directional or bookmatched surfaces are part of the design rather than leaving it to an image reference.",
      "Ask how current lot availability, surface finish, edge work, and the intended kitchen, bathroom, hotel, or commercial use affect the proposed scope. Confirm sample or lot approval before production release and record who accepts the appearance. Care and maintenance depend on the selected material, finish, and use, so the buyer should review the relevant product guidance with the project team. A material name alone does not guarantee a particular pattern or performance."
    ]
  },
  {
    heading: "Show edges, seams, backsplashes, and wall returns",
    summary: "Specify edge profiles, seam locations, backsplash heights, and wall return connections clearly across all drawings.",
    paragraphs: [
      "Name each exposed edge and show where a polished, eased, mitered, or other specified profile begins and ends. Identify the backsplash or upstand height, side returns, wall panels, seams, and connections to window sills or other materials. If a joint must align with a cabinet, appliance, or wall feature, dimension its location from a clear datum. Use a detail or section for corners and edge build-ups that are difficult to understand from a plan.",
      "For multiple rooms, use the same edge and finish labels across the drawing set and BOQ. If different applications require different details, separate them in the schedule. Confirm whether the wall finish is complete before final countertop dimensions are released, and identify the installer who verifies the site condition. These small decisions affect appearance and fit, but should remain project-specific rather than assumed from a generic countertop description."
    ]
  },
  {
    heading: "Approve the drawing, quote, and delivery scope together",
    summary: "Confirm final drawing revisions, piece counts, packing specs, and destination delivery responsibilities before authorizing production.",
    paragraphs: [
      "Before work is authorized, confirm the current drawing revision, piece count, finished dimensions, material reference, openings, edges, seams, and any exceptions by room. List open decisions and state who approves each one. If a change affects quantity or geometry after a quote is prepared, update the relevant BOQ lines and drawing marks so the buyer and supplier can confirm the revised scope and its price implications.",
      "State the destination, delivery term, packing requirements, receiving limits, and who arranges freight, insurance, customs clearance, unloading, and installation. Countertop fabrication does not automatically include local measuring or fitting. The quotation should make its supply and packing scope clear and identify what the buyer or site contractor provides. Transit times and freight costs depend on route, shipment details, carrier, and agreed terms, so they should be confirmed for the order."
    ]
  }
];

const countertopProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Natural Stone Countertops & Island Worktops Wholesale",
  description: "Direct manufacturer & exporter of precision custom stone countertops from Yunfu, China. Fabricating kitchen islands, waterfall edges, commercial bars, and vanity tops in natural marble, quartzite, and granite with CNC cut-outs, calibrated ±1mm tolerances, dry-lay vein matching, and fumigated crate packaging.",
  category: "Building Materials > Natural Stone > Countertops & Worktops",
  material: "Natural Stone (Marble, Quartzite, Granite)",
  brand: {
    "@type": "Brand",
    name: "Atelier Marble"
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Fabrication Scope", value: "Kitchen Countertops, Waterfall Islands, Commercial Bar Tops, Cut-outs" },
    { "@type": "PropertyValue", name: "Standard Thickness Options", value: "20mm, 30mm, laminated / mitered 40-50mm aprons (±1mm tolerance)" },
    { "@type": "PropertyValue", name: "Edge Profile Options", value: "Eased, Mitered Edge, Bullnose, Ogee, Dupont, Chiseled" },
    { "@type": "PropertyValue", name: "Sink & Cooktop Cutouts", value: "High-Precision 5-Axis Waterjet Cutouts with Polished Undermount Rims" },
    { "@type": "PropertyValue", name: "Physical Standards", value: "ASTM C97 bulk density ~2.7 g/cm³, ASTM C170 compressive strength >110 MPa" },
    { "@type": "PropertyValue", name: "Export Packaging", value: "Fumigated Sturdy Wooden Crates with A-Frame Supports & High-Density Foam" }
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    price: "0",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceType: "https://schema.org/InvoicePrice",
      unitText: "Custom Project RFQ Quotation Based on CAD Shop Drawings & Cut Lists"
    },
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Atelier Marble",
      url: absoluteUrl("/")
    }
  }
};

export default function CountertopsPage() {
  const referenceImages = getAssets("kitchen-countertop", 4).map((asset) => ({ src: asset.src, alt: asset.alt, title: asset.title }));
  return (
    <CommercialLandingPage
      eyebrow="Custom stone countertops"
      heroCtaLabel="Request Countertop Pricing"
      primaryCtaLabel="Request Countertop Pricing"
      title="Custom stone countertops for kitchens, hotels, and commercial interiors."
      description="Coordinate natural stone countertops from dimensions or drawings, including islands, hotel vanity packages, commercial counters, cut-outs, finished edges, and export packing."
      contentSectionTitle="Countertop planning and fabrication guide."
      contentSectionLayout="disclosure"
      contentSections={countertopContentSections}
      image="/assets/home-top-cover.webp"
      imageAlt="Marble dining table and stone countertop in a contemporary interior"
      referenceImages={referenceImages}
      referencePlacement="before-content"
      referenceSectionTitle="Stone countertop and worktop references."
      referenceSectionDescription="Use these photographs to discuss surface, edge, and opening requirements. They do not document a specific machine model or finished shipment."
      scopeRows={[
        {
          component: "Kitchen islands & perimeters",
          inputs: "Plan dimensions, overhangs, waterfall panel joints, sink and cooktop cutout templates, edge profiles, and support details."
        },
        {
          component: "Hospitality vanity packages",
          inputs: "Room-type piece counts, undermount basin cutouts, faucet hole count, splash height, side returns, and crate labeling schedule."
        },
        {
          component: "Commercial bar & reception counters",
          inputs: "Radius or linear segments, mitered aprons, service opening coordinates, seam placement, and crate receiving constraints."
        }
      ]}
      bullets={[
        "Kitchen countertops and islands prepared around your dimensions or drawings",
        "Hotel bathroom vanity tops and repeatable room-type quantities",
        "Commercial counters, cut-outs, edges, backsplashes, and basin coordination",
        "Marble, quartzite, granite, and other natural stone considered case by case"
      ]}
      details={[
        "Kitchen countertops and islands",
        "Hotel bathroom and vanity packages",
        "Commercial counters and public-area surfaces",
        "Cut-to-size tops with finished edges and openings"
      ]}
      specificationGroups={[
        { title: "Dimensions and support", items: ["Overall length, depth, thickness, units, quantity, and drawing revision", "Cabinet opening, support, joints, overhang, reveals, and site tolerance", "Room, type, piece, or area labels for repeatable project quantities"] },
        { title: "Openings and edges", items: ["Sink model or template, faucet holes, service openings, and cut-out positions", "Edge profile, polished or eased exposed edges, backsplash, splash, upstand, and corners", "Seams, joins, visible faces, and orientation shown on the latest drawing"] },
        { title: "Material and finish", items: ["Marble, quartzite, granite, or another approved material reference", "Surface finish, face direction, natural variation, matching expectation, and sample approval", "Application, maintenance expectations, and any project-specific limitations"] },
        { title: "Quote and delivery", items: ["Destination market, packing requirements, timing, and delivery term", "Drawings, BOQ, marked-up photos, quantities, and material direction", "Pricing is confirmed after the project scope and fabrication requirements are reviewed"] }
      ]}
      relatedLink={{ label: "Explore marble countertop fabrication", href: "/countertops/marble-countertops" }}
      relatedLinks={[
        { label: "Explore hotel bathroom vanity tops", href: "/countertops/vanity-tops" },
        { label: "Review cut-to-size stone fabrication in China", href: "/custom-stone-fabrication-china" },
        { label: "Review workshop and packing references", href: "/factory#factory-evidence" }
      ]}
      faqTitle="Custom countertop details, answered clearly."
      faqs={[
        { question: "What information helps price a custom stone countertop?", answer: "Share the application, dimensions or drawings, cut-outs, edge profile, quantity, material direction, finish, destination, and required timing." },
        { question: "Do you provide local measuring and installation?", answer: "This site is structured for project review and export fabrication. Local measuring or installation should be confirmed separately for the destination market." },
        { question: "Can one quotation include kitchens and hotel counters?", answer: "Yes. Separate the applications, room or area labels, quantities, drawings, material direction, and packing requirements so each scope can be reviewed accurately." }
      ]}
      purchaseInfo={{
        materialOptions: "Natural marble, granite, and quartzite (ASTM C97 density ~2.7 g/cm³, absorption <0.20%, ASTM C170 compressive strength >110 MPa). Confirm current lot, 20mm/30mm thickness (±1mm tolerance), finish, cut-outs, and vein matching.",
        customCapability: "One-piece custom slabs and multi-unit project scopes supported. Coordinate countertop dimensions, waterfall islands, sink and faucet cut-outs, splash details, edge profiles, dry-lay vein matching, and fumigated crate packing."
      }}
      additionalJsonLd={[countertopProductJsonLd]}
      metadata={metadata}
    />
  );
}

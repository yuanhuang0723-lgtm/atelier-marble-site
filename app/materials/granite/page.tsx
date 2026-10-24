import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Granite for Commercial Projects in China",
  description:
    "Review granite for hotel and commercial projects. Confirm the available lot, thickness, finish, matching, and fabrication details before the project quotation.",
  alternates: { canonical: absoluteUrl("/materials/granite") },
  openGraph: {
    title: "Granite Materials for Commercial Projects",
    description:
      "Review granite character, application, finish, matching, and fabrication considerations before requesting a project quotation.",
    url: absoluteUrl("/materials/granite"),
    siteName,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp") }]
  }
};

const graniteContentSections = [
  {
    heading: "Match granite grain structure and lot consistency to project scale",
    summary: "Confirm crystal grain size, background tone, and multi-crate consistency against the current lot.",
    paragraphs: [
      "Commercial granite varieties range from tight, uniform crystal grains to bolder movement and mineral contrast. When specifying granite for a hotel, retail roll-out, or public building, identify the preferred stone name or visual reference together with the total area or piece count so lot consistency can be reviewed before quotation sign-off.",
      "For multi-crate or phased deliveries, clarify whether all components in a visible zone need to come from the same block series or slab batch, and agree on reference samples that define the acceptable shade and grain range before cutting begins."
    ]
  },
  {
    heading: "Select surface finish by indoor, wet-area, or exterior use",
    summary: "Compare polished, honed, leathered, flamed, and bush-hammered finishes for the specific setting.",
    paragraphs: [
      "Granite accepts a wide range of mechanical and thermal finishes that alter both visual tone and surface grip. Polished and honed finishes are commonly selected for interior countertops, vanity tops, reception desks, and wall panels, while flamed (thermal), bush-hammered, water-jet, or brushed finishes create textured surfaces for exterior paving, steps, thresholds, and wet-area transitions.",
      "Textured finishes generally lighten the perceived color of dark granites compared with a polished face. Ask for finish samples in the actual stone lot, and have the project architect or engineer verify slip resistance and local code suitability for the intended floor or exterior zone."
    ]
  },
  {
    heading: "Detail thick-slab edges, sink cut-outs, and support interfaces",
    summary: "Specify finished thickness, chamfered or mitered edges, and equipment templates on the drawings.",
    paragraphs: [
      "Commercial bar tops, food-service counters, guestroom vanities, and transaction counters require clear dimensional drawings showing finished thickness, overhang allowances, and edge profiles such as eased, chamfered, bullnose, or mitered build-ups. Mark every exposed edge and return so polishing and profiling match the installation condition.",
      "Provide exact templates or coordinate dimensions from fixed datums for undermount or drop-in basins, faucet holes, drainage slots, catering equipment, and power grommets. Separate confirmed fixture templates from provisional allowances before releasing the shop drawings for fabrication."
    ]
  },
  {
    heading: "Coordinate commercial flooring modules, steps, and transitions",
    summary: "Link module sizes, stair nosings, thresholds, and thickness requirements to the floor plan.",
    paragraphs: [
      "When granite is used for high-traffic corridors, lobbies, exterior entries, or stair packages, organize the schedule by zone, elevation, and module size. Identify standard field tiles, perimeter cut pieces, stair treads, risers, skirtings, and threshold transitions separately on the plan.",
      "State the nominal thickness, any calibration or bedding interface requirements, and where anti-slip grooves, tactile inserts, or metal transition strips occur. The responsible project designer and site installer govern substrate preparation, waterproofing, drainage slopes, and structural fixing."
    ]
  },
  {
    heading: "Confirm pre-shipment checks, crate labels, and delivery scope",
    summary: "Agree dimensional checks, zone-based packing lists, and shipping responsibilities in the quotation.",
    paragraphs: [
      "Before packing, agree which inspection points and photo records are required for the order, such as module dimensions, diagonal squareness, thickness checks, edge completion, cut-out positions, surface finish, and piece marks. Inspection scope follows the written order rather than assumed generic standards.",
      "Group and label wooden crates by building area, floor, room type, or installation sequence so site teams can unload and stage heavy granite components efficiently. Fabrication and export packing do not automatically include local site measuring or installation; confirm freight and delivery terms for the destination."
    ]
  }
];

const faqs = [
  { question: "What granite information should be confirmed?", answer: "Confirm the material name, current lot, thickness, finish, surface character, matching direction, application suitability, quantity, and destination before production." },
  { question: "Can granite be reviewed for commercial countertops?", answer: "Granite can be considered for countertops, islands, hotel surfaces, and commercial applications case by case, with dimensions and fabrication details reviewed together." },
  { question: "Can a granite project start with rough dimensions?", answer: "Yes. Rough dimensions, application, approximate quantity, preferred tone, destination, and reference images can begin a practical material and fabrication review." }
];

export default function GraniteMaterialsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Granite materials"
      heroCtaLabel="Send a Project Inquiry"
      primaryCtaLabel="Send a Project Inquiry"
      title="Granite material direction for commercial project review."
      description="Review granite character, application, finish, matching, and fabrication considerations with a project-focused stone supply team in Yunfu, China."
      overviewHeading="Coordinate granite finish, module tolerances, and cut-to-size fabrication."
      overviewDescription="Our own processing and partner coordination in Yunfu, China support commercial granite packages. Start with a short brief, BOQ, or drawing set; confirm the current granite lot, surface finish, and delivery scope before fabrication is approved."
      image="/materials/hero/atelier-marble-luxury-hero.webp"
      imageAlt="Natural stone material reference for commercial, hotel, and countertop project review"
      imageCaption="Design reference only. Confirm the specific granite variety, grain structure, surface finish, and current lot availability before approving production."
      scopeRows={[
        { component: "Commercial countertops and food-service tops", inputs: "Plan dimensions, thickness, sink or equipment cut-out templates, exposed edge profiles, finish, and unit count." },
        { component: "Hotel and public-area flooring modules", inputs: "Floor layout, module sizes, surface finish (polished, honed, or flamed), thickness, border details, and area by zone." },
        { component: "Stair treads, risers, and thresholds", inputs: "Section profiles, nosing or anti-slip groove details, finished lengths, quantity per flight or doorway, and piece marks." },
        { component: "Wall panels, copings, and custom parts", inputs: "Elevation and section drawings, fixing-slot details confirmed by the project engineer, finish, and batch schedule." }
      ]}
      contentSectionTitle="Review granite finishes, tolerances, and commercial project details."
      contentSectionLayout="disclosure"
      contentSections={graniteContentSections}
      bullets={[
        "Evaluate granite grain consistency, background shade, and current lot availability for project scale",
        "Compare polished, honed, leathered, flamed, and bush-hammered finishes for indoor or exterior zones",
        "Coordinate countertop cut-outs, thick-edge profiles, stair nosings, and repeatable flooring modules",
        "Agree pre-shipment dimensional checks, zone-based crate labels, and delivery terms before release"
      ]}
      details={["Granite kitchen countertops and islands", "Hotel and commercial surface packages", "Public-area counters and feature surfaces", "Cut-to-size components with finished edges and openings"]}
      specificationGroups={[
        {
          title: "Material and application review",
          items: [
            "Identify the selected granite and current lot; request material-specific test evidence when the project specification requires it",
            "Review the requested finish, visible faces, cleaning requirements, and intended indoor or outdoor application",
            "Confirm slab dimensions, requested thickness, quantity, natural variation, and matching expectations before quotation"
          ]
        },
        {
          title: "Fabrication, single-piece custom & export",
          items: [
            "Review component geometry, basin or service openings, edges, tolerances, and support interfaces from the project drawings",
            "Single-piece requests and repeat quantities are reviewed for material availability, fabrication feasibility, and export packing",
            "Agree inspection points, piece marks, protective packing, labels, and destination requirements in the quotation"
          ]
        }
      ]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying granite."
      relatedLink={{ label: "See commercial countertop scope", href: "/countertops" }}
      relatedLinks={[
        { label: "Browse full natural stone materials catalog", href: "/materials" },
        { label: "Coordinate architectural stone flooring layouts", href: "/architectural-stone/flooring" },
        { label: "Review stone wall cladding panel coordination", href: "/architectural-stone/wall-cladding" },
        { label: "Review commercial stone project packages", href: "/projects/commercial-stone" },
        { label: "Review custom cut-to-size stone fabrication", href: "/custom-stone-fabrication-china" },
        { label: "View workshop and packing references", href: "/factory#factory-evidence" },
        { label: "Use Natural Stone: properties of granite guide", href: "https://usenaturalstone.org/properties-of-granite/" }
      ]}
      purchaseInfo={{ materialOptions: "Natural granite. Confirm the current lot, thickness, finish, surface character, and intended application.", customCapability: "Review countertop and commercial components, edge details, cut-outs, quantities, and packing groups." }}
      metadata={metadata}
    />
  );
}

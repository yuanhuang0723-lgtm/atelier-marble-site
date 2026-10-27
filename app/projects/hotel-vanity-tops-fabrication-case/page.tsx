import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { vanityProductReferences } from "../../../data/vanity-page-images";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Hotel Vanity Top Drawing & Component Review",
  description: "Review hotel vanity top product and drawing references from Yunfu, China. Discuss room schedules, basin templates, materials, inspection, and packing.",
  alternates: { canonical: absoluteUrl("/projects/hotel-vanity-tops-fabrication-case") },
  openGraph: {
    title: "Hotel Vanity Top Drawing & Component Review",
    description: "Review hotel vanity top product and drawing references from Yunfu, China. Discuss room schedules, basin templates, materials, inspection, and packing.",
    url: absoluteUrl("/projects/hotel-vanity-tops-fabrication-case"),
    siteName,
    images: [{ url: absoluteUrl(vanityProductReferences[0].src) }]
  }
};

const vanityReviewSections = [
  {
    heading: "Link guestroom schedules to individual vanity drawing revisions",
    summary: "Keep room types, mirrored bathroom layouts, and spare units tied to one controlled drawing list.",
    paragraphs: [
      "A hotel bathroom countertop package rarely consists of a single uniform top. Standard king, double queen, accessible (ADA), and suite bathrooms each carry distinct lengths, splash heights, and basin offsets, often paired with left-hand and right-hand mirrored configurations across the corridor.",
      "Before releasing a quotation for fabrication, list every vanity type by piece mark, drawing number, revision date, measurement unit, and quantity. Separating confirmed room types from provisional layouts prevents a late plumbing or cabinetry adjustment in one room category from disrupting the rest of the schedule."
    ]
  },
  {
    heading: "Verify basin cut-outs, faucet holes, and undermount support details",
    summary: "Match physical sink templates or CAD outlines to centerlines and cabinet clearance.",
    paragraphs: [
      "Workshop component references show how rectangular or oval undermount cut-outs, deck-mounted faucet holes, and front apron returns are prepared on individual tops. For actual production, a photograph cannot replace a physical basin template or a dimensioned CAD file from the sanitaryware supplier.",
      "Confirm the distance from the front finished edge to the basin centerline, the faucet spread, the reveal style (positive, zero, or slight overhang), and where mounting clips or support rails sit relative to the vanity frame. Record who signs off on the first-piece template check before repeat cutting begins."
    ]
  },
  {
    heading: "Coordinate backsplashes, side splashes, and mitered front aprons",
    summary: "Define which edges are polished or mitered and how wall returns meet bathroom tile.",
    paragraphs: [
      "Hotel vanity scopes frequently combine the main horizontal counter with a rear upstand, one or two side splashes, a mitered front drop apron, and an under-counter pipe shield or shelf. Show the thickness and finished edge treatment for each sub-piece on the section drawing rather than assuming a single profile applies to all edges.",
      "Clarify whether splashes are shipped loose for site fitting after wall tiling is complete, and note which faces remain visible at open vanity ends versus alcoves bounded by two walls."
    ]
  },
  {
    heading: "Align stone lot selection, finish expectations, and bathroom care",
    summary: "Confirm slab lot shade range, surface finish, and housekeeping compatibility before approval.",
    paragraphs: [
      "Natural marble, quartzite, and granite vary in background shade, veining, and chemical sensitivity. If guestroom vanities must stay within a specific tone or movement range across a floor or phase, agree on the approved control sample or current slab lot photos before cutting.",
      "Discuss whether a polished or honed finish suits the hotel operator's housekeeping protocol, and review sealing and acid-etching considerations for calcium-carbonate stones such as marble prior to final specification sign-off."
    ]
  },
  {
    heading: "Set pre-packing inspection points and room-grouped crate labels",
    summary: "Agree dimensional checks, dry-lay photo records, and crate markings matched to site unloading.",
    paragraphs: [
      "Pre-shipment verification can cover overall length and depth, cut-out placement, edge polishing, apron joints, surface finish, and piece-mark labels as specified in the written quotation. Define which photo records or measurement sheets are required before crates are sealed.",
      "Group vanity tops, splashes, and matching hardware spaces by floor, wing, or room-type sequence on the packing list. Clear exterior crate markings help site contractors move heavy stone bundles directly to the designated staging floor."
    ]
  }
];

const hotelVanityTechArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Hotel Vanity Top Drawing & Component Review",
  description: String(metadata.description),
  url: absoluteUrl("/projects/hotel-vanity-tops-fabrication-case"),
  author: { "@type": "Organization", name: siteName, url: absoluteUrl("/") },
  publisher: { "@type": "Organization", name: siteName, url: absoluteUrl("/") }
};

export default function HotelVanityFabricationCasePage() {
  return (
    <CommercialLandingPage
      eyebrow="Vanity fabrication review"
      title="Hotel vanity tops: review drawings and component details."
      description="Use these product and workshop references to prepare a hotel bathroom countertop brief. Scope material, room quantities, basin openings, and packing around your project drawings."
      heroCtaLabel="Discuss Your Hotel Vanity Scope"
      primaryCtaLabel="Discuss Your Hotel Vanity Scope"
      image={vanityProductReferences[0].src}
      imageAlt={vanityProductReferences[0].alt}
      imageFit="contain"
      imageCaption="Image-archive product reference. Confirm material, dimensions, and project-specific evidence separately."
      overviewHeading="From a component reference to a reviewable project brief."
      overviewDescription="From Yunfu, China, our own processing and partner coordination support hotel vanity packages. Match each vanity type to its drawing revision, dimensions, quantity, basin template, and selected material. Project-specific approvals and inspection records should be agreed before production is released."
      bullets={[
        "Finished length, depth, thickness, units, and exposed edges",
        "Basin and faucet templates with opening locations and support details",
        "Room types, mirrored variants, piece marks, and quantities",
        "Selected material, finish approval, care, and natural variation",
        "Inspection scope, protective packing, labels, and delivery destination"
      ]}
      details={[
        "Component photographs help compare overall form, basin openings, and visible edges.",
        "Drawing reviews connect piece marks, dimensions, revisions, material decisions, and quantities.",
        "Workshop references support discussions about handling and packing. Agree order-specific approval and inspection evidence in the quotation."
      ]}
      referencePlacement="before-content"
      referenceSectionTitle="Compare the component, drawing, and workshop references."
      referenceSectionDescription="Review the visible shapes and details, then identify the project-specific dimensions, material, approval, and inspection information still needed."
      referenceImages={[
        ...vanityProductReferences.map(item => ({ src: item.src, alt: item.alt, title: item.title })),
        { src: "/assets/factory/evidence/redacted-stone-drawing-review-example.png", alt: "Redacted stone drawing excerpt; project identifiers and dimension values removed.", title: "Drawing-review input example" },
        { src: "/assets/factory/workshop/stone-workshop-packing-area-b1a9572643.webp", alt: "Stone pieces and packing preparation areas in the workshop.", title: "Workshop and packing-preparation reference" }
      ]}
      scopeRows={[
        { component: "Standard and mirrored room types", inputs: "Drawing revision, piece marks, finished dimensions, basin positions, and quantity by type." },
        { component: "Material and finish", inputs: "Selected lot or sample, requested thickness, visible faces, matching expectations, and care requirements." },
        { component: "Inspection and packing", inputs: "Agreed checks, approval responsibilities, piece labels, protective packing, and receiving destination." }
      ]}
      contentSectionTitle="Checklist for reviewing hotel vanity shop drawings and components."
      contentSectionLayout="disclosure"
      contentSections={vanityReviewSections}
      purchaseInfo={{
        materialOptions: "Marble, granite, quartzite, and other approved natural stones. Confirm the selected lot, thickness, finish, and matching range before approval.",
        customCapability: "Coordinate single-piece mock-up tops and multi-room hotel vanity schedules with basin cut-outs, mitered aprons, splashes, and room-labeled export crates."
      }}
      relatedLink={{ label: "Hotel bathroom countertops and vanity tops", href: "/countertops/vanity-tops" }}
      relatedLinks={[
        { label: "Review marble countertop fabrication & cutouts", href: "/countertops/marble-countertops" },
        { label: "Review cut-to-size marble material selection", href: "/materials/marble" },
        { label: "Review granite materials for commercial projects", href: "/materials/granite" },
        { label: "Review quartzite countertop fabrication", href: "/materials/quartzite" },
        { label: "See Canada custom stone shower niches reference", href: "/projects/canada-shower-niches-2025" },
        { label: "Watch the workshop walkthrough", href: "/#home-workshop-walkthrough" }
      ]}
      faqs={[
        { question: "What evidence is included in this review?", answer: "Product photographs, a redacted drawing-input example, and workshop references are included. This collection has not been tied to a documented hotel order, room quantity, or inspection result. Ask for order-specific evidence before confirming production." },
        { question: "Can review start before the final drawings are ready?", answer: "Yes. An email and short project note can start the discussion. Rough dimensions, a room schedule, a basin reference, and the destination are useful; drawings can follow when available." },
        { question: "Are machine type, tolerances, and packing fixed?", answer: "They are confirmed against the material, geometry, drawings, production path, and destination. Request the relevant project specification and evidence before treating an estimate as a production approval." }
      ]}
      additionalJsonLd={[hotelVanityTechArticleJsonLd]}
      metadata={metadata}
    />
  );
}

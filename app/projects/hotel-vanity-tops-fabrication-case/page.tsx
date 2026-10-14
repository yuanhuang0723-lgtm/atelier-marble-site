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
      overviewDescription="Match each vanity type to its drawing revision, dimensions, quantity, basin template, and selected material. Project-specific approvals and inspection records should be agreed before production is released."
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
      relatedLinks={[
        { label: "Hotel bathroom countertops and vanity tops", href: "/countertops/vanity-tops" },
        { label: "Review marble material choices", href: "/materials/marble" },
        { label: "Watch the workshop walkthrough", href: "/#home-workshop-walkthrough" }
      ]}
      faqs={[
        { question: "What evidence is included in this review?", answer: "Product photographs, a redacted drawing-input example, and workshop references are included. This collection has not been tied to a documented hotel order, room quantity, or inspection result. Ask for order-specific evidence before confirming production." },
        { question: "Can review start before the final drawings are ready?", answer: "Yes. An email and short project note can start the discussion. Rough dimensions, a room schedule, a basin reference, and the destination are useful; drawings can follow when available." },
        { question: "Are machine type, tolerances, and packing fixed?", answer: "They are confirmed against the material, geometry, drawings, production path, and destination. Request the relevant project specification and evidence before treating an estimate as a production approval." }
      ]}
      metadata={metadata}
    />
  );
}

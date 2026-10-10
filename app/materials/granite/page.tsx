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

const graniteProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Commercial Granite Components & Countertops",
  description:
    "Commercial granite fabrication and cut-to-size supply from Yunfu, China. Featuring bulk density 2.65-2.80 g/cm³, water absorption <0.20%, compressive strength >150 MPa, polished, flamed, honed, and bush-hammered finishes.",
  image: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp"),
  brand: {
    "@type": "Brand",
    name: "Atelier Marble"
  },
  material: "Natural Granite",
  additionalProperty: [
    {
      "@type": "PropertyValue",
      "name": "Bulk Density",
      "value": "2.65–2.80 g/cm³ (ASTM C97)"
    },
    {
      "@type": "PropertyValue",
      "name": "Water Absorption",
      "value": "<0.20% (ASTM C97)"
    },
    {
      "@type": "PropertyValue",
      "name": "Compressive Strength",
      "value": ">150 MPa (ASTM C170)"
    },
    {
      "@type": "PropertyValue",
      "name": "Surface Finishes",
      "value": "Polished, Honed, Flamed, Bush-hammered, Leathered"
    },
    {
      "@type": "PropertyValue",
      "name": "Fabrication Tolerance",
      "value": "±1mm dimensional tolerance via CNC bridge cutting"
    },
    {
      "@type": "PropertyValue",
      "name": "Thickness Range",
      "value": "20mm, 30mm, 40mm cut-to-size slabs and mitered profiles"
    },
    {
      "@type": "PropertyValue",
      "name": "Quality Inspection",
      "value": "Pre-shipment dry-lay inspection, lot color-matching, and piece labeling"
    },
    {
      "@type": "PropertyValue",
      "name": "Export Packaging",
      "value": "Fumigated wooden crates with plastic wrap moisture protection"
    }
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "65",
    highPrice: "380",
    offerCount: "60",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      description: "Project quote based on granite material grade, cutting schedule, finish specification, and export packing."
    },
    availability: "https://schema.org/InStock",
    url: absoluteUrl("/materials/granite")
  }
};

const graniteProcurementHowToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Commercial Granite Procurement & High-Traffic Fabrication Workflow",
  description: "Standardized 5-step procurement procedure for evaluating commercial granite physical performance, surface finishes, CNC cutting tolerances, and export delivery.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Material Character & Commercial Scope",
      text: "Start with granite material character, preferred color tone, high-traffic application, and reference images."
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Thickness, Surface Finish & Edge Specifications",
      text: "Review thickness (20mm, 30mm, 40mm cut-to-size), surface finish (polished, honed, flamed/thermal, bush-hammered, leathered), and finished edge profiles."
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Application Verification & Joint Coordination",
      text: "Verify suitability for public-area counters, reception desks, high-traffic commercial flooring, wall facades, and exterior architectural paving."
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Quarry Lot Uniformity & ASTM Testing",
      text: "Confirm physical standards: bulk density 2.65–2.80 g/cm³ (ASTM C97), water absorption <0.20%, compressive strength >150 MPa (ASTM C170), and verify lot shade uniformity."
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "CNC Bridge Cutting, Piece Mark Labeling & Crating",
      text: "Execute CNC bridge cutting (±1mm tolerance), pre-shipment dry-lay quality inspection, piece mark labeling for installation, and fumigated wooden crates with plastic wrap moisture protection."
    }
  ]
};

const faqs = [
  { question: "What granite information should be confirmed?", answer: "Confirm the material name, current lot, thickness, finish, surface character, matching direction, application suitability, quantity, and destination before production." },
  { question: "Can granite be reviewed for commercial countertops?", answer: "Granite can be considered for countertops, islands, hotel surfaces, and commercial applications case by case, with dimensions and fabrication details reviewed together." },
  { question: "Can a granite project start with rough dimensions?", answer: "Yes. Rough dimensions, application, approximate quantity, preferred tone, destination, and reference images can begin a practical material and fabrication review." }
];

export default function GraniteMaterialsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Granite materials"
      title="Granite material direction for commercial project review."
      description="Review granite character, application, finish, matching, and fabrication considerations with a project-focused stone supply team in Yunfu, China."
      image="/materials/hero/atelier-marble-luxury-hero.webp"
      imageAlt="Natural stone material reference for commercial, hotel, and countertop project review"
      bullets={[
        "Start with material character, preferred tone, application, and reference images",
        "Review thickness, finish, matching direction, cut-outs, and edge requirements",
        "Useful for countertops, islands, hotel surfaces, and commercial interiors",
        "Confirm current lot and project suitability before fabrication is approved"
      ]}
      details={["Granite kitchen countertops and islands", "Hotel and commercial surface packages", "Public-area counters and feature surfaces", "Cut-to-size components with finished edges and openings"]}
      specificationGroups={[
        {
          title: "Commercial granite physical specifications",
          items: [
            "Physical standards: Bulk density 2.65–2.80 g/cm³ (ASTM C97), water absorption <0.20% (ASTM C97), compressive strength >150 MPa (ASTM C170)",
            "Surface finish options: Polished, honed, flamed / thermal, bush-hammered, and leathered textures for exterior and interior use",
            "Lot consistency: Available slab thickness (20mm, 30mm, 40mm cut-to-size), quarry lot yield, and shade uniformity for high-traffic projects"
          ]
        },
        {
          title: "Fabrication, single-piece custom & export",
          items: [
            "CNC bridge cutting with ±1mm dimensional tolerances, cut-outs for sinks, service troughs, and architectural anchoring kerfs",
            "One-piece custom pieces and small MOQ batches welcomed for reception desks, vanity counters, and specialty modules alongside volume supply",
            "Full pre-shipment dry-lay quality inspection, detailed labeling by piece mark, and fumigated wooden crates with plastic wrap protection"
          ]
        }
      ]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying granite."
      relatedLink={{ label: "See commercial countertop scope", href: "/countertops" }}
      purchaseInfo={{
        materialOptions: "Natural commercial granite (density 2.65–2.80 g/cm³, absorption <0.20%, compressive strength >150 MPa). Confirm the current lot, thickness, finish, and application suitability.",
        customCapability: "One-piece custom fabrication and small MOQ orders supported. Review countertop and commercial components, ±1mm CNC edge details, cut-outs, quantities, and fumigated crate packing."
      }}
      additionalJsonLd={[graniteProductJsonLd, graniteProcurementHowToJsonLd]}
      metadata={metadata}
    />
  );
}

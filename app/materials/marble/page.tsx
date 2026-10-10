import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Marble Materials & Slabs for Projects",
  description:
    "Explore marble for hotel, commercial, and countertop projects. Confirm current lot, thickness, finish, veining, and matching before fabrication.",
  alternates: { canonical: absoluteUrl("/materials/marble") },
  openGraph: {
    title: "Marble Materials for Projects in China",
    description:
      "Review marble character, application, finish, matching, and fabrication considerations before requesting a project quotation.",
    url: absoluteUrl("/materials/marble"),
    siteName,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp") }]
  }
};

const faqs = [
  { question: "What marble information should be confirmed?", answer: "Confirm the material name, current lot, thickness, finish, surface character, matching direction, application suitability, quantity, and destination before production." },
  { question: "Can marble be reviewed for countertops and vanities?", answer: "Marble can be considered for countertops, vanity tops, hotel bathrooms, commercial interiors, and custom components case by case, with dimensions and fabrication details reviewed together." },
  { question: "Can I send a reference image first?", answer: "Yes. A reference image, rough dimensions, application, preferred tone, and approximate quantity can begin a practical material and fabrication review." }
];

const marbleProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Cut-to-Size Natural Marble Slabs & Architectural Tiles",
  description: "Direct manufacturer & exporter of premium natural marble slabs, cut-to-size tiles, and architectural components from Yunfu, China. Available in Calacatta, Carrara, Statuario, and Nero Marquina. Strict quality control, dry-lay inspection, and fumigated crate packing.",
  category: "Building Materials > Natural Stone > Marble Slabs & Tiles",
  material: "Natural Marble",
  brand: {
    "@type": "Brand",
    name: "Atelier Marble"
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Bulk Density", value: "2.65 - 2.75 g/cm³ (ASTM C97)" },
    { "@type": "PropertyValue", name: "Water Absorption Rate", value: "< 0.20% (ASTM C97)" },
    { "@type": "PropertyValue", name: "Compressive Strength", value: "> 110 MPa (ASTM C170)" },
    { "@type": "PropertyValue", name: "Modulus of Rupture", value: "> 10.5 MPa (ASTM C99)" },
    { "@type": "PropertyValue", name: "Available Thicknesses", value: "18mm, 20mm, 30mm (±1mm tolerance)" },
    { "@type": "PropertyValue", name: "Surface Finishes", value: "Polished, Honed, Leathered, Acid-Washed" },
    { "@type": "PropertyValue", name: "Vein Matching", value: "Bookmatched, Continuous Flow, Dry-Lay Inspection" },
    { "@type": "PropertyValue", name: "Export Packaging", value: "Fumigated Sturdy Wooden Crates/Bundles with Plastic Film Protection" }
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    price: "0",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceType: "https://schema.org/InvoicePrice",
      unitText: "Project RFQ Quotation Based on CAD & BOQ"
    },
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Atelier Marble",
      url: absoluteUrl("/")
    }
  }
};

export default function MarbleMaterialsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Marble materials"
      title="Marble material direction for considered project decisions."
      description="Review marble character, application, finish, matching, and fabrication considerations with a project-focused stone supply team in Yunfu, China."
      image="/materials/hero/atelier-marble-luxury-hero.webp"
      imageAlt="Natural marble slabs and cut-to-size tiles for commercial and luxury residential projects"
      bullets={[
        "Start with material character, preferred tone, application, and reference images",
        "Review thickness, finish, matching direction, cut-outs, and edge requirements",
        "Suitable for countertops, vanity tops, hotel interiors, and custom components",
        "Confirm current lot and project suitability before fabrication is approved"
      ]}
      details={["Marble countertops and islands", "Hotel vanity tops and bathroom packages", "Commercial interior wall and floor applications", "Custom cut-to-size stone components"]}
      specificationGroups={[
        {
          title: "Material review",
          items: [
            "Stone variety name (Calacatta, Carrara, Statuario, Nero Marquina), current lot, slab dimensions, 18mm/20mm/30mm thickness (±1mm tolerance), and available square meters",
            "Surface finishes (polished, honed, leathered, acid-washed), exposed edges, face direction, bookmatch, or continuous vein-matching expectation",
            "Physical properties (ASTM C97 bulk density ~2.7 g/cm³, water absorption <0.2%, compressive strength >100 MPa), natural variation, and dry-lay photo approval"
          ]
        },
        {
          title: "Application fit",
          items: [
            "Countertop, vanity, wall cladding, flooring, or custom cut-to-size architectural component application",
            "Cut-outs, edge profiles, joints, support, and installation constraints coordinated from drawings",
            "Pre-shipment full slab inspection photos/videos, fumigated sturdy wooden crate packing with plastic film protection, and destination delivery terms"
          ]
        }
      ]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying marble."
      relatedLink={{ label: "See marble countertop applications", href: "/countertops/marble-countertops" }}
      relatedLinks={[{ label: "Review hotel vanity top packages", href: "/countertops/vanity-tops" }]}
      purchaseInfo={{
        materialOptions: "Natural marble (Calacatta, Carrara, Statuario, Nero Marquina). Bulk density ~2.7 g/cm³, water absorption <0.20%, ASTM compressive strength >100 MPa. Confirm the current lot, thickness, finish, veining, and matching across pieces before approval.",
        customCapability: "One-piece custom or container-load wholesale. Review marble suitability for countertops, vanities, lobby surfaces, and repeat project components with fumigated wooden crate packing."
      }}
      additionalJsonLd={[marbleProductJsonLd]}
      metadata={metadata}
    />
  );
}

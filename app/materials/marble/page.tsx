import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Cut-to-Size Marble Slabs & Fabrication",
  description:
    "Cut-to-size marble slabs and custom fabrication from Yunfu, China. Calacatta, Carrara, and Statuario with lot review, edge work, and export crating.",
  alternates: { canonical: absoluteUrl("/materials/marble") },
  openGraph: {
    title: "Cut-to-Size Marble Slabs & Fabrication",
    description:
      "Cut-to-size marble slabs and custom fabrication from Yunfu, China. Calacatta, Carrara, and Statuario with lot review, edge work, and export crating.",
    url: absoluteUrl("/materials/marble"),
    siteName,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp") }]
  }
};

const faqs = [
  { question: "What information is needed for cut-to-size marble fabrication?", answer: "Confirm the marble variety (Calacatta, Carrara, Statuario, etc.), current lot, required thickness, surface finish, edge details, cutouts, matching direction, quantities, and destination before production begins." },
  { question: "Can cut-to-size marble be specified for countertops and vanities?", answer: "Yes. Cut-to-size marble is widely fabricated for kitchen countertops, hotel bathroom vanity tops, wall cladding, and custom architectural features with CAD shop drawings and dry-lay vein matching." },
  { question: "Can I send reference drawings or sketches first?", answer: "Yes. An architectural CAD drawing, BOQ schedule, rough sketch, or reference photo can begin a practical cut-to-size marble review and quotation." }
];

const marbleProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Cut-to-Size Marble Slabs & Architectural Fabrication",
  description: "Direct manufacturer & exporter of premium cut-to-size marble slabs, architectural tiles, and custom components from Yunfu, China. Available in Calacatta, Carrara, Statuario, and Nero Marquina. Strict quality control, dry-lay inspection, and fumigated crate packing.",
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

const marbleProcurementHowToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Architectural Marble Material Specification & Procurement Workflow",
  description: "Standardized 5-step procurement procedure for reviewing marble character, confirming lot veining, specifying ASTM physical properties, and approving pre-shipment dry-lay matching for custom project fabrication.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Material Character & Reference Review",
      text: "Start with marble variety name (Calacatta, Carrara, Statuario, Nero Marquina), preferred tone, intended application, and project reference images."
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Dimensional & Surface Finish Coordination",
      text: "Review required slab thickness (18mm, 20mm, 30mm with ±1mm tolerance), surface finishes (polished, honed, leathered, acid-washed), cut-outs, and edge profiles."
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Application Fit & Engineering Suitability",
      text: "Confirm suitability for countertops, vanity tops, hotel bathrooms, commercial interior walls, or flooring with structural coordination from shop drawings."
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Block Lot & Physical Property Approval",
      text: "Confirm current quarry lot, slab dimensions, natural variation across the lot, and ASTM standards (ASTM C97 bulk density ~2.7 g/cm³, water absorption <0.20%, ASTM C170 compressive strength >100 MPa)."
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Dry-Lay Vein Matching & Export Packaging",
      text: "Conduct pre-shipment full slab inspection photos/videos, dry-lay photo approval, and fumigated sturdy wooden crate packing with plastic film protection."
    }
  ]
};

export default function MarbleMaterialsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Cut-to-size marble"
      title="Cut-to-size marble slabs and custom fabrication for project decisions."
      description="Review cut-to-size marble character, application suitability, surface finishes, vein matching, and fabrication details with a project-focused stone supply team in Yunfu, China."
      image="/materials/hero/atelier-marble-luxury-hero.webp"
      imageAlt="Cut-to-size marble slabs, tiles, and custom architectural components for commercial and luxury residential projects"
      bullets={[
        "Cut-to-size marble components from project CAD drawings and BOQ schedules",
        "Review thickness (18mm, 20mm, 30mm with ±1mm tolerance) and finish options",
        "Suitable for countertops, vanity tops, hotel interiors, and feature walls",
        "Confirm quarry lot, vein direction, and dry-lay matching before fabrication"
      ]}
      details={["Cut-to-size marble countertops and islands", "Hotel vanity tops and bathroom packages", "Commercial interior wall cladding and flooring", "Custom cut-to-size marble components"]}
      specificationGroups={[
        {
          title: "Material review",
          items: [
            "Cut-to-size marble varieties (Calacatta, Carrara, Statuario, Nero Marquina), current lot, slab dimensions, 18mm/20mm/30mm thickness (±1mm tolerance), and available square meters",
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
      relatedLinks={[
        { label: "Review luxury hotel vanity top materials & packages", href: "/countertops/vanity-tops" },
        { label: "Review custom cut-to-size stone fabrication", href: "/custom-stone-fabrication-china" }
      ]}
      purchaseInfo={{
        materialOptions: "Natural marble (Calacatta, Carrara, Statuario, Nero Marquina). Bulk density ~2.7 g/cm³, water absorption <0.20%, ASTM compressive strength >100 MPa. Confirm the current lot, thickness, finish, veining, and matching across pieces before approval.",
        customCapability: "One-piece custom or container-load wholesale. Small MOQ mock-up reviews and full cut-to-size marble packages supported for countertops, vanities, lobby surfaces, and repeat project components with fumigated wooden crate packing."
      }}
      additionalJsonLd={[marbleProductJsonLd, marbleProcurementHowToJsonLd]}
      metadata={metadata}
    />
  );
}

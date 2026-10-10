import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Quartzite Countertop Fabrication from China",
  description:
    "Quartzite countertops from China. Confirm current lot, thickness, finish, slab matching, and cut-outs for your fabrication project before requesting a quote.",
  alternates: { canonical: absoluteUrl("/materials/quartzite") },
  openGraph: {
    title: "Quartzite Materials for Projects in China",
    description:
      "Review quartzite character, application, finish, matching, and fabrication considerations before requesting a project quotation.",
    url: absoluteUrl("/materials/quartzite"),
    siteName,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp") }]
  }
};

const quartziteProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Quartzite Slabs & Countertops",
  description:
    "Luxury natural quartzite slabs and custom countertop fabrication from Yunfu, China. Featuring Mohs hardness ~7, density 2.65 g/cm³, water absorption <0.15%, compressive strength >130 MPa, polished, honed, and leathered finishes.",
  image: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp"),
  brand: {
    "@type": "Brand",
    name: "Atelier Marble"
  },
  material: "Natural Quartzite",
  additionalProperty: [
    {
      "@type": "PropertyValue",
      "name": "Mohs Hardness",
      "value": "~7 (scratch-resistant crystalline structure)"
    },
    {
      "@type": "PropertyValue",
      "name": "Bulk Density",
      "value": "2.65 g/cm³ (ASTM C97)"
    },
    {
      "@type": "PropertyValue",
      "name": "Water Absorption",
      "value": "<0.15% (ASTM C97 low porosity)"
    },
    {
      "@type": "PropertyValue",
      "name": "Compressive Strength",
      "value": ">130 MPa (ASTM C170)"
    },
    {
      "@type": "PropertyValue",
      "name": "Available Finishes",
      "value": "Polished, Honed, Leathered / Brushed"
    },
    {
      "@type": "PropertyValue",
      "name": "Fabrication Scope",
      "value": "5-axis CNC bridge cutting, undermount sink cut-outs, bookmatched slab alignment, ±1mm tolerance"
    },
    {
      "@type": "PropertyValue",
      "name": "Export Packaging",
      "value": "Fumigated wooden crates with plastic wrap and foam edge protection"
    }
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "160",
    highPrice: "890",
    offerCount: "45",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "USD",
      description: "Project quote based on selected quartzite block lot, slab thickness (20mm/30mm), CNC processing, and export crating."
    },
    availability: "https://schema.org/InStock",
    url: absoluteUrl("/materials/quartzite")
  }
};

const faqs = [
  { question: "What should be checked before specifying quartzite?", answer: "Confirm the material name, current lot, thickness, finish, surface character, matching direction, application suitability, quantity, and destination before production." },
  { question: "Can quartzite be reviewed for countertops?", answer: "Quartzite can be considered for kitchen countertops, islands, hotel surfaces, and commercial applications case by case, with dimensions and fabrication details reviewed together." },
  { question: "Can buyers start with a material reference image?", answer: "Yes. Share a reference image with the application, preferred tone, rough dimensions, quantity, and destination so the team can begin a practical review." }
];

export default function QuartziteMaterialsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Quartzite materials"
      title="Quartzite material direction for project-led selection."
      description="Review quartzite character, application, finish, matching, and fabrication considerations with a project-focused stone supply team in Yunfu, China."
      image="/materials/hero/atelier-marble-luxury-hero.webp"
      imageAlt="Natural stone material reference for countertop, hotel, and commercial project review"
      bullets={[
        "Start with material character, preferred tone, application, and reference images",
        "Review thickness, finish, matching direction, cut-outs, and edge requirements",
        "Useful for countertops, islands, hotel surfaces, and commercial interiors",
        "Confirm current lot and project suitability before fabrication is approved"
      ]}
      details={["Quartzite kitchen countertops and islands", "Hotel and commercial surface packages", "Feature surfaces and cut-to-size components", "Finished edges, openings, and export packing coordination"]}
      specificationGroups={[
        {
          title: "Quartzite material properties & finishes",
          items: [
            "Physical standards: Mohs hardness ~7, bulk density 2.65 g/cm³ (ASTM C97), water absorption <0.15%, compressive strength >130 MPa (ASTM C170)",
            "Finishes available: Polished high-clarity reflection, honed satin matte, and tactile leathered surface textures",
            "Block lot selection, slab yield, 20mm and 30mm thickness options, and sample sign-off confirmed before cutting"
          ]
        },
        {
          title: "Countertop fabrication, single-piece & MOQ",
          items: [
            "One-piece custom slabs and small MOQ project packages accommodated with dedicated drawing review and CNC bridge cutting (±1mm tolerances)",
            "Bookmatched vein alignment, sink cut-outs, mitered edge aprons (40-50mm), and faucet templates coordinated as one scope",
            "Pre-shipment slab photos/videos, dry-lay inspection sign-off, and export-grade fumigated wooden crates with plastic wrap protection"
          ]
        }
      ]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying quartzite."
      relatedLink={{ label: "See countertop fabrication scope", href: "/countertops" }}
      purchaseInfo={{
        materialOptions: "Natural luxury quartzite (Mohs hardness ~7, bulk density 2.65 g/cm³, absorption <0.15%, compressive strength >130 MPa). Available in polished, honed, and leathered finishes. Confirm current lot, 20mm/30mm thickness, and matching.",
        customCapability: "One-piece custom tops and small MOQ orders supported. Coordinate slab vein direction, CNC cut-outs, ±1mm edge profiles, dry-lay inspection, and fumigated crate packing."
      }}
      additionalJsonLd={[quartziteProductJsonLd]}
      metadata={metadata}
    />
  );
}

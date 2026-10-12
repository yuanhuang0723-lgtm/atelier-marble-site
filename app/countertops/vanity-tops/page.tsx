import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";
import { vanityTopContentSections } from "./content-sections";
import VanityTopVisualOverview from "./visual-overview";

export const metadata: Metadata = {
  title: "Hotel Bathroom Countertops & Vanity Tops",
  description:
    "Custom hotel vanity tops and marble bathroom counters from Yunfu, China. Send drawings, basin cut-outs, and quantities for a project quotation.",
  alternates: { canonical: absoluteUrl("/countertops/vanity-tops") },
  openGraph: {
    title: "Hotel Bathroom Countertops & Vanity Tops",
    description:
      "Custom hotel vanity tops and marble bathroom counters from Yunfu, China. Send drawings, basin cut-outs, and quantities for a project quotation.",
    url: absoluteUrl("/countertops/vanity-tops"),
    siteName,
    images: [{ url: absoluteUrl("/assets/vanity-cabinet/cover.webp") }]
  }
};

export default function VanityTopsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Vanity tops"
      primaryCtaLabel="Request Hotel Vanity Pricing"
      title="Hotel vanity tops and marble bathroom countertops."
      description="Share drawings, basin cut-outs, room quantities, material references, and destination details to review custom vanity tops, cabinet panels, edges, finish, packing, and export coordination."
      image="/assets/vanity-cabinet/cover.webp"
      imageAlt="Illustrative bathroom interior with a marble vanity top and cabinet panels"
      bullets={[
        "Hotel bathroom countertops and repeatable vanity top quantities",
        "Basin cut-outs, splash details, and edge profiles reviewed together",
        "Material selection aligned with lighting, wall, and cabinet references",
        "Packing logic considered before the final quotation"
      ]}
      details={[
        "Hotel bathroom vanity top and countertop packages",
        "Residential bathroom counters",
        "Cabinet panels and stone cladding",
        "Custom basin and cut-out coordination"
      ]}
      relatedLinks={[
        { label: "120-room hotel vanity fabrication case", href: "/projects/hotel-vanity-tops-fabrication-case" },
        { label: "Drawing-led case reference", href: "/projects/canada-shower-niches-2025" },
        { label: "View redacted drawing-review example", href: "/factory#factory-evidence" }
      ]}
      visualOverview={
        <VanityTopVisualOverview
          contactHref="/contact?sourcePage=%2Fcountertops%2Fvanity-tops&projectType=Luxury%20Vanity%20Tops%20%26%20Cabinet%20Panels"
        />
      }
      contentSectionLayout="disclosure"
      contentSectionTitle="Project planning, when you need it."
      contentSections={vanityTopContentSections}
      specificationGroups={[
        {
          title: "Geometry and fabrication",
          items: [
            "Overall length, depth, thickness, units, room or type numbers, and drawing revision",
            "5-axis CNC waterjet basin cut-outs (undermount or drop-in) calibrated to ±1mm tolerance with eased & polished inner rim profile",
            "Pre-drilled faucet configurations (single-hole Ø35mm, 4″ or 8″ widespread), soap dispenser holes, and underside brass clip anchor inserts",
            "Mitered apron skirt drops (40mm to 100mm) for bracket concealment, matching 4″ (100mm) or full-height backsplashes, and loose side returns",
            "Support, cabinet opening, joints, reveals, and any site tolerance to be confirmed before fabrication"
          ]
        },
        {
          title: "Material and finish",
          items: [
            "Stone name or approved reference (Calacatta, Carrara, Statuario, Nero Marquina, Volakas, or Quartzite)",
            "Surface finish (polished >85 GU or honed), exposed edges, and visible face direction",
            "ASTM C97 density (~2.70 g/cm³) and water absorption (<0.20%) compliance with factory penetrating anti-stain sealer application",
            "Color and vein matching expectations across rooms, batches, and replacement pieces",
            "Sample approval, acceptable natural variation, care requirements, and application limitations"
          ]
        },
        {
          title: "Quantity and coordination",
          items: [
            "Room-type schedules (Standard King, Double Queen, Executive Suites, and ADA Accessible configurations)",
            "Mirrored bathroom layout management (left vs. right plumbing centers) tagged with distinct alphanumeric piece marks",
            "Room types, piece counts, labels, packing groups, spare pieces (3-5%), and installation sequence",
            "CAD, BOQ, marked-up photos, and destination details supplied with the inquiry",
            "Final quotation depends on confirmed scope, material direction, dimensions, and delivery requirements"
          ]
        },
        {
          title: "Inspection and export",
          items: [
            "100% factory pre-shipment dry-lay inspection for dimensional squareness, vein continuity, and gloss measurement",
            "Inspection points for dimensions, cut-outs, edges, finish, visible surfaces, and piece identification",
            "Protective packing in solid ISPM 15 fumigated wooden crates with high-density EPE foam dividers and corner edge protectors",
            "Floor-by-floor container loading and crate labeling aligned with the contractor's site hoist and distribution sequence",
            "Send the latest drawings and any packaging or labeling instructions with the request"
          ]
        }
      ]}
      faqs={[
        {
          question: "Can bathroom vanity tops be made from drawings?",
          answer:
            "Yes. Drawings, dimensions, quantities, basin positions, edge details, and finish direction give the team a practical basis for review and quotation."
        },
        {
          question: "What is included in a hotel vanity top package?",
          answer:
            "A package can be scoped around vanity tops, basin cut-outs, cabinet panels, splash details, edges, quantities, and export packing requirements."
        },
        {
          question: "Can you review material choices for a bathroom project?",
          answer:
            "Yes. Marble and other stone options can be reviewed against the bathroom lighting, wall, cabinet, finish, and intended application before fabrication."
        },
        {
          question: "How are undermount sink cutouts and faucet holes handled?",
          answer:
            "Basin cutouts are machined using 5-axis CNC waterjet cutting to a strict ±1mm tolerance based on the sink manufacturer's DXF/CAD template. Interior cutout rims are machine-eased and polished, and the underside is pre-drilled with brass anchor inserts for stainless steel mounting clips."
        },
        {
          question: "How is vein consistency managed across repeating hotel guestrooms?",
          answer:
            "For multi-room hospitality programs, slabs are allocated sequentially from the same quarry block to maintain uniform background coloration. Slabs undergo factory dry-lay staging and digital photo verification before final cutting."
        },
        {
          question: "Can we request physical stone samples before placing an order?",
          answer:
            "Yes. Stone sample swatches (typically 100×100mm or 150×150mm) and edge mock-ups can be prepared for design approval. Sample availability, custom preparation fees, quantities, and international express courier freight terms are confirmed with the project estimating team upon inquiry."
        }
      ]}
      purchaseInfo={{
        materialOptions:
          "Marble and other project-approved stone. Confirm current lot, thickness, finish, veining, and matching across rooms.",
        customCapability:
          "Coordinate room quantities, basin and faucet cut-outs, splash, edge profiles, cabinet fit, labels, and packing."
      }}
      metadata={metadata}
    />
  );
}

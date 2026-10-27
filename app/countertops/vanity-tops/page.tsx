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

const extendedVanityTopSections = [
  ...vanityTopContentSections,
  {
    heading: "Compare marble, granite, and quartzite for hotel vanity tops",
    summary: "Select hotel vanity top materials by water absorption, reinforcement needs, lot consistency, and physical sample approvals.",
    paragraphs: [
      "When specifying materials for hotel bathroom countertops, project teams should evaluate stone properties against daily guestroom use. Marble offers distinct veining for luxury guest suites, but its absorption rate requires appropriate penetrating sealer treatment confirmed by lot testing. Granite provides lower absorption and high scratch resistance suited for high-turnover guestrooms, while quartzite delivers dense structural performance with elegant aesthetic patterns. Because stone porosity varies between quarry blocks, technical data sheets and sealer compatibility must be verified against current lot reserves before finalizing orders.",
      "Fabrication requirements also differ across hotel countertops depending on the chosen slab type. Natural fissures in marble may require fiberglass mesh backing or concealed steel rod reinforcement beneath undermount sink cutouts to prevent transit cracking during container shipping. For large-scale hospitality packages, natural shade variation across hundreds of guest bathrooms must be controlled through dry-lay photo inspections and approved reference range samples. Establishing physical sample approvals and defect boundaries early ensures that repeat vanity tops maintain visual harmony across room tiers without delaying scheduled production release."
    ]
  }
];

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
        { label: "Hotel vanity top drawing and component review", href: "/projects/hotel-vanity-tops-fabrication-case" },
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
      contentSections={extendedVanityTopSections}
      specificationGroups={[{ title: "Geometry and fabrication", items: ["Overall length, depth, thickness, units, room or type numbers, and drawing revision", "Basin model or template, basin cut-out, faucet holes, splash, upstand, edge profile, and corners", "Support, cabinet opening, joints, reveals, and any site tolerance to be confirmed before fabrication"] }, { title: "Material and finish", items: ["Stone name or approved reference, surface finish, exposed edges, and visible face direction", "Color and vein matching expectations across rooms, batches, and replacement pieces", "Sample approval, acceptable natural variation, care requirements, and application limitations"] }, { title: "Quantity and coordination", items: ["Room types, piece counts, labels, packing groups, spare pieces, and installation sequence", "CAD, BOQ, marked-up photos, and destination details supplied with the inquiry", "Final quotation depends on confirmed scope, material direction, dimensions, and delivery requirements"] }, { title: "Inspection and export", items: ["Inspection points for dimensions, cut-outs, edges, finish, visible surfaces, and piece identification", "Protective packing, crate grouping, loading information, and delivery term confirmed before shipment", "Send the latest drawings and any packaging or labeling instructions with the request"] }]}
      faqs={[
        { question: "Can bathroom vanity tops be made from drawings?", answer: "Yes. Drawings, dimensions, quantities, basin positions, edge details, and finish direction give the team a practical basis for review and quotation." },
        { question: "What is included in a hotel vanity top package?", answer: "A package can be scoped around vanity tops, basin cut-outs, cabinet panels, splash details, edges, quantities, and export packing requirements." },
        { question: "Can you review material choices for a bathroom project?", answer: "Yes. Marble and other stone options can be reviewed against the bathroom lighting, wall, cabinet, finish, and intended application before fabrication." },
        { question: "How are hotel bathroom countertops counted by room type?", answer: "Share a room schedule grouping piece marks by guestroom type, standard rooms, accessible suites, and mirrored layouts. Separate typical tops from exceptions so quantities match the architectural plan and BOQ." },
        { question: "What thickness is common for hotel countertops?", answer: "Common slab thicknesses include 20mm and 30mm, or laminated mitered edges for build-up profiles, but dimensions must be confirmed against project design drawings, cabinet frames, and material characteristics rather than assumed as a universal standard." }
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

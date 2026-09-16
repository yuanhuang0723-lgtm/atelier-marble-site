import type { Metadata } from "next";
import CommercialLandingPage from "../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../lib/seo";
import { getAssets } from "../../lib/assets";

export const metadata: Metadata = {
  title: "Custom Stone Fabrication & Cut-to-Size Stone",
  description: "Custom stone fabrication and cut-to-size work from Yunfu, China for countertops, architectural parts, furniture, and sculptural projects. Send drawings and dimensions for review.",
  alternates: { canonical: absoluteUrl("/custom-stone-fabrication-china") },
  openGraph: {
    title: "Custom Stone Fabrication & Cut-to-Size Stone",
    description: "Review drawings, dimensions, material direction, finishing, inspection, and export packing before requesting custom stone fabrication.",
    url: absoluteUrl("/custom-stone-fabrication-china"),
    siteName,
    images: [{ url: absoluteUrl("/assets/carving-decor/cover.webp") }]
  }
};

export default function CustomStoneFabricationPage() {
  const referenceImages = getAssets("carving-decor", 2).concat(getAssets("coffee-table", 2)).map((asset) => ({ src: asset.src, alt: asset.alt, title: asset.title }));
  return (
    <CommercialLandingPage
      eyebrow="Custom stone fabrication"
      title="Custom stone fabrication and cut-to-size work for project buyers."
      description="Review a practical fabrication path for countertops, architectural parts, furniture, and sculptural stone from drawings, BOQ files, dimensions, or reference images."
      image="/assets/carving-decor/cover.webp"
      imageAlt="Carved stone sculpture displayed in a contemporary interior"
      referenceImages={referenceImages}
      bullets={[
        "Start with drawings, BOQ files, dimensions, quantities, or reference imagery",
        "Coordinate cutting, openings, edges, joints, visible faces, and surface finish",
        "Keep piece labels, revisions, batches, inspection, and packing in one scope",
        "Confirm material direction and project requirements before pricing"
      ]}
      details={[
        "Custom stone countertops and cut-to-size components",
        "Architectural wall, floor, and feature elements",
        "Stone furniture, tables, and sculptural forms",
        "Project fabrication with export preparation"
      ]}
      specificationGroups={[
        { title: "Scope and documents", items: ["Application, drawing or BOQ reference, dimensions, units, quantities, and drawing revision", "Material reference, visible face, surface finish, edge profile, openings, joints, and support conditions", "Destination market, required timing, packing expectations, and quotation format"] },
        { title: "Fabrication details", items: ["Cut-to-size dimensions and tolerances to be confirmed against the project drawings", "Basin, faucet, service, fixing, or other openings marked with the correct template", "Piece numbers, room or area grouping, batch information, and replacement requirements"] },
        { title: "Review and approval", items: ["Confirm material availability, natural variation, sample or lot approval, and finish direction", "Review dimensions, edges, openings, visible surfaces, labels, and quantities before packing", "Keep open decisions visible rather than treating an estimate as a production approval"] },
        { title: "Export preparation", items: ["Confirm protective packing, grouping, labels, loading requirements, and destination", "Share the latest approved documents with the inquiry", "Final pricing depends on confirmed scope, material, dimensions, quantity, and delivery requirements"] }
      ]}
      relatedLink={{ label: "Review the buyer workflow", href: "/how-we-work" }}
      faqTitle="Custom fabrication details, answered clearly."
      faqs={[
        { question: "What can be made from drawings or a BOQ?", answer: "The review can cover cut-to-size countertops, architectural stone parts, furniture, tables, sculptural forms, and other components when the scope and dimensions are clear." },
        { question: "What does cut-to-size stone fabrication require?", answer: "A practical review usually needs dimensions, units, quantities, material direction, finish, edges, openings, drawings or marked-up references, and the destination." },
        { question: "Are tolerances and lead times fixed?", answer: "They depend on the confirmed material, component, drawing, quantity, production path, and delivery requirements. They should be agreed in the project quotation rather than assumed." }
      ]}
      metadata={metadata}
    />
  );
}

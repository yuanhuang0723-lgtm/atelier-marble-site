import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Architectural Stone Wall Cladding from China",
  description:
    "Architectural stone wall cladding from Yunfu, China for hotel lobbies, commercial interiors, and feature walls. Review material, layout, fabrication, and packing.",
  alternates: { canonical: absoluteUrl("/architectural-stone/wall-cladding") },
  openGraph: {
    title: "Architectural Stone Wall Cladding from China",
    description:
      "Coordinate wall cladding material, panel layout, fabrication details, inspection, and export packing for architectural projects.",
    url: absoluteUrl("/architectural-stone/wall-cladding"),
    siteName,
    images: [{ url: absoluteUrl("/materials/categories/hotel-projects.webp") }]
  }
};

const faqs = [
  { question: "What information helps review wall cladding?", answer: "Share elevations or drawings, panel dimensions, approximate quantity, material direction, finish, installation context, destination, and packing requirements." },
  { question: "Can panel layouts be reviewed before pricing?", answer: "Yes. A drawing-led review can clarify repeatable panels, joins, openings, edges, and the practical fabrication scope before quotation." },
  { question: "Is wall cladding suitable for hotel projects?", answer: "Hotel lobbies, reception areas, corridors, and other feature surfaces can be reviewed case by case with material, fabrication, quality, and export coordination considered together." }
];

export default function ArchitecturalWallCladdingPage() {
  return (
    <CommercialLandingPage
      eyebrow="Wall cladding"
      title="Architectural stone wall cladding reviewed from the drawing outward."
      description="Coordinate material character, panel layout, openings, edges, finish, inspection, and export packing for hotel and commercial feature walls."
      image="/materials/categories/hotel-projects.webp"
      imageAlt="Architectural stone wall cladding reference for a hotel or commercial interior"
      bullets={[
        "Review elevations, panel dimensions, repeat units, openings, and joins",
        "Match material direction and finish to the intended interior application",
        "Coordinate cut-to-size fabrication and practical inspection points",
        "Consider protective packing and export preparation with the stone scope"
      ]}
      details={["Hotel lobby and reception feature walls", "Commercial interior wall panels", "Stone cladding around openings and architectural details", "Drawing-led cut-to-size panels with export coordination"]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying wall cladding."
      relatedLink={{ label: "Review commercial stone projects", href: "/projects/commercial-stone" }}
      metadata={metadata}
    />
  );
}

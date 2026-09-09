import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Architectural Stone Flooring from China",
  description:
    "Architectural stone flooring from Yunfu, China for hotels, commercial interiors, and public spaces. Review layout, finish, fabrication, and export packing.",
  alternates: { canonical: absoluteUrl("/architectural-stone/flooring") },
  openGraph: {
    title: "Architectural Stone Flooring from China",
    description:
      "Coordinate stone flooring material, layout, finish, cut-to-size fabrication, inspection, and export packing for architectural projects.",
    url: absoluteUrl("/architectural-stone/flooring"),
    siteName,
    images: [{ url: absoluteUrl("/materials/categories/hotel-projects.webp") }]
  }
};

const faqs = [
  { question: "What should I send for a stone flooring review?", answer: "Share the floor plan or drawings, approximate area, module dimensions, material direction, finish, destination, and any transition or edge details that affect the scope." },
  { question: "Can repeatable flooring modules be coordinated?", answer: "A drawing-led review can clarify module sizes, cut lists, layout direction, openings, and the fabrication details needed before a quotation is prepared." },
  { question: "Which projects can be considered?", answer: "Hotel corridors, lobbies, reception areas, commercial interiors, and other architectural applications can be reviewed case by case with material and delivery requirements confirmed first." }
];

export default function ArchitecturalFlooringPage() {
  return (
    <CommercialLandingPage
      eyebrow="Architectural flooring"
      title="Stone flooring coordinated around the layout and the project."
      description="Review material character, module layout, dimensions, finish, cut-to-size details, inspection, and export packing for hotel and commercial flooring scopes."
      image="/materials/categories/hotel-projects.webp"
      imageAlt="Architectural stone flooring reference for a hotel or commercial interior"
      bullets={[
        "Review floor plans, module dimensions, repeat units, transitions, and openings",
        "Match material direction and finish to the intended interior application",
        "Coordinate cut lists and practical fabrication checkpoints before pricing",
        "Consider protective packing and export preparation with the finished scope"
      ]}
      details={["Hotel lobby and reception flooring", "Commercial interior stone floors", "Corridors and repeatable module programs", "Cut-to-size flooring with layout and packing coordination"]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying stone flooring."
      relatedLink={{ label: "Review wall cladding applications", href: "/architectural-stone/wall-cladding" }}
      metadata={metadata}
    />
  );
}

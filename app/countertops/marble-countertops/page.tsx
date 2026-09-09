import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Marble Countertops from China for Project Buyers",
  description:
    "Custom marble countertops from Yunfu, China for kitchens, hotels, villas, and commercial interiors. Review slabs, cut-outs, edges, finish, and packing.",
  alternates: { canonical: absoluteUrl("/countertops/marble-countertops") },
  openGraph: {
    title: "Marble Countertops from China for Project Buyers",
    description:
      "Review marble countertop material direction, dimensions, cut-outs, edges, finish, and export packing before quotation.",
    url: absoluteUrl("/countertops/marble-countertops"),
    siteName,
    images: [{ url: absoluteUrl("/materials/featured-covers/kitchen-countertop.webp") }]
  }
};

const faqs = [
  { question: "What should I send for a marble countertop review?", answer: "Share the application, approximate dimensions, quantity, edge direction, cut-outs, finish, destination, and any drawings or reference images you already have." },
  { question: "Can the marble be confirmed before fabrication?", answer: "Material name, current availability, thickness, finish, matching, and application suitability should be confirmed against the project brief before production." },
  { question: "Are marble countertops suitable for hotel projects?", answer: "They can be reviewed for hotel bathrooms, kitchens, public areas, and other project applications case by case, with fabrication and packing details coordinated with the scope." }
];

export default function MarbleCountertopsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Marble countertops"
      title="Marble countertops planned around your project details."
      description="Review marble character, dimensions, cut-outs, edge profiles, finish, and packing requirements with a project-focused stone fabrication team in Yunfu, China."
      image="/materials/featured-covers/kitchen-countertop.webp"
      imageAlt="Marble countertop reference prepared for a kitchen, hotel, or commercial project"
      bullets={[
        "Material direction reviewed alongside application, dimensions, and finish",
        "Cut-outs, edge profiles, backsplashes, and repeat units kept in one scope",
        "Useful for kitchens, hotel bathrooms, villas, and commercial interiors",
        "Export packing requirements considered before the quotation path is finalized"
      ]}
      details={["Marble kitchen countertops and islands", "Hotel bathroom and vanity packages", "Commercial counters and public-area surfaces", "Cut-to-size components with finished edges and openings"]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying marble."
      relatedLink={{ label: "Explore integrated stone sinks", href: "/countertops/integrated-stone-sinks" }}
      metadata={metadata}
    />
  );
}

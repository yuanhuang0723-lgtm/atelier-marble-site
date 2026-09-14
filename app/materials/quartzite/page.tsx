import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Quartzite Countertop Fabrication & Supply",
  description:
    "Quartzite countertop fabrication and project supply from China. Confirm lot, thickness, finish, matching, cut-outs, and fabrication suitability before quotation.",
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
      specificationGroups={[{ title: "Quartzite material", items: ["Material name or reference image, current lot, slab dimensions, thickness, and available quantity", "Surface finish, exposed edges, visible face direction, and matching expectation", "Sample approval and acceptable natural variation recorded before fabrication"] }, { title: "Countertop fabrication", items: ["Sink and faucet templates, cut-outs, edge profiles, joints, support, and overhang", "Drawing or BOQ revision, piece labels, room or area grouping, and quantities", "Destination, packing requirements, and delivery timing supplied for quotation review"] }]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying quartzite."
      relatedLink={{ label: "See countertop fabrication scope", href: "/countertops" }}
      metadata={metadata}
    />
  );
}

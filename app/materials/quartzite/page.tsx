import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Quartzite Materials for Countertops and Projects in China",
  description:
    "Review quartzite material direction for countertops, hotel interiors, and commercial projects from China. Confirm lot, thickness, finish, matching, and fabrication suitability.",
  alternates: { canonical: absoluteUrl("/materials/quartzite") },
  openGraph: {
    title: "Quartzite Materials for Countertops and Projects in China",
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
      imageAlt="Quartzite material surface reference for countertop, hotel, and commercial projects"
      bullets={[
        "Start with material character, preferred tone, application, and reference images",
        "Review thickness, finish, matching direction, cut-outs, and edge requirements",
        "Useful for countertops, islands, hotel surfaces, and commercial interiors",
        "Confirm current lot and project suitability before fabrication is approved"
      ]}
      details={["Quartzite kitchen countertops and islands", "Hotel and commercial surface packages", "Feature surfaces and cut-to-size components", "Finished edges, openings, and export packing coordination"]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying quartzite."
      relatedLink={{ label: "Review all material references", href: "/materials" }}
      metadata={metadata}
    />
  );
}

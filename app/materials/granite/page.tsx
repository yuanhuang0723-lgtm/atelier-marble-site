import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Granite Materials for Commercial Projects",
  description:
    "Review granite material direction for countertops, hotel interiors, and commercial projects from China. Confirm lot, thickness, finish, matching, and fabrication suitability.",
  alternates: { canonical: absoluteUrl("/materials/granite") },
  openGraph: {
    title: "Granite Materials for Commercial Projects",
    description:
      "Review granite character, application, finish, matching, and fabrication considerations before requesting a project quotation.",
    url: absoluteUrl("/materials/granite"),
    siteName,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp") }]
  }
};

const faqs = [
  { question: "What granite information should be confirmed?", answer: "Confirm the material name, current lot, thickness, finish, surface character, matching direction, application suitability, quantity, and destination before production." },
  { question: "Can granite be reviewed for commercial countertops?", answer: "Granite can be considered for countertops, islands, hotel surfaces, and commercial applications case by case, with dimensions and fabrication details reviewed together." },
  { question: "Can a granite project start with rough dimensions?", answer: "Yes. Rough dimensions, application, approximate quantity, preferred tone, destination, and reference images can begin a practical material and fabrication review." }
];

export default function GraniteMaterialsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Granite materials"
      title="Granite material direction for commercial project review."
      description="Review granite character, application, finish, matching, and fabrication considerations with a project-focused stone supply team in Yunfu, China."
      image="/materials/hero/atelier-marble-luxury-hero.webp"
      imageAlt="Granite material surface reference for commercial, hotel, and countertop projects"
      bullets={[
        "Start with material character, preferred tone, application, and reference images",
        "Review thickness, finish, matching direction, cut-outs, and edge requirements",
        "Useful for countertops, islands, hotel surfaces, and commercial interiors",
        "Confirm current lot and project suitability before fabrication is approved"
      ]}
      details={["Granite kitchen countertops and islands", "Hotel and commercial surface packages", "Public-area counters and feature surfaces", "Cut-to-size components with finished edges and openings"]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying granite."
      relatedLink={{ label: "See commercial countertop scope", href: "/countertops" }}
      metadata={metadata}
    />
  );
}

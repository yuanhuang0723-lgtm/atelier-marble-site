import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Marble Materials for Projects in China",
  description:
    "Review marble material direction for hotel, commercial, countertop, vanity, and custom stone projects from China. Confirm lot, thickness, finish, and matching before production.",
  alternates: { canonical: absoluteUrl("/materials/marble") },
  openGraph: {
    title: "Marble Materials for Projects in China",
    description:
      "Review marble character, application, finish, matching, and fabrication considerations before requesting a project quotation.",
    url: absoluteUrl("/materials/marble"),
    siteName,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp") }]
  }
};

const faqs = [
  { question: "What marble information should be confirmed?", answer: "Confirm the material name, current lot, thickness, finish, surface character, matching direction, application suitability, quantity, and destination before production." },
  { question: "Can marble be reviewed for countertops and vanities?", answer: "Marble can be considered for countertops, vanity tops, hotel bathrooms, commercial interiors, and custom components case by case, with dimensions and fabrication details reviewed together." },
  { question: "Can I send a reference image first?", answer: "Yes. A reference image, rough dimensions, application, preferred tone, and approximate quantity can begin a practical material and fabrication review." }
];

export default function MarbleMaterialsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Marble materials"
      title="Marble material direction for considered project decisions."
      description="Review marble character, application, finish, matching, and fabrication considerations with a project-focused stone supply team in Yunfu, China."
      image="/materials/hero/atelier-marble-luxury-hero.webp"
      imageAlt="Marble material surface reference for hotel, commercial, and interior projects"
      bullets={[
        "Start with material character, preferred tone, application, and reference images",
        "Review thickness, finish, matching direction, cut-outs, and edge requirements",
        "Suitable for countertops, vanity tops, hotel interiors, and custom components",
        "Confirm current lot and project suitability before fabrication is approved"
      ]}
      details={["Marble countertops and islands", "Hotel vanity tops and bathroom packages", "Commercial interior wall and floor applications", "Custom cut-to-size stone components"]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying marble."
      relatedLink={{ label: "See marble countertop applications", href: "/countertops/marble-countertops" }}
      metadata={metadata}
    />
  );
}

import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Quartzite Countertop Fabrication from China",
  description:
    "Quartzite countertops from China. Confirm current lot, thickness, finish, slab matching, and cut-outs for your fabrication project before requesting a quote.",
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
  { question: "Is natural quartzite the same as engineered quartz?", answer: "No. Quartzite is natural stone; engineered quartz is manufactured from quartz particles with resin and pigments. Similar trade names do not establish material identity. Confirm the selected material, slab lot, finish, and application requirements before approving countertop fabrication." },
  { question: "Can buyers start with a material reference image?", answer: "Yes. Share a reference image with the application, preferred tone, rough dimensions, quantity, and destination so the team can begin a practical review." }
];

export default function QuartziteMaterialsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Quartzite materials"
      heroCtaLabel="Send a Project Inquiry"
      primaryCtaLabel="Send a Project Inquiry"
      title="Quartzite countertops cut to your project drawings."
      description="Review natural quartzite for kitchen countertops, islands, and project surfaces. Coordinate slab selection, dimensions, edges, cut-outs, and export packing with our team in Yunfu, China."
      overviewHeading="Specify the quartzite lot and countertop details together."
      overviewDescription="Our own processing and partner coordination support your project scope. Send a short brief to begin; drawings and material references can follow. Confirm the actual slab lot and suitability before agreeing the fabrication scope."
      image="/materials/hero/atelier-marble-luxury-hero.webp"
      imageAlt="Natural stone material reference for countertop, hotel, and commercial project review"
      imageCaption="Design reference only. Confirm the quartzite identity, appearance, and availability against the selected slab lot."
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
      relatedLinks={[
        { label: "Review custom stone fabrication", href: "/custom-stone-fabrication-china" },
        { label: "View workshop and packing references", href: "/factory#factory-evidence" },
        { label: "Natural quartzite and engineered quartz: material guidance", href: "https://usenaturalstone.org/natural-quartzite-and-engineered-quartz-whats-the-difference/" }
      ]}
      purchaseInfo={{ materialOptions: "Natural quartzite. Confirm the current lot, thickness, finish, surface character, and fabrication suitability.", customCapability: "Coordinate slab direction, countertop dimensions, edges, cut-outs, and matching expectations." }}

      metadata={metadata}
    />
  );
}

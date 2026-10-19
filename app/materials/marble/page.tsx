import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Cut-to-Size Marble Slabs & Fabrication",
  description:
    "Cut-to-size marble slabs and custom fabrication from Yunfu, China. Calacatta, Carrara, and Statuario with lot review, edge work, and export crating.",
  alternates: { canonical: absoluteUrl("/materials/marble") },
  openGraph: {
    title: "Cut-to-Size Marble Slabs & Fabrication",
    description:
      "Cut-to-size marble slabs and custom fabrication from Yunfu, China. Calacatta, Carrara, and Statuario with lot review, edge work, and export crating.",
    url: absoluteUrl("/materials/marble"),
    siteName,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp") }]
  }
};

const faqs = [
  { question: "What information is needed for cut-to-size marble fabrication?", answer: "Confirm the marble variety (Calacatta, Carrara, Statuario, etc.), current lot, required thickness, surface finish, edge details, cutouts, matching direction, quantities, and destination before production begins." },
  { question: "Can cut-to-size marble be specified for countertops and vanities?", answer: "Yes. Cut-to-size marble is widely fabricated for kitchen countertops, hotel bathroom vanity tops, wall cladding, and custom architectural features with CAD shop drawings and dry-lay vein matching." },
  { question: "Can I send reference drawings or sketches first?", answer: "Yes. An architectural CAD drawing, BOQ schedule, rough sketch, or reference photo can begin a practical cut-to-size marble review and quotation." }
];

export default function MarbleMaterialsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Cut-to-size marble"
      title="Cut-to-size marble slabs and custom fabrication for project decisions."
      description="Review cut-to-size marble character, application suitability, surface finishes, vein matching, and fabrication details with a project-focused stone supply team in Yunfu, China."
      image="/materials/hero/atelier-marble-luxury-hero.webp"
      imageAlt="Cut-to-size marble slabs, tiles, and custom architectural components for commercial and luxury residential projects"
      bullets={[
        "Start with material character, preferred tone, application, and reference images",
        "Review thickness, finish, matching direction, cut-outs, and edge requirements",
        "Suitable for countertops, vanity tops, hotel interiors, and custom components",
        "Confirm current lot and project suitability before fabrication is approved"
      ]}
      details={["Cut-to-size marble countertops and islands", "Hotel vanity tops and bathroom packages", "Commercial interior wall cladding and flooring", "Custom cut-to-size marble components"]}
      specificationGroups={[{ title: "Material review", items: ["Stone name or reference image, current lot, slab or piece dimensions, thickness, and available quantity", "Surface finish, exposed edges, face direction, bookmatch or vein-matching expectation", "Natural variation, fissures, repairs, shade range, and sample approval requirements"] }, { title: "Application fit", items: ["Countertop, vanity, wall, floor, or custom component application", "Cut-outs, edge profiles, joints, support, and installation constraints", "Maintenance expectations and any project-specific performance requirements"] }]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying marble."
      relatedLink={{ label: "See marble countertop applications", href: "/countertops/marble-countertops" }}
      relatedLinks={[
        { label: "Browse full natural stone materials catalog", href: "/materials" },
        { label: "Review marble countertop fabrication & cutouts", href: "/countertops/marble-countertops" },
        { label: "Explore quartzite slabs for high-durability projects", href: "/materials/quartzite" },
        { label: "Review granite materials for commercial applications", href: "/materials/granite" },
        { label: "Review luxury hotel vanity top materials & packages", href: "/countertops/vanity-tops" },
        { label: "Review custom cut-to-size stone fabrication", href: "/custom-stone-fabrication-china" }
      ]}
      purchaseInfo={{ materialOptions: "Natural marble. Confirm the current lot, thickness, finish, veining, and matching across pieces before approval.", customCapability: "Review marble suitability for countertops, vanities, lobby surfaces, and repeat project components." }}

      metadata={metadata}
    />
  );
}

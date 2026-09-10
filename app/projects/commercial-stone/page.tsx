import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Commercial Stone Fabrication in China",
  description: "Commercial stone fabrication and project supply in China for hospitality, retail, office, and public interiors, with repeatable details and export coordination.",
  alternates: { canonical: absoluteUrl("/projects/commercial-stone") },
  openGraph: { title: "Commercial Stone Fabrication in China", description: "Commercial stone fabrication and project supply in China for hospitality, retail, office, and public interiors, with repeatable details and export coordination.", url: absoluteUrl("/projects/commercial-stone"), siteName, images: [{ url: absoluteUrl("/materials/categories/hotel-projects.webp") }] }
};

export default function CommercialStonePage() {
  return <CommercialLandingPage eyebrow="Commercial stone projects" title="Commercial stone fabrication for interior projects." description="Keep material selection, repeatable components, fabrication review, quality checks, and export preparation connected across a commercial scope." image="/materials/categories/hotel-projects.webp" imageAlt="Commercial interior stone reference for hospitality and public space projects" bullets={["Useful for hospitality, retail, office, and public interior scopes", "Review quantities and repeatable details before quotation", "Coordinate countertops, vanity tops, wall applications, and custom elements", "Use CAD, BOQ, dimensions, or reference images to begin the review"]} details={["Hospitality and hotel interiors", "Retail and showroom stone packages", "Office and public-area surfaces", "Commercial countertops and custom details"]} relatedLink={{ label: "Review the export buyer workflow", href: "/how-we-work" }} faqTitle="Commercial stone project details, answered clearly." faqs={[{ question: "What commercial stone scopes can be reviewed?", answer: "Commercial scopes can include hospitality, retail, office, showroom, public-area, countertop, wall, flooring, and custom interior stone packages." }, { question: "Can repeatable commercial components be priced from a BOQ?", answer: "Yes. A BOQ, drawings, quantities, dimensions, material direction, and destination details help establish a practical review for repeatable components." }, { question: "What should be confirmed before commercial stone production?", answer: "Confirm material, thickness, finish, dimensions, repeat-unit details, quantities, quality checkpoints, packing requirements, and delivery information before production planning." }]} metadata={metadata} />;
}

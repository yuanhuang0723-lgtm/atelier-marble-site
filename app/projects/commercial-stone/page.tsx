import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Commercial Stone Fabrication & Project Supply",
  description: "Commercial stone fabrication and project supply for hospitality, retail, office, and public interior projects from Yunfu, China.",
  alternates: { canonical: absoluteUrl("/projects/commercial-stone") }
};

export default function CommercialStonePage() {
  return <CommercialLandingPage eyebrow="Commercial stone projects" title="Coordinated stone supply for commercial interiors." description="Keep material selection, repeatable components, fabrication review, quality checks, and export preparation connected across a commercial scope." image="/materials/categories/hotel-projects.png" imageAlt="Commercial interior stone reference for hospitality and public space projects" bullets={["Useful for hospitality, retail, office, and public interior scopes", "Review quantities and repeatable details before quotation", "Coordinate countertops, vanity tops, wall applications, and custom elements", "Use CAD, BOQ, dimensions, or reference images to begin the review"]} details={["Hospitality and hotel interiors", "Retail and showroom stone packages", "Office and public-area surfaces", "Commercial countertops and custom details"]} metadata={metadata} />;
}

import type { Metadata } from "next";
import AdsLandingPage from "../../components/AdsLandingPage";
import { getAssets } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Hotel Stone Fabrication Supplier",
  description:
    "Hotel stone fabrication supplier for marble interiors, lobby flooring, wall cladding, and commercial stone projects.",
  alternates: { canonical: absoluteUrl("/hotel-projects") },
  openGraph: {
    title: "Hotel Stone Fabrication Supplier",
    description:
      "Luxury hotel marble interior supplier for commercial stone projects, hospitality interiors, and architectural spaces.",
    url: absoluteUrl("/hotel-projects"),
    siteName,
    images: [{ url: absoluteUrl("/materials/categories/hotel-projects.png"), width: 1536, height: 1024 }]
  }
};

export default function HotelProjectsPage() {
  const hotelImages = [...getAssets("hotel-project", 2), ...getAssets("projects", 4), ...getAssets("factory", 2)];

  return (
    <AdsLandingPage
      eyebrow="Hotel stone fabrication supplier"
      title="Luxury Hotel Stone Project Partner"
      description="Atelier Marble supports hotel marble interiors, commercial stone project supply, lobby stone surfaces, and export fabrication for hospitality buyers."
      heroImage="/materials/categories/hotel-projects.png"
      heroAlt="hotel lobby stone flooring design project with marble wall cladding"
      keywords={[
        "hotel marble interior supplier",
        "luxury hotel stone contractor",
        "commercial stone project supplier",
        "hotel stone fabrication supplier"
      ]}
      proofTitle="Stone support for hospitality and commercial interiors."
      proofCopy="Use this page for hotel, resort, lobby, and commercial interior inquiries where stone selection, fabrication accuracy, and export coordination matter."
      gallery={hotelImages}
      projectType="Hotel & Hospitality Projects"
      sourcePath="/hotel-projects"
    />
  );
}

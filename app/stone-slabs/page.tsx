import type { Metadata } from "next";
import AdsLandingPage from "../../components/AdsLandingPage";
import { getAssets } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

const materialImages = getAssets("materials");
const heroImage = materialImages[0]?.src || "/materials/hero/atelier-marble-luxury-hero.png";
const heroAlt = materialImages[0]?.alt || "premium natural stone slab material selection for architectural projects";

export const metadata: Metadata = {
  title: "Stone Slab Supplier China",
  description:
    "Stone slab supplier China for marble material selection, project specification, custom fabrication, and export supply.",
  alternates: { canonical: absoluteUrl("/stone-slabs") },
  openGraph: {
    title: "Stone Slab Supplier China",
    description:
      "Premium marble slab and natural stone material support for international architects, designers, and importers.",
    url: absoluteUrl("/stone-slabs"),
    siteName,
    images: [{ url: absoluteUrl(heroImage), width: 1400, height: 1000 }]
  }
};

export default function StoneSlabsPage() {
  return (
    <AdsLandingPage
      eyebrow="Stone slab supplier China"
      title="Premium Natural Stone Slab Supplier"
      description="Atelier Marble supports marble slab selection, material matching, and export-ready stone supply for designers, contractors, importers, and architectural project buyers."
      heroImage={heroImage}
      heroAlt={heroAlt}
      keywords={[
        "stone slab supplier China",
        "luxury stone supplier China",
        "bespoke natural stone manufacturer",
        "architectural stone design studio China"
      ]}
      proofTitle="Material selection before fabrication."
      proofCopy="Use this page when comparing marble slabs, reviewing tone and veining, or preparing a project specification before countertop, hotel, furniture, or architectural fabrication."
      gallery={materialImages}
      projectType="Stone Slab Material Selection"
      sourcePath="/stone-slabs"
    />
  );
}

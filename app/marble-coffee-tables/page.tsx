import type { Metadata } from "next";
import AdsLandingPage from "../../components/AdsLandingPage";
import { getAssets } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

const coffeeTableAssets = getAssets("coffee-table");

export const metadata: Metadata = {
  title: "Custom Marble Coffee Tables & Stone Furniture",
  description: "Custom marble coffee tables, side tables, console pieces, and furniture-grade stone fabrication for hospitality and residential interiors.",
  alternates: { canonical: absoluteUrl("/marble-coffee-tables") },
  openGraph: {
    title: "Custom Marble Coffee Tables & Stone Furniture",
    description: "Custom marble coffee tables, side tables, console pieces, and furniture-grade stone fabrication for hospitality and residential interiors.",
    url: absoluteUrl("/marble-coffee-tables"),
    siteName,
    images: [{ url: absoluteUrl("/assets/stone-table-coffee/hero.png"), width: 1536, height: 1024 }]
  }
};

export default function MarbleCoffeeTablesPage() {
  return (
    <AdsLandingPage
      eyebrow="Custom stone furniture"
      title="Custom Marble Coffee Tables & Stone Furniture"
      description="Atelier Marble develops furniture-grade stone tables and custom tabletop forms for hospitality lounges, residential interiors, showrooms, and export projects."
      heroImage="/assets/stone-table-coffee/hero.png"
      heroAlt="Custom marble coffee table and stone furniture reference for an interior project"
      keywords={["custom marble coffee tables", "stone furniture manufacturer", "marble side table supplier", "custom stone tabletop"]}
      proofTitle="Furniture-grade stone with a clear fabrication brief."
      proofCopy="Share the intended dimensions, stone direction, edge profile, quantity, and destination so the table scope can be reviewed before pricing."
      gallery={coffeeTableAssets}
      projectType="Stone Table & Coffee Table"
      sourcePath="/marble-coffee-tables"
      galleryImageFit="cover"
    />
  );
}

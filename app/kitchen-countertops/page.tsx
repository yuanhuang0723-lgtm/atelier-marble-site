import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import AdsLandingPage from "../../components/AdsLandingPage";
import type { Asset } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

const LOCAL_ASSET_DIR = path.join(process.cwd(), "public", "assets", "kitchen-countertops", "local");

function getKitchenCountertopAssets(): Asset[] {
  if (!fs.existsSync(LOCAL_ASSET_DIR)) {
    return [];
  }

  return fs
    .readdirSync(LOCAL_ASSET_DIR)
    .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file, index) => ({
      category: "kitchen-countertop",
      filename: file,
      label: `Countertop Reference ${String(index + 1).padStart(2, "0")}`,
      title: `Countertop Reference ${String(index + 1).padStart(2, "0")}`,
      src: `/assets/kitchen-countertops/local/${encodeURIComponent(file)}`,
      alt: "natural stone countertop and coffee table reference",
      categoryLabel: "STONE COUNTERTOP & COFFEE TABLE",
      description:
        "Real local stone countertop and coffee table reference showing natural veining, table shapes, and finished fabrication quality."
    }));
}

export const metadata: Metadata = {
  title: "Stone Countertop & Coffee Table",
  description:
    "Natural stone countertop and coffee table references with real local fabrication images for residential, hospitality, and commercial projects.",
  alternates: { canonical: absoluteUrl("/kitchen-countertops") },
  openGraph: {
    title: "Stone Countertop & Coffee Table",
    description:
      "Real local stone countertop and coffee table references with export-ready fabrication details and finished surface quality.",
    url: absoluteUrl("/kitchen-countertops"),
    siteName,
    images: [
      {
        url: absoluteUrl("/assets/kitchen-countertops/hero/countertop-hero.png"),
        width: 1680,
        height: 945
      }
    ]
  }
};

export default function KitchenCountertopsPage() {
  return (
    <AdsLandingPage
      eyebrow="Stone countertop & coffee table reference"
      title="Stone Countertop & Coffee Table"
      description="Atelier Marble presents real stone countertop and coffee table references for residential, hospitality, and commercial sourcing with export-ready fabrication support."
      heroImage="/assets/kitchen-countertops/hero/countertop-hero.png"
      heroAlt="natural stone countertop and coffee table production reference"
      keywords={[
        "stone countertop supplier",
        "coffee table stone fabrication",
        "custom natural stone tables",
        "export-ready countertop production"
      ]}
      proofTitle="Real countertop and coffee table references."
      proofCopy="Use this page to review local countertop and coffee table material references, shape variations, edge finishing, and real production quality before requesting pricing."
      gallery={getKitchenCountertopAssets()}
      projectType="Stone Countertop & Coffee Table"
      sourcePath="/kitchen-countertops"
      galleryImageFit="cover"
    />
  );
}

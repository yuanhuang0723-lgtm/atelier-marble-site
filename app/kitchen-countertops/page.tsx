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
    .map((file, index) => {
      const referenceNumber = String(index + 1).padStart(2, "0");
      const title = `Stone countertop and tabletop reference ${referenceNumber}`;
      return {
      category: "kitchen-countertop",
      filename: file,
      label: `Countertop Reference ${String(index + 1).padStart(2, "0")}`,
      title,
      src: `/assets/kitchen-countertops/local/${encodeURIComponent(file)}`,
      alt: `${title}; a visual reference only, with source and project provenance unverified.`,
      categoryLabel: "STONE COUNTERTOP & COFFEE TABLE",
      description:
        "Stone countertop, tabletop, and basin components shown for visual comparison; confirm material and project details separately."
      };
    });
}

export const metadata: Metadata = {
  title: "Stone Countertop & Coffee Table",
  description:
    "Visual references for comparing stone countertop, vanity, tabletop, and basin forms before discussing a project scope.",
  alternates: { canonical: absoluteUrl("/kitchen-countertops") },
  openGraph: {
    title: "Stone Countertop & Coffee Table",
    description:
      "Visual references for countertop, vanity, tabletop, and basin forms across residential, hospitality, and commercial interiors.",
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
      heroAlt="Stone countertop and table forms shown as visual references; not documentary proof of production."
      keywords={[
        "stone countertop supplier",
        "coffee table stone fabrication",
        "custom natural stone tables",
        "export-ready countertop production"
      ]}
      proofTitle="Countertop and coffee table references."
      proofCopy="Use this page to review countertop and coffee table material references, shape variations, edge finishing, and fabrication details before requesting pricing."
      gallery={getKitchenCountertopAssets()}
      projectType="Stone Countertop & Coffee Table"
      sourcePath="/kitchen-countertops"
      galleryImageFit="cover"
    />
  );
}

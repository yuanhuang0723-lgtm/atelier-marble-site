import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import AdsLandingPage from "../../components/AdsLandingPage";
import type { Asset } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

const LOCAL_ASSET_DIR = path.join(process.cwd(), "public", "assets", "finished-stone-product", "local");

function getFinishedStoneProductAssets(): Asset[] {
  if (!fs.existsSync(LOCAL_ASSET_DIR)) {
    return [];
  }

  return fs
    .readdirSync(LOCAL_ASSET_DIR)
    .filter((file) => /\.(png|jpe?g|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file, index) => ({
      category: "projects",
      filename: file,
      label: `Vanity Top Reference ${String(index + 1).padStart(2, "0")}`,
      title: `Vanity Top Reference ${String(index + 1).padStart(2, "0")}`,
      src: `/assets/finished-stone-product/local/${encodeURIComponent(file)}`,
      alt: "natural stone vanity top and cabinet panel reference",
      categoryLabel: "CABINET PANELS + VANITY TOPS",
      description:
        "Real local cabinet panel and vanity top reference showing natural stone fabrication, basin integration, and finished surface quality."
    }));
}

export const metadata: Metadata = {
  title: "Cabinet Panels + Vanity Tops",
  description:
    "Natural stone vanity tops, cabinet panels, and finished bathroom stone references for residential, hospitality, and interior projects.",
  alternates: { canonical: absoluteUrl("/marble-coffee-tables") },
  openGraph: {
    title: "Cabinet Panels + Vanity Tops",
    description:
      "Finished stone cabinet panels and vanity tops with real fabrication references for premium bathroom and interior applications.",
    url: absoluteUrl("/marble-coffee-tables"),
    siteName,
    images: [
      {
        url: absoluteUrl("/assets/finished-stone-product/hero/vanity-cabinet-hero.png"),
        width: 1680,
        height: 945
      }
    ]
  }
};

export default function MarbleCoffeeTablesPage() {
  return (
    <AdsLandingPage
      eyebrow="Natural stone vanity top & cabinet panel supplier"
      title="Cabinet Panels + Vanity Tops"
      description="Atelier Marble supplies refined natural stone cabinet panels, vanity tops, and custom bathroom stone pieces for residential, hospitality, and interior projects."
      heroImage="/assets/finished-stone-product/hero/vanity-cabinet-hero.png"
      heroAlt="natural stone vanity tops and cabinet panels ready for premium bathroom and interior projects"
      keywords={[
        "natural stone vanity tops",
        "cabinet panel supplier",
        "bathroom stone fabrication",
        "custom vanity basins"
      ]}
      proofTitle="Finished stone references for vanity tops and cabinet panels."
      proofCopy="Use this page to review real local bathroom stone references, cabinet panel finishing, basin integration, and export-ready fabrication quality."
      gallery={getFinishedStoneProductAssets()}
      projectType="Cabinet Panels + Vanity Tops"
      sourcePath="/marble-coffee-tables"
      galleryImageFit="cover"
    />
  );
}

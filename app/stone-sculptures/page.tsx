import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import AdsLandingPage from "../../components/AdsLandingPage";
import { getAssets } from "../../lib/assets";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Carved Stone Sculpture Supplier",
  description:
    "Custom carved stone sculpture supplier for marble decor, architectural spaces, galleries, hotels, and luxury interiors.",
  alternates: { canonical: absoluteUrl("/stone-sculptures") },
  openGraph: {
    title: "Carved Stone Sculpture Supplier",
    description:
      "Premium carved marble decor and custom stone sculpture supplier for hospitality, galleries, and luxury interiors.",
    url: absoluteUrl("/stone-sculptures"),
    siteName,
    images: [{ url: absoluteUrl("/materials/categories/stone-sculptures.png"), width: 1024, height: 1536 }]
  }
};

const localGalleryDir = path.join(process.cwd(), "public", "assets", "stone-sculptures", "local");
const gallerySource = getAssets("carving-decor");

function buildLocalGallery() {
  if (!fs.existsSync(localGalleryDir)) {
    return gallerySource;
  }

  const localFiles = fs
    .readdirSync(localGalleryDir)
    .filter((file) => /\.(png|jpe?g|webp|gif|avif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, "en", { numeric: true, sensitivity: "base" }));

  if (!localFiles.length) {
    return gallerySource;
  }

  return gallerySource.map((asset, index) => {
    const localFile = localFiles[index] ?? localFiles[localFiles.length - 1];
    return {
      ...asset,
      src: `/assets/stone-sculptures/local/${encodeURIComponent(localFile)}`
    };
  });
}

export default function StoneSculpturesPage() {
  const gallery = buildLocalGallery();

  return (
    <AdsLandingPage
      eyebrow="Custom stone sculpture supplier"
      title="Carved Stone Sculpture Supplier"
      description="Atelier Marble supports custom carved stone decor, marble sculpture pieces, and refined natural stone objects for hotels, galleries, villas, and architectural interiors."
      heroImage="/assets/carving-decor/local/7b7cb542-0dbc-4626-b9cc-f663dbee6d06.png"
      heroAlt="custom carved stone sculpture displayed in a premium interior setting"
      keywords={[
        "carved stone sculpture supplier",
        "custom stone sculpture supplier",
        "natural stone furniture manufacturer",
        "high end stone interior design"
      ]}
      proofTitle="Stone art pieces with export production support."
      proofCopy="This page is built for buyers sourcing sculptural stone decor, marble objects, and crafted natural stone pieces with credible production and export coordination."
      gallery={gallery}
      projectType="Custom Furniture & Sculptures"
      sourcePath="/stone-sculptures"
      galleryImageFit="cover"
    />
  );
}

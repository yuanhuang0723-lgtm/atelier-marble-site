import type { Metadata } from "next";
import AdsLandingPage from "../../components/AdsLandingPage";
import { getAssets } from "../../lib/assets";
import { getPublicImageEntries, resolvePublicImage } from "../../lib/public-image-metadata";
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

const gallerySource = getAssets("carving-decor");
const localGalleryImages = getPublicImageEntries("/assets/stone-sculptures/local/");

function buildLocalGallery() {
  if (!localGalleryImages.length) {
    return gallerySource;
  }

  return gallerySource.map((asset, index) => {
    const image = localGalleryImages[index] ?? localGalleryImages[localGalleryImages.length - 1];
    return {
      ...asset,
      src: image.src,
      title: image.title || asset.title,
      alt: image.alt || asset.alt
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
      heroImage={resolvePublicImage("/assets/carving-decor/local/7b7cb542-0dbc-4626-b9cc-f663dbee6d06.png").src}
      heroAlt={resolvePublicImage("/assets/carving-decor/local/7b7cb542-0dbc-4626-b9cc-f663dbee6d06.png").alt}
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

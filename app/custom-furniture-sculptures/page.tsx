import type { Metadata } from "next";
import CategoryGalleryPage from "../../components/CategoryGalleryPage";
import { categoryGalleryPages } from "../../lib/category-galleries";
import { resolvePublicImage } from "../../lib/public-image-metadata";
import { absoluteUrl, siteName } from "../../lib/seo";

const page = categoryGalleryPages["custom-furniture-sculptures"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: absoluteUrl(page.slug) },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: absoluteUrl(page.slug),
    siteName,
    images: [{ url: absoluteUrl(resolvePublicImage(page.openGraphImage).src), width: 1024, height: 1536 }]
  }
};

export default function CustomFurnitureSculpturesPage() {
  return <CategoryGalleryPage page={page} />;
}

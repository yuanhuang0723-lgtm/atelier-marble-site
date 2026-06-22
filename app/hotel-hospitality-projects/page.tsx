import type { Metadata } from "next";
import CategoryGalleryPage from "../../components/CategoryGalleryPage";
import { categoryGalleryPages } from "../../lib/category-galleries";
import { absoluteUrl, siteName } from "../../lib/seo";

const page = categoryGalleryPages["hotel-hospitality-projects"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: absoluteUrl(page.slug) },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: absoluteUrl(page.slug),
    siteName,
    images: [{ url: absoluteUrl(page.openGraphImage), width: 1536, height: 1024 }]
  }
};

export default function HotelHospitalityProjectsPage() {
  return <CategoryGalleryPage page={page} />;
}


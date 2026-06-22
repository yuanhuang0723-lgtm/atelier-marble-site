import { Asset, slugFromAsset } from "./assets";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ateliermarble.com";
export const siteName = "Atelier Marble";

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path}`;
}

export function projectPath(asset: Asset) {
  return `/project/${slugFromAsset(asset)}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: absoluteUrl("/icon.svg"),
    description:
      "Luxury architectural stone design studio and bespoke natural stone manufacturer for kitchens, hotels, furniture, and export projects.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yunfu",
      addressRegion: "Guangdong",
      addressCountry: "CN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86 13288726333",
      contactType: "sales",
      availableLanguage: ["English"]
    }
  };
}

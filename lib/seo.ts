import { Asset, slugFromAsset, contact } from "./assets";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://atelier-marble-site.vercel.app";
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
    name: contact.companyName,
    url: siteUrl,
    logo: absoluteUrl("/icon.svg"),
    description:
      "Custom stone fabrication and project supply from Yunfu, China for hotel, commercial, countertop, vanity, and architectural stone projects.",
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressLocality: "Yunfu",
      addressRegion: "Guangdong",
      addressCountry: "CN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+86 13288726333",
      contactType: "sales",
      availableLanguage: ["English"],
      email: contact.emails[0]
    }
  };
}

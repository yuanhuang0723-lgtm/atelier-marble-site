import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import GoogleTag from "../components/GoogleTag";
import JsonLd from "../components/JsonLd";
import { absoluteUrl, organizationJsonLd, siteName, siteUrl } from "../lib/seo";
import "./globals.css";

const titleFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["400", "500", "600", "700"]
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atelier Marble | Luxury Marble Supplier",
    template: "%s | Atelier Marble"
  },
  description:
    "Luxury marble supplier and architectural stone design studio for bespoke natural stone projects worldwide.",
  keywords: [
    "luxury marble supplier",
    "custom stone countertops China",
    "hotel stone fabrication",
    "architectural stone design studio",
    "bespoke natural stone manufacturer"
  ],
  alternates: {
    canonical: absoluteUrl("/")
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    siteName,
    title: "Atelier Marble | Luxury Marble Supplier",
    description:
      "Premium architectural stone design studio for custom countertops, hotel stone fabrication, marble furniture, and bespoke natural stone.",
    url: siteUrl,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.png"), width: 1536, height: 1024 }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${titleFont.variable} ${bodyFont.variable}`}>
      <body>
        <GoogleTag />
        <JsonLd data={organizationJsonLd()} />
        {children}
      </body>
    </html>
  );
}

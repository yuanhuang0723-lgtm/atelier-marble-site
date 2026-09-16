import type { Metadata } from "next";
import CommercialLandingPage from "../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Custom Stone Countertops from China",
  description: "Custom stone countertops from Yunfu, China for kitchens, islands, hotel bathrooms, and commercial interiors. Review dimensions, cut-outs, edges, finish, quantity, and packing.",
  alternates: { canonical: absoluteUrl("/countertops") },
  openGraph: {
    title: "Custom Stone Countertops from China",
    description: "Review custom stone countertop scope, material direction, cut-outs, edges, finish, and export packing before quotation.",
    url: absoluteUrl("/countertops"),
    siteName,
    images: [{ url: absoluteUrl("/assets/home-top-cover.webp") }]
  }
};

export default function CountertopsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Custom stone countertops"
      title="Custom stone countertops for kitchens, hotels, and commercial interiors."
      description="Coordinate natural stone countertops from dimensions or drawings, including islands, hotel vanity packages, commercial counters, cut-outs, finished edges, and export packing."
      image="/assets/home-top-cover.webp"
      imageAlt="Marble dining table and stone countertop in a contemporary interior"
      bullets={[
        "Kitchen countertops and islands prepared around your dimensions or drawings",
        "Hotel bathroom vanity tops and repeatable room-type quantities",
        "Commercial counters, cut-outs, edges, backsplashes, and basin coordination",
        "Marble, quartzite, granite, and other natural stone considered case by case"
      ]}
      details={[
        "Kitchen countertops and islands",
        "Hotel bathroom and vanity packages",
        "Commercial counters and public-area surfaces",
        "Cut-to-size tops with finished edges and openings"
      ]}
      specificationGroups={[
        { title: "Dimensions and support", items: ["Overall length, depth, thickness, units, quantity, and drawing revision", "Cabinet opening, support, joints, overhang, reveals, and site tolerance", "Room, type, piece, or area labels for repeatable project quantities"] },
        { title: "Openings and edges", items: ["Sink model or template, faucet holes, service openings, and cut-out positions", "Edge profile, polished or eased exposed edges, backsplash, splash, upstand, and corners", "Seams, joins, visible faces, and orientation shown on the latest drawing"] },
        { title: "Material and finish", items: ["Marble, quartzite, granite, or another approved material reference", "Surface finish, face direction, natural variation, matching expectation, and sample approval", "Application, maintenance expectations, and any project-specific limitations"] },
        { title: "Quote and delivery", items: ["Destination market, packing requirements, timing, and delivery term", "Drawings, BOQ, marked-up photos, quantities, and material direction", "Pricing is confirmed after the project scope and fabrication requirements are reviewed"] }
      ]}
      relatedLink={{ label: "Explore marble countertop fabrication", href: "/countertops/marble-countertops" }}
      faqTitle="Custom countertop details, answered clearly."
      faqs={[
        { question: "What information helps price a custom stone countertop?", answer: "Share the application, dimensions or drawings, cut-outs, edge profile, quantity, material direction, finish, destination, and required timing." },
        { question: "Do you provide local measuring and installation?", answer: "This site is structured for project review and export fabrication. Local measuring or installation should be confirmed separately for the destination market." },
        { question: "Can one quotation include kitchens and hotel counters?", answer: "Yes. Separate the applications, room or area labels, quantities, drawings, material direction, and packing requirements so each scope can be reviewed accurately." }
      ]}
      metadata={metadata}
    />
  );
}

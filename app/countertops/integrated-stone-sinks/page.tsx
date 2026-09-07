import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Integrated Stone Sinks & Vanity Basins",
  description: "Custom integrated stone sinks and vanity basins coordinated with countertop dimensions, cut-outs, edges, and export packing.",
  alternates: { canonical: absoluteUrl("/countertops/integrated-stone-sinks") },
  openGraph: { title: "Integrated Stone Sinks & Vanity Basins", description: "Custom integrated stone sinks and vanity basins coordinated with countertop dimensions, cut-outs, edges, and export packing.", url: absoluteUrl("/countertops/integrated-stone-sinks"), siteName, images: [{ url: absoluteUrl("/assets/vanity-cabinet/hero.webp") }] }
};

export default function IntegratedStoneSinksPage() {
  return <CommercialLandingPage eyebrow="Integrated stone sinks" title="Integrated stone sinks and vanity basins." description="For buyers who need the basin, countertop, cut-outs, edges, and surrounding stone details reviewed together before fabrication and packing." image="/assets/vanity-cabinet/hero.webp" imageAlt="Integrated stone basin and vanity top reference for a bathroom project" bullets={["Coordinate basin dimensions with the surrounding vanity top", "Review edge, drainage, surface, and installation details together", "Suitable for hotel bathroom packages and residential projects", "Confirm material, finish, quantity, and packing requirements before pricing"]} details={["Integrated vanity basins", "Stone sink and countertop packages", "Repeatable hotel bathroom components", "Custom cut-outs and finished edges"]} faqTitle="Integrated stone sink details, answered clearly." faqs={[{ question: "Can the sink and vanity top be coordinated together?", answer: "Yes. Basin dimensions, countertop size, cut-outs, edges, drainage, and surrounding stone details can be reviewed as one fabrication scope." }, { question: "What information helps price a custom stone sink?", answer: "Material direction, basin dimensions, countertop size, quantity, finish, drainage details, and destination packing requirements provide a useful starting scope." }, { question: "Are integrated stone sinks suitable for hotel projects?", answer: "They can be scoped for repeatable hotel bathroom packages when the dimensions, finish, quantities, and installation requirements are confirmed before fabrication." }]} metadata={metadata} />;
}

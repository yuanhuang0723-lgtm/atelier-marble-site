import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Integrated Stone Sinks & Vanity Basins",
  description: "Custom integrated stone sinks and vanity basins coordinated with countertop dimensions, cut-outs, edges, and export packing.",
  alternates: { canonical: absoluteUrl("/countertops/integrated-stone-sinks") },
  openGraph: { title: "Integrated Stone Sinks & Vanity Basins", description: "Custom integrated stone sinks and vanity basins coordinated with countertop dimensions, cut-outs, edges, and export packing.", url: absoluteUrl("/countertops/integrated-stone-sinks"), siteName, images: [{ url: absoluteUrl("/assets/vanity-cabinet/hero.png") }] }
};

export default function IntegratedStoneSinksPage() {
  return <CommercialLandingPage eyebrow="Integrated stone sinks" title="Stone sinks and vanity basins coordinated as one finished package." description="For buyers who need the basin, countertop, cut-outs, edges, and surrounding stone details reviewed together before fabrication and packing." image="/assets/vanity-cabinet/hero.png" imageAlt="Integrated stone basin and vanity top reference for a bathroom project" bullets={["Coordinate basin dimensions with the surrounding vanity top", "Review edge, drainage, surface, and installation details together", "Suitable for hotel bathroom packages and residential projects", "Confirm material, finish, quantity, and packing requirements before pricing"]} details={["Integrated vanity basins", "Stone sink and countertop packages", "Repeatable hotel bathroom components", "Custom cut-outs and finished edges"]} metadata={metadata} />;
}

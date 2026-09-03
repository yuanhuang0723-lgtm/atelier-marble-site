import type { Metadata } from "next";
import CommercialLandingPage from "../../components/CommercialLandingPage";
import { absoluteUrl } from "../../lib/seo";

export const metadata: Metadata = { title: "Custom Stone Countertops & Vanity Tops", description: "Custom marble countertops, vanity tops, integrated stone sinks, and cut-to-size fabrication from Yunfu, China.", alternates: { canonical: absoluteUrl("/countertops") } };

export default function CountertopsPage() { return <CommercialLandingPage eyebrow="Countertops & vanity" title="Custom stone countertops, vanity tops, and integrated sinks." description="Fabricated natural stone for kitchens, hotel bathrooms, villas, and commercial interiors, prepared from your dimensions or drawings." image="/materials/featured-covers/kitchen-countertop.png" imageAlt="Custom natural stone countertop prepared for a residential or hospitality project" bullets={["Marble, quartzite, granite, and other natural stone options", "Cut-outs, edge profiles, backsplashes, and integrated basin coordination", "Material matching and fabrication review before quotation", "Export packing planned around the finished stone scope"]} details={["Kitchen countertops and islands", "Hotel vanity tops and bathroom packages", "Integrated stone sinks and cut-to-size components", "Edge finishing, drilling, and project coordination"]} metadata={metadata} />; }

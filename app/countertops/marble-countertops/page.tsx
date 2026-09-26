import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Marble Countertop Fabrication from China",
  description:
    "Marble countertop fabrication from Yunfu, China for kitchens, hotels, villas, and commercial interiors. Review slabs, cut-outs, edges, finish, and packing.",
  alternates: { canonical: absoluteUrl("/countertops/marble-countertops") },
  openGraph: {
    title: "Marble Countertops from China for Project Buyers",
    description:
      "Review marble countertop material direction, dimensions, cut-outs, edges, finish, and export packing before quotation.",
    url: absoluteUrl("/countertops/marble-countertops"),
    siteName,
    images: [{ url: absoluteUrl("/materials/featured-covers/kitchen-countertop.webp") }]
  }
};

const marbleContentSections = [
  {
    heading: "Review marble lots and slab layout before pricing",
    paragraphs: [
      "A marble countertop request should identify the room or area, piece marks, dimensions, quantity, thickness, finish, and drawing revision. Share the cabinet plan, appliance layout, openings, visible edges, and any adjoining splash or wall pieces. The product name alone is not a complete specification because two marble lots with the same trade name can differ in background tone, veining, and movement.",
      "State whether the project is selecting from a current lot, a sample, or a visual reference and who approves the material. If a quotation is prepared before the lot is confirmed, label the material direction as provisional. This keeps a budget estimate separate from a final production release and gives the buyer a clear list of decisions that still affect appearance or price."
    ]
  },
  {
    heading: "Record vein direction and face selection",
    paragraphs: [
      "For a long run, island, waterfall end, or bookmatched detail, show the intended vein direction and the relationship between neighboring pieces. Use a plan or elevation to indicate which face is visible, how the pattern should turn at a corner, and where seams fall. If the drawing leaves those decisions open, note them for review instead of relying on an interior photograph to define the layout.",
      "Natural variation across the same lot can still be visible from one piece to another. If multiple tops must read together, identify the set and agree what type of visual continuity matters. Record whether matching is based on tone, movement, background color, or a particular pattern feature. The final selection and acceptable range should be approved against the actual project material, not inferred from a small screen image."
    ]
  },
  {
    heading: "Separate color preference from application requirements",
    paragraphs: [
      "Describe the intended use: kitchen work surface, hotel vanity, reception counter, bar top, or another interior application. Note the expected finish, thickness, exposed faces, edges, cut-outs, and maintenance expectations for that setting. Marble varieties and finishes have different characteristics. The design and operations teams should confirm that the selected material and finish suit the actual use and cleaning plan rather than relying on a generic claim about performance.",
      "If the project needs a sample, mock-up, or material-board approval, define what it is meant to confirm and who signs off. A sample helps discuss color and finish direction, but it may not represent every slab in a later lot. Record the accepted reference, lot, finish, and any agreed variation. If the material or finish changes after approval, review how the change affects the drawing, cost, quantity, and timing."
    ]
  },
  {
    heading: "Draw the countertop, cabinet, and opening interfaces",
    paragraphs: [
      "Show the finished top outline, cabinet dimensions, support condition, overhang, joints, seams, and wall return. Identify the edges that remain visible and any backsplash, upstand, side panel, or waterfall end that belongs with the marble scope. Distinguish finished dimensions from cabinet-opening or preliminary dimensions, and label units and measurement datums so the quote is based on a clear reference.",
      "For sinks, faucets, cooktops, soap dispensers, outlets, and other openings, provide a template or dimensions from fixed edges or centerlines. Confirm which trade supplies each fixture and who approves the final opening location. If a cabinet, appliance, or plumbing decision is still pending, mark it as open. This prevents a provisional cut-out from being treated as a confirmed fabrication detail."
    ]
  },
  {
    heading: "Specify edges, joints, and finish details by piece",
    paragraphs: [
      "Name the requested edge profile and mark where it begins and ends. Show whether edges are polished, eased, built up, mitered, or left concealed by another component. Note how seams align with cabinets or appliances and whether the marble continues into a splash or wall return. Use sections for details where thickness, edge build-up, or the joint between pieces cannot be read from a plan.",
      "For several countertops, reuse the same edge and finish labels in the drawing and BOQ. Separate pieces that have a different profile or visible face rather than assuming a whole project has one standard detail. If a change is made after the sample or drawing is approved, list the affected piece marks and get the revised scope confirmed before it is used for a new quotation or production drawing."
    ]
  },
  {
    heading: "Plan repeat tops by room type and batch",
    paragraphs: [
      "Hotel, apartment, villa, and multi-room projects can combine repeated tops with mirrored or exception layouts. Group them by room type, floor, or area and show the quantity for each piece mark. Identify spare units and note whether they follow the same marble and finish approval as the standard pieces. Keep the schedule connected to the current drawing revision so changes to one room type do not silently alter the whole order.",
      "If a project releases work in phases, identify which rooms or areas belong to each phase and how labels should appear on the pieces and packages. State who approves differences between batches and how replacement pieces are to be referenced. Repetition improves scheduling and checking only when the part marks, quantities, material decisions, and revisions stay aligned; identical dimensions alone do not guarantee a visually identical marble match."
    ]
  },
  {
    heading: "Approve the material and drawing as one scope",
    paragraphs: [
      "Before a final production scope is agreed, check that the drawing, BOQ, material reference, finish, cut-outs, edge details, and piece count describe the same package. Record who approves the selected marble, visible face, slab orientation, and final dimensions. If an approval is pending, show it as pending rather than treating a general reference image as sign-off.",
      "Define the checks that matter for the order, such as dimensions, opening positions, edge completion, finish, labels, and visible surface character. Agree which records or photos can be provided and when. Inspection scope and evidence depend on the written quotation. Do not infer that a specific test, certificate, or project quality result exists unless it is supplied for that order."
    ]
  },
  {
    heading: "Confirm packing and delivery responsibility",
    paragraphs: [
      "Marble tops may have exposed edges, cut-outs, finished faces, or connected pieces that need coordinated protection. State how pieces should be grouped, labeled, and matched to a room or installation sequence. Share receiving constraints, destination, delivery term, and any buyer or forwarder packing instructions before the scope is priced. If local measuring or installation is needed, identify who arranges it separately.",
      "Confirm who handles freight, insurance, customs clearance, unloading, and last-mile delivery. Fabrication and export packing do not automatically include site installation. The final quotation should state what is included and which delivery decisions remain open. Freight price and transit time depend on the route, shipment details, carrier, and agreed terms; they cannot be inferred from the marble type alone."
    ]
  }
];

const faqs = [
  { question: "What should I send for a marble countertop review?", answer: "Share the application, approximate dimensions, quantity, edge direction, cut-outs, finish, destination, and any drawings or reference images you already have." },
  { question: "Can the marble be confirmed before fabrication?", answer: "Material name, current availability, thickness, finish, matching, and application suitability should be confirmed against the project brief before production." },
  { question: "Are marble countertops suitable for hotel projects?", answer: "They can be reviewed for hotel bathrooms, kitchens, public areas, and other project applications case by case, with fabrication and packing details coordinated with the scope." }
];

export default function MarbleCountertopsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Marble countertops"
      title="Marble countertops planned around your project details."
      description="Review marble character, dimensions, cut-outs, edge profiles, finish, and packing requirements with a project-focused stone fabrication team in Yunfu, China."
      contentSectionTitle="Review marble layout, fabrication, and approval details."
      contentSections={marbleContentSections}
      image="/materials/featured-covers/kitchen-countertop.webp"
      imageAlt="Marble countertop reference prepared for a kitchen, hotel, or commercial project"
      bullets={[
        "Material direction reviewed alongside application, dimensions, and finish",
        "Cut-outs, edge profiles, backsplashes, and repeat units kept in one scope",
        "Useful for kitchens, hotel bathrooms, villas, and commercial interiors",
        "Export packing requirements considered before the quotation path is finalized"
      ]}
      details={["Marble kitchen countertops and islands", "Hotel bathroom and vanity packages", "Commercial counters and public-area surfaces", "Cut-to-size components with finished edges and openings"]}
      specificationGroups={[{ title: "Marble fabrication scope", items: ["Dimensions, thickness, quantities, drawing revision, room or area labels, and visible face direction", "Sink, faucet, service, and other cut-outs marked with the correct templates", "Edge profile, backsplash, splash, joints, seams, corners, and support conditions"] }, { title: "Material and approval", items: ["Marble reference, current lot, surface finish, natural variation, and matching expectation", "Sample or lot approval recorded before the fabrication scope is released", "Maintenance and application requirements reviewed according to the project use"] }]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying marble."
      relatedLink={{ label: "Explore integrated stone sinks", href: "/countertops/integrated-stone-sinks" }}
      purchaseInfo={{ materialOptions: "Natural marble. Confirm current lot, thickness, finish, vein direction, and batch matching.", customCapability: "Review kitchen and hotel countertop layouts, cut-outs, edges, finish, and repeat-piece matching." }} metadata={metadata}
    />
  );
}

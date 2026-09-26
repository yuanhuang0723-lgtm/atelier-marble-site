import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Stone Wall Cladding Fabrication from China",
  description:
    "Custom stone wall cladding from China for hotel lobbies and commercial interiors. Review material, panel layout, finish, quantities, and packing from drawings.",
  alternates: { canonical: absoluteUrl("/architectural-stone/wall-cladding") },
  openGraph: {
    title: "Architectural Stone Wall Cladding from China",
    description:
      "Coordinate wall cladding material, panel layout, fabrication details, inspection, and export packing for architectural projects.",
    url: absoluteUrl("/architectural-stone/wall-cladding"),
    siteName,
    images: [{ url: absoluteUrl("/materials/categories/hotel-projects.webp") }]
  }
};

const wallCladdingSections = [
  {
    heading: "Link each elevation to a panel schedule",
    paragraphs: [
      "Start with the current plans, elevations, sections, finish schedule, and BOQ. Identify the building, floor, area, and drawing revision for each wall. Link each elevation to a panel schedule so every panel can be traced to its opening, corner, return, reveal, and feature zone. State dimensions, units, quantities, thickness where specified, visible faces, and the adjacent finish. Use the same panel marks on the drawing and BOQ so a buyer can review count and location together.",
      "Mark which dimensions are confirmed and which depend on the completed substrate or a later site measurement. If a room name, elevation label, or panel mark differs between documents, provide a cross-reference. A quote review can identify missing or conflicting inputs, but it cannot resolve competing dimensions without a controlling drawing revision and a named approver. Keep preliminary sizes separate from final sizes used for the approved scope."
    ]
  },
  {
    heading: "Coordinate openings, corners, and returns",
    paragraphs: [
      "Show door and window openings, service penetrations, niches, columns, reveals, outside and inside corners, and the returns around each condition. Mark the exposed edges and the way adjoining panels meet. If a wall meets flooring, a ceiling feature, cabinet, or metal trim, show that interface in section or detail. These conditions affect the piece schedule and should not be inferred from a broad elevation or a reference photograph.",
      "For each opening, identify who supplies the template and which trade confirms its final position. Keep electrical, plumbing, fire-safety, and other service requirements with the responsible designer or contractor. If an opening or wall dimension changes after review, identify the panel marks and quantities that need to be revised. That helps the buyer see whether a changed condition affects one panel, a complete elevation, or a material order."
    ]
  },
  {
    heading: "Plan panel modules and joint lines",
    paragraphs: [
      "Set out panel width and height, joint spacing, orientation, face direction, and any visual rhythm across the elevation. Note whether panels repeat, mirror one another, or change around a corner. If a stone pattern, bookmatch, or vein direction matters, show which panels are intended to relate visually. Identify joints that align with doors, floor lines, ceiling features, or other architectural elements, and distinguish design intent from dimensions that are still under review.",
      "Use piece marks that correspond to the installation area and revision. If the job includes several lobbies, corridors, or floors, group the schedules by zone rather than combining all panels into one generic count. A module list helps buyers compare quantities and supports discussion of packaging sequence. It does not establish a fixing pattern or structural design; those details must come from the approved design team."
    ]
  },
  {
    heading: "Confirm substrate and fixing responsibility",
    paragraphs: [
      "Wall cladding depends on the wall build-up, support locations, adjacent work, and installation method. Share any available substrate drawings, support zones, movement-joint requirements, fixing areas, and tolerance notes. Confirm fixing design with the responsible engineer and installer. Their approved details govern anchors, adhesives, loads, safety factors, and code requirements; do not infer them from a panel size or from the stone material alone.",
      "Define where the stone fabrication scope ends and which party confirms site dimensions, substrate readiness, and installation sequence. If the wall is not complete when the quote is prepared, state what must be measured later and who signs off that measurement. A change to the support design or wall build-up can affect panel size, edge treatment, and packing. Record the issue against the relevant elevation and drawing revision before releasing updated quantities."
    ]
  },
  {
    heading: "Choose material and finish by elevation",
    paragraphs: [
      "State the preferred stone, finish, thickness, visible face, and any matching or directional pattern by area. Natural stone varies between pieces and lots. If reception, lobby, and corridor walls should read as one family, note which surfaces need to be reviewed together and what variation is acceptable. Do not assume a material name or digital image guarantees the same tone or vein in every panel.",
      "Agree sample or lot approval, finish approval, and who accepts the final appearance before the drawing is released. Record the approved reference and date. If the project changes material, finish, or panel dimensions after approval, identify the affected elevations and quantity lines. Maintenance and application requirements also depend on the selected stone and finish, so the owner and design team should confirm that the choice fits the intended location."
    ]
  },
  {
    heading: "Schedule repeat panels and room variations",
    paragraphs: [
      "Commercial interiors often have repeated layouts alongside corner rooms, accessible spaces, service areas, and feature walls. Separate standard panels from mirrored, handed, shortened, or otherwise unique pieces. List the quantity by floor or zone and mark spare or replacement panels. For multiple hotel rooms, use stable room-type and panel identifiers that can appear on drawings, BOQ lines, package labels, and the site receiving list.",
      "If work is released in phases, map each panel group to its phase and drawing revision. Identify who approves additions or substitutions and whether earlier approvals still apply. A repeated panel count supports a clearer quote and packing plan, but it does not establish that the supplier has a confirmed production slot or that all panels will have identical natural-stone patterning. Keep those assumptions visible in the project schedule."
    ]
  },
  {
    heading: "Approve drawings and inspection scope",
    paragraphs: [
      "Before a wall package is released, confirm the elevation revision, panel schedule, opening positions, edge details, material, finish, piece marks, and quantities. If a sample, mock-up, or first-piece review is required, state what it needs to demonstrate, who approves it, and whether work waits for that decision. Keep comments tied to panel marks so a correction does not disappear into general notes or email threads.",
      "Agree which checks should be completed before packing, such as panel dimensions, edge completion, finish, openings, labels, and visible surface character. Note what evidence or photographs are requested and when they can be supplied. Inspection scope should match the order and the actual records provided. Do not imply a test, certification, engineering sign-off, or completed installation result unless that evidence exists for the project."
    ]
  },
  {
    heading: "Group packages for delivery and installation sequence",
    paragraphs: [
      "Wall panels should be identified so the receiving team can match each piece to a building, floor, elevation, and panel mark. State how packages should be grouped, which faces and edges need protection, and whether panels for one wall must arrive together. Share site storage, unloading, lift, access, and delivery-hour limits before the packing and freight scope is confirmed.",
      "Provide destination, delivery term, and the party responsible for freight, insurance, customs clearance, unloading, and local handling. Stone fabrication and export preparation do not automatically include fixing design or installation. The project team should agree who accepts the packages and who records any transit or receiving issue. Transit time and freight cost depend on the route, shipment, carrier, and agreed terms, so they must be quoted for the actual order."
    ]
  }
];

const faqs = [
  { question: "What information helps review wall cladding?", answer: "Share elevations or drawings, panel dimensions, approximate quantity, material direction, finish, installation context, destination, and packing requirements." },
  { question: "Can panel layouts be reviewed before pricing?", answer: "Yes. A drawing-led review can clarify repeatable panels, joins, openings, edges, and the practical fabrication scope before quotation." },
  { question: "Is wall cladding suitable for hotel projects?", answer: "Hotel lobbies, reception areas, corridors, and other feature surfaces can be reviewed case by case with material, fabrication, quality, and export coordination considered together." }
];

export default function ArchitecturalWallCladdingPage() {
  return (
    <CommercialLandingPage
      eyebrow="Wall cladding"
      title="Architectural stone wall cladding reviewed from the drawing outward."
      description="Coordinate material character, panel layout, openings, edges, finish, inspection, and export packing for hotel and commercial feature walls."
      contentSectionTitle="Plan wall cladding from elevations and panel schedules."
      contentSections={wallCladdingSections}
      image="/materials/categories/hotel-projects.webp"
      imageAlt="Illustrative hotel-lobby concept showing stone wall panels; not a completed cladding project."
      imageCaption="Illustrative hotel-lobby concept only. It does not document a completed Atelier Marble wall-cladding installation."
      bullets={[
        "Review elevations, panel dimensions, repeat units, openings, and joins",
        "Match material direction and finish to the intended interior application",
        "Coordinate cut-to-size fabrication and practical inspection points",
        "Consider protective packing and export preparation with the stone scope"
      ]}
      details={["Hotel lobby and reception feature walls", "Commercial interior wall panels", "Stone cladding around openings and architectural details", "Drawing-led cut-to-size panels with export coordination"]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying wall cladding."
      relatedLink={{ label: "Review commercial stone projects", href: "/projects/commercial-stone" }}
      purchaseInfo={{ materialOptions: "Marble and other approved stone can be reviewed. Confirm the current lot, finish, panel matching, and thickness for each elevation.", customCapability: "Review panel layouts, openings, edge conditions, finish, and cut lists from approved elevations or CAD." }} metadata={metadata}
    />
  );
}

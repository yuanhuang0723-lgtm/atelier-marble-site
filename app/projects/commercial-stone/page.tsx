import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Commercial Stone Fabrication in China",
  description:
    "Commercial stone fabrication and project supply in China for hospitality, retail, office, and public interiors, with repeatable details and export coordination.",
  alternates: { canonical: absoluteUrl("/projects/commercial-stone") },
  openGraph: {
    title: "Commercial Stone Fabrication in China",
    description:
      "Commercial stone fabrication and project supply in China for hospitality, retail, office, and public interiors, with repeatable details and export coordination.",
    url: absoluteUrl("/projects/commercial-stone"),
    siteName,
    images: [{ url: absoluteUrl("/materials/categories/hotel-projects.webp") }]
  }
};

const commercialContentSections = [
  {
    heading: "Group each package by site, zone, and operating phase",
    paragraphs: [
      "Start by naming the site, building, floor, area, and project phase. Separate reception, retail, office, dining, circulation, and back-of-house scopes when they have different finishes, users, drawings, or hand-over dates. Give each package a stable identifier and note whether it includes stone supply, fabrication, packing, freight, or only selected parts of those services. This helps procurement teams compare offers against the same scope instead of combining unmatched quantities.",
      "Link each line in the BOQ to a drawing number, revision, location, and piece mark. State the dimensions, units, quantity, material direction, finish, and any special interface for that item. If a schedule uses different names from the drawings, create a cross-reference and identify which document governs. Keep confirmed items separate from provisional allowances so an early budget estimate is not mistaken for an approved purchase scope."
    ]
  },
  {
    heading: "Separate guest-facing counters from back-of-house worktops",
    paragraphs: [
      "A reception counter, bar top, retail display, pantry surface, and service counter may all be described as a stone countertop, but they have different openings, edges, supports, access requirements, and visibility. Note who uses each surface and what needs to be concealed or exposed. Separate guest-facing counters from back-of-house worktops in the schedule when materials, finishes, cut-outs, or approval owners differ.",
      "For counters with cabinets, equipment, or service routes below, share the cabinet drawings, support plan, appliance templates, and access panels that affect the stone. Confirm which party provides each template and who signs off the final position. A rendering shows the design intent but does not establish the support condition or exact opening locations. Keep the latest coordinated drawing with the BOQ and mark any missing dimensions for review."
    ]
  },
  {
    heading: "Coordinate reception, retail, and public-area stone",
    paragraphs: [
      "Commercial interiors can combine feature walls, reception desks, cladding, flooring, stairs, thresholds, sills, counters, columns, and custom details. List the parts by area and identify how they meet adjacent finishes or other trades. For a reception wall that aligns with a desk, show both elements on coordinated elevations. For retail or showroom settings, indicate display zones, service openings, and the surfaces that need visual alignment across the space.",
      "Use plans, elevations, sections, and finish schedules to explain the relation between components. Note visible faces, returns, joints, edges, transitions, and movement or access requirements that the responsible design team has approved. Where one package depends on another, identify the decision owner and the required approval sequence. This keeps a project-wide surface concept connected to the individual parts that can be quoted and checked."
    ]
  },
  {
    heading: "Map openings, joints, and adjacent trade responsibilities",
    paragraphs: [
      "Mark sink, faucet, cable, power, plumbing, ventilation, fixing, and service openings using templates or dimensions from a fixed edge or centerline. Show seams, panel joints, exposed edges, miters, returns, and the connection between stone and metal, wood, glass, or tile. Confirm openings and support with the relevant trade teams, and identify who approves the final location.",
      "Confirm support conditions with the cabinet and design teams. Structural loads, fixing design, fire and accessibility requirements, plumbing, electrical, and installation methods belong to the qualified project professionals responsible for those systems. The fabrication quotation can state the dimensions and interfaces it assumes, but it should not replace the project's engineering or local code review. Keep open decisions visible until they are resolved by the right trade."
    ]
  },
  {
    heading: "Choose material and finish for each commercial zone",
    paragraphs: [
      "Identify the preferred stone, finish, thickness, visible face, and matching expectations by zone. A lobby counter, food-service surface, restroom vanity, and office reception feature may have different design and care requirements. Natural stone varies between pieces and lots, so show which surfaces need to be reviewed together and how much visual variation the owner accepts. A trade name or online image does not guarantee a particular vein or color in the supplied material.",
      "Agree the sample or lot approval and who signs it off before the drawing is released. Record the selected reference and the date. If a finish, stone, or surface area changes after approval, list the affected package lines and confirm cost and schedule implications. Maintenance and suitability depend on the exact material, finish, use, and care plan; do not infer these from the image alone."
    ]
  },
  {
    heading: "Manage repetition, visual matching, and design changes",
    paragraphs: [
      "For multi-site or repeated work, identify standard parts, mirrored versions, exceptions, spare pieces, and quantities by area. Use consistent piece marks on the drawing and packing schedule. If matching is important across reception counters, repeated rooms, or connected public spaces, say whether the requirement concerns tone, vein direction, a paired slab arrangement, or another visual feature. The project team can then decide what approval is needed for the actual lot.",
      "When a revision affects a size, finish, opening, edge, location, or piece count, record the new revision and superseded decision. Update affected BOQ lines and confirm which quote or material approval remains valid. A dated change log avoids relying on a note buried in email. If one area is held while another proceeds, label that difference in the schedule and ask the supplier to confirm how it affects the project quotation."
    ]
  },
  {
    heading: "Agree inspection evidence and sign-off before release",
    paragraphs: [
      "Decide which checks matter for each package, such as dimensions, opening positions, edge completion, finish, labels, and visible surface character. Identify who reviews the checks and when. If photographs, sample panels, mock-ups, or first-piece approval are required, state what they need to demonstrate and whether other work waits for that decision. These checkpoints should be written into the project scope so the buyer and supplier share the same expectation.",
      "Ask what inspection records can actually be provided for the order and how they will be linked to the piece marks or drawing revision. Do not assume a certification, structural inspection, test, or pass result exists if it has not been agreed and documented. If the site team raises a discrepancy, define how the issue will be described, reviewed, and assigned to the responsible party before replacement or change costs are assessed."
    ]
  },
  {
    heading: "Plan packing, delivery, and local installation hand-offs",
    paragraphs: [
      "Use package labels that connect the site, floor, area, component mark, and delivery phase to the drawings. State which parts should be packed together, what faces or edges need protection, and any limits on storage or unloading. If the contractor needs a particular receiving sequence, include it before export packing is priced. Share the destination, requested delivery term, access windows, lift or vehicle limits, and any forwarder requirements.",
      "Confirm who arranges export packing, freight, insurance, customs clearance, unloading, last-mile transport, site measuring, and installation. Fabrication and export coordination do not automatically include local site work. The final quote should state what is included and which tasks remain with the buyer, contractor, or forwarder. Freight price and transit time depend on the actual route, shipment details, carrier, and agreed delivery terms."
    ]
  }
];

const faqs = [
  {
    question: "What commercial stone scopes can be reviewed?",
    answer: "Commercial scopes can include hospitality, retail, office, showroom, public-area, countertop, wall, flooring, and custom interior stone packages."
  },
  {
    question: "Can repeatable commercial components be priced from a BOQ?",
    answer: "Yes. A BOQ, drawings, quantities, dimensions, material direction, and destination details help establish a practical review for repeatable components."
  },
  {
    question: "What should be confirmed before commercial stone production?",
    answer: "Confirm material, thickness, finish, dimensions, repeat-unit details, quantities, quality checkpoints, packing requirements, and delivery information before production planning."
  }
];

export default function CommercialStonePage() {
  return (
    <CommercialLandingPage
      eyebrow="Commercial stone projects"
      title="Commercial stone fabrication for interior projects."
      description="Keep material selection, repeatable components, fabrication review, quality checks, and export preparation connected across a commercial scope."
      image="/materials/categories/hotel-projects.webp"
      imageAlt="Illustrative commercial interior concept with stone wall panels and public-area surfaces."
      imageCaption="Illustrative commercial interior concept only. It does not document a completed Atelier Marble project or verified delivery."
      contentSectionTitle="Coordinate commercial stone by use, zone, and phase."
      contentSections={commercialContentSections}
      bullets={[
        "Useful for hospitality, retail, office, and public interior scopes",
        "Review quantities and repeatable details before quotation",
        "Coordinate countertops, vanity tops, wall applications, and custom elements",
        "Use CAD, BOQ, dimensions, or reference images to begin the review"
      ]}
      details={[
        "Hospitality and hotel interiors",
        "Retail and showroom stone packages",
        "Office and public-area surfaces",
        "Commercial countertops and custom details"
      ]}
      relatedLink={{ label: "Review the export buyer workflow", href: "/how-we-work" }}
      relatedLinks={[
        { label: "Review architectural stone scope", href: "/architectural-stone" },
        { label: "Review hotel stone supply", href: "/projects/hotel-stone-supply" }
      ]}
      faqTitle="Commercial stone project details, answered clearly."
      faqs={faqs}
      purchaseInfo={{
        materialOptions: "Choose stone by application, then verify current lot, finish, dimensions, and repeat-unit matching.",
        customCapability: "Review hospitality, retail, office, and public-space components from drawings, BOQs, and quantity schedules."
      }}
      metadata={metadata}
    />
  );
}

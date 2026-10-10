import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Architectural Stone Flooring from China",
  description:
    "Architectural stone flooring from Yunfu, China for hotels, commercial interiors, and public spaces. Review layout, finish, fabrication, and export packing.",
  alternates: { canonical: absoluteUrl("/architectural-stone/flooring") },
  openGraph: {
    title: "Architectural Stone Flooring from China",
    description:
      "Coordinate stone flooring material, layout, finish, cut-to-size fabrication, inspection, and export packing for architectural projects.",
    url: absoluteUrl("/architectural-stone/flooring"),
    siteName,
    images: [{ url: absoluteUrl("/materials/categories/hotel-projects.webp") }]
  }
};

const flooringSections = [
  {
    heading: "Set a datum and layout direction",
    paragraphs: [
      "Start the floor review with plans, room or zone names, dimensions, levels, finish schedule, and the current BOQ. Set a datum and layout direction so module positions can be coordinated from a known point. Show borders, feature bands, joints, columns, floor boxes, and other interruptions. Identify where stone begins and ends in relation to carpet, tile, timber, doors, and adjoining public spaces.",
      "For a hotel, commercial interior, or public building, list areas by floor, room type, or zone and assign piece or module marks where needed. State the measurement units, approximate area, quantity, and drawing revision. If a plan, reflected ceiling drawing, or finish schedule gives conflicting room references, note which document controls and who resolves the conflict before the module list is treated as final."
    ]
  },
  {
    heading: "Coordinate modules, borders, and visual patterns",
    paragraphs: [
      "Specify module size, joint line, pattern, border, and orientation. If marble or another directional stone is used, show the intended vein direction and whether selected pieces should be reviewed together. Note any alignment with wall panels, reception features, corridor lines, columns, or thresholds. A repeat module schedule makes quantities easier to review, but it does not mean every piece will have identical color or pattern.",
      "Identify standard pieces, perimeter cuts, special shapes, and one-off transition parts separately. Mark which pieces repeat across rooms and which are unique to one location. If a pattern shifts from one area to another, show that change on a plan or detail. The buyer and designer can then review the expected appearance before confirming material and quantity, rather than relying on an interior rendering to convey the actual layout."
    ]
  },
  {
    heading: "Align modules with thresholds and stair details",
    paragraphs: [
      "Align modules with thresholds and stair details by showing door openings, transition strips, nosings, risers, landings, skirtings, and changes in floor level. Mark where one surface meets another and who provides any adjoining metal, wood, or tile component. If a stair or threshold has a special profile, provide a section view and identify the finished dimensions and exposed edges.",
      "Confirm how borders and module lines meet at doorways, lifts, corridors, and changes of direction. Show whether cut pieces at perimeters should be centered, balanced, or simply dimensioned from a fixed edge. These choices can affect the piece schedule, visible balance, and installation sequence. The local design and installation team must also review applicable access, safety, and code requirements for the specific building."
    ]
  },
  {
    heading: "Verify slope and drainage with the design team",
    paragraphs: [
      "Verify slope and drainage with the design team where the floor plan includes wet areas, exterior thresholds, floor drains, or another condition that affects levels. Show drain locations, finished elevations, transitions, and the responsible discipline's requirements on the coordinated drawings. Stone module layout alone cannot define fall, drainage performance, waterproofing, or local compliance; those decisions belong to the design and site professionals responsible for the system.",
      "Separate areas with different levels, substrates, or installation conditions in the schedule. State which dimensions are design intent and which will be confirmed after site preparation. If the subfloor or waterproofing package changes, identify who revises the elevations and module sizes. This keeps the stone quotation anchored to a defined interface instead of assuming that every floor area is ready to receive the same module or finish."
    ]
  },
  {
    heading: "Select material, finish, and sample by area",
    paragraphs: [
      "Name the preferred stone, thickness, finish, visible face, and any pattern or color direction by room or zone. Natural stone varies between pieces and lots. If lobby floors, corridors, and reception areas need a coordinated appearance, state which surfaces should be reviewed together and what variation the owner accepts. For a directional layout, note how the vein should run relative to the room and the principal path through it.",
      "Agree the sample or lot approval, finish reference, and responsible approver before the drawing is released. Ask how the selected material and finish affect cleaning and maintenance expectations for the intended use. Those expectations are project-specific; do not infer stain resistance, slip performance, or suitability from the stone name alone. Record any finish or sample changes and review how they affect the floor schedule, cost, or phase sequence."
    ]
  },
  {
    heading: "Confirm substrate and installation responsibility",
    paragraphs: [
      "Share available subfloor information, support or bedding details, movement joints, finished floor heights, and interfaces with doors or fixed equipment. Confirm substrate suitability, installation materials, structural requirements, and site methods with the responsible designer, engineer, and installer. The stone supplier can identify dimensions and material assumptions used in the quotation, but the approved project design governs the floor system and installation.",
      "Identify the point at which the finished site dimensions become final and who verifies them. If multiple trades affect the same floor level, clarify who owns the coordination and what happens when one scope changes. Mark any requirement for a site survey, substrate sign-off, or first-area review. These details prevent a nominal plan size from being mistaken for an approved installation condition."
    ]
  },
  {
    heading: "Control drawing revisions and checks",
    paragraphs: [
      "Keep the latest floor plan, module layout, finish schedule, and BOQ tied to one revision. For each change, note the affected floor, room, module group, quantity, material, or transition. Mark provisional areas separately from approved areas. If a mock-up or sample bay is required, state the question it should answer and who signs off before the rest of the package is released.",
      "Agree which items need checking before packing, such as module dimensions, cut-outs, edge completion, finish, labels, and visible face. Define what photos or records are requested and when they can be supplied. Inspection scope should match the order and the evidence actually provided. Do not imply a site level survey, slip test, structural approval, or certification unless it is specifically arranged and documented."
    ]
  },
  {
    heading: "Plan phase packing and receiving sequence",
    paragraphs: [
      "Group floor modules by building, floor, room, zone, or installation phase so a receiving team can locate them from the schedule. Use consistent piece marks and package labels. If a floor must be handed over in stages, show which areas should arrive together and where temporary storage is available. Share unloading, access, lift, delivery-hour, and on-site handling constraints before packing and freight are quoted.",
      "Confirm the destination and delivery term, then identify who arranges export packing, freight, insurance, customs clearance, unloading, and local movement. Fabrication and packing do not automatically include site installation. The quotation should state its actual supply scope and list open logistics decisions. Delivery timing and freight cost depend on the route, volume, carrier, and agreed terms, so they must be confirmed for the order rather than inferred from the floor area."
    ]
  }
];

const faqs = [
  { question: "What should I send for a stone flooring review?", answer: "Share the floor plan or drawings, approximate area, module dimensions, material direction, finish, destination, and any transition or edge details that affect the scope." },
  { question: "Can repeatable flooring modules be coordinated?", answer: "A drawing-led review can clarify module sizes, cut lists, layout direction, openings, and the fabrication details needed before a quotation is prepared." },
  { question: "Which projects can be considered?", answer: "Hotel corridors, lobbies, reception areas, commercial interiors, and other architectural applications can be reviewed case by case with material and delivery requirements confirmed first." }
];

const flooringProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Architectural Stone Flooring Tiles & Modules",
  description: "Precision-fabricated cut-to-size natural stone flooring tiles and modules from Yunfu, China for hotel lobbies, commercial reception areas, and luxury architectural interiors. Calibrated 18mm/20mm thickness (±1mm tolerance), ASTM C170 compressive strength (>100 MPa), honed/polished finishes, dry-lay inspection, and fumigated crate packaging.",
  category: "Building Materials > Natural Stone > Flooring Tiles & Modules",
  material: "Natural Stone (Marble, Granite, Limestone, Travertine)",
  brand: {
    "@type": "Brand",
    name: "Atelier Marble"
  },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Fabrication Scope", value: "Cut-to-Size CNC Module Sizing, Edge Profiling & Transition Detailing" },
    { "@type": "PropertyValue", name: "Standard Tile Thickness", value: "18mm, 20mm, 30mm (calibrated ±1mm tolerance)" },
    { "@type": "PropertyValue", name: "Available Finishes", value: "Honed, Polished, Brushed, Acid-Washed, Antique" },
    { "@type": "PropertyValue", name: "Vein Matching & Layout", value: "Vein-Flow Alignment, Repeat Module Sequencing & Dry-Lay Inspection" },
    { "@type": "PropertyValue", name: "Abrasion Resistance", value: "ASTM C241 / ASTM C1353 Ha >= 10 for commercial high-traffic durability" },
    { "@type": "PropertyValue", name: "Slip Resistance", value: "ANSI A326.3 DCOF >= 0.42 for wet interior walkways with honed / textured finishes" },
    { "@type": "PropertyValue", name: "Physical Specifications", value: "Bulk density ~2.7 g/cm³, absorption <0.20%, ASTM C170 compressive strength >100 MPa" },
    { "@type": "PropertyValue", name: "Export Packaging", value: "Fumigated Sturdy Wooden Crates with Protective Film Spacers" }
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    price: "0",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceType: "https://schema.org/InvoicePrice",
      unitText: "Project RFQ Quotation Based on Floor Plans & BOQ"
    },
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Atelier Marble",
      url: absoluteUrl("/")
    }
  }
};

const flooringPlanningHowToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Architectural Stone Flooring Procurement & Layout Planning Workflow",
  description: "An 8-stage architectural methodology for architects, interior designers, and commercial contractors coordinating cut-to-size natural stone floor modules from shop drawings to container crating.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Datum & Layout Direction Alignment",
      text: "Establish room datums, boundary interfaces, and grid orientations from architectural plans and finish schedules."
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Module, Border & Pattern Coordination",
      text: "Coordinate repeat tile module dimensions, joint lines, perimeter cuts, and vein-flow continuity across public spaces."
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Threshold, Stair & Transition Detailing",
      text: "Detail door openings, metal transition strips, stair nosings, risers, and landings with section elevations."
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Slope & Wet-Area Drainage Verification",
      text: "Verify floor levels, falls, and waterproofing interfaces with site engineering teams before module cutting."
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Material Lot Selection & Finish Specification",
      text: "Select stone lots and verify slip resistance (ANSI A326.3 DCOF >= 0.42) and abrasion index (ASTM C241 Ha >= 10) for high traffic."
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Substrate & Expansion Joint Demarcation",
      text: "Delineate subfloor bedding requirements and movement joints between the stone supply scope and site contractor."
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Drawing Revisions & Factory Dry-Lay Inspection",
      text: "Conduct workshop dry-lay inspections, photographic vein-matching verification, and calibrated thickness checks."
    },
    {
      "@type": "HowToStep",
      position: 8,
      name: "Phased Zone Packing & Ocean Container Crating",
      text: "Pack modules grouped by floor, room, or zone into fumigated ISPM 15 wooden crates with protective foam spacers."
    }
  ]
};

export default function ArchitecturalFlooringPage() {
  return (
    <CommercialLandingPage
      eyebrow="Architectural flooring"
      title="Stone flooring coordinated around the layout and the project."
      description="Review material character, module layout, dimensions, finish, cut-to-size details, inspection, and export packing for hotel and commercial flooring scopes."
      contentSectionTitle="Plan stone flooring from layout through delivery."
      contentSections={flooringSections}
      image="/materials/categories/hotel-projects.webp"
      imageAlt="Illustrative hotel-lobby floor concept with natural-stone surfaces; not a completed project."
      imageCaption="Illustrative lobby concept only. It does not document a completed Atelier Marble flooring installation."
      bullets={[
        "Review floor plans, module dimensions, repeat units, transitions, and openings",
        "Match material direction and finish to the intended interior application",
        "Coordinate cut lists and practical fabrication checkpoints before pricing",
        "Consider protective packing and export preparation with the finished scope"
      ]}
      details={["Hotel lobby and reception flooring", "Commercial interior stone floors", "Corridors and repeatable module programs", "Cut-to-size flooring with layout and packing coordination"]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying stone flooring."
      relatedLink={{ label: "Review wall cladding applications", href: "/architectural-stone/wall-cladding" }}
      purchaseInfo={{
        materialOptions: "Natural marble, granite, limestone, or travertine (ASTM C97 density ~2.7 g/cm³, absorption <0.20%, ASTM C170 compressive strength >100 MPa). Confirm the selected lot, finish, 18mm/20mm/30mm calibrated thickness (±1mm tolerance), and module sizing.",
        customCapability: "One-piece custom pieces and small MOQ commercial project scopes supported. Coordinate cut-to-size modules, borders, thresholds, stairs, repeat layouts, dry-lay vein matching, and piece-marked fumigated crate packing from current plans."
      }}
      additionalJsonLd={[flooringProductJsonLd, flooringPlanningHowToJsonLd]}
      metadata={metadata}
    />
  );
}

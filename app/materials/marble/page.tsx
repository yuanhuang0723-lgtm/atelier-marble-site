import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Cut-to-Size Marble Slabs & Fabrication",
  description:
    "Cut-to-size marble slabs and custom fabrication from Yunfu, China. Calacatta, Carrara, and Statuario with lot review, edge work, and export crating.",
  alternates: { canonical: absoluteUrl("/materials/marble") },
  openGraph: {
    title: "Cut-to-Size Marble Slabs & Fabrication",
    description:
      "Cut-to-size marble slabs and custom fabrication from Yunfu, China. Calacatta, Carrara, and Statuario with lot review, edge work, and export crating.",
    url: absoluteUrl("/materials/marble"),
    siteName,
    images: [{ url: absoluteUrl("/materials/hero/atelier-marble-luxury-hero.webp") }]
  }
};

const marbleContentSections = [
  {
    heading: "Confirm the marble variety, current lot, and approval sample",
    summary: "Match the trade name or reference photo to an actual slab lot before pricing is finalized.",
    paragraphs: [
      "Trade names such as Calacatta, Carrara, Statuario, Crema Marfil, or grey marble cover multiple quarries and blocks that differ in background tone, vein density, and movement. When sending a project inquiry, state whether the design team is working from an architectural rendering, a physical control sample, or a specific slab lot, and include the piece list, thickness, surface finish, and approximate quantities.",
      "If a preliminary budget is prepared before the actual lot is selected, keep the material line marked as provisional. Before fabrication is released, record who approves the current slab photos or physical samples and what range of background shade and veining is accepted across the order."
    ]
  },
  {
    heading: "Specify vein-cut, cross-cut, and bookmatching direction",
    summary: "Show how veining should run across adjoining vanity tops, wall panels, or floor modules.",
    paragraphs: [
      "Directional marbles change character depending on how the block is sawn and how pieces are oriented on the drawing. Mark whether the project requires vein-cut linear movement, cross-cut cloudier patterns, sequential end-matching along a corridor or countertop run, or bookmatched pairs for a feature wall or reception desk.",
      "Where visual continuity matters across adjoining pieces, indicate the primary viewing elevation and seam locations on the shop drawings. Dry-lay review photos and numbered layout diagrams can be arranged as part of the agreed quotation scope so the buyer and designer can check piece orientation before packing, while recognizing that natural variation still occurs from slab to slab."
    ]
  },
  {
    heading: "Match surface finish and care to the interior setting",
    summary: "Review polished, honed, or brushed finishes alongside acid sensitivity and maintenance plans.",
    paragraphs: [
      "Because marble is a calcium-carbonate stone, it reacts to acidic liquids such as citrus, wine, vinegar, and harsh cleaners differently from siliceous stones like granite or quartzite. Acid contact can dull a polished surface (etching) even when a penetrating sealer is applied to slow liquid absorption. Polished marble highlights color depth on feature walls and low-splash areas, whereas honed or brushed finishes help soften the appearance of everyday wear on bathroom vanity tops and interior floors.",
      "Project teams should review the intended room use, housekeeping chemicals, and sealing schedule before locking in a marble variety and finish. Independent care guidance from the Natural Stone Institute can help owners and operators align material expectations with practical maintenance."
    ]
  },
  {
    heading: "Review natural fissures, resin fill, and mesh backing",
    summary: "Clarify acceptable natural stone characteristics and slab reinforcement before cutting.",
    paragraphs: [
      "Many decorative marbles naturally contain calcite lines, small pores, or dry seams that receive factory resin fill or fiberglass mesh backing during slab processing. These characteristics are part of genuine natural marble rather than defects by default, but different projects set different visual thresholds for guest-facing surfaces.",
      "Ask how the proposed marble lot is finished on both the face and the back, and note where mesh backing, undermount sink brackets, mitered aprons, or wall anchors interact with adhesives and support framing. Confirming these details during drawing review avoids surprises when components arrive on site."
    ]
  },
  {
    heading: "Coordinate cut-outs, edge profiles, and room schedules",
    summary: "Link sink templates, edge details, and piece marks to a single drawing revision.",
    paragraphs: [
      "Cut-to-size marble packages often combine bathroom vanity tops, integrated or undermount sink openings, backsplashes, shower niches, wall cladding, and floor borders. Provide fixture templates or centerline dimensions for every basin, faucet, drain, and service opening, and distinguish finished stone dimensions from rough cabinet or framing dimensions.",
      "For multi-room hotel or residential developments, group pieces by room type, floor, or phase and keep standard, mirrored, and exception units clearly labeled on both the CAD layout and the BOQ schedule. Consistent piece marks allow any revision in one room type to be updated without confusing the rest of the production batch."
    ]
  },
  {
    heading: "Agree inspection records, crate grouping, and delivery terms",
    summary: "Define pre-packing checks, room-by-room crate labels, and shipping responsibilities in writing.",
    paragraphs: [
      "Before shipment, agree which checks and photo records apply to the order, such as overall piece dimensions, cut-out positions, edge completion, finish consistency, dry-lay sequence, and piece labels. Inspection scope follows the written quotation and approved drawings rather than unverified generic claims.",
      "Share destination requirements, unloading constraints, and preferred crate grouping so finished marble parts can be packed and labeled by room, floor, or installation sequence. Fabrication and export crating do not automatically include local site measuring or installation; confirm freight, customs, and delivery terms for the specific destination."
    ]
  }
];

const faqs = [
  { question: "What information is needed for cut-to-size marble fabrication?", answer: "Confirm the marble variety (Calacatta, Carrara, Statuario, etc.), current lot, required thickness, surface finish, edge details, cutouts, matching direction, quantities, and destination before production begins." },
  { question: "Can cut-to-size marble be specified for countertops and vanities?", answer: "Yes. Cut-to-size marble is widely fabricated for kitchen countertops, hotel bathroom vanity tops, wall cladding, and custom architectural features with CAD shop drawings and dry-lay vein matching." },
  { question: "Can I send reference drawings or sketches first?", answer: "Yes. An architectural CAD drawing, BOQ schedule, rough sketch, or reference photo can begin a practical cut-to-size marble review and quotation." }
];

export default function MarbleMaterialsPage() {
  return (
    <CommercialLandingPage
      eyebrow="Cut-to-size marble"
      heroCtaLabel="Send a Project Inquiry"
      primaryCtaLabel="Send a Project Inquiry"
      title="Cut-to-size marble slabs and custom fabrication for project decisions."
      description="Review cut-to-size marble character, application suitability, surface finishes, vein matching, and fabrication details with a project-focused stone supply team in Yunfu, China."
      overviewHeading="Coordinate marble lot selection, vein layout, and cut-to-size drawings."
      overviewDescription="Our own processing and partner coordination in Yunfu, China support your marble project scope. Start with a short brief or reference image; CAD drawings, BOQ schedules, and current lot confirmation can follow before quotation sign-off."
      image="/materials/hero/atelier-marble-luxury-hero.webp"
      imageAlt="Cut-to-size marble slabs, tiles, and custom architectural components for commercial and luxury residential projects"
      imageCaption="Design reference only. Confirm the specific marble variety, current slab lot, veining direction, and availability before approving production."
      scopeRows={[
        { component: "Hotel vanity tops and bathroom tops", inputs: "Room schedule, finished dimensions, basin and faucet templates, splash height, exposed edges, and quantity per room type." },
        { component: "Feature walls and bookmatched panels", inputs: "Elevation drawing, panel marks, vein or bookmatch direction, thickness, joint width, and fixing interface." },
        { component: "Cut-to-size flooring and borders", inputs: "Floor plan, module sizes, border transitions, surface finish (polished or honed), approximate area, and zone grouping." },
        { component: "Countertops, tables, and custom profiles", inputs: "Plan and section views, overhang or support condition, edge profile, finish, and destination packing requirements." }
      ]}
      contentSectionTitle="Review marble lot selection, vein direction, and fabrication details."
      contentSectionLayout="disclosure"
      contentSections={marbleContentSections}
      bullets={[
        "Compare marble varieties, current slab lots, background tone, and vein movement before pricing",
        "Define vein-cut, cross-cut, or bookmatched layout direction on elevations and shop drawings",
        "Coordinate polished, honed, or brushed finishes alongside cut-outs, edge profiles, and room marks",
        "Agree pre-packing photo checks, room-by-room crate labels, and delivery terms in the quotation"
      ]}
      details={["Cut-to-size marble countertops and islands", "Hotel vanity tops and bathroom packages", "Commercial interior wall cladding and flooring", "Custom cut-to-size marble components"]}
      specificationGroups={[{ title: "Material review", items: ["Stone name or reference image, current lot, slab or piece dimensions, thickness, and available quantity", "Surface finish, exposed edges, face direction, bookmatch or vein-matching expectation", "Natural variation, fissures, repairs, shade range, and sample approval requirements"] }, { title: "Application fit", items: ["Countertop, vanity, wall, floor, or custom component application", "Cut-outs, edge profiles, joints, support, and installation constraints", "Maintenance expectations and any project-specific performance requirements"] }]}
      faqs={faqs}
      faqTitle="Questions buyers ask before specifying marble."
      relatedLink={{ label: "See marble countertop applications", href: "/countertops/marble-countertops" }}
      relatedLinks={[
        { label: "Browse full natural stone materials catalog", href: "/materials" },
        { label: "Review marble countertop fabrication & cutouts", href: "/countertops/marble-countertops" },
        { label: "Review luxury hotel vanity top materials & packages", href: "/countertops/vanity-tops" },
        { label: "Review hotel vanity top drawing & component case", href: "/projects/hotel-vanity-tops-fabrication-case" },
        { label: "Coordinate architectural stone flooring layouts", href: "/architectural-stone/flooring" },
        { label: "Explore quartzite slabs for high-durability projects", href: "/materials/quartzite" },
        { label: "Review granite materials for commercial applications", href: "/materials/granite" },
        { label: "View workshop and packing references", href: "/factory#factory-evidence" },
        { label: "Natural Stone Institute: marble care and maintenance guidance", href: "https://www.naturalstoneinstitute.org/consumers/care/" }
      ]}
      purchaseInfo={{ materialOptions: "Natural marble. Confirm the current lot, thickness, finish, veining, and matching across pieces before approval.", customCapability: "Review marble suitability for countertops, vanities, lobby surfaces, and repeat project components." }}
      metadata={metadata}
    />
  );
}

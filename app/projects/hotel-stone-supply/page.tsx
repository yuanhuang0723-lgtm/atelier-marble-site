import type { Metadata } from "next";
import CommercialLandingPage from "../../../components/CommercialLandingPage";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Hotel Stone Supply & Fabrication in China",
  description:
    "Stone supply and fabrication for hotel vanity tops, lobby surfaces, countertops, and wall applications. Share drawings, quantities, material, and destination.",
  alternates: { canonical: absoluteUrl("/projects/hotel-stone-supply") },
  openGraph: {
    title: "Hotel Stone Supply in China",
    description:
      "Hotel and hospitality stone supply from Yunfu, China, including vanity tops, lobby stone, countertops, wall cladding, fabrication, and export packing.",
    url: absoluteUrl("/projects/hotel-stone-supply"),
    siteName,
    images: [{ url: absoluteUrl("/materials/categories/hotel-projects.webp") }]
  }
};

const hotelContentSections = [
  {
    heading: "Turn the hotel brief into reviewable stone packages",
    paragraphs: [
      "Group each item by room type, floor, and project phase. Start with the hotel location, the areas included in the request, the current drawing set, and the BOQ or quantity schedule. Coordinate guestroom, lobby, and public-area stone as separate packages. Give each scope a project identifier and state whether the quotation should cover supply, fabrication, packing, freight, or a combination. This lets procurement teams compare like-for-like packages and keeps exclusions visible.",
      "Keep hotel drawing revisions and component schedules linked, and tie each stone item to a room type, area, drawing number, and revision. If plans and schedules use different names, provide a simple cross-reference. Identify which details are confirmed and which remain under design review. A preliminary estimate may help with budgeting, but it should not be treated as a final order scope while dimensions, finish, quantity, or delivery responsibilities are still open."
    ]
  },
  {
    heading: "Group guestrooms by room type, floor, and project phase",
    paragraphs: [
      "Hotels often contain repeated layouts alongside suites, accessible rooms, corner conditions, and other exceptions. Do not assume all bathrooms share one size or one vanity configuration. List quantities by room type and floor, then mark mirrored layouts, left/right variations, double-basin rooms, special heights, and any rooms with different wall or cabinet conditions. The project team can then compare the stone schedule with the architectural and joinery plans before pricing repeated parts.",
      "If the project opens in phases or hands over floors in a set order, show the requested sequence in the schedule. Identify spare pieces and state whether they follow the same material and finish approval as the standard units. Room IDs and consistent piece marks can also be reused for packing labels and site receiving. Use room labels and packing groups that match the hotel's schedule. These identifiers organize a quote and delivery plan; they do not imply that a production slot or site installation date is already confirmed."
    ]
  },
  {
    heading: "Separate bathrooms from lobby and public-area scope",
    paragraphs: [
      "Guestroom bathrooms can include vanity tops, basins, splashbacks, thresholds, shelves, and matching wall details. Lobby and reception packages may involve counters, cladding, flooring, skirtings, columns, or feature surfaces. Restaurants, bars, and meeting areas can add different edge, opening, support, and cleaning requirements. List these items as distinct groups rather than combining every stone surface under one broad line called hotel marble.",
      "For each group, state its use, quantity, dimensions, visible faces, finish, interfaces with cabinets or other trades, and how pieces connect across a room or elevation. A reception desk may need different openings and support information from a bathroom vanity; a floor module has different layout and transition questions from a wall panel. Separating the scope helps reveal the correct drawings and approvals for each application."
    ]
  },
  {
    heading: "Coordinate hotel drawings and trade interfaces",
    paragraphs: [
      "Use the same drawing revision when coordinating stone with architecture, interior design, cabinetry, plumbing, electrical services, and the general contractor. Mark basin and faucet positions, service openings, cabinet dimensions, support conditions, joints, exposed edges, and adjoining finishes where they affect the stone. State the measurement units and identify whether dimensions are design sizes, cabinet sizes, or final site measurements. A room photograph can provide context, but it does not replace dimensioned plans and elevations.",
      "Show who owns each interface decision and who signs off the final drawing. If cabinetry or walls are not complete, identify the event that fixes the dimensions and the person responsible for confirming them. Where different trades issue drawings at different times, keep the revision references visible in the BOQ and room schedule. This gives the buyer a clear way to spot mismatches before a quote is treated as approved scope."
    ]
  },
  {
    heading: "Plan material approval across repeated rooms",
    paragraphs: [
      "Natural stone varies between pieces and lots. If the hotel needs a coordinated appearance across rooms or public areas, explain which surfaces must be reviewed together, what variation is acceptable, and who approves the material. A name, digital image, or sample alone may not represent every piece in a later order. For bookmatched or visually connected areas, mark the relationship between slabs and components on the drawings and quantity schedule.",
      "Confirm the selected lot, thickness, finish, visible face, and any sample or mock-up decision before the production drawing is released. Record the approval date and the material reference so the room batches can be traced to the agreed direction. If the design changes after approval, identify which areas and quantities are affected. The supplier can then confirm whether the change is feasible and how it affects the quotation or schedule; matching should not be promised without a project-specific review."
    ]
  },
  {
    heading: "Control revisions, approvals, and inspection scope",
    paragraphs: [
      "Maintain one current drawing revision for each package and note who approved it. When a change affects size, opening position, quantity, finish, or room assignment, record the change against the relevant piece marks and BOQ lines. Keep provisional items separate from approved items. A dated revision list makes it easier for the hotel owner, procurement team, designer, and supplier to understand which decision controls the quote and what still needs resolution.",
      "Agree what should be checked before packing, such as dimensions, opening locations, edge completion, finish, labels, and visible surface character. State which records or photographs are required and when they should be provided. Inspection scope depends on the written order and the evidence the parties agree to supply. Do not infer that a particular certification, test, or quality result exists if it has not been documented for the project."
    ]
  },
  {
    heading: "Plan packing and delivery around hotel sequencing",
    paragraphs: [
      "Stone pieces may need different protection depending on their size, shape, cut-outs, edges, and visible faces. State whether packages should be grouped by room type, floor, building, or installation phase. Include piece marks and labels that the receiving team can match to the room schedule. If the site has limited storage, restricted delivery hours, lift limits, or a required unloading order, share those constraints before packing and freight are quoted.",
      "Name the destination and delivery term, then confirm who arranges export packing, freight, insurance, customs clearance, unloading, and local transport. Fabrication and packing do not automatically include site measuring or installation. If pieces must arrive before a floor or room handover, the buyer and contractor should confirm the receiving plan and timing in writing. Final logistics depend on the route, shipment details, carrier, and agreed responsibilities; this page does not promise a fixed delivery time or freight cost."
    ]
  }
];

export default function HotelStoneSupplyPage() {
  return (
    <CommercialLandingPage
      eyebrow="Hotel project supply"
      title="Hotel stone supply and fabrication for hospitality projects."
      description="For developers, procurement teams, contractors, and designers who need coordinated material review, fabrication, QC, packing, and delivery planning."
      image="/materials/categories/hotel-projects.webp"
      imageAlt="Illustrative hotel-lobby design concept with stone wall panels, flooring, and a reception area."
      imageCaption="Illustrative hotel-lobby concept only. It does not document a completed Atelier Marble hotel project or a verified supply scope."
      contentSectionTitle="Coordinate hotel scope by room type, area, and phase."
      contentSections={hotelContentSections}
      bullets={[
        "Review project scope, drawings, quantities, and destination before pricing",
        "Coordinate vanity tops, countertops, lobby surfaces, and custom stone elements",
        "Keep material, fabrication, QC, and packing decisions connected",
        "Use a structured inquiry to reduce avoidable quotation gaps"
      ]}
      details={[
        "Hotel bathroom and vanity packages",
        "Lobby, reception, and public-area stone",
        "Commercial countertops and wall applications",
        "Custom stone elements for hospitality interiors"
      ]}
      specificationGroups={[
        {
          title: "Room and public-area scope",
          items: [
            "Separate guestroom vanity and bathroom quantities from lobby, reception, restaurant, and public-area items",
            "List room types, piece labels, quantities, spare pieces, and installation or delivery sequence",
            "Identify which items are stone tops, wall panels, flooring, thresholds, or custom elements"
          ]
        },
        {
          title: "Drawing and approval control",
          items: [
            "Send the latest drawing revision, BOQ, dimensions, material references, and marked-up questions",
            "Confirm sample or lot approval, finish, edge, cut-outs, visible faces, and acceptable natural variation",
            "Record open decisions before production planning rather than treating estimates as approvals"
          ]
        },
        {
          title: "Quality and packing",
          items: [
            "Agree inspection points for dimensions, finish, cut-outs, labels, grouping, and visible surface character",
            "Confirm protective packing, crate or room grouping, labels, loading requirements, and destination",
            "Align delivery term and timing after scope, production sequence, and packing requirements are understood"
          ]
        },
        {
          title: "Quotation inputs",
          items: [
            "Project location and destination market",
            "Drawings or rough dimensions with quantities",
            "Material direction and finish expectations",
            "Target timing, budget range, and required quotation format"
          ]
        }
      ]}
      relatedLink={{ label: "Review hotel bathroom countertops and vanity tops", href: "/countertops/vanity-tops" }}
      relatedLinks={[
        { label: "View Canada shower niches reference", href: "/projects/canada-shower-niches-2025" },
        { label: "Review hotel stone pricing", href: "/guides/hotel-stone-pricing" },
        { label: "Review export packing standards", href: "/guides/export-packing-standards" }
      ]}
      faqTitle="Hotel stone supply details, answered clearly."
      faqs={[
        {
          question: "What hotel stone work can be supplied?",
          answer: "The scope can include hotel bathroom and vanity packages, lobby and reception stone, commercial countertops, wall applications, and custom hospitality elements."
        },
        {
          question: "Can a hotel project be reviewed from drawings or a BOQ?",
          answer: "Yes. Project drawings, BOQ files, quantities, dimensions, material direction, and destination information help establish a practical review and quotation path."
        },
        {
          question: "How should rooms be grouped for a quotation?",
          answer: "List quantities by room type, floor, phase, and exception, using consistent piece marks that link the schedule to the current drawing revision."
        },
        {
          question: "Can a hotel order be delivered by floor or project phase?",
          answer: "Share the requested sequence, room labels, receiving constraints, destination, and delivery responsibilities so the proposed packing and logistics scope can be reviewed."
        },
        {
          question: "What should be approved before a repeated stone package is released?",
          answer: "Confirm the drawing revision, material lot or sample, visible face, finish, dimensions, quantities, openings, piece marks, and any exceptions that differ by room type."
        }
      ]}
      purchaseInfo={{
        materialOptions: "Marble, granite, quartzite, or approved project stone. Confirm current lots and room-to-room matching.",
        customCapability: "Review guestroom vanities, lobby and public-area surfaces, countertops, wall and floor stone, and repeat schedules."
      }}
      metadata={metadata}
    />
  );
}

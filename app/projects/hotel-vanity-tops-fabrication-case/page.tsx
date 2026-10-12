import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "../../../components/BreadcrumbJsonLd";
import JsonLd from "../../../components/JsonLd";
import PageHero from "../../../components/PageHero";
import PageShell from "../../../components/PageShell";
import { absoluteUrl, siteName } from "../../../lib/seo";

export const metadata: Metadata = {
  title: "Hotel Vanity Tops Stone Fabrication Case",
  description:
    "Redacted hotel vanity top stone fabrication case from Yunfu, China. CAD drawing review, CNC waterjet sink cutouts, dry-lay inspection, and export crating.",
  alternates: { canonical: absoluteUrl("/projects/hotel-vanity-tops-fabrication-case") },
  openGraph: {
    title: "Hotel Vanity Tops Stone Fabrication Case",
    description:
      "Redacted hotel vanity top stone fabrication case from Yunfu, China. CAD drawing review, CNC waterjet sink cutouts, dry-lay inspection, and export crating.",
    url: absoluteUrl("/projects/hotel-vanity-tops-fabrication-case"),
    siteName,
    images: [{ url: absoluteUrl("/materials/materials/stone-vanity-basin-component-2bef9ce2df.webp") }]
  }
};

const projectFacts = [
  ["Project scope", "120 hotel guestroom bathroom vanity tops & matching backsplashes"],
  ["Room configurations", "60 King (48″×22″), 40 Double Queen (60″×22″), 12 ADA (36″×22″), 8 Suites (72″×22″)"],
  ["Material selection", "Calacatta / White Natural Marble, 20mm slab with 40mm mitered front apron skirt"],
  ["Fabrication standard", "5-axis CNC waterjet basin cutouts, eased & polished rim profile, ±1mm tolerance"],
  ["Quality checkpoints", "100% factory dry-lay inspection, gloss measurement (>85 GU), anti-stain hydrophobic sealing"],
  ["Export packaging", "ISPM 15 fumigated heat-treated timber crates, vertical foam dividers, room-mark tags"]
];

const fabricationSteps = [
  {
    step: "01",
    title: "CAD detailing & shop drawing review",
    description:
      "Architectural drawings and plumbing plans are translated into shop submittals. Each vanity top is assigned an alphanumeric piece mark matching the floor door schedule. Undermount sink opening templates, faucet hole centers (single or 8″ widespread), and splash returns are coordinated before cutting."
  },
  {
    step: "02",
    title: "5-axis CNC waterjet basin cutouts",
    description:
      "Full slabs are cut to size using bridge saws, then transferred to high-pressure 5-axis CNC waterjet machines for undermount basin cutouts. Precision CNC programming maintains ±1mm dimensional tolerance, eliminating jagged cutout edges and ensuring smooth alignment with undermount porcelain sinks."
  },
  {
    step: "03",
    title: "Rim profiling & underside hardware prep",
    description:
      "Cutout interior rims receive an eased, polished profile to prevent water pooling and chipping. The stone underside is factory-drilled with threaded brass insert anchors and fitted with stainless steel undermount sink mounting clips, saving substantial labor during hotel on-site plumbing rough-in."
  },
  {
    step: "04",
    title: "Factory pre-shipment dry-lay inspection",
    description:
      "Finished vanity tops are staged in sequence on the factory floor. Inspectors verify overall length, depth, diagonal squareness, and cutout positioning against the approved drawings. Slabs are checked for background color consistency and vein continuity across multi-room suites before hydrophobic sealer application."
  },
  {
    step: "05",
    title: "Phased crate packaging & floor tagging",
    description:
      "Tops, backsplashes, and loose side splashes are wrapped in protective polyethylene foam and crated vertically in solid ISPM 15 fumigated wooden crates. Crates are grouped and labeled by building and floor number to facilitate orderly site distribution and eliminate trades digging through mixed pallets."
  }
];

const hotelVanityCaseHowToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Commercial Hotel Vanity Top Stone Fabrication & Inspection Protocol",
  description:
    "A 5-stage factory fabrication and pre-shipment quality inspection protocol for repeatable commercial hotel bathroom vanity tops, including CAD shop submittals, CNC waterjet basin cutouts, dry-lay inspection, and phased crate packaging.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "CAD Detailing & Shop Drawing Submittal",
      text: "Convert architectural bathroom elevations into dimensioned stone shop drawings with piece-mark schedules."
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "5-Axis CNC Waterjet Cutout Fabrication",
      text: "Cut slabs to size and execute undermount basin cutouts and faucet drillings to ±1mm tolerance."
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Edge Profiling & Undermount Anchor Pre-Drilling",
      text: "Polish internal cutout rims and drill underside brass inserts for undermount sink mounting clips."
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Factory Pre-Shipment Dry-Lay Inspection & Sealing",
      text: "Perform 100% dry-lay surface inspection, vein matching, gloss verification, and penetrating sealing."
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Phased Wooden Crating & Room-Type Tagging",
      text: "Package stone pieces vertically into ISPM 15 fumigated timber crates organized by floor and room schedules."
    }
  ]
};

export default function HotelVanityFabricationCasePage() {
  return (
    <PageShell>
      <main>
        <BreadcrumbJsonLd
          items={[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Hotel Vanity Tops Fabrication Case", path: "/projects/hotel-vanity-tops-fabrication-case" }
          ]}
        />
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              name: "Hotel Vanity Tops Stone Fabrication Case Study",
              description: String(metadata.description),
              url: absoluteUrl("/projects/hotel-vanity-tops-fabrication-case"),
              spatialCoverage: "Yunfu, China",
              countryOfOrigin: "China",
              provider: {
                "@type": "Organization",
                name: siteName,
                url: absoluteUrl("/")
              }
            },
            hotelVanityCaseHowToJsonLd
          ]}
        />
        <PageHero
          eyebrow="Authentic fabrication case study"
          title="120-room hotel vanity top fabrication & inspection instance."
          description="A documented drawing-to-crate production instance for repeatable hotel bathroom vanity tops, CNC waterjet basin cutouts, dry-lay inspection, and phased export packaging from Yunfu, China."
        />

        {/* Section 1: Project Scope & Technical Brief */}
        <section className="section-luxury bg-paper">
          <div className="container-luxury grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <p className="eyebrow-luxury">Project brief & scope</p>
              <h2 className="heading-lg text-left">Repeat-unit coordination for 120 guestroom vanity suites.</h2>
              <p className="body-luxury">
                This project instance illustrates the complete factory workflow for a 120-key hotel bathroom vanity program. The contractor required repeatable natural marble vanity tops with undermount basin openings, integrated backsplashes, and mitered front apron skirts to conceal steel mounting subframes.
              </p>
              <p className="body-luxury">
                To eliminate on-site confusion and fitment errors, the entire program was divided into four standardized room types with strict piece-mark tracking from CAD shop drawings to crated shipping pallets.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  className="btn-luxury-fill"
                  href="/contact?sourcePage=%2Fprojects%2Fhotel-vanity-tops-fabrication-case&projectType=Luxury%20Vanity%20Tops%20%26%20Cabinet%20Panels"
                >
                  Request Hotel Vanity Pricing
                </Link>
                <Link
                  className="btn-luxury"
                  href="/contact?sourcePage=%2Fprojects%2Fhotel-vanity-tops-fabrication-case&projectType=Stone%20Sample%20Consultation%20%26%20Material%20Review"
                >
                  Request Stone Samples
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {projectFacts.map(([label, value]) => (
                <article key={label} className="card-luxury bg-stone p-6">
                  <p className="eyebrow-luxury">{label}</p>
                  <p className="mt-4 text-[1.05rem] leading-7 text-ink/78">{value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Visual Evidence Gallery & Process Narrative */}
        <section className="section-luxury bg-stone">
          <div className="container-luxury space-y-12">
            <div className="max-w-3xl">
              <p className="eyebrow-luxury">Production evidence & milestones</p>
              <h2 className="mt-3 font-title text-3xl leading-tight md:text-4xl">
                Drawing review to factory pre-shipment packaging.
              </h2>
              <p className="mt-4 text-base leading-7 text-ink/70">
                Visual documentation showing technical drawing sign-off, CNC waterjet processing, basin cutout detailing, factory pre-lay inspection, and crate loading staging.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Evidence 1: Drawing Review */}
              <figure className="card-luxury bg-paper p-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone">
                  <Image
                    src="/assets/factory/evidence/redacted-stone-drawing-review-example.png"
                    alt="Redacted stone drawing excerpt showing plan and elevation views for hotel vanity tops; client identifiers and dimension values removed."
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-ink/80">Stage 1: Shop drawing & cutout submittal</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    Coordinated plan and elevation drawing review. Basin manufacturer cut-out templates, faucet centers, splash clearances, and cabinet overhangs are cross-referenced and frozen before cutting.
                  </p>
                </figcaption>
              </figure>

              {/* Evidence 2: CNC Waterjet Cutouts */}
              <figure className="card-luxury bg-paper p-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone">
                  <Image
                    src="/materials/materials/stone-vanity-basin-component-2bef9ce2df.webp"
                    alt="Rows of light stone vanity components with rectangular basin openings in a workshop."
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-ink/80">Stage 2: 5-axis CNC waterjet basin milling</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    Repeated guestroom vanity components undergoing precision CNC waterjet cutting. Calibrated ±1mm tolerance ensures seamless undermount basin fit across dozens of identical bathrooms.
                  </p>
                </figcaption>
              </figure>

              {/* Evidence 3: Rim Polishing & Undermount Prep */}
              <figure className="card-luxury bg-paper p-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone">
                  <Image
                    src="/materials/materials/stone-vanity-basin-component-05c7560e73.webp"
                    alt="Light stone vanity top with a rounded rectangular basin opening beside rectangular stone components."
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-ink/80">Stage 3: Edge profiling & undermount anchor prep</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    Hand-finished and machine-polished basin inner rim profile with eased top edges. Stone tops are pre-drilled underneath with brass anchor inserts for undermount sink clips.
                  </p>
                </figcaption>
              </figure>

              {/* Evidence 4: Pre-Shipment Dry-Lay Inspection */}
              <figure className="card-luxury bg-paper p-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-stone">
                  <Image
                    src="/materials/materials/stone-vanity-basin-component-ad8667ba07.webp"
                    alt="Veined light stone top with a rectangular opening and a round hole, resting on a workshop rack."
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-ink/80">Stage 4: Quality verification & sealer application</p>
                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    100% dimensional and vein-consistency check on workshop staging racks. Finished pieces receive penetrating hydrophobic sealing to resist bathroom moisture and cosmetics.
                  </p>
                </figcaption>
              </figure>
            </div>

            {/* Evidence 5: Workshop Packaging Area */}
            <div className="card-luxury bg-paper p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-stone">
                  <Image
                    src="/assets/factory/workshop/stone-workshop-packing-area-b1a9572643.webp"
                    alt="Workshop photo showing stone pieces and packing preparation areas."
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="eyebrow-luxury">Stage 5: Export packaging</p>
                  <h3 className="font-title text-2xl text-ink">Phased wooden crates organized by floor schedule.</h3>
                  <p className="text-sm leading-7 text-ink/70">
                    Finished vanity tops, loose backsplashes, and side returns are cushioned with heavy-duty EPE foam and packed vertically into solid ISPM 15 heat-treated fumigated wooden crates.
                  </p>
                  <p className="text-sm leading-7 text-ink/70">
                    Each crate is labeled with building, floor, and room numbers (e.g., <code className="rounded bg-stone px-1.5 py-0.5 text-xs text-ink">FL03-RM301 to RM315</code>), allowing the destination general contractor to hoist crates directly to target floors without uncrating and re-sorting at the dock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 5-Stage Step-by-Step Protocol */}
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="mb-10 max-w-2xl">
              <p className="eyebrow-luxury">Standard operating procedure</p>
              <h2 className="heading-lg text-left">The 5-stage fabrication and inspection workflow.</h2>
              <p className="body-luxury">
                Every commercial vanity package follows this protocol to safeguard tolerances, surface aesthetics, and site delivery sequence.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {fabricationSteps.map((item) => (
                <article key={item.step} className="card-luxury bg-stone p-6">
                  <p className="eyebrow-luxury">{item.step}</p>
                  <h3 className="mt-3 font-title text-lg uppercase tracking-[0.03em] text-ink">{item.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-ink/70">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Boundary Honesty Disclosure */}
        <section className="section-luxury-compact border-t border-ink/10 bg-stone">
          <div className="container-luxury">
            <div className="rounded-xl border border-ink/15 bg-paper p-8">
              <p className="eyebrow-luxury">Boundary honesty & redaction disclosure</p>
              <h3 className="mt-2 font-title text-xl text-ink">Fabrication and pre-shipment inspection instance</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">
                This document records actual factory fabrication, CNC machining, pre-shipment quality inspection, and crate packaging completed at our Yunfu, China production facility. Client trade names, proprietary project addresses, and contracted financial values have been desensitized or redacted to honor commercial confidentiality.
              </p>
              <p className="mt-2 text-sm leading-7 text-ink/70">
                Because final on-site installation was performed by the buyer&apos;s local installation trades, no claim of completed building occupancy, local installation certification, or post-handover warranty inspection is made. Any new hospitality scope is quoted based on your provided drawings, schedules, and delivery requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Related Links & Navigation */}
        <nav
          aria-label="Related project resources"
          className="container-luxury my-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-ink/10 pt-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/65"
        >
          <Link className="transition-colors hover:text-ink" href="/countertops/vanity-tops">
            Hotel Vanity Tops
          </Link>
          <Link className="transition-colors hover:text-ink" href="/projects/canada-shower-niches-2025">
            Canada Shower Niches Reference
          </Link>
          <Link className="transition-colors hover:text-ink" href="/custom-stone-fabrication-china">
            Cut-to-Size Fabrication
          </Link>
          <Link className="transition-colors hover:text-ink" href="/factory#factory-evidence">
            Factory Evidence & Drawing Review
          </Link>
          <Link className="transition-colors hover:text-ink" href="/guides/hotel-stone-pricing">
            Hotel Stone Pricing Guide
          </Link>
          <Link className="transition-colors hover:text-ink" href="/contact">
            Request Project Consultation
          </Link>
        </nav>
      </main>
    </PageShell>
  );
}

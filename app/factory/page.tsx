import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";
import JsonLd from "../../components/JsonLd";
import PageHero from "../../components/PageHero";
import PageShell from "../../components/PageShell";
import ProjectProcurementInfo from "../../components/ProjectProcurementInfo";
import WorkshopVideoCard from "../../components/WorkshopVideoCard";
import { workshopVideos } from "../../data/workshop-videos";
import { getAssets } from "../../lib/assets";
import { getPublicImageEntries } from "../../lib/public-image-metadata";
import { absoluteUrl, siteName } from "../../lib/seo";

const workshopPhotos = getPublicImageEntries("/assets/factory/local/");
const packingPhotos = getAssets("hotel-project").filter((asset) => asset.sourceFolder === "发货");
const factoryEvidencePhotos = [
  {
    src: "/assets/factory/evidence/redacted-stone-drawing-review-example.png",
    title: "Redacted drawing example",
    alt: "Redacted stone drawing excerpt showing plan and elevation views; project identifiers and dimension values removed.",
    caption: "Company/project identifiers, title-block text, dimension values, and searchable text have been removed. This is a drawing-review example, not a completed project or QC record.",
    group: "Drawing review"
  },
  ...workshopPhotos.map((photo) => ({
    src: photo.src,
    title: photo.title,
    alt: photo.alt,
    caption: "User-provided workshop photo; no project or shipment destination is identified.",
    group: "Workshop photo"
  })),
  ...packingPhotos.map((asset) => ({
    src: asset.src,
    title: asset.title,
    alt: asset.alt,
    caption: "Packing-preparation reference; the image does not document a completed shipment.",
    group: "Packing preparation"
  })),
  {
    src: "/videos/posters/atelier-marble-workshop-clip-07.jpg",
    title: "Stone cutting in progress",
    alt: "A cutting head over a dark stone workpiece; the specific machine model is not identified.",
    caption: "Still from a workshop video. It does not identify a CNC model or a finished QC result.",
    group: "Cutting footage"
  }
];

export const metadata: Metadata = {
  title: "Stone Fabrication Factory in China",
  description:
    "Selected workshop videos and buyer guidance for reviewing scope, drawings, materials, inspection points, packing, and destination requirements.",
  alternates: { canonical: absoluteUrl("/factory") },
  openGraph: {
    title: "Stone Fabrication Factory in China",
    description:
      "Selected workshop videos and buyer guidance for reviewing scope, drawings, materials, inspection points, packing, and destination requirements.",
    url: absoluteUrl("/factory"),
    siteName,
  }
};

const faqs = [
  {
    question: "What stone fabrication work can be reviewed?",
    answer: "The workshop review can cover cutting, shaping, edge finishing, surface work, inspection, packing, and export preparation for countertop, hotel, architectural, furniture, and custom stone scopes."
  },
  {
    question: "Can a factory quotation start from CAD or a BOQ?",
    answer: "Yes. CAD drawings, BOQ files, dimensions, quantities, material direction, and destination information can be used to establish a practical review before pricing."
  },
  {
    question: "How are quality and packing discussed before shipment?",
    answer: "Dimensions, finish, visible surface character, component grouping, protective packing, and loading requirements should be aligned with the project scope before export preparation."
  }
];

export default function FactoryPage() {
  return (
    <PageShell>
      <main>
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Factory Capability", path: "/factory" }]} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }} />
        <PageHero
          eyebrow="Workshop video gallery"
          title="Stone fabrication factory in China."
          description="Review drawings, material requirements, fabrication scope, inspection points, and export preparation against the needs of your stone project."
        />
        <section className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <h2 className="heading-lg section-intro__title">A documented review from drawings to delivery.</h2>
              <p className="body-luxury section-intro__copy">
                Before production, confirm the material lot, approved dimensions and finish, inspection records, protective packing, and delivery terms for the specific order.
              </p>
            </div>
            <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Scope review", "Drawings, quantities, material direction, and destination are checked before a quotation path is proposed."],
                ["02", "Fabrication", "Cutting, shaping, edge finishing, and surface work are coordinated around the approved scope."],
                ["03", "Quality review", "Dimensions, finish, visible surface character, and project details are reviewed before packing."],
                    ["04", "Export preparation", "Finished pieces are protected, grouped, and prepared against the agreed delivery and labeling requirements."]
              ].map(([number, title, copy]) => (
                <article key={number} className="card-luxury bg-stone p-6">
                  <p className="eyebrow-luxury">{number}</p>
                  <h2 className="mt-4 text-left font-title text-[1.28rem] font-medium uppercase leading-tight tracking-[0.04em] text-ink">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-ink/65">{copy}</p>
                </article>
              ))}
            </div>
            <article className="mb-10 grid gap-6 rounded-[14px] border border-ink/10 bg-stone p-7 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="eyebrow-luxury">Selected project reference</p>
                <h2 className="mt-3 text-left font-title text-[1.8rem] font-medium uppercase leading-tight tracking-[0.03em] text-ink">Canada · 2025</h2>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-ink/55">Several thousand custom stone shower niches</p>
              </div>
              <div className="grid gap-3 text-sm leading-7 text-ink/68 md:grid-cols-3">
                <p><strong className="block text-ink">Drawing work</strong>CAD detailing, drawing breakdown, shop drawings, and cut lists.</p>
                <p><strong className="block text-ink">Production</strong>Repeat-unit coordination across a multi-batch fabrication program.</p>
                <p><strong className="block text-ink">Status</strong>Presented as a project reference from the Atelier Marble capability catalogue.</p>
              </div>
            </article>
            <div className="rounded-[14px] border border-ink/10 bg-stone p-7 text-sm leading-7 text-ink/70">
              Ask to review project-specific factory photographs, process details, inspection records, and packing evidence before confirming a production scope. General workshop illustrations or finished-product images do not establish a particular machine, process, or quality result.
            </div>
          </div>
          <div className="container-luxury mt-16">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Buyer questions</p>
              <h2 className="heading-lg section-intro__title">Factory capability details, answered clearly.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="card-luxury bg-stone p-6">
                  <h2 className="font-title text-[1.05rem] font-semibold uppercase leading-[1.15] tracking-[0.04em] text-ink">{faq.question}</h2>
                  <p className="mt-4 text-[0.94rem] leading-7 text-ink/68">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="container-luxury mt-16">
            <Link className="text-cta-luxury" href="/contact">
              Check Availability
            </Link>
            <Link className="text-cta-luxury ml-8" href="/projects">
              View Project References
            </Link>
            <nav aria-label="Related fabrication services" className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55">
              <Link className="transition-colors hover:text-ink" href="/countertops">Countertops &amp; Vanity</Link>
              <Link className="transition-colors hover:text-ink" href="/projects/hotel-stone-supply">Hotel Stone Supply</Link>
              <Link className="transition-colors hover:text-ink" href="/architectural-stone">Architectural Stone</Link>
              <Link className="transition-colors hover:text-ink" href="/custom-stone-fabrication-china">Custom Stone</Link>
            </nav>
          </div>
        </section>
        <section id="factory-evidence" aria-labelledby="factory-evidence-title" className="section-luxury bg-paper">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Redacted drawing, workshop photos, and packing references</p>
              <h2 id="factory-evidence-title" className="heading-lg section-intro__title">Review drawings, workshop activity, and packing preparation.</h2>
              <p className="body-luxury max-w-3xl">
                The plan and elevation excerpt is redacted for public viewing. Identifying text and dimension values are removed;
                the drawing is shown as a scope-review example, not as proof of completed production or inspection.
                Workshop and packing photos also do not identify a named shipment, machine model, or independent QC result.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {factoryEvidencePhotos.map((photo) => (
                <figure key={photo.src} className="card-luxury overflow-hidden bg-white">
                  <div className="media-luxury aspect-[4/3] bg-stone">
                    <img className="block h-full w-full object-cover" src={photo.src} alt={photo.alt} title={photo.title} loading="lazy" decoding="async" />
                  </div>
                  <figcaption className="grid gap-2 p-5">
                    <p className="eyebrow-luxury">{photo.group}</p>
                    <h3 className="font-title text-[1.05rem] font-medium uppercase leading-tight tracking-[0.04em] text-ink">{photo.title}</h3>
                    <p className="text-sm leading-6 text-ink/65">{photo.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              <article className="card-luxury bg-stone p-6">
                <p className="eyebrow-luxury">CAD/BOQ drawing review</p>
                <h3 className="mt-3 font-title text-[1.1rem] font-semibold uppercase text-ink">A drawing-led project reference</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">The Canada shower-niche reference describes CAD detailing, shop drawings, cut lists, and repeat-unit coordination.</p>
                <Link className="text-cta-luxury mt-4 inline-flex" href="/projects/canada-shower-niches-2025">View the drawing-led case reference</Link>
              </article>
              <article className="card-luxury bg-stone p-6">
                <p className="eyebrow-luxury">QC checkpoints</p>
                <h3 className="mt-3 font-title text-[1.1rem] font-semibold uppercase text-ink">Agree the checks for each order</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">Confirm dimensions, openings, edge and finish, visible surfaces, labels, packing, and which inspection records are required before production.</p>
              </article>
              <article className="card-luxury bg-stone p-6">
                <p className="eyebrow-luxury">Machine details</p>
                <h3 className="mt-3 font-title text-[1.1rem] font-semibold uppercase text-ink">Confirm CNC requirements by scope</h3>
                <p className="mt-3 text-sm leading-7 text-ink/68">The available cutting clip does not identify its machine model. Share the drawing and ask which machine and process are suitable for the part.</p>
                <Link className="text-cta-luxury mt-4 inline-flex" href="#workshop-videos">Review workshop footage</Link>
              </article>
            </div>
          </div>
        </section>
        <section id="workshop-videos" aria-labelledby="workshop-videos-title" className="section-luxury scroll-mt-24 bg-stone">
          <div className="container-luxury">
            <div className="section-intro section-intro--center">
              <p className="eyebrow-luxury">Workshop video library</p>
              <h2 id="workshop-videos-title" className="heading-lg section-intro__title">{workshopVideos.length} short views of stone work and components.</h2>
              <p className="body-luxury section-intro__copy">
                Play any clip when you choose. Videos load only when played; the original camera framing is preserved.
                Footage shows selected moments and does not by itself establish machine specifications or inspection results.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {workshopVideos.map((video) => <WorkshopVideoCard key={video.id} video={video} />)}
            </div>
          </div>
        </section>
        <ProjectProcurementInfo
          materialOptions="Marble, granite, quartzite, and other approved stone. Confirm the current lot, thickness, finish, and matching before quotation."
          customCapability="Review CAD/BOQ scope, cut-to-size details, edge finishing, surface work, inspection checkpoints, and export packing."
        />
      </main>
    </PageShell>
  );
}

import Link from "next/link";
import { cadProposalEvidence } from "../data/cad-proposal-evidence";

export default function CadProposalEvidence({ sourcePage }: { sourcePage: string }) {
  const home = sourcePage === "/";
  const sectionId = home ? "home-cad-case" : "cad-proposal-case";
  const contactHref = `/contact?sourcePage=${encodeURIComponent(sourcePage)}&projectType=${encodeURIComponent("Commercial Stone Projects")}`;

  return (
    <section id={sectionId} aria-labelledby={`${sectionId}-title`} className="section-luxury scroll-mt-28 bg-paper">
      <div className="container-luxury">
        <div className="max-w-4xl">
          <p className="eyebrow-luxury">CAD take-off &amp; client feedback</p>
          <h2 id={`${sectionId}-title`} className="heading-lg !mx-0 mt-4 !max-w-[28ch] text-left !text-3xl md:!text-4xl">CAD take-off, with client feedback.</h2>
          <p className="body-luxury mt-5">A countertop proposal brings together marked CAD excerpts, component dimensions, material references, edge details, quantities, and processing notes. The client acknowledged the engineering work and expressed willingness to move to the next stage.</p>
        </div>

        <div className="mt-8 grid min-w-0 gap-7 lg:grid-cols-[1.35fr_0.85fr] lg:items-start lg:gap-10">
          <figure className="min-w-0 overflow-hidden rounded-xl border border-ink/15 bg-white p-2 md:p-3">
            <a href={cadProposalEvidence.fullSizeImage} target="_blank" rel="noopener noreferrer" className="block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze" aria-label="Open the full-size CAD take-off and client feedback image">
              <img src={cadProposalEvidence.image} width={cadProposalEvidence.width} height={cadProposalEvidence.height} alt={cadProposalEvidence.alt} className="block h-auto w-full rounded-lg" loading="lazy" decoding="async" />
            </a>
            <figcaption className="px-2 pb-2 pt-4 text-xs leading-6 text-ink/65">Company and project names are removed. Technical details and proposal figures are retained. <a href={cadProposalEvidence.fullSizeImage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Open the full-size image.</a></figcaption>
          </figure>

          <div className="min-w-0 rounded-xl border border-ink/10 bg-stone p-6 md:p-8">
            <p className="eyebrow-luxury">Client feedback on the technical proposal</p>
            <blockquote className="mt-5 border-l-2 border-bronze pl-5 font-title text-xl leading-relaxed text-ink md:text-2xl">
              <p>“{cadProposalEvidence.quote}”</p>
            </blockquote>
            <p className="mt-5 text-sm text-ink/65">Anonymized project correspondence</p>
            <p className="mt-4 text-sm leading-7 text-ink/70">Feedback on a technical proposal; not an order confirmation. The figures shown apply to that proposal. Material, scope, and pricing are reviewed individually for your project.</p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link className="btn-luxury-fill" href={contactHref}>Discuss Your CAD / BOQ</Link>
              {home ? <Link className="text-cta-luxury" href="/custom-stone-fabrication-china#cad-proposal-case">Explore Custom Fabrication</Link> : <Link className="text-cta-luxury" href="/project-brief-template.txt">Project Brief Template</Link>}
            </div>
            <p className="mt-4 text-xs leading-6 text-ink/60">Start with a short brief; drawings can follow when they are ready.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

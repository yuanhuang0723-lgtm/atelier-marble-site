import Link from "next/link";
import { technicalProposalEvidence } from "../data/technical-proposal-evidence";

interface TechnicalProposalCaseProps {
  sourcePage?: string;
  inquiryHref?: string;
  embedded?: boolean;
}

export default function TechnicalProposalCase({ sourcePage = "/", inquiryHref, embedded = false }: TechnicalProposalCaseProps) {
  const contactHref = inquiryHref || `/contact?sourcePage=${encodeURIComponent(sourcePage)}&projectType=${encodeURIComponent("Commercial Stone Projects")}`;

  return (
    <section id="engineering-case-study" aria-labelledby="engineering-case-title" className={embedded ? "min-w-0 scroll-mt-28 rounded-2xl border border-ink/10 bg-paper p-5 shadow-soft md:p-6" : "section-luxury scroll-mt-28 bg-stone"}>
      <div className={embedded ? "flex h-full min-w-0 flex-col" : "container-luxury max-w-7xl"}>
        <p className="eyebrow-luxury">Project engineering / Design coordination</p>
        <h2 id="engineering-case-title" className="mt-3 font-title text-2xl uppercase leading-tight tracking-[0.03em] text-ink md:text-3xl">Technical proposal &amp; client feedback.</h2>
        <p className="mt-3 text-sm leading-6 text-ink/70">Mounting dimensions, rail interfaces, and bearing / restraint details developed for project review.</p>

        <figure className="mt-5 min-w-0 overflow-hidden rounded-xl border border-ink/10 bg-white p-2">
          <a href={technicalProposalEvidence.fullSizeImage} target="_blank" rel="noopener noreferrer" className="block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze" aria-label="Open the complete engineering proposal image at full resolution">
            <img src={technicalProposalEvidence.image} width={technicalProposalEvidence.width} height={technicalProposalEvidence.height} alt={technicalProposalEvidence.alt} loading="lazy" decoding="async" className="block h-auto w-full rounded-lg" />
          </a>
          <figcaption className="px-2 pb-1 pt-3 text-xs leading-5 text-ink/65">Original drawing details retained. <a href={technicalProposalEvidence.fullSizeImage} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">View the complete high-resolution image.</a></figcaption>
        </figure>

        <div className="mt-5 border-l-2 border-bronze pl-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-bronze">Client feedback on a technical proposal</p>
          <blockquote className="mt-2 font-title text-base leading-7 text-ink"><p>“{technicalProposalEvidence.quote}”</p></blockquote>
        </div>
        <div className="mt-auto flex flex-col gap-4 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-xs leading-5 text-ink/60">Engineering review reference. Final site and fixing checks remain open; the source notes retain the production-release status.</p>
          <Link href={contactHref} className="btn-luxury-fill shrink-0 self-start text-center">Request a Technical Proposal</Link>
        </div>
      </div>
    </section>
  );
}

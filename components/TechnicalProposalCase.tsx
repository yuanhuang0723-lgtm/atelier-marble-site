import Image from "next/image";
import Link from "next/link";

interface TechnicalProposalCaseProps {
  sourcePage?: string;
  inquiryHref?: string;
}

export default function TechnicalProposalCase({
  sourcePage = "/",
  inquiryHref = "/contact?sourcePage=%2F&projectType=Commercial%20Stone%20Projects"
}: TechnicalProposalCaseProps) {
  return (
    <section 
      id="engineering-case-study"
      aria-label="Structural Stone Fixing Technical Proposal Case Study" 
      className="section-luxury bg-stone pt-8 pb-16"
    >
      <div className="container-luxury max-w-7xl mx-auto">
        
        {/* Top Status Header: Pure English, Warm Luxury Palette */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-1">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-ink/10 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-ink shadow-sm">
            <span className="w-2 h-2 rounded-full bg-bronze" />
            FEATURED ENGINEERING CASE &middot; STRUCTURAL STONE FIXING
          </div>
          <span className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-ink/50">
            DOC REF: ER-V2. REV / SEC-01-02
          </span>
        </div>

        {/* Engineering Dossier Display Card: Matched with Site Colors */}
        <div className="card-luxury overflow-hidden bg-white border border-ink/10 p-0 shadow-soft">
          
          {/* Static Image Showcase Container (Display Only, No Click to View / No Lightbox) */}
          <div className="relative w-full overflow-hidden bg-[#F4F5F7] select-none p-3 sm:p-5 md:p-6">
            <div className="relative w-full aspect-[16/9] max-h-[660px]">
              <Image
                src="/assets/project-evidence/stone-fixing-technical-proposal.webp"
                alt="Detailed Technical Proposal & Customer Validation - Wall Mounting & Rail Fixing Sections"
                fill
                className="object-contain rounded-xl"
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority={false}
              />
            </div>
          </div>

          {/* Bottom Action Bar: Warm Luxury Surface (#fbf7f1) Matching Atelier Marble */}
          <div className="border-t border-ink/10 bg-[var(--color-surface)] p-5 sm:p-6 lg:p-7">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left: 3 Core Engineering Values (100% English) */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6 border-b lg:border-b-0 border-ink/10 pb-5 lg:pb-0">
                
                {/* 1. Load & Clearance Verification */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-ink/10 flex-shrink-0 flex items-center justify-center text-bronze mt-0.5 shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-title text-sm font-semibold uppercase tracking-wider text-ink">
                      Load &amp; Clearance Verification
                    </h4>
                    <p className="text-xs text-ink/70 mt-1 leading-relaxed">
                      Structural load, wall cavity clearance, and expansion tolerances verified.
                    </p>
                  </div>
                </div>

                {/* 2. 3D/2D Fixing Interface */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-ink/10 flex-shrink-0 flex items-center justify-center text-bronze mt-0.5 shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-title text-sm font-semibold uppercase tracking-wider text-ink">
                      3D/2D Fixing Interface
                    </h4>
                    <p className="text-xs text-ink/70 mt-1 leading-relaxed">
                      Stainless steel undercut anchors, aluminum rails, and precision stone kerf slotting.
                    </p>
                  </div>
                </div>

                {/* 3. Pre-Fabrication Approval */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-ink/10 flex-shrink-0 flex items-center justify-center text-bronze mt-0.5 shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-title text-sm font-semibold uppercase tracking-wider text-ink">
                      Pre-Fabrication Approval
                    </h4>
                    <p className="text-xs text-ink/70 mt-1 leading-relaxed">
                      100% on-site installation conflicts eliminated before factory CNC cutting.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right: CTA Button in Site's Luxury Style */}
              <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
                <Link
                  href={inquiryHref}
                  className="btn-luxury-fill w-full sm:w-auto text-center"
                >
                  Request a Technical Proposal &rarr;
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

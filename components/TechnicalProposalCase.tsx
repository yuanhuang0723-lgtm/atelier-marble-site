"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { trackConversionEvent } from "../lib/tracking";

interface TechnicalProposalCaseProps {
  sourcePage?: string;
  inquiryHref?: string;
}

export default function TechnicalProposalCase({
  sourcePage = "/",
  inquiryHref = "/contact?sourcePage=%2F&projectType=Commercial%20Stone%20Projects"
}: TechnicalProposalCaseProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Keyboard navigation (ESC to close lightbox)
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      setIsZoomed(false);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleOpenLightbox() {
    try {
      trackConversionEvent("workshop_inquiry_click", {
        method: "technical_proposal_lightbox",
        sourcePage,
        link_text: "Click to inspect engineering drawings"
      });
    } catch {
      // Non-blocking
    }
    setIsOpen(true);
  }

  return (
    <section 
      id="engineering-case-study"
      aria-label="Technical Proposal and Structural Stone Fixing Case Study" 
      className="section-luxury bg-paper pt-8 pb-16"
    >
      <div className="container-luxury max-w-7xl mx-auto">
        
        {/* 1. Outside Status Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-1">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-emerald-400 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            FEATURED ENGINEERING CASE &middot; STRUCTURAL STONE FIXING
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-slate-500 tracking-tight">
            DOC REF: ER-V2. REV / SEC-01-02
          </span>
        </div>

        {/* 2. Engineering Dossier Display Card */}
        <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-2xl overflow-hidden group">
          
          {/* Mobile swipe hint */}
          <div className="sm:hidden flex items-center justify-between px-4 py-2 bg-slate-100 border-b border-slate-200 text-[11px] font-medium text-slate-600">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Swipe horizontally to inspect details
            </span>
            <span className="text-blue-600 font-semibold">Tap to zoom</span>
          </div>

          {/* Main Drawing Image Container with High-Res Lightbox Trigger */}
          <div 
            className="relative w-full overflow-x-auto overflow-y-hidden cursor-zoom-in bg-[#F4F5F7] select-none scrollbar-thin scrollbar-thumb-slate-300"
            onClick={handleOpenLightbox}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpenLightbox();
              }
            }}
            title="Click to inspect high-resolution engineering drawings"
          >
            <div className="min-w-[760px] md:min-w-full flex items-center justify-center p-3 sm:p-5 md:p-6">
              <div className="relative w-full aspect-[16/9] max-h-[640px]">
                <Image
                  src="/assets/project-evidence/stone-fixing-technical-proposal.webp"
                  alt="Detailed Technical Proposal & Customer Validation - Wall Mounting & Rail Fixing Sections"
                  fill
                  className="object-contain rounded-xl shadow-sm transition-transform duration-500 ease-out group-hover:scale-[1.008]"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  priority={false}
                />
              </div>
            </div>

            {/* Hover floating glassmorphism capsule */}
            <div className="absolute inset-0 bg-slate-950/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex items-center justify-center">
              <div className="px-5 py-2.5 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-sm font-medium tracking-wide shadow-xl border border-white/10 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                <span>Click to inspect engineering drawings</span>
              </div>
            </div>
          </div>

          {/* 3. Bottom Action Bar in #1E293B */}
          <div className="bg-[#1E293B] border-t border-slate-700/60 p-5 sm:p-6 lg:p-7 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left: 3 Core Engineering Values */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 border-b lg:border-b-0 border-slate-700/80 pb-5 lg:pb-0">
                
                {/* 1. Load & Clearance Verification */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-700/60 border border-slate-600/50 flex-shrink-0 flex items-center justify-center text-emerald-400 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-tight leading-snug">
                      Load &amp; Clearance Verification
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      挂装承重与墙体安装间隙精准核算，预留膨胀余量。
                    </p>
                  </div>
                </div>

                {/* 2. 3D/2D Fixing Interface */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-700/60 border border-slate-600/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-tight leading-snug">
                      3D/2D Fixing Interface
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      不锈钢背栓、铝合金挂件与石材开槽节点深度深化。
                    </p>
                  </div>
                </div>

                {/* 3. Pre-Fabrication Approval */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-700/60 border border-slate-600/50 flex-shrink-0 flex items-center justify-center text-amber-400 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-tight leading-snug">
                      Pre-Fabrication Approval
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      投产前 100% 解决现场安装冲突，确保一次性拼装。
                    </p>
                  </div>
                </div>

              </div>

              {/* Right: CTA Button */}
              <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
                <Link
                  href={inquiryHref}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-semibold text-sm tracking-tight shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>Request a Technical Proposal for Your Project</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="High Resolution Engineering Drawing Inspection"
        >
          {/* Top toolbar */}
          <div className="flex items-center justify-between text-white py-2 px-3 bg-slate-900/80 rounded-xl border border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                Wall Mounting &amp; Rail Fixing Section (Approved Reference)
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                type="button" 
                onClick={() => setIsZoomed(!isZoomed)}
                className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
              >
                {isZoomed ? "↺ Reset View" : "🔍 Zoom 150%"}
              </button>
              <button 
                type="button" 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                aria-label="Close inspection modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Modal image viewer with scroll & zoom */}
          <div 
            className="flex-1 w-full overflow-auto flex items-center justify-center my-3 rounded-xl bg-slate-900/40 p-2 sm:p-4 select-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/assets/project-evidence/stone-fixing-technical-proposal.png" 
              alt="Full Resolution Technical Proposal & Customer Validation"
              className={`object-contain rounded-lg shadow-2xl transition-all duration-300 ${
                isZoomed ? "scale-150 max-w-none my-24 cursor-zoom-out" : "max-h-[85vh] max-w-full cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>

          {/* Bottom helper */}
          <div className="text-center text-xs text-slate-400 py-1">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono">ESC</kbd> or click outside to exit inspection
          </div>
        </div>
      )}
    </section>
  );
}

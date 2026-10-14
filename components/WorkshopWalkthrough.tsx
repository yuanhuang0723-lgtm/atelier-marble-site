"use client";

import Link from "next/link";
import type { WorkshopVideo } from "../data/workshop-videos";
import { trackConversionEvent } from "../lib/tracking";
import WorkshopVideoCard from "./WorkshopVideoCard";

type Props = { video: WorkshopVideo; sourcePage: string; preview?: boolean; galleryCount?: number };

export default function WorkshopWalkthrough({ video, sourcePage, preview = false, galleryCount }: Props) {
  const watchHref = "/custom-stone-fabrication-china#workshop-walkthrough";
  const inquiryHref = `/contact?sourcePage=${encodeURIComponent(sourcePage)}&projectType=${encodeURIComponent("Commercial Stone Projects")}`;

  function trackLink(eventName: "workshop_video_entry_click" | "workshop_inquiry_click") {
    try {
      trackConversionEvent(eventName, {
        method: "video",
        sourcePage,
        video_id: video.id,
        video_title: video.title,
        video_duration: video.durationSeconds
      });
    } catch {
      // Navigation remains available when analytics is unavailable.
    }
  }

  return (
    <section id={preview ? "home-workshop-walkthrough" : "workshop-walkthrough"} aria-labelledby={preview ? "home-workshop-walkthrough-title" : "workshop-walkthrough-title"} className="section-luxury scroll-mt-28 bg-stone">
      <div className="container-luxury grid min-w-0 items-center gap-7 lg:grid-cols-[1.35fr_0.85fr] lg:gap-12">
        {preview ? (
          <Link href={watchHref} onClick={() => trackLink("workshop_video_entry_click")} aria-label="Watch the 18-second workshop walkthrough" className="group relative block aspect-video overflow-hidden rounded-2xl border border-ink/10 bg-[#171614] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink">
            <img src={video.poster} alt={video.description} width={1280} height={720} loading="lazy" decoding="async" className="h-full w-full object-contain" />
            <span aria-hidden="true" className="absolute inset-0 grid place-items-center bg-black/10 transition group-hover:bg-black/20">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-white/80 bg-black/55 text-white shadow-lg">
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" focusable="false"><path d="M8 5.5c0-.77.84-1.25 1.5-.86l10.12 5.99a1 1 0 0 1 0 1.72L9.5 18.34A1 1 0 0 1 8 17.48V5.5Z" /></svg>
              </span>
            </span>
            <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1.5 text-[11px] font-medium tracking-wide text-white sm:bottom-4 sm:left-4">Watch workshop video · 18 sec</span>
          </Link>
        ) : <WorkshopVideoCard video={video} showCaption={false} sourcePage={sourcePage} />}
        <div className="min-w-0">
          <p className="eyebrow-luxury">From the workshop</p>
          <h2 id={preview ? "home-workshop-walkthrough-title" : "workshop-walkthrough-title"} className="heading-lg mt-4 text-left">Workshop walkthrough.</h2>
          <p className="body-luxury mt-5">Take an 18-second look across the workshop, with stone handling, work-station activity, and wooden packing frames.</p>
          <p className="mt-3 text-sm leading-7 text-ink/65">Share the stone work you need and the drawings or dimensions you have. We can review the practical next step for your project.</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {preview ? <Link className="btn-luxury-fill" href={watchHref} onClick={() => trackLink("workshop_video_entry_click")}>Watch the 18-second Video</Link> : <Link className="btn-luxury-fill" href={inquiryHref} onClick={() => trackLink("workshop_inquiry_click")}>Discuss Your Stone Project</Link>}
            <Link className="text-cta-luxury" href="/factory#workshop-videos">{galleryCount ? `View all ${galleryCount} workshop videos` : "Explore workshop videos"}</Link>
          </div>
          {!preview ? <p className="mt-4 text-xs leading-6 text-ink/60">Start with a short brief; drawings can follow when they are ready.</p> : null}
        </div>
      </div>
    </section>
  );
}

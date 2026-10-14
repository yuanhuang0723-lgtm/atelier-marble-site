"use client";

import Link from "next/link";
import type { WorkshopVideo } from "../data/workshop-videos";
import { trackConversionEvent } from "../lib/tracking";
import WorkshopVideoCard from "./WorkshopVideoCard";

type Props = { video: WorkshopVideo; sourcePage: string; home?: boolean; galleryCount?: number };

export default function WorkshopWalkthrough({ video, sourcePage, home = false, galleryCount }: Props) {
  const inquiryHref = `/contact?sourcePage=${encodeURIComponent(sourcePage)}&projectType=${encodeURIComponent("Commercial Stone Projects")}`;

  function trackLink(eventName: "workshop_inquiry_click") {
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
    <section id={home ? "home-workshop-walkthrough" : "workshop-walkthrough"} aria-labelledby={home ? "home-workshop-walkthrough-title" : "workshop-walkthrough-title"} className="section-luxury scroll-mt-28 bg-stone">
      <div className="container-luxury grid min-w-0 items-center gap-7 lg:grid-cols-[1.35fr_0.85fr] lg:gap-12">
        <WorkshopVideoCard video={video} showCaption={false} sourcePage={sourcePage} />
        <div className="min-w-0">
          <p className="eyebrow-luxury">From the workshop</p>
          <h2 id={home ? "home-workshop-walkthrough-title" : "workshop-walkthrough-title"} className="heading-lg mt-4 text-left">Workshop walkthrough.</h2>
          <p className="body-luxury mt-5">Take an 18-second look across the workshop, with stone handling, work-station activity, and wooden packing frames.</p>
          <p className="mt-3 text-sm leading-7 text-ink/65">Share the stone work you need and the drawings or dimensions you have. We can review the practical next step for your project.</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link className="btn-luxury-fill" href={inquiryHref} onClick={() => trackLink("workshop_inquiry_click")}>Discuss Your Stone Project</Link>
            <Link className="text-cta-luxury" href="/factory#workshop-videos">{galleryCount ? `View all ${galleryCount} workshop videos` : "Explore workshop videos"}</Link>
          </div>
          <p className="mt-4 text-xs leading-6 text-ink/60">Start with a short brief; drawings can follow when they are ready.</p>
        </div>
      </div>
    </section>
  );
}

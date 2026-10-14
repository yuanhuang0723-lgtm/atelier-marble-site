"use client";

import { useRef, useState } from "react";
import type { WorkshopVideo } from "../data/workshop-videos";
import { trackConversionEvent } from "../lib/tracking";

type WorkshopVideoCardProps = {
  video: WorkshopVideo;
  featured?: boolean;
  showCaption?: boolean;
  sourcePage?: string;
};

export default function WorkshopVideoCard({ video, featured = false, showCaption = true, sourcePage }: WorkshopVideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackedStart = useRef(false);
  const trackedComplete = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const landscape = video.orientation === "landscape";

  function trackPlayback(eventName: "video_start" | "video_complete") {
    if (!video.durationSeconds) return;
    const tracked = eventName === "video_start" ? trackedStart : trackedComplete;
    if (tracked.current) return;
    tracked.current = true;
    try {
      trackConversionEvent(eventName, {
        method: "video",
        sourcePage: sourcePage || window.location.pathname,
        video_id: video.id,
        video_title: video.title,
        video_duration: video.durationSeconds
      });
    } catch {
      // Playback remains available when analytics is unavailable.
    }
  }

  const startPlayback = () => {
    const player = videoRef.current;
    if (!player) return;

    setFailed(false);
    setIsPlaying(true);
    requestAnimationFrame(() => {
      player.focus();
      void player.play().catch(() => {
        // Native controls allow another play attempt when browser policy blocks it.
      });
    });
  };

  return (
    <figure className={`mx-auto w-full overflow-hidden rounded-2xl border border-ink/10 bg-white ${featured && !landscape ? "max-w-[480px] shadow-xl lg:mx-0" : ""}`}>
      <div className={`relative ${landscape ? "aspect-video" : featured ? "aspect-[6/7]" : "aspect-[3/4]"} w-full overflow-hidden bg-[#171614]`}>
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full bg-[#171614] ${featured && !landscape ? "object-cover" : "object-contain"} ${isPlaying ? "" : "pointer-events-none opacity-0"}`}
          controls={isPlaying}
          muted={landscape}
          playsInline
          preload="none"
          width={landscape ? 1920 : undefined}
          height={landscape ? 1080 : undefined}
          onPlay={() => trackPlayback("video_start")}
          onEnded={() => trackPlayback("video_complete")}
          onError={() => setFailed(true)}
          aria-label={`Play video: ${video.title}`}
          aria-hidden={!isPlaying}
          tabIndex={isPlaying ? 0 : -1}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
        {!isPlaying && (
          <button
            type="button"
            className="group absolute inset-0 block h-full w-full cursor-pointer text-left"
            onClick={startPlayback}
            aria-label={`Play video: ${video.title}`}
            title={`Play video: ${video.title}`}
          >
            <img
              className={`absolute inset-0 h-full w-full ${featured && !landscape ? "object-cover" : "object-contain"} transition duration-300 group-hover:scale-[1.02]`}
              src={video.poster}
              alt={video.description}
              title={video.title}
              loading="lazy"
              decoding="async"
              width={landscape ? 1280 : undefined}
              height={landscape ? 720 : undefined}
            />
            <span aria-hidden="true" className="absolute inset-0 grid place-items-center bg-black/10 transition group-hover:bg-black/20">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-white/80 bg-black/55 text-white shadow-lg transition group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" focusable="false">
                  <path d="M8 5.5c0-.77.84-1.25 1.5-.86l10.12 5.99a1 1 0 0 1 0 1.72L9.5 18.34A1 1 0 0 1 8 17.48V5.5Z" />
                </svg>
              </span>
            </span>
            {landscape ? <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1.5 text-[11px] font-medium tracking-wide text-white sm:bottom-4 sm:left-4">Watch workshop video · 18 sec</span> : null}
          </button>
        )}
      </div>
      {failed ? <p role="status" className="px-4 py-3 text-sm leading-6 text-ink/70">The video could not load. <a className="underline underline-offset-4" href={video.src}>Open the video directly</a> or use the play control to try again.</p> : null}
      {showCaption ? <figcaption className={featured ? "p-5 md:p-6" : "p-4"}>
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow-luxury">{video.group}</p>
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/45">{video.duration}</span>
        </div>
        <h3 className={`mt-2 font-title font-medium uppercase leading-tight tracking-[0.03em] text-ink ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>
          {video.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-ink/65">{video.description}</p>
      </figcaption> : null}
    </figure>
  );
}

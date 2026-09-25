import type { WorkshopVideo } from "../data/workshop-videos";

type WorkshopVideoCardProps = {
  video: WorkshopVideo;
  featured?: boolean;
};

export default function WorkshopVideoCard({ video, featured = false }: WorkshopVideoCardProps) {
  return (
    <figure className={`mx-auto w-full overflow-hidden rounded-2xl border border-ink/10 bg-white ${featured ? "max-w-[480px] shadow-xl" : ""}`}>
      <video
        className="aspect-[3/4] w-full bg-[#171614] object-contain"
        controls
        playsInline
        preload="none"
        poster={video.poster}
        aria-label={`Play video: ${video.title}`}
      >
        <source src={video.src} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <figcaption className={featured ? "p-5 md:p-6" : "p-4"}>
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow-luxury">{video.group}</p>
          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/45">{video.duration}</span>
        </div>
        <h3 className={`mt-2 font-title font-medium uppercase leading-tight tracking-[0.03em] text-ink ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>
          {video.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-ink/65">{video.description}</p>
      </figcaption>
    </figure>
  );
}

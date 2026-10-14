import type { WorkshopVideo } from "../data/workshop-videos";
import { absoluteUrl } from "./seo";

export function workshopWalkthroughSchema(video: WorkshopVideo) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: [absoluteUrl(video.poster)],
    contentUrl: absoluteUrl(video.src),
    url: absoluteUrl("/custom-stone-fabrication-china#workshop-walkthrough"),
    uploadDate: "2026-10-14",
    duration: `PT${video.durationSeconds}S`,
    publisher: { "@type": "Organization", name: "Atelier Marble", url: absoluteUrl("/") }
  };
}

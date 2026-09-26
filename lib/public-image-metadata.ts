import publicImageMetadataJson from "../data/public-image-metadata.json";

export type PublicImageMetadata = {
  src: string;
  title: string;
  alt: string;
  caption: string;
};

const publicImageMetadata = publicImageMetadataJson as Record<string, PublicImageMetadata>;

export function resolvePublicImage(src: string): PublicImageMetadata {
  return publicImageMetadata[src] || { src, title: "", alt: "", caption: "" };
}

export function getPublicImageEntries(prefix: string) {
  return Object.entries(publicImageMetadata)
    .filter(([oldSrc]) => oldSrc.startsWith(prefix))
    .sort(([a], [b]) => {
      const nameA = a.split("/").at(-1) || a;
      const nameB = b.split("/").at(-1) || b;
      return nameA.localeCompare(nameB, "en", { numeric: true, sensitivity: "base" });
    })
    .map(([oldSrc, image]) => ({ oldSrc, ...image }));
}

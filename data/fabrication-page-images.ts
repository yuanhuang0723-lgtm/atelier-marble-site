export const fabricationHeroImage = "/assets/factory/workshop/stone-workshop-overhead-hoist-630d0f77ee.webp";
export const fabricationDrawingImage = "/assets/factory/evidence/redacted-stone-drawing-review-example.png";

export const fabricationReferenceImages = [
  {
    src: "/videos/posters/atelier-marble-workshop-clip-07.jpg",
    alt: "A cutting head above a dark stone workpiece in workshop footage.",
    title: "Stone cutting — workshop video still",
  },
  {
    src: "/materials/materials/stone-vanity-basin-component-2bef9ce2df.webp",
    alt: "Rows of light stone vanity components with rectangular openings in a workshop.",
    title: "Repeated stone components — product reference",
  },
  {
    src: "/materials/materials/stone-vanity-basin-component-ad8667ba07.webp",
    alt: "Veined light stone top with a rectangular opening and round hole on a workshop rack.",
    title: "Opening placement — product reference",
  },
  {
    src: "/assets/factory/workshop/stone-workshop-packing-area-b1a9572643.webp",
    alt: "Stone pieces and packing preparation in a workshop.",
    title: "Packing preparation — workshop reference",
  },
];

export const fabricationPageImagePaths = [
  fabricationHeroImage,
  fabricationDrawingImage,
  ...fabricationReferenceImages.map((image) => image.src),
];

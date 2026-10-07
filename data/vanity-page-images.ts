import { resolvePublicImage } from "../lib/public-image-metadata";

export const vanityProductReferences = [
  {
    src: "/materials/materials/stone-vanity-basin-component-2bef9ce2df.webp",
    title: "Repeated vanity components",
    alt: "Rows of light stone vanity components with rectangular basin openings in a workshop.",
  },
  {
    src: "/materials/materials/stone-vanity-basin-component-05c7560e73.webp",
    title: "Top and basin opening",
    alt: "Light stone vanity top with a rounded rectangular basin opening beside rectangular stone components.",
  },
  {
    src: "/materials/materials/stone-vanity-basin-component-ad8667ba07.webp",
    title: "Veining and cut-out placement",
    alt: "Veined light stone top with a rectangular opening and a round hole, resting on a workshop rack.",
  },
  {
    src: "/materials/materials/stone-vanity-basin-component-32ae5e7061.webp",
    title: "Basin and surface detail",
    alt: "Speckled stone basin component with a rectangular opening shown upright.",
  },
];

export const vanityDesignReferences = [
  "/assets/vanity-cabinet/4f0078c2-d298-4909-9b2e-55029e071900.png",
  "/assets/vanity-cabinet/a24dccf5-24c4-4d47-8722-02369e7efeca.png",
  "/assets/vanity-cabinet/b6bde6bd-0b4f-4240-8f86-3d31e406e8e9.png",
].map(resolvePublicImage);

export const vanityPageImagePaths = [
  "/assets/vanity-cabinet/cover.webp",
  ...vanityProductReferences.map((image) => image.src),
  ...vanityDesignReferences.map((image) => image.src),
  "/assets/factory/evidence/redacted-stone-drawing-review-example.png",
  "/assets/factory/workshop/stone-workshop-packing-area-b1a9572643.webp",
];

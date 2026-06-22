export type CategoryGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type CategoryGalleryPageData = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intro: string;
  heroImage?: string;
  heroAlt?: string;
  items: CategoryGalleryItem[];
  metaTitle: string;
  metaDescription: string;
  openGraphImage: string;
};

export const categoryGalleryPages: Record<string, CategoryGalleryPageData> = {
  "hotel-hospitality-projects": {
    slug: "/hotel-hospitality-projects",
    eyebrow: "Hotel & Hospitality Projects",
    title: "Luxury hospitality stone references.",
    description:
      "A curated hotel project gallery showing premium hospitality stone applications across lobby, reception, corridor, lounge, and bathroom settings.",
    intro:
      "This gallery focuses on hospitality-scale stone work, with a wider set of scene types that help buyers assess atmosphere, finish, and commercial project fit.",
    items: [
      {
        src: "/assets/hotel-project/local/0ede5720-0895-486d-aed9-3efcb71a8729.png",
        alt: "Luxury hotel lobby with polished marble flooring and wall cladding",
        caption: "Hotel Lobby Stone Application"
      },
      {
        src: "/assets/hotel-project/local/3cf6f27a-c457-472c-b46c-a8effb460825.png",
        alt: "Hotel reception stone backdrop with elegant lighting and polished marble surfaces",
        caption: "Reception Stone Backdrop"
      },
      {
        src: "/assets/hotel-project/local/6398cdc0-6231-4c77-b788-83a2e7cc1b31.png",
        alt: "Hospitality corridor with polished stone walls and elegant perspective depth",
        caption: "Corridor Stone Surfaces"
      },
      {
        src: "/assets/hotel-project/local/7d37b5fc-f5c8-4f7c-9add-078d8db0da41.png",
        alt: "Premium guest lounge area with stone feature wall and calm upscale atmosphere",
        caption: "Guest Area Stone Detail"
      },
      {
        src: "/assets/hotel-project/local/869ee7da-ba0d-49ed-bbda-47f675ca2d05.png",
        alt: "Elegant hotel bathroom vanity with marble surfaces and soft ambient lighting",
        caption: "Bathroom Vanity Application"
      },
      {
        src: "/assets/hotel-project/local/c35ece00-8622-4aa2-9424-d3d175d59b10.png",
        alt: "Hospitality stone interior with calm luxury surfaces and refined architectural details",
        caption: "Hospitality Interior Detail"
      },
      {
        src: "/assets/hotel-project/local/c6d67380-c81a-456c-9e1a-c901c33fafeb.png",
        alt: "Luxury hotel stone environment with polished flooring and balanced ambient lighting",
        caption: "Polished Flooring Application"
      },
      {
        src: "/assets/hotel-project/local/c8d14e3b-948f-4c0f-b727-1920d5ee594c.png",
        alt: "Hospitality wall cladding and interior stone surfaces with clean commercial finish",
        caption: "Wall Cladding Application"
      },
      {
        src: "/assets/hotel-project/local/fd0c9c55-9d1e-4df9-ae42-d4b62d474fc1.png",
        alt: "Premium hotel interior stone reference with refined layout and export-ready presentation",
        caption: "Premium Hotel Interior"
      }
    ],
    metaTitle: "Hotel & Hospitality Projects",
    metaDescription:
      "Nine ultra-realistic hospitality stone reference images for hotel lobbies, reception areas, corridors, guest spaces, vanities, and commercial interiors.",
    openGraphImage: "/assets/hotel-project/local/0ede5720-0895-486d-aed9-3efcb71a8729.png"
  },
  "luxury-residential-kitchens": {
    slug: "/luxury-residential-kitchens",
    eyebrow: "STONE VANITY TOP & CABINET PANEL REFERENCE",
    title: "Luxury Vanity Tops & Cabinet Panels",
    description:
      "A curated gallery of luxury vanity tops, cabinet panels, and stone bathroom references for export buyers.",
    intro:
      "The gallery highlights real material texture, custom fabrication, vanity top applications, cabinet panel proportion, and export-ready finishing.",
    heroImage: "/assets/vanity-cabinet/hero.png",
    heroAlt: "Ultra realistic luxury stone vanity top and cabinet panel showroom scene",
    items: [
      {
        src: "/assets/vanity-cabinet/09a73605-c984-4955-a69d-423def707689.png",
        alt: "Luxury stone vanity top with cabinet panels in a clean modern bathroom",
        caption: "Vanity Top Reference"
      },
      {
        src: "/assets/vanity-cabinet/4f0078c2-d298-4909-9b2e-55029e071900.png",
        alt: "Premium vanity top and cabinet stone panel composition with elegant surfaces",
        caption: "Cabinet Panel Reference"
      },
      {
        src: "/assets/vanity-cabinet/6f568d84-365f-42c1-8deb-cf4ccf13a17a.png",
        alt: "Luxury stone vanity top installed in a refined bathroom setting",
        caption: "Bathroom Vanity Application"
      },
      {
        src: "/assets/vanity-cabinet/70160c9f-5044-43a9-afca-7af5e52fa0de.png",
        alt: "Custom stone cabinet panels and vanity surface in a premium interior",
        caption: "Custom Cabinet Panels"
      },
      {
        src: "/assets/vanity-cabinet/7e7550cf-6d45-42d2-bdc9-cc221fe4ed13.png",
        alt: "Elegant stone vanity top with polished surface and refined cabinetry",
        caption: "Polished Vanity Top"
      },
      {
        src: "/assets/vanity-cabinet/86f61e5d-a3a4-4d07-abbb-69f37eba1558.png",
        alt: "Luxury stone vanity and cabinet application with strong material presence",
        caption: "Luxury Bathroom Stone"
      },
      {
        src: "/assets/vanity-cabinet/a24dccf5-24c4-4d47-8722-02369e7efeca.png",
        alt: "Premium cabinet panel and vanity top reference with full scene composition",
        caption: "Full Scene Reference"
      },
      {
        src: "/assets/vanity-cabinet/ab8dd6ae-4f25-45ab-8f7e-8ba62681d487.png",
        alt: "Stone cabinet panel detail with vanity top and modern bathroom lighting",
        caption: "Stone Panel Detail"
      },
      {
        src: "/assets/vanity-cabinet/b461bd67-a9dd-4cd1-a0c8-8380a03c1b6d.png",
        alt: "Luxury vanity top and cabinet panels in a high-end interior showroom",
        caption: "Showroom Vanity Set"
      },
      {
        src: "/assets/vanity-cabinet/b6bde6bd-0b4f-4240-8f86-3d31e406e8e9.png",
        alt: "Natural stone vanity top with cabinet panel applications for export projects",
        caption: "Export Project Reference"
      },
      {
        src: "/assets/vanity-cabinet/c775d969-d73c-42f3-b46e-7832e7fd6f62.png",
        alt: "Premium cabinet stone panel and vanity top with realistic material texture",
        caption: "Material Texture Reference"
      },
      {
        src: "/assets/vanity-cabinet/e0e98d2d-5c40-449e-a534-da965d02d08d.png",
        alt: "Luxury stone vanity top and cabinet panel composition for bathroom interiors",
        caption: "Bathroom Interior Reference"
      },
      {
        src: "/assets/vanity-cabinet/e95255d2-788e-4419-aebb-137ac352d88b.png",
        alt: "Custom stone vanity top with cabinet panels in a clean modern space",
        caption: "Custom Vanity Reference"
      },
      {
        src: "/assets/vanity-cabinet/f04f01e1-b135-494e-8efa-18077c97bbbd.png",
        alt: "Luxury vanity top and cabinet panel stone reference with premium finish",
        caption: "Premium Finish Reference"
      }
    ],
    metaTitle: "Luxury Vanity Tops & Cabinet Panels",
    metaDescription:
      "A curated gallery of luxury vanity tops and cabinet panels with real material texture, custom fabrication detail, and export-ready presentation.",
    openGraphImage: "/assets/vanity-cabinet/hero.png"
  },
  "architectural-stone-interiors": {
    slug: "/architectural-stone-interiors",
    eyebrow: "STONE COUNTERTOP & COFFEE TABLE REFERENCE",
    title: "LUXURY STONE COUNTERTOPS & COFFEE TABLES",
    description:
      "A curated gallery of luxury stone countertops, coffee tables, and custom tabletop references for export buyers.",
    intro:
      "The gallery highlights full-size countertop proportion, natural stone texture, edge thickness, structural support, and premium furniture-grade finishing.",
    heroImage: "/assets/stone-table-coffee/hero-local-cover.png",
    heroAlt: "Stone countertop and coffee table local material cover",
    items: [
      {
        src: "/assets/stone-table-coffee/10604b55-3279-43c1-8119-b9c37a2124b9.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      },
      {
        src: "/assets/stone-table-coffee/16c868db-bac6-4155-a2b7-ecb512d62ec3.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      },
      {
        src: "/assets/stone-table-coffee/18a9e5fc-bfab-4f2b-88b6-250bc748fee7.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      },
      {
        src: "/assets/stone-table-coffee/19c8d1d3-8afa-4370-98dc-4411bff4e6ca.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      },
      {
        src: "/assets/stone-table-coffee/55e95fa7-f883-46a7-bef9-4c549ec64588.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      },
      {
        src: "/assets/stone-table-coffee/76d41e78-6ecf-4c92-949d-98dfd53008f9.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      },
      {
        src: "/assets/stone-table-coffee/89130e4d-3591-48b8-b08f-a168524efb80.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      },
      {
        src: "/assets/stone-table-coffee/90925964-1b09-46a9-9dbe-bd791a399b79.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      },
      {
        src: "/assets/stone-table-coffee/917231a0-a886-4463-8f39-f313e3b21ca7.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      },
      {
        src: "/assets/stone-table-coffee/a11b3bea-8912-4c06-80c5-48eceed385ee.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      },
      {
        src: "/assets/stone-table-coffee/aa985222-a734-4a5c-aa53-c87c07d12e23.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      },
      {
        src: "/assets/stone-table-coffee/ee861358-880f-40fc-963c-1b53762cc5a9.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      },
      {
        src: "/assets/stone-table-coffee/eea7c03f-a0af-4785-9048-c64bd85604a8.png",
        alt: "Stone countertop and coffee table reference image",
        caption: "Stone Countertop & Coffee Table Reference"
      }
    ],
    metaTitle: "Luxury Stone Countertops & Coffee Tables",
    metaDescription:
      "A curated stone countertop and coffee table gallery showing full-size natural stone references, export-ready fabrication detail, and premium furniture applications.",
    openGraphImage: "/assets/stone-table-coffee/hero.png"
  },
  "custom-furniture-sculptures": {
    slug: "/custom-furniture-sculptures",
    eyebrow: "STONE CARVING & SCULPTURE REFERENCE",
    title: "CUSTOM STONE CARVING & SCULPTURE COLLECTION",
    description:
      "A curated collection of custom stone carving references, sculptural stone works, and premium tabletop forms for export buyers.",
    intro:
      "The gallery presents full-size carving pieces, sculptural forms, and stone work references with premium material presence and export-ready presentation.",
    heroImage: "/assets/carving-decor/local/7b7cb542-0dbc-4626-b9cc-f663dbee6d06.png",
    heroAlt: "Ultra realistic luxury stone carving sculpture displayed in a premium interior setting",
    items: [
      {
        src: "/assets/carving-decor/local/4b46cb2f-85ef-4558-9175-afe8cb004c92.png",
        alt: "Ultra realistic stone carving composition with refined sculptural detail",
        caption: "Stone Carving Reference"
      },
      {
        src: "/assets/carving-decor/local/78563c97-25f1-4f80-8197-bc49c2847553.png",
        alt: "Luxury carved stone work with premium physical texture and balanced form",
        caption: "Carved Stone Form"
      },
      {
        src: "/assets/carving-decor/local/7dbc8b9c-590d-4ba3-a943-ce095f21927b.png",
        alt: "Ultra realistic sculptural stone tabletop with visible material thickness",
        caption: "Stone Tabletop Form"
      },
      {
        src: "/assets/carving-decor/local/7e09cddc-fa18-42e0-8ffc-41db783b9bc5.png",
        alt: "Premium stone carving reference with strong silhouette and luxury finish",
        caption: "Luxury Sculpture Detail"
      },
      {
        src: "/assets/carving-decor/local/c601f7a7-b087-402b-99cd-1700f28482b3.png",
        alt: "Custom stone sculptural object with refined commercial presentation",
        caption: "Custom Sculptural Work"
      },
      {
        src: "/assets/carving-decor/local/cd079dbf-43c5-493a-b785-e8469ade8c6b.png",
        alt: "Luxury stone carving piece in a premium showroom setting with soft light",
        caption: "Showroom Stone Piece"
      },
      {
        src: "/assets/carving-decor/local/d3b91fda-95ff-4be0-b6fb-b0da4f63ca0a.png",
        alt: "Stone sculptural work with elegant curves and real material depth",
        caption: "Sculptural Reference"
      },
      {
        src: "/assets/carving-decor/local/d63152dd-2e11-48cf-9613-e4f1989e5627.png",
        alt: "Premium carved stone tabletop and sculptural form for export display",
        caption: "Stone Table Form"
      },
      {
        src: "/assets/carving-decor/local/d974c37d-4703-452c-bdc7-027735ab31d9.png",
        alt: "Luxury stone carving reference with calm background and premium material tone",
        caption: "Material Tone Reference"
      },
      {
        src: "/assets/carving-decor/local/f0aaab8b-b293-474d-ae57-132ab00b24d3.png",
        alt: "Carved stone object with export-ready presentation and realistic craftsmanship",
        caption: "Export Carving Reference"
      },
      {
        src: "/assets/carving-decor/local/fd44ea2a-91f6-463c-a01d-2fac419702b7.png",
        alt: "Luxury carved stone tabletop composition with visible texture and structure",
        caption: "Stone Tabletop Reference"
      },
      {
        src: "/assets/carving-decor/local/fdaa2b44-f018-47bb-985a-5a8bd0aabbb6.png",
        alt: "Premium sculptural stone work with balanced proportions and commercial appeal",
        caption: "Premium Sculpture Work"
      }
    ],
    metaTitle: "CUSTOM STONE CARVING & SCULPTURE COLLECTION",
    metaDescription:
      "A curated stone carving and sculpture collection with premium material detail, custom tabletop forms, and export-ready presentation.",
    openGraphImage: "/assets/carving-decor/local/7b7cb542-0dbc-4626-b9cc-f663dbee6d06.png"
  }
};


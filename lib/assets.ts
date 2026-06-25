import manifest from "../data/assets.json";

export type AssetCategory =
  | "kitchen-countertop"
  | "hotel-project"
  | "coffee-table"
  | "carving-decor"
  | "factory"
  | "materials"
  | "projects";

export type Asset = {
  filename: string;
  category: AssetCategory;
  mediaType?: "image" | "video";
  sourceFolder?: string;
  sourceName?: string;
  categoryLabel?: string;
  label: string;
  title: string;
  alt: string;
  description: string;
  src: string;
};

export type ProjectFilter = "all" | "kitchen" | "hotel" | "furniture" | "sculpture";
export type ProjectCaseStudy = {
  title: string;
  category: AssetCategory;
  label: string;
  hero: Asset;
  gallery: Asset[];
  description: string;
  context: string;
  scope: string;
  materialType: string;
  application: string;
  finishType: string;
  executionDifficulty: string;
  result: string;
  productionEvidence: Asset[];
  scenario: string;
};

export const assets = manifest as Asset[];

const rawTitlePatterns = [
  /\s*-\s*(?:No\.?\s*)?\d+$/,
  /\s*-\s*[A-Z0-9]{6,}$/,
  /\s*-\s*\d{6,}_[A-Za-z0-9_-]+$/
];

export function cleanDisplayTitle(title: string, fallback?: string) {
  let clean = title.trim();

  for (const pattern of rawTitlePatterns) {
    clean = clean.replace(pattern, "").trim();
  }

  return clean || fallback || title;
}

const bannedCopyPatterns = [
  /\b(enhanced|real)\s+local\s+images?\b/gi,
  /\b(local image|local images|image archive|preview set|reference only)\b/gi,
  /\b(source folder|original source folder|source file|file name)\b/gi,
  /\bprepared from\b/gi,
  /\bprepared for\b/gi,
  /\bkeep(?:s|ing)? real stone texture and production credibility visible\b/gi,
  /\buses all enhanced local images assigned to the .*? archive\b/gi,
  /\bnot a limited preview set\b/gi
];

export function cleanCardCopy(text: string, fallback = "") {
  let clean = text.trim();

  for (const pattern of bannedCopyPatterns) {
    clean = clean.replace(pattern, "");
  }

  clean = clean
    .replace(/\s+/g, " ")
    .replace(/\s*([,.;:])\s*/g, "$1 ")
    .replace(/\s+-\s+/g, " - ")
    .trim()
    .replace(/[. ,;:-]+$/g, "")
    .trim();

  if (/(real local|enhanced local|local images?|image archive|preview set|reference only|source folder|original source folder|source file|file name)/i.test(clean)) {
    return fallback;
  }

  return clean || fallback;
}

export const inquiryProjectTypes = [
  "Hotel & Hospitality Projects",
  "Luxury Vanity Tops & Cabinet Panels",
  "Stone Table & Coffee Table",
  "Custom Furniture & Sculptures"
] as const;

export const filterToCategories: Record<Exclude<ProjectFilter, "all">, AssetCategory[]> = {
  kitchen: ["kitchen-countertop"],
  hotel: ["hotel-project", "projects"],
  furniture: ["coffee-table"],
  sculpture: ["carving-decor"]
};

export function slugFromAsset(asset: Asset) {
  return `${asset.category}-${legacySlugFromAsset(asset)}`;
}

export function legacySlugFromAsset(asset: Asset) {
  return asset.filename.replace(/\.[^.]+$/, "");
}

export function getAssets(category: AssetCategory, limit?: number) {
  const items = assets.filter((asset) => asset.category === category && asset.mediaType !== "video");
  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getMediaAssets(category?: AssetCategory) {
  return assets.filter((asset) => !category || asset.category === category);
}

export function getProjectAssets(filter: ProjectFilter = "all", limit?: number) {
  const projectCategories: AssetCategory[] =
    filter === "all"
      ? ["kitchen-countertop", "hotel-project", "coffee-table", "carving-decor", "projects"]
      : filterToCategories[filter];

  const seen = new Set<string>();
  const items = assets.filter((asset) => {
    if (!projectCategories.includes(asset.category) || asset.mediaType === "video") {
      return false;
    }

    const key = asset.sourceName || asset.filename;
    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getFeaturedProjectAssets(limit = 8) {
  const groups: AssetCategory[] = [
    "kitchen-countertop",
    "hotel-project",
    "projects",
    "coffee-table",
    "carving-decor"
  ];
  const selected: Asset[] = [];

  for (let round = 0; selected.length < limit && round < 4; round += 1) {
    for (const category of groups) {
      const asset = getAssets(category)[round];
      if (asset && !selected.some((item) => item.filename === asset.filename && item.category === asset.category)) {
        selected.push(asset);
      }
      if (selected.length >= limit) {
        break;
      }
    }
  }

  return selected;
}

export function getAssetBySlug(slug: string) {
  if (/^(hotel-project|projects)-lxgu8211-dad9b01df1$|^(hotel-project|projects)-nxyb7914-10cc176aa4$/i.test(slug)) {
    return assets.find((asset) => asset.categoryLabel === "CABINET SLABS & VANITY BASINS");
  }

  return (
    getProjectAssets("all").find((asset) => slugFromAsset(asset) === slug) ||
    getProjectAssets("all").find((asset) => legacySlugFromAsset(asset) === slug) ||
    assets.find((asset) => asset.categoryLabel === "CABINET SLABS & VANITY BASINS") ||
    assets.find((asset) => slugFromAsset(asset) === slug) ||
    assets.find((asset) => legacySlugFromAsset(asset) === slug)
  );
}

export function getRelatedAssets(asset: Asset, limit = 3) {
  return assets
    .filter((item) => item.category === asset.category && item.mediaType !== "video" && item.filename !== asset.filename)
    .slice(0, limit);
}

function isCabinetSlabsVanityBasinsReference(asset: Asset) {
  return asset.categoryLabel === "CABINET SLABS & VANITY BASINS";
}

function buildCabinetSlabsVanityBasinsGallery(): Asset[] {
  const gallerySources = [
    "EJHC7752.JPG",
    "IEEN2409.JPG",
    "IQFJ3065.JPG",
    "JCYP1527.JPG",
    "JOUT9921.JPG",
    "QKVR1362.JPG",
    "VKRJ5473.JPG",
    "微信图片_20260613092854_425_46.jpg",
    "微信图片_20260613092855_426_46.jpg",
    "微信图片_20260613092858_429_46.jpg",
    "微信图片_20260613104305_442_46.jpg",
    "微信图片_20260613104308_444_46.jpg",
    "微信图片_20260613104311_445_46.jpg",
    "微信图片_20260613104323_451_46.jpg",
    "微信图片_20260613104404_470_46.jpg"
  ];

  return gallerySources.map((filename, index) => ({
    filename,
    category: "projects",
    mediaType: "image",
    sourceFolder: "石材厨柜板、洗手台",
    sourceName: filename,
    categoryLabel: "CABINET SLABS & VANITY BASINS",
    label: "Stone Cabinet Slabs & Vanity Basins",
    title: `Stone Cabinet Slabs & Vanity Basins ${String(index + 1).padStart(2, "0")}`,
    alt: "stone cabinet slabs and vanity basin reference for modern cabinet and bathroom applications",
    description:
      "Stone cabinet slabs and vanity basin reference prepared from the local stone materials archive for interior application review.",
    src: `/materials/projects/cabinet-slabs-vanity-basins/${filename}`
  }));
}

const caseCopy: Record<AssetCategory, Pick<ProjectCaseStudy, "application" | "finishType" | "scenario">> = {
  "kitchen-countertop": {
    application: "Kitchen countertops, islands, backsplashes, and residential stone surfaces",
    finishType: "Polished surface with fabricated edge detailing",
    scenario:
      "Designed for residential designers, developers, importers, and contractors sourcing luxury kitchen stone packages with consistent finishing and international delivery support."
  },
  "hotel-project": {
    application: "Hotel lobby, hospitality interiors, commercial flooring, wall cladding, and project supply",
    finishType: "Polished or honed project finish depending on application area",
    scenario:
      "Built for hotel designers, contractors, and procurement teams reviewing stone tone, scale, packing readiness, and fabrication credibility before requesting a project quote."
  },
  projects: {
    application: "Export project supply, commercial stone packages, and delivery-ready fabrication",
    finishType: "Project-ready polished finish with protective packing preparation",
    scenario:
      "Suitable for importers, contractors, and project buyers who need visible confirmation of stone handling, material preparation, and export coordination."
  },
  "coffee-table": {
    application: "Coffee tables, stone furniture, residential interiors, hospitality lounge pieces",
    finishType: "Polished furniture-grade finish",
    scenario:
      "Prepared for designers, furniture brands, and import buyers sourcing custom marble furniture with material character and export production support."
  },
  "carving-decor": {
    application: "Stone sculptures, carved marble decor, art objects, hospitality and villa interiors",
    finishType: "Hand-finished sculptural surface with polished or refined details",
    scenario:
      "Built for architects, designers, galleries, and luxury interior buyers seeking custom carved stone sculpture supplier capability with real production references."
  },
  factory: {
    application: "Production, edge processing, workshop inspection, packing, and export support",
    finishType: "Fabrication-stage and finished project surfaces",
    scenario:
      "Relevant for B2B buyers who need evidence of production strength before committing to hotel, countertop, furniture, or architectural stone packages."
  },
  materials: {
    application: "Material selection, sample review, design matching, and project specification",
    finishType: "Polished or sample-ready material surface",
    scenario:
      "Prepared for designers and procurement teams who need material clarity before requesting samples, pricing, or coordinated fabrication."
  }
};

export function getCaseStudyForAsset(asset: Asset): ProjectCaseStudy {
  const specialReference = isCabinetSlabsVanityBasinsReference(asset);
  const specialGallery = specialReference ? buildCabinetSlabsVanityBasinsGallery() : [];
  const gallery = specialReference ? specialGallery : getAssets(asset.category);
  const productionEvidence = specialReference
    ? specialGallery
    : asset.category === "factory"
      ? getAssets("factory")
      : getAssets("factory");
  const copy = caseCopy[asset.category];
  const contextByCategory: Record<AssetCategory, string> = {
    "kitchen-countertop": "Residential and developer kitchen projects with export-ready fabrication requirements.",
    "hotel-project": "Hospitality and commercial interiors that need consistent tone, finish, and coordination.",
    "coffee-table": "Custom furniture buyers sourcing stone pieces for premium residential and hospitality environments.",
    "carving-decor": "Decorative and sculptural commissions for villas, hotels, showrooms, and design-led interiors.",
    "factory": "Workshop and packing evidence for buyers checking production readiness and export handling.",
    "materials": "Material selection and specification review before sampling or pricing.",
    "projects": "Client-ready project supply with real local references and delivery-focused execution."
  };
  const scopeByCategory: Record<AssetCategory, string> = {
    "kitchen-countertop": "Countertops, island tops, vanities, and matching fabricated components.",
    "hotel-project": "Lobby stone, wall cladding, flooring, reception details, and public-area surfaces.",
    "coffee-table": "Coffee tables, side tables, console pieces, and furniture-grade stone fabrication.",
    "carving-decor": "Carved decor, sculpture forms, plinths, and custom architectural accents.",
    "factory": "Cutting, finishing, inspection, packing, and loading stages.",
    "materials": "Slab review, tone matching, finish comparison, and application planning.",
    "projects": "Project packaging, pre-delivery assembly, and export coordination."
  };
  const difficultyByCategory: Record<AssetCategory, string> = {
    "kitchen-countertop": "High accuracy on dimensions, edges, sink openings, and surface consistency.",
    "hotel-project": "Coordination-heavy work with larger volumes, repeatability, and site alignment.",
    "coffee-table": "Requires clean polishing, proportion control, and careful furniture finishing.",
    "carving-decor": "Craft-led execution with shape control, refinement, and surface integrity.",
    "factory": "Demonstrates production discipline, packing control, and export preparation.",
    "materials": "Demands tone consistency and practical review before production commitment.",
    "projects": "Project coordination must align fabrication, packing, and delivery timing."
  };
  const resultByCategory: Record<AssetCategory, string> = {
    "kitchen-countertop": "A premium kitchen stone package that looks refined, fits accurately, and supports international delivery.",
    "hotel-project": "A trustworthy hospitality reference that signals scale readiness and finish consistency.",
    "coffee-table": "A furniture piece with premium stone character and export-friendly fabrication quality.",
    "carving-decor": "A sculptural reference that communicates craftsmanship and luxury interior value.",
    "factory": "A production reference that reassures buyers about workflow, handling, and packing reliability.",
    "materials": "A material reference that supports clearer selection and quote preparation.",
    "projects": "A project archive reference that strengthens buyer confidence before pricing."
  };
  const hero = specialReference
    ? {
        ...asset,
        src: "/materials/projects/stone-cabinet-slabs-vanity-basins.webp",
        alt: "Ultra realistic premium stone cabinet slabs and vanity basin composition with elegant marble surfaces and refined bathroom detailing"
      }
    : asset;

  if (specialReference) {
    return {
      application: "Cabinet slabs, vanity basins, bathroom counter surfaces, and kitchen cabinetry applications",
      finishType: "Premium finished stone surfaces with refined fabrication detail",
      scenario:
        "Built for interior designers, contractors, and residential project buyers who need a finished stone reference that supports cabinetry and vanity use, clean fabrication quality, and premium presentation.",
      title: "Stone Cabinet Slabs & Vanity Basins",
      category: asset.category,
      label: "Stone Cabinet Slabs & Vanity Basins",
      description:
        "Finished stone products and premium interior applications for cabinet slabs and vanity basin use.",
      context: "Finished stone products prepared for cabinetry and vanity basin interior applications.",
      scope: "Cabinet slabs, vanity basins, bathroom tops, and matching finished stone components.",
      materialType: "Premium finished natural stone cabinet and basin products",
      executionDifficulty: "Requires clean finishing, accurate proportion, and reliable presentation across cabinetry uses.",
      result:
        "A premium reference that helps buyers evaluate finished stone quality, bathroom fit, and cabinetry suitability.",
      hero,
      gallery,
      productionEvidence
    };
  }

  return {
    ...copy,
    title: cleanDisplayTitle(asset.title, asset.label),
    description: `${asset.description} ${copy.scenario}`.trim(),
    context: contextByCategory[asset.category],
    scope: scopeByCategory[asset.category],
    materialType: asset.label,
    category: asset.category,
    label: asset.label,
    executionDifficulty: difficultyByCategory[asset.category],
    result: resultByCategory[asset.category],
    hero,
    gallery,
    productionEvidence
  };
}

export const contact = {
  companyName: "Atelier Marble",
  whatsapp: "+86 13288726333",
  whatsappUrl: "https://wa.me/8613288726333",
  emails: ["aba702121@outlook.com", "huangding0802@outlook.com"],
  address: "中国广东省云浮市云城区格木桥石材转移基地",
  location: "Yunfu, Guangdong, China"
};

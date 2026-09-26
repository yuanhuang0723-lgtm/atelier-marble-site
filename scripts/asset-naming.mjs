import path from "node:path";
import crypto from "node:crypto";

const WECHAT_IMAGE = "\u5fae\u4fe1\u56fe\u7247";

export const sourceFolders = {
  "\u4e3b\u9875\u53f0\u9762\u5c01\u9762": {
    categories: ["kitchen-countertop"],
    label: "Stone Countertop & Coffee Table",
    titleBase: "Stone Countertop & Coffee Table",
    industryTerm: "stone countertop and coffee table",
    description:
      "Real local stone countertop and coffee table reference prepared from the original source folder for product review."
  },
  "\u53f0\u9762\u5c01\u9762": {
    categories: ["kitchen-countertop"],
    label: "Stone Countertop & Coffee Table",
    titleBase: "Stone Countertop & Coffee Table",
    industryTerm: "stone countertop and coffee table",
    description:
      "Real local stone countertop and coffee table reference prepared from the original source folder for product review."
  },
  "\u4e3b\u9875\u8f66\u95f4\u5c01\u9762": {
    categories: ["factory"],
    label: "Workshop Production",
    titleBase: "Workshop Production",
    industryTerm: "workshop production",
    description:
      "Real local workshop production reference prepared from the original source folder for factory capability review."
  },
  "\u8f66\u95f4\u5c01\u9762": {
    categories: ["factory"],
    label: "Workshop Production",
    titleBase: "Workshop Production",
    industryTerm: "workshop production",
    description:
      "Real local workshop production reference prepared from the original source folder for factory capability review."
  },
  "\u751f\u4ea7\u8f66\u95f4": {
    categories: ["factory"],
    label: "Workshop Production",
    titleBase: "Workshop Production",
    industryTerm: "workshop production",
    description:
      "Real local workshop production reference prepared from the original source folder for factory capability review."
  },
  "\u4e3b\u9875\u96d5\u523b\u5c01\u9762": {
    categories: ["carving-decor"],
    label: "Stone Sculpture Piece",
    titleBase: "Stone Sculpture Piece",
    industryTerm: "stone sculpture piece",
    description:
      "Real local stone sculpture piece prepared from the original source folder for carving and decor review."
  },
  "\u96d5\u523b\u5c01\u9762": {
    categories: ["carving-decor"],
    label: "Stone Sculpture Piece",
    titleBase: "Stone Sculpture Piece",
    industryTerm: "stone sculpture piece",
    description:
      "Real local stone sculpture piece prepared from the original source folder for carving and decor review."
  },
  "\u96d5\u523b\u5c01\u97621": {
    categories: ["carving-decor"],
    label: "Stone Sculpture Piece",
    titleBase: "Stone Sculpture Piece",
    industryTerm: "stone sculpture piece",
    description:
      "Real local stone sculpture piece prepared from the original source folder for carving and decor review."
  },
  "\u9152\u5e97\u5c01\u9762": {
    categories: ["hotel-project"],
    label: "Hotel Project",
    titleBase: "Hotel Project",
    industryTerm: "hotel project",
    description:
      "Real local hotel project reference prepared from the original source folder for hospitality review."
  },
  "\u6210\u54c1\u5c01\u9762": {
    categories: ["coffee-table"],
    label: "Finished Stone Product",
    titleBase: "Finished Stone Product",
    industryTerm: "finished stone product",
    description:
      "Real local finished stone product reference prepared from the original source folder for craftsmanship review."
  },
  "\u6d17\u624b\u53f0": {
    categories: ["materials"],
    label: "Stone Cabinet & Basin Slab",
    titleBase: "Stone Cabinet & Basin Slab",
    industryTerm: "stone cabinet and basin slab",
    description:
      "Real local stone cabinet and basin slab reference prepared from the original source folder for material review."
  },
  "\u5e95\u56fe": {
    categories: ["carving-decor"],
    label: "Stone Sculpture Piece",
    titleBase: "Stone Sculpture Piece",
    industryTerm: "stone sculpture piece",
    description:
      "Real local stone sculpture piece prepared from the original source folder for carving and decor review."
  },
  "\u5e95\u56fe\u5c01\u9762": {
    categories: ["carving-decor"],
    label: "Stone Sculpture Piece",
    titleBase: "Stone Sculpture Piece",
    industryTerm: "stone sculpture piece",
    description:
      "Real local stone sculpture piece prepared from the original source folder for carving and decor review."
  },
  "\u5361\u7247\u5c01\u9762": {
    categories: ["projects"],
    label: "Production Process",
    titleBase: "Production Process",
    industryTerm: "production process",
    description:
      "Real local project cover reference prepared from the source folder for project capability review."
  },
  "\u65b0\u5efa\u6587\u4ef6\u5939": {
    categories: ["projects"],
    label: "Production Process",
    titleBase: "Production Process",
    industryTerm: "production process",
    description:
      "Real local project reference prepared from the source folder for project capability review."
  },
  "\u65b0\u5efa\u6587\u4ef6\u5939 (2)": {
    categories: ["projects"],
    label: "Production Process",
    titleBase: "Production Process",
    industryTerm: "production process",
    description:
      "Real local project reference prepared from the source folder for project capability review."
  },
  "\u53d1\u8d27": {
    categories: ["projects", "hotel-project"],
    label: "Shipping & Export",
    titleBase: "Shipping & Export",
    industryTerm: "shipping and export project material",
    description:
      "Real local shipping and export reference prepared from the original source folder for project delivery review."
  },
  "\u77f3\u6750\u53a8\u67dc\u677f\u3001\u6d17\u624b\u53f0": {
    categories: ["materials"],
    label: "Stone Cabinet & Basin Slab",
    titleBase: "Stone Cabinet & Basin Slab",
    industryTerm: "stone cabinet and basin slab",
    description:
      "Real local stone cabinet and basin slab reference prepared from the original source folder for material review."
  },
  "\u77f3\u6750\u53f0\u9762\u3001\u8336\u51e0": {
    categories: ["kitchen-countertop"],
    label: "Stone Countertop & Coffee Table",
    titleBase: "Stone Countertop & Coffee Table",
    industryTerm: "stone countertop and coffee table",
    description:
      "Real local stone countertop and coffee table reference prepared from the original source folder for product review."
  },
  "\u77f3\u6750\u6210\u54c1": {
    categories: ["coffee-table"],
    label: "Finished Stone Product",
    titleBase: "Finished Stone Product",
    industryTerm: "finished stone product",
    description:
      "Real local finished stone product reference prepared from the original source folder for craftsmanship review."
  },
  "\u77f3\u6750\u96d5\u523b\u6446\u4ef6": {
    categories: ["carving-decor"],
    label: "Stone Sculpture Piece",
    titleBase: "Stone Sculpture Piece",
    industryTerm: "stone sculpture piece",
    description:
      "Real local stone sculpture piece prepared from the original source folder for carving and decor review."
  },
  "\u8f66\u95f4": {
    categories: ["factory"],
    label: "Workshop Production",
    titleBase: "Workshop Production",
    industryTerm: "workshop production",
    description:
      "Real local workshop production reference prepared from the original source folder for factory capability review."
  },
  "__root__": {
    categories: ["projects"],
    label: "Production Process",
    titleBase: "Production Process",
    industryTerm: "production process",
    description:
      "Real local production process media prepared from the source folder for project capability review."
  }
};

export const supportedImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".bmp", ".tif", ".tiff"]);
export const supportedVideoExtensions = new Set([".mp4", ".mov", ".m4v", ".webm"]);
export const supportedExtensions = new Set([...supportedImageExtensions, ...supportedVideoExtensions]);

const factoryIllustrationDefaults = {
  label: "Illustrative Workshop Visualization",
  titleBase: "Illustrative Stone Workshop Layout",
  industryTerm: "stone workshop layout concept",
  description:
    "Illustrative stone workshop layout rendering for design discussion. It does not document a specific facility, machine, production run, inspection, packing, or shipment.",
  imageTitle: "Illustrative Stone Workshop Layout Concept",
  imageAlt:
    "Illustrative stone workshop layout rendering; not a documentary photograph of a specific facility, machine, production run, inspection, or shipment.",
  isIllustrative: true
};

const factoryIllustrationOverrides = new Map([
  ["车间封面|ChatGPT Image 2026年6月16日 00_11_52.png", {
    label: "AI-Generated Workshop Illustration",
    titleBase: "AI-Generated Stone Workshop Concept",
    industryTerm: "AI-generated stone workshop concept",
    description:
      "AI-generated workshop concept illustration. It does not document a real facility, equipment, production process, inspection, packing, or shipment.",
    imageTitle: "AI-Generated Stone Workshop Concept Illustration",
    imageAlt:
      "AI-generated concept illustration of a stone workshop; it does not depict a verified factory, equipment, production process, inspection, or shipment."
  }],
  ["车间|AQSL9670.JPG", {
    label: "Illustrative Stone Basin Concept",
    titleBase: "Illustrative Carved Stone Vanity Basin",
    industryTerm: "carved stone vanity basin and decorative countertop design",
    description: "Illustrative vanity basin and countertop concept rendering, not a documentary product or factory photograph.",
    imageTitle: "Illustrative Carved Stone Vanity Basin Concept",
    imageAlt: "Illustrative carved stone vanity basin with decorative detailing; concept rendering, not a completed product photograph."
  }],
  ["车间|BUZE4845.JPG", {
    label: "Illustrative Stone Basin Concept",
    titleBase: "Illustrative Vanity Basin and Countertop",
    industryTerm: "carved stone vanity basin and countertop design",
    description: "Illustrative vanity basin and countertop concept rendering, not a documentary product or factory photograph.",
    imageTitle: "Illustrative Vanity Basin and Countertop Concept",
    imageAlt: "Illustrative carved stone vanity basin and countertop shown as a design concept, not a completed project photograph."
  }],
  ["车间|JEUM7834.JPG", {
    label: "Illustrative Stone Column Design",
    titleBase: "Illustrative Cylindrical Stone Forms",
    industryTerm: "cylindrical white stone component design",
    description: "Illustrative rendering of cylindrical stone forms for design discussion, not a record of factory production.",
    imageTitle: "Illustrative Cylindrical Stone Component Forms",
    imageAlt: "Illustrative arrangement of tall white cylindrical stone forms; concept rendering, not a production photograph."
  }],
  ["车间|JSBV9066.JPG", {
    label: "Illustrative Stone Basin Concept",
    titleBase: "Illustrative Carved Vanity Countertop",
    industryTerm: "carved stone vanity basin and countertop design",
    description: "Illustrative vanity basin and countertop concept rendering, not a documentary product or factory photograph.",
    imageTitle: "Illustrative Carved Stone Vanity Countertop Concept",
    imageAlt: "Illustrative ornate stone vanity basin and countertop detail, shown as a design concept rather than a completed project."
  }],
  ["车间|PRYX9003.JPG", {
    label: "Illustrative Tapered Stone Form",
    titleBase: "Illustrative Tapered Stone Columns",
    industryTerm: "tapered stone column or sculptural form design",
    description: "Illustrative rendering of tapered stone forms for design discussion, not a record of factory production.",
    imageTitle: "Illustrative Tapered Stone Column Forms",
    imageAlt: "Illustrative rendering of two tall tapered stone columns or sculptural forms; not a production photograph."
  }],
  ["车间|TKAF4877.JPG", {
    label: "Illustrative Carved Stone Pedestal",
    titleBase: "Illustrative Carved Stone Pedestal",
    industryTerm: "carved stone pedestal with inset panels design",
    description: "Illustrative carved pedestal concept rendering, not a documentary product or factory photograph.",
    imageTitle: "Illustrative Carved Stone Pedestal Design",
    imageAlt: "Illustrative carved stone pedestal with inset panels; a design rendering, not evidence of production or a completed order."
  }]
]);

const visualReferenceFolders = {
  "__root__": {
    label: "Stone Design Reference",
    titleBase: "Stone Design Reference",
    industryTerm: "stone product and design reference",
    description: "Stone product or design reference image. The image alone does not verify a customer project, facility, or production capability.",
    imageAlt: "Stone product or design reference; the image alone does not verify a customer project or production capability.",
    publicFilenameBase: "stone-design-reference"
  },
  "新建文件夹": {
    label: "Illustrative Stone Project Concept",
    titleBase: "Illustrative Stone Project Concept",
    industryTerm: "illustrative stone interior and custom component concept",
    description: "Illustrative stone interior and component concepts for design reference. They do not document completed customer projects or installation.",
    imageTitle: "Illustrative Stone Project Concept",
    imageAlt: "Illustrative stone interior or component concept; not a documentary photograph of a completed project.",
    publicFilenameBase: "illustrative-stone-project-concept",
    isIllustrative: true,
    uniqueTitleToken: true
  },
  "新建文件夹 (2)": {
    label: "AI-Generated Stone Interior Concept",
    titleBase: "AI-Generated Stone Interior Concept",
    industryTerm: "AI-generated stone kitchen interior concept",
    description: "AI-generated kitchen and stone interior concept. It does not document a completed customer project or installed product.",
    imageTitle: "AI-Generated Stone Kitchen Concept",
    imageAlt: "AI-generated stone kitchen and island concept; not a photograph of a completed project.",
    publicFilenameBase: "ai-generated-stone-kitchen-concept",
    isIllustrative: true,
    uniqueTitleToken: true
  },
  "石材台面、茶几": {
    label: "Stone Countertop and Table Reference",
    titleBase: "Stone Countertop and Table Reference",
    industryTerm: "stone countertop or table surface and edge profile",
    description: "Stone countertop and table visual reference for comparing surface character, component shape, and edge details. Provenance is not asserted.",
    imageAlt: "Stone countertop or table reference showing a surface, component shape, or edge detail.",
    publicFilenameBase: "stone-countertop-table-reference"
  },
  "石材雕刻摆件": {
    label: "Decorative Stone Carving Reference",
    titleBase: "Decorative Stone Carving Reference",
    industryTerm: "decorative stone carving and sculptural form",
    description: "Decorative stone carving and sculptural-form reference for reviewing visible shape and finish. The image does not establish who produced the item.",
    imageAlt: "Decorative stone carving or sculptural form shown as a product reference.",
    publicFilenameBase: "decorative-stone-carving-reference"
  },
  "石材厨柜板、洗手台": {
    label: "Stone Vanity and Basin Component Reference",
    titleBase: "Stone Vanity and Basin Component Reference",
    industryTerm: "stone vanity top, basin, or cabinet component",
    description: "Stone vanity, basin, and cabinet-component visual reference for reviewing form and surface. Project provenance is not asserted.",
    imageAlt: "Stone vanity top, basin, or cabinet component shown as a product reference.",
    publicFilenameBase: "stone-vanity-basin-component"
  },
  "发货": {
    label: "Stone Workpiece Handling Reference",
    titleBase: "Stone Workpiece Handling Reference",
    industryTerm: "stone workpiece and workshop handling area",
    description: "Stone workpieces shown in workshop handling areas. These images do not document export packing, loading, or shipment.",
    imageAlt: "Stone workpiece in a workshop handling area; not documentation of export packing or shipment.",
    publicFilenameBase: "stone-workpiece-handling-reference"
  },
  "酒店封面": {
    label: "Illustrative Hotel Stone Interior Concept",
    titleBase: "Illustrative Hotel Stone Interior Concept",
    industryTerm: "illustrative hotel interior with architectural stone",
    description: "Illustrative hotel interior concept showing architectural stone surfaces. It is not a photograph or delivery record for a named hotel project.",
    imageTitle: "Illustrative Hotel Stone Interior Concept",
    imageAlt: "Illustrative hotel interior with stone flooring and wall surfaces; not a photograph of a completed hotel project.",
    publicFilenameBase: "illustrative-hotel-stone-interior",
    isIllustrative: true
  },
  "卡片封面": {
    label: "Illustrative Stone Product Concept",
    titleBase: "Illustrative Stone Product Concept",
    industryTerm: "illustrative stone product and interior concept",
    description: "Illustrative stone product and interior visuals used as design references, not as records of completed customer orders.",
    imageTitle: "Illustrative Stone Product Concept",
    imageAlt: "Illustrative stone product or interior concept; not a documentary project photograph.",
    publicFilenameBase: "illustrative-stone-product-concept",
    isIllustrative: true,
    uniqueTitleToken: true
  },
  "底图": {
    label: "Illustrative Stone Interior Concept",
    titleBase: "Illustrative Stone Interior Concept",
    industryTerm: "illustrative stone interior wall and component design",
    description: "Illustrative stone interior design reference. It does not document a verified installation or completed customer project.",
    imageTitle: "Illustrative Stone Interior Concept",
    imageAlt: "Illustrative stone interior and component design; not a photograph of a completed installation.",
    publicFilenameBase: "illustrative-stone-interior-concept",
    isIllustrative: true
  },
  "底图封面": {
    label: "Illustrative Stone Vanity Interior Concept",
    titleBase: "Illustrative Stone Vanity Interior Concept",
    industryTerm: "illustrative stone vanity and bathroom interior design",
    description: "Illustrative stone vanity interior reference. It does not document a verified installation or completed customer project.",
    imageTitle: "Illustrative Stone Vanity Interior Concept",
    imageAlt: "Illustrative stone vanity and bathroom interior; not a photograph of a completed installation.",
    publicFilenameBase: "illustrative-stone-vanity-interior",
    isIllustrative: true
  },
  "成品封面": {
    label: "Stone Tile Layout Reference",
    titleBase: "Stone Tile Layout Reference",
    industryTerm: "stone tile and surface layout",
    description: "Stone tile layout visual reference. The image does not identify a specific installation or project location.",
    imageAlt: "Stone tiles arranged in a surface layout with visible alignment lines.",
    publicFilenameBase: "stone-tile-layout-reference"
  },
  "石材成品": {
    label: "Stone Supply Overview Graphic",
    titleBase: "Stone Supply Overview Graphic",
    industryTerm: "stone product and supply overview graphic",
    description: "Stone supply overview graphic with product imagery and service copy; it is not a project completion or shipment record.",
    imageAlt: "Stone supply overview graphic with product imagery and service information; not a shipment record.",
    publicFilenameBase: "stone-supply-overview-graphic"
  },
  "洗手台": {
    label: "Illustrative Stone Vanity Concept",
    titleBase: "Illustrative Stone Vanity Concept",
    industryTerm: "illustrative stone vanity and basin design",
    description: "Illustrative stone vanity and basin design reference, not documentation of a completed order.",
    imageTitle: "Illustrative Stone Vanity Concept",
    imageAlt: "Illustrative stone vanity and basin design; not a photograph of a completed order.",
    publicFilenameBase: "illustrative-stone-vanity-concept",
    isIllustrative: true
  },
  "台面封面": {
    label: "Stone Tabletop Product Reference",
    titleBase: "Stone Tabletop Product Reference",
    industryTerm: "round stone tabletop and support detail",
    description: "Stone tabletop visual reference showing its surface and support form. Provenance is not asserted.",
    imageAlt: "Round stone tabletop shown with its surface and support form.",
    publicFilenameBase: "round-stone-tabletop-reference"
  },
  "主页台面封面": {
    label: "Illustrative Stone Table Interior Concept",
    titleBase: "Illustrative Stone Table Interior Concept",
    industryTerm: "illustrative stone dining table and interior concept",
    description: "Illustrative dining-room concept featuring a stone table; it does not document a completed customer project.",
    imageTitle: "Illustrative Stone Dining Table Concept",
    imageAlt: "Illustrative stone dining table in an interior concept; not a photograph of a completed project.",
    publicFilenameBase: "illustrative-stone-dining-table",
    isIllustrative: true
  },
  "主页雕刻封面": {
    label: "Illustrative Stone Garden Sculpture Concept",
    titleBase: "Illustrative Stone Garden Sculpture Concept",
    industryTerm: "illustrative stone garden lantern and sculpture design",
    description: "Illustrative stone garden sculpture concept, not documentation of a completed project or produced item.",
    imageTitle: "Illustrative Stone Garden Sculpture Concept",
    imageAlt: "Illustrative stone garden lantern or sculpture concept; not a photograph of a completed order.",
    publicFilenameBase: "illustrative-stone-garden-sculpture",
    isIllustrative: true
  },
  "雕刻封面": {
    label: "AI-Generated Stone Sculpture Concept",
    titleBase: "AI-Generated Stone Sculpture Concept",
    industryTerm: "AI-generated decorative stone sculpture concept",
    description: "AI-generated decorative stone sculpture concept; not a photograph of a completed product or production process.",
    imageTitle: "AI-Generated Stone Sculpture Concept",
    imageAlt: "AI-generated decorative stone sculpture concept; not a documentary product photograph.",
    publicFilenameBase: "ai-generated-stone-sculpture-concept",
    isIllustrative: true
  },
  "雕刻封面1": {
    label: "Illustrative Sculptural Stone Form",
    titleBase: "Illustrative Sculptural Stone Form",
    industryTerm: "illustrative loop-shaped sculptural stone form",
    description: "Illustrative sculptural stone form for design reference; not evidence of a completed order or production capability.",
    imageTitle: "Illustrative Sculptural Stone Form",
    imageAlt: "Illustrative loop-shaped sculptural stone form in an interior concept.",
    publicFilenameBase: "illustrative-sculptural-stone-form",
    isIllustrative: true
  }
};

const visualReferenceAssetOverrides = new Map([
  ["__root__|951d223e-549e-4124-8b4f-72ac143f455b.png", {
    label: "Stone Component Layout Graphic", titleBase: "Stone Component Layout Graphic", industryTerm: "stone component layout and finish reference graphic",
    description: "Stone component layout graphic with multiple product and finish references; not a production or installation record.",
    imageAlt: "Stone component layout graphic showing product shapes and finish references.", publicFilenameBase: "stone-component-layout-graphic"
  }],
  ["__root__|9d5ee32d-3292-4719-b3ae-e91a28ff4886.png", {
    label: "Illustrative Stone Furniture Concept", titleBase: "Illustrative Stone Furniture Concept", industryTerm: "illustrative stone furniture and interior concept",
    description: "Illustrative stone furniture concept for interior design reference; not a completed project photograph.",
    imageTitle: "Illustrative Stone Furniture Concept", imageAlt: "Illustrative stone furniture arrangement in an interior concept.",
    publicFilenameBase: "illustrative-stone-furniture-concept", isIllustrative: true
  }],
  ["__root__|c2dfb39f-4eb2-4598-a0f4-fab762b67b00.png", {
    label: "Stone Fabrication Overview Graphic", titleBase: "Stone Fabrication Overview Graphic", industryTerm: "stone fabrication and product overview graphic",
    description: "Stone fabrication overview graphic with service and product imagery; it does not verify a specific process or factory capability.",
    imageAlt: "Stone fabrication overview graphic with service and product imagery; not a process record.", publicFilenameBase: "stone-fabrication-overview-graphic"
  }],
  ["__root__|ChatGPT Image 2026年6月15日 22_33_19.png", {
    label: "AI-Generated Stone Interior Concept", titleBase: "AI-Generated Stone Interior Concept", industryTerm: "AI-generated stone interior and furniture concept",
    description: "AI-generated stone interior concept; not a photograph of a completed customer project.",
    imageTitle: "AI-Generated Stone Interior Concept", imageAlt: "AI-generated stone interior and furniture concept; not a completed project photograph.",
    publicFilenameBase: "ai-generated-stone-interior-concept", isIllustrative: true
  }],
  ["__root__|ChatGPT Image 2026年6月15日 23_16_08.png", {
    label: "AI-Generated Stone Interior Concept", titleBase: "AI-Generated Stone Interior Concept", industryTerm: "AI-generated stone interior and furniture concept",
    description: "AI-generated stone interior concept; not a photograph of a completed customer project.",
    imageTitle: "AI-Generated Stone Interior Concept", imageAlt: "AI-generated stone interior and furniture concept; not a completed project photograph.",
    publicFilenameBase: "ai-generated-stone-interior-concept", isIllustrative: true
  }],
  ["卡片封面|stone-carving.png", {
    label: "Illustrative Stone Sculpture Concept", titleBase: "Illustrative Stone Sculpture Concept", industryTerm: "illustrative loop-shaped stone sculpture and interior",
    description: "Illustrative loop-shaped stone sculpture concept for design reference; not a completed product photograph.",
    imageTitle: "Illustrative Stone Sculpture Concept", imageAlt: "Illustrative loop-shaped stone sculpture in a modern interior concept.",
    publicFilenameBase: "illustrative-loop-stone-sculpture", isIllustrative: true
  }],
  ["卡片封面|stone-table-coffee.png", {
    label: "Illustrative Stone Coffee Table Concept", titleBase: "Illustrative Stone Coffee Table Concept", industryTerm: "illustrative stone coffee table and living-room setting",
    description: "Illustrative stone coffee table and living-room concept; not a completed project photograph.",
    imageTitle: "Illustrative Stone Coffee Table Concept", imageAlt: "Illustrative stone coffee table in a living-room concept.",
    publicFilenameBase: "illustrative-stone-coffee-table", isIllustrative: true
  }],
  ["卡片封面|vanity-cabinet.png", {
    label: "Illustrative Stone Vanity Concept", titleBase: "Illustrative Stone Vanity Concept", industryTerm: "illustrative stone vanity cabinet and bathroom interior",
    description: "Illustrative stone vanity and bathroom concept; not a completed project photograph.",
    imageTitle: "Illustrative Stone Vanity Concept", imageAlt: "Illustrative stone vanity cabinet in a bathroom interior concept.",
    publicFilenameBase: "illustrative-stone-vanity", isIllustrative: true
  }],
  ["发货|LXGU8211.JPG", {
    label: "Stone Components on Workshop Stands", titleBase: "Stone Components on Workshop Stands", industryTerm: "stone components arranged on workshop stands",
    description: "Stone components arranged on supports in a work area; the image does not document export packing or shipment.",
    imageAlt: "Stone components arranged on supports in a work area; not an export packing or shipment record.", publicFilenameBase: "stone-components-workshop-stands"
  }],
  ["发货|NXYB7914.JPG", {
    label: "Stone Workpiece Handling", titleBase: "Stone Workpiece Handling", industryTerm: "worker handling a stone workpiece in a workshop",
    description: "A worker handles a stone workpiece in a workshop area; the image does not document packing or shipment.",
    imageAlt: "Worker handling a stone workpiece in a workshop; not documentation of export packing or shipment.", publicFilenameBase: "stone-workpiece-handling"
  }],
  ["酒店封面|3cf6f27a-c457-472c-b46c-a8effb460825.png", {
    label: "Illustrative Hotel Interior Concept", titleBase: "Illustrative Hotel Interior Concept", industryTerm: "illustrative hotel lobby with architectural stone surfaces",
    description: "Illustrative hotel interior with stone surfaces; not a photograph or completion record for a named hotel project.",
    imageTitle: "Illustrative Hotel Stone Interior", imageAlt: "Illustrative hotel lobby with stone flooring and wall surfaces; not a completed project photograph.",
    publicFilenameBase: "illustrative-hotel-stone-interior", isIllustrative: true
  }],
  ["成品封面|微信图片_20260613092841_410_46.jpg", {
    label: "Stone Tile Layout Reference", titleBase: "Stone Tile Layout Reference", industryTerm: "stone tile and surface alignment layout",
    description: "Stone tile layout reference showing surface alignment; the installation location is not identified.",
    imageAlt: "Stone tiles arranged in a surface layout with visible alignment lines.", publicFilenameBase: "stone-tile-layout-reference"
  }],
  ["石材成品|d735325f-f5fa-4f85-8bc2-29df1eb0c510.png", {
    label: "Stone Supply Overview Graphic", titleBase: "Stone Supply Overview Graphic", industryTerm: "stone product and supply overview graphic",
    description: "Stone supply overview graphic with product imagery and service copy; it is not a product order or shipment record.",
    imageAlt: "Stone supply overview graphic with product imagery and service information; not a shipment record.", publicFilenameBase: "stone-supply-overview-graphic"
  }],
  ["雕刻封面|ChatGPT Image 2026年6月16日 00_16_16.png", {
    label: "AI-Generated Stone Sculpture Concept", titleBase: "AI-Generated Stone Sculpture Concept", industryTerm: "AI-generated floral stone sculpture concept",
    description: "AI-generated floral stone sculpture concept; not a photograph of a completed product or production process.",
    imageTitle: "AI-Generated Floral Stone Sculpture", imageAlt: "AI-generated floral stone sculpture concept; not a documentary product photograph.",
    publicFilenameBase: "ai-generated-floral-stone-sculpture", isIllustrative: true
  }],
  ["雕刻封面1|ig_0f563028d97ee588016a2fb8349afc819b91ce142528fc1811.png", {
    label: "Illustrative Loop-Shaped Stone Sculpture", titleBase: "Illustrative Loop-Shaped Stone Sculpture", industryTerm: "loop-shaped sculptural stone form",
    description: "Sculptural stone form shown in an interior visualization; product provenance is not asserted.",
    imageTitle: "Illustrative Loop-Shaped Stone Sculpture", imageAlt: "Loop-shaped sculptural stone form shown in an interior visualization.",
    publicFilenameBase: "illustrative-loop-stone-sculpture", isIllustrative: true
  }],
  ["主页雕刻封面|7b7cb542-0dbc-4626-b9cc-f663dbee6d06.png", {
    label: "Illustrative Stone Garden Sculpture Concept", titleBase: "Illustrative Stone Garden Sculpture Concept", industryTerm: "illustrative stone garden lantern and sculpture design",
    description: "Illustrative stone garden lantern concept; not documentation of a completed order or installation.",
    imageTitle: "Illustrative Stone Garden Lantern", imageAlt: "Illustrative stone garden lantern in a landscape concept; not a completed project photograph.",
    publicFilenameBase: "illustrative-stone-garden-lantern", isIllustrative: true
  }],
  ["主页台面封面|55e95fa7-f883-46a7-bef9-4c549ec64588.png", {
    label: "Illustrative Stone Dining Table Concept", titleBase: "Illustrative Stone Dining Table Concept", industryTerm: "illustrative stone dining table in a dining-room concept",
    description: "Illustrative stone dining table and room concept; not a photograph of a completed customer project.",
    imageTitle: "Illustrative Stone Dining Table Concept", imageAlt: "Illustrative stone dining table in a dining-room concept; not a completed project photograph.",
    publicFilenameBase: "illustrative-stone-dining-table", isIllustrative: true
  }]
]);

export function sourceFolderName(sourceRoot, filePath) {
  const relative = path.relative(sourceRoot, filePath);
  const parts = relative.split(path.sep);
  return parts.length > 1 ? parts[0] : "__root__";
}

export function sourceInfo(sourceRoot, filePath) {
  const folder = sourceFolderName(sourceRoot, filePath);
  const info = sourceFolders[folder] || sourceFolders.__root__;
  const key = `${folder}|${path.basename(filePath)}`;
  let details = info;
  if (info.categories.includes("factory")) {
    details = {
      ...info,
      ...factoryIllustrationDefaults,
      ...(factoryIllustrationOverrides.get(key) || {})
    };
  } else {
    details = { ...info, ...(visualReferenceFolders[folder] || visualReferenceFolders.__root__ || {}) };
  }

  return { ...details, ...(visualReferenceAssetOverrides.get(key) || {}) };
}

export function slug(value) {
  return value
    .normalize("NFKD")
    .replace(new RegExp(`^${WECHAT_IMAGE}[_-]?`), "")
    .replace(/[\u5e74\u6708\u65e5]/g, "-")
    .replace(/[^\p{Letter}\p{Number}_.-]+/gu, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

export function imageId(filePath) {
  return crypto.createHash("sha1").update(filePath).digest("hex").slice(0, 10);
}

function stableAssetId(filePath, logicalFilename) {
  const storedId = logicalFilename?.match(/-([a-f0-9]{10})\.[^.]+$/i)?.[1];
  return storedId || imageId(filePath);
}

function monthName(month) {
  const names = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return names[Math.max(1, Math.min(12, Number(month))) - 1];
}

export function readableFileToken(filePath) {
  const parsed = path.parse(filePath);
  const raw = parsed.name
    .replace(new RegExp(`^${WECHAT_IMAGE}[_-]?`), "")
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const dateMatch = raw.match(/(\d{8,14})/);
  if (dateMatch) {
    return dateMatch[1];
  }

  const chineseDateMatch = raw.match(/^(\d{1,2})\u6708(\d{1,2})\u65e5$/);
  if (chineseDateMatch) {
    return `${monthName(chineseDateMatch[1])} ${String(chineseDateMatch[2]).padStart(2, "0")}`;
  }

  if (/^\d+$/.test(raw)) {
    return `No. ${raw}`;
  }

  return raw || imageId(filePath).toUpperCase();
}

export function titleFor(filePath, info, mediaType, logicalFilename) {
  const token = readableFileToken(filePath);
  if (mediaType === "video") {
    return `Production Process Video - ${token}`;
  }

  if (info.isIllustrative) {
    const title = info.imageTitle || info.titleBase;
    return info.uniqueTitleToken ? `${title} - Ref ${stableAssetId(filePath, logicalFilename).slice(-6).toUpperCase()}` : title;
  }

  return `${info.titleBase} - ${token}`;
}

export function publicFilenameFor(filePath, info, mediaType, logicalFilename) {
  const id = stableAssetId(filePath, logicalFilename);
  const extension = path.extname(filePath).toLowerCase();
  if (mediaType === "video") {
    const base = slug(path.parse(filePath).name) || id;
    return `${base}-${id}${extension}`;
  }

  const base = slug(info.publicFilenameBase || (info.isIllustrative ? info.imageTitle || info.titleBase : info.titleBase));
  return `${base || "stone-image"}-${id}.webp`;
}

export function altFor(info, mediaType) {
  if (mediaType === "video") {
    return `production process video from local file system showing ${info.industryTerm}`;
  }

  if (info.isIllustrative) {
    return info.imageAlt || `Illustrative rendering of ${info.industryTerm}; not a documentary production photograph.`;
  }

  return info.imageAlt || `${info.industryTerm} visual reference.`;
}

export function categoryFor(sourceRoot, filePath) {
  return sourceInfo(sourceRoot, filePath).categories;
}

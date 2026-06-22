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

export function sourceFolderName(sourceRoot, filePath) {
  const relative = path.relative(sourceRoot, filePath);
  const parts = relative.split(path.sep);
  return parts.length > 1 ? parts[0] : "__root__";
}

export function sourceInfo(sourceRoot, filePath) {
  const folder = sourceFolderName(sourceRoot, filePath);
  return sourceFolders[folder] || sourceFolders.__root__;
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

export function titleFor(filePath, info, mediaType) {
  const token = readableFileToken(filePath);
  if (mediaType === "video") {
    return `Production Process Video - ${token}`;
  }

  return `${info.titleBase} - ${token}`;
}

export function altFor(info, mediaType) {
  return mediaType === "video"
    ? `production process video from local file system showing ${info.industryTerm}`
    : `real local ${info.industryTerm} image from source folder ${info.label}`;
}

export function categoryFor(sourceRoot, filePath) {
  return sourceInfo(sourceRoot, filePath).categories;
}

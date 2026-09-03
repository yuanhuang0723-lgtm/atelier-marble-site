import JsonLd from "./JsonLd";
import { absoluteUrl } from "../lib/seo";

type BreadcrumbItem = { name: string; path: string };

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })) }} />;
}

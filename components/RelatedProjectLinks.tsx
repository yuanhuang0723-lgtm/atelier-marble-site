import Link from "next/link";

type RelatedProjectLink = { label: string; href: string };

export default function RelatedProjectLinks({ links }: { links: RelatedProjectLink[] }) {
  return (
    <nav aria-label="Related project routes" className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-ink/10 pt-6 text-sm">
      <span className="eyebrow-luxury">Related routes</span>
      {links.map((link) => (
        <Link key={link.href} className="text-cta-luxury" href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}


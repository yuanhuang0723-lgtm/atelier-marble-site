import Link from "next/link";

const navItems = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Hotel", "/hotel-hospitality-projects"],
  ["Kitchens", "/luxury-residential-kitchens"],
  ["Interiors", "/architectural-stone-interiors"],
  ["Materials", "/materials"],
  ["Furniture", "/custom-furniture-sculptures"],
  ["Inquiry", "/contact"]
] as const;

export default function Nav() {
  return (
    <header className="site-nav fixed left-0 right-0 top-0 z-40 border-b border-[rgba(255,255,255,0.12)] bg-[rgba(247,241,232,0.84)] backdrop-blur-2xl">
      <div className="site-nav__inner container-luxury flex items-center justify-between px-5 py-7 md:px-12 md:py-8">
        <Link className="site-nav__logo font-title text-[18px] font-medium uppercase tracking-[0.34em] text-[var(--color-ink)] md:text-[21px]" href="/">
          Atelier Marble
        </Link>
        <nav className="site-nav__menu hidden items-center gap-8 whitespace-nowrap md:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} className="site-nav__link text-[14px] font-medium uppercase tracking-[0.16em] text-[rgba(31,27,24,0.74)] transition hover:text-[var(--color-ink)]" href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

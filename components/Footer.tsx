import Link from "next/link";
import { contact } from "../lib/assets";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

const footerGroups: FooterGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Privacy Policy", href: "/privacy-policy" }
    ]
  },
  {
    title: "Guides",
    links: [
      { label: "Buyer Guide", href: "/guides/stone-supplier-china" },
      { label: "Packing Guide", href: "/guides/export-packing-standards" },
      { label: "Pricing Guide", href: "/guides/hotel-stone-pricing" },
      { label: "Project Checklist", href: "/guides/stone-project-checklist" },
      { label: "QC & Delivery", href: "/guides/quality-control-delivery" },
      { label: "Case Study", href: "/guides/hotel-lobby-case-study" }
    ]
  },
  {
    title: "Projects",
    links: [
      { label: "Kitchens", href: "/luxury-residential-kitchens" },
      { label: "Hotel Projects", href: "/hotel-hospitality-projects" },
      { label: "Interiors", href: "/architectural-stone-interiors" },
      { label: "Furniture & Sculptures", href: "/custom-furniture-sculptures" }
    ]
  },
  {
    title: "Contact",
    links: [{ label: "Request Project Pricing", href: contact.whatsappUrl, external: true }]
  }
] as const;

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] px-5 py-16 text-white md:px-12 md:py-20 lg:py-24">
      <div className="container-luxury grid gap-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,0.82fr)] lg:items-start lg:gap-16">
          <div className="grid gap-6 lg:grid-cols-[minmax(12rem,15rem)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-2">
              <p className="font-title text-[2.05rem] font-normal tracking-[0.01em] md:text-[2.35rem]">{contact.companyName}</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
                Bespoke stone supply for international projects
              </p>
            </div>
            <p className="max-w-[62ch] text-[0.98rem] font-normal leading-8 text-white/60 md:text-[1.02rem]">
              Atelier Marble is a luxury stone design studio specializing in bespoke natural stone solutions for hotel
              projects, kitchens, interiors, furniture, and architectural spaces worldwide.
            </p>
          </div>

          <div className="grid gap-3 text-sm font-normal leading-7 text-white/70 lg:justify-self-end lg:text-right">
            <p>{contact.companyName}</p>
            <p>{contact.address}</p>
            <p>{contact.location}</p>
            <p>{contact.whatsapp}</p>
            <p>{contact.emails.join(" / ")}</p>
          </div>
        </div>

        <div className="grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1.12fr_1fr] lg:items-start lg:gap-16">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">Navigation</p>
              <p className="max-w-[46ch] text-[0.94rem] leading-7 text-white/50">
                A concise set of pages for buyers, project teams, and procurement checks.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {footerGroups.map((group) => (
                <div key={group.title} className="space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">{group.title}</p>
                  <div className="flex flex-col gap-2">
                    {group.links.map((link) => (
                      <Link
                        key={link.label}
                        className="w-fit text-[0.96rem] leading-7 text-white/70 underline-offset-4 transition hover:text-white hover:underline"
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noreferrer" : undefined}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 rounded-[1.25rem] border border-white/10 bg-white/[0.02] p-5 text-sm leading-7 text-white/70 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">Quick contact</p>
            <p className="text-white/80">For project quotes and coordination, use the direct WhatsApp link below.</p>
            <Link className="w-fit text-white underline-offset-4 hover:underline" href={contact.whatsappUrl}>
              Request Project Pricing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
  }
] as const;

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] px-5 py-16 text-white md:px-12 md:py-20 lg:py-24">
      <div className="container-luxury grid gap-12">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[minmax(16rem,1fr)_minmax(0,1.4fr)_minmax(16rem,0.85fr)] lg:items-start lg:gap-12 lg:pb-12">
          <div className="grid gap-2">
            <div className="space-y-2">
              <p className="font-title text-[2.1rem] font-normal tracking-[0.01em] md:text-[2.45rem] lg:whitespace-nowrap">
                {contact.companyName}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
                Bespoke stone supply for international projects
              </p>
            </div>
          </div>

          <p className="max-w-[60ch] pt-1 text-[0.98rem] font-normal leading-8 text-white/60 md:text-[1.02rem] lg:pt-2">
            Atelier Marble is a luxury stone design studio specializing in bespoke natural stone solutions for hotel
            projects, kitchens, interiors, furniture, and architectural spaces worldwide.
          </p>

          <div className="grid gap-3 text-sm font-normal leading-7 text-white/70 lg:justify-self-end lg:text-right">
            <p>{contact.companyName}</p>
            <p>{contact.address}</p>
            <p>{contact.location}</p>
            <p>{contact.whatsapp}</p>
            <p>{contact.emails.join(" / ")}</p>
            <Link
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-white/14 bg-white/6 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/24 hover:bg-white/10 lg:ml-auto"
              href={contact.whatsappUrl}
            >
              Request Project Pricing
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(14rem,0.76fr)_minmax(0,1.24fr)] lg:items-start lg:gap-14">
          <div className="grid gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">Navigation</p>
            <p className="max-w-[42ch] text-[0.94rem] leading-7 text-white/50">
              A concise set of pages for buyers, project teams, and procurement checks.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">{group.title}</p>
                <div className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      className="w-fit text-[0.96rem] leading-7 text-white/70 underline-offset-4 transition hover:text-white hover:underline"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">Contact</p>
              <div className="flex flex-col gap-2">
                <a
                  className="w-fit text-[0.96rem] leading-7 text-white/70 underline-offset-4 transition hover:text-white hover:underline"
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
                <a
                  className="w-fit text-[0.96rem] leading-7 text-white/70 underline-offset-4 transition hover:text-white hover:underline"
                  href={`mailto:${contact.emails[0]}`}
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

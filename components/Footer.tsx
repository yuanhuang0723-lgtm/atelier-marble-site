import Link from "next/link";
import { contact } from "../lib/assets";

type FooterLink = {
  label: string;
  href: string;
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
      { label: "Project Checklist", href: "/guides/stone-project-checklist" }
    ]
  },
  {
    title: "Projects",
    links: [
      { label: "QC & Delivery", href: "/guides/quality-control-delivery" },
      { label: "Case Study", href: "/guides/hotel-lobby-case-study" },
      { label: "Kitchens", href: "/luxury-residential-kitchens" },
      { label: "Hotel Projects", href: "/hotel-hospitality-projects" }
    ]
  },
  {
    title: "Contact",
    links: [
      { label: "WhatsApp", href: contact.whatsappUrl },
      { label: "Email", href: `mailto:${contact.emails[0]}` },
      { label: "Interiors", href: "/architectural-stone-interiors" },
      { label: "Furniture & Sculptures", href: "/custom-furniture-sculptures" }
    ]
  }
];

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-[#181410] px-5 py-14 text-white md:px-12 md:py-16 lg:py-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] lg:items-start">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="font-title text-[2.05rem] font-normal tracking-[0.01em] text-white md:text-[2.35rem] lg:whitespace-nowrap">
                {contact.companyName}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/38">
                Bespoke stone supply for international projects
              </p>
            </div>
            <p className="max-w-[42ch] text-[0.95rem] font-normal leading-7 text-white/60 md:text-[1rem]">
              Atelier Marble is a luxury stone design studio for hotel projects, kitchens, interiors, furniture, and
              architectural spaces worldwide.
            </p>
          </div>

          <div className="grid gap-2 text-[0.94rem] font-normal leading-7 text-white/72 lg:justify-items-end lg:text-right">
            <p className="text-white/88">{contact.location}</p>
            <p>{contact.whatsapp}</p>
            <p>{contact.emails.join(" / ")}</p>
            <Link
              className="mt-2 inline-flex w-fit items-center justify-center rounded-full border border-white/18 bg-white/6 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/28 hover:bg-white/10 lg:ml-auto"
              href={contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Request Project Pricing
            </Link>
          </div>
        </div>

        <div className="my-10 h-px bg-white/[0.12]" />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/38">Navigation</p>
            <p className="max-w-[34ch] text-[0.92rem] leading-7 text-white/48">
              Key pages for buyers, procurement checks, and project coordination.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/38">{group.title}</p>
                <div className="flex flex-col gap-1.5">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      className="w-fit text-[0.94rem] leading-6 text-white/72 underline-offset-4 transition hover:text-white hover:underline"
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

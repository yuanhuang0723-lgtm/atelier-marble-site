import Link from "next/link";
import { contact } from "../lib/assets";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] px-5 py-14 text-white md:px-12 md:py-16">
      <div className="container-luxury grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="mb-4 font-title text-3xl font-normal tracking-[0.01em]">{contact.companyName}</p>
          <p className="max-w-3xl text-sm font-normal leading-7 text-white/60">
            Atelier Marble is a luxury stone design studio specializing in bespoke natural stone solutions for hotel
            projects, kitchens, interiors, furniture, and architectural spaces worldwide.
          </p>
        </div>
        <div className="space-y-2 text-sm font-normal leading-7 text-white/70 md:text-right">
          <p>{contact.companyName}</p>
          <p>{contact.address}</p>
          <p>{contact.location}</p>
          <p>{contact.whatsapp}</p>
          <p>{contact.emails.join(" / ")}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 md:justify-end">
            <Link className="text-white/70 underline-offset-4 hover:text-white hover:underline" href="/about">
              About Us
            </Link>
            <Link className="text-white/70 underline-offset-4 hover:text-white hover:underline" href="/how-we-work">
              How We Work
            </Link>
            <Link className="text-white/70 underline-offset-4 hover:text-white hover:underline" href="/guides/stone-supplier-china">
              Buyer Guide
            </Link>
            <Link className="text-white/70 underline-offset-4 hover:text-white hover:underline" href="/guides/export-packing-standards">
              Packing Guide
            </Link>
            <Link className="text-white/70 underline-offset-4 hover:text-white hover:underline" href="/guides/hotel-stone-pricing">
              Pricing Guide
            </Link>
            <Link className="text-white/70 underline-offset-4 hover:text-white hover:underline" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="text-white/70 underline-offset-4 hover:text-white hover:underline" href="/luxury-residential-kitchens">
              Kitchens
            </Link>
            <Link className="text-white/70 underline-offset-4 hover:text-white hover:underline" href="/hotel-hospitality-projects">
              Hotel Projects
            </Link>
            <Link className="text-white/70 underline-offset-4 hover:text-white hover:underline" href="/architectural-stone-interiors">
              Interiors
            </Link>
            <Link className="text-white/70 underline-offset-4 hover:text-white hover:underline" href="/custom-furniture-sculptures">
              Furniture & Sculptures
            </Link>
          </div>
          <Link className="text-white underline-offset-4 hover:underline" href={contact.whatsappUrl}>
            Request Project Pricing
          </Link>
        </div>
      </div>
    </footer>
  );
}

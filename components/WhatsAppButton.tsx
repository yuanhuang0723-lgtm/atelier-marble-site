import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "../lib/conversion";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-floating-button fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[rgba(247,241,232,0.82)] px-4 py-3 text-[rgba(31,27,24,0.74)] shadow-soft backdrop-blur-md transition duration-300 hover:border-[rgba(31,27,24,0.26)] hover:bg-[var(--color-paper)] hover:text-[var(--color-ink)]"
      href={buildWhatsAppUrl({ intent: "Persistent WhatsApp inquiry" })}
      aria-label="Discuss your project on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={18} aria-hidden="true" />
      <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] sm:inline">WhatsApp</span>
    </a>
  );
}

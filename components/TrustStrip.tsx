import { BadgeCheck, Factory, PackageCheck, TimerReset } from "lucide-react";

const items = [
  {
    icon: TimerReset,
    title: "Lead Time Control",
    copy: "Planned windows and shipment timing."
  },
  {
    icon: BadgeCheck,
    title: "Hotel Project Experience",
    copy: "Reference-led execution for hospitality buyers."
  },
  {
    icon: Factory,
    title: "Factory Direct Supply",
    copy: "Direct fabrication without unnecessary layers."
  },
  {
    icon: PackageCheck,
    title: "Export Packing Standard",
    copy: "Protective packing prepared for delivery."
  }
] as const;

export default function TrustStrip() {
  return (
    <section className="section-band bg-[var(--color-paper)]">
      <div className="container-luxury">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center justify-center gap-4 rounded-[18px] border border-[var(--color-border)] bg-[rgba(255,255,255,0.58)] px-5 py-4 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-[rgba(31,27,24,0.74)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-paper)] text-[var(--color-accent)]">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <span className="block font-title text-[15px] font-medium uppercase tracking-[-0.02em] text-[var(--color-ink)]">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {item.copy}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

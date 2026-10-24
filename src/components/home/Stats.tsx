import SignalLine from "@/components/ui/SignalLine";

const STATS = [
  { value: "50+", label: "Clients Served" },
  { value: "5K+", label: "Deals Supported" },
  { value: "48hrs", label: "Average Onboarding" },
  { value: "4.3", label: "Average Rating" },
];

export default function Stats() {
  return (
    <section className="relative mx-auto max-w-350 px-6 py-16 md:px-16">
      <SignalLine className="mb-12" />
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-background p-8 text-center">
            <div className="heading-tight font-display text-5xl font-semibold text-primary">
              {s.value}
            </div>
            <div className="mt-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

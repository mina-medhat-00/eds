const METRICS = [
  { value: "2-4", label: "Qualified Leads / Day / Caller" },
  { value: "160", label: "Hours Per Caller / Cycle" },
  { value: "2-7", label: "Day Onboarding" },
  { value: "24/7", label: "Direct Team Access" },
];

const PULSE = [
  { stage: "Lead Identified", pct: 100 },
  { stage: "Qualification Stage", pct: 72 },
  { stage: "Appointment Set", pct: 41 },
];

export default function Performance() {
  return (
    <section id="metrics" className="relative overflow-hidden py-12">
      <div className="relative mx-auto max-w-350 px-6 md:px-16">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Performance
          </p>
          <h2 className="heading-tight mt-4 font-display text-5xl font-semibold text-foreground md:text-7xl">
            Built To Scale Your
            <br />
            Real Estate Team
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
            {METRICS.map((m) => (
              <div key={m.label} className="bg-background p-8">
                <div className="heading-tight font-display text-5xl font-semibold text-primary">
                  {m.value}
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-card/80 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Live Pulse: Call In Progress
              </span>
              <span className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-destructive">
                <span className="h-2 w-2 rounded-full bg-destructive pulse-dot" />{" "}
                LIVE
              </span>
            </div>
            <div className="space-y-8">
              {PULSE.map((p) => (
                <div key={p.stage}>
                  <div className="mb-2 flex items-center justify-between text-sm font-medium uppercase tracking-widest">
                    <span className="text-foreground">{p.stage}</span>
                    <span className="text-primary">{p.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-700"
                      style={{ width: `${String(p.pct)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              This visualizes the invisible work EDS does: every call tracked
              from first contact to appointment set.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

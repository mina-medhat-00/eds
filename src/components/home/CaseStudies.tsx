import { TrendingUp } from "lucide-react";
import SignalLine from "@/components/home/SignalLine";

const CASES = [
  {
    client: "Wholesaling Team",
    market: "DFW, Texas",
    challenge:
      "A 3-person wholesaling team was burning through aged absentee-owner lists with no consistent dialing. Leads went cold within 48 hours and the pipeline had no follow-up rhythm.",
    results: [
      "From 0 to 4 qualified appointments per day within 3 weeks",
      "2 acquisition callers onboarded in 48 hours",
      "First closed deal in 19 days from launch",
    ],
    metric: "4x",
    metricLabel: "Appointment Volume",
  },
  {
    client: "Multi-Family Investor",
    market: "Phoenix, AZ",
    challenge:
      "An investor acquiring small multi-family was losing deals to slow follow-up. CRM was disorganized, sellers went uncalled, and nobody owned the negotiation stage.",
    results: [
      "Full CRM rebuild with disposition workflows",
      "Follow-up sequences touched every lead within 15 minutes",
      "3 properties under contract in the first cycle",
    ],
    metric: "$2.1M",
    metricLabel: "Deal Value Touched",
  },
  {
    client: "Realtor / Listing Agent",
    market: "Tampa, FL",
    challenge:
      "A top-producing realtor had no bandwidth to work expired MLS and FSBO lists. Lead generation stalled and the team was stretched thin on admin.",
    results: [
      "Dedicated VA handling expired outreach daily",
      "12 listing appointments set in first 30 days",
      "Admin load cut by 60%",
    ],
    metric: "12",
    metricLabel: "Appointments / 30 Days",
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative mx-auto max-w-350 px-6 py-24 md:px-16"
    >
      <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono-overlay text-sm uppercase tracking-[0.3em] text-primary">
            Case Studies
          </p>
          <h2 className="heading-tight mt-4 font-display text-5xl font-black uppercase text-foreground md:text-7xl">
            Outcomes That
            <br />
            Compounded
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Real outcomes for real estate investors.
        </p>
      </div>

      <SignalLine className="mb-2" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {CASES.map((c) => (
          <article
            key={c.client}
            className="group flex flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:border-primary/50"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono-overlay text-[11px] uppercase tracking-widest text-muted-foreground">
                {c.market}
              </span>
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
            <h3 className="heading-tight mt-4 font-display text-2xl font-black uppercase text-foreground">
              {c.client}
            </h3>
            <SignalLine className="my-5" />
            <div>
              <p className="font-mono-overlay text-[10px] uppercase tracking-widest text-primary">
                The Challenge
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {c.challenge}
              </p>
            </div>
            <div className="mt-6">
              <p className="font-mono-overlay text-[10px] uppercase tracking-widest text-primary">
                The Results
              </p>
              <ul className="mt-3 space-y-2">
                {c.results.map((r) => (
                  <li key={r} className="flex gap-2 text-sm text-foreground">
                    <span className="text-primary">▸</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto pt-8">
              <SignalLine className="mb-4" />
              <div className="heading-tight font-display text-4xl font-black text-primary">
                {c.metric}
              </div>
              <div className="mt-1 font-mono-overlay text-[10px] uppercase tracking-widest text-muted-foreground">
                {c.metricLabel}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import { Zap, Target, Layers } from "lucide-react";
import SignalLine from "@/components/ui/SignalLine";

const REASONS = [
  {
    icon: Zap,
    title: "Fast Follow-Up",
    body: "Your leads get contacted quickly, professionally, and consistently: within minutes, not days.",
  },
  {
    icon: Target,
    title: "Real Estate Trained",
    body: "Our team understands real estate terminology, workflows, and CRM processes out of the gate.",
  },
  {
    icon: Layers,
    title: "Easy To Scale",
    body: "Scale up during busy months or scale down when business slows. No long contracts.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      className="relative mx-auto max-w-350 px-6 py-24 md:px-16"
    >
      <div className="mb-16">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Why EDS
        </p>
        <h2 className="heading-tight mt-4 font-display text-5xl font-semibold text-foreground md:text-7xl">
          Built For Real
          <br />
          Estate Speed
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          We help you stop losing leads to slow follow-up and inconsistent
          outreach.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {REASONS.map((r) => (
          <div
            key={r.title}
            className="group bg-background p-10 transition-colors hover:bg-card"
          >
            <r.icon className="h-7 w-7 text-primary" />
            <h3 className="heading-tight mt-6 font-display text-2xl font-semibold text-foreground">
              {r.title}
            </h3>
            <SignalLine className="my-5 max-w-30" />
            <p className="text-muted-foreground">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

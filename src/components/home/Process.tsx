import SignalLine from "@/components/ui/SignalLine";

const STEPS = [
  {
    n: "01",
    title: "Strategy Call",
    body: "We diagnose your lead funnel and find exactly where revenue is being lost.",
  },
  {
    n: "02",
    title: "Custom Plan",
    body: "We design a VA or acquisition support plan based on your exact needs and market.",
  },
  {
    n: "03",
    title: "Launch",
    body: "Most clients are up and running within 48 hours after the call.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative mx-auto max-w-350 px-6 py-12 md:px-16"
    >
      <div className="mb-16">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Process
        </p>
        <h2 className="heading-tight mt-4 font-display text-5xl font-semibold text-foreground md:text-7xl">
          How It Works
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          A simple process designed to get your real estate support team running
          fast.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {STEPS.map((s) => (
          <div
            key={s.n}
            className="relative rounded-lg border border-border bg-card p-8"
          >
            <div className="heading-tight font-display text-6xl font-semibold text-foreground">
              {s.n}
            </div>
            <SignalLine className="my-6" />
            <h3 className="heading-tight font-display text-2xl font-semibold text-foreground">
              {s.title}
            </h3>
            <p className="mt-4 text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

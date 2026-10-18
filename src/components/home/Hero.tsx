import SignalLine from "@/components/home/SignalLine";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 grid-overlay opacity-30" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-350 flex-col justify-between px-6 py-10 md:px-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
              EDS
            </span>
            <span className="hidden font-mono-overlay text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">
              Extra Dose Solutions
            </span>
          </div>
          <span className="font-mono-overlay text-[10px] uppercase tracking-widest text-muted-foreground">
            Real Estate Cold Calling
          </span>
        </div>

        <div className="grid grid-cols-12 items-center gap-6 py-16">
          <div className="col-span-12 md:col-span-2">
            <div className="hidden md:block [writing-mode:vertical-rl] rotate-180 font-display text-[7vw] font-black leading-none tracking-tighter text-foreground/10">
              EDS
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="mb-6 font-mono-overlay text-sm uppercase tracking-[0.3em] text-primary">
              The Extra Dose Your Pipeline Demands
            </p>
            <h1 className="heading-tight font-display text-[10vw] font-black uppercase text-foreground md:text-[7vw]">
              Stop Chasing
              <br />
              Leads. <span className="text-primary text-glow">Start</span>
              <br />
              Closing Deals.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Specialized real estate cold calling: acquisition specialists and
              virtual assistants built to handle calls, follow-ups, lead
              qualification, and admin so you can focus on closing.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative overflow-hidden rounded-md bg-primary px-8 py-4 font-mono-overlay text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Book a Free Call
              </a>
              <a
                href="#process"
                className="rounded-md border border-border px-8 py-4 font-mono-overlay text-xs uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                See How It Works
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono-overlay text-[11px] uppercase tracking-widest text-muted-foreground">
              <span>48hr Onboarding</span>
              <span className="text-border">|</span>
              <span>U.S. Real Estate Experts</span>
              <span className="text-border">|</span>
              <span>Flexible &amp; Scalable</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <SignalLine />
          <div className="flex items-center justify-between font-mono-overlay text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>Start Your 2–3 Days Free Trial</span>
            <span className="hidden sm:inline">Scroll To Engage ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}

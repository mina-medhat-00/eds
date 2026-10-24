export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="relative mx-auto flex min-h-screen max-w-350 flex-col justify-between px-6 py-10 md:px-16">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            EDS
          </span>
          <span className="hidden text-sm font-medium uppercase tracking-widest text-muted-foreground sm:inline">
            Extra Dose Solutions
          </span>
        </div>

        <div className="grid grid-cols-12 items-center gap-6 py-16">
          <div className="col-span-12 md:col-span-10">
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-primary">
              The Extra Dose Your Pipeline Demands
            </p>
            <h1 className="heading-tight font-display text-6xl font-semibold text-foreground md:text-8xl">
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
                className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Book a Free Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="relative mx-auto flex min-h-screen max-w-350 flex-col justify-between px-6 py-6 md:px-16">
        <div className="flex items-center gap-3">
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            EDS
          </span>
          <span className="hidden text-sm font-medium uppercase tracking-widest text-muted-foreground sm:inline">
            Extra Dose Solutions
          </span>
        </div>

        <div className="grid flex-1 grid-cols-1 content-center items-center gap-12 py-16 lg:grid-cols-12 lg:gap-6">
          <div className="min-w-0 lg:col-span-7">
            <p className="mb-6 text-sm font-medium uppercase tracking-widest text-primary">
              The Extra Dose Your Pipeline Demands
            </p>
            <h1 className="heading-tight font-display text-5xl font-semibold text-foreground sm:text-6xl md:text-7xl xl:text-8xl">
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

          <div className="hidden min-w-0 lg:col-span-5 lg:block">
            <img
              src="/hero.png"
              alt="EDS handling an outbound call, qualifying the lead, booking the follow-up, and moving the deal through the pipeline to closing"
              width={720}
              height={720}
              decoding="async"
              className="h-auto w-full select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

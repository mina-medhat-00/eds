import SignalLine from "@/components/home/SignalLine";

const LEGAL = ["Privacy Policy", "Terms of Service", "About EDS"];
const SOCIAL = ["LinkedIn", "Instagram", "X / Twitter"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-16">
      <div className="mx-auto max-w-350 px-6 md:px-16">
        <SignalLine className="mb-12" />
        <div className="grid grid-cols-1 gap-8 pb-16 md:grid-cols-3">
          <div>
            <span className="font-display text-2xl font-extrabold tracking-tight text-foreground">
              EDS
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Extra Dose Solutions: specialized real estate cold calling. The
              extra dose your pipeline demands.
            </p>
          </div>
          <div>
            <p className="font-mono-overlay text-[11px] uppercase tracking-widest text-muted-foreground">
              Legal
            </p>
            <ul className="mt-4 space-y-2">
              {LEGAL.map((l) => (
                <li key={l}>
                  <a
                    href="#top"
                    className="font-mono-overlay text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono-overlay text-[11px] uppercase tracking-widest text-muted-foreground">
              Connect
            </p>
            <ul className="mt-4 space-y-2">
              {SOCIAL.map((l) => (
                <li key={l}>
                  <a
                    href="#top"
                    className="font-mono-overlay text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden border-t border-border py-6">
        <div className="flex w-max marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className="heading-tight px-6 font-display text-[8vw] font-black uppercase text-foreground/10 md:text-[5vw]"
                >
                  EDS&nbsp;·&nbsp;EXTRA DOSE SOLUTIONS&nbsp;·
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="mx-auto flex max-w-350 flex-col items-center justify-between gap-2 px-6 font-mono-overlay text-[10px] uppercase tracking-widest text-muted-foreground md:flex-row md:px-16">
          <span>
            {new Date().getFullYear()} &copy; Extra Dose Solutions. All rights
            reserved.
          </span>
          <span>Real Estate Cold Calling · U.S. Based</span>
        </div>
      </div>
    </footer>
  );
}

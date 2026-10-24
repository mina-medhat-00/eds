import { Link } from "react-router-dom";

const LEGAL = [
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms of Service", href: "/terms-of-service" },
  { title: "About EDS", href: "/about" },
];

const SOCIAL = [
  { title: "LinkedIn", href: "https://www.linkedin.com" },
  { title: "Instagram", href: "https://www.instagram.com" },
  { title: "X", href: "https://www.x.com" },
];

const MARQUEE_SLOTS = ["a", "b", "c", "d", "e", "f"];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border pt-16">
      <div className="mx-auto max-w-350 px-6 md:px-16">
        <div className="grid grid-cols-1 gap-8 pb-16 md:grid-cols-3">
          <div>
            <span className="font-display text-2xl font-semibold tracking-tight text-foreground">
              EDS
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Extra Dose Solutions: The extra dose your pipeline demands.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Legal
            </p>
            <ul className="mt-4 space-y-2">
              {LEGAL.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.href}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Connect
            </p>
            <ul className="mt-4 space-y-2">
              {SOCIAL.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                    target="_blank"
                  >
                    {item.title}
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
              {MARQUEE_SLOTS.map((slot) => (
                <span
                  key={slot}
                  className="heading-tight px-6 font-display text-6xl font-semibold text-foreground/10 md:text-8xl"
                >
                  EDS&nbsp;·&nbsp;EXTRA DOSE SOLUTIONS&nbsp;·
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="mx-auto flex max-w-350 flex-col items-center justify-between gap-2 px-6 text-xs font-medium uppercase tracking-widest text-muted-foreground md:text-sm md:flex-row md:px-16">
          <span>
            {CURRENT_YEAR} &copy; Extra Dose Solutions. All rights reserved.
          </span>
          <span>Business Solutions · U.S. Based</span>
        </div>
      </div>
    </footer>
  );
}

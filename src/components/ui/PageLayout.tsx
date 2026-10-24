import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/home/Footer";
import type { PageLayoutProps } from "@/types";

export default function PageLayout({ title, children }: PageLayoutProps) {
  useEffect(() => {
    document.title = `${title} | EDS`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="relative min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-350 items-center justify-between px-6 py-4 md:px-16">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-display text-xl font-semibold tracking-tight text-foreground">
              EDS
            </span>
            <span className="hidden text-sm font-medium uppercase tracking-widest text-muted-foreground sm:inline">
              Extra Dose Solutions
            </span>
          </Link>
          <a
            href="/#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Book a Call
          </a>
        </div>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

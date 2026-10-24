import PageLayout from "@/components/ui/PageLayout";
import SignalLine from "@/components/ui/SignalLine";
import type { LegalDocumentProps } from "@/types";

export default function LegalDocument({
  eyebrow,
  title,
  intro,
  sections,
}: LegalDocumentProps) {
  return (
    <PageLayout title={title}>
      <section className="mx-auto max-w-350 px-6 pb-12 pt-20 md:px-16 md:pt-24">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
        <h1 className="heading-tight mt-4 font-display text-5xl font-semibold text-foreground md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>
        <SignalLine className="mt-12" />
      </section>

      <div className="mx-auto grid max-w-350 grid-cols-1 gap-12 px-6 pb-24 md:px-16 lg:grid-cols-12">
        <nav
          aria-label="On this page"
          className="hidden lg:col-span-4 lg:block"
        >
          <div className="sticky top-28">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              On this page
            </p>
            <ol className="mt-4 space-y-3 border-l border-border">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px block border-l border-transparent pl-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <div className="space-y-6 lg:col-span-8">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 rounded-lg border border-border bg-card p-8"
            >
              <h2 className="heading-tight font-display text-2xl font-semibold text-foreground">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-foreground">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

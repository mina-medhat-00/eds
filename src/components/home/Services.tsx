import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SignalLine from "@/components/home/SignalLine";

const SERVICES = [
  {
    id: "01",
    title: "Virtual Assistants",
    summary:
      "Cold calling, lead qualification, appointment setting, and daily admin support.",
    detail:
      "Trained callers fluent in real estate scripts. We dial your lists, qualify on your criteria, and book appointments directly into your calendar: consistent volume, every day.",
  },
  {
    id: "02",
    title: "Acquisition Specialists",
    summary:
      "CRM management, follow-ups, negotiation support, and closing coordination.",
    detail:
      "Senior operators who run your pipeline end to end: CRM hygiene, multi-touch follow-up sequences, seller negotiation, and closing coordination with title and attorneys.",
  },
  {
    id: "03",
    title: "Lead Management",
    summary:
      "Never miss a lead again. We build systems that keep your pipeline moving.",
    detail:
      "Custom lead routing, status workflows, and dispositions built around your CRM. Every contact is logged, scored, and moved to the right stage automatically.",
  },
  {
    id: "04",
    title: "Custom Solutions",
    summary:
      "Flexible staffing and workflows designed around your business goals.",
    detail:
      "Wholesaling, multi-family, absentee-owner lists, expired MLS: we tailor scripts, caller ratios, and reporting dashboards to your exact acquisition strategy.",
  },
];

export default function Services() {
  const [open, setOpen] = useState("01");

  return (
    <section
      id="services"
      className="relative mx-auto max-w-350 px-6 py-24 md:px-16"
    >
      <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono-overlay text-xs uppercase tracking-[0.3em] text-primary">
            // Our Services
          </p>
          <h2 className="heading-tight mt-4 font-display text-5xl font-black uppercase text-foreground md:text-7xl">
            Tailored Solutions
            <br />
            For Your Business
          </h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          Support built for real estate workflows: from cold calling to
          acquisition coordination.
        </p>
      </div>

      <SignalLine className="mb-2" />

      <div className="divide-y divide-border border-y border-border">
        {SERVICES.map((s) => {
          const active = open === s.id;
          return (
            <div key={s.id}>
              <button
                onClick={() => setOpen(active ? "" : s.id)}
                className="group flex w-full items-center gap-6 py-6 text-left transition-colors hover:text-primary"
              >
                <span className="font-mono-overlay text-xs text-muted-foreground">
                  {s.id}
                </span>
                <span className="heading-tight flex-1 font-display text-3xl font-black uppercase text-foreground transition-colors group-hover:text-primary md:text-5xl">
                  {s.title}
                </span>
                <span className="hidden max-w-md text-sm text-muted-foreground md:block">
                  {s.summary}
                </span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-primary">
                  {active ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: active ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="pb-8 pl-0 md:pl-16">
                    <SignalLine className="mb-6 max-w-md" />
                    <p className="max-w-2xl text-lg text-foreground">
                      {s.detail}
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex font-mono-overlay text-xs uppercase tracking-widest text-primary hover:underline"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

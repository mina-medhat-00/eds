import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SignalLine from "@/components/home/SignalLine";

const FAQS = [
  {
    q: "What services do you offer?",
    a: "EDS provides virtual assistants and acquisition specialists for real estate professionals. Our VAs handle cold calling, lead qualification, and appointment setting. Our acquisition team manages CRM, follow-up sequences, deal negotiation support, and closing coordination.",
  },
  {
    q: "How much does it cost?",
    a: "We do not publish pricing because every business leaks leads differently. Schedule a free 15-minute call and we will build a custom plan based on your needs.",
  },
  {
    q: "What is the 15-minute call for?",
    a: "We diagnose your lead funnel, calculate how much revenue you are losing to slow follow-up, and design a custom VA or acquisition plan.",
  },
  {
    q: "Who do you work with?",
    a: "We work with real estate wholesalers, real estate investors, and realtors.",
  },
  {
    q: "Do I need to provide a dialer and leads?",
    a: "Yes. You provide the dialer and data. We provide the trained talent.",
  },
  {
    q: "How fast can you start?",
    a: "Most clients are up and running within 48 hours of the strategy call.",
  },
  {
    q: "What time zones do you cover?",
    a: "We work across EST, CST, MST, and PST. You pick your preferred time zone when booking the call.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative mx-auto max-w-350 px-6 py-24 md:px-16"
    >
      <div className="mb-16">
        <p className="font-mono-overlay text-sm uppercase tracking-[0.3em] text-primary">
          FAQ
        </p>
        <h2 className="heading-tight mt-4 font-display text-5xl font-black uppercase text-foreground md:text-7xl">
          Frequently Asked
          <br />
          Questions
        </h2>
      </div>

      <div className="border-t border-border">
        {FAQS.map((f, i) => {
          const active = open === i;
          return (
            <div key={f.q} className="border-b border-border">
              <button
                onClick={() => setOpen(active ? -1 : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="heading-tight font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary md:text-2xl">
                  {f.q}
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
                  <div className="pb-8">
                    <SignalLine className="mb-5 max-w-md" />
                    <p className="max-w-2xl text-muted-foreground">{f.a}</p>
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

import { Clock, Handshake, Headset, ShieldCheck } from "lucide-react";
import PageLayout from "@/components/ui/PageLayout";
import SignalLine from "@/components/ui/SignalLine";
import Stats from "@/components/home/Stats";

const VALUES = [
  {
    icon: Clock,
    title: "Speed Wins Deals",
    body: "A lead contacted in five minutes behaves differently than one contacted in five days. We build every workflow around fast, consistent follow-up.",
  },
  {
    icon: Headset,
    title: "Trained, Not Just Hired",
    body: "Every caller learns real estate terminology, seller psychology, and your scripts before they ever dial a number on your behalf.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance First",
    body: "We work inside your dialer and CRM, follow your scrub lists and calling windows, and treat every homeowner conversation with respect.",
  },
  {
    icon: Handshake,
    title: "Partners, Not Vendors",
    body: "No long contracts and no black boxes. You see the numbers, you own the data, and we scale up or down with your business.",
  },
];

const AUDIENCE = [
  {
    title: "Wholesalers",
    body: "High-volume cold calling, lead qualification, and appointment setting so your acquisitions team only talks to motivated sellers.",
  },
  {
    title: "Real Estate Investors",
    body: "Acquisition specialists who manage follow-up sequences, CRM hygiene, and closing coordination across every deal in your pipeline.",
  },
  {
    title: "Realtors",
    body: "Virtual assistants who keep your database warm, book listing appointments, and handle the admin that keeps you off the phone.",
  },
];

export default function About() {
  return (
    <PageLayout title="About">
      <section className="mx-auto max-w-350 px-6 pb-12 pt-20 md:px-16 md:pt-24">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          About EDS
        </p>
        <h1 className="heading-tight mt-4 font-display text-5xl font-semibold text-foreground md:text-7xl">
          The Extra Dose
          <br />
          Behind Your Pipeline
        </h1>
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <p className="text-lg text-foreground">
            Extra Dose Solutions was built for real estate professionals who
            have more leads than hours in the day. We provide trained virtual
            assistants and acquisition specialists who handle the calls,
            follow-ups, and admin so you can focus on closing.
          </p>
          <p className="text-muted-foreground">
            Most deals are not lost to competition. They are lost to silence: a
            missed callback, a lead that went cold over the weekend, a CRM that
            nobody updated. EDS exists to close that gap with people who know
            real estate and systems that keep every lead moving.
          </p>
        </div>
      </section>

      <Stats />

      <section className="mx-auto max-w-350 px-6 py-24 md:px-16">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Values
          </p>
          <h2 className="heading-tight mt-4 font-display text-5xl font-semibold text-foreground md:text-7xl">
            How We Work
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="bg-background p-10 transition-colors hover:bg-card"
            >
              <value.icon className="h-7 w-7 text-primary" />
              <h3 className="heading-tight mt-6 font-display text-2xl font-semibold text-foreground">
                {value.title}
              </h3>
              <SignalLine className="my-5 max-w-30" />
              <p className="text-muted-foreground">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-350 px-6 py-24 md:px-16">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Who We Serve
          </p>
          <h2 className="heading-tight mt-4 font-display text-5xl font-semibold text-foreground md:text-7xl">
            Built For Real
            <br />
            Estate Teams
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {AUDIENCE.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-8"
            >
              <h3 className="heading-tight font-display text-2xl font-semibold text-foreground">
                {item.title}
              </h3>
              <SignalLine className="my-6" />
              <p className="text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-350 px-6 pb-24 md:px-16">
        <div className="rounded-3xl border border-border bg-card p-10 text-center md:p-16">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Get Started
          </p>
          <h2 className="heading-tight mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold text-foreground md:text-6xl">
            Ready For Your Extra Dose?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Book a free 15-minute strategy call. We will map where your pipeline
            is leaking and build a plan to fix it, live within 48 hours.
          </p>
          <a
            href="/#contact"
            className="mt-10 inline-block rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Book a Free Call
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

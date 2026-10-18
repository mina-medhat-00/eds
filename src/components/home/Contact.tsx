import { useState, type FormEvent } from "react";
import SignalLine from "@/components/home/SignalLine";
import type { ContactForm } from "@/types";

const TIMEZONES = [
  "EST (Eastern Standard Time)",
  "CST (Central Standard Time)",
  "MST (Mountain Standard Time)",
  "PST (Pacific Standard Time)",
];

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    full_name: "",
    email: "",
    phone: "",
    timezone: "",
    target_market: "",
    monthly_goal: "",
    bottleneck: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (key: keyof ContactForm, value: string) =>
    setForm((current) => ({ ...current, [key]: value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `New Strategy Call Request: ${form.full_name || "Unknown"}`;
    const body = [
      `Full Name: ${form.full_name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Preferred Time Zone: ${form.timezone}`,
      `Target Market: ${form.target_market}`,
      `Monthly Lead Goal: ${form.monthly_goal}`,
      `Current Bottleneck: ${form.bottleneck}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.location.href = `mailto:extradosesolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors";
  const label =
    "font-mono-overlay text-[11px] uppercase tracking-widest text-muted-foreground";

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-350 px-6 py-24 md:px-16"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <p className="font-mono-overlay text-sm uppercase tracking-[0.3em] text-primary">
            Contact
          </p>
          <h2 className="heading-tight mt-4 font-display text-5xl font-black uppercase text-foreground md:text-7xl">
            Book Your Free
            <br />
            Strategy Call
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Tell us about your real estate business and we will help you build a
            support system that keeps leads moving.
          </p>
          <SignalLine className="my-8 max-w-sm" />
          <div className="space-y-3 font-mono-overlay text-sm">
            <div className="flex items-center gap-3 text-foreground">
              <span className="text-primary">✦</span>{" "}
              extradosesolutions@gmail.com
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="text-primary">✦</span> Schedule a 15-minute call
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="text-primary">✦</span> EST, CST, MST, and PST
              coverage
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 md:p-10">
          {sent ? (
            <div className="flex h-full min-h-100 flex-col items-center justify-center text-center">
              <div className="font-mono-overlay text-sm uppercase tracking-widest text-primary">
                Transmission Complete
              </div>
              <h3 className="heading-tight mt-4 font-display text-3xl font-black uppercase text-foreground">
                Request Received
              </h3>
              <p className="mt-4 max-w-sm text-muted-foreground">
                Your briefing document has been logged. An EDS strategist will
                reach out within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={label}>Full Name</label>
                  <input
                    type="text"
                    className={`${field} mt-2`}
                    value={form.full_name}
                    onChange={(e) => update("full_name", e.target.value)}
                    maxLength={100}
                    required
                  />
                </div>

                <div>
                  <label className={label}>Email</label>
                  <input
                    type="email"
                    className={`${field} mt-2`}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    maxLength={254}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={label}>Phone Number</label>
                  <input
                    type="tel"
                    className={`${field} mt-2`}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    maxLength={20}
                    required
                  />
                </div>
                <div>
                  <label className={label}>Preferred Time Zone</label>
                  <select
                    className={`${field} mt-2`}
                    value={form.timezone}
                    onChange={(e) => update("timezone", e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Your Time Zone
                    </option>
                    {TIMEZONES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={label}>Target Market?</label>
                <input
                  type="text"
                  placeholder="e.g. Dallas-Fort Worth wholesaling"
                  className={`${field} mt-2`}
                  value={form.target_market}
                  onChange={(e) => update("target_market", e.target.value)}
                  maxLength={100}
                />
              </div>

              <div>
                <label className={label}>Monthly Lead Goal?</label>
                <input
                  type="number"
                  placeholder="e.g. 60 qualified appointments"
                  className={`${field} mt-2`}
                  value={form.monthly_goal}
                  onChange={(e) => update("monthly_goal", e.target.value)}
                  maxLength={10}
                />
              </div>

              <div>
                <label className={label}>Current Bottleneck?</label>
                <input
                  placeholder="e.g. Slow follow-up, no callers, CRM mess"
                  className={`${field} mt-2`}
                  value={form.bottleneck}
                  onChange={(e) => update("bottleneck", e.target.value)}
                  maxLength={100}
                />
              </div>

              <div>
                <label className={label}>Message</label>
                <textarea
                  rows={4}
                  className={`${field} mt-2 resize-none`}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  maxLength={1000}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-primary px-8 py-4 font-mono-overlay text-xs uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.01]"
              >
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

import { useRef, useState, type ChangeEvent } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignalLine from "@/components/ui/SignalLine";
import type { ContactForm } from "@/types";
import {
  CONTACT_LIMITS,
  TIMEZONES,
  contactSchema,
  formatUsPhoneInput,
  sendContactEmail,
  isLikelyBot,
  COMPANY_EMAIL,
} from "@/utils/contact";

export default function Contact() {
  const [sent, setSent] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [startedAt] = useState(() => Date.now());
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      timezone: "",
      target_market: "",
      monthly_goal: "",
      bottleneck: "",
      message: "",
    },
  });
  const messageLength = useWatch({ control, name: "message" }).length;

  const onSubmit = async (form: ContactForm) => {
    setSubmitError(null);
    // Quietly "succeed" for bots so they get no signal to retry.
    if (isLikelyBot(honeypotRef.current?.value ?? "", startedAt)) {
      setSent(true);
      return;
    }
    try {
      await sendContactEmail(form);
      setSent(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your request.",
      );
    }
  };

  const errorText = (key: keyof ContactForm) =>
    errors[key] ? (
      <p
        id={`${key}-error`}
        role="alert"
        className="mt-1.5 text-sm text-destructive"
      >
        {errors[key].message}
      </p>
    ) : null;

  const a11y = (key: keyof ContactForm) => ({
    id: key,
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${key}-error` : undefined,
  });

  const field =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors aria-invalid:border-destructive";
  const label =
    "text-sm font-medium uppercase tracking-widest text-muted-foreground";

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-350 px-6 py-12 md:px-16"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="heading-tight mt-4 font-display text-5xl font-semibold text-foreground md:text-7xl">
            Book Your Free
            <br />
            Strategy Call
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Tell us about your real estate business and we will help you build a
            support system that keeps leads moving.
          </p>
          <SignalLine className="my-8 max-w-sm" />
          <div className="space-y-1 text-sm">
            <div className="flex items-center justify-start gap-2 text-foreground">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-primary"
              />
              extradosesolutions@gmail.com
            </div>
            <div className="flex items-center justify-start gap-2 text-foreground">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-primary"
              />
              Schedule a 15-minute call
            </div>
            <div className="flex items-center justify-start gap-2 text-foreground">
              <span
                aria-hidden="true"
                className="h-2 w-2 shrink-0 rounded-full bg-primary"
              />
              EST, CST, MST, and PST coverage
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 md:p-10">
          {sent ? (
            <div className="flex h-full min-h-100 flex-col items-center justify-center text-center">
              <div className="text-sm font-medium uppercase tracking-widest text-primary">
                Transmission Complete
              </div>
              <h3 className="heading-tight mt-4 font-display text-3xl font-semibold text-foreground">
                Request Received
              </h3>
              <p className="mt-4 max-w-sm text-muted-foreground">
                Your briefing document has been logged. An EDS strategist will
                reach out within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => void handleSubmit(onSubmit)(e)}
              className="space-y-5"
              noValidate
            >
              {/* Spam trap: hidden from people, filled in by bots */}
              <input
                ref={honeypotRef}
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="full_name" className={label}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    autoComplete="name"
                    className={`${field} mt-2`}
                    maxLength={CONTACT_LIMITS.full_name.max}
                    {...a11y("full_name")}
                    {...register("full_name")}
                  />
                  {errorText("full_name")}
                </div>

                <div>
                  <label htmlFor="email" className={label}>
                    Email
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    className={`${field} mt-2`}
                    maxLength={CONTACT_LIMITS.email.max}
                    {...a11y("email")}
                    {...register("email")}
                  />
                  {errorText("email")}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="phone" className={label}>
                    Phone Number (US)
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel-national"
                    placeholder="(555) 123-4567"
                    className={`${field} mt-2`}
                    maxLength={20}
                    {...a11y("phone")}
                    {...register("phone", {
                      onChange: (e: ChangeEvent<HTMLInputElement>) => {
                        e.target.value = formatUsPhoneInput(e.target.value);
                      },
                    })}
                  />
                  {errorText("phone")}
                </div>
                <div>
                  <label htmlFor="timezone" className={label}>
                    Preferred Time Zone
                  </label>
                  <select
                    className={`${field} mt-2`}
                    {...a11y("timezone")}
                    {...register("timezone")}
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
                  {errorText("timezone")}
                </div>
              </div>

              <div>
                <label htmlFor="target_market" className={label}>
                  Target Market?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dallas-Fort Worth wholesaling"
                  className={`${field} mt-2`}
                  maxLength={CONTACT_LIMITS.target_market.max}
                  {...a11y("target_market")}
                  {...register("target_market")}
                />
                {errorText("target_market")}
              </div>

              <div>
                <label htmlFor="monthly_goal" className={label}>
                  Monthly Lead Goal?
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="e.g. 60 qualified appointments"
                  className={`${field} mt-2`}
                  maxLength={String(CONTACT_LIMITS.monthly_goal.max).length}
                  {...a11y("monthly_goal")}
                  {...register("monthly_goal", {
                    onChange: (e: ChangeEvent<HTMLInputElement>) => {
                      e.target.value = e.target.value.replace(/\D/g, "");
                    },
                  })}
                />
                {errorText("monthly_goal")}
              </div>

              <div>
                <label htmlFor="bottleneck" className={label}>
                  Current Bottleneck?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Slow follow-up, no callers, CRM mess"
                  className={`${field} mt-2`}
                  maxLength={CONTACT_LIMITS.bottleneck.max}
                  {...a11y("bottleneck")}
                  {...register("bottleneck")}
                />
                {errorText("bottleneck")}
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor="message" className={label}>
                    Message
                  </label>
                  <span className="text-sm text-muted-foreground">
                    {messageLength}/{CONTACT_LIMITS.message.max}
                  </span>
                </div>
                <textarea
                  rows={4}
                  className={`${field} mt-2 resize-none`}
                  maxLength={CONTACT_LIMITS.message.max}
                  {...a11y("message")}
                  {...register("message")}
                />
                {errorText("message")}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending…" : "Send Request"}
              </button>

              {submitError && (
                <p
                  role="alert"
                  className="rounded-md border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  {submitError} You can also email us directly at{" "}
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="underline underline-offset-2"
                  >
                    {COMPANY_EMAIL}
                  </a>
                  .
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

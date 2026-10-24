import { z } from "zod";
import { AsYouType, parsePhoneNumberFromString } from "libphonenumber-js";
import type { ContactForm } from "@/types";

export const TIMEZONES = [
  "EST (Eastern Standard Time)",
  "CST (Central Standard Time)",
  "MST (Mountain Standard Time)",
  "PST (Pacific Standard Time)",
] as const;

export const CONTACT_LIMITS = {
  full_name: { min: 2, max: 100 },
  email: { max: 254 },
  target_market: { max: 100 },
  monthly_goal: { min: 1, max: 100000 },
  bottleneck: { max: 100 },
  message: { max: 1000 },
} as const;

export function parseUsPhone(value: string) {
  const phone = parsePhoneNumberFromString(value, "US");
  return phone?.country === "US" && phone.isValid() ? phone : null;
}

export function formatUsPhoneInput(value: string) {
  let digits = value.replace(/\D/g, "");
  const hasCountryCode = digits.startsWith("1");
  digits = digits.slice(0, hasCountryCode ? 11 : 10);
  if (!digits) {
    return "";
  }
  return new AsYouType("US").input(hasCountryCode ? `+${digits}` : digits);
}

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Must be ${String(max)} characters or fewer`);

export const contactSchema = z.object({
  full_name: z
    .string()
    .trim()
    .min(CONTACT_LIMITS.full_name.min, "Please enter your full name")
    .max(
      CONTACT_LIMITS.full_name.max,
      `Must be ${String(CONTACT_LIMITS.full_name.max)} characters or fewer`,
    )
    .regex(
      /^[\p{L}][\p{L}\s'.-]*$/u,
      "Name can only contain letters, spaces, apostrophes, periods and hyphens",
    ),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(
      CONTACT_LIMITS.email.max,
      `Must be ${String(CONTACT_LIMITS.email.max)} characters or fewer`,
    )
    .pipe(z.email("Please enter a valid email address")),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .refine(
      (v) => parseUsPhone(v) !== null,
      "Please enter a valid US phone number",
    ),
  timezone: z
    .string()
    .refine(
      (v) => (TIMEZONES as readonly string[]).includes(v),
      "Please select a time zone",
    ),
  target_market: optionalText(CONTACT_LIMITS.target_market.max),
  monthly_goal: z
    .string()
    .trim()
    .refine((v) => v === "" || /^\d+$/.test(v), "Please enter a whole number")
    .refine(
      (v) =>
        v === "" ||
        (Number(v) >= CONTACT_LIMITS.monthly_goal.min &&
          Number(v) <= CONTACT_LIMITS.monthly_goal.max),
      `Must be between ${String(CONTACT_LIMITS.monthly_goal.min)} and ${CONTACT_LIMITS.monthly_goal.max.toLocaleString("en-US")}`,
    ),
  bottleneck: optionalText(CONTACT_LIMITS.bottleneck.max),
  message: optionalText(CONTACT_LIMITS.message.max),
}) satisfies z.ZodType<ContactForm, ContactForm>;

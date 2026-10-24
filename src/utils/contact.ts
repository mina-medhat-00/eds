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
  message: { max: 1000, maxLinks: 2 },
} as const;

export const COMPANY_EMAIL = "extradosesolutions@gmail.com";

// Submissions faster than this after the form loads are almost always bots.
const MIN_FILL_TIME_MS = 3000;
const REQUEST_TIMEOUT_MS = 15000;
const GENERIC_ERROR = "Something went wrong while sending your request.";

/* ---------------------------------- Phone --------------------------------- */

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

/* ------------------------------- Sanitizing ------------------------------- */

// Zero-width, bidi-override and other invisible characters that can hide or
// disguise content (e.g. making a link look like plain text).
const INVISIBLE_CHARS =
  /[\u00AD\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u2069\uFEFF]/g;

function isControlChar(char: string, keepNewlines: boolean) {
  if (keepNewlines && char === "\n") {
    return false;
  }
  const code = char.charCodeAt(0);
  return code < 0x20 || (code >= 0x7f && code <= 0x9f);
}

/**
 * Normalizes user text before it is validated and sent:
 * - Unicode NFKC normalization (folds look-alike characters)
 * - removes control and invisible characters
 * - single-line fields: collapses all whitespace, so no line breaks can be
 *   smuggled into the email subject or headers
 * - multi-line fields: keeps line breaks but limits runs of blank lines
 */
export function sanitizeText(value: string, multiline = false) {
  let text = value.normalize("NFKC").replace(INVISIBLE_CHARS, "");
  text = multiline
    ? text.replace(/\r\n?/g, "\n").replace(/\t/g, " ")
    : text.replace(/\s+/g, " ");
  let cleaned = "";
  for (const char of text) {
    if (!isControlChar(char, multiline)) {
      cleaned += char;
    }
  }
  text = cleaned;
  if (multiline) {
    text = text
      .split("\n")
      .map((line) => line.trimEnd())
      .join("\n")
      .replace(/\n{3,}/g, "\n\n");
  }
  return text.trim();
}

const HTML_PATTERN = /[<>]/;
const LINK_PATTERN = /\b(?:https?:\/\/|www\.)\S+/gi;
// Cells starting with these run as formulas if submissions are exported to a
// spreadsheet (CSV / formula injection).
const FORMULA_PATTERN = /^[=+@]/;

const countLinks = (value: string) => value.match(LINK_PATTERN)?.length ?? 0;

const tooLong = (max: number) => `Must be ${String(max)} characters or fewer`;

function safeText(max: number, { multiline = false, maxLinks = 0 } = {}) {
  return z
    .string()
    .transform((value) => sanitizeText(value, multiline))
    .pipe(
      z
        .string()
        .max(max, tooLong(max))
        .refine(
          (v) => !HTML_PATTERN.test(v),
          "Please remove < and > characters",
        )
        .refine((v) => !FORMULA_PATTERN.test(v), "Cannot start with =, + or @")
        .refine(
          (v) => countLinks(v) <= maxLinks,
          maxLinks === 0
            ? "Links are not allowed in this field"
            : `Please include no more than ${String(maxLinks)} links`,
        ),
    );
}

/* --------------------------------- Schema --------------------------------- */

export const contactSchema = z.object({
  full_name: z
    .string()
    .transform((value) => sanitizeText(value))
    .pipe(
      z
        .string()
        .min(CONTACT_LIMITS.full_name.min, "Please enter your full name")
        .max(
          CONTACT_LIMITS.full_name.max,
          tooLong(CONTACT_LIMITS.full_name.max),
        )
        .regex(
          /^\p{L}[\p{L} '.-]*$/u,
          "Name can only contain letters, spaces, apostrophes, periods and hyphens",
        ),
    ),
  email: z
    .string()
    .transform((value) => sanitizeText(value).toLowerCase())
    .pipe(
      z
        .string()
        .min(1, "Email is required")
        .max(CONTACT_LIMITS.email.max, tooLong(CONTACT_LIMITS.email.max))
        .pipe(z.email("Please enter a valid email address")),
    ),
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
  target_market: safeText(CONTACT_LIMITS.target_market.max),
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
  bottleneck: safeText(CONTACT_LIMITS.bottleneck.max),
  message: safeText(CONTACT_LIMITS.message.max, {
    multiline: true,
    maxLinks: CONTACT_LIMITS.message.maxLinks,
  }),
}) satisfies z.ZodType<ContactForm, ContactForm>;

/* --------------------------------- Sending -------------------------------- */

// FormSubmit (formsubmit.co) delivers form posts to the company inbox.
// Set VITE_CONTACT_ENDPOINT to override, e.g. with a FormSubmit alias URL.
// Only HTTPS FormSubmit URLs are accepted so a bad config cannot leak data.
function contactEndpoint() {
  const url = new URL(
    import.meta.env.VITE_CONTACT_ENDPOINT ??
      `https://formsubmit.co/ajax/${COMPANY_EMAIL}`,
  );
  if (url.protocol !== "https:" || url.hostname !== "formsubmit.co") {
    throw new Error("Invalid contact endpoint configuration.");
  }
  return url.toString();
}

/** True when the hidden honeypot was filled or the form was filled too fast. */
export function isLikelyBot(honeypot: string, startedAt: number) {
  return honeypot !== "" || Date.now() - startedAt < MIN_FILL_TIME_MS;
}

const responseSchema = z.object({
  success: z.union([z.boolean(), z.string()]),
  message: z.string().max(300).optional(),
});

export async function sendContactEmail(input: ContactForm) {
  // Re-validate right before sending so nothing unchecked can be posted,
  // even if this function is called without going through the form.
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    throw new Error("Please check the form for errors and try again.");
  }
  const form = parsed.data;
  const phone = parseUsPhone(form.phone)?.formatNational() ?? form.phone;
  const orDash = (value: string) => value || "—";

  let response: Response;
  try {
    response = await fetch(contactEndpoint(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "omit",
      referrerPolicy: "strict-origin",
      redirect: "error",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      body: JSON.stringify({
        _subject: `New Strategy Call Request: ${form.full_name}`,
        _replyto: form.email,
        _template: "table",
        _captcha: "false",
        "Full Name": form.full_name,
        Email: form.email,
        Phone: phone,
        "Preferred Time Zone": form.timezone,
        "Target Market": orDash(form.target_market),
        "Monthly Lead Goal": orDash(form.monthly_goal),
        "Current Bottleneck": orDash(form.bottleneck),
        Message: orDash(form.message),
      }),
    });
  } catch {
    throw new Error(GENERIC_ERROR);
  }

  const result = responseSchema.safeParse(
    await response.json().catch(() => null),
  );
  const ok =
    response.ok &&
    result.success &&
    (result.data.success === true || result.data.success === "true");

  if (!ok) {
    throw new Error(
      result.success && result.data.message
        ? sanitizeText(result.data.message)
        : GENERIC_ERROR,
    );
  }
}

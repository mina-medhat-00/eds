import LegalDocument from "@/components/ui/LegalDocument";
import type { LegalSection } from "@/types";

const SECTIONS: LegalSection[] = [
  {
    id: "overview",
    heading: "Overview",
    paragraphs: [
      'Extra Dose Solutions ("EDS", "we", "us") provides virtual assistants and acquisition specialists to real estate professionals in the United States. This policy explains what information we collect through this website and while delivering our services, how we use it, and the choices you have.',
      "By using this website or our services, you agree to the practices described in this policy.",
    ],
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    paragraphs: [
      "When you request a strategy call through our contact form, we collect the details you choose to share with us:",
    ],
    bullets: [
      "Full name, email address, and U.S. phone number",
      "Preferred time zone",
      "Target market, monthly lead goal, and current bottleneck",
      "Any message you include with your request",
    ],
  },
  {
    id: "how-the-form-works",
    heading: "How the Contact Form Works",
    paragraphs: [
      "When you submit our contact form, your details are sent securely to our business email inbox through FormSubmit (formsubmit.co), a third-party form delivery service. We do not store form submissions in a database on this website.",
      "FormSubmit processes your submission only to deliver it to us and handles it under its own privacy policy. Once received, your message is stored in our business email account and used only to respond to your request.",
    ],
  },
  {
    id: "client-data",
    heading: "Client and Lead Data",
    paragraphs: [
      "When we provide services, our team works inside the dialers, CRMs, and lead lists that you, our client, provide. You remain the owner of that data. We access it only to perform the services you have engaged us for and never sell it, rent it, or use it for our own marketing.",
      "Access is limited to the team members assigned to your account and is removed when the engagement ends.",
    ],
  },
  {
    id: "how-we-use-information",
    heading: "How We Use Information",
    paragraphs: ["We use the information we collect to:"],
    bullets: [
      "Respond to your inquiry and schedule your strategy call",
      "Design and deliver a support plan for your business",
      "Communicate with you about your account and our services",
      "Meet our legal, tax, and accounting obligations",
    ],
  },
  {
    id: "sharing",
    heading: "How We Share Information",
    paragraphs: [
      "We do not sell your personal information. We share it only with service providers that help us run our business, such as email and scheduling tools, and only as needed for them to perform those services. We may also disclose information when required by law or to protect our rights, our clients, or the public.",
    ],
  },
  {
    id: "cookies",
    heading: "Cookies and Third-Party Services",
    paragraphs: [
      "This website does not use advertising cookies or tracking analytics. To display our fonts, your browser loads them from Google Fonts, which means Google may receive your IP address as part of that request. Google's handling of that data is governed by its own privacy policy.",
    ],
  },
  {
    id: "retention-security",
    heading: "Data Retention and Security",
    paragraphs: [
      "We keep inquiry information for as long as needed to respond to you and maintain our business records. Client data is retained only for the duration of the engagement, unless you ask us to remove it sooner or the law requires otherwise.",
      "We use reasonable administrative and technical safeguards to protect information, but no method of transmission or storage is completely secure.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your Choices and Rights",
    paragraphs: [
      "You can ask us to access, correct, or delete the personal information we hold about you at any time. Depending on your state of residence, you may have additional privacy rights, and we will honor those requests as required by applicable law.",
    ],
  },
  {
    id: "children",
    heading: "Children's Privacy",
    paragraphs: [
      "Our services are intended for businesses and are not directed to anyone under 18. We do not knowingly collect personal information from children.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    paragraphs: [
      "We may update this policy from time to time. When we do, we will post the revised version on this page.",
    ],
  },
  {
    id: "contact",
    heading: "Contact Us",
    paragraphs: [
      "Questions about this policy or requests about your information can be sent to extradosesolutions@gmail.com.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Privacy Policy"
      intro="Your information stays yours. Here is exactly what we collect, why we collect it, and how we protect it."
      sections={SECTIONS}
    />
  );
}

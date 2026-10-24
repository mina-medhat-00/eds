import LegalDocument from "@/components/ui/LegalDocument";
import type { LegalSection } from "@/types";

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    heading: "Acceptance of Terms",
    paragraphs: [
      'These Terms of Service govern your use of this website and the services provided by Extra Dose Solutions ("EDS", "we", "us"). By using the website or engaging our services, you agree to these terms. If you are agreeing on behalf of a business, you confirm that you have authority to bind that business.',
    ],
  },
  {
    id: "services",
    heading: "Our Services",
    paragraphs: [
      "EDS provides remote staffing and support for real estate professionals, including:",
    ],
    bullets: [
      "Virtual assistants for cold calling, lead qualification, and appointment setting",
      "Acquisition specialists for CRM management, follow-ups, and closing coordination",
      "Lead management workflows and custom staffing solutions",
    ],
  },
  {
    id: "engagements",
    heading: "Engagements and Free Trials",
    paragraphs: [
      "The specific scope, staffing, schedule, and pricing for your engagement are agreed during or after your strategy call and confirmed in writing. Where offered, a free trial period lets you evaluate our team before committing to a paid engagement.",
      "Engagements are flexible. Either party may scale or end an engagement with reasonable written notice as agreed in your plan.",
    ],
  },
  {
    id: "client-responsibilities",
    heading: "Client Responsibilities",
    paragraphs: [
      "Because our team works inside your systems and on your behalf, you agree to:",
    ],
    bullets: [
      "Provide the dialer, CRM access, and lead data our team needs to perform the services",
      "Have the legal right to use and share any lead lists and contact data you provide",
      "Provide accurate scripts, criteria, and instructions for your campaigns",
      "Pay invoices on time according to your agreed plan",
    ],
  },
  {
    id: "compliance",
    heading: "Calling and Marketing Compliance",
    paragraphs: [
      "Outbound calling and texting in the United States are regulated by laws such as the Telephone Consumer Protection Act (TCPA), the Telemarketing Sales Rule, and state telemarketing laws. As the owner of the campaign and the data, you are responsible for ensuring your lists are scrubbed against the National Do Not Call Registry and any applicable state lists, that required consents are in place, and that your dialer is configured lawfully.",
      "Our team follows your calling windows, scrub results, and opt-out instructions, and will honor any do-not-call request received during a conversation.",
    ],
  },
  {
    id: "payment",
    heading: "Fees and Payment",
    paragraphs: [
      "Fees are set out in your custom plan. Unless otherwise agreed, invoices are due on receipt. We may pause services on accounts with overdue balances after giving notice.",
    ],
  },
  {
    id: "confidentiality",
    heading: "Confidentiality and Data",
    paragraphs: [
      "We treat your scripts, lead lists, pricing, and business information as confidential and use them only to deliver the services. You retain ownership of all data you provide and all records created in your systems. Our handling of personal information is described in our Privacy Policy.",
    ],
  },
  {
    id: "website-use",
    heading: "Use of This Website",
    paragraphs: [
      "The content on this website, including text, design, and branding, belongs to EDS and may not be copied or reused without permission. Case studies and performance figures reflect past client results and are not a guarantee of future outcomes.",
    ],
  },
  {
    id: "disclaimers",
    heading: "Disclaimers",
    paragraphs: [
      "We work hard to drive results, but lead conversion, appointment volume, and closed deals depend on many factors outside our control, including list quality, market conditions, and your sales process. Our services are provided without any guarantee of a specific business outcome.",
    ],
  },
  {
    id: "liability",
    heading: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, EDS is not liable for any indirect, incidental, or consequential damages, or for lost profits or deals. Our total liability for any claim related to the services is limited to the fees you paid us in the three months before the claim arose.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to These Terms",
    paragraphs: [
      "We may update these terms from time to time. When we do, we will post the revised version on this page. Continued use of the website or services after an update means you accept the revised terms.",
    ],
  },
  {
    id: "contact",
    heading: "Contact Us",
    paragraphs: [
      "Questions about these terms can be sent to extradosesolutions@gmail.com.",
    ],
  },
];

export default function TermsOfService() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Terms of Service"
      intro="The ground rules for working together: what we deliver, what we need from you, and how we keep every campaign compliant."
      sections={SECTIONS}
    />
  );
}

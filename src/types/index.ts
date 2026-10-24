import type { ReactNode } from "react";

export interface ContactForm {
  full_name: string;
  email: string;
  phone: string;
  timezone: string;
  target_market: string;
  monthly_goal: string;
  bottleneck: string;
  message: string;
}

export interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

export interface LegalDocumentProps {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}

export interface LegalSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

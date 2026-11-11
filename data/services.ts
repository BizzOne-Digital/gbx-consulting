import type { LucideIcon } from "lucide-react";
import { Compass, GraduationCap, ShoppingBag } from "lucide-react";
import type { ImageKey } from "./images";

export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  summary: string;
  body: string[];
  areas: string[];
  icon: LucideIcon;
  image: ImageKey;
  placeholder?: boolean;
}

// Consulting + Training copy supplied by client.
// Merchandise details not yet supplied — PLACEHOLDER copy, replace when available.
export const services: Service[] = [
  {
    slug: "consulting",
    title: "Consulting",
    eyebrow: "Strategic Consultation",
    headline: "Strategic Consultation for Sustainable Organizational Growth",
    summary:
      "Partnering with organizations to strengthen programming, improve operational effectiveness and drive measurable results.",
    body: [
      "Our consulting division partners with organizations to strengthen programming, improve operational effectiveness, and develop innovative solutions that drive measurable results.",
      "Using research-based behavioral intervention strategies and organizational assessment tools, we help clients identify systemic challenges, evaluate performance gaps, and implement strategic action plans tailored to their mission and goals.",
      "We work collaboratively with each client to develop comprehensive “matrix” planning frameworks that outline clear pathways toward growth, sustainability, and success — strengthening brand identity, enhancing service delivery, and positioning your organization for long-term impact within the communities you serve.",
    ],
    areas: [
      "Organizational Assessments",
      "Program Development & Enhancement",
      "Behavioral Health Consultation",
      "Strategic Planning",
      "Performance Improvement Initiatives",
      "Community & Stakeholder Engagement",
      "Brand Development & Consumer Outreach Strategies",
    ],
    icon: Compass,
    image: "boardroom",
  },
  {
    slug: "training",
    title: "Training",
    eyebrow: "Professional Development",
    headline: "Professional Development & Evidence-Based Learning Solutions",
    summary:
      "Engaging, practical training that strengthens professional competencies and organizational effectiveness.",
    body: [
      "Our extensive network of multidisciplinary professionals delivers high-quality training programs designed to strengthen knowledge, improve professional competencies, and enhance organizational effectiveness.",
      "Each program is engaging, practical, and outcome-focused, ensuring participants leave with actionable tools and strategies that can be immediately applied within their professional settings.",
      "Whether supporting healthcare professionals, educators, coaches, or organizational leaders, we are committed to helping clients meet and exceed their training and development goals.",
    ],
    areas: [
      "Behavioral Health & Wellness",
      "Sports Performance & Athlete Development",
      "Challenging Behaviors & Behavioral Interventions",
      "Early Identification & Intervention Strategies for ASD",
      "Organizational Leadership & Team Development",
      "Mental Health Awareness & Crisis Response",
      "Health Promotion & Prevention Strategies",
    ],
    icon: GraduationCap,
    image: "training",
  },
  {
    slug: "merchandise",
    title: "Merchandise",
    eyebrow: "The GBX Collection",
    headline: "Branded Merchandise That Carries the Mission",
    summary:
      "GBX-branded apparel and resources for teams, programs and partners who share the mission.",
    body: [
      "The GBX collection extends our commitment to wellness and performance beyond consultation and training — offering branded apparel and resources for teams, programs, events and supporters.",
      "Contact us to ask about current availability, team orders and program partnerships.",
    ],
    areas: ["Branded Apparel", "Team & Program Orders", "Event & Training Materials", "Partner Collaborations"],
    icon: ShoppingBag,
    image: "merchandise",
    placeholder: true,
  },
];

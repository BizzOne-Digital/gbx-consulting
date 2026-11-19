import type { LucideIcon } from "lucide-react";
import { Compass, GraduationCap, Trophy, ShoppingBag } from "lucide-react";
import type { ImageKey } from "./images";

export interface ServiceArea {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  summary: string;
  body: string[];
  areas: ServiceArea[];
  /** Optional extra list, e.g. available training topics */
  topics?: { heading: string; items: string[] };
  idealFor: string[];
  icon: LucideIcon;
  image: ImageKey;
  cta: string;
  placeholder?: boolean;
}

// Service categories + deliverable lists supplied by client (final edits).
// Short descriptions under each deliverable explain what the client is purchasing — edit freely.
export const services: Service[] = [
  {
    slug: "consulting",
    title: "Strategic Consulting",
    eyebrow: "Consulting",
    headline: "Strategic Consultation for Sustainable Organizational Growth",
    summary:
      "Government, agency and behavioral health consulting — from organizational assessments to strategic planning and implementation.",
    body: [
      "Our consulting division partners with organizations to strengthen programming, improve operational effectiveness, and develop innovative solutions that drive measurable results.",
      "Using research-based strategies and organizational assessment tools, we help clients identify systemic challenges, evaluate performance gaps, and implement strategic action plans tailored to their mission and goals.",
    ],
    areas: [
      {
        title: "Government & State Agency Consulting",
        description:
          "Strategic support for public-sector leaders and agencies strengthening service delivery systems, programs and operational capacity.",
      },
      {
        title: "Program Development & Evaluation",
        description:
          "Designing new programs or strengthening existing ones, with clear measures to evaluate effectiveness and outcomes.",
      },
      {
        title: "Organizational Assessments",
        description:
          "A structured review of systems, staffing, workflows and performance to identify gaps, strengths and priority opportunities.",
      },
      {
        title: "Behavioral Health Program Development",
        description:
          "Building and integrating evidence-informed behavioral health service models, including coordinated care approaches.",
      },
      {
        title: "Strategic Planning & Implementation",
        description:
          "Clear “matrix” planning frameworks with defined goals, timelines and responsibilities — plus support to put the plan into action.",
      },
    ],
    idealFor: ["Government agencies", "State agencies", "Healthcare organizations", "Community organizations"],
    icon: Compass,
    image: "boardroom",
    cta: "Inquire About Consulting",
  },
  {
    slug: "training",
    title: "Professional Training & Development",
    eyebrow: "Training",
    headline: "Professional Development & Evidence-Based Learning Solutions",
    summary:
      "Engaging, practical training in leadership, behavioral health, cultural competency and team performance.",
    body: [
      "Our multidisciplinary network delivers high-quality training programs designed to strengthen knowledge, improve professional competencies, and enhance organizational effectiveness.",
      "Every program is engaging, practical and outcome-focused, so participants leave with actionable tools they can apply immediately — whether they are healthcare professionals, educators, coaches or organizational leaders.",
    ],
    areas: [
      {
        title: "Leadership Development",
        description:
          "Equipping current and emerging leaders with the skills to guide teams, make decisions and lead organizational change.",
      },
      {
        title: "Behavioral Health Training",
        description:
          "Workforce training that strengthens behavioral health knowledge, engagement skills and quality of service.",
      },
      {
        title: "Cultural Competency",
        description:
          "Building culturally responsive practices so staff can serve diverse individuals, families and communities effectively.",
      },
      {
        title: "Staff Development",
        description:
          "Training, coaching and technical assistance that strengthen professional competencies across your workforce.",
      },
      {
        title: "Team Building & Communication",
        description:
          "Interactive sessions that improve collaboration, communication and trust within and across teams.",
      },
    ],
    topics: {
      heading: "Available Training Topics",
      items: [
        "Motivational Interviewing",
        "Mental Health Awareness & Crisis Response",
        "Challenging Behaviors & Behavioral Interventions",
        "Early Identification & Intervention Strategies for ASD",
        "Trauma-Informed School-Based Services",
        "Health Promotion & Prevention Strategies",
      ],
    },
    idealFor: ["Healthcare professionals", "Educators & school districts", "Coaches", "Organizational leaders"],
    icon: GraduationCap,
    image: "training",
    cta: "Inquire About Training",
  },
  {
    slug: "sports",
    title: "Sports & Performance Consulting",
    eyebrow: "Performance",
    headline: "Where Behavioral Health Meets High Performance",
    summary:
      "Athlete development, coaching leadership, mental wellness and team culture support for athletic organizations.",
    body: [
      "We partner with athletic programs and sports organizations where leadership, behavioral well-being, culture and performance intersect.",
      "Our approach helps athletes, coaches and staff work from the same playbook — building environments where people and performance can thrive.",
    ],
    areas: [
      {
        title: "Athlete Development",
        description: "Strategies that support the growth of athletes on and off the field, from habits to resilience.",
      },
      {
        title: "Coaching & Leadership",
        description: "Supporting coaches and program leaders to communicate, motivate and lead with clarity.",
      },
      {
        title: "Mental Wellness & Performance",
        description:
          "Integrating mental wellness awareness into performance environments to support focus, consistency and well-being.",
      },
      {
        title: "Team Culture",
        description: "Building cohesive, accountable team cultures where standards and expectations are shared.",
      },
      {
        title: "Performance Improvement",
        description: "Assessing current performance systems and implementing practical plans for measurable improvement.",
      },
    ],
    idealFor: ["Athletic programs", "Sports organizations", "Coaches & staff", "Schools with athletic departments"],
    icon: Trophy,
    image: "sportsField",
    cta: "Inquire About Sports Consulting",
  },
  {
    slug: "merchandise",
    title: "Merchandise",
    eyebrow: "The GBX Collection",
    // PLACEHOLDER: client has not yet supplied merchandise details — replace copy when available.
    headline: "Branded Merchandise That Carries the Mission",
    summary: "GBX-branded apparel and resources for teams, programs and partners who share the mission.",
    body: [
      "The GBX collection extends our commitment to wellness and performance beyond consultation and training — offering branded apparel and resources for teams, programs, events and supporters.",
      "Contact us to ask about current availability, team orders and program partnerships.",
    ],
    areas: [
      { title: "Branded Apparel", description: "GBX-branded clothing for teams, staff and supporters." },
      { title: "Team & Program Orders", description: "Bulk orders for programs, events and partner organizations." },
      { title: "Event & Training Materials", description: "Branded resources to accompany trainings and events." },
    ],
    idealFor: ["Teams", "Programs", "Partners", "Supporters"],
    icon: ShoppingBag,
    image: "merchandise",
    cta: "Ask About Merchandise",
    placeholder: true,
  },
];

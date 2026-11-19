import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  Users,
  Leaf,
  Trophy,
  School,
  HeartHandshake,
  Building2,
  ShieldCheck,
  Award,
  Handshake,
  Target,
  ChartNoAxesCombined,
  Sparkles,
} from "lucide-react";

export interface Audience {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Pathway extends Audience {
  href: string;
  services: string[];
}

// Homepage pathways (client final edits) — helps visitors self-identify immediately.
export const expertise: Pathway[] = [
  {
    title: "Government & Public Sector",
    description: "Strategic consulting, program evaluation and workforce training for government and state agencies strengthening public service systems.",
    icon: Landmark,
    href: "/services#consulting",
    services: ["Agency consulting", "Program evaluation", "Strategic planning"],
  },
  {
    title: "Healthcare & Community Organizations",
    description: "Behavioral health program development, organizational assessments and staff training for healthcare, school and community partners.",
    icon: HeartHandshake,
    href: "/services#training",
    services: ["Behavioral health programs", "Staff development", "Cultural competency"],
  },
  {
    title: "Sports & Athletic Organizations",
    description: "Athlete development, coaching leadership, mental wellness and team culture support for athletic programs.",
    icon: Trophy,
    href: "/services#sports",
    services: ["Athlete development", "Team culture", "Performance improvement"],
  },
];

// About page — who we serve (from client copy)
export const audiences: Audience[] = [
  { title: "Government", description: "Public leaders seeking stronger systems and measurable community outcomes.", icon: Landmark },
  { title: "State Agencies", description: "Agencies improving program delivery, coordination and performance.", icon: Building2 },
  { title: "Behavioral Health & Healthcare Organizations", description: "Organizations enhancing programming, service delivery and outcomes.", icon: Leaf },
  { title: "Schools & Community Agencies", description: "Educators and community partners supporting individuals and families.", icon: School },
  { title: "Individuals & Families", description: "Individualized, strengths-based support built around unique needs.", icon: HeartHandshake },
  { title: "Athletic Programs & Sports Organizations", description: "Programs elevating athlete development, culture and performance.", icon: Trophy },
];

export const values: Audience[] = [
  { title: "Integrity", description: "Honest counsel and trusted relationships in every engagement.", icon: ShieldCheck },
  { title: "Excellence", description: "A commitment to quality that clients can feel in the results.", icon: Award },
  { title: "Collaboration", description: "Solutions built with clients — never handed to them.", icon: Handshake },
  { title: "Impact", description: "Focused on measurable, sustainable outcomes for people and systems.", icon: Target },
  { title: "Performance", description: "Helping individuals and organizations operate at their best.", icon: ChartNoAxesCombined },
  { title: "Human-Centered Strategy", description: "Culturally responsive, strengths-based and built around people.", icon: Sparkles },
];

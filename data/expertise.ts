import type { LucideIcon } from "lucide-react";
import { GraduationCap, ClipboardList, MessagesSquare, ScanSearch, School, Building2 } from "lucide-react";

export interface ExpertiseArea {
  title: string;
  description: string;
  icon: LucideIcon;
}

// Areas of expertise — copy supplied by client.
export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Behavioral Health Workforce Development",
    description:
      "Professional training, coaching, and technical assistance designed to strengthen workforce competencies and improve the quality of behavioral health services.",
    icon: GraduationCap,
  },
  {
    title: "Targeted Case Management & Human Services Program Implementation",
    description:
      "Support for the development, integration, and implementation of evidence-informed service models, including Targeted Case Management and coordinated care approaches.",
    icon: ClipboardList,
  },
  {
    title: "Motivational Interviewing",
    description:
      "Training and implementation support to enhance client engagement, strengthen therapeutic relationships, and promote meaningful behavioral change.",
    icon: MessagesSquare,
  },
  {
    title: "Mental Health Screening & Early Intervention",
    description:
      "Development and implementation of screening, identification, referral, and intervention strategies to address emerging behavioral health concerns.",
    icon: ScanSearch,
  },
  {
    title: "Trauma-Informed School-Based Services",
    description:
      "Technical assistance and workforce development to help educational institutions recognize the impact of trauma, identify students at risk, and integrate appropriate behavioral health interventions within school-based settings.",
    icon: School,
  },
  {
    title: "Organizational Capacity Building",
    description:
      "Strategic consultation, program evaluation, and implementation support to strengthen human service systems and promote sustainable organizational improvements.",
    icon: Building2,
  },
];

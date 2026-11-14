import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { ExpertiseSection } from "@/components/about/ExpertiseSection";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ProcessSection } from "@/components/services/ProcessSection";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { services } from "@/data/services";

const description =
  "Consulting, training and branded merchandise from GBX Consulting — organizational assessments, program development, strategic planning and evidence-based professional training.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: { title: "Services | GBX Consulting", description, url: "/services" },
  twitter: { title: "Services | GBX Consulting", description },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      {services.slice(0, 2).map((s, i) => (
        <ServiceDetail key={s.slug} service={s} index={i} />
      ))}
      <ExpertiseSection id="areas-of-expertise" />
      <ServiceGrid />
      {services.slice(2).map((s, i) => (
        <ServiceDetail key={s.slug} service={s} index={i + 2} />
      ))}
      <ProcessSection tone="ivory" />
      <ServicesCTA />
    </>
  );
}

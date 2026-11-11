import { PageHero } from "@/components/shared/PageHero";
import { CTAButton } from "@/components/shared/CTAButton";

export function ServicesHero() {
  return (
    <PageHero
      label="Strategic Consulting Services"
      title={<>Solutions Designed to <em className="text-champagne">Elevate Performance</em></>}
      intro="Consulting, training and branded resources delivered by a multidisciplinary network — customized and evidence-driven for every organization we serve."
      image="boardroom"
    >
      <CTAButton href="#consulting">View Our Services</CTAButton>
      <CTAButton href="/contact" variant="ghost-light">Schedule a Consultation</CTAButton>
    </PageHero>
  );
}

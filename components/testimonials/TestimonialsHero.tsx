import { PageHero } from "@/components/shared/PageHero";

export function TestimonialsHero() {
  return (
    <PageHero
      label="Client Experiences"
      title={<>Trusted for <em className="text-champagne">Strategic Insight</em> and Meaningful Impact</>}
      intro="Perspectives from the leaders, programs and partners we work alongside."
      image="community"
    />
  );
}

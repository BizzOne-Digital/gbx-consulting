import { PageHero } from "@/components/shared/PageHero";

export function AboutHero() {
  return (
    <PageHero
      label="About GBX Consulting"
      title={<>Strategic Insight. <br /><em className="text-champagne">Human-Centered</em> Impact.</>}
      intro="An international behavioral health service group serving individuals, families, schools, athletic programs, healthcare organizations and community agencies across the U.S., the Caribbean and South America."
      image="officeLounge"
    />
  );
}

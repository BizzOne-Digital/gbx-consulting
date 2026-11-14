import { PageHero } from "@/components/shared/PageHero";

export function ContactHero() {
  return (
    <PageHero
      label="Start a Conversation"
      title={<>Let’s Elevate <em className="text-champagne">Performance</em> Together</>}
      intro="Share a few details about your organization and goals. Our team will follow up to schedule a consultation."
      image="officeLounge"
    />
  );
}

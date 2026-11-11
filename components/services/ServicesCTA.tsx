import { CTASection } from "@/components/home/CTASection";

export function ServicesCTA() {
  return (
    <CTASection
      title={<>Let’s Build Your <em className="text-sage">Strategy</em></>}
      text="Tell us about your organization and goals. We’ll recommend the consulting, training or performance support that fits."
      primary={{ label: "Schedule a Consultation", href: "/contact" }}
      secondary={{ label: "Contact GBX", href: "/contact" }}
    />
  );
}

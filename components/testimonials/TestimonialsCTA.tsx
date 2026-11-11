import { CTASection } from "@/components/home/CTASection";

export function TestimonialsCTA() {
  return (
    <div className="bg-ivory pt-20 md:pt-28">
      <CTASection
        title={<>Let’s Build What <em className="text-sage">Comes Next</em></>}
        text="Join the organizations working with GBX Consulting to strengthen systems, people and performance."
        primary={{ label: "Schedule a Consultation", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />
    </div>
  );
}

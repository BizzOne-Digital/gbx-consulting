import { CTASection } from "@/components/home/CTASection";

export function AboutCTA() {
  return (
    <div className="pt-20 md:pt-28 bg-ivory">
      <CTASection
        title={<>Let’s Talk About Your <em className="text-sage">Goals</em></>}
        text="Whether you lead an agency, a program or a team, we’re ready to listen and help you build a clear path forward."
        primary={{ label: "Schedule a Consultation", href: "/contact" }}
        secondary={{ label: "Explore Services", href: "/services" }}
      />
    </div>
  );
}

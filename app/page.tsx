import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AudienceStrip } from "@/components/home/AudienceStrip";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyGBX } from "@/components/home/WhyGBX";
import { PerformanceSection } from "@/components/home/PerformanceSection";
import { ProcessSection } from "@/components/services/ProcessSection";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: { absolute: "GBX Consulting | Behavioral Health & Performance Consulting" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceStrip />
      <AboutPreview />
      <ServicesPreview />
      <WhyGBX />
      <PerformanceSection />
      <ProcessSection />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}

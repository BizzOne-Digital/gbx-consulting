import type { Metadata } from "next";
import { TestimonialsHero } from "@/components/testimonials/TestimonialsHero";
import { TestimonialsGrid } from "@/components/testimonials/TestimonialsGrid";
import { TrustSection } from "@/components/testimonials/TrustSection";
import { TestimonialsCTA } from "@/components/testimonials/TestimonialsCTA";

const description =
  "Client experiences with GBX Consulting — strategic insight, behavioral health expertise and performance-focused leadership.";

export const metadata: Metadata = {
  title: "Testimonials",
  description,
  alternates: { canonical: "/testimonials" },
  openGraph: { title: "Testimonials | GBX Consulting", description, url: "/testimonials" },
  twitter: { title: "Testimonials | GBX Consulting", description },
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsGrid />
      <TrustSection />
      <TestimonialsCTA />
    </>
  );
}

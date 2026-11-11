import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

// Uses PLACEHOLDER testimonials from data/testimonials.ts — replace with approved client quotes.
export function TestimonialsPreview() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading label="Client Experiences" title={<>Trusted for <em className="text-moss">Impact</em></>} />
          <Link href="/testimonials" className="group inline-flex items-center gap-2 font-semibold text-forest hover:text-moss">
            View all testimonials
            <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <RevealItem key={t.role}>
              <TestimonialCard testimonial={t} featured={i === 1} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

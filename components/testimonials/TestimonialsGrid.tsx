import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";

// NOTE: data/testimonials.ts currently holds PLACEHOLDER entries — replace before launch.
export function TestimonialsGrid() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <RevealGroup className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
        {testimonials.map((t, i) => (
          <RevealItem key={t.role}>
            <TestimonialCard testimonial={t} featured={i === 1 || i === 3} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

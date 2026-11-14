import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialCard({ testimonial, featured = false }: { testimonial: Testimonial; featured?: boolean }) {
  return (
    <figure
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1.5 sm:p-10",
        featured
          ? "bg-wood border-champagne/20 text-ivory shadow-lux"
          : "border-forest/10 bg-cream hover:border-moss/40 hover:bg-[#eef1e2] hover:shadow-soft",
      )}
    >
      <Quote aria-hidden className={cn("h-10 w-10", featured ? "text-leaf" : "text-moss/60")} strokeWidth={1.2} />
      <blockquote className={cn("mt-6 flex-1 font-serif text-[1.55rem] leading-snug", featured ? "text-ivory" : "text-forest-dark")}>
        “{testimonial.quote}”
      </blockquote>
      <figcaption className={cn("mt-8 border-t pt-5", featured ? "border-ivory/15" : "border-forest/10")}>
        <p className={cn("font-semibold", featured ? "text-ivory" : "text-forest")}>{testimonial.role}</p>
        <p className={cn("label mt-1 text-[0.65rem]", featured ? "text-sage" : "text-moss")}>{testimonial.sector}</p>
      </figcaption>
    </figure>
  );
}

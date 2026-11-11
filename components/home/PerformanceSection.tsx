import Image from "next/image";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";
import { images } from "@/data/images";

const pillars = ["Leadership", "Behavioral Well-Being", "Culture", "Performance"];

export function PerformanceSection() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-dark py-28 md:py-40">
      <Image src={images.sportsField.src} alt="" fill sizes="100vw" className="-z-10 object-cover opacity-60" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-dark via-forest-dark/85 to-forest-dark/30" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-dark via-transparent to-forest-dark/60" />
      <div className="container">
        <Reveal className="max-w-3xl">
          <p className="label flex items-center gap-4 text-champagne">
            Performance &amp; Impact <span aria-hidden className="h-px w-12 bg-leaf" />
          </p>
          <h2 className="mt-6 text-[2.5rem] leading-[1.04] text-ivory sm:text-6xl lg:text-7xl">
            Where Behavioral Health <br className="hidden md:block" />
            Meets <em className="text-sage">High Performance</em>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory/80">
            GBX Consulting serves organizations where leadership, behavioral well-being, culture and performance intersect —
            from athletic programs and coaches to agencies and community leaders who want their people and systems operating
            at their best.
          </p>
          <ul className="mt-9 flex flex-wrap gap-3">
            {pillars.map((p) => (
              <li key={p} className="rounded-full border border-champagne/30 bg-white/5 px-5 py-2 text-sm text-ivory/85 backdrop-blur">
                {p}
              </li>
            ))}
          </ul>
          <CTAButton href="/contact" className="mt-11">Discuss Your Goals</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

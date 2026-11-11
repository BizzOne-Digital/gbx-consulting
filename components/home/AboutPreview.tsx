import Image from "next/image";
import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";
import { LeafCurves } from "@/components/shared/DecorativeLines";
import { images } from "@/data/images";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <LeafCurves className="-right-10 -top-10 h-[420px] w-[320px]" />
      <div className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="left" className="relative">
          <div aria-hidden className="absolute -bottom-6 -left-6 h-2/3 w-2/3 rounded-[2rem] bg-sage/60" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] rounded-tl-[6rem] shadow-lux">
            <Image
              src={images.strategyMeeting.src}
              alt={images.strategyMeeting.alt}
              fill
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <svg aria-hidden viewBox="0 0 120 120" className="absolute -bottom-3 -left-3 h-28 w-28">
            <path d="M0 120 C 0 50, 40 10, 120 0 C 60 30, 30 70, 20 120 Z" fill="#77A63B" />
          </svg>
        </Reveal>

        <Reveal direction="right">
          <p className="label flex items-center gap-4 text-moss">
            About GBX Consulting <span aria-hidden className="h-px w-12 bg-leaf" />
          </p>
          <h2 className="mt-5 text-[2.35rem] leading-[1.05] text-forest-dark sm:text-5xl lg:text-[3.6rem]">
            A Strategic Partner <br className="hidden sm:block" />
            in <em className="text-moss">Behavioral Health</em>
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-charcoal/75">
            Founded in 2010 by Shelton Gilyard, GBX Consulting is a trusted provider of behavioral health, wellness, and
            performance consulting services — backed by an experienced network of multidisciplinary professionals.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal/70">
            We improve client outcomes through evidence-based practices, strategic intervention models, and individualized
            support for individuals, families, organizations, and communities.
          </p>
          <CTAButton href="/about" variant="secondary" className="mt-9">
            Learn More About Us
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

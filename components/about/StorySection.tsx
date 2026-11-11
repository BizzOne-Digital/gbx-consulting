import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { LeafCurves } from "@/components/shared/DecorativeLines";
import { images } from "@/data/images";

// Story copy supplied by client (Home + About text). Edit here if the client revises it.
export function StorySection() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <LeafCurves className="-left-24 bottom-0 h-[380px] w-[280px] -scale-x-100" />
      <div className="container grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal direction="left">
          <p className="label flex items-center gap-4 text-moss">
            Our Story <span aria-hidden className="h-px w-12 bg-leaf" />
          </p>
          <h2 className="mt-5 text-[2.35rem] leading-[1.05] text-forest-dark sm:text-5xl lg:text-[3.4rem]">
            Since 2010, Building <em className="text-moss">Meaningful</em> Partnerships
          </h2>
          <div className="relative mt-10 grid grid-cols-2 gap-4">
            <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[1.75rem] rounded-tr-[5rem] shadow-lux">
              <Image src={images.workspace.src} alt={images.workspace.alt} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" className="lg:pt-14">
          <p className="font-serif text-[1.7rem] leading-snug text-forest sm:text-3xl">
            Founded in 2010 by Shelton Gilyard, GBX Consulting is a trusted provider of behavioral health, wellness, and
            performance consulting services.
          </p>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-charcoal/75">
            <p>
              Our comprehensive consultation model addresses behavioral health, organizational development, wellness, and
              organizational performance enhancement needs through customized and evidence-driven strategies.
            </p>
            <p>
              Our services are individualized, culturally competent, and rooted in a strengths-based philosophy that promotes
              resilience, growth, and long-term success. We specialize in behavioral, organizational, and performance
              assessments that help clients identify challenges, maximize opportunities, and improve overall outcomes.
            </p>
            <p>
              Through strategic collaboration and professional expertise, we empower clients to achieve personal,
              organizational, and performance goals with confidence and clarity.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

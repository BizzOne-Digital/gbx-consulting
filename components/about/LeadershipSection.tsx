import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { images } from "@/data/images";

/**
 * LEADERSHIP — PLACEHOLDER.
 * Replace the image with an official portrait of Shelton Gilyard and the bio paragraph
 * with the client-approved biography and credentials once supplied. Do not add credentials,
 * licenses or years of experience until the client confirms them.
 */
export function LeadershipSection() {
  return (
    <section className="bg-wood relative isolate overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-dark/95 via-forest-dark/90 to-forest/85" />
      <div className="container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal direction="left" className="relative mx-auto w-full max-w-md">
          <div aria-hidden className="absolute -right-5 -top-5 h-full w-full rounded-[2rem] border border-champagne/30" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lux">
            <Image src={images.sheltonPortrait.src} alt={images.sheltonPortrait.alt} fill sizes="(min-width:1024px) 35vw, 90vw" className="object-cover object-top" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-3xl text-ivory">Shelton Gilyard</p>
              <p className="label mt-1 text-[0.65rem] text-sage">Founder / Principal Consultant</p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <p className="label flex items-center gap-4 text-champagne">
            Leadership <span aria-hidden className="h-px w-12 bg-leaf" />
          </p>
          <h2 className="mt-5 text-[2.35rem] leading-[1.05] text-ivory sm:text-5xl lg:text-[3.6rem]">
            Leadership with <em className="text-sage">Purpose</em>
          </h2>
          <p className="mt-8 font-serif text-2xl italic leading-snug text-champagne">
            “Effective consultation begins with trust, innovation, and a commitment to excellence.”
          </p>
          <div className="mt-7 space-y-4 text-lg leading-relaxed text-ivory/75">
            <p>
              Shelton Gilyard founded GBX Consulting in 2010 to help individuals, families, organizations and communities
              achieve sustainable growth and improved performance.
            </p>
            {/* PLACEHOLDER BIO — replace with the official biography supplied by the client. */}
            <p>
              Leading a multidisciplinary network of professionals, Shelton guides the firm&apos;s consulting and training work
              with a focus on collaboration, cultural responsiveness and measurable outcomes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

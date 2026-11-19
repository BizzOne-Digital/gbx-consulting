import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { images } from "@/data/images";

// Client-supplied story of Shelton Gilyard's work in South America (Facebook reel).
const STORY_URL = "https://www.facebook.com/reel/1604738777484816";

export function FeaturedStory() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container">
        <Reveal>
          <a
            href={STORY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-wood relative isolate grid overflow-hidden rounded-[2rem] shadow-lux md:grid-cols-[1fr_1.1fr]"
          >
            <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-dark/90 via-forest-dark/85 to-forest/80" />
            <div className="relative min-h-[260px] overflow-hidden md:min-h-[380px]">
              <Image
                src={images.sheltonHero.src}
                alt=""
                fill
                sizes="(min-width:768px) 45vw, 100vw"
                className="object-cover object-[48%_20%] transition-transform duration-700 group-hover:scale-105"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-forest-dark/10 to-transparent md:bg-gradient-to-r md:from-transparent md:to-forest-dark/80" />
              <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ivory/40 bg-forest-dark/50 text-ivory backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-moss">
                <Play aria-hidden className="ml-1 h-8 w-8" strokeWidth={1.5} />
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="label flex items-center gap-4 text-champagne">
                Featured Story <span aria-hidden className="h-px w-10 bg-leaf" />
              </p>
              <h2 className="mt-5 text-[2.2rem] leading-[1.05] text-ivory sm:text-5xl">
                Our Work in <em className="text-sage">South America</em>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-ivory/75">
                A widely shared story highlighting Shelton Gilyard&apos;s work with communities in South America — part of GBX
                Consulting&apos;s international reach across the U.S., the Caribbean and South America.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-sage">
                Watch the story on Facebook
                <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className="sr-only">(opens in a new tab)</span>
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

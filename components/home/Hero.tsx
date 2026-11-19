"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CTAButton } from "@/components/shared/CTAButton";
import { Diagonals, FlowLines } from "@/components/shared/DecorativeLines";
import { images } from "@/data/images";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const shapeY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const up = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease },
  });

  return (
    <section ref={ref} className="grain relative isolate overflow-hidden bg-forest-lux pt-20 md:pt-[88px]">
      <Diagonals />
      <motion.div style={{ y: shapeY }} aria-hidden className="absolute -left-40 top-24 h-[480px] w-[480px] rounded-full bg-leaf/10 blur-3xl" />
      <FlowLines className="left-0 top-10 h-72 w-full opacity-70" />

      <div className="relative grid lg:min-h-[calc(100svh-88px)] lg:grid-cols-[55%_45%]">
        {/* Copy */}
        <div className="container relative z-10 flex flex-col justify-center pb-10 pt-12 sm:py-20 lg:ml-auto lg:mr-0 lg:max-w-[760px] lg:py-24 lg:pr-4">
          <motion.p {...up(0.1)} className="label flex items-center gap-4 text-champagne">
            GBX Consulting
            <span aria-hidden className="h-px w-12 bg-leaf" />
          </motion.p>
          <h1 className="mt-6 font-serif leading-[1.02] text-ivory">
            <motion.span {...up(0.2)} className="block text-[2.6rem] sm:text-[3.6rem] lg:text-[3.4rem] xl:text-[4.4rem]">
              Transforming People.
            </motion.span>
            <motion.span {...up(0.3)} className="block text-[2.6rem] sm:text-[3.6rem] lg:text-[3.4rem] xl:text-[4.4rem]">
              Strengthening Organizations.
            </motion.span>
            <motion.span
              {...up(0.4)}
              className="block bg-gradient-to-r from-champagne via-[#e9dcbc] to-sage bg-clip-text pb-2 text-[2.6rem] italic text-transparent sm:text-[3.6rem] lg:text-[3.4rem] xl:text-[4.4rem]"
            >
              Elevating Performance.
            </motion.span>
          </h1>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.55, ease }}
            aria-hidden
            className="mt-7 block h-[3px] w-20 origin-left rounded bg-leaf"
          />
          <motion.p {...up(0.55)} className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ivory/85 sm:mt-7 sm:text-xl">
            GBX Consulting delivers strategic behavioral health, organizational development, professional training, and
            performance solutions that create measurable impact.
          </motion.p>
          <motion.div {...up(0.7)} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <CTAButton href="/services">Explore Our Services</CTAButton>
            <CTAButton href="/contact" variant="ghost-light">Schedule a Consultation</CTAButton>
          </motion.div>
          <motion.dl {...up(0.85)} className="mt-14 hidden flex-wrap gap-x-10 gap-y-4 border-t border-champagne/15 pt-7 text-sm text-ivory/70 lg:flex">
            <div>
              <dt className="label text-[0.65rem] text-champagne/80">Established</dt>
              <dd className="mt-1 font-serif text-2xl text-ivory">{site.founded}</dd>
            </div>
            <div>
              <dt className="label text-[0.65rem] text-champagne/80">Founder</dt>
              <dd className="mt-1 font-serif text-2xl text-ivory">{site.founder}</dd>
            </div>
            <div>
              <dt className="label text-[0.65rem] text-champagne/80">Serving</dt>
              <dd className="mt-1 font-serif text-2xl text-ivory">{site.regions}</dd>
            </div>
          </motion.dl>
        </div>

        {/* Image — bleeds to right edge and fades into the green */}
        <div className="relative h-[440px] sm:h-[560px] lg:h-auto">
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: reduce ? 1 : 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease }}
            className="absolute inset-0"
          >
            {/* HERO IMAGE: client headshot — /public/shelton-hero.jpg */}
            <Image src={images.sheltonHero.src} alt={images.sheltonHero.alt} fill priority sizes="(min-width:1024px) 45vw, 100vw" className="object-cover object-[48%_20%]" />
          </motion.div>
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_35%,rgba(252,249,242,0.18),transparent_55%)]" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-forest-dark lg:via-forest-dark/20 lg:to-transparent" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease }}
            className="absolute bottom-8 left-5 right-5 hidden max-w-sm rounded-2xl sm:block border border-white/15 bg-forest-dark/40 p-6 text-ivory backdrop-blur-xl sm:left-auto sm:right-8 lg:bottom-14"
          >
            <p className="label text-[0.65rem] text-sage">Our Approach</p>
            <p className="mt-3 font-serif text-2xl leading-snug">
              Culturally responsive, strengths-based and built for <em className="text-champagne">measurable</em> success.
            </p>
          </motion.div>
        </div>

        {/* Mobile / tablet stats — sits under the image so the photo appears right after the CTAs */}
        <dl className="container relative grid grid-cols-2 gap-x-6 gap-y-5 border-t border-champagne/15 bg-forest-dark py-8 lg:hidden">
          <div>
            <dt className="label text-[0.62rem] text-champagne/80">Established</dt>
            <dd className="mt-1 font-serif text-2xl text-ivory">{site.founded}</dd>
          </div>
          <div>
            <dt className="label text-[0.62rem] text-champagne/80">Founder</dt>
            <dd className="mt-1 font-serif text-2xl text-ivory">{site.founder}</dd>
          </div>
          <div className="col-span-2">
            <dt className="label text-[0.62rem] text-champagne/80">Serving</dt>
            <dd className="mt-1 font-serif text-xl text-ivory">{site.regions}</dd>
          </div>
        </dl>
      </div>
      <div aria-hidden className="bg-wood relative z-10 h-2.5 border-t border-champagne/20" />
    </section>
  );
}

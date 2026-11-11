"use client";

import { motion, useReducedMotion } from "framer-motion";

interface HeroTextProps {
  label: string;
  title: React.ReactNode;
  intro?: string;
  children?: React.ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroText({ label, title, intro, children }: HeroTextProps) {
  const reduce = useReducedMotion();
  const up = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });
  return (
    <div className="max-w-2xl pt-10 lg:pt-20">
      <motion.p {...up(0.05)} className="label flex items-center gap-4 text-champagne">
        {label}
        <span aria-hidden className="h-px w-12 bg-leaf" />
      </motion.p>
      <motion.h1 {...up(0.15)} className="mt-6 text-[2.75rem] leading-[1.02] text-ivory sm:text-6xl lg:text-[4.5rem]">
        {title}
      </motion.h1>
      <motion.span {...up(0.3)} aria-hidden className="mt-8 block h-[3px] w-16 rounded bg-leaf" />
      {intro && (
        <motion.p {...up(0.35)} className="mt-7 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
          {intro}
        </motion.p>
      )}
      {children && (
        <motion.div {...up(0.5)} className="mt-9 flex flex-col gap-3 sm:flex-row">
          {children}
        </motion.div>
      )}
    </div>
  );
}

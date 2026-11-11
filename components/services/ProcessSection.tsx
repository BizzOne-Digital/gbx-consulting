"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  { title: "Discover", text: "Understand organizational needs, challenges, stakeholders and objectives." },
  { title: "Assess", text: "Evaluate current systems, performance gaps and opportunities." },
  { title: "Strategize", text: "Develop tailored, practical and measurable recommendations." },
  { title: "Elevate", text: "Support implementation, performance and sustainable outcomes." },
];

export function ProcessSection({ tone = "cream" }: { tone?: "cream" | "ivory" }) {
  const reduce = useReducedMotion();
  return (
    <section className={tone === "cream" ? "bg-cream py-24 md:py-32" : "bg-ivory py-24 md:py-32"}>
      <div className="container">
        <SectionHeading
          align="center"
          label="Our Process"
          title={<>A Strategic Approach to <em className="text-moss">Meaningful</em> Change</>}
        />
        <ol className="relative mt-16 grid gap-12 md:mt-20 lg:grid-cols-4 lg:gap-8">
          {/* Desktop horizontal line */}
          <motion.span
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px origin-left bg-gradient-to-r from-moss via-leaf to-moss lg:block"
          />
          {/* Mobile vertical line */}
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduce ? 0 : 1.4 }}
            className="absolute bottom-8 left-8 top-8 w-px origin-top bg-gradient-to-b from-moss via-leaf to-moss lg:hidden"
          />
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: reduce ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center"
            >
              <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full border border-moss/40 bg-ivory font-serif text-2xl italic text-forest shadow-soft">
                <svg aria-hidden viewBox="0 0 64 64" className="absolute inset-0">
                  <circle cx="32" cy="32" r="29" fill="none" stroke="#77A63B" strokeWidth="1" strokeDasharray="4 5" />
                </svg>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-7">
                <h3 className="text-3xl text-forest-dark">{s.title}</h3>
                <p className="mt-3 max-w-xs leading-relaxed text-charcoal/70 lg:mx-auto">{s.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

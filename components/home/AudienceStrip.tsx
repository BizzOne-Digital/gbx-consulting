import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { expertise } from "@/data/audiences";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";

/** Three prominent pathways directly below the hero — "Which one are you?" */
export function AudienceStrip() {
  return (
    <section aria-labelledby="pathways-heading" className="bg-wood relative isolate border-b border-champagne/15 py-14 md:py-20">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-dark/85 via-forest-dark/75 to-forest-dark/90" />
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <p className="label flex items-center gap-4 text-champagne">
            <span aria-hidden className="h-px w-10 bg-leaf" />
            Find Your Pathway
            <span aria-hidden className="h-px w-10 bg-leaf" />
          </p>
          <h2 id="pathways-heading" className="mt-4 text-3xl text-ivory sm:text-4xl lg:text-5xl">
            Who We <em className="text-sage">Partner</em> With
          </h2>
        </div>

        <RevealGroup className="mt-10 grid gap-5 md:mt-12 md:grid-cols-3" stagger={0.12}>
          {expertise.map(({ title, description, icon: Icon, href, services }) => (
            <RevealItem key={title} className="h-full">
              <Link
                href={href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-champagne/20 bg-forest-dark/70 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-leaf/60 hover:bg-forest/80 hover:shadow-[0_30px_60px_-25px_rgba(119,166,59,0.45)] sm:p-8"
              >
                <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-leaf transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-16 w-16 place-items-center rounded-full border border-champagne/35 text-champagne transition-colors duration-300 group-hover:border-leaf group-hover:bg-moss group-hover:text-ivory">
                  <Icon aria-hidden className="h-7 w-7" strokeWidth={1.3} />
                </span>
                <h3 className="mt-6 text-[1.75rem] leading-tight text-ivory">{title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ivory/70">{description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <li key={s} className="rounded-full border border-champagne/20 px-3 py-1 text-xs text-ivory/75">
                      {s}
                    </li>
                  ))}
                </ul>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sage">
                  Explore this pathway
                  <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

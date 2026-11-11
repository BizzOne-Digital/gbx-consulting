import Image from "next/image";
import { Check } from "lucide-react";
import type { Service } from "@/data/services";
import { images } from "@/data/images";
import { Reveal } from "@/components/shared/Reveal";
import { CTAButton } from "@/components/shared/CTAButton";
import { cn } from "@/lib/utils";

/** Large alternating service section. */
export function ServiceDetail({ service, index }: { service: Service; index: number }) {
  const img = images[service.image];
  const reversed = index % 2 === 1;
  const Icon = service.icon;
  return (
    <section id={service.slug} className={cn("scroll-mt-24 py-20 md:py-28", reversed ? "bg-cream" : "bg-ivory")}>
      <div className="container grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal direction={reversed ? "right" : "left"} className={cn("lg:sticky lg:top-32", reversed && "lg:order-2")}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lux">
            <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 45vw, 100vw" className="object-cover" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent" />
            <span className="absolute bottom-6 left-6 grid h-16 w-16 place-items-center rounded-full border border-champagne/40 bg-forest/90 text-ivory backdrop-blur">
              <Icon aria-hidden className="h-7 w-7" strokeWidth={1.4} />
            </span>
            <span className="absolute right-6 top-5 font-serif text-7xl italic text-ivory/30">{String(index + 1).padStart(2, "0")}</span>
          </div>
        </Reveal>

        <Reveal direction={reversed ? "left" : "right"}>
          <p className="label flex items-center gap-4 text-moss">
            {service.eyebrow} <span aria-hidden className="h-px w-12 bg-leaf" />
          </p>
          <h2 className="mt-5 text-[2.3rem] leading-[1.05] text-forest-dark sm:text-5xl">{service.title}</h2>
          <p className="mt-3 font-serif text-2xl italic text-moss">{service.headline}</p>
          <div className="mt-7 space-y-4 leading-relaxed text-charcoal/75">
            {service.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <h3 className="label mt-10 text-forest">{service.slug === "training" ? "Training Focus Areas" : "Areas of Focus"}</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.areas.map((a) => (
              <li key={a} className="flex items-start gap-3 rounded-xl border border-forest/10 bg-white/60 px-4 py-3 text-[0.95rem] text-charcoal/85">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-moss text-ivory">
                  <Check aria-hidden className="h-3 w-3" strokeWidth={3} />
                </span>
                {a}
              </li>
            ))}
          </ul>
          <CTAButton href="/contact" variant="secondary" className="mt-10">
            {service.slug === "merchandise" ? "Ask About Merchandise" : `Inquire About ${service.title}`}
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}

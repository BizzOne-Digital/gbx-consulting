import { Phone } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <Reveal className="container flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div>
          <h2 className="text-4xl text-forest-dark sm:text-5xl">
            Prefer to <em className="text-moss">talk it through?</em>
          </h2>
          <p className="mt-3 text-lg text-charcoal/70">Call us directly and we’ll help you find the right next step.</p>
        </div>
        <a
          href={site.phoneHref}
          className="group inline-flex min-h-[56px] items-center gap-3 rounded-full bg-forest px-8 font-semibold text-ivory transition-colors hover:bg-forest-deep"
        >
          <Phone aria-hidden className="h-5 w-5 text-sage" /> {site.phone}
        </a>
      </Reveal>
    </section>
  );
}

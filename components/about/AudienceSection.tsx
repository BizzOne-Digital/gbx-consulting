import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { audiences } from "@/data/audiences";

export function AudienceSection() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container grid gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            label="Who We Serve"
            title={<>Organizations &amp; People Ready to <em className="text-moss">Grow</em></>}
            intro="Culturally responsive, strengths-based services tailored to the unique needs of every client we serve — across Southwest Florida and South America."
          />
        </div>
        <RevealGroup className="divide-y divide-forest/10 border-y border-forest/10" stagger={0.08}>
          {audiences.map(({ title, description, icon: Icon }) => (
            <RevealItem key={title}>
              <div className="group flex items-start gap-6 py-7 transition-colors duration-300 sm:items-center">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-moss/30 text-moss transition-colors duration-300 group-hover:bg-forest group-hover:text-ivory">
                  <Icon aria-hidden className="h-6 w-6" strokeWidth={1.4} />
                </span>
                <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between sm:gap-8">
                  <h3 className="text-2xl text-forest-dark transition-transform duration-300 group-hover:translate-x-1 sm:text-[1.75rem]">{title}</h3>
                  <p className="mt-1 max-w-xs text-[0.95rem] leading-relaxed text-charcoal/65 sm:mt-0 sm:text-right">{description}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { expertiseAreas } from "@/data/expertise";

export function ExpertiseSection({ id = "expertise" }: { id?: string }) {
  return (
    <section id={id} className="bg-wood relative isolate scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-dark/85 via-forest-dark/80 to-forest-dark/90" />
      <div className="container">
        <SectionHeading
          tone="light"
          label="Areas of Expertise"
          title={<>Building Stronger <em className="text-champagne">Human Service</em> Systems</>}
          intro="Technical expertise, workforce training, program development and implementation support — tailored to each partner."
        />
        <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] border border-champagne/15 bg-champagne/15 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {expertiseAreas.map(({ title, description, icon: Icon }, i) => (
            <RevealItem key={title} className="h-full">
              <div className="group relative flex h-full flex-col bg-forest-dark/95 p-8 transition-colors duration-300 hover:bg-forest sm:p-10">
                <span className="absolute right-7 top-6 font-serif text-5xl italic text-ivory/10">{String(i + 1).padStart(2, "0")}</span>
                <span className="grid h-14 w-14 place-items-center rounded-full border border-champagne/30 text-sage transition-colors duration-300 group-hover:bg-moss group-hover:text-ivory">
                  <Icon aria-hidden className="h-6 w-6" strokeWidth={1.4} />
                </span>
                <h3 className="mt-7 text-[1.6rem] leading-tight text-ivory">{title}</h3>
                <span aria-hidden className="mt-4 block h-px w-10 bg-leaf transition-all duration-500 group-hover:w-20" />
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ivory/70">{description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

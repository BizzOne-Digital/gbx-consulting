import { SectionHeading } from "@/components/shared/SectionHeading";
import { IconCard } from "@/components/shared/IconCard";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { values } from "@/data/audiences";

export function ValuesSection() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container">
        <SectionHeading
          label="Core Values"
          title={<>The Principles Behind <em className="text-moss">Every Engagement</em></>}
          intro="Effective consultation begins with trust, innovation, and a commitment to excellence."
        />
        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <RevealItem key={v.title}>
              <IconCard icon={v.icon} title={v.title} description={v.description} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

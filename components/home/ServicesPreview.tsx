import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImageCard } from "@/components/shared/ImageCard";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Diagonals } from "@/components/shared/DecorativeLines";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="grain relative overflow-hidden bg-forest-lux py-24 md:py-32">
      <Diagonals />
      <div className="container relative">
        <SectionHeading
          align="center"
          tone="light"
          label="Our Services"
          title={<>Comprehensive <em className="text-champagne">Consulting</em> Solutions</>}
          intro="Consulting, training and performance solutions that strengthen organizations, develop people and create measurable impact."
        />
        <RevealGroup className="mt-16 grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => (
            <RevealItem key={s.slug} className="h-full">
              <ImageCard title={s.title} description={s.summary} image={s.image} icon={s.icon} href={`/services#${s.slug}`} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

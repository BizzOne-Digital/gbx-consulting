import { SectionHeading } from "@/components/shared/SectionHeading";
import { IconCard } from "@/components/shared/IconCard";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Diagonals } from "@/components/shared/DecorativeLines";
import { expertise } from "@/data/audiences";

/** Sector focus grid — the four audiences the services are delivered to. */
export function ServiceGrid() {
  return (
    <section id="sectors" className="grain relative scroll-mt-24 overflow-hidden bg-forest-lux py-24 md:py-32">
      <Diagonals />
      <div className="container relative">
        <SectionHeading
          align="center"
          tone="light"
          label="Sectors We Support"
          title={<>Expertise Across <em className="text-champagne">Every Arena</em></>}
          intro="Our consulting and training divisions are tailored to the unique environments of the sectors we serve."
        />
        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((e, i) => (
            <RevealItem key={e.title}>
              <IconCard tone="dark" index={i} icon={e.icon} title={e.title} description={e.description} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

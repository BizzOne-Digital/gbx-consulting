import { Compass, SlidersHorizontal, ChartNoAxesCombined, Globe2 } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { IconCard } from "@/components/shared/IconCard";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";

const reasons = [
  { icon: Compass, title: "Strategic Expertise", description: "A multidisciplinary network applying research-based strategies and organizational assessment tools." },
  { icon: SlidersHorizontal, title: "Tailored Solutions", description: "Individualized, culturally competent services shaped around each client's mission and goals." },
  { icon: ChartNoAxesCombined, title: "Performance Focus", description: "Clear action plans built to close performance gaps and deliver measurable success." },
  { icon: Globe2, title: "Cross-Sector Perspective", description: "Experience across government, healthcare, schools, community agencies and athletic programs." },
];

export function WhyGBX() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <SectionHeading
            label="Why GBX Consulting"
            title={<>Strategy Built Around People, <em className="text-moss">Performance</em> &amp; Outcomes</>}
          />
          <p className="max-w-md text-lg leading-relaxed text-charcoal/70 lg:justify-self-end">
            Effective consultation begins with trust, innovation, and a commitment to excellence.
          </p>
        </div>
        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <RevealItem key={r.title}>
              <IconCard {...r} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

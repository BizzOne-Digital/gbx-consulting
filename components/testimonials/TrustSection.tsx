import { Eye, Compass, ChartNoAxesCombined, Handshake, Sprout } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Diagonals } from "@/components/shared/DecorativeLines";

const qualities = [
  { icon: Eye, title: "Clarity" },
  { icon: Compass, title: "Strategy" },
  { icon: ChartNoAxesCombined, title: "Performance" },
  { icon: Handshake, title: "Collaboration" },
  { icon: Sprout, title: "Long-Term Impact" },
];

export function TrustSection() {
  return (
    <section className="grain relative overflow-hidden bg-forest-lux py-24 md:py-32">
      <Diagonals />
      <div className="container relative">
        <SectionHeading align="center" tone="light" label="Our Clients" title={<>Built for Organizations <em className="text-champagne">That Value</em></>} />
        <RevealGroup className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-champagne/15 bg-champagne/15 sm:grid-cols-3 lg:grid-cols-5">
          {qualities.map(({ icon: Icon, title }, i) => (
            <RevealItem key={title} className={i === 4 ? "col-span-2 sm:col-span-1" : ""}>
              <div className="group flex h-full flex-col items-center gap-5 bg-forest-dark px-6 py-10 text-center transition-colors duration-300 hover:bg-forest">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-champagne/30 text-sage transition-colors group-hover:bg-moss group-hover:text-ivory">
                  <Icon aria-hidden className="h-6 w-6" strokeWidth={1.4} />
                </span>
                <span className="font-serif text-2xl text-ivory">{title}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

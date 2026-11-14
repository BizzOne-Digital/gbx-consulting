import { Target, Eye } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Diagonals, FlowLines } from "@/components/shared/DecorativeLines";

// Mission supplied by client; Vision is PLACEHOLDER copy pending client approval.
const blocks = [
  {
    icon: Target,
    label: "Our Mission",
    text: "To strengthen the systems, professionals, and partnerships responsible for delivering high-quality human services — helping organizations move beyond policy development toward effective implementation, sustainable practices, and measurable improvements in the communities they serve.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    text: "To create stronger organizations and healthier performance cultures where people and systems can thrive.",
  },
];

export function MissionSection() {
  return (
    <section className="bg-wood relative isolate overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-dark/90 via-forest/80 to-forest-dark/90" />
      <Diagonals />
      <FlowLines className="bottom-0 left-0 h-48 w-full" />
      <RevealGroup className="container relative grid gap-6 lg:grid-cols-2">
        {blocks.map(({ icon: Icon, label, text }) => (
          <RevealItem key={label}>
            <div className="h-full rounded-[1.75rem] border border-champagne/15 bg-white/[0.04] p-9 backdrop-blur-sm sm:p-12">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-champagne/30 text-sage">
                <Icon aria-hidden className="h-6 w-6" strokeWidth={1.4} />
              </span>
              <h2 className="label mt-8 text-champagne">{label}</h2>
              <p className="mt-5 font-serif text-[1.7rem] leading-snug text-ivory sm:text-[2.1rem]">{text}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

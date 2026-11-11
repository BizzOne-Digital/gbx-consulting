import { expertise } from "@/data/audiences";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

export function AudienceStrip() {
  return (
    <section aria-label="Areas of expertise" className="relative border-y border-champagne/10 bg-forest-dark">
      <RevealGroup className="container grid grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {expertise.map(({ title, icon: Icon }, i) => (
          <RevealItem
            key={title}
            className={cn(
              "group flex flex-col items-center gap-3 px-3 py-7 text-center sm:flex-row sm:gap-4 sm:text-left lg:justify-center lg:px-6 lg:py-9",
              // mobile/tablet 2x2 grid dividers
              i % 2 === 0 && "border-r border-champagne/15",
              i < 2 && "border-b border-champagne/10 lg:border-b-0",
              // desktop: thin separator between all four
              i === 1 && "lg:border-r lg:border-champagne/15",
              i === 2 && "lg:border-r",
            )}
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-champagne/25 text-champagne transition-colors duration-300 group-hover:bg-moss group-hover:text-ivory">
              <Icon aria-hidden className="h-6 w-6" strokeWidth={1.3} />
            </span>
            <span className="font-serif text-[1.05rem] leading-tight text-ivory sm:text-xl">{title}</span>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}

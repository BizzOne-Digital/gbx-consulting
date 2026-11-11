import Image from "next/image";
import { images, type ImageKey } from "@/data/images";
import { Diagonals, FlowLines } from "./DecorativeLines";
import { HeroText } from "./HeroText";

interface PageHeroProps {
  label: string;
  title: React.ReactNode;
  intro?: string;
  image: ImageKey;
  children?: React.ReactNode;
}

/** Inner-page hero: forest panel with blended photograph on the right. */
export function PageHero({ label, title, intro, image, children }: PageHeroProps) {
  const img = images[image];
  return (
    <section className="grain relative isolate overflow-hidden bg-forest-lux pt-28 md:pt-32">
      <Diagonals />
      <FlowLines className="bottom-0 left-0 h-40 w-full opacity-60" />
      <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block">
        <Image src={img.src} alt={img.alt} fill priority sizes="52vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark via-forest-dark/55 to-forest-dark/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 to-transparent" />
      </div>
      <div className="container relative pb-20 md:pb-28 lg:min-h-[560px] lg:pb-32">
        <HeroText label={label} title={title} intro={intro}>
          {children}
        </HeroText>
      </div>
      <div className="relative h-64 sm:h-80 lg:hidden">
        <Image src={img.src} alt={img.alt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest-dark/20 to-transparent" />
      </div>
    </section>
  );
}

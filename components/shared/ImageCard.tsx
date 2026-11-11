import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { images, type ImageKey } from "@/data/images";

interface ImageCardProps {
  title: string;
  description: string;
  image: ImageKey;
  icon: LucideIcon;
  href: string;
}

/** Dark service card: photo, gradient overlay, circular icon, title, arrow. */
export function ImageCard({ title, description, image, icon: Icon, href }: ImageCardProps) {
  const img = images[image];
  return (
    <Link
      href={href}
      className="group relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-2xl border border-champagne/20 bg-forest-dark shadow-lux transition-all duration-500 hover:-translate-y-1.5 hover:border-leaf/60 hover:shadow-[0_30px_60px_-25px_rgba(119,166,59,0.45)]"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/30 to-transparent" />
      </div>
      <div className="relative flex flex-1 flex-col px-7 pb-7">
        <span className="-mt-8 mb-5 grid h-16 w-16 place-items-center rounded-full border border-champagne/40 bg-forest text-ivory shadow-lg transition-colors duration-300 group-hover:bg-moss">
          <Icon aria-hidden className="h-7 w-7" strokeWidth={1.4} />
        </span>
        <h3 className="text-[1.9rem] leading-tight text-ivory">{title}</h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ivory/70">{description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sage">
          Learn more
          <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

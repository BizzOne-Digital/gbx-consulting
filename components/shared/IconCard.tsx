import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  tone?: "light" | "dark";
}

/** Editorial value card with optional 01/02 number label. */
export function IconCard({ icon: Icon, title, description, index, tone = "light" }: IconCardProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1",
        dark
          ? "border-champagne/15 bg-white/[0.03] hover:border-leaf/50 hover:bg-white/[0.06]"
          : "border-forest/10 bg-ivory hover:border-moss/40 hover:shadow-soft",
      )}
    >
      {index !== undefined && (
        <span className={cn("absolute right-7 top-6 font-serif text-5xl italic", dark ? "text-ivory/10" : "text-forest/10")}>
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <span
        className={cn(
          "grid h-14 w-14 place-items-center rounded-full border transition-colors duration-300",
          dark ? "border-champagne/30 text-sage group-hover:bg-moss group-hover:text-ivory" : "border-moss/30 text-moss group-hover:bg-forest group-hover:text-ivory",
        )}
      >
        <Icon aria-hidden className="h-6 w-6" strokeWidth={1.4} />
      </span>
      <h3 className={cn("mt-7 text-[1.65rem] leading-tight", dark ? "text-ivory" : "text-forest-dark")}>{title}</h3>
      <span aria-hidden className="mt-4 block h-px w-10 bg-leaf transition-all duration-500 group-hover:w-20" />
      <p className={cn("mt-4 text-[0.95rem] leading-relaxed", dark ? "text-ivory/65" : "text-charcoal/70")}>{description}</p>
    </div>
  );
}

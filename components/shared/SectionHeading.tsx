import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

/** Label with thin green accent line + large editorial serif heading. */
export function SectionHeading({ label, title, intro, align = "left", tone = "dark", className }: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <Reveal className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      <p className={cn("label flex items-center gap-4", align === "center" && "justify-center", light ? "text-champagne" : "text-moss")}>
        {align === "center" && <span aria-hidden className="h-px w-10 bg-leaf" />}
        {label}
        <span aria-hidden className="h-px w-12 bg-leaf" />
      </p>
      <h2
        className={cn(
          "mt-5 text-[2.35rem] leading-[1.05] sm:text-5xl lg:text-[3.6rem]",
          light ? "text-ivory" : "text-forest-dark",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-6 text-base leading-relaxed sm:text-lg", light ? "text-ivory/75" : "text-charcoal/70")}>{intro}</p>
      )}
    </Reveal>
  );
}

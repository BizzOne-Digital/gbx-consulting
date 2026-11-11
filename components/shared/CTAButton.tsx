import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "light" | "ghost-light";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-leaf to-moss text-ivory shadow-[0_10px_30px_-10px_rgba(70,111,42,0.8)] hover:from-[#84b347] hover:to-moss",
  secondary: "border border-moss/70 text-forest hover:bg-forest hover:text-ivory hover:border-forest",
  light: "bg-ivory text-forest hover:bg-cream",
  "ghost-light": "border border-ivory/40 text-ivory hover:bg-ivory/10 hover:border-ivory/70",
};

export function CTAButton({ href, children, variant = "primary", arrow = true, className }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full px-7 py-3 text-[0.95rem] font-semibold tracking-wide transition-all duration-300",
        styles[variant],
        className,
      )}
    >
      {children}
      {arrow && <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </Link>
  );
}

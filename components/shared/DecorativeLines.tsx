import { cn } from "@/lib/utils";

/** Organic leaf / growth curves inspired by the reference mockup. Purely decorative. */
export function LeafCurves({ className, tone = "sage" }: { className?: string; tone?: "sage" | "leaf" }) {
  const c = tone === "sage" ? "#C7D8A5" : "#77A63B";
  return (
    <svg aria-hidden viewBox="0 0 300 400" fill="none" className={cn("pointer-events-none absolute", className)}>
      <path d="M290 0 C 180 80, 120 220, 150 400 C 170 250, 220 120, 300 40 Z" fill={c} opacity="0.35" />
      <path d="M300 60 C 230 130, 190 240, 210 400 C 225 280, 255 170, 300 110 Z" fill={c} opacity="0.55" />
      <path d="M260 0 C 150 120, 90 260, 110 400" stroke={c} strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

/** Thin flowing lines (echoing the curved ceiling the client likes). */
export function FlowLines({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 1440 320" preserveAspectRatio="none" fill="none" className={cn("pointer-events-none absolute", className)}>
      {Array.from({ length: 7 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${200 + i * 12} C 300 ${60 + i * 14}, 520 ${300 - i * 6}, 820 ${150 + i * 10} S 1260 ${40 + i * 12}, 1440 ${120 + i * 10}`}
          stroke="#C7D8A5"
          strokeOpacity={0.12 + i * 0.03}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

export function Diagonals({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute -left-1/4 top-0 h-[160%] w-1/2 -rotate-[24deg] bg-gradient-to-b from-white/[0.05] to-transparent" />
      <div className="absolute left-[18%] top-0 h-[160%] w-[18%] -rotate-[24deg] bg-gradient-to-b from-leaf/[0.07] to-transparent" />
    </div>
  );
}

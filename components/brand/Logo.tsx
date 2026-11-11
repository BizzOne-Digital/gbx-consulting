import { cn } from "@/lib/utils";

/**
 * TEMPORARY LOGO — GBX Consulting.
 * Replace this component's markup with the final client logo (SVG) when delivered.
 * `variant="light"` is for dark backgrounds, `variant="dark"` for light backgrounds.
 */
interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className }: LogoProps) {
  const text = variant === "light" ? "#FCF9F2" : "#073B2D";
  const sub = variant === "light" ? "#D5C49D" : "#466F2A";
  return (
    <svg
      viewBox="0 0 220 72"
      role="img"
      aria-label="GBX Consulting"
      className={cn("h-11 w-auto md:h-12", className)}
    >
      <defs>
        <linearGradient id={`gbx-leaf-${variant}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#466F2A" />
          <stop offset="1" stopColor="#77A63B" />
        </linearGradient>
      </defs>
      {/* Growth arc / leaf mark */}
      <path
        d="M14 34 C 52 2, 118 -4, 168 14 C 120 4, 66 10, 22 36 Z"
        fill={`url(#gbx-leaf-${variant})`}
      />
      <path d="M150 8 C 160 10, 168 13, 174 17" stroke="#C7D8A5" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.8" />
      <text
        x="18"
        y="54"
        fill={text}
        style={{ fontFamily: "var(--font-serif), Georgia, serif", fontSize: 40, fontWeight: 600, letterSpacing: "0.02em" }}
      >
        GBX
      </text>
      <text
        x="20"
        y="69"
        fill={sub}
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", fontSize: 9.5, fontWeight: 600, letterSpacing: "0.42em" }}
      >
        CONSULTING
      </text>
    </svg>
  );
}

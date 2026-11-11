import { CTAButton } from "@/components/shared/CTAButton";
import { Reveal } from "@/components/shared/Reveal";

interface CTASectionProps {
  title?: React.ReactNode;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

/** Reusable final CTA band — wood grain + forest overlay + curved green decoration. */
export function CTASection({
  title = <>Ready to <em className="text-sage">Elevate</em> Your Organization?</>,
  text = "Let’s discuss how GBX Consulting can support your organization’s behavioral health, strategic, and performance goals.",
  primary = { label: "Schedule a Consultation", href: "/contact" },
  secondary = { label: "Contact GBX", href: "/contact" },
}: CTASectionProps) {
  return (
    <section className="bg-ivory px-4 pb-20 sm:px-6 md:pb-28">
      <div className="bg-wood relative isolate mx-auto max-w-[1320px] overflow-hidden rounded-[2rem] px-6 py-20 text-center sm:px-12 md:py-28">
        <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-forest/95 via-forest-dark/90 to-forest-dark/70" />
        <svg aria-hidden viewBox="0 0 600 300" className="absolute -right-24 -top-10 -z-10 h-[320px] w-[640px] opacity-80">
          <path d="M600 0 C 420 40, 300 160, 260 300 C 330 170, 450 80, 600 60 Z" fill="#77A63B" opacity="0.35" />
          <path d="M600 70 C 470 110, 380 200, 360 300 C 420 210, 500 150, 600 130 Z" fill="#C7D8A5" opacity="0.25" />
        </svg>
        <svg aria-hidden viewBox="0 0 400 200" className="absolute -bottom-10 -left-16 -z-10 h-[200px] w-[400px] opacity-60">
          <path d="M0 200 C 60 90, 180 30, 400 20 C 220 60, 110 120, 60 200 Z" fill="#466F2A" opacity="0.5" />
        </svg>
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-[2.4rem] leading-[1.05] text-ivory sm:text-6xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/80">{text}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href={primary.href}>{primary.label}</CTAButton>
            <CTAButton href={secondary.href} variant="ghost-light">{secondary.label}</CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

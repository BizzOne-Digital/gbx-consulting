import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { site } from "@/lib/site";

const items = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Instagram, label: "Social", value: `${site.social.handle}`, href: site.social.href },
  { icon: MapPin, label: "Serving", value: site.regions },
];

export function ContactInfo() {
  return (
    <div className="bg-wood relative isolate h-full overflow-hidden rounded-[2rem] p-8 text-ivory sm:p-12">
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-br from-forest/95 via-forest-dark/95 to-forest-dark/85" />
      <svg aria-hidden viewBox="0 0 300 300" className="absolute -bottom-16 -right-16 -z-10 h-72 w-72 opacity-50">
        <path d="M300 0 C 180 60, 110 170, 120 300 C 160 180, 220 100, 300 60 Z" fill="#77A63B" opacity="0.5" />
      </svg>
      <p className="label flex items-center gap-4 text-champagne">
        Contact Information <span aria-hidden className="h-px w-10 bg-leaf" />
      </p>
      <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
        We’d Love to <em className="text-sage">Hear</em> From You
      </h2>
      <p className="mt-5 max-w-md leading-relaxed text-ivory/70">
        Reach out directly or send an inquiry. We work with government, state agencies, behavioral health organizations,
        schools, athletic programs, individuals and families.
      </p>
      <ul className="mt-10 space-y-3">
        {items.map(({ icon: Icon, label, value, href }) => {
          const inner = (
            <>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-champagne/30 text-sage transition-colors duration-300 group-hover:bg-moss group-hover:text-ivory">
                <Icon aria-hidden className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="min-w-0">
                <span className="label block text-[0.62rem] text-champagne/80">{label}</span>
                <span className="mt-1 block break-words text-[1.02rem] text-ivory">{value}</span>
              </span>
            </>
          );
          return (
            <li key={label}>
              {href ? (
                <a href={href} className="group flex items-center gap-5 rounded-2xl p-2 transition-colors hover:bg-white/5">{inner}</a>
              ) : (
                <div className="group flex items-center gap-5 p-2">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

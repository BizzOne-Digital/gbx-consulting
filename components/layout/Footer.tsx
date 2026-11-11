import Link from "next/link";
import { Mail, Phone, Instagram, Linkedin, Facebook, MapPin } from "lucide-react";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { site } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";

const socials = [
  // TODO: replace "#" with the client's real profile URLs; remove any platform not used.
  { label: "Instagram", href: site.social.href, icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Facebook", href: "#", icon: Facebook },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-wood relative overflow-hidden text-ivory">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/85 via-forest-dark/90 to-forest-dark" aria-hidden />
      <div className="container relative grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo />
          <p className="mt-6 font-serif text-2xl italic leading-snug text-champagne">{site.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
            Serving individuals, families, schools, athletic programs, healthcare organizations and community agencies since {site.founded}.
          </p>
          <ul className="mt-7 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={`GBX Consulting on ${label}`}
                  className="grid h-11 w-11 place-items-center rounded-full border border-champagne/25 text-ivory/80 transition-colors duration-300 hover:border-leaf hover:bg-moss hover:text-ivory"
                >
                  <Icon aria-hidden className="h-[18px] w-[18px]" strokeWidth={1.5} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="label text-champagne">Navigation</h2>
          <ul className="mt-6 space-y-3">
            {navigation.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-ivory/70 transition-colors hover:text-sage">{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label text-champagne">Services</h2>
          <ul className="mt-6 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="text-ivory/70 transition-colors hover:text-sage">{s.title}</Link>
              </li>
            ))}
            <li><Link href="/services#sectors" className="text-ivory/70 transition-colors hover:text-sage">Sports Organization Performance</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="label text-champagne">Contact</h2>
          <ul className="mt-6 space-y-4 text-ivory/75">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 break-all transition-colors hover:text-sage">
                <Mail aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-sage" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 transition-colors hover:text-sage">
                <Phone aria-hidden className="h-4 w-4 shrink-0 text-sage" /> {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram aria-hidden className="h-4 w-4 shrink-0 text-sage" /> {site.social.handle}
            </li>
            <li className="flex items-center gap-3">
              <MapPin aria-hidden className="h-4 w-4 shrink-0 text-sage" /> {site.regions}
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-champagne/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/50 sm:flex-row">
          <p>&copy; {year} GBX Consulting. All rights reserved.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

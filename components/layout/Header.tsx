"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { navigation } from "@/data/navigation";
import { Logo } from "@/components/brand/Logo";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ivory focus:px-4 focus:py-2 focus:text-forest">
        Skip to content
      </a>
      <div
        className={cn(
          "relative border-b transition-all duration-500",
          scrolled
            ? "border-champagne/15 bg-forest-dark/85 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "bg-wood border-champagne/10",
        )}
      >
        <div className="container flex h-20 items-center justify-between gap-6 md:h-[88px]">
          <Link href="/" aria-label="GBX Consulting — Home" className="shrink-0">
            <Logo />
          </Link>

          <span aria-hidden className="hidden h-10 w-px bg-champagne/20 lg:block" />

          <nav aria-label="Primary" className="hidden flex-1 lg:block">
            <ul className="flex items-center justify-center gap-1 xl:gap-3">
              {navigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative px-4 py-3 text-[0.93rem] font-medium transition-colors duration-300",
                        active ? "text-ivory" : "text-ivory/75 hover:text-ivory",
                      )}
                    >
                      {item.label}
                      {active ? (
                        <motion.span layoutId="nav-underline" className="absolute inset-x-4 -bottom-0.5 h-[2px] rounded bg-leaf" />
                      ) : (
                        <span className="absolute inset-x-4 -bottom-0.5 h-[2px] origin-left scale-x-0 rounded bg-leaf/70 transition-transform duration-300 group-hover:scale-x-100" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-full bg-gradient-to-b from-leaf to-moss px-6 py-3 text-sm font-semibold text-ivory shadow-[0_8px_24px_-10px_rgba(119,166,59,0.9)] transition-all duration-300 hover:brightness-110 lg:inline-flex"
          >
            Get in Touch
            <ArrowRight aria-hidden className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <MobileMenu isActive={isActive} />
        </div>
      </div>
    </header>
  );
}

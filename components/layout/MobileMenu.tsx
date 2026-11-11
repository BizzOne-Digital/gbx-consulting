"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { navigation } from "@/data/navigation";
import { site } from "@/lib/site";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

export function MobileMenu({ isActive }: { isActive: (href: string) => boolean }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="relative z-[60] grid h-12 w-12 place-items-center rounded-full border border-champagne/25 text-ivory transition-colors hover:bg-white/5"
      >
        {/* Custom animated SVG hamburger */}
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
          <motion.path animate={open ? { d: "M6 6 L18 18" } : { d: "M4 7 L20 7" }} transition={{ duration: 0.3 }} />
          <motion.path animate={{ opacity: open ? 0 : 1 }} d="M8 12 L20 12" transition={{ duration: 0.2 }} />
          <motion.path animate={open ? { d: "M6 18 L18 6" } : { d: "M4 17 L20 17" }} transition={{ duration: 0.3 }} />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              key="panel"
              id="mobile-menu"
              aria-label="Mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grain fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-forest-lux px-7 pb-10 pt-6"
            >
              <Link href="/" onClick={() => setOpen(false)} aria-label="GBX Consulting — Home">
                <Logo />
              </Link>
              <ul className="mt-12 space-y-1">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between border-b border-champagne/10 py-4 font-serif text-3xl transition-colors",
                        isActive(item.href) ? "text-sage" : "text-ivory hover:text-sage",
                      )}
                    >
                      {item.label}
                      {isActive(item.href) && <span aria-hidden className="h-2 w-2 rounded-full bg-leaf" />}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-4 pt-10">
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all text-sm text-ivory/75 hover:text-ivory">
                  <Mail aria-hidden className="h-4 w-4 shrink-0 text-sage" /> {site.email}
                </a>
                <a href={site.phoneHref} className="flex items-center gap-3 text-sm text-ivory/75 hover:text-ivory">
                  <Phone aria-hidden className="h-4 w-4 shrink-0 text-sage" /> {site.phone}
                </a>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-b from-leaf to-moss font-semibold text-ivory"
                >
                  Get in Touch <ArrowRight aria-hidden className="h-4 w-4" />
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

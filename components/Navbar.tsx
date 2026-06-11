"use client";

import { CoverArtBackdrop } from "@/components/ui/CoverArtBackdrop";
import { optimizedSrc } from "@/lib/image-paths";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "S.U.G.A.R Toolkit", href: "#toolkit", id: "toolkit" },
  { label: "About Salincya", href: "#about", id: "about" },
] as const;

const CTA = {
  label: "Get Help Now",
  href: "#resources",
  id: "resources",
} as const;

const SCROLL_TOP_THRESHOLD = 12;

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  target.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });

  window.history.pushState(null, "", id === "home" ? "#" : `#${id}`);
}

function DesktopNavLink({
  href,
  id,
  label,
  onNavigate,
  isFirst,
  isLast,
}: {
  href: string;
  id: string;
  label: string;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <a
      href={href}
      onClick={(e) => onNavigate(e, id)}
      className={`flex flex-1 items-center justify-center whitespace-nowrap px-4 py-2.5 text-[0.9375rem] font-medium text-[#5B7053]/88 transition-colors duration-200 hover:bg-[#5B7053]/18 hover:text-[#5B7053] sm:px-6 ${
        isFirst ? "rounded-l-full" : "border-l border-[#5B7053]/10"
      } ${isLast ? "rounded-r-full" : ""}`}
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showScrollLine, setShowScrollLine] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const pastTop = y > SCROLL_TOP_THRESHOLD;
      setScrolled(pastTop);
      setShowScrollLine(pastTop);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const handleSectionClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const menuWasOpen = mobileOpen;
      closeMobile();
      document.body.style.overflow = "";

      const runScroll = () => scrollToSection(id);
      if (menuWasOpen) {
        window.setTimeout(runScroll, 280);
      } else {
        runScroll();
      }
    },
    [closeMobile, mobileOpen],
  );

  return (
    <header
      className={`sticky top-0 z-50 overflow-hidden border-b transition-[background-color,box-shadow,border-color] duration-500 ${
        scrolled
          ? "border-[#5B7053]/8 bg-white/98 shadow-[0_6px_28px_-10px_rgba(91,112,83,0.18)] backdrop-blur-xl"
          : "border-brand-gold/15 bg-[#fffdf6] backdrop-blur-md"
      }`}
    >
      <CoverArtBackdrop
        minChildHeight="min-h-16 sm:min-h-[4.5rem]"
        fit="cover"
      />

      <div className="relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleSectionClick(e, "home")}
          className="group flex min-w-0 shrink items-center gap-3"
          aria-label="Lemon & Sugar Project — go to home"
        >
          <span className="relative flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_2px_12px_-4px_rgba(91,112,83,0.25)] ring-1 ring-[#5B7053]/10 transition-all duration-300 group-hover:shadow-[0_4px_16px_-4px_rgba(91,112,83,0.35)] sm:size-12">
            <Image
              src={optimizedSrc("/images/ls-website-tab.png")}
              alt=""
              width={44}
              height={44}
              sizes="44px"
              className="size-8 object-contain sm:size-9"
              priority
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-semibold tracking-tight text-[#5B7053] sm:text-lg">
              Lemon &amp; Sugar
            </span>
            <span className="hidden text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#5B7053]/50 sm:block">
              Project
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-3 md:flex">
          <nav
            className="flex overflow-hidden rounded-full bg-white/70 shadow-sm ring-1 ring-[#5B7053]/10 backdrop-blur-sm"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map(({ label, href, id }, i) => (
              <DesktopNavLink
                key={href}
                href={href}
                id={id}
                label={label}
                onNavigate={handleSectionClick}
                isFirst={i === 0}
                isLast={i === NAV_LINKS.length - 1}
              />
            ))}
          </nav>
          <a
            href={CTA.href}
            onClick={(e) => handleSectionClick(e, CTA.id)}
            className="rounded-full bg-[#5B7053] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_-6px_rgba(91,112,83,0.55)] transition-all hover:bg-brand-green-deep hover:shadow-[0_6px_20px_-6px_rgba(91,112,83,0.6)] active:scale-[0.98]"
          >
            {CTA.label}
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl border border-[#5B7053]/12 bg-white/90 text-[#5B7053] shadow-sm transition-all hover:border-[#5B7053]/22 hover:bg-white active:scale-95 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <X className="size-5" strokeWidth={2.25} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="size-5" strokeWidth={2.25} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Scroll accent line */}
      <motion.div
        className="pointer-events-none absolute bottom-0 left-6 right-6 z-10 h-[2px] origin-center rounded-full bg-gradient-to-r from-transparent via-brand-gold to-transparent sm:left-10 sm:right-10 lg:left-12 lg:right-12"
        initial={false}
        animate={{
          scaleX: showScrollLine ? 1 : 0,
          opacity: showScrollLine ? 1 : 0,
        }}
        transition={{
          scaleX: { type: "spring", stiffness: 240, damping: 26 },
          opacity: { duration: 0.28 },
        }}
        aria-hidden
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative z-10 overflow-hidden border-t border-[#5B7053]/8 bg-white/98 backdrop-blur-xl md:hidden"
          >
            <nav className="px-4 py-5 sm:px-6" aria-label="Mobile navigation">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map(({ label, href, id }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={href}
                      onClick={(e) => handleSectionClick(e, id)}
                      className="flex items-center rounded-xl px-4 py-3.5 text-base font-medium text-[#5B7053] transition-colors hover:bg-brand-gold/10 active:bg-brand-gold/15"
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 }}
                  className="mt-3 pt-3 border-t border-[#5B7053]/8"
                >
                  <a
                    href={CTA.href}
                    onClick={(e) => handleSectionClick(e, CTA.id)}
                    className="flex w-full items-center justify-center rounded-full bg-[#5B7053] px-5 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-brand-green-deep active:scale-[0.98]"
                  >
                    {CTA.label}
                  </a>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

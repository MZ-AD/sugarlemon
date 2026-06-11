"use client";

import { PHOTO_CREDIT, SUGAR_CARD_PHOTOS, type ToolkitLetter } from "@/lib/photography";
import { SUGAR_OVERVIEW } from "@/lib/site-content";
import { motion } from "framer-motion";
import Image from "next/image";

export function SugarOverview({
  onSelect,
}: {
  onSelect: (tab: ToolkitLetter) => void;
}) {
  return (
    <section className="relative overflow-hidden border-b border-brand-blush-deep/60 bg-gradient-to-b from-brand-blush/40 via-brand-cream to-brand-cream py-16 sm:py-20">
      <div
        className="pointer-events-none absolute -right-24 top-0 size-64 rounded-full bg-brand-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
            S.U.G.A.R.
          </p>
          <h2 className="mt-2 font-brand-serif text-3xl font-semibold text-[#5B7053] sm:text-4xl">
            Choose your starting point
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-[#5B7053]/70">
            Each letter opens tools, comfort, and growth—with a portrait of Salincya to guide you in.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {SUGAR_OVERVIEW.map(({ letter, title, text }, i) => {
            const photo = SUGAR_CARD_PHOTOS[letter as ToolkitLetter];
            return (
              <motion.button
                key={letter}
                type="button"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                whileHover={{ y: -6 }}
                onClick={() => {
                  onSelect(letter as ToolkitLetter);
                  document
                    .getElementById("toolkit")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group relative min-h-[260px] overflow-hidden rounded-3xl text-left shadow-[0_12px_40px_-14px_rgba(91,112,83,0.35)] ring-1 ring-[#5B7053]/12 transition-shadow hover:shadow-[0_20px_50px_-12px_rgba(91,112,83,0.4)] sm:min-h-[300px] lg:min-h-[340px]"
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ objectPosition: photo.position }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d4a38]/95 via-[#5B7053]/50 to-[#5B7053]/15 transition-opacity duration-500 group-hover:via-[#5B7053]/60" />
                <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-brand-gold/80 via-brand-gold to-brand-gold/80 transition-transform duration-500 group-hover:scale-x-100" />

                <div className="relative flex h-full min-h-[inherit] flex-col justify-end p-5 sm:p-6">
                  <span className="font-brand-serif text-5xl font-bold leading-none text-brand-gold drop-shadow-sm sm:text-6xl">
                    {letter}
                  </span>
                  <p className="mt-2 text-base font-semibold tracking-wide text-white">
                    {title}
                  </p>
                  <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-white/88">
                    {text}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        <p className="mt-8 text-center">
          <a
            href={PHOTO_CREDIT.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#5B7053]/50 underline decoration-[#5B7053]/20 underline-offset-2 transition-colors hover:text-[#5B7053]"
          >
            {PHOTO_CREDIT.label}
          </a>
        </p>
      </div>
    </section>
  );
}

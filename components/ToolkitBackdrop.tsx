"use client";

import { PhotoCredit } from "@/components/ui/PhotoCredit";
import { TOOLKIT_BACKDROP_PHOTOS, type ToolkitLetter } from "@/lib/photography";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const TAB_TITLES: Record<ToolkitLetter, string> = {
  S: "Support",
  U: "Unburdening",
  G: "Grace & Gratitude",
  A: "Affirmation",
  R: "Resilience",
};

const LETTERS: ToolkitLetter[] = ["S", "U", "G", "A", "R"];

export function ToolkitBackdrop({
  letter,
  intro,
}: {
  letter: ToolkitLetter;
  intro?: string;
}) {
  const [loadedTabs, setLoadedTabs] = useState<Set<ToolkitLetter>>(
    () => new Set([letter]),
  );

  useEffect(() => {
    setLoadedTabs((prev) => {
      if (prev.has(letter)) return prev;
      const next = new Set(prev);
      next.add(letter);
      return next;
    });
  }, [letter]);

  const title = TAB_TITLES[letter];

  return (
    <div className="relative min-h-[min(56vh,460px)] w-full overflow-hidden sm:min-h-[min(62vh,520px)] lg:min-h-[480px]">
      <div className="absolute inset-0 bg-brand-cream">
        {LETTERS.filter((l) => loadedTabs.has(l)).map((l) => {
          const photo = TOOLKIT_BACKDROP_PHOTOS[l];
          const active = l === letter;
          return (
            <div
              key={l}
              className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                active ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
              aria-hidden={!active}
            >
              <Image
                src={photo.src}
                alt={active ? photo.alt : ""}
                fill
                loading={active ? "eager" : "lazy"}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: photo.position }}
              />
            </div>
          );
        })}
      </div>

      <div
        className="absolute inset-0 z-20 bg-gradient-to-r from-[#5B7053]/94 via-[#5B7053]/68 to-[#5B7053]/20"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-20 bg-gradient-to-t from-[#3d4a38]/70 via-[#3d4a38]/20 to-transparent"
        aria-hidden
      />

      <div className="relative z-30 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-20 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-brand-gold/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold backdrop-blur-sm">
            Toolkit
          </span>
          <span className="mt-4 block font-brand-serif text-7xl font-bold leading-none text-brand-gold sm:text-8xl">
            {letter}
          </span>
          <h3 className="mt-2 font-brand-serif text-2xl font-semibold text-white sm:text-4xl">
            {title}
          </h3>
          {intro && (
            <motion.p
              key={intro}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-white/92 sm:text-lg"
            >
              {intro}
            </motion.p>
          )}
        </div>
        <PhotoCredit className="mt-8 sm:absolute sm:bottom-8 sm:right-8 sm:mt-0 lg:bottom-10 lg:right-10" />
      </div>
    </div>
  );
}

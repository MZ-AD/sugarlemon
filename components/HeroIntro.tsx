"use client";

import { optimizedSrc } from "@/lib/image-paths";
import { WELCOME_LINES } from "@/lib/site-content";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

const linesGroup = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const lineItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

export function HeroIntro() {
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(!!reducedMotion);

  useEffect(() => {
    if (reducedMotion) return;
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, [reducedMotion]);

  return (
    <motion.div
      className="mx-auto w-full max-w-7xl px-4 pb-16 pt-[4.75rem] sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24"
      initial="hidden"
      animate={ready ? "visible" : "hidden"}
      variants={container}
    >
      <motion.div variants={item} className="mb-6">
        <Image
          src={optimizedSrc("/images/large-logo.png")}
          alt="Lemon & Sugar Project"
          width={260}
          height={260}
          sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 208px"
          className="h-auto w-36 drop-shadow-md brightness-110 sm:w-44 lg:w-52"
          priority
        />
      </motion.div>

      <motion.p
        variants={item}
        className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold"
      >
        Lemon &amp; Sugar Project
      </motion.p>

      <motion.h1
        variants={item}
        className="mt-3 max-w-3xl font-brand-serif text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]"
      >
        Turning life&apos;s sour moments into strength, healing, and growth.
      </motion.h1>

      <motion.div
        variants={linesGroup}
        className="mt-8 max-w-xl space-y-3 text-base leading-relaxed text-white/90 sm:text-lg"
      >
        {WELCOME_LINES.map((line) => (
          <motion.p
            key={line}
            variants={lineItem}
            className={
              line === "Welcome"
                ? "font-semibold text-brand-gold"
                : line === "When you encounter a lemon, add sugar."
                  ? "font-medium italic text-white"
                  : ""
            }
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}

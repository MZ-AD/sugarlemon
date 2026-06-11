"use client";

import { MotionConfig } from "framer-motion";

/** Aligns motion initial state with SSR to prevent hydration mismatches. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

"use client";

import { ContentCard } from "@/components/ui/ContentCard";
import { ExternalAnchor } from "@/components/ui/ExternalAnchor";
import { AFFIRMATION_PRACTICES, AFFIRMATION_QUOTES } from "@/lib/site-content";
import { motion } from "framer-motion";

const CARD_STYLES = [
  { rotate: -2.5, gradient: "from-[#FAF8F5] via-white to-amber-50/40" },
  { rotate: 2, gradient: "from-rose-50/60 via-white to-[#FAF8F5]" },
  { rotate: -1.5, gradient: "from-emerald-50/50 via-white to-amber-50/30" },
  { rotate: 1.5, gradient: "from-[#FAF8F5] via-white to-rose-50/50" },
  { rotate: -2, gradient: "from-amber-50/50 via-white to-emerald-50/40" },
  { rotate: 2.5, gradient: "from-white via-[#FAF8F5] to-rose-50/40" },
] as const;

export function AffirmationPanel() {
  return (
    <div className="space-y-10">
      <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-[#5B7053]/85 sm:text-lg">
        Speaking positive words helps reinforce belief over time. Your words matter—especially the ones you say to yourself.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {AFFIRMATION_QUOTES.map((quote, i) => {
          const { rotate, gradient } = CARD_STYLES[i];
          return (
            <motion.div
              key={quote}
              initial={false}
              animate={{ opacity: 1, y: 0, rotate }}
              whileHover={{ y: -6, rotate: 0, scale: 1.02 }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 260, damping: 22 }}
              className={`flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-[#5B7053]/10 bg-gradient-to-br ${gradient} px-5 py-7 shadow-[0_8px_24px_-8px_rgba(91,112,83,0.15)]`}
            >
              <span className="mb-1 font-brand-serif text-4xl text-brand-gold/40" aria-hidden>
                &ldquo;
              </span>
              <p className="text-center font-brand-serif text-lg font-semibold text-[#5B7053] sm:text-xl">
                {quote}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {AFFIRMATION_PRACTICES.map((practice) => (
          <ContentCard key={practice.title} title={practice.title}>
            <p><strong>Why it matters:</strong> {practice.why}</p>
            <p><strong>Try this:</strong> {practice.tryThis}</p>
            <p className="flex flex-wrap gap-x-2 gap-y-1">
              {practice.links.map((href) => (
                <ExternalAnchor key={href} href={href}>
                  Learn more
                </ExternalAnchor>
              ))}
            </p>
          </ContentCard>
        ))}
      </div>
    </div>
  );
}

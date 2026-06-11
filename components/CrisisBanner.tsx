"use client";

import { CrisisPhoneText } from "@/components/ui/CrisisPhoneText";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const SAFETY_ALERT =
  "If you feel like you might hurt yourself or are in danger: Tell a trusted adult right away. Call or text 988. Go somewhere safe.";

const SUPPORT_RESOURCES = [
  {
    label: "Crisis Text Line",
    body: 'Text "HOME" to 741741, or message them on WhatsApp.',
  },
  {
    label: null,
    body: 'Young people of color can text "STEVE" to 741741 to reach culturally trained counselors.',
  },
  {
    label: "988 Suicide & Crisis Lifeline",
    body: "Call or text 988. They offer translation services in over 250 languages.",
  },
] as const;

const DISMISS_KEY = "crisis-banner-dismissed";

export default function CrisisBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === "true") return;
    const timer = window.setTimeout(() => setVisible(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISS_KEY, "true");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          role="alert"
          aria-live="polite"
          aria-label="Safety and crisis support resources"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 280 }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="pointer-events-auto relative w-full max-w-4xl rounded-2xl border border-rose-200/90 bg-white p-5 shadow-[0_24px_60px_-12px_rgba(91,112,83,0.18),0_12px_32px_-8px_rgba(0,0,0,0.12)] sm:p-6">
            <button
              type="button"
              onClick={dismiss}
              className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full text-[#5B7053]/70 transition-colors hover:bg-rose-50 hover:text-[#5B7053] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B7053] sm:right-4 sm:top-4"
              aria-label="Dismiss safety alert"
            >
              <X className="size-5" strokeWidth={1.75} aria-hidden />
            </button>

            <p className="pr-10 text-base font-bold leading-snug tracking-tight text-[#5B7053] sm:pr-12 sm:text-lg">
              <CrisisPhoneText text={SAFETY_ALERT} />
            </p>

            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SUPPORT_RESOURCES.map(({ label, body }) => (
                <li
                  key={body}
                  className="rounded-xl border border-rose-100/80 bg-rose-50/30 px-4 py-3.5"
                >
                  <p className="text-sm leading-relaxed text-[#5B7053]/90">
                    {label ? (
                      <>
                        <span className="font-semibold text-[#5B7053]">
                          <CrisisPhoneText text={label} />:{" "}
                        </span>
                        <CrisisPhoneText text={body} />
                      </>
                    ) : (
                      <CrisisPhoneText text={body} />
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

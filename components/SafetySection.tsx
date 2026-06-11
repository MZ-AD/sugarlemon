import { CrisisPhoneText } from "@/components/ui/CrisisPhoneText";
import { SAFETY_SECTION } from "@/lib/site-content";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export function SafetySection() {
  return (
    <section
      id="safety"
      className="scroll-mt-24 border-b border-rose-100/60 bg-gradient-to-b from-rose-50/50 via-brand-blush/20 to-brand-cream py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-brand-serif text-3xl font-bold text-[#5B7053] sm:text-4xl">
          {SAFETY_SECTION.title}
        </h2>
        <p className="mt-4 text-lg font-medium text-[#5B7053]">{SAFETY_SECTION.lead}</p>
        <ul className="mt-4 list-inside list-disc space-y-2 text-base text-[#5B7053]/90 sm:text-lg">
          {SAFETY_SECTION.steps.map((step) => (
            <li key={step}>
              <CrisisPhoneText text={step} />
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SAFETY_SECTION.resources.map((r) => (
            <div
              key={r.text}
              className="rounded-xl border border-rose-200/60 bg-white p-4 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-[#5B7053]/90">
                {r.label ? (
                  <>
                    <span className="font-semibold text-[#5B7053]">
                      <CrisisPhoneText text={r.label} />:{" "}
                    </span>
                    <CrisisPhoneText text={r.text} />
                  </>
                ) : (
                  <CrisisPhoneText text={r.text} />
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {SAFETY_SECTION.lgbtq.map((org) => (
            <Link
              key={org.href}
              href={org.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-[#5B7053]/15 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div>
                <h3 className="font-brand-serif text-xl font-semibold text-[#5B7053]">
                  {org.name}
                </h3>
                <p className="mt-2 text-sm text-[#5B7053]/75">{org.desc}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#5B7053] group-hover:text-brand-gold">
                Visit site
                <ExternalLink className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

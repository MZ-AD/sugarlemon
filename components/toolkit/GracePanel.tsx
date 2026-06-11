import { ContentCard } from "@/components/ui/ContentCard";
import { ExternalAnchor } from "@/components/ui/ExternalAnchor";
import {
  GRATITUDE_TOOLKIT,
  SELF_COMPASSION,
  THREE_GOOD_THINGS_APP,
} from "@/lib/site-content";

export function GracePanel() {
  return (
    <div className="space-y-8">
        <p className="rounded-2xl border border-brand-gold/30 bg-brand-cream/60 px-5 py-4 text-center text-base leading-relaxed text-[#5B7053] sm:text-lg">
          Gratitude doesn&apos;t mean ignoring pain. It means noticing that something good still exists alongside it.
        </p>

        <ContentCard title="Grace & Self-Compassion Tactics">
          <ul className="grid gap-4 sm:grid-cols-2">
            {SELF_COMPASSION.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-[#5B7053]/10 bg-[#5B7053]/[0.03] p-4"
              >
                <p className="font-semibold text-[#5B7053]">{item.title}</p>
                <p className="mt-2 text-sm">
                  <span className="font-medium">Why it matters:</span> {item.why}
                </p>
                <p className="mt-1 text-sm italic">
                  <span className="font-medium not-italic">Try this:</span> {item.tryThis}
                </p>
                <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                  {item.links.map((link) => (
                    <ExternalAnchor key={link.href} href={link.href}>
                      {link.label}
                    </ExternalAnchor>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </ContentCard>

        <ContentCard title="10-Step Gratitude Toolkit">
          <p className="mb-4">Find small moments of good—even on hard days.</p>
          <ol className="grid gap-4 sm:grid-cols-2">
            {GRATITUDE_TOOLKIT.map((step) => (
              <li
                key={step.step}
                className="flex gap-3 rounded-xl border border-[#5B7053]/10 bg-white p-4"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#5B7053] text-sm font-bold text-white">
                  {step.step}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-[#5B7053]">{step.title}</p>
                  <p className="mt-1 text-sm">{step.body}</p>
                  <p className="mt-2 flex flex-wrap gap-x-2">
                    {step.links.map((href) => (
                      <ExternalAnchor key={href} href={href}>
                        Learn more
                      </ExternalAnchor>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </ContentCard>

        <div className="rounded-2xl border-2 border-brand-gold/40 bg-gradient-to-br from-white via-brand-cream to-amber-50/30 p-6 shadow-md sm:p-8">
          <h3 className="font-brand-serif text-2xl font-semibold text-[#5B7053]">
            {THREE_GOOD_THINGS_APP.title}
          </h3>
          <p className="mt-3 text-[#5B7053]/85">{THREE_GOOD_THINGS_APP.description}</p>
          <p className="mt-4">
            <ExternalAnchor href={THREE_GOOD_THINGS_APP.href}>
              Download on the App Store
            </ExternalAnchor>
          </p>
        </div>
    </div>
  );
}

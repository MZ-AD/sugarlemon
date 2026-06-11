import { ContentCard } from "@/components/ui/ContentCard";
import { CrisisPhoneText } from "@/components/ui/CrisisPhoneText";
import { ExternalAnchor } from "@/components/ui/ExternalAnchor";
export function SupportPanel() {
  return (
    <div className="space-y-6">
        <ContentCard title="Talk to a Trusted Person">
          <p>This is often the first and most important step.</p>
          <p className="font-medium text-[#5B7053]">You can talk to:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>A parent or caregiver</li>
            <li>A teacher</li>
            <li>A school counselor</li>
            <li>A coach</li>
            <li>A family member</li>
            <li>A friend&apos;s parent</li>
          </ul>
          <p>
            You don&apos;t have to explain everything perfectly—just start with:
          </p>
          <p className="rounded-xl bg-[#5B7053]/5 px-4 py-3 font-medium italic text-[#5B7053]">
            &ldquo;I&apos;ve been having a hard time and I need to talk.&rdquo;
          </p>
        </ContentCard>

        <ContentCard title="Go to a Safe Place">
          <p>Sometimes a place matters as much as a person. Safe spaces can include:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>School counseling office</li>
            <li>Library or quiet room</li>
            <li>Community center</li>
            <li>Place of worship</li>
            <li>After-school program</li>
          </ul>
          <p className="rounded-lg bg-brand-cream/80 px-3 py-2 text-sm">
            Being in a calm, safe environment can help you feel more in control.
          </p>
        </ContentCard>

        <ContentCard title="Join a Group or Program">
          <p>You&apos;re not the only one going through this. Look for:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>School support groups</li>
            <li>Youth programs</li>
            <li>Faith-based groups</li>
            <li>Mental wellness workshops</li>
          </ul>
          <p>Being around others can help you feel less alone.</p>
        </ContentCard>

        <ContentCard title="Ask for Professional Help">
          <p>Therapists and counselors are trained to help. You can:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>Ask a parent or school to connect you</li>
            <li>Use free or low-cost services</li>
            <li>Start with a school counselor</li>
          </ul>
          <p>Therapy is just a safe space to talk and learn tools.</p>
        </ContentCard>

        <ContentCard title="Online or Phone Help — Talk or Text Someone">
          <div className="space-y-4">
            <div className="rounded-xl border border-[#5B7053]/10 bg-brand-cream/50 p-4">
              <p className="font-semibold text-[#5B7053]">988 Lifeline (Call, Text, or Chat)</p>
              <p>
                <CrisisPhoneText text="Call or text 988 (24/7). Talk to trained counselors anytime you feel overwhelmed or unsafe." />
              </p>
              <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                <ExternalAnchor href="https://988lifeline.org">988lifeline.org</ExternalAnchor>
                <ExternalAnchor href="https://opa.hhs.gov/adolescent-health/mental-health-adolescents/mental-health-resources">
                  HHS adolescent mental health
                </ExternalAnchor>
              </p>
            </div>
            <div className="rounded-xl border border-[#5B7053]/10 p-4">
              <p className="font-semibold text-[#5B7053]">Crisis Text Line (Text HOME to 741741)</p>
              <p>Free, 24/7 texting support with trained listeners.</p>
              <ExternalAnchor href="https://www.crisistextline.org">crisistextline.org</ExternalAnchor>
              {" · "}
              <ExternalAnchor href="https://allianceforsafekids.org/crisistextline/">
                Alliance for Safe Kids
              </ExternalAnchor>
            </div>
            <div className="rounded-xl border border-[#5B7053]/10 p-4">
              <p className="font-semibold text-[#5B7053]">Teen Line Support</p>
              <p>
                Call: <ExternalAnchor href="tel:8008528336">800-852-8336</ExternalAnchor> · Text TEEN to 839863
              </p>
              <p>Talk to other teens who understand and listen.</p>
              <ExternalAnchor href="https://teenlineonline.org">teenlineonline.org</ExternalAnchor>
            </div>
            <div className="rounded-xl border border-[#5B7053]/10 p-4">
              <p className="font-semibold text-[#5B7053]">Kids In Crisis 24-Hour Helpline</p>
              <p>Free support from trained counselors for kids and families.</p>
              <ExternalAnchor href="https://www.kidsincrisis.org/get-help/24-hour-helpline/">
                Kids In Crisis helpline
              </ExternalAnchor>
            </div>
          </div>
        </ContentCard>

        <ContentCard title="Mental Health & Counseling Resources">
          <ul className="space-y-4">
            {[
              { name: "Child Mind Institute", desc: "Free guides, articles, and support for kids and families. Helps children with anxiety, stress, behavior, and more.", href: "https://childmind.org" },
              { name: "KidsHealth (Nemours) Mental Health", desc: "Easy-to-understand information for kids and teens about emotions and mental health.", href: "https://kidshealth.org/en/teens/your-mind/mental-health/" },
              { name: "Kids Mental Health Foundation – Crisis Resources", desc: "Lists hotlines and help options for kids in crisis.", href: "https://www.kidsmentalhealthfoundation.org/mental-health-resources/crisis-lines" },
              { name: "Mental Health Center Kids Resources", desc: "Worksheets, activities, and tools for emotions, stress, and self-esteem.", href: "https://mentalhealthcenterkids.com/pages/mental-health-resources" },
              { name: "Crisis Text Line Teens Toolkit", desc: "Includes grounding, breathing, and calming exercises.", href: "https://www.crisistextline.org/teens-toolkit/" },
              { name: "Common Sense Media: Kids Mental Health Apps & Tools", desc: "Trusted apps and websites for affirmations, mindfulness, and confidence.", href: "https://www.commonsensemedia.org/articles/kids-mental-health-apps-and-websites-for-anxiety-depression-coping-skills-and-professional-support" },
            ].map((r) => (
              <li key={r.name} className="border-b border-[#5B7053]/10 pb-3 last:border-0 last:pb-0">
                <ExternalAnchor href={r.href}>{r.name}</ExternalAnchor>
                <p className="mt-1 text-[#5B7053]/75">{r.desc}</p>
              </li>
            ))}
          </ul>
        </ContentCard>

        <ContentCard title="Apps">
          <ul className="space-y-3">
            <li>
              <ExternalAnchor href="https://calmharm.stem4.org.uk/">Calm Harm</ExternalAnchor> — Helps manage self-harm.
            </li>
            <li>
              <ExternalAnchor href="https://www.happi-me.info/">HappiMe for Young People</ExternalAnchor> — Helps people deal with negative thoughts.
            </li>
            <li>
              <ExternalAnchor href="https://member.ableto.com/mental-health-support/">AbleTo</ExternalAnchor> — Therapeutic tools and services.
            </li>
          </ul>
        </ContentCard>
    </div>
  );
}

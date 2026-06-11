"use client";

import CrisisBanner from "@/components/CrisisBanner";
import Navbar from "@/components/Navbar";
import { SafetySection } from "@/components/SafetySection";
import { SugarOverview } from "@/components/SugarOverview";
import { AffirmationPanel } from "@/components/toolkit/AffirmationPanel";
import { GracePanel } from "@/components/toolkit/GracePanel";
import { ResiliencePanel } from "@/components/toolkit/ResiliencePanel";
import { SupportPanel } from "@/components/toolkit/SupportPanel";
import { UnburdeningPanel } from "@/components/toolkit/UnburdeningPanel";
import { ToolkitTabButton } from "@/components/ToolkitTabButton";
import { AboutBio } from "@/components/AboutBio";
import { ToolkitBackdrop } from "@/components/ToolkitBackdrop";
import { HeroIntro } from "@/components/HeroIntro";
import { BackdropSection } from "@/components/ui/BackdropSection";
import { CoverArtBackdrop } from "@/components/ui/CoverArtBackdrop";
import { optimizedSrc } from "@/lib/image-paths";
import { ABOUT_PHOTO, HERO_PHOTO } from "@/lib/photography";
import type { ToolkitLetter } from "@/lib/photography";
import { SUGAR_OVERVIEW } from "@/lib/site-content";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ToolkitTab = ToolkitLetter;

const TOOLKIT_TABS: { id: ToolkitTab; label: string; title: string }[] = [
  { id: "S", label: "S", title: "Support" },
  { id: "U", label: "U", title: "Unburdening" },
  { id: "G", label: "G", title: "Grace & Gratitude" },
  { id: "A", label: "A", title: "Affirmation" },
  { id: "R", label: "R", title: "Resilience" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({
  children,
  sub,
}: {
  children: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mb-10 text-center md:mb-12">
      <h2 className="font-brand-serif text-3xl font-semibold tracking-tight text-[#5B7053] sm:text-4xl lg:text-5xl">
        {children}
      </h2>
      {sub && (
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#5B7053]/75 sm:text-lg">
          {sub}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<ToolkitTab>("S");
  const activeIntro = SUGAR_OVERVIEW.find((s) => s.letter === activeTab);

  return (
    <>
      <Navbar />
      <CrisisBanner />

      <main className="flex-1 bg-[#fffdfb]">
        {/* HERO — photo backdrop with text overlay */}
        <BackdropSection
          id="home"
          imageSrc={HERO_PHOTO.src}
          imageAlt={HERO_PHOTO.alt}
          imagePosition={HERO_PHOTO.position}
          className="scroll-mt-24 border-b border-[#5B7053]/20"
          minHeight="min-h-[min(88vh,780px)]"
          contentPosition="start"
        >
          <HeroIntro />
        </BackdropSection>

        <SugarOverview onSelect={setActiveTab} />

        <SafetySection />

        {/* S.U.G.A.R TOOLKIT */}
        <section id="toolkit" className="scroll-mt-24">
          <div className="border-b border-brand-blush-deep/50 bg-gradient-to-r from-brand-blush/50 via-brand-cream to-brand-blush/30 px-4 py-12 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Your toolkit
            </p>
            <h2 className="mt-2 font-brand-serif text-3xl font-semibold text-[#5B7053] sm:text-4xl lg:text-5xl">
              S.U.G.A.R. Toolkit
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5B7053]/75 sm:text-lg">
              Explore each letter for practical tools, comfort, and growth.
            </p>
          </div>

          <div className="relative overflow-visible">
            <ToolkitBackdrop letter={activeTab} intro={activeIntro?.text} />

            {/* Tab strip: solid cream bar straddling backdrop → content (mockup) */}
            <div className="relative z-30 -mt-11 bg-[#FAF8F5] pt-5 pb-1 sm:-mt-14 sm:pt-6">
              <div
                className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8"
                role="tablist"
                aria-label="Toolkit sections"
              >
                {TOOLKIT_TABS.map(({ id, label, title }) => (
                  <ToolkitTabButton
                    key={id}
                    id={id}
                    label={label}
                    title={title}
                    isActive={activeTab === id}
                    onSelect={() => setActiveTab(id)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 border-b border-brand-blush-deep/40 bg-[#FAF8F5] bg-gradient-to-b from-[#FAF8F5] via-white to-brand-cream/30 pb-12 pt-8 sm:pb-14 sm:pt-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  id={`panel-${activeTab}`}
                  role="tabpanel"
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  {activeTab === "S" && <SupportPanel />}
                  {activeTab === "U" && <UnburdeningPanel />}
                  {activeTab === "G" && <GracePanel />}
                  {activeTab === "A" && <AffirmationPanel />}
                  {activeTab === "R" && <ResiliencePanel />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-brand-blush-deep/50 bg-gradient-to-b from-brand-blush/25 via-brand-cream to-white py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Meet the founder
              </p>
              <h2 className="mt-2 font-brand-serif text-3xl font-semibold text-[#5B7053] sm:text-4xl lg:text-5xl">
                About Salincya Archard
              </h2>
            </div>

            <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(280px,400px)_1fr] lg:gap-14 xl:gap-16">
              <motion.div
                initial={false}
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
              >
                <div className="overflow-hidden rounded-3xl shadow-[0_24px_48px_-16px_rgba(91,112,83,0.28)] ring-1 ring-[#5B7053]/12">
                  <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                    <Image
                      src={ABOUT_PHOTO.src}
                      alt={ABOUT_PHOTO.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 90vw, 400px"
                      className="object-cover"
                      style={{ objectPosition: ABOUT_PHOTO.position }}
                    />
                  </div>
                </div>
                <p className="mt-3 text-center text-xs text-[#5B7053]/55 lg:text-left">
                  <a
                    href="https://alankarma.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#5B7053]/25 underline-offset-2 hover:text-[#5B7053]"
                  >
                    Photos by Alan Karma
                  </a>
                </p>
              </motion.div>

              <motion.div
                initial={false}
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ delay: 0.08 }}
                className="rounded-2xl border border-[#5B7053]/8 bg-white/80 p-6 shadow-sm sm:p-8 lg:p-10"
              >
                <AboutBio />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FOOTER RESOURCES */}
        <footer
          id="resources"
          className="relative scroll-mt-24 overflow-hidden border-t border-[#5B7053]/15 bg-white py-16 sm:py-20"
        >
          <CoverArtBackdrop />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading sub="LGBTQ+ youth face specific challenges around mental health. Trusted national networks offer dedicated support.">
              Resource Directory
            </SectionHeading>

            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
              <Link
                href="https://itgetsbetter.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[180px] flex-col justify-between rounded-2xl border border-[#5B7053]/15 bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:border-[#5B7053]/30 hover:shadow-xl"
              >
                <div>
                  <h3 className="font-brand-serif text-2xl font-semibold text-[#5B7053]">
                    It Gets Better
                  </h3>
                  <p className="mt-2 text-sm text-[#5B7053]/75">
                    LGBTQ+ youth face specific challenges around mental health. Stories, community, and hope worldwide.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#5B7053] px-5 py-2.5 text-sm font-medium text-white transition-colors group-hover:bg-[#5B7053]/90">
                  Visit It Gets Better
                  <ExternalLink className="size-4" />
                </span>
              </Link>

              <Link
                href="https://www.thetrevorproject.org/get-help/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[180px] flex-col justify-between rounded-2xl border border-[#5B7053]/15 bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:border-[#5B7053]/30 hover:shadow-xl"
              >
                <div>
                  <h3 className="font-brand-serif text-2xl font-semibold text-[#5B7053]">
                    The Trevor Project
                  </h3>
                  <p className="mt-2 text-sm text-[#5B7053]/75">
                    Geared toward LGBTQ+ kids. Crisis support and resources—24/7.
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#5B7053] px-5 py-2.5 text-sm font-medium text-white transition-colors group-hover:bg-[#5B7053]/90">
                  Get Support Now
                  <ExternalLink className="size-4" />
                </span>
              </Link>
            </div>

            <div className="mt-16 flex flex-col items-center border-t border-[#5B7053]/10 pt-10">
              <Image
                src={optimizedSrc("/images/label-logo-transparent.png")}
                alt="Lemon & Sugar Project label logo"
                width={280}
                height={120}
                loading="lazy"
                sizes="280px"
                className="h-auto w-full max-w-[220px] object-contain sm:max-w-[280px]"
              />
              <p className="mt-6 text-center text-sm text-[#5B7053]/60">
                <span suppressHydrationWarning>
                  © {new Date().getFullYear()} Lemon &amp; Sugar Project · LemonandSugarProject.com
                </span>
              </p>
              <p className="mt-1 text-center text-sm italic text-[#5B7053]/50">
                When you encounter a lemon, add sugar.
              </p>
              <p className="mt-3 text-center text-xs text-[#5B7053]/50">
                <a
                  href="https://alankarma.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-[#5B7053]/25 underline-offset-2 hover:text-[#5B7053]/80"
                >
                  Photos by Alan Karma
                </a>
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

import { ContentCard } from "@/components/ui/ContentCard";
import { ExternalAnchor } from "@/components/ui/ExternalAnchor";
export function ResiliencePanel() {
  return (
    <div className="grid min-w-0 gap-4 break-words sm:grid-cols-2 sm:gap-6 [&_a]:max-lg:break-all">
        <ContentCard title="Take Care of Your Body">
          <p>Your body and mind are connected. Try to:</p>
          <ul className="list-inside list-disc space-y-1">
            <li>Get enough sleep</li>
            <li>Eat regularly</li>
            <li>Move your body (walk, stretch, play)</li>
            <li>Don&apos;t abuse drugs or alcohol</li>
          </ul>
          <p>Small habits can improve how you feel emotionally.</p>
        </ContentCard>

        <ContentCard title="Emotional Regulation">
          <p>Have go-to tools for tough moments. Coping skills help manage stress and emotions.</p>
          <p><strong>Try this:</strong> Breathing, grounding, music, or taking a break.</p>
          <ExternalAnchor href="https://www.crisistextline.org/teens-toolkit/">
            Crisis Text Line teens toolkit
          </ExternalAnchor>
        </ContentCard>

        <ContentCard title="Break Problems Into Small Steps">
          <p>Big problems feel overwhelming—small steps feel doable.</p>
          <p><strong>Why it matters:</strong> Problem-solving in small steps helps teens feel more in control.</p>
          <p><strong>Try this:</strong> &ldquo;What is one small thing I can do right now?&rdquo;</p>
          <p>
            <ExternalAnchor href="https://kidshealth.org/en/teens/resilience.html">KidsHealth — resilience</ExternalAnchor>
            {" · "}
            <ExternalAnchor href="https://www.apa.org/topics/resilience/guide-teens">APA teen resilience guide</ExternalAnchor>
          </p>
        </ContentCard>

        <ContentCard title="Build Strong Connections">
          <p><strong>Why it matters:</strong> Support systems are one of the biggest factors in resilience.</p>
          <p><strong>Try this:</strong> Reach out to someone who makes you feel safe.</p>
          <ExternalAnchor href="https://www.apa.org/topics/resilience/guide-teens">Learn more</ExternalAnchor>
        </ContentCard>

        <ContentCard title="Learn From Challenges">
          <p><strong>Why it matters:</strong> Reflection helps teens grow and build coping skills.</p>
          <p><strong>Try this:</strong> &ldquo;What did I learn from this?&rdquo;</p>
          <ExternalAnchor href="https://kidshealth.org/en/teens/resilience.html">KidsHealth — resilience</ExternalAnchor>
        </ContentCard>

        <ContentCard title="Keep a Routine">
          <p><strong>Why it matters:</strong> Daily routines create stability and reduce stress.</p>
          <p><strong>Try this:</strong> Wake up, eat, and rest around the same time each day.</p>
          <ExternalAnchor href="https://childmind.org/article/how-routines-help-kids/">How routines help</ExternalAnchor>
        </ContentCard>

        <ContentCard title="Focus on What You Can Control">
          <p>You can&apos;t control everything—but you can control some things.</p>
          <p><strong>Why it matters:</strong> Focusing on control reduces anxiety and builds confidence.</p>
          <p><strong>Try this:</strong> Ask: &ldquo;What is in my control right now?&rdquo;</p>
          <ExternalAnchor href="https://www.mhanational.org/youth-mental-health/kids-and-teens/">MHA — kids and teens</ExternalAnchor>
        </ContentCard>

        <ContentCard title="Try Again (Don't Give Up)">
          <p><strong>Why it matters:</strong> Persistence helps build strength over time.</p>
          <p><strong>Try this:</strong> &ldquo;It didn&apos;t work this time, but I can try again.&rdquo;</p>
          <ExternalAnchor href="https://www.apa.org/topics/resilience/guide-teens">APA teen resilience guide</ExternalAnchor>
        </ContentCard>

        <ContentCard title="Believe You Can Grow">
          <p>You are not stuck—you are still growing.</p>
          <p><strong>Why it matters:</strong> A growth mindset helps teens adapt and overcome challenges.</p>
          <p><strong>Try this:</strong> &ldquo;I am growing, even through this.&rdquo;</p>
          <ExternalAnchor href="https://www.mindsetworks.com/science/">Growth mindset science</ExternalAnchor>
        </ContentCard>

        <ContentCard title="Use Guided Worksheets & Activities" className="sm:col-span-2">
          <p><strong>Why it works:</strong> Worksheets help teens identify emotions, express feelings, and build coping skills.</p>
          <p><strong>What to do:</strong> Fill out feeling charts. Track your emotions. Practice coping exercises.</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
            <li>
              <ExternalAnchor href="https://mentalhealthcenterkids.com/blogs/articles/trauma-worksheets">
                Trauma worksheets
              </ExternalAnchor>
            </li>
            <li>
              <ExternalAnchor href="https://www.childtherapyguide.com/worksheets">
                Child therapy guide worksheets
              </ExternalAnchor>
            </li>
          </ul>
        </ContentCard>
    </div>
  );
}

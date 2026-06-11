import { ContentCard } from "@/components/ui/ContentCard";
import { ExternalAnchor } from "@/components/ui/ExternalAnchor";
export function UnburdeningPanel() {
  return (
    <div className="space-y-6">
        <ContentCard title="Write It Out (Journaling)">
          <p>
            Writing your thoughts down helps get them out of your head and onto paper. Journaling helps teens process emotions, reduce anxiety, and understand their feelings.
          </p>
          <p className="font-medium">If it&apos;s hard to say out loud:</p>
          <ul className="list-inside list-disc">
            <li>Journal your thoughts</li>
            <li>Write a letter (you don&apos;t have to send it)</li>
            <li>Use your phone notes</li>
          </ul>
          <p className="font-medium">What to do:</p>
          <ul className="list-inside list-disc">
            <li>Write about your day</li>
            <li>List your feelings</li>
            <li>Draw instead of writing if that feels easier</li>
          </ul>
          <p>
            <ExternalAnchor href="https://childmind.org/blog/journaling-guide-for-teens-and-families/">
              Journaling guide for teens
            </ExternalAnchor>
            {" · "}
            <ExternalAnchor href="https://www.mhanational.org/youth-mental-health/kids-and-teens/">
              MHA youth resources
            </ExternalAnchor>
          </p>
        </ContentCard>

        <ContentCard title="Learn Simple Calming Tools">
          <p>These can help in the moment when emotions feel intense:</p>
          <ul className="list-inside list-disc">
            <li>Deep breathing (slow inhale, slow exhale)</li>
            <li>Grounding (name 5 things you can see, 4 you can touch, etc.)</li>
            <li>Listening to calming music</li>
            <li>Taking a short walk</li>
          </ul>
          <p>These don&apos;t fix everything—but they help you feel more steady.</p>
        </ContentCard>

        <ContentCard title="Use Breathing & Grounding Techniques">
          <p>These help calm your body when emotions feel overwhelming.</p>
          <p><strong>Why it works:</strong> Breathing and grounding exercises help teens reduce anxiety and reset emotions.</p>
          <p><strong>What to do:</strong> Take slow breaths in and out. Name 5 things you can see, 4 you can touch, etc.</p>
          <ExternalAnchor href="https://www.mood.org/mood-tools">Try mood tools here</ExternalAnchor>
        </ContentCard>

        <ContentCard title="Express Yourself Creatively">
          <p>You don&apos;t always have to use words.</p>
          <p><strong>Why it works:</strong> Activities like drawing, storytelling, and creative expression help kids process trauma and emotions safely.</p>
          <p><strong>What to do:</strong> Draw your feelings. Create a story about what you&apos;re going through. Use colors to show emotions.</p>
          <p>
            <ExternalAnchor href="https://www.childtherapyguide.com/worksheets">Creative worksheets</ExternalAnchor>
            {" · "}
            <ExternalAnchor href="https://www.socialworkerstoolbox.com/cbt-worksheets-for-children-free-printable-resources-for-therapists/">
              CBT worksheets for children
            </ExternalAnchor>
          </p>
        </ContentCard>

        <ContentCard title='Use Storytelling — "My Hero is You"'>
          <p>Stories can help you understand and process feelings.</p>
          <p><strong>Why it works:</strong> Story-based tools help children cope with stress and emotional challenges.</p>
          <ExternalAnchor href="https://interagencystandingcommittee.org/my-hero-you">My Hero is You</ExternalAnchor>
          <p className="mt-2"><strong>What to do:</strong> Read stories about overcoming hard times. Imagine your own &ldquo;hero story.&rdquo;</p>
        </ContentCard>

        <div className="grid gap-4 sm:grid-cols-2">
          <ContentCard title="Move It Out">
            <p>
              Exercise. Take a walk, stretch, dance, shoot hoops, or step outside. Spending time outside and movement are coping skills many teens use.
            </p>
          </ContentCard>
          <ContentCard title="Use Music">
            <p>
              Make a &ldquo;release playlist&rdquo; for when you need to cry, calm down, or feel stronger. Listening to music is one of the top coping skills used by teen texters.
            </p>
          </ContentCard>
        </div>

        <ContentCard title="Practice a Release Ritual">
          <p>Pick one small action that helps you let go.</p>
          <ul className="list-inside list-disc space-y-2">
            <li>Write it down, then fold the paper away.</li>
            <li>Put worries in a &ldquo;worry jar.&rdquo;</li>
            <li>Take three deep breaths before bed.</li>
            <li>Say: &ldquo;This feeling is real, but it will not last forever.&rdquo;</li>
          </ul>
        </ContentCard>
    </div>
  );
}

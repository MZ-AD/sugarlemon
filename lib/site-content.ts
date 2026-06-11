export const SUGAR_OVERVIEW = [
  {
    letter: "S",
    title: "Support",
    text: "You deserve a safe space where you can be yourself. No judgment. Just people who care and listen.",
  },
  {
    letter: "U",
    title: "Unburdening",
    text: "Got something heavy on your mind? You don't have to carry it alone. Let it out. Talk it through. Feel lighter.",
  },
  {
    letter: "G",
    title: "Grace & Gratitude",
    text: "Be kind to yourself. You don't have to be perfect. And even on hard days, there's always something small to be thankful for.",
  },
  {
    letter: "A",
    title: "Affirmation",
    text: 'Your words matter—especially the ones you say to yourself. We help you build a strong, positive inner voice. "I am strong." "I matter." "I can get through this."',
  },
  {
    letter: "R",
    title: "Resilience",
    text: "Life can be tough—but so are you. We help you bounce back, grow, and keep going no matter what.",
  },
] as const;

export const WELCOME_LINES = [
  "Welcome",
  "Sometimes life is sour.",
  "Maybe you're anxious, stressed, sad, confused, or just need someone to talk to.",
  "You're not alone.",
  "The Lemon & Sugar Project is here to help you feel better, grow stronger, and believe in yourself again.",
  "When you encounter a lemon, add sugar.",
] as const;

export const SAFETY_SECTION = {
  title: "If You Feel Unsafe",
  lead: "If you feel like you might hurt yourself or are in danger:",
  steps: [
    "Tell a trusted adult right away",
    "Call or text 988",
    "Go somewhere safe",
  ],
  resources: [
    {
      label: "Crisis Text Line",
      text: 'Text "HOME" to 741741, or message them on WhatsApp.',
    },
    {
      label: null,
      text: 'Young people of color can text "STEVE" to 741741 to reach culturally trained counselors.',
    },
    {
      label: "988 Suicide & Crisis Lifeline",
      text: "Call or text 988. They offer translation services in over 250 languages.",
    },
  ],
  lgbtq: [
    {
      name: "It Gets Better",
      desc: "LGBTQ+ youth face specific challenges around mental health.",
      href: "https://itgetsbetter.org",
    },
    {
      name: "The Trevor Project",
      desc: "Geared toward LGBTQ+ kids.",
      href: "https://www.thetrevorproject.org/get-help/",
    },
  ],
} as const;

export const AFFIRMATION_QUOTES = [
  "I am strong.",
  "I matter.",
  "I can get through this.",
  "I am learning to be stronger",
  "I'm getting better each day",
  "I can try my best",
] as const;

export const SELF_COMPASSION = [
  {
    title: "Talk to Yourself Like a Friend",
    why: "Self-compassion helps teens cope with stress and emotional challenges.",
    tryThis: '"What would I say to a friend going through this?"',
    links: [
      { label: "KidsHealth – self-talk", href: "https://kidshealth.org/en/teens/talk-to-yourself.html" },
      { label: "Child Mind Institute", href: "https://childmind.org/article/how-to-help-kids-with-self-compassion/" },
    ],
  },
  {
    title: "Accept Your Feelings (Without Judging Them)",
    why: "Recognizing emotions helps teens manage them in a healthy way.",
    tryThis: '"It\'s okay to feel this way."',
    links: [
      { label: "KidsHealth – emotions", href: "https://kidshealth.org/en/teens/emotions.html" },
      { label: "NAMI – Kids, Teens & Young Adults", href: "https://www.nami.org/Your-Journey/Kids-Teens-and-Young-Adults" },
    ],
  },
  {
    title: "Let Go of Perfection",
    why: "Perfectionism can increase anxiety and stress in teens.",
    tryThis: '"Done is better than perfect."',
    links: [
      { label: "Child Mind – perfectionism", href: "https://childmind.org/article/perfectionism/" },
      { label: "NIMH – child & adolescent mental health", href: "https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health" },
    ],
  },
  {
    title: "Take Breaks Without Guilt",
    why: "Breaks help reset your brain and reduce stress.",
    tryThis: "Step away, breathe, or do something calming.",
    links: [{ label: "KidsHealth – stress", href: "https://kidshealth.org/en/teens/stress.html" }],
  },
  {
    title: "Forgive Yourself",
    why: "Self-forgiveness helps teens move forward instead of staying stuck.",
    tryThis: '"I\'m still learning. I can try again."',
    links: [{ label: "Greater Good – self-compassion", href: "https://greatergood.berkeley.edu/article/item/the_power_of_self_compassion" }],
  },
  {
    title: "Focus on Small Wins",
    why: "Recognizing progress builds confidence and resilience.",
    tryThis: "Write down one thing you did well today.",
    links: [{ label: "MHA – kids and teens", href: "https://www.mhanational.org/youth-mental-health/kids-and-teens/" }],
  },
  {
    title: "Remind Yourself: You Are Enough",
    why: "Positive self-worth is key to emotional health.",
    tryThis: '"I am enough just as I am."',
    links: [{ label: "Common Sense Media – mental health apps", href: "https://www.commonsensemedia.org/articles/kids-mental-health-apps-and-websites-for-anxiety-depression-coping-skills-and-professional-support" }],
  },
  {
    title: "Practice Gratitude",
    why: "Gratitude can improve mood and mental well-being.",
    tryThis: "Name 3 things you're thankful for.",
    links: [
      { label: "Child Mind – benefits of gratitude", href: "https://childmind.org/article/benefits-of-gratitude/" },
      { label: "Greater Good – gratitude", href: "https://greatergood.berkeley.edu/topic/gratitude" },
    ],
  },
] as const;

export const GRATITUDE_TOOLKIT = [
  { step: 1, title: "Write Down 3 Good Things", body: 'Each day, write 3 small things that didn\'t go wrong. Try: "Today I\'m thankful for…" Even small things count (a snack, a song, a friend).', links: ["https://childmind.org/article/benefits-of-gratitude/", "https://greatergood.berkeley.edu/article/item/tips_for_keeping_a_gratitude_journal"] },
  { step: 2, title: "Notice Small Moments", body: "Look for tiny good things during your day—a funny moment, a kind word, a peaceful minute.", links: ["https://kidshealth.org/en/teens/positive-thinking.html"] },
  { step: 3, title: "Say Thank You (Out Loud or in Your Head)", body: "Thank someone for something small, or think it quietly if saying it feels hard.", links: ["https://greatergood.berkeley.edu/topic/gratitude"] },
  { step: 4, title: "Keep a Gratitude Jar", body: "Write good moments on paper, collect them, and read them when you feel down. Add one note a day.", links: ["https://www.mhanational.org/youth-mental-health/kids-and-teens/"] },
  { step: 5, title: "Exhale → Release Stress", body: "Take a slow breath out and let your shoulders drop. Rest is part of healing.", links: ["https://kidshealth.org/en/teens/stress.html"] },
  { step: 6, title: "Appreciate Yourself", body: '"I\'m proud of myself for…" or "Something I did well today…"', links: ["https://kidshealth.org/en/teens/self-esteem.html"] },
  { step: 7, title: "Look Back at Hard Things You Survived", body: '"I made it through ___." "That shows I\'m strong because…"', links: ["https://www.nami.org/Your-Journey/Kids-Teens-and-Young-Adults"] },
  { step: 8, title: "Share Gratitude with Someone", body: "Tell a friend something you appreciate, or share one good thing from your day.", links: ["https://greatergood.berkeley.edu/topic/gratitude"] },
  { step: 9, title: "Practice Gratitude Daily", body: "Name 3 things you're thankful for—even on hard days.", links: ["https://childmind.org/article/benefits-of-gratitude/"] },
  { step: 10, title: "Remember: Good Still Exists", body: "Gratitude doesn't mean ignoring pain. It means noticing that something good still exists alongside it.", links: ["https://greatergood.berkeley.edu/topic/gratitude"] },
] as const;

export const AFFIRMATION_PRACTICES = [
  { title: "Say Affirmations Out Loud", why: "Positive self-talk can improve confidence and reduce negative thinking.", tryThis: '"I am strong." "I can get through this."', links: ["https://kidshealth.org/en/teens/self-talk.html", "https://www.childmind.org/article/how-to-help-kids-with-self-compassion/"] },
  { title: "Write Your Affirmations", why: "Writing things down can strengthen emotional awareness and reinforce positive thinking.", tryThis: "Write 3 affirmations each morning or night.", links: ["https://www.mhanational.org/youth-mental-health/kids-and-teens/"] },
  { title: "Create a Mirror Routine", why: "Seeing yourself while speaking positive words builds self-acceptance.", tryThis: "Look in the mirror and say one kind thing about yourself.", links: ["https://greatergood.berkeley.edu/article/item/how_to_practice_self_compassion"] },
  { title: "Use Sticky Notes or Visual Reminders", why: "Repeated exposure helps change thought patterns over time.", tryThis: "Put notes on your mirror, notebook, or phone.", links: ["https://www.commonsensemedia.org/articles/kids-mental-health-apps-and-websites-for-anxiety-depression-coping-skills-and-professional-support"] },
  { title: "Choose Affirmations That Feel True", why: "Affirmations work best when they feel realistic, not forced.", tryThis: '"I am learning to be stronger" or "I\'m getting better each day."', links: ["https://www.nami.org/Your-Journey/Kids-Teens-and-Young-Adults"] },
  { title: "Turn Negative Thoughts into Positive Ones", why: "Changing thought patterns helps improve mental health.", tryThis: '"I can\'t do this" → "I can try my best"', links: ["https://kidshealth.org/en/teens/negative-self-talk.html"] },
  { title: "Practice Daily (Even for 1 Minute)", why: "Daily repetition helps rewire how you think about yourself.", tryThis: "Pick one affirmation and repeat it each day.", links: ["https://www.childmind.org/article/how-to-help-kids-with-self-compassion/"] },
] as const;

export const THREE_GOOD_THINGS_APP = {
  title: "Three Good Things App",
  description:
    "This teen-created app lets kids write about three positive experiences every day. They can set a daily reminder and review old entries to remember their positive thoughts.",
  href: "https://apps.apple.com/us/app/three-good-things-a-happiness-journal/id1242079576",
} as const;

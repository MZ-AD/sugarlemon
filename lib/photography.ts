import { optimizedSrc } from "@/lib/image-paths";

export type ToolkitLetter = "S" | "U" | "G" | "A" | "R";

export type PortraitPhoto = {
  src: string;
  alt: string;
  position: string;
};

export const PHOTO_CREDIT = {
  label: "Photos by Alan Karma",
  href: "https://alankarma.com",
} as const;

/** Build URL-safe paths for files in /public/images/SUGAR (handles spaces in filenames). */
function sugarImage(filename: string): string {
  const original = `/images/SUGAR/${encodeURIComponent(filename)}`;
  return optimizedSrc(original);
}

function portrait(
  filename: string,
  alt: string,
  position: string,
): PortraitPhoto {
  return {
    src: optimizedSrc(`/images/${filename}`),
    alt,
    position,
  };
}

/** S.U.G.A.R. overview cards — images/SUGAR/ (one per letter). */
export const SUGAR_CARD_PHOTOS: Record<ToolkitLetter, PortraitPhoto> = {
  S: portrait("sylencia-20.jpg", "Salincya Archard — Support", "50% 25%"),
  U: {
    src: sugarImage("Sylencia (18 of 55).jpg"),
    alt: "Salincya — Unburdening",
    position: "50% 38%",
  },
  G: {
    src: sugarImage("Sylencia (7 of 55).jpg"),
    alt: "Salincya — Grace & Gratitude",
    position: "50% 35%",
  },
  A: {
    src: sugarImage("sylencia-14.jpg"),
    alt: "Salincya — Affirmation",
    position: "50% 28%",
  },
  R: {
    src: sugarImage("sylencia-55.jpg"),
    alt: "Salincya — Resilience",
    position: "50% 48%",
  },
};

/** Toolkit tab backdrops — different photo than the matching card. */
export const TOOLKIT_BACKDROP_PHOTOS: Record<ToolkitLetter, PortraitPhoto> = {
  S: portrait("sylencia-9.jpg", "Salincya — Support", "50% 22%"),
  U: portrait("sylencia-18.jpg", "Salincya — Unburdening", "50% 38%"),
  G: portrait("sylencia-13.jpg", "Salincya — Grace & Gratitude", "50% 35%"),
  A: portrait("sylencia-15.jpg", "Salincya — Affirmation", "50% 28%"),
  R: portrait("sylencia-7.jpg", "Salincya — Resilience", "50% 40%"),
};

/** Home hero — unique from cards and toolkit. */
export const HERO_PHOTO: PortraitPhoto = portrait(
  "sylencia-20.jpg",
  "Salincya Archard",
  "50% 25%",
);

/** About section portrait — unique from all above. */
export const ABOUT_PHOTO: PortraitPhoto = portrait(
  "sylencia-12.jpg",
  "Salincya Archard",
  "50% 22%",
);

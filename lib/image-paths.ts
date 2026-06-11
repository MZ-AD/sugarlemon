/** WebP paths in /images/opt/ (run `npm run optimize-images` to generate). */

const OPT = "/images/opt";

const MAP: Record<string, string> = {
  "sylencia-20.jpg": `${OPT}/sylencia-20.webp`,
  "sylencia-12.jpg": `${OPT}/sylencia-12.webp`,
  "sylencia-9.jpg": `${OPT}/sylencia-9.webp`,
  "sylencia-18.jpg": `${OPT}/sylencia-18.webp`,
  "sylencia-13.jpg": `${OPT}/sylencia-13.webp`,
  "sylencia-15.jpg": `${OPT}/sylencia-15.webp`,
  "sylencia-7.jpg": `${OPT}/sylencia-7.webp`,
  "sylencia-headshot.jpg": `${OPT}/sylencia-headshot.webp`,
  "sylencia-14.jpg": `${OPT}/sylencia-14.webp`,
  "sylencia-55.jpg": `${OPT}/sylencia-55.webp`,
  "Sylencia-18-of-55": `${OPT}/Sylencia-(18-of-55).webp`,
  "Sylencia-7-of-55": `${OPT}/Sylencia-(7-of-55).webp`,
  "large-logo.png": `${OPT}/large-logo.webp`,
  "ls-website-tab.png": `${OPT}/ls-website-tab.webp`,
  "label-logo-transparent.png": `${OPT}/label-logo-transparent.webp`,
  "cover-art-1.png": `${OPT}/cover-art-1.webp`,
  "cover-art-2.png": `${OPT}/cover-art-2.webp`,
};

function keyFromSugarFilename(filename: string): string {
  if (filename.includes("18 of 55")) return "Sylencia-18-of-55";
  if (filename.includes("7 of 55")) return "Sylencia-7-of-55";
  return filename;
}

/** Prefer optimized WebP; fall back to original if missing. */
export function optimizedSrc(originalPath: string): string {
  const filename = originalPath.split("/").pop() ?? "";
  const decoded = decodeURIComponent(filename);

  if (originalPath.includes("/SUGAR/")) {
    const k = keyFromSugarFilename(decoded);
    if (MAP[k]) return MAP[k];
  }

  if (MAP[decoded]) return MAP[decoded];

  return originalPath;
}

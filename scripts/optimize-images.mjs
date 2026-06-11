/**
 * Compresses site images to WebP in public/images/opt/
 * Run: npm run optimize-images
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images", "opt");

const JOBS = [
  { src: "sylencia-20.jpg", w: 1400, q: 82 },
  { src: "sylencia-12.jpg", w: 900, q: 82 },
  { src: "sylencia-9.jpg", w: 1400, q: 82 },
  { src: "sylencia-18.jpg", w: 1400, q: 82 },
  { src: "sylencia-13.jpg", w: 1400, q: 82 },
  { src: "sylencia-15.jpg", w: 1400, q: 82 },
  { src: "sylencia-7.jpg", w: 1400, q: 82 },
  { src: "SUGAR/sylencia-headshot.jpg", w: 700, q: 80 },
  { src: "SUGAR/sylencia-14.jpg", w: 700, q: 80 },
  { src: "SUGAR/sylencia-55.jpg", w: 700, q: 80 },
  { src: "SUGAR/Sylencia (18 of 55).jpg", w: 700, q: 80 },
  { src: "SUGAR/Sylencia (7 of 55).jpg", w: 700, q: 80 },
  { src: "large-logo.png", w: 500, q: 90 },
  { src: "ls-website-tab.png", w: 128, q: 90 },
  { src: "label-logo-transparent.png", w: 400, q: 90 },
  { src: "cover-art-1.png", w: 600, q: 85 },
  { src: "cover-art-2.png", w: 600, q: 85 },
];

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.error("Install sharp: npm install sharp --save-dev");
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });

  for (const job of JOBS) {
    const input = path.join(root, "public", "images", job.src);
    if (!fs.existsSync(input)) {
      console.warn("skip (missing):", job.src);
      continue;
    }
    const base = job.src
      .replace(/^SUGAR[/\\]/, "")
      .replace(/\.(jpg|jpeg|png)$/i, "")
      .replace(/[^\w()-]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
    const outName = `${base}.webp`;
    const outPath = path.join(outDir, outName);

    await sharp(input)
      .rotate()
      .resize({ width: job.w, withoutEnlargement: true })
      .webp({ quality: job.q })
      .toFile(outPath);

    const inSize = fs.statSync(input).size;
    const outSize = fs.statSync(outPath).size;
    console.log(
      `${job.src} → opt/${outName} (${(inSize / 1e6).toFixed(1)}MB → ${(outSize / 1e3).toFixed(0)}KB)`,
    );
  }
}

main();

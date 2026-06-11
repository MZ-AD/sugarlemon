import { optimizedSrc } from "@/lib/image-paths";
import Image from "next/image";

type CoverArtBackdropProps = {
  /** Tailwind min-height classes for each half (footer uses taller min-height). */
  minChildHeight?: string;
  /** `contain` matches footer; `cover` fills narrow areas like the navbar. */
  fit?: "contain" | "cover";
};

/** Subtle cover-art background (same images as footer). */
export function CoverArtBackdrop({
  minChildHeight = "min-h-[220px]",
  fit = "contain",
}: CoverArtBackdropProps) {
  const objectFit = fit === "cover" ? "object-cover" : "object-contain";

  return (
    <div
      className="pointer-events-none absolute inset-0 grid grid-cols-2 opacity-[0.07]"
      aria-hidden
    >
      <div className={`relative h-full ${minChildHeight}`}>
        <Image
          src={optimizedSrc("/images/cover-art-2.png")}
          alt=""
          fill
          loading="lazy"
          sizes="50vw"
          className={`${objectFit} object-left`}
        />
      </div>
      <div className={`relative h-full ${minChildHeight}`}>
        <Image
          src={optimizedSrc("/images/cover-art-1.png")}
          alt=""
          fill
          loading="lazy"
          sizes="50vw"
          className={`${objectFit} object-right`}
        />
      </div>
    </div>
  );
}

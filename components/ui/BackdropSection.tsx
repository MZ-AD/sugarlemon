import { PhotoCredit } from "@/components/ui/PhotoCredit";
import Image from "next/image";
import type { ReactNode } from "react";

export function BackdropSection({
  imageSrc,
  imageAlt,
  imagePosition = "50% 30%",
  children,
  className = "",
  minHeight = "min-h-[min(88vh,720px)]",
  showPhotoCredit = true,
  id,
  contentPosition = "end",
}: {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  children: ReactNode;
  className?: string;
  minHeight?: string;
  showPhotoCredit?: boolean;
  id?: string;
  contentPosition?: "start" | "center" | "end";
}) {
  const positionClass =
    contentPosition === "start"
      ? "justify-start"
      : contentPosition === "center"
        ? "justify-center"
        : "justify-end";
  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden ${minHeight} ${className}`}
    >
      <div className="absolute inset-0 bg-brand-cream">
        <div className="relative h-full w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#5B7053]/88 via-[#5B7053]/55 to-brand-blush/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5"
        aria-hidden
      />

      <div
        className={`relative z-10 flex h-full min-h-[inherit] flex-col ${positionClass}`}
      >
        {children}
        {showPhotoCredit && (
          <PhotoCredit className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8" />
        )}
      </div>
    </section>
  );
}

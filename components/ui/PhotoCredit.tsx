import { PHOTO_CREDIT } from "@/lib/photography";

export function PhotoCredit({ className = "" }: { className?: string }) {
  return (
    <p
      className={`text-xs tracking-wide text-white/80 ${className}`}
    >
      <a
        href={PHOTO_CREDIT.href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-white/40 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
      >
        {PHOTO_CREDIT.label}
      </a>
    </p>
  );
}

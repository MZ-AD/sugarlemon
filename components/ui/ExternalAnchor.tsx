import { ExternalLink } from "lucide-react";

export function ExternalAnchor({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-medium text-[#5B7053] underline decoration-[#5B7053]/30 underline-offset-2 transition-colors hover:text-brand-gold hover:decoration-brand-gold"
    >
      {children}
      <ExternalLink className="size-3.5 shrink-0" aria-hidden />
    </a>
  );
}

export function ContentCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-[#5B7053]/10 bg-white/96 p-5 shadow-[0_8px_30px_-12px_rgba(91,112,83,0.12)] backdrop-blur-sm sm:p-6 ${className}`}
    >
      <h3 className="text-lg font-semibold text-[#5B7053]">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#5B7053]/85 sm:text-[0.9375rem]">
        {children}
      </div>
    </div>
  );
}

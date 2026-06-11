"use client";

import { motion } from "framer-motion";

type ToolkitTab = "S" | "U" | "G" | "A" | "R";

export function ToolkitTabButton({
  id,
  label,
  title,
  isActive,
  onSelect,
}: {
  id: ToolkitTab;
  label: string;
  title: string;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${id}`}
      onClick={onSelect}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      className={`rounded-full border px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors duration-200 sm:px-6 sm:text-base ${
        isActive
          ? "border-[#5B7053] bg-[#5B7053] text-white shadow-md"
          : "border-[#5B7053]/25 bg-white text-[#5B7053] hover:border-[#5B7053] hover:bg-[#5B7053] hover:text-white"
      }`}
    >
      <span className="mr-1.5">{label}</span>
      <span className="font-normal opacity-90">— {title}</span>
    </motion.button>
  );
}

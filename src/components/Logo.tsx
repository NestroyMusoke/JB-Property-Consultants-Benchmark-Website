import { motion } from "motion/react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Icon */}
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M10 60 L50 20 L90 60" stroke="#C9922A" strokeWidth="2" />
          <path d="M50 25 L45 40 L55 40 L50 55" stroke="#C9922A" strokeWidth="1.5" />
          <path d="M30 70 H70" stroke="#C9922A" strokeWidth="1" />
          <path d="M35 78 H65" stroke="#C9922A" strokeWidth="1" />
          <path d="M40 86 H60" stroke="#C9922A" strokeWidth="1" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className="font-cormorant font-bold text-2xl text-brand-gold">JB</span>
          <span className="font-outfit font-light text-[10px] text-brand-gold tracking-[0.2em]">LTD.</span>
        </div>
        <span className="font-outfit font-semibold text-[9px] text-warm-ivory uppercase tracking-[0.18em]">
          Property Consultants
        </span>
      </div>
    </div>
  );
}

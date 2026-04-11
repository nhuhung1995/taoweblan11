"use client";

export default function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12 shrink-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffd2ad,transparent_35%),radial-gradient(circle_at_72%_74%,#ff965e,transparent_38%),linear-gradient(145deg,#5b2744_0%,#1b1020_60%,#0f0a14_100%)] shadow-glow ring-1 ring-white/20">
        <span className="absolute inset-[8px] rounded-full border border-white/20" />
        <span className="absolute left-[6px] top-[17px] h-[10px] w-[30px] rounded-full border border-[#ffd7bd]/70" />
        <span className="absolute left-[11px] top-[8px] h-[26px] w-[26px] rounded-full border border-[#ffe2cf]/60" />
        <span className="absolute right-[8px] top-[9px] h-[8px] w-[8px] rounded-full bg-[#ffd7b8] blur-[1px]" />
      </div>
      <div className={compact ? "hidden sm:block" : "block"}>
        <div className="font-[700] tracking-[0.02em] text-white">Global Internet 5G</div>
        <div className="text-[11px] uppercase tracking-[0.28em] text-white/55">Global Connection for Japan</div>
      </div>
    </div>
  );
}
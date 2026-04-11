"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconBubble from "@/components/IconBubble";

type Props = {
  title: string;
  summary: string;
  href: string;
  icon: "sim" | "esim" | "pocket" | "home" | "fiber";
  bullets: string[];
  badge: string;
};

export default function ProductCard({ title, summary, href, icon, bullets, badge }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-[34px] border border-[#f0d8ca] bg-white/90 p-7 shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-panel">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,216,194,0.38),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.25),transparent_56%)] opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <IconBubble icon={icon} large />
          <span className="rounded-full border border-[#f1ddd2] bg-[#fff7f2] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#8f563e]">
            {badge}
          </span>
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-[#2b1623]">{title}</h3>
        <p className="mt-3 leading-7 text-[#6a4b58]">{summary}</p>
        <div className="mt-5 grid gap-2 text-sm text-[#7b5867]">
          {bullets.map((bullet) => (
            <div key={bullet} className="rounded-2xl bg-[#fff5ef] px-4 py-3">{bullet}</div>
          ))}
        </div>
        <Link href={href} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2b1623] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#8d4d3c]">
          Xem chi tiết
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
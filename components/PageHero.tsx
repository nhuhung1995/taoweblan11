"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import IconBubble from "@/components/IconBubble";

export default function PageHero({
  eyebrow,
  title,
  desc,
  primaryLabel = "Đăng ký tư vấn",
  primaryHref = "/lien-he",
  secondaryLabel = "Xem bảng giá",
  secondaryHref = "/pricing",
  panelTitle,
  panelBullets,
  icon,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  panelTitle: string;
  panelBullets: string[];
  icon: "sim" | "esim" | "pocket" | "home" | "fiber" | "global";
}) {
  return (
    <section className="bg-hero-v3 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#ffd7c2]">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">{desc}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryHref} className="inline-flex items-center gap-2 rounded-full bg-[#ffece0] px-6 py-4 font-semibold text-[#2b1623] transition hover:bg-white">
              {primaryLabel}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href={secondaryHref} className="rounded-full border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/15">
              {secondaryLabel}
            </Link>
          </div>
        </div>
        <div className="relative flex justify-center [perspective:1800px]">
          <div className="relative w-full max-w-[520px] rounded-[38px] border border-white/10 bg-panel-v3 p-8 shadow-glow backdrop-blur-2xl [transform:rotateY(-12deg)_rotateX(7deg)] transition duration-500 hover:[transform:rotateY(-6deg)_rotateX(3deg)_translateY(-8px)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.34em] text-[#ffd9c4]">Global Internet 5G</div>
                <div className="mt-3 text-3xl font-semibold text-white">{panelTitle}</div>
              </div>
              <IconBubble icon={icon} large />
            </div>
            <div className="mt-6 grid gap-3 text-white/78">
              {panelBullets.map((bullet) => (
                <div key={bullet} className="rounded-2xl bg-white/8 px-4 py-3">{bullet}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

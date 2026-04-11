"use client";

type Props = {
  eyebrow: string;
  title: string;
  desc: string;
  dark?: boolean;
  center?: boolean;
};

export default function SectionTitle({ eyebrow, title, desc, dark = false, center = false }: Props) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className={`text-xs font-semibold uppercase tracking-[0.34em] ${dark ? "text-[#ffd5bf]" : "text-[#9b4a34]"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-semibold leading-tight md:text-5xl ${dark ? "text-white" : "text-[#2b1623]"}`}>{title}</h2>
      <p className={`mt-4 text-base leading-8 md:text-lg ${dark ? "text-white/70" : "text-[#6a4b58]"}`}>{desc}</p>
    </div>
  );
}
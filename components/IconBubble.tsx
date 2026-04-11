"use client";

import { Globe2, HouseWifi, MonitorSmartphone, Router, Smartphone, Wifi } from "lucide-react";

type IconKey = "sim" | "esim" | "pocket" | "home" | "fiber" | "global";

const iconMap = {
  sim: Smartphone,
  esim: Globe2,
  pocket: Wifi,
  home: HouseWifi,
  fiber: Router,
  global: MonitorSmartphone,
};

export default function IconBubble({ icon, large = false }: { icon: IconKey; large?: boolean }) {
  const Icon = iconMap[icon];
  return (
    <div className={`relative flex items-center justify-center rounded-[22px] bg-[linear-gradient(145deg,rgba(255,222,205,0.95),rgba(255,246,240,0.88))] ring-1 ring-white/70 shadow-soft ${large ? "h-16 w-16" : "h-12 w-12"}`}>
      <div className="absolute inset-0 rounded-[22px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_55%)]" />
      <Icon className={`relative z-10 text-[#8e4d3b] ${large ? "h-8 w-8" : "h-6 w-6"}`} />
    </div>
  );
}
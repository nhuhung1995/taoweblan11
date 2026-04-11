"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useMemo, useState } from "react";
import LogoMark from "@/components/LogoMark";
import { navigation } from "@/data/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const activeTop = useMemo(() => {
    if (pathname.startsWith("/san-pham")) return "/san-pham";
    return pathname;
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(90deg,rgba(43,19,27,0.90),rgba(78,33,47,0.82),rgba(83,36,58,0.88))] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8 lg:px-10">
        <Link href="/" className="flex items-center">
          <LogoMark compact />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => {
            if (item.children) {
              const active = activeTop === item.href;
              return (
                <div key={item.href} className="relative" onMouseEnter={() => setProductOpen(true)} onMouseLeave={() => setProductOpen(false)}>
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                      active
                        ? "bg-[#fff1e6] text-[#341723] shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
                        : "text-[#f4dac8] hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  {productOpen && (
                    <div className="absolute left-0 top-full mt-4 w-[420px] rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(47,19,30,0.97),rgba(68,28,44,0.96))] p-3 shadow-[0_24px_60px_rgba(18,8,16,0.45)] backdrop-blur-2xl">
                      <div className="grid gap-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="rounded-[22px] border border-transparent px-4 py-4 transition hover:border-white/10 hover:bg-white/8"
                          >
                            <div className="font-semibold text-[#fff2e8]">{child.label}</div>
                            <div className="mt-1 text-sm leading-6 text-[#f5d7c5]/78">{child.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const active = activeTop === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-[#fff1e6] text-[#341723] shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
                    : "text-[#f4dac8] hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/pricing"
            className="rounded-full border border-[#f0d2bc]/70 bg-white/4 px-5 py-3 text-sm font-semibold text-[#fff0e3] transition hover:bg-white/10"
          >
            Pricing
          </Link>
          <Link
            href="/lien-he"
            className="relative overflow-hidden rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-5 py-3 text-sm font-semibold text-[#2b1623] shadow-glow transition hover:-translate-y-0.5"
          >
            <span className="relative z-10">Đăng ký tư vấn</span>
            <span className="absolute inset-y-0 left-0 w-16 bg-white/35 blur-sm animate-shine" />
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-[#fff0e3] lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(31,12,20,0.98),rgba(55,23,35,0.98))] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 md:px-8">
            {navigation.map((item) => (
              <div key={item.href} className="border-b border-white/6 py-2 last:border-b-0">
                <Link href={item.href} onClick={() => setMobileOpen(false)} className="block rounded-2xl px-3 py-3 font-medium text-[#fff0e3]">
                  {item.label}
                </Link>
                {item.children && (
                  <div className="grid gap-2 pb-2 pl-3">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)} className="rounded-2xl px-3 py-2 text-sm text-[#f4dac8]/82">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/lien-he"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-5 py-3 text-center font-semibold text-[#2b1623]"
            >
              Đăng ký tư vấn
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

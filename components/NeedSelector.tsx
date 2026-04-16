"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Choice = {
  label: string;
  recommendation: string;
  reason: string;
  href: string;
};

const choices: Choice[] = [
  {
    label: "Cần dùng ngay trong hôm nay",
    recommendation: "eSIM hoặc SIM vật lý",
    reason: "Phù hợp khi cần kích hoạt nhanh và ưu tiên có internet sớm.",
    href: "/san-pham/esim",
  },
  {
    label: "Chỉ dùng cho 1 điện thoại",
    recommendation: "SIM vật lý hoặc eSIM",
    reason: "Tối ưu chi phí cho nhu cầu cá nhân, ít thiết bị.",
    href: "/san-pham/sim-vat-ly",
  },
  {
    label: "Dùng cho gia đình / nhiều thiết bị",
    recommendation: "Home WiFi hoặc Hikari",
    reason: "Đáp ứng nhiều thiết bị cùng lúc, phù hợp sinh hoạt cố định.",
    href: "/san-pham/home-wifi",
  },
  {
    label: "Mới chuyển nhà",
    recommendation: "Home WiFi trước, cân nhắc Hikari sau",
    reason: "Có internet sớm, sau đó tối ưu hạ tầng khi đã ở ổn định.",
    href: "/giai-phap",
  },
  {
    label: "Muốn rẻ nhất",
    recommendation: "SIM data hoặc gói linh hoạt",
    reason: "Giảm phí ban đầu, phù hợp người dùng cơ bản.",
    href: "/pricing",
  },
  {
    label: "Muốn ổn định nhất",
    recommendation: "Hikari Fiber",
    reason: "Ưu tiên độ ổn định dài hạn cho gia đình hoặc làm việc tại nhà.",
    href: "/san-pham/hikari",
  },
];

export default function NeedSelector() {
  const [selected, setSelected] = useState<Choice>(choices[0]);

  const helper = useMemo(
    () =>
      `Gợi ý hiện tại: ${selected.recommendation}. ${selected.reason}`,
    [selected],
  );

  return (
    <section className="relative overflow-hidden bg-[#180b17] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(255,160,91,0.12),transparent_20%),radial-gradient(circle_at_88%_20%,rgba(255,122,88,0.10),transparent_16%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ffd5bf]">Chọn nhanh 30 giây</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
          Bạn cần loại internet nào tại Nhật?
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
          Chọn đúng tình huống hiện tại để nhận gợi ý ban đầu trước khi tư vấn chi tiết.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {choices.map((item) => {
            const isActive = item.label === selected.label;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setSelected(item)}
                className={`rounded-[22px] border px-5 py-4 text-left transition ${
                  isActive
                    ? "border-[#ffbc92]/45 bg-white/12"
                    : "border-white/10 bg-white/5 hover:border-[#ffbc92]/35 hover:bg-white/8"
                }`}
              >
                <p className="font-semibold text-[#fff1e6]">{item.label}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-[28px] border border-[#ffbc92]/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffd6c0]">
            Gợi ý theo nhu cầu
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[#fff1e6] md:text-3xl">{selected.recommendation}</h3>
          <p className="mt-3 max-w-3xl leading-8 text-white/72">{helper}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={selected.href}
              className="rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-6 py-3 font-semibold text-[#2b1623]"
            >
              Xem phương án này
            </Link>
            <Link
              href="/lien-he"
              className="rounded-full border border-white/20 bg-white/8 px-6 py-3 font-semibold text-white"
            >
              Nhận tư vấn miễn phí
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

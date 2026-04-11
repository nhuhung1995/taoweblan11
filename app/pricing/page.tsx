"use client";

import Link from "next/link";
import { ArrowRight, CircleDollarSign, Scale, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { pricingBands } from "@/data/products";

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title="Tham khảo chi phí theo từng nhóm dịch vụ"
        desc="Trang này giúp Quý khách hình dung nhanh nhóm giải pháp phù hợp với ngân sách và nhu cầu sử dụng, trước khi nhận tư vấn chi tiết hơn."
        panelTitle="Tham khảo chi phí"
        panelBullets={["Nhóm giá dễ hình dung", "So sánh theo loại dịch vụ", "Thuận tiện trước khi liên hệ"]}
        icon="global"
      />
      <section className="bg-[#120913] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle eyebrow="Mức tham khảo" title="Chi phí theo từng nhóm dịch vụ" desc="Mức giá thực tế còn phụ thuộc vào loại kết nối, thời gian sử dụng và điều kiện dịch vụ. Tuy nhiên, cách chia nhóm dưới đây sẽ giúp Quý khách dễ hình dung hơn." dark />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {pricingBands.map((item) => (
              <div key={item.title} className="rounded-[30px] border border-white/10 bg-white/6 p-6 shadow-panel backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#ffbc92]/35">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb77f]/14">
                  <CircleDollarSign className="h-5 w-5 text-[#ffd7c0]" />
                </div>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#ffd6c0]">{item.band}</div>
                <h3 className="mt-3 text-2xl font-semibold text-[#fff1e6]">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#180b17] text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 md:px-8 lg:grid-cols-3 lg:px-10">
          {[
            { icon: Scale, title: "So sánh dễ hơn", text: "Quý khách có thể nhìn nhanh sự khác nhau giữa các nhóm dịch vụ trước khi quyết định nên xem sâu ở lựa chọn nào." },
            { icon: Sparkles, title: "Xem bảng giá không bị rối", text: "Cách trình bày ưu tiên dễ đọc, rõ ý và đủ thông tin để tham khảo mà không tạo cảm giác quá tải." },
            { icon: ArrowRight, title: "Tiếp tục bằng tư vấn phù hợp", text: "Sau khi đã có hình dung ban đầu, bước tiếp theo thuận tiện nhất là gửi nhu cầu để được hỗ trợ chi tiết hơn." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[30px] border border-white/10 bg-white/6 p-7 shadow-panel backdrop-blur-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb77f]/14"><Icon className="h-5 w-5 text-[#ffd7c0]" /></div>
                <h3 className="mt-5 text-2xl font-semibold text-[#fff1e6]">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-20 md:px-8 lg:px-10">
          <div className="rounded-[34px] border border-white/10 bg-white/6 p-8 text-white shadow-panel backdrop-blur-xl md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h3 className="text-3xl font-semibold md:text-4xl">Cần báo giá theo nhu cầu thực tế? Quý khách có thể liên hệ để được hỗ trợ nhanh chóng.</h3>
                <p className="mt-4 max-w-2xl leading-8 text-white/70">Đội ngũ sẽ giúp Quý khách so sánh phương án phù hợp hơn dựa trên thiết bị, thời gian sử dụng và môi trường sống tại Nhật.</p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/lien-he" className="rounded-full bg-[#ffe8d8] px-6 py-4 font-semibold text-[#2b1623]">Đi tới Liên hệ</Link>
                <Link href="/san-pham" className="rounded-full border border-white/20 bg-white/8 px-6 py-4 font-semibold text-white">Quay về Sản phẩm</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

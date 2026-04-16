import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Home, Plane, School } from "lucide-react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { solutions } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Giải pháp theo nhu cầu",
  description:
    "Tìm giải pháp internet phù hợp theo từng hoàn cảnh: người mới sang Nhật, đi công tác, sống một mình hoặc gia đình.",
  path: "/giai-phap",
});

const icons = [Plane, BriefcaseBusiness, Home, School];

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Giải pháp"
        title="Chọn giải pháp theo hoàn cảnh sử dụng"
        desc="Nhiều khách hàng bắt đầu từ câu hỏi rất thực tế: trường hợp của mình nên chọn loại internet nào tại Nhật? Trang này giúp trả lời theo đúng cách nghĩ đó."
        panelTitle="Gợi ý theo nhu cầu"
        panelBullets={["Người mới sang Nhật", "Đi công tác / ngắn ngày", "Sống một mình", "Gia đình / căn hộ"]}
        icon="global"
      />
      <section className="bg-[#120913] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle eyebrow="Theo tình huống" title="Nhóm giải pháp dễ tham khảo" desc="Mỗi nhóm dưới đây được viết để Quý khách có thể nhanh chóng nhìn thấy hướng phù hợp trước khi xem sâu hơn vào từng sản phẩm." dark />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((item, index) => {
              const Icon = icons[index] ?? ArrowRight;
              return (
                <div key={item.title} className="rounded-[30px] border border-white/10 bg-white/6 p-7 shadow-panel backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#ffbc92]/35">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb77f]/14">
                    <Icon className="h-5 w-5 text-[#ffd7c0]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[#fff1e6]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/72">{item.desc}</p>
                  <div className="mt-4 rounded-2xl bg-white/8 px-4 py-3 text-sm text-[#ffd4bc]">{item.suggestion}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#180b17] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle eyebrow="Flow" title="Từ nhu cầu đến quyết định" desc="Khi đã nhận ra mình thuộc nhóm nào, Quý khách sẽ dễ bước tiếp sang giai đoạn so sánh và liên hệ hơn nhiều." dark />
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              "Xác định hoàn cảnh sử dụng hiện tại.",
              "Xem nhóm sản phẩm phù hợp nhất.",
              "Tham khảo chi phí và ưu tiên cần thiết.",
              "Liên hệ để được tư vấn chi tiết hơn.",
            ].map((item, index) => (
              <div key={item} className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur">
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffd4bc]">0{index + 1}</div>
                <p className="mt-4 leading-7 text-white/72">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/pricing" className="rounded-full bg-[#ffe8d8] px-6 py-4 font-semibold text-[#2b1623]">Xem Pricing</Link>
            <Link href="/lien-he" className="rounded-full border border-white/20 bg-white/8 px-6 py-4 font-semibold text-white">Đi tới Liên hệ</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

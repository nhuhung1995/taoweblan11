import Link from "next/link";
import { HelpCircle, MessagesSquare, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FaqList from "@/components/FaqList";
import SectionTitle from "@/components/SectionTitle";
import { supportFaqs } from "@/data/support";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Hỗ trợ và câu hỏi thường gặp",
  description:
    "Giải đáp nhanh các câu hỏi thường gặp khi chọn SIM, eSIM, WiFi và Hikari tại Nhật, giúp bạn quyết định dễ dàng hơn.",
  path: "/ho-tro",
});

export default function SupportPage() {
  return (
    <main>
      <PageHero
        eyebrow="Hỗ trợ"
        title="Thông tin rõ ràng để Quý khách yên tâm lựa chọn"
        desc="Trang Hỗ trợ được viết để giải quyết những câu hỏi thường khiến khách hàng phân vân: nên chọn loại nào, khác nhau ra sao và bước tiếp theo nên làm gì."
        panelTitle="Hỗ trợ & câu hỏi"
        panelBullets={["Giải thích rõ sự khác nhau", "Gỡ rối trước khi liên hệ", "Tăng cảm giác an tâm"]}
        icon="global"
      />
      <section className="bg-[#120913] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle eyebrow="Câu hỏi phổ biến" title="Những điều khách hàng hay quan tâm" desc="Một trang hỗ trợ tốt không cần quá dài. Điều quan trọng là trả lời đúng điều Quý khách đang băn khoăn." dark />
          <div className="mt-10">
            <FaqList items={supportFaqs} />
          </div>
        </div>
      </section>
      <section className="bg-[#180b17] text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 md:px-8 lg:grid-cols-3 lg:px-10">
          {[
            { icon: HelpCircle, title: "Dễ hiểu hơn", text: "Khách hàng sẽ nắm được điểm khác nhau giữa các giải pháp mà không phải mất nhiều thời gian tự dò thông tin." },
            { icon: MessagesSquare, title: "Thuận tiện trước khi liên hệ", text: "Trang hỗ trợ giúp Quý khách chuẩn bị câu hỏi rõ hơn trước khi trao đổi với đội ngũ tư vấn." },
            { icon: ShieldCheck, title: "Tăng cảm giác tin cậy", text: "Một trải nghiệm giải thích rõ ràng luôn giúp việc quyết định trở nên nhẹ nhàng và an tâm hơn." },
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
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <h3 className="text-3xl font-semibold md:text-4xl">Nếu Quý khách vẫn còn phân vân, hãy để đội ngũ hỗ trợ trực tiếp.</h3>
                <p className="mt-4 max-w-2xl leading-8 text-white/70">Sau khi đã có thông tin cơ bản, bước tiếp theo thuận tiện nhất là chia sẻ nhu cầu để được gợi ý phù hợp hơn.</p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/lien-he" className="rounded-full bg-[#ffe8d8] px-6 py-4 font-semibold text-[#2b1623]">Đi tới Liên hệ</Link>
                <Link href="/san-pham" className="rounded-full border border-white/20 bg-white/8 px-6 py-4 font-semibold text-white">Xem sản phẩm</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

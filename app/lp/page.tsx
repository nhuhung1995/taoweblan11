import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, CircleDollarSign, Clock3, ShieldCheck, Smartphone, Wifi } from "lucide-react";
import FaqList from "@/components/FaqList";
import SectionTitle from "@/components/SectionTitle";
import { buildMetadata } from "@/lib/seo";

const baseMetadata = buildMetadata({
  title: "LP - Internet Nhật Bản cho người Việt cần dùng nhanh",
  description:
    "Trang tư vấn nhanh cho người Việt tại Nhật: chọn eSIM, SIM, Pocket WiFi, Home WiFi hoặc Hikari theo nhu cầu cần gấp, ngân sách và nơi ở.",
  path: "/lp",
  keywords: ["internet nhanh tại Nhật", "eSIM Nhật Bản", "Pocket WiFi Nhật Bản", "tư vấn internet cho người Việt tại Nhật"],
});

export const metadata: Metadata = {
  ...baseMetadata,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": -1,
      "max-video-preview": -1,
      "max-image-preview": "none",
    },
  },
};

const keyBenefits = [
  {
    icon: Clock3,
    title: "Ưu tiên phương án có internet nhanh",
    text: "Lọc ngay lựa chọn có thể bắt đầu sớm theo thiết bị và tình huống thực tế của bạn.",
  },
  {
    icon: CircleDollarSign,
    title: "Rõ chi phí trước khi quyết định",
    text: "Giải thích theo nhóm phí ban đầu, phí tháng và các lưu ý cần biết để tránh phát sinh.",
  },
  {
    icon: ShieldCheck,
    title: "Tư vấn sát bối cảnh sống tại Nhật",
    text: "Đề xuất khác nhau cho người mới sang, người đi làm, du học sinh hoặc gia đình ở lâu dài.",
  },
];

const comparisonRows = [
  {
    name: "eSIM",
    start: "Nhanh nhất",
    monthly: "Thấp - trung bình",
    fit: "Cần dùng sớm, máy hỗ trợ eSIM",
    caution: "Cần kiểm tra model máy",
  },
  {
    name: "SIM vật lý",
    start: "Nhanh",
    monthly: "Thấp - trung bình",
    fit: "Dùng 1 điện thoại, muốn dễ quản lý",
    caution: "Mất thêm bước lắp SIM",
  },
  {
    name: "Pocket WiFi",
    start: "Nhanh",
    monthly: "Trung bình",
    fit: "Di chuyển nhiều, nhiều thiết bị",
    caution: "Cần sạc thiết bị phát",
  },
  {
    name: "Home WiFi",
    start: "Nhanh - trung bình",
    monthly: "Trung bình - khá",
    fit: "Ở nhà thuê, cần mạng sớm",
    caution: "Chất lượng tùy khu vực",
  },
  {
    name: "Hikari",
    start: "Theo lịch khảo sát/lắp đặt",
    monthly: "Khá - cao",
    fit: "Ở lâu dài, ưu tiên ổn định",
    caution: "Có thể chờ triển khai lâu hơn",
  },
];

const forWhom = [
  "Người mới sang Nhật cần internet ngay để liên lạc và làm thủ tục",
  "Du học sinh muốn tối ưu chi phí theo nhu cầu thật",
  "Người đi làm cần ổn định cho công việc online",
  "Gia đình cần giải pháp dùng nhiều thiết bị và bền lâu",
];

const flowSteps = [
  {
    step: "01",
    title: "Gửi nhu cầu nhanh",
    text: "Điền khu vực ở, thiết bị đang dùng, thời gian cần internet.",
  },
  {
    step: "02",
    title: "Nhận 2-3 phương án phù hợp",
    text: "Được so sánh theo tốc độ triển khai, chi phí và mức ổn định.",
  },
  {
    step: "03",
    title: "Chốt phương án và triển khai",
    text: "Chọn giải pháp phù hợp nhất, nhận hướng dẫn đăng ký rõ ràng.",
  },
];

const landingFaqs = [
  {
    q: "Nếu tôi cần internet trong hôm nay thì nên bắt đầu từ đâu?",
    a: "Bạn nên ưu tiên eSIM hoặc SIM vật lý (tùy thiết bị), sau đó đội ngũ sẽ xác nhận phương án nhanh nhất theo khu vực của bạn.",
  },
  {
    q: "Tôi chưa biết nên chọn Pocket WiFi, Home WiFi hay Hikari?",
    a: "Bạn chỉ cần nêu bối cảnh ở tạm hay ở lâu dài, số thiết bị cần dùng và mức ngân sách. Chúng tôi sẽ gợi ý theo từng trường hợp.",
  },
  {
    q: "Tôi có được giải thích trước các khoản phí không?",
    a: "Có. Trước khi bạn quyết định, đội ngũ sẽ giải thích theo nhóm phí ban đầu, phí tháng và các lưu ý triển khai liên quan.",
  },
];

export default function AdsLandingPage() {
  return (
    <main className="bg-[#120913] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-[28%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#ff9a5d]/14 blur-[120px]" />
        <div className="absolute right-[8%] top-[14%] h-56 w-56 rounded-full bg-[#ffbf8c]/10 blur-[90px]" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-20 md:px-8 lg:px-10 lg:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffd6bd]">
            Landing for Ads
          </div>
          <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight md:text-6xl">
            Cần internet tại Nhật nhanh và đúng nhu cầu?
            <span className="block text-[#ffcb9c]">Chúng tôi giúp bạn chọn phương án phù hợp ngay từ đầu.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/78 md:text-lg">
            Tư vấn cho người Việt tại Nhật theo khu vực ở, loại thiết bị, thời gian cần dùng và mức ngân sách. Mục tiêu là giúp bạn có mạng sớm và tránh chọn sai ngay từ bước đầu.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/lien-he?src=lp"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffcb9c,#f08d5c)] px-7 py-4 font-semibold text-[#2b1623] shadow-glow transition hover:-translate-y-0.5"
            >
              Nhận tư vấn miễn phí
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="rounded-full border border-white/20 bg-white/8 px-7 py-4 font-semibold text-white transition hover:bg-white/12"
            >
              Xem giá theo nhu cầu
            </Link>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/7 px-4 py-4 text-sm text-white/80">
              <CheckCircle2 className="mb-2 h-4 w-4 text-[#ffd6bd]" />
              Hỗ trợ tiếng Việt cho người đang sống tại Nhật
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/7 px-4 py-4 text-sm text-white/80">
              <CheckCircle2 className="mb-2 h-4 w-4 text-[#ffd6bd]" />
              Tư vấn theo bối cảnh thật, không tư vấn kiểu chung chung
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/7 px-4 py-4 text-sm text-white/80">
              <CheckCircle2 className="mb-2 h-4 w-4 text-[#ffd6bd]" />
              Có thể bắt đầu từ phương án dùng nhanh rồi tối ưu sau
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#180b17]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Lợi ích chính"
            title="Tập trung vào tốc độ triển khai và độ phù hợp"
            desc="Trang này được thiết kế cho nhu cầu cần internet nhanh, không phải trang đọc thông tin dài."
            dark
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {keyBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-panel backdrop-blur-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb77f]/14">
                    <Icon className="h-5 w-5 text-[#ffd7c0]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[#fff1e6]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/72">{item.text}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/lien-he?src=lp-benefits" className="inline-flex rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-6 py-3 font-semibold text-[#2b1623]">
              Tôi cần tư vấn ngay
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#120913]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="So sánh nhanh"
            title="5 lựa chọn internet phổ biến tại Nhật"
            desc="Dùng bảng này để lọc nhanh phương án trước khi nhận đề xuất chi tiết."
            dark
          />
          <div className="mt-10 overflow-x-auto rounded-[24px] border border-white/10 bg-white/6">
            <table className="min-w-full text-left text-sm text-white/78">
              <thead className="bg-white/9 text-[#ffd8c3]">
                <tr>
                  <th className="px-4 py-4">Loại dịch vụ</th>
                  <th className="px-4 py-4">Bắt đầu dùng</th>
                  <th className="px-4 py-4">Chi phí tháng</th>
                  <th className="px-4 py-4">Phù hợp</th>
                  <th className="px-4 py-4">Lưu ý</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.name} className="border-t border-white/8">
                    <td className="px-4 py-4 font-semibold text-[#fff1e6]">{row.name}</td>
                    <td className="px-4 py-4">{row.start}</td>
                    <td className="px-4 py-4">{row.monthly}</td>
                    <td className="px-4 py-4">{row.fit}</td>
                    <td className="px-4 py-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#180b17]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Dành cho ai"
            title="Phù hợp nếu bạn thuộc một trong các nhóm sau"
            desc="Chúng tôi ưu tiên tư vấn để bạn có internet dùng sớm và đúng nhu cầu thực tế."
            dark
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {forWhom.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/6 px-5 py-4 text-white/78">
                • {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#120913]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Flow đăng ký"
            title="Quy trình ngắn gọn"
            desc="Bạn chỉ cần cung cấp thông tin chính để nhận gợi ý phù hợp."
            dark
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {flowSteps.map((item) => (
              <article key={item.step} className="rounded-[28px] border border-white/10 bg-white/6 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#ffd7c2]">{item.step}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#fff1e6]">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/lien-he?src=lp-flow" className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-6 py-3 font-semibold text-[#2b1623]">
              Bắt đầu đăng ký
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#180b17]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="FAQ nhanh"
            title="Câu hỏi thường gặp trước khi gửi nhu cầu"
            desc="Trả lời ngắn gọn để bạn quyết định nhanh hơn."
            dark
          />
          <div className="mt-10 max-w-4xl">
            <FaqList items={landingFaqs} dark />
          </div>
          <div className="mt-10 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,228,211,0.05))] p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-[#fff1e6] md:text-3xl">
              Cần có internet nhanh tại Nhật? Gửi nhu cầu để được gợi ý ngay.
            </h3>
            <p className="mt-3 max-w-2xl leading-8 text-white/72">
              Chỉ cần điền nơi ở, thiết bị, thời gian cần dùng và mức ngân sách. Đội ngũ sẽ phản hồi phương án phù hợp cho bạn.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/lien-he?src=lp-final" className="inline-flex rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-6 py-3 font-semibold text-[#2b1623]">
                Nhận tư vấn miễn phí
              </Link>
              <Link href="/san-pham" className="inline-flex rounded-full border border-white/20 bg-white/8 px-6 py-3 font-semibold text-white">
                Xem chi tiết sản phẩm
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#140d17] pb-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
          <p className="text-sm leading-7 text-white/55">
            Thông tin chi phí và thời gian triển khai trên trang này mang tính tham khảo ban đầu, được dùng để giúp bạn chọn hướng phù hợp nhanh hơn trước khi nhận tư vấn chi tiết.
          </p>
        </div>
      </section>
    </main>
  );
}

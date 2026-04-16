import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FaqList from "@/components/FaqList";
import NeedSelector from "@/components/NeedSelector";
import { supportFaqs } from "@/data/support";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Internet tại Nhật cho người Việt",
  description:
    "Tư vấn chọn đúng SIM, eSIM, Pocket WiFi, Home WiFi hoặc Hikari theo khu vực, thiết bị, ngân sách và thời gian sử dụng.",
  path: "/",
  keywords: ["internet cho người Việt tại Nhật", "tư vấn internet Nhật Bản"],
});

const trustPillars = [
  "Hỗ trợ người Việt tại Nhật",
  "Giải thích rõ phí ban đầu, phí tháng, ràng buộc",
  "Tư vấn theo khu vực, thiết bị và ngân sách",
  "Đồng hành trước và sau khi đăng ký",
];

const comparisonRows = [
  {
    title: "SIM vật lý",
    forWho: "Dùng 1 điện thoại, cần chi phí gọn",
    start: "Nhanh",
    monthly: "Thấp - trung bình",
    caution: "Cần quản lý SIM vật lý khi đổi máy",
  },
  {
    title: "eSIM",
    forWho: "Thiết bị có eSIM, cần dùng gấp",
    start: "Rất nhanh",
    monthly: "Thấp - trung bình",
    caution: "Phụ thuộc model máy hỗ trợ",
  },
  {
    title: "Pocket WiFi",
    forWho: "Di chuyển nhiều, dùng nhiều thiết bị",
    start: "Nhanh",
    monthly: "Trung bình",
    caution: "Phải sạc thiết bị phát WiFi",
  },
  {
    title: "Home WiFi",
    forWho: "Ở nhà thuê, muốn có mạng sớm",
    start: "Nhanh",
    monthly: "Trung bình - khá",
    caution: "Độ ổn định phụ thuộc vị trí dùng",
  },
  {
    title: "Hikari",
    forWho: "Ở lâu dài, gia đình, làm việc tại nhà",
    start: "Chậm hơn",
    monthly: "Khá - cao",
    caution: "Có thể cần thời gian khảo sát/lắp đặt",
  },
];

const pricingSnapshot = [
  {
    icon: Wallet,
    intent: "Dùng ngay, ít thủ tục",
    option: "eSIM / SIM",
    range: "Chi phí tháng: thấp đến trung bình",
    setup: "Phí ban đầu: thấp",
    timeline: "Bắt đầu dùng: nhanh",
  },
  {
    icon: Sparkles,
    intent: "Ở tạm, chưa kéo cáp",
    option: "Pocket WiFi / Home WiFi",
    range: "Chi phí tháng: trung bình",
    setup: "Phí ban đầu: trung bình",
    timeline: "Bắt đầu dùng: nhanh đến trung bình",
  },
  {
    icon: ShieldCheck,
    intent: "Ở lâu dài, ưu tiên ổn định",
    option: "Hikari",
    range: "Chi phí tháng: khá đến cao",
    setup: "Phí ban đầu: tùy hạ tầng",
    timeline: "Bắt đầu dùng: theo lịch khảo sát/lắp đặt",
  },
];

const realBenefits = [
  "Tư vấn theo khu vực sống tại Nhật và tình trạng nhà ở",
  "Giải thích minh bạch phí ban đầu, phí tháng, điều kiện hợp đồng",
  "Gợi ý khác nhau cho du học sinh, người đi làm, gia đình, khách ngắn hạn",
  "Có lộ trình dùng tạm trước rồi tối ưu sau nếu chưa chắc ở lâu dài",
];

const purchaseFlow = [
  {
    step: "01",
    title: "Thu thập nhu cầu thực tế",
    text: "Xác định thiết bị, khu vực, thời gian sử dụng, mức ngân sách và mức độ cần gấp.",
  },
  {
    step: "02",
    title: "So sánh 2-3 phương án phù hợp",
    text: "Giải thích rõ điểm mạnh, điểm cần lưu ý, chi phí tham khảo và thời gian bắt đầu dùng.",
  },
  {
    step: "03",
    title: "Chốt phương án phù hợp nhất",
    text: "Ưu tiên phương án phù hợp bối cảnh hiện tại thay vì cố ép theo một sản phẩm cố định.",
  },
  {
    step: "04",
    title: "Hỗ trợ đăng ký và theo dõi",
    text: "Đồng hành trong quá trình đăng ký và xử lý các câu hỏi phát sinh ban đầu.",
  },
];

const caseStudies = [
  {
    title: "Khách mới chuyển nhà tại Tokyo",
    need: "Cần internet sớm, chưa chắc ở lâu dài",
    solution: "Đề xuất Home WiFi để dùng ngay, hẹn đánh giá lại Hikari sau 1-2 tháng",
    result: "Có mạng dùng sớm, không phải chờ thi công dài",
  },
  {
    title: "Du học sinh cần dùng 1 điện thoại",
    need: "Ưu tiên gói gọn chi phí, ít thủ tục",
    solution: "Đề xuất SIM/eSIM theo thiết bị hỗ trợ",
    result: "Triển khai nhanh, dễ quản lý chi phí hàng tháng",
  },
  {
    title: "Gia đình làm việc tại nhà ở Saitama",
    need: "Nhiều thiết bị, ưu tiên ổn định lâu dài",
    solution: "Đề xuất lộ trình Hikari và phương án dùng tạm khi chờ lắp đặt",
    result: "Ổn định cho sinh hoạt và làm việc sau khi hoàn tất triển khai",
  },
];

const quickGuides = [
  "Mới sang Nhật nên chọn gì để có mạng nhanh",
  "Chuyển nhà: nên dùng Home WiFi hay Hikari",
  "Ở một mình vs gia đình: cách chọn gói phù hợp",
];

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["vi", "ja"],
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <section className="relative overflow-hidden bg-hero-v3 text-white">
        <div className="absolute left-1/2 top-[34%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#ff9a5d]/16 blur-[120px]" />
        <div className="absolute right-[12%] top-[16%] h-52 w-52 rounded-full bg-[#ffbf8c]/12 blur-[90px]" />
        <div className="absolute left-[10%] top-[18%] h-40 w-40 rounded-full bg-[#d05d9f]/16 blur-[80px]" />

        <div className="mx-auto max-w-7xl px-4 py-24 text-center md:px-8 lg:px-10 lg:py-28">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm text-[#ffd6bd] backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Internet tại Nhật cho người Việt
          </div>

          <h1 className="mx-auto mt-7 max-w-5xl text-5xl font-semibold leading-[1.04] md:text-7xl lg:text-[5.2rem]">
            Tư vấn chọn đúng
            <span className="text-[#ffcb9c]"> SIM / eSIM / Pocket WiFi / Home WiFi / Hikari</span>
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-white/78 md:text-xl">
            Gợi ý theo nơi ở, thời gian sử dụng, loại thiết bị, ngân sách và mức độ cần gấp. Mục tiêu là giúp bạn chọn phương án phù hợp và tránh phát sinh không cần thiết.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffcb9c,#f08d5c)] px-7 py-4 font-semibold text-[#2b1623] shadow-glow transition hover:-translate-y-0.5"
            >
              Nhận tư vấn miễn phí
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/6 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Xem giá theo nhu cầu
            </Link>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 xl:grid-cols-4">
            {trustPillars.map((item) => (
              <div key={item} className="rounded-[24px] border border-white/10 bg-white/8 px-4 py-4 text-left text-sm leading-7 text-[#ffe7d8]">
                <CheckCircle2 className="mb-2 h-4 w-4 text-[#ffcb9c]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <NeedSelector />

      <section className="relative overflow-hidden bg-[#1b0d1a] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,174,100,0.10),transparent_20%),radial-gradient(circle_at_80%_30%,rgba(176,66,131,0.12),transparent_22%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="So sánh nhanh"
            title="5 lựa chọn internet theo đúng bối cảnh sử dụng"
            desc="Bạn có thể dùng bảng này để lọc nhanh phương án phù hợp trước khi đi vào tư vấn chi tiết."
            dark
            center
          />
          <div className="mt-12 overflow-x-auto rounded-[28px] border border-white/10 bg-white/6">
            <table className="min-w-full text-left text-sm text-white/80">
              <thead className="bg-white/10 text-[#ffe4d2]">
                <tr>
                  <th className="px-4 py-4">Loại dịch vụ</th>
                  <th className="px-4 py-4">Phù hợp với ai</th>
                  <th className="px-4 py-4">Thời gian bắt đầu dùng</th>
                  <th className="px-4 py-4">Chi phí tháng</th>
                  <th className="px-4 py-4">Lưu ý</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.title} className="border-t border-white/8">
                    <td className="px-4 py-4 font-semibold text-[#fff2e8]">{row.title}</td>
                    <td className="px-4 py-4">{row.forWho}</td>
                    <td className="px-4 py-4">{row.start}</td>
                    <td className="px-4 py-4">{row.monthly}</td>
                    <td className="px-4 py-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#160915] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,156,89,0.12),transparent_20%),radial-gradient(circle_at_88%_24%,rgba(255,133,95,0.10),transparent_18%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Pricing snapshot"
            title="Khung chi phí để bạn hình dung trước khi liên hệ"
            desc="Đây là mức phân nhóm tham khảo. Báo giá cuối cùng sẽ phụ thuộc vào nhà mạng, khu vực và điều kiện triển khai."
            dark
            center
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingSnapshot.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.intent} className="rounded-[30px] border border-white/10 bg-white/6 p-7 shadow-panel backdrop-blur-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb77f]/14">
                    <Icon className="h-5 w-5 text-[#ffd7c0]" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.26em] text-[#ffd6c0]">{item.intent}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#fff1e6]">{item.option}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-white/72">
                    <li>• {item.range}</li>
                    <li>• {item.setup}</li>
                    <li>• {item.timeline}</li>
                  </ul>
                </article>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/pricing" className="rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-6 py-3 font-semibold text-[#2b1623]">
              So sánh 3 phương án
            </Link>
            <Link href="/lien-he" className="rounded-full border border-white/20 bg-white/8 px-6 py-3 font-semibold text-white">
              Tôi cần internet sớm
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#180b17] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,176,105,0.11),transparent_24%),radial-gradient(circle_at_82%_80%,rgba(188,78,140,0.10),transparent_20%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Vì sao chọn chúng tôi"
            title="Những giá trị tư vấn thực tế, không chỉ là lời quảng cáo"
            desc="Tập trung vào thông tin giúp bạn ra quyết định nhanh, rõ và phù hợp điều kiện sống tại Nhật."
            dark
            center
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {realBenefits.map((item) => (
              <div key={item} className="rounded-[28px] border border-white/10 bg-white/6 p-6 shadow-panel backdrop-blur-xl">
                <p className="leading-7 text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#160915] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(255,160,91,0.13),transparent_16%),radial-gradient(circle_at_14%_82%,rgba(174,68,130,0.11),transparent_20%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Quy trình đăng ký"
            title="4 bước để đi từ nhu cầu đến phương án phù hợp"
            desc="Quy trình ngắn gọn để bạn có thể bắt đầu nhanh nhưng vẫn nắm rõ chi phí và lưu ý."
            dark
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {purchaseFlow.map((item) => (
              <div key={item.step} className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-6 backdrop-blur-xl shadow-[0_20px_54px_rgba(26,8,16,0.26)]">
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffd9c4]">{item.step}</div>
                <h3 className="mt-4 text-2xl font-semibold text-[#fff1e6]">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#180b17] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Case thực tế"
            title="Một số tình huống tư vấn điển hình"
            desc="Dạng trình bày theo tình huống giúp bạn thấy rõ phương án nào phù hợp với bối cảnh của mình."
            dark
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {caseStudies.map((item) => (
              <article key={item.title} className="rounded-[30px] border border-white/10 bg-white/6 p-7 backdrop-blur-xl shadow-panel">
                <h3 className="text-xl font-semibold text-[#fff1e6]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70"><span className="font-semibold text-[#ffd8c3]">Nhu cầu:</span> {item.need}</p>
                <p className="mt-2 text-sm leading-7 text-white/70"><span className="font-semibold text-[#ffd8c3]">Gợi ý:</span> {item.solution}</p>
                <p className="mt-2 text-sm leading-7 text-white/70"><span className="font-semibold text-[#ffd8c3]">Kết quả:</span> {item.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#160915] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Hướng dẫn chọn nhanh"
            title="Nội dung đọc nhanh trước khi liên hệ"
            desc="Thay cho mục tin tức chung, phần này tập trung vào các câu hỏi chọn dịch vụ thường gặp."
            dark
            center
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {quickGuides.map((item) => (
              <div key={item} className="rounded-[24px] border border-white/10 bg-white/6 p-6 text-white/78">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#190b18] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,164,96,0.12),transparent_18%),radial-gradient(circle_at_84%_72%,rgba(178,70,133,0.10),transparent_20%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="FAQ"
            title="Câu hỏi phổ biến trước khi đăng ký"
            desc="Các câu trả lời nhanh để bạn hiểu rõ hơn về lựa chọn internet và bước tiếp theo."
            dark
            center
          />
          <div className="mx-auto mt-10 max-w-4xl">
            <FaqList items={supportFaqs.slice(0, 6)} />
          </div>

          <div className="mt-16 rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,228,211,0.05))] p-8 shadow-[0_28px_80px_rgba(22,7,16,0.34)] backdrop-blur-xl md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <h3 className="text-3xl font-semibold md:text-4xl">Bạn đã có nhu cầu cụ thể? Gửi thông tin để nhận tư vấn phù hợp.</h3>
                <p className="mt-4 max-w-2xl leading-8 text-white/74">
                  Mô tả nhanh nơi ở, thiết bị, thời gian sử dụng và ngân sách. Đội ngũ sẽ phản hồi phương án phù hợp để bạn so sánh và quyết định dễ hơn.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/lien-he" className="rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-6 py-4 font-semibold text-[#2b1623] shadow-glow">
                  Gửi nhu cầu để được tư vấn
                </Link>
                <Link href="/san-pham" className="rounded-full border border-white/20 bg-white/8 px-6 py-4 font-semibold text-white">
                  Xem chi tiết từng sản phẩm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#140d17] pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
          <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 md:p-8">
            <p className="text-sm leading-7 text-white/60">
              Lưu ý: Khung chi phí và thời gian triển khai trên trang chủ là thông tin tham khảo để định hướng ban đầu. Báo giá và thời gian thực tế sẽ được xác nhận theo khu vực, nhà mạng và điều kiện hạ tầng tại thời điểm tư vấn.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

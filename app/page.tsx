import Link from "next/link";
import { ArrowRight, Newspaper, Quote, ShieldCheck, Sparkles, Star, UserRoundCheck } from "lucide-react";
import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FaqList from "@/components/FaqList";
import { products } from "@/data/products";
import { supportFaqs } from "@/data/support";
import { buildMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Internet tại Nhật cho người Việt",
  description:
    "Tư vấn chọn SIM, eSIM, Pocket WiFi, Home WiFi và Hikari theo nhu cầu thực tế tại Nhật. Rõ ràng, nhanh gọn và đáng tin cậy.",
  path: "/",
  keywords: ["internet cho người Việt tại Nhật", "tư vấn internet Nhật Bản"],
});

const newsItems = [
  {
    title: "Cập nhật lựa chọn internet mới tại Nhật",
    text: "Theo dõi nhanh những thay đổi về xu hướng SIM, WiFi tại nhà và giải pháp phù hợp cho người mới sang Nhật.",
  },
  {
    title: "Mẹo chọn dịch vụ theo thiết bị và nhu cầu",
    text: "Nội dung ngắn gọn, dễ hiểu để khách hàng nắm được nên chọn SIM, Pocket WiFi hay Hikari trong từng trường hợp.",
  },
  {
    title: "Thông tin ưu đãi và gợi ý sử dụng thực tế",
    text: "Tổng hợp những thông tin nên biết trước khi đăng ký để việc lựa chọn trở nên nhanh, rõ ràng và an tâm hơn.",
  },
];

const benefits = [
  {
    icon: UserRoundCheck,
    title: "Tư vấn sát nhu cầu",
    text: "Đội ngũ hỗ trợ dựa trên thiết bị, thời gian dùng, nơi ở và thói quen sử dụng để gợi ý đúng giải pháp.",
  },
  {
    icon: ShieldCheck,
    title: "Thông tin rõ ràng, dễ hiểu",
    text: "Mỗi sản phẩm được trình bày gọn, đủ ý và thân thiện để khách hàng nắm được điểm khác nhau ngay từ lần xem đầu tiên.",
  },
  {
    icon: Sparkles,
    title: "Giao diện ấm áp, đáng tin",
    text: "Thiết kế mang cảm giác cao cấp nhưng gần gũi, giúp khách hàng muốn nán lại đọc thêm và tìm hiểu sâu hơn.",
  },
  {
    icon: Star,
    title: "Hỗ trợ chốt nhanh hơn",
    text: "Nội dung được sắp xếp theo hành trình mua hàng tự nhiên: xem sản phẩm, hiểu nhu cầu, so sánh và liên hệ tư vấn.",
  },
];

const purchaseFlow = [
  {
    step: "01",
    title: "Chia sẻ nhu cầu sử dụng",
    text: "Khách hàng cho biết thiết bị đang dùng, thời gian sử dụng, khu vực sinh sống hoặc kiểu kết nối đang cần.",
  },
  {
    step: "02",
    title: "Nhận gợi ý phù hợp",
    text: "Đội ngũ đối chiếu giữa SIM vật lý, eSIM, Pocket WiFi, Home WiFi và Hikari để đưa ra hướng phù hợp nhất.",
  },
  {
    step: "03",
    title: "So sánh và chốt phương án",
    text: "Khách hàng được giải thích rõ điểm khác nhau, chi phí tham khảo và những lưu ý trước khi quyết định.",
  },
  {
    step: "04",
    title: "Hỗ trợ đăng ký nhanh gọn",
    text: "Sau khi đã chọn đúng hướng, đội ngũ tiếp tục hỗ trợ các bước liên hệ và đăng ký theo giải pháp đã thống nhất.",
  },
];

const testimonials = [
  {
    name: "Yuki Tanaka",
    role: "Khách hàng tại Tokyo",
    quote:
      "Tôi cần internet nhanh ngay sau khi chuyển nhà. Nhờ được tư vấn rõ giữa Home WiFi và Hikari, việc quyết định trở nên rất dễ.",
  },
  {
    name: "Mai Lan",
    role: "Khách hàng tại Osaka",
    quote:
      "Cách trình bày rất dễ hiểu. Tôi xem xong là biết mình nên chọn eSIM thay vì SIM vật lý, tiết kiệm được khá nhiều thời gian.",
  },
  {
    name: "Huy Nguyễn",
    role: "Khách hàng tại Saitama",
    quote:
      "Trang web cho cảm giác đáng tin và lịch sự. Phần tư vấn giúp tôi hiểu rõ loại dịch vụ nào hợp với gia đình hơn là tự đoán.",
  },
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
            Global Internet 5G · Kết nối và tư vấn internet tại Nhật
          </div>

          <h1 className="mx-auto mt-7 max-w-5xl text-5xl font-semibold leading-[1.04] md:text-7xl lg:text-[5.2rem]">
            Global Internet 5G mang đến giải pháp internet tại Nhật với trải nghiệm
            <span className="text-[#ffcb9c]"> premium</span>, rõ ràng, ấm áp và đáng tin cậy.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
            Chúng tôi đồng hành cùng khách hàng trong việc chọn đúng SIM vật lý, eSIM, Pocket WiFi, Home WiFi hoặc Hikari theo thiết bị, thời gian sử dụng và nhu cầu thực tế tại Nhật.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffcb9c,#f08d5c)] px-7 py-4 font-semibold text-[#2b1623] shadow-glow transition hover:-translate-y-0.5"
            >
              Nhận tư vấn ngay
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/6 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Xem bảng giá
            </Link>
          </div>

          <div className="mx-auto mt-14 max-w-5xl rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,224,203,0.05))] p-6 shadow-[0_28px_80px_rgba(32,12,25,0.45)] backdrop-blur-2xl md:p-8">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-[28px] border border-white/10 bg-white/8 p-5 text-left">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffd5be]">SIM & eSIM</div>
                <p className="mt-3 text-xl font-semibold text-white">Giải pháp cá nhân</p>
                <p className="mt-3 leading-7 text-white/72">Tối ưu cho người cần internet nhanh, gọn và linh hoạt theo thiết bị đang dùng.</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/8 p-5 text-left">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffd5be]">Pocket / Home WiFi</div>
                <p className="mt-3 text-xl font-semibold text-white">Kết nối hằng ngày</p>
                <p className="mt-3 leading-7 text-white/72">Phù hợp cho nhu cầu đi lại nhiều thiết bị hoặc cần dùng internet tại nhà thật nhanh.</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/8 p-5 text-left">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffd5be]">Hikari Fiber</div>
                <p className="mt-3 text-xl font-semibold text-white">Ổn định lâu dài</p>
                <p className="mt-3 leading-7 text-white/72">Lựa chọn dành cho gia đình hoặc khách hàng muốn đầu tư nghiêm túc cho internet tại nhà.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#180b17] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(255,160,91,0.12),transparent_18%),radial-gradient(circle_at_90%_20%,rgba(255,122,88,0.10),transparent_16%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="NEWS"
            title="Tin tức và cập nhật đáng chú ý"
            desc="Theo dõi những nội dung mới nhất về lựa chọn internet tại Nhật, mẹo sử dụng thực tế và thông tin hữu ích trước khi đăng ký."
            dark
            center
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(28,8,18,0.28)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb77f]/14 text-[#ffd6bc]">
                  <Newspaper className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-[#fff1e6]">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1b0d1a] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,174,100,0.10),transparent_20%),radial-gradient(circle_at_80%_30%,rgba(176,66,131,0.12),transparent_22%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Sản phẩm"
            title="Danh mục sản phẩm chính"
            desc="Mỗi nhóm sản phẩm được giới thiệu ngắn gọn để khách hàng nắm nhanh mình nên bắt đầu từ lựa chọn nào."
            dark
            center
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {products.map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="group rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.05))] p-6 backdrop-blur-xl shadow-[0_20px_50px_rgba(25,7,18,0.26)] transition duration-300 hover:-translate-y-1 hover:border-[#ffbc92]/40"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ffd8c1]">{product.badge}</div>
                <h3 className="mt-4 text-2xl font-semibold text-[#fff1e6]">{product.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{product.summary}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#ffccad] transition group-hover:translate-x-1">
                  Xem chi tiết
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#160915] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,156,89,0.12),transparent_20%),radial-gradient(circle_at_88%_24%,rgba(255,133,95,0.10),transparent_18%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Tại sao chọn chúng tôi"
            title="Lý do nhiều khách hàng thích cách Global Internet 5G tư vấn"
            desc="Từ cách trình bày tới nội dung hỗ trợ, mọi phần đều được xây để khách hàng thấy dễ hiểu, dễ tin và dễ quyết định hơn."
            dark
            center
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[30px] border border-white/10 bg-white/6 p-7 backdrop-blur-xl shadow-[0_22px_60px_rgba(23,7,16,0.3)] transition duration-300 hover:-translate-y-1 hover:border-[#ffbc92]/35">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb77f]/14">
                    <Icon className="h-5 w-5 text-[#ffd7c0]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-[#fff1e6]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/72">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#180b17] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,176,105,0.11),transparent_24%),radial-gradient(circle_at_82%_80%,rgba(188,78,140,0.10),transparent_20%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Flow mua hàng"
            title="Hành trình lựa chọn được sắp xếp rõ ràng"
            desc="Khách hàng chỉ cần đi theo từng bước đơn giản: nêu nhu cầu, xem gợi ý, so sánh phương án và nhận tư vấn phù hợp."
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

      <section className="relative overflow-hidden bg-[#160915] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(255,160,91,0.13),transparent_16%),radial-gradient(circle_at_14%_82%,rgba(174,68,130,0.11),transparent_20%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Đánh giá khách hàng"
            title="Cảm nhận từ những khách hàng đã được tư vấn"
            desc="Sự tin tưởng đến từ việc được giải thích rõ ràng, chọn đúng sản phẩm và cảm thấy an tâm trong quá trình liên hệ."
            dark
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.05))] p-7 backdrop-blur-xl shadow-[0_22px_60px_rgba(22,7,16,0.32)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#fff1e6]">{item.name}</h3>
                    <p className="mt-1 text-sm text-[#ffd7c2]/72">{item.role}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffb67e]/14">
                    <Quote className="h-5 w-5 text-[#ffd7c2]" />
                  </div>
                </div>
                <div className="mt-5 flex gap-1 text-[#ffbf91]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 leading-7 text-white/74">“{item.quote}”</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#190b18] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,164,96,0.12),transparent_18%),radial-gradient(circle_at_84%_72%,rgba(178,70,133,0.10),transparent_20%)]" />
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Câu hỏi thường gặp"
            title="Một vài điều khách hàng thường quan tâm trước khi đăng ký"
            desc="Đây là phần giúp khách hàng gỡ nhanh những băn khoăn phổ biến trước khi đi tới trang liên hệ để được hỗ trợ chi tiết hơn."
            dark
            center
          />
          <div className="mx-auto mt-10 max-w-4xl">
            <FaqList items={supportFaqs.slice(0, 4)} />
          </div>

          <div className="mt-16 rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,228,211,0.05))] p-8 shadow-[0_28px_80px_rgba(22,7,16,0.34)] backdrop-blur-xl md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-[#ffd4bc]">
                  <Sparkles className="h-4 w-4" />
                  Sẵn sàng kết nối tại Nhật
                </div>
                <h3 className="mt-4 text-3xl font-semibold md:text-4xl">Hãy để đội ngũ Global Internet 5G đồng hành cùng Quý khách trong việc chọn đúng giải pháp internet.</h3>
                <p className="mt-4 max-w-2xl leading-8 text-white/74">
                  Chỉ cần chia sẻ nhu cầu sử dụng, thiết bị và thời gian dự kiến. Chúng tôi sẽ hỗ trợ Quý khách lọc nhanh phương án phù hợp, rõ ràng và dễ quyết định hơn.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/lien-he" className="rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-6 py-4 font-semibold text-[#2b1623] shadow-glow">
                  Nhận tư vấn ngay
                </Link>
                <Link href="/san-pham" className="rounded-full border border-white/20 bg-white/8 px-6 py-4 font-semibold text-white">
                  Xem sản phẩm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

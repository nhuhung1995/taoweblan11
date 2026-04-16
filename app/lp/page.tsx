import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, CircleDollarSign, Clock3, ShieldCheck } from "lucide-react";
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
    <main className="bg-[#f7f7fb] text-[#101014]">
      <section className="border-b-2 border-black bg-[#d70035] px-4 py-2 text-center text-[11px] font-black uppercase tracking-[0.18em] text-white md:text-xs">
        Campaign 2026: Ho tro tieng Viet • Co phuong an dung nhanh • Tu van theo nhu cau that
      </section>

      <section className="relative overflow-hidden border-b-4 border-black bg-white">
        <div className="absolute left-1/2 top-[28%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#005bac]/10 blur-[120px]" />
        <div className="absolute right-[8%] top-[14%] h-56 w-56 rounded-full bg-[#ffcc00]/20 blur-[80px]" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 md:px-8 lg:px-10 lg:pt-20">
          <div className="inline-flex -rotate-2 items-center gap-2 border-2 border-black bg-[#ffcc00] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-black shadow-[4px_4px_0_#000]">
            Japan internet fast-start
          </div>
          <h1 className="mt-6 max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight text-[#0f172a] md:text-6xl">
            Can internet tai Nhat nhanh?
            <span className="block text-[#005bac]">Chon dung loai ket noi ngay tu dau.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-[#334155] md:text-lg">
            Danh cho nguoi Viet dang song tai Nhat. Chung toi giup ban chon eSIM, SIM, Pocket WiFi, Home WiFi hoac Hikari theo thoi gian can dung, khu vuc o va ngan sach.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/lien-he?src=lp"
              className="inline-flex items-center gap-2 border-2 border-black bg-[#005bac] px-7 py-4 text-sm font-black uppercase tracking-[0.1em] text-white shadow-[5px_5px_0_#000] transition hover:-translate-y-0.5"
            >
              Nhan tu van mien phi
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-black bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.1em] text-black shadow-[5px_5px_0_#000] transition hover:bg-[#f8fafc]"
            >
              Xem gia theo nhu cau
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="border-2 border-black bg-white px-4 py-4 text-sm font-bold text-[#1f2937] shadow-[4px_4px_0_#000]">
              <CheckCircle2 className="mb-2 h-4 w-4 text-[#005bac]" />
              Ho tro tieng Viet cho nguoi Viet dang song tai Nhat
            </div>
            <div className="border-2 border-black bg-white px-4 py-4 text-sm font-bold text-[#1f2937] shadow-[4px_4px_0_#000]">
              <CheckCircle2 className="mb-2 h-4 w-4 text-[#005bac]" />
              Giai thich ro chi phi truoc khi ban quyet dinh
            </div>
            <div className="border-2 border-black bg-white px-4 py-4 text-sm font-bold text-[#1f2937] shadow-[4px_4px_0_#000]">
              <CheckCircle2 className="mb-2 h-4 w-4 text-[#005bac]" />
              Co phuong an dung nhanh truoc, toi uu sau
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7fb]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Loi ich chinh"
            title="3 dieu quan trong nhat khi can internet nhanh tai Nhat"
            desc="Khong vong vo marketing. Chi tap trung vao toc do, chi phi va su phu hop."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {keyBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="border-2 border-black bg-white p-6 shadow-[6px_6px_0_#000]">
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-[#eaf4ff]">
                    <Icon className="h-5 w-5 text-[#005bac]" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black uppercase text-[#0f172a]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#374151]">{item.text}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-8">
            <Link href="/lien-he?src=lp-benefits" className="inline-flex border-2 border-black bg-[#d70035] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[4px_4px_0_#000]">
              Toi can tu van ngay
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y-4 border-black bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Quick comparison"
            title="So sanh nhanh 5 lua chon pho bien"
            desc="Ban nhin bang nay la biet nen di huong nao truoc."
          />
          <div className="mt-10 overflow-x-auto border-2 border-black">
            <table className="min-w-full text-left text-sm text-[#1f2937]">
              <thead className="bg-[#005bac] text-white">
                <tr>
                  <th className="px-4 py-4 uppercase">Loai dich vu</th>
                  <th className="px-4 py-4 uppercase">Bat dau dung</th>
                  <th className="px-4 py-4 uppercase">Chi phi thang</th>
                  <th className="px-4 py-4 uppercase">Phu hop</th>
                  <th className="px-4 py-4 uppercase">Luu y</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr key={row.name} className={`border-t border-black/20 ${idx % 2 === 0 ? "bg-[#f8fbff]" : "bg-white"}`}>
                    <td className="px-4 py-4 font-black text-[#0f172a]">{row.name}</td>
                    <td className="px-4 py-4">{row.start}</td>
                    <td className="px-4 py-4">{row.monthly}</td>
                    <td className="px-4 py-4">{row.fit}</td>
                    <td className="px-4 py-4">{row.caution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/lien-he?src=lp-table" className="inline-flex items-center gap-2 border-2 border-black bg-[#005bac] px-5 py-3 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[4px_4px_0_#000]">
              Chon nhanh theo nhu cau
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7fb]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Who is this for"
            title="Dich vu nay hop voi ban neu..."
            desc="Mot trong cac tinh huong duoi day dung voi ban."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {forWhom.map((item) => (
              <div key={item} className="border-2 border-black bg-white px-5 py-4 font-semibold text-[#1f2937] shadow-[4px_4px_0_#000]">
                • {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y-4 border-black bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Flow dang ky"
            title="3 buoc dang ky ngan gon"
            desc="Khong can thao tac phuc tap. Chi can thong tin can thiet."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {flowSteps.map((item) => (
              <article key={item.step} className="border-2 border-black bg-[#f8fbff] p-6 shadow-[5px_5px_0_#000]">
                <p className="text-sm font-black uppercase tracking-[0.26em] text-[#d70035]">{item.step}</p>
                <h3 className="mt-3 text-xl font-black uppercase text-[#0f172a]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#334155]">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/lien-he?src=lp-flow" className="inline-flex items-center gap-2 border-2 border-black bg-[#d70035] px-6 py-3 text-xs font-black uppercase tracking-[0.08em] text-white shadow-[4px_4px_0_#000]">
              Bat dau dang ky
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7fb]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="FAQ nhanh"
            title="Hoi dap truoc khi gui nhu cau"
            desc="Tra loi truc dien de ban ra quyet dinh nhanh."
          />
          <div className="mt-10 max-w-4xl">
            <FaqList items={landingFaqs} />
          </div>
          <div className="mt-10 border-2 border-black bg-[#005bac] p-6 shadow-[7px_7px_0_#000] md:p-8">
            <h3 className="text-2xl font-black uppercase text-white md:text-3xl">
              Can internet nhanh tai Nhat? Gui nhu cau ngay.
            </h3>
            <p className="mt-3 max-w-2xl leading-8 text-white/85">
              Dien nhanh thong tin khu vuc, thiet bi va thoi gian can dung. Ban se nhan goi y phuong an phu hop.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/lien-he?src=lp-final" className="inline-flex border-2 border-black bg-[#ffcc00] px-6 py-3 text-xs font-black uppercase tracking-[0.08em] text-black shadow-[4px_4px_0_#000]">
                Nhan tu van mien phi
              </Link>
              <Link href="/san-pham" className="inline-flex border-2 border-white bg-transparent px-6 py-3 text-xs font-black uppercase tracking-[0.08em] text-white">
                Xem chi tiet san pham
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-14 text-[#334155]">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10">
          <p className="text-sm leading-7">
            Luu y: thong tin chi phi va thoi gian tren trang nay la khung tham khao ban dau de ban loc huong phu hop nhanh hon.
          </p>
        </div>
      </section>
    </main>
  );
}

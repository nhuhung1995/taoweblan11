import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import FaqList from "@/components/FaqList";

type Benefit = { title: string; text: string };
type FAQ = { q: string; a: string };

export default function ProductDetailTemplate({
  eyebrow,
  title,
  desc,
  panelTitle,
  panelBullets,
  benefits,
  audience,
  compareTitle,
  compareText,
  faqs,
  icon,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  panelTitle: string;
  panelBullets: string[];
  benefits: Benefit[];
  audience: string[];
  compareTitle: string;
  compareText: string;
  faqs: FAQ[];
  icon: "sim" | "esim" | "pocket" | "home" | "fiber";
}) {
  return (
    <main>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        desc={desc}
        panelTitle={panelTitle}
        panelBullets={panelBullets}
        icon={icon}
        primaryHref="/lien-he"
        secondaryHref="/pricing"
        secondaryLabel="Xem bảng giá"
      />

      <section className="bg-[#120913] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Lợi ích nổi bật"
            title="Điểm nổi bật của dịch vụ"
            desc="Mỗi sản phẩm đều được chọn lọc và trình bày theo cách giúp Quý khách nhanh chóng hiểu rõ lợi ích trước khi quyết định."
            dark
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-[30px] border border-white/10 bg-white/6 p-7 shadow-panel backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#ffbc92]/35">
                <h3 className="text-2xl font-semibold text-[#fff1e6]">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#180b17] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <SectionTitle
            eyebrow="Phù hợp với ai"
            title="Những trường hợp nên cân nhắc"
            desc="Nếu Quý khách đang ở trong những bối cảnh dưới đây, đây có thể là giải pháp rất đáng tham khảo."
            dark
          />
          <div className="grid gap-4">
            {audience.map((item) => (
              <div key={item} className="rounded-[24px] border border-white/10 bg-white/6 px-5 py-4 text-white/74 shadow-soft backdrop-blur">• {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#120913] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle eyebrow="Gợi ý lựa chọn" title={compareTitle} desc={compareText} dark />
          <div className="mt-10 rounded-[36px] border border-white/10 bg-white/6 p-8 backdrop-blur-xl md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <h3 className="text-3xl font-semibold md:text-4xl">Cần hỗ trợ chọn đúng phương án? Đội ngũ luôn sẵn sàng đồng hành cùng Quý khách.</h3>
                <p className="mt-4 max-w-2xl leading-8 text-white/72">
                  Nếu Quý khách vẫn đang phân vân giữa nhiều lựa chọn, hãy gửi nhu cầu thực tế để được gợi ý nhanh gọn, đúng trọng tâm và phù hợp hơn.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 lg:justify-end">
                <Link href="/lien-he" className="rounded-full bg-[#ffe8d8] px-6 py-4 font-semibold text-[#2b1623]">Đi tới Liên hệ</Link>
                <Link href="/san-pham" className="rounded-full border border-white/20 bg-white/8 px-6 py-4 font-semibold text-white">Quay về Sản phẩm</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#180b17] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle
            eyebrow="Câu hỏi thường gặp"
            title="Những điều khách hàng thường hỏi"
            desc="Các câu hỏi dưới đây giúp Quý khách hiểu nhanh hơn trước khi đi tới bước liên hệ và đăng ký."
            dark
          />
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import PageHero from "@/components/PageHero";
import ContactCard from "@/components/ContactCard";
import SectionTitle from "@/components/SectionTitle";
import FaqList from "@/components/FaqList";

const contactFaqs = [
  { q: "Gửi form xong sẽ được phản hồi như thế nào?", a: "Sau khi nhận nhu cầu, đội ngũ sẽ phân loại sản phẩm phù hợp và phản hồi theo kênh Quý khách để lại như điện thoại, LINE hoặc email." },
  { q: "Nếu chưa biết nên chọn SIM hay WiFi thì sao?", a: "Quý khách chỉ cần mô tả bối cảnh sử dụng, thiết bị và thời gian dùng. Phần còn lại sẽ được hỗ trợ lọc theo nhu cầu thực tế." },
  { q: "Trang liên hệ này phù hợp cho cá nhân hay gia đình?", a: "Cả hai. Nội dung được viết để phục vụ từ người dùng cá nhân, người đi làm, du học đến gia đình sống lâu dài tại Nhật." },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Liên hệ"
        title="Liên hệ thuận tiện, rõ ràng và dễ điền"
        desc="Global Internet 5G ưu tiên một form trình bày dễ nhìn, đủ thông tin và lịch sự để Quý khách có thể gửi nhu cầu một cách nhanh chóng."
        panelTitle="Liên hệ & tư vấn"
        panelBullets={["Tư vấn qua điện thoại", "Hỗ trợ LINE / chat", "Lọc sản phẩm theo nhu cầu thực tế"]}
        icon="global"
        primaryLabel="Gửi yêu cầu tư vấn"
        primaryHref="/lien-he"
        secondaryLabel="Xem Sản phẩm"
        secondaryHref="/san-pham"
      />
      <section className="bg-[#120913] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <ContactCard />
        </div>
      </section>
      <section className="bg-[#180b17] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle eyebrow="Câu hỏi thường gặp" title="Giải đáp nhanh trước khi gửi form" desc="Một vài câu hỏi cuối cùng thường xuất hiện ngay trước lúc khách hàng quyết định có gửi form hay không." dark />
          <div className="mt-10">
            <FaqList items={contactFaqs} />
          </div>
        </div>
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Danh mục sản phẩm",
  description:
    "Khám phá đầy đủ SIM vật lý, eSIM, Pocket WiFi, Home WiFi và Hikari để chọn giải pháp internet phù hợp tại Nhật.",
  path: "/san-pham",
});

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Product Hub"
        title="Sản phẩm được chia rõ để khách xem là hiểu"
        desc="Thay vì dồn mọi thứ vào một trang rối, Global Internet 5G phân tách từng nhóm sản phẩm thành từng tuyến xem riêng, từ đó tư vấn nhanh và chốt tốt hơn."
        panelTitle="Danh mục sản phẩm"
        panelBullets={["SIM vật lý", "eSIM", "Pocket WiFi", "Home WiFi", "Hikari"]}
        icon="global"
      />
      <section className="bg-[#fff8f4]">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
          <SectionTitle eyebrow="Catalog" title="Toàn bộ nhóm dịch vụ" desc="Trang hub này giúp khách xem nhanh toàn cảnh, sau đó rẽ sang từng trang chi tiết tùy theo sản phẩm phù hợp nhất." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.title} title={product.title} summary={product.summary} href={product.href} icon={product.icon} bullets={product.bullets} badge={product.badge} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

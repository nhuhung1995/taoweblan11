import type { Metadata } from "next";
import ProductDetailTemplate from "@/components/ProductDetailTemplate";
import { products } from "@/data/products";
import { buildMetadata } from "@/lib/seo";

const product = products.find((item) => item.title === "eSIM")!;

export const metadata: Metadata = buildMetadata({
  title: "eSIM tại Nhật",
  description: product.summary,
  path: product.href,
});

export default function Page() {
  return (
    <ProductDetailTemplate
      eyebrow="Sản phẩm"
      title={product.title}
      desc={product.summary}
      panelTitle={product.title}
      panelBullets={product.panelBullets}
      benefits={product.benefits}
      audience={product.audience}
      compareTitle={product.compareTitle}
      compareText={product.compareText}
      faqs={product.faqs}
      icon={product.icon}
    />
  );
}

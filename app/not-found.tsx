import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#120913] px-4 text-white">
      <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/5 p-8 text-center shadow-panel backdrop-blur-xl md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffd4bc]">404</p>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Trang bạn tìm không tồn tại</h1>
        <p className="mt-4 leading-8 text-white/70">
          Có thể đường dẫn đã thay đổi hoặc bị nhập sai. Bạn có thể quay về trang chủ hoặc xem lại danh mục sản phẩm.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-6 py-3 font-semibold text-[#2b1623]">
            Về trang chủ
          </Link>
          <Link href="/san-pham" className="rounded-full border border-white/20 bg-white/8 px-6 py-3 font-semibold text-white">
            Xem sản phẩm
          </Link>
        </div>
      </div>
    </main>
  );
}

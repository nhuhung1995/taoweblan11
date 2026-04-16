"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#120913] px-4 text-white">
      <div className="w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/5 p-8 text-center shadow-panel backdrop-blur-xl md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffd4bc]">Có lỗi xảy ra</p>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Hệ thống đang gặp sự cố tạm thời</h1>
        <p className="mt-4 leading-8 text-white/70">
          Vui lòng thử lại sau ít phút. Nếu lỗi vẫn tiếp diễn, bạn có thể liên hệ trực tiếp để được hỗ trợ nhanh hơn.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-6 py-3 font-semibold text-[#2b1623]"
          >
            Thử lại
          </button>
          <a href="/lien-he" className="rounded-full border border-white/20 bg-white/8 px-6 py-3 font-semibold text-white">
            Liên hệ hỗ trợ
          </a>
        </div>
      </div>
    </main>
  );
}

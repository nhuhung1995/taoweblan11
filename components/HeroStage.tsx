"use client";

import IconBubble from "@/components/IconBubble";

export default function HeroStage() {
  return (
    <div className="relative mx-auto flex w-full max-w-[620px] justify-center [perspective:2000px]">
      <div className="relative h-[560px] w-full">
        <div className="absolute -left-6 top-8 h-36 w-36 rounded-full bg-[#ffb37a]/30 blur-3xl animate-pulsewarm" />
        <div className="absolute right-8 top-20 h-40 w-40 rounded-full bg-[#d46da1]/20 blur-3xl animate-drift" />
        <div className="absolute bottom-16 left-24 h-48 w-48 rounded-full bg-[#ff8c57]/18 blur-3xl animate-floaty" />

        <div className="absolute left-0 top-8 w-[76%] rounded-[38px] border border-white/10 bg-panel-v3 p-6 shadow-glow backdrop-blur-2xl transition duration-500 hover:[transform:rotateY(-10deg)_rotateX(4deg)_translateY(-8px)] [transform:rotateY(-18deg)_rotateX(8deg)]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ffd8c1]">Global Internet 5G</div>
              <h3 className="mt-3 text-3xl font-semibold text-white">Kết nối tại Nhật theo nhu cầu thật</h3>
            </div>
            <IconBubble icon="global" large />
          </div>
          <div className="mt-6 grid gap-3 text-sm text-white/80">
            <div className="rounded-2xl bg-white/8 px-4 py-3">SIM vật lý hoặc eSIM cho cá nhân.</div>
            <div className="rounded-2xl bg-white/8 px-4 py-3">Pocket WiFi cho nhu cầu di chuyển nhiều thiết bị.</div>
            <div className="rounded-2xl bg-white/8 px-4 py-3">Home WiFi và Hikari cho kết nối tại nhà.</div>
          </div>
        </div>

        <div className="absolute right-0 top-36 w-[74%] rounded-[36px] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,228,211,0.06))] p-6 shadow-glow backdrop-blur-2xl transition duration-500 hover:[transform:rotateY(12deg)_rotateX(5deg)_translateY(-8px)] [transform:rotateY(18deg)_rotateX(10deg)] animate-drift">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ffd8c1]">5G Service Matrix</div>
              <h3 className="mt-3 text-3xl font-semibold text-white">Một site để chốt cả SIM lẫn internet tại nhà</h3>
            </div>
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle,#ffcfad,transparent_55%),linear-gradient(145deg,#653249,#1e1020)] shadow-glow">
              <span className="text-2xl font-semibold text-white">5G</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-white/80">
            <div className="rounded-2xl bg-white/8 px-4 py-4">Docomo / SoftBank / Rakuten</div>
            <div className="rounded-2xl bg-white/8 px-4 py-4">Nghe gọi hoặc data</div>
            <div className="rounded-2xl bg-white/8 px-4 py-4">Tại nhà nhanh gọn</div>
            <div className="rounded-2xl bg-white/8 px-4 py-4">Ổn định lâu dài</div>
          </div>
        </div>

        <div className="absolute bottom-3 left-1/2 w-[86%] -translate-x-1/2 rounded-[30px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(255,228,211,0.06))] px-5 py-5 backdrop-blur-xl shadow-panel">
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-2xl bg-white/10 p-4 text-white/85">
              <div className="text-xs uppercase tracking-[0.24em] text-[#ffd5be]">Warm UI</div>
              <div className="mt-2 font-semibold">Mềm, sang, dễ đọc</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-white/85">
              <div className="text-xs uppercase tracking-[0.24em] text-[#ffd5be]">3D Motion</div>
              <div className="mt-2 font-semibold">Sâu và cuốn hút</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 text-white/85">
              <div className="text-xs uppercase tracking-[0.24em] text-[#ffd5be]">Conversion</div>
              <div className="mt-2 font-semibold">Đẩy khách về contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
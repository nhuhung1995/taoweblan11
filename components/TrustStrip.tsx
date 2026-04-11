"use client";

const items = [
  "Tư vấn theo đúng nhu cầu sử dụng",
  "Lọc rõ SIM, WiFi và Hikari để khách dễ hiểu",
  "Thiết kế trình bày premium, dễ đưa cho khách xem",
  "Hỗ trợ định hướng theo thiết bị, thời gian dùng và nơi ở",
];

export default function TrustStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item} className="rounded-[28px] border border-white/10 bg-white/5 px-5 py-5 text-sm text-white/75 backdrop-blur">
          {item}
        </div>
      ))}
    </div>
  );
}
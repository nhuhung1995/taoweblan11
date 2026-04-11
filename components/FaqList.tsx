"use client";

type Item = { q: string; a: string };

export default function FaqList({ items, dark = false }: { items: Item[]; dark?: boolean }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.q}
          className={`group overflow-hidden rounded-[28px] border p-6 shadow-soft ${dark ? "border-white/10 bg-white/5 text-white" : "border-[#f0d8ca] bg-white text-[#2b1623]"}`}
        >
          <summary className="cursor-pointer list-none text-lg font-semibold marker:hidden">
            {item.q}
          </summary>
          <p className={`mt-4 leading-7 ${dark ? "text-white/70" : "text-[#6a4b58]"}`}>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
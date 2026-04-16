import Link from "next/link";
import { ClipboardList, MapPin, MessageSquareText } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import { navigation } from "@/data/navigation";

export default function SiteFooter() {
  return (
    <footer className="bg-[#140d17] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.15fr_0.85fr_1fr] md:px-8 lg:px-10">
        <div>
          <LogoMark />
          <p className="mt-5 max-w-md leading-8 text-white/60">
            Global Internet 5G đồng hành cùng khách hàng trong việc chọn SIM, eSIM, Pocket WiFi, Home WiFi và Hikari theo cách rõ ràng, lịch sự và dễ hiểu hơn.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[#ffd3bc]">Menu</div>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[#ffd3bc]">Thông tin</div>
          <div className="mt-5 grid gap-4 text-sm text-white/70">
            <div className="flex items-start gap-3">
              <ClipboardList className="mt-0.5 h-4 w-4 text-[#ffd3bc]" />
              <span>Nhận tư vấn qua form nhu cầu tại trang Liên hệ để được phản hồi theo từng trường hợp cụ thể.</span>
            </div>
            <div className="flex items-start gap-3">
              <MessageSquareText className="mt-0.5 h-4 w-4 text-[#ffd3bc]" />
              <span>Hỗ trợ bằng tiếng Việt cho khách mới sang Nhật, người đi làm, du học sinh và gia đình.</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-[#ffd3bc]" />
              <span>Phạm vi hỗ trợ: khu vực Nhật Bản, tư vấn theo nơi ở và điều kiện triển khai thực tế.</span>
            </div>
          </div>
          <Link href="/lien-he" className="mt-5 inline-flex rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-5 py-3 font-semibold text-[#2b1623]">
            Gửi nhu cầu tư vấn
          </Link>
        </div>
      </div>
      <div className="border-t border-white/8 px-4 py-4 text-center text-sm text-white/45 md:px-8 lg:px-10">
        © 2026 Global Internet 5G. All rights reserved.
      </div>
    </footer>
  );
}

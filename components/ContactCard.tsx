import { Mail, MessageCircle, PhoneCall, Send } from "lucide-react";

const channels = [
  { title: "Tư vấn gọi lại", text: "Phù hợp khi Quý khách cần trao đổi nhanh và muốn được gợi ý giải pháp rõ ràng hơn.", icon: PhoneCall },
  { title: "LINE / chat", text: "Thuận tiện cho khách hàng muốn gửi nhanh nhu cầu và nhận hướng dẫn từng bước.", icon: MessageCircle },
  { title: "Email", text: "Phù hợp khi cần gửi thông tin chi tiết, ảnh thiết bị hoặc yêu cầu nhiều bước hơn.", icon: Mail },
];

export default function ContactCard() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.34em] text-[#ffd7c0]">Liên hệ & hỗ trợ</div>
        <h2 className="mt-3 text-3xl font-semibold text-[#fff1e6] md:text-5xl">Hãy chia sẻ nhu cầu để được tư vấn đúng giải pháp phù hợp.</h2>
        <p className="mt-4 max-w-xl text-lg leading-8 text-white/74">
          Global Internet 5G ưu tiên cách tư vấn rõ ràng: hiểu thiết bị, hiểu thời gian sử dụng, hiểu bối cảnh sinh hoạt rồi mới gợi ý SIM, WiFi hay Hikari.
        </p>

        <div className="mt-8 grid gap-4">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div key={channel.title} className="rounded-[28px] border border-white/10 bg-white/6 px-5 py-5 shadow-panel backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb77f]/14">
                    <Icon className="h-5 w-5 text-[#ffd7c0]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#fff1e6]">{channel.title}</div>
                    <p className="mt-2 text-sm leading-7 text-white/72">{channel.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <form className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,228,211,0.05))] p-6 shadow-panel backdrop-blur-xl md:p-8">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#f09a63] to-transparent" />
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#ffd7c0]">Họ và tên</label>
            <input type="text" placeholder="Nguyễn Văn A" className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-[#d77c57]" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#ffd7c0]">Số điện thoại / LINE</label>
            <input type="text" placeholder="090xxxxxxx / LINE ID" className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-[#d77c57]" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#ffd7c0]">Sản phẩm quan tâm</label>
            <select className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white outline-none transition focus:border-[#d77c57]">
              <option>SIM vật lý</option>
              <option>eSIM</option>
              <option>Pocket WiFi</option>
              <option>Home WiFi</option>
              <option>Hikari</option>
              <option>Chưa rõ, cần tư vấn</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-[#ffd7c0]">Thời gian sử dụng</label>
            <select className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white outline-none transition focus:border-[#d77c57]">
              <option>Ngắn ngày</option>
              <option>1 - 3 tháng</option>
              <option>3 - 12 tháng</option>
              <option>Dài hạn</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-[#ffd7c0]">Khu vực / nơi sử dụng</label>
            <input type="text" placeholder="Ví dụ: Tokyo, Osaka, căn hộ một mình, gia đình 3 người..." className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-[#d77c57]" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-[#ffd7c0]">Ghi chú nhu cầu</label>
            <textarea rows={5} placeholder="Ví dụ: cần vừa nghe gọi vừa data, dùng nhiều laptop trong nhà, muốn tư vấn giữa Home WiFi và Hikari..." className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-[#d77c57]" />
          </div>
        </div>
        <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-6 py-4 font-semibold text-[#2b1623] transition hover:-translate-y-0.5">
          Gửi yêu cầu tư vấn
          <Send className="h-4 w-4" />
        </button>
        <p className="mt-4 text-center text-sm text-white/60">Chúng tôi sẽ phản hồi theo thông tin Quý khách để lại để hỗ trợ nhanh chóng và rõ ràng hơn.</p>
      </form>
    </div>
  );
}

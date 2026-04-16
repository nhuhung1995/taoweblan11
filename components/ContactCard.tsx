"use client";

import { Mail, MessageCircle, PhoneCall, Send } from "lucide-react";
import { useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  DURATION_OPTIONS,
  PRODUCT_OPTIONS,
  normalizeContactPayload,
  validateContactPayload,
} from "@/lib/contact";

const channels = [
  { title: "Tư vấn gọi lại", text: "Phù hợp khi Quý khách cần trao đổi nhanh và muốn được gợi ý giải pháp rõ ràng hơn.", icon: PhoneCall },
  { title: "LINE / chat", text: "Thuận tiện cho khách hàng muốn gửi nhanh nhu cầu và nhận hướng dẫn từng bước.", icon: MessageCircle },
  { title: "Email", text: "Phù hợp khi cần gửi thông tin chi tiết, ảnh thiết bị hoặc yêu cầu nhiều bước hơn.", icon: Mail },
];

export default function ContactCard() {
  const [form, setForm] = useState({
    fullName: "",
    contact: "",
    product: PRODUCT_OPTIONS[0],
    duration: DURATION_OPTIONS[0],
    location: "",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const helperText = useMemo(() => {
    if (submitError) return submitError;
    if (submitSuccess) return submitSuccess;
    return "Chúng tôi sẽ phản hồi theo thông tin Quý khách để lại để hỗ trợ nhanh chóng và rõ ràng hơn.";
  }, [submitError, submitSuccess]);

  const helperClass = submitError
    ? "text-red-200"
    : submitSuccess
      ? "text-emerald-200"
      : "text-white/60";

  const handleChange =
    (key: keyof typeof form) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
      if (submitError) setSubmitError("");
      if (submitSuccess) setSubmitSuccess("");
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = normalizeContactPayload(form);
    const localError = validateContactPayload(payload);
    if (localError) {
      setSubmitError(localError);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        ok: boolean;
        error?: string;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        setSubmitError(result.error || "Không thể gửi yêu cầu lúc này. Vui lòng thử lại.");
        return;
      }

      setSubmitSuccess(result.message || "Đã gửi yêu cầu thành công.");
      setForm({
        fullName: "",
        contact: "",
        product: PRODUCT_OPTIONS[0],
        duration: DURATION_OPTIONS[0],
        location: "",
        note: "",
      });
    } catch {
      setSubmitError("Không thể gửi yêu cầu lúc này. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <form
        onSubmit={handleSubmit}
        className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,228,211,0.05))] p-6 shadow-panel backdrop-blur-xl md:p-8"
      >
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#f09a63] to-transparent" />
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="contact-full-name" className="mb-2 block text-sm font-medium text-[#ffd7c0]">Họ và tên</label>
            <input
              id="contact-full-name"
              name="fullName"
              type="text"
              required
              value={form.fullName}
              onChange={handleChange("fullName")}
              placeholder="Nguyễn Văn A"
              className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-[#d77c57]"
            />
          </div>
          <div>
            <label htmlFor="contact-line-phone" className="mb-2 block text-sm font-medium text-[#ffd7c0]">Số điện thoại / LINE</label>
            <input
              id="contact-line-phone"
              name="contact"
              type="text"
              required
              value={form.contact}
              onChange={handleChange("contact")}
              placeholder="090xxxxxxx / LINE ID"
              className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-[#d77c57]"
            />
          </div>
          <div>
            <label htmlFor="contact-product" className="mb-2 block text-sm font-medium text-[#ffd7c0]">Sản phẩm quan tâm</label>
            <select
              id="contact-product"
              name="product"
              value={form.product}
              onChange={handleChange("product")}
              className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white outline-none transition focus:border-[#d77c57]"
            >
              {PRODUCT_OPTIONS.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="contact-duration" className="mb-2 block text-sm font-medium text-[#ffd7c0]">Thời gian sử dụng</label>
            <select
              id="contact-duration"
              name="duration"
              value={form.duration}
              onChange={handleChange("duration")}
              className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white outline-none transition focus:border-[#d77c57]"
            >
              {DURATION_OPTIONS.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="contact-location" className="mb-2 block text-sm font-medium text-[#ffd7c0]">Khu vực / nơi sử dụng</label>
            <input
              id="contact-location"
              name="location"
              type="text"
              required
              value={form.location}
              onChange={handleChange("location")}
              placeholder="Ví dụ: Tokyo, Osaka, căn hộ một mình, gia đình 3 người..."
              className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-[#d77c57]"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="contact-note" className="mb-2 block text-sm font-medium text-[#ffd7c0]">Ghi chú nhu cầu</label>
            <textarea
              id="contact-note"
              name="note"
              rows={5}
              required
              value={form.note}
              onChange={handleChange("note")}
              placeholder="Ví dụ: cần vừa nghe gọi vừa data, dùng nhiều laptop trong nhà, muốn tư vấn giữa Home WiFi và Hikari..."
              className="w-full rounded-2xl border border-white/10 bg-white/8 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-[#d77c57]"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#ffd2b1,#f29a69)] px-6 py-4 font-semibold text-[#2b1623] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Đang gửi yêu cầu..." : "Gửi yêu cầu tư vấn"}
          <Send className="h-4 w-4" />
        </button>
        <p role="status" className={`mt-4 text-center text-sm ${helperClass}`}>{helperText}</p>
      </form>
    </div>
  );
}

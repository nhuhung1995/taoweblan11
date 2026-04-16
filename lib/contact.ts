export type ContactPayload = {
  fullName: string;
  contact: string;
  product: string;
  duration: string;
  location: string;
  note: string;
};

export const PRODUCT_OPTIONS = [
  "SIM vật lý",
  "eSIM",
  "Pocket WiFi",
  "Home WiFi",
  "Hikari",
  "Chưa rõ, cần tư vấn",
] as const;

export const DURATION_OPTIONS = [
  "Ngắn ngày",
  "1 - 3 tháng",
  "3 - 12 tháng",
  "Dài hạn",
] as const;

export function normalizeContactPayload(input: Partial<ContactPayload>): ContactPayload {
  return {
    fullName: (input.fullName || "").trim(),
    contact: (input.contact || "").trim(),
    product: (input.product || "").trim(),
    duration: (input.duration || "").trim(),
    location: (input.location || "").trim(),
    note: (input.note || "").trim(),
  };
}

export function validateContactPayload(input: ContactPayload): string | null {
  if (input.fullName.length < 2) return "Họ và tên cần ít nhất 2 ký tự.";
  if (input.contact.length < 4) return "Vui lòng nhập số điện thoại hoặc LINE hợp lệ.";
  if (!PRODUCT_OPTIONS.includes(input.product as (typeof PRODUCT_OPTIONS)[number])) return "Vui lòng chọn sản phẩm quan tâm.";
  if (!DURATION_OPTIONS.includes(input.duration as (typeof DURATION_OPTIONS)[number])) return "Vui lòng chọn thời gian sử dụng.";
  if (input.location.length < 2) return "Vui lòng nhập khu vực hoặc nơi sử dụng.";
  if (input.note.length < 10) return "Phần ghi chú nên có ít nhất 10 ký tự để đội ngũ tư vấn chính xác hơn.";

  return null;
}

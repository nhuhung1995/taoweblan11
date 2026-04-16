import { NextResponse } from "next/server";
import {
  normalizeContactPayload,
  validateContactPayload,
} from "@/lib/contact";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, string>;
    const payload = normalizeContactPayload(body);
    const error = validateContactPayload(payload);

    if (error) {
      return NextResponse.json({ ok: false, error }, { status: 400 });
    }

    const requestId = `req_${Date.now().toString(36)}`;

    console.info("[contact-request]", {
      requestId,
      ...payload,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      requestId,
      message:
        "Đã nhận yêu cầu tư vấn. Đội ngũ sẽ phản hồi sớm theo thông tin bạn để lại.",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Không thể gửi yêu cầu lúc này. Vui lòng thử lại sau ít phút.",
      },
      { status: 500 },
    );
  }
}

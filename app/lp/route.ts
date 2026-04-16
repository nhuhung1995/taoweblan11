import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
  const htmlPath = join(process.cwd(), "app", "lp", "lp-standalone.html");
  const html = await readFile(htmlPath, "utf8");

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}

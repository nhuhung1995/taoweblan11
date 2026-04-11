export type NavChild = { label: string; href: string; description: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Sản phẩm",
    href: "/san-pham",
    children: [
      { label: "SIM vật lý", href: "/san-pham/sim-vat-ly", description: "SIM nghe gọi hoặc chỉ data của Docomo, SoftBank, Rakuten." },
      { label: "eSIM", href: "/san-pham/esim", description: "Giải pháp gọn nhẹ, kích hoạt nhanh cho thiết bị hỗ trợ eSIM." },
      { label: "Pocket WiFi", href: "/san-pham/pocket-wifi", description: "Bộ phát di động cho người cần dùng nhiều thiết bị khi di chuyển." },
      { label: "Home WiFi", href: "/san-pham/home-wifi", description: "Thiết bị cắm điện là dùng, phù hợp nhu cầu tại nhà nhanh gọn." },
      { label: "Hikari", href: "/san-pham/hikari", description: "Internet cáp quang cố định cho nhu cầu ổn định lâu dài." },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Giải pháp", href: "/giai-phap" },
  { label: "Hỗ trợ", href: "/ho-tro" },
  { label: "Liên hệ", href: "/lien-he" },
];
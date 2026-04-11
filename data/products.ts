export type Product = {
  title: string;
  href: string;
  icon: "sim" | "esim" | "pocket" | "home" | "fiber";
  summary: string;
  bullets: string[];
  badge: string;
  audience: string[];
  benefits: { title: string; text: string }[];
  compareTitle: string;
  compareText: string;
  faqs: { q: string; a: string }[];
  panelBullets: string[];
};

export const products: Product[] = [
  {
    title: "SIM vật lý",
    href: "/san-pham/sim-vat-ly",
    icon: "sim",
    badge: "Physical SIM",
    summary: "Dòng SIM truyền thống, dễ đổi máy, dễ quản lý và linh hoạt giữa bản nghe gọi hoặc chỉ data.",
    bullets: [
      "Chia theo SIM nghe gọi và SIM chỉ data.",
      "Có thể tư vấn theo nhà mạng Docomo, SoftBank, Rakuten.",
      "Phù hợp cho người dùng lâu dài cần sự quen thuộc và ổn định.",
    ],
    audience: [
      "Người mới sang Nhật muốn lựa chọn rõ ràng và dễ dùng.",
      "Người cần số nghe gọi để làm việc, học tập hoặc đăng ký dịch vụ.",
      "Người dùng muốn chọn theo nhà mạng và nhu cầu data cụ thể.",
    ],
    benefits: [
      { title: "Dễ làm quen", text: "SIM vật lý phù hợp với số đông người dùng vì thao tác đổi máy và cài đặt đều rất quen thuộc." },
      { title: "Nhiều lựa chọn", text: "Có thể phân loại theo nghe gọi, chỉ data và theo nhà mạng để tìm đúng gói phù hợp." },
      { title: "Phù hợp lâu dài", text: "Hợp cho người sinh sống tại Nhật cần giải pháp thực dụng, dễ kiểm soát và dễ tư vấn." },
    ],
    compareTitle: "Khi nào nên chọn SIM vật lý?",
    compareText: "Nếu ưu tiên sự quen thuộc, cần số nghe gọi hoặc muốn đổi thiết bị linh hoạt theo cách truyền thống, SIM vật lý thường là lựa chọn dễ chốt hơn eSIM.",
    faqs: [
      { q: "SIM vật lý có thể chọn loại chỉ data không?", a: "Có. Global Internet 5G tư vấn cả nhóm SIM chỉ data lẫn SIM nghe gọi tùy mục tiêu sử dụng." },
      { q: "Có hỗ trợ tư vấn theo nhà mạng không?", a: "Có. Bên đội ngũ sẽ gợi ý giữa Docomo, SoftBank và Rakuten theo khu vực và nhu cầu." },
      { q: "SIM vật lý có phù hợp với người mới sang Nhật không?", a: "Rất phù hợp vì cách dùng rõ ràng, ít gây bối rối và dễ hỗ trợ từ xa." },
    ],
    panelBullets: ["SIM nghe gọi", "SIM data", "Docomo / SoftBank / Rakuten"],
  },
  {
    title: "eSIM",
    href: "/san-pham/esim",
    icon: "esim",
    badge: "eSIM",
    summary: "Giải pháp số hóa hiện đại, kích hoạt gọn nhanh cho thiết bị hỗ trợ eSIM, phù hợp người cần bắt đầu sớm.",
    bullets: [
      "Kích hoạt nhanh, ít thao tác vật lý.",
      "Có thể chọn bản nghe gọi hoặc chỉ data tùy nhu cầu.",
      "Thích hợp cho khách hàng ưu tiên sự gọn gàng và tốc độ.",
    ],
    audience: [
      "Người dùng thiết bị đời mới đã hỗ trợ eSIM.",
      "Khách hàng muốn kích hoạt nhanh và tối giản thao tác.",
      "Người đi công tác hoặc cần dùng ngay sau khi hoàn tất đăng ký.",
    ],
    benefits: [
      { title: "Nhanh gọn", text: "Không cần chờ giao SIM vật lý. Quy trình tư vấn và kích hoạt được rút gọn đáng kể." },
      { title: "Hiện đại", text: "eSIM phù hợp xu hướng sử dụng thiết bị mới, tối ưu trải nghiệm cho người thích sự linh hoạt." },
      { title: "Tối ưu cho nhu cầu khẩn", text: "Khi cần internet nhanh, eSIM là lựa chọn rất đáng cân nhắc nếu thiết bị tương thích." },
    ],
    compareTitle: "Khi nào nên chọn eSIM?",
    compareText: "Nếu thiết bị hỗ trợ eSIM và ưu tiên bắt đầu nhanh, gọn, ít chờ đợi, eSIM là lựa chọn rất thuyết phục.",
    faqs: [
      { q: "Làm sao biết máy có hỗ trợ eSIM?", a: "Đội ngũ có thể kiểm tra sơ bộ theo model máy trước khi chốt gói phù hợp." },
      { q: "eSIM có thể dùng cho chỉ data không?", a: "Có. Có thể tư vấn eSIM cho nhu cầu data hoặc kết hợp nghe gọi tùy dòng phù hợp." },
      { q: "eSIM có phù hợp cho người hay đổi máy không?", a: "Có thể phù hợp, nhưng cần xem thiết bị mới và quy trình chuyển đổi để tư vấn kỹ hơn." },
    ],
    panelBullets: ["Kích hoạt nhanh", "Thiết bị hỗ trợ eSIM", "Nghe gọi hoặc data"],
  },
  {
    title: "Pocket WiFi",
    href: "/san-pham/pocket-wifi",
    icon: "pocket",
    badge: "Pocket WiFi",
    summary: "Bộ phát WiFi di động cho người cần đi lại nhiều hoặc dùng chung mạng cho nhiều thiết bị trong ngày.",
    bullets: [
      "Mang theo linh hoạt.",
      "Dùng cho điện thoại, tablet, laptop cùng lúc.",
      "Phù hợp người cần internet di động ổn định cho nhiều thiết bị.",
    ],
    audience: [
      "Người di chuyển nhiều giữa nhà, công ty, trường học và ngoài đường.",
      "Nhóm khách cần dùng mạng chung cho nhiều thiết bị cá nhân.",
      "Người chưa muốn chốt internet cố định nhưng vẫn cần độ tiện dụng cao.",
    ],
    benefits: [
      { title: "Linh hoạt cao", text: "Pocket WiFi giúp người dùng chủ động kết nối ở nhiều nơi mà không phụ thuộc vào một thiết bị duy nhất." },
      { title: "Nhiều thiết bị", text: "Có thể phát mạng cho cả điện thoại, tablet và laptop, phù hợp nhu cầu làm việc di động." },
      { title: "Hợp cho giai đoạn chuyển tiếp", text: "Đây là phương án tốt khi chưa sẵn sàng lắp Hikari hoặc chưa chắc nơi ở dài hạn." },
    ],
    compareTitle: "Khi nào nên chọn Pocket WiFi?",
    compareText: "Nếu cần internet đi cùng mình mỗi ngày và dùng cho nhiều thiết bị, Pocket WiFi thường hợp hơn SIM đơn lẻ hoặc internet cố định.",
    faqs: [
      { q: "Pocket WiFi có dùng được cho laptop không?", a: "Có. Đây là một trong những lý do nhiều khách chọn Pocket WiFi trong giai đoạn đầu." },
      { q: "Pocket WiFi khác Home WiFi ở điểm nào?", a: "Pocket WiFi mang theo được, còn Home WiFi thiên về đặt cố định trong nhà." },
      { q: "Pocket WiFi có phù hợp ở lâu dài không?", a: "Phù hợp nếu ưu tiên linh hoạt, nhưng với gia đình hoặc nhu cầu cao liên tục, Home WiFi hoặc Hikari có thể hợp hơn." },
    ],
    panelBullets: ["Mang theo hằng ngày", "Nhiều thiết bị", "Phù hợp di chuyển"],
  },
  {
    title: "Home WiFi",
    href: "/san-pham/home-wifi",
    icon: "home",
    badge: "Home WiFi",
    summary: "Thiết bị phát internet không dây dùng trong nhà, cắm điện là dùng, phù hợp khách muốn triển khai nhanh và gọn.",
    bullets: [
      "Thiết lập đơn giản.",
      "Thích hợp cho căn hộ nhỏ, người ở một mình hoặc gia đình nhỏ.",
      "Phù hợp khi muốn internet tại nhà mà không đi theo hướng lắp cáp quang ngay.",
    ],
    audience: [
      "Người muốn có internet tại nhà nhanh gọn.",
      "Khách thuê nhà ngắn đến trung hạn cần giải pháp thực dụng.",
      "Người chưa muốn chờ quy trình lắp đặt internet cáp quang.",
    ],
    benefits: [
      { title: "Triển khai nhanh", text: "Home WiFi phù hợp khi cần internet tại nhà theo cách ít bước hơn so với phương án cáp quang." },
      { title: "Ít rào cản", text: "Đây là lựa chọn dễ hiểu, dễ giới thiệu và dễ chốt với khách cần dùng nhanh tại nơi ở." },
      { title: "Phù hợp thực tế", text: "Không phải lúc nào khách cũng cần tới Hikari. Home WiFi là câu trả lời hợp lý cho nhiều nhu cầu phổ thông." },
    ],
    compareTitle: "Khi nào nên chọn Home WiFi?",
    compareText: "Nếu cần internet tại nhà nhanh gọn và không muốn chờ đợi quy trình lắp đặt phức tạp, Home WiFi thường là lựa chọn dễ chốt nhất.",
    faqs: [
      { q: "Home WiFi có cần lắp đặt phức tạp không?", a: "Thường đơn giản hơn internet cáp quang và thuận tiện cho người muốn dùng sớm." },
      { q: "Home WiFi có phù hợp cho gia đình không?", a: "Phù hợp cho nhu cầu phổ thông; nếu nhu cầu rất cao và ổn định lâu dài, Hikari có thể phù hợp hơn." },
      { q: "Nên chọn Home WiFi hay Pocket WiFi?", a: "Nếu chủ yếu dùng tại nhà, Home WiFi hợp hơn. Nếu hay mang mạng theo người, Pocket WiFi hợp hơn." },
    ],
    panelBullets: ["Cắm điện là dùng", "Tại nhà nhanh gọn", "Phổ thông dễ chốt"],
  },
  {
    title: "Hikari",
    href: "/san-pham/hikari",
    icon: "fiber",
    badge: "Hikari Fiber",
    summary: "Internet cáp quang cố định cho khách hàng cần sự ổn định, lâu dài và sẵn sàng đầu tư đúng cho trải nghiệm tại nhà.",
    bullets: [
      "Phù hợp gia đình hoặc nơi ở cố định lâu dài.",
      "Hướng tới trải nghiệm ổn định và lâu bền.",
      "Thích hợp cho nhu cầu làm việc, học tập, giải trí nhiều thiết bị tại nhà.",
    ],
    audience: [
      "Gia đình ở cố định và cần internet ổn định lâu dài.",
      "Người làm việc tại nhà hoặc học online cường độ cao.",
      "Khách hàng muốn đầu tư nghiêm túc cho trải nghiệm internet tại nơi ở.",
    ],
    benefits: [
      { title: "Ổn định lâu dài", text: "Hikari phù hợp khi internet là hạ tầng quan trọng cho sinh hoạt và công việc tại nhà." },
      { title: "Phục vụ nhu cầu cao", text: "Nhiều thiết bị, nhiều thành viên, thời gian sử dụng dài - đây là bối cảnh Hikari phát huy rõ giá trị." },
      { title: "Tạo cảm giác chuyên nghiệp", text: "Đây là lựa chọn thể hiện một quyết định bài bản hơn cho nơi ở cố định." },
    ],
    compareTitle: "Khi nào nên chọn Hikari?",
    compareText: "Nếu nhu cầu internet đã vượt khỏi mức phổ thông và nơi ở có tính ổn định lâu dài, Hikari là hướng nên cân nhắc đầu tiên.",
    faqs: [
      { q: "Hikari khác Home WiFi như thế nào?", a: "Home WiFi thiên về nhanh gọn, còn Hikari hướng tới độ ổn định và đầu tư lâu dài hơn." },
      { q: "Hikari có phù hợp cho gia đình nhiều thiết bị không?", a: "Rất phù hợp, đặc biệt khi có học tập, làm việc và giải trí cùng lúc trong nhà." },
      { q: "Có hỗ trợ tư vấn quy trình đăng ký Hikari không?", a: "Có. Global Internet 5G hướng dẫn rõ điều kiện cơ bản, lộ trình và lựa chọn phù hợp trước khi chốt." },
    ],
    panelBullets: ["Internet cáp quang", "Độ ổn định cao", "Phù hợp dùng lâu dài"],
  },
];

export const pricingBands = [
  {
    title: "SIM vật lý",
    band: "Linh hoạt",
    detail: "Phụ thuộc bản nghe gọi hay chỉ data, nhà mạng và thời gian sử dụng.",
  },
  {
    title: "eSIM",
    band: "Linh hoạt",
    detail: "Thường hấp dẫn với khách cần kích hoạt nhanh, nhưng phải xét thiết bị hỗ trợ.",
  },
  {
    title: "Pocket WiFi",
    band: "Trung bình",
    detail: "Phù hợp khách hàng ưu tiên sự cơ động và nhiều thiết bị dùng chung.",
  },
  {
    title: "Home WiFi",
    band: "Trung bình đến khá",
    detail: "Phù hợp nơi ở cần internet sớm, ít muốn vướng quy trình lắp đặt dài.",
  },
  {
    title: "Hikari",
    band: "Khá đến cao",
    detail: "Thích hợp nhu cầu ổn định lâu dài và đầu tư nghiêm túc cho hạ tầng internet tại nhà.",
  },
];

export const solutions = [
  {
    title: "Người mới sang Nhật",
    desc: "Cần internet nhanh để liên lạc, tìm đường, làm thủ tục và ổn định cuộc sống giai đoạn đầu.",
    suggestion: "Ưu tiên SIM vật lý, eSIM hoặc Pocket WiFi tùy thiết bị và thời gian ở.",
  },
  {
    title: "Đi công tác hoặc ngắn ngày",
    desc: "Cần giải pháp nhanh, gọn, ít rườm rà và dễ bắt đầu sử dụng ngay.",
    suggestion: "Ưu tiên eSIM hoặc SIM chỉ data tùy mức độ tương thích của thiết bị.",
  },
  {
    title: "Sống một mình tại nhà thuê",
    desc: "Muốn internet tại nhà nhanh gọn nhưng chưa chắc ở quá lâu hoặc chưa muốn lắp cáp quang.",
    suggestion: "Home WiFi thường là phương án thực dụng và dễ chốt hơn.",
  },
  {
    title: "Gia đình hoặc căn hộ dùng lâu dài",
    desc: "Cần internet đáng tin cậy cho học tập, làm việc, giải trí và nhiều thiết bị trong nhà.",
    suggestion: "Ưu tiên Hikari hoặc Home WiFi tùy mức độ sử dụng và thời gian ở.",
  },
];
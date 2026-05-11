export type ListingBadge = "featured" | "reduced" | "new" | "pending" | null;
export type ListingCategory = "cars" | "parts" | "seats" | "trailers";

export interface Seller {
  id: string;
  username: string;
  initials: string;
  rating: number;
  sales: number;
  memberSince: string;
  responseTime: string;
  location: string;
  verified: boolean;
  bio: string;
  tags: string[];
  avatar?: string;
}

export interface Listing {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  priceNote?: string;
  category: ListingCategory;
  series?: string;
  make?: string;
  year?: number;
  mileage?: string;
  engine?: string;
  transmission?: string;
  color?: string;
  condition?: string;
  location: string;
  badge: ListingBadge;
  views: number;
  listedAt: string;
  seller: Seller;
  description: string;
  tags: string[];
  images: number; // count of placeholder images
  docCount: number;
}

export interface ForumPost {
  id: string;
  title: string;
  author: string;
  authorInitials: string;
  replies: number;
  postedAt: string;
  category: string;
}

// ─── SELLERS ─────────────────────────────────────────────────────────────────

export const sellers: Record<string, Seller> = {
  racermike88: {
    id: "racermike88",
    username: "RacerMike88",
    initials: "RM",
    rating: 4.9,
    sales: 17,
    memberSince: "3 yrs",
    responseTime: "<1h",
    location: "Charlotte, NC",
    verified: true,
    bio: "Club racer based out of Charlotte, NC. Competed in Radical Cup Southeast since 2019 and run a small prep business at CMP. I buy, sell, and prep race cars — everything I list has been personally inspected and is represented accurately. Happy to answer any questions or arrange a track-day inspection.",
    tags: ["Charlotte, NC", "Radical Cup", "Prep shop"],
  },
  speedshop22: {
    id: "speedshop22",
    username: "SpeedShop22",
    initials: "SS",
    rating: 4.7,
    sales: 34,
    memberSince: "5 yrs",
    responseTime: "~2h",
    location: "Mooresville, NC",
    verified: true,
    bio: "Professional race shop in the heart of Motorsports USA — Mooresville, NC. We specialize in Spec Miata builds, prep, and sales. Every car we sell is fully inspected and race-ready. We've sold over 30 race cars and stand behind every listing.",
    tags: ["Mooresville, NC", "Spec Miata", "Race shop"],
  },
  gt3racing: {
    id: "gt3racing",
    username: "GT3Racing",
    initials: "GT",
    rating: 5.0,
    sales: 9,
    memberSince: "2 yrs",
    responseTime: "<30m",
    location: "Sebring, FL",
    verified: true,
    bio: "GT3 program runner based in Sebring. I've competed in Porsche Club of America racing for 6 years. Selling my 992 GT3 Cup to fund a factory GT3 program in IMSA. Car is in perfect condition and I have all service records from Porsche.",
    tags: ["Sebring, FL", "Porsche GT3", "PCA"],
  },
  openwheeljim: {
    id: "openwheeljim",
    username: "OpenWheelJim",
    initials: "OJ",
    rating: 4.8,
    sales: 6,
    memberSince: "1 yr",
    responseTime: "~3h",
    location: "Atlanta, GA",
    verified: false,
    bio: "Formula racing enthusiast transitioning from F4 to F3. Selling my Tatuus F4 to fund the next step up. Car has been prepped by a professional F4 team and has been competitive all season.",
    tags: ["Atlanta, GA", "Formula 4", "Open wheel"],
  },
  ligierpro: {
    id: "ligierpro",
    username: "LigierPro",
    initials: "LP",
    rating: 4.6,
    sales: 12,
    memberSince: "4 yrs",
    responseTime: "~1h",
    location: "Daytona, FL",
    verified: true,
    bio: "Professional race car dealer specializing in Ligier prototypes. Authorized Ligier reseller for North America. All cars come with full documentation and we offer transport anywhere in the US.",
    tags: ["Daytona, FL", "Ligier", "Authorized dealer"],
  },
};

// ─── LISTINGS ─────────────────────────────────────────────────────────────────

export const listings: Listing[] = [
  {
    id: "radical-sr3-rsx-2021",
    title: "2021 Radical SR3 RSX",
    subtitle: "Pirelli slicks · full prep · 1,240 mi",
    price: 42000,
    priceNote: "OBO",
    category: "cars",
    series: "Radical Cup",
    make: "Radical",
    year: 2021,
    mileage: "1,240 track miles",
    engine: "1,340cc Suzuki Hayabusa",
    transmission: "6-speed sequential",
    color: "Blue / white livery",
    condition: "Race ready",
    location: "Charlotte, NC",
    badge: "featured",
    views: 284,
    listedAt: "2026-05-08",
    seller: sellers.racermike88,
    description:
      "Selling my 2021 Radical SR3 RSX — full race-ready build. Car has been meticulously maintained and prepared by a Radical-certified shop. Fresh engine service at 1,000 miles. New Pirelli DHF slicks installed last event. Full data logging setup with AiM MXS dash included. Fire suppression system, adjustable aero package, and a full spare parts kit (worth ~$4,000) included in the sale.\n\nReason for sale: moving up to a Ligier JS F3 program. This car is fast, reliable, and ready to race the day you take delivery. Happy to do a video walkthrough or arrange an inspection at a local track day.",
    tags: ["Pirelli DHF slicks", "AiM data logger", "Fire suppression", "Adjustable aero", "Spare parts kit", "Radical-certified prep"],
    images: 14,
    docCount: 3,
  },
  {
    id: "spec-miata-mx5-2019",
    title: "2019 Spec Miata MX-5",
    subtitle: "SCCA legal · full cage · Hoosier tires",
    price: 19500,
    originalPrice: 22000,
    category: "cars",
    series: "Spec Miata",
    make: "Mazda",
    year: 2019,
    mileage: "3,100 track miles",
    engine: "1.8L Miata stock",
    transmission: "5-speed manual",
    color: "Red",
    condition: "Race ready",
    location: "Mooresville, NC",
    badge: "reduced",
    views: 512,
    listedAt: "2026-05-04",
    seller: sellers.speedshop22,
    description:
      "Clean Spec Miata built to full SCCA Solo & Track Day spec. Full chromoly cage, Hoosier A7 tires (4 events old), Kirkey seat with HANS-compatible harness, and a fresh alignment. Logbook available. This car has won multiple club races and is ready to compete immediately.",
    tags: ["SCCA legal", "Full cage", "Hoosier A7", "Logbook", "HANS compatible"],
    images: 10,
    docCount: 2,
  },
  {
    id: "porsche-992-gt3-cup-2022",
    title: "2022 Porsche 992 GT3 Cup",
    subtitle: "Factory livery · ABS · 2 seasons",
    price: 189000,
    category: "cars",
    series: "Porsche Carrera Cup",
    make: "Porsche",
    year: 2022,
    mileage: "~8,000 track miles",
    engine: "4.0L flat-six, 510hp",
    transmission: "6-speed PDK sequential",
    color: "White / factory livery",
    condition: "Race ready",
    location: "Sebring, FL",
    badge: "new",
    views: 98,
    listedAt: "2026-05-10",
    seller: sellers.gt3racing,
    description:
      "2022 Porsche 992 GT3 Cup in excellent condition with two full PCA seasons. ABS, traction control, factory Porsche Motorsport support package included. Complete set of service records from authorized Porsche dealer. New Michelin racing slicks. Ready to race in PCA, Carrera Cup, or IMSA.",
    tags: ["Factory livery", "ABS equipped", "PDK sequential", "Michelin slicks", "Full service history"],
    images: 18,
    docCount: 4,
  },
  {
    id: "tatuus-f4-2020",
    title: "2020 Formula 4 Tatuus",
    subtitle: "Halo cell · data logger · spares kit",
    price: 44000,
    priceNote: "OBO",
    category: "cars",
    series: "Formula 4",
    make: "Tatuus",
    year: 2020,
    mileage: "2,200 track miles",
    engine: "1.4T Abarth, 160hp",
    transmission: "6-speed sequential",
    color: "White / blue",
    condition: "Race ready",
    location: "Atlanta, GA",
    badge: null,
    views: 176,
    listedAt: "2026-05-06",
    seller: sellers.openwheeljim,
    description:
      "Competitive 2020 Tatuus F4 with Halo safety cell. Comes with AiM data logger, full spares kit, and fresh engine rebuild. Ran full F4 season in 2025 with top-10 results. Car is ready to race. Selling to fund F3 program.",
    tags: ["Halo cell", "AiM data logger", "Spares kit", "Fresh engine"],
    images: 9,
    docCount: 2,
  },
  {
    id: "ligier-js-f3-2021",
    title: "Ligier JS F3 2021",
    subtitle: "FISA certified · FIA roll structure",
    price: 79500,
    category: "cars",
    series: "Formula Regional",
    make: "Ligier",
    year: 2021,
    mileage: "1,800 track miles",
    engine: "2.0L Nissan, 270hp",
    transmission: "6-speed sequential",
    color: "Black / orange",
    condition: "Race ready",
    location: "Daytona, FL",
    badge: "pending",
    views: 340,
    listedAt: "2026-04-28",
    seller: sellers.ligierpro,
    description:
      "2021 Ligier JS F3 in excellent condition. FISA certified with FIA-approved roll structure. Full Ligier service history, fresh safety inspection. Authorized Ligier dealer sale — transport available anywhere in the US.",
    tags: ["FISA certified", "FIA roll structure", "Ligier authorized", "Transport available"],
    images: 12,
    docCount: 3,
  },
];

// ─── FORUM POSTS ─────────────────────────────────────────────────────────────

export const forumPosts: ForumPost[] = [
  { id: "1", title: "Radical SR3 brake bias setup — any tips for CMP?", author: "RacerMike88", authorInitials: "RM", replies: 42, postedAt: "2026-05-11T08:30:00Z", category: "Tech help" },
  { id: "2", title: "Best enclosed trailer options for a GT3 Cup car?", author: "JT_Motorsports", authorInitials: "JT", replies: 18, postedAt: "2026-05-11T05:00:00Z", category: "Hot topics" },
  { id: "3", title: "Open seat — 2026 Spec Miata season, Southeast region", author: "DW_Racing", authorInitials: "DW", replies: 7, postedAt: "2026-05-10T14:00:00Z", category: "Open seats" },
  { id: "4", title: "Pirelli DHF vs Hoosier R7 — endurance lap time comparison", author: "SlickLane", authorInitials: "SL", replies: 31, postedAt: "2026-05-10T10:00:00Z", category: "Tech help" },
  { id: "5", title: "Track day at VIR — May 24th, who's going?", author: "VIR_Fan", authorInitials: "VF", replies: 14, postedAt: "2026-05-09T18:00:00Z", category: "Events" },
];

// ─── STATS ────────────────────────────────────────────────────────────────────

export const siteStats = {
  activeListings: 2841,
  totalAskingValue: "4.2M",
  registeredUsers: 18300,
  openSeats: 47,
};

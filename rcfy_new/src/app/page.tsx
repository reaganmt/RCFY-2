import Link from "next/link";
import { Search, Car, Trophy, Flame, Mountain, Clock, Zap, Wrench, UserCheck, Truck, MessageSquare, Eye, ChevronRight, Shield, Star } from "lucide-react";
import ListingCard from "@/components/listings/ListingCard";
import ListingsSidebar from "@/components/listings/ListingsSidebar";
import { listings, forumPosts, siteStats } from "@/lib/data";
import { cn, timeAgo } from "@/lib/utils";

const categories = [
  { label: "All Cars", icon: Car, href: "/", active: true },
  { label: "Formula", icon: Trophy, href: "/?series=formula" },
  { label: "Stock Car", icon: Car, href: "/?series=stock-car" },
  { label: "Drift", icon: Flame, href: "/?series=drift" },
  { label: "Rally", icon: Mountain, href: "/?series=rally" },
  { label: "Endurance", icon: Clock, href: "/?series=endurance" },
  { label: "Sprint", icon: Zap, href: "/?series=sprint" },
  { label: "Parts", icon: Wrench, href: "/parts" },
  { label: "Open Seats", icon: UserCheck, href: "/seats" },
  { label: "Trailers", icon: Truck, href: "/trailers" },
];

const forumAvatarColors: Record<string, string> = {
  RM: "bg-[#FAECE7] text-[#712B13]",
  JT: "bg-[#FEF3C7] text-[#92400E]",
  DW: "bg-[#E1F5EE] text-[#085041]",
  SL: "bg-[#FEE2E2] text-[#991B1B]",
  VF: "bg-[#E6F1FB] text-[#0C447C]",
};

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] px-5 py-10 relative overflow-hidden">
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 80px)",
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-[#D85A30]/15 border border-[#D85A30]/25 text-[#EF9F27] text-[11px] px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EF9F27] animate-pulse" />
            {siteStats.activeListings.toLocaleString()} classifieds posted
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight mb-2">
            The classifieds hub for<br />
            <em className="not-italic text-[#D85A30]">serious race cars.</em>
          </h1>
          <p className="text-sm text-white/45 mb-7 max-w-md">
            Buy, sell, and connect with the motorsport community. Cars, parts, seats, and trailers — all in one place.
          </p>

          {/* Search bar */}
          <div className="flex items-center bg-white/8 border border-white/12 rounded-xl px-4 h-11 gap-3 max-w-[560px]">
            <Search size={15} className="text-white/35 shrink-0" />
            <input
              type="text"
              placeholder="Search by make, class, series, or keyword…"
              className="flex-1 bg-transparent border-none outline-none text-[13px] text-white placeholder:text-white/35"
            />
            <div className="w-px h-5 bg-white/10" />
            <select className="bg-transparent border-none outline-none text-[12px] text-white/50 cursor-pointer">
              <option className="bg-[#1a1a1a]">All categories</option>
              <option className="bg-[#1a1a1a]">Race cars</option>
              <option className="bg-[#1a1a1a]">Parts</option>
              <option className="bg-[#1a1a1a]">Open seats</option>
              <option className="bg-[#1a1a1a]">Trailers</option>
            </select>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-7">
            {[
              { val: siteStats.activeListings.toLocaleString(), label: "active listings" },
              { val: `$${siteStats.totalAskingValue}`, label: "in asking prices" },
              { val: siteStats.registeredUsers.toLocaleString(), label: "registered users" },
              { val: siteStats.openSeats.toString(), label: "open race seats" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-lg font-semibold text-white tracking-tight">{s.val}</div>
                <div className="text-[11px] text-white/35">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category pills ────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#E0DED8] px-5">
        <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.label}
                href={cat.href}
                className={cn("cat-pill shrink-0", cat.active && "cat-pill-active")}
              >
                <Icon size={13} />
                {cat.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 py-5">
        <div className="flex gap-5 items-start">

          {/* Sidebar */}
          <ListingsSidebar />

          {/* Listings */}
          <div className="flex-1 min-w-0">
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-baseline gap-2">
                <h2 className="text-sm font-semibold text-[#1a1a1a]">Classifieds</h2>
                <span className="text-xs text-[#888780]">1,456 listings</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#888780]">Sort:</span>
                <select className="text-xs border border-[#E0DED8] rounded-md px-2.5 py-1.5 bg-white text-[#1a1a1a] outline-none focus:border-[#D85A30]">
                  <option>Newest first</option>
                  <option>Price: low–high</option>
                  <option>Price: high–low</option>
                  <option>Closest first</option>
                </select>
                <button className="btn btn-icon"><Car size={14} /></button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
              {/* Post a listing CTA card */}
              <Link
                href="/sell"
                className="card flex flex-col items-center justify-center min-h-[190px] border-dashed hover:border-[#D85A30] hover:bg-[#FAECE7]/30 transition-colors group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">+</div>
                <div className="text-[13px] font-medium text-[#888780] group-hover:text-[#D85A30] transition-colors">
                  Post your listing
                </div>
                <div className="text-[11px] text-[#888780] mt-1">Free to list</div>
              </Link>
            </div>

            {/* Load more */}
            <div className="flex justify-center mt-8">
              <button className="btn px-6 py-2 text-sm">Load more listings</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Forum + Watchlist panel ───────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Forum preview */}
          <div className="card">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E0DED8]">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a]">
                <MessageSquare size={15} className="text-[#D85A30]" />
                Forum — Recent
              </div>
              <Link href="/forum" className="text-xs text-[#888780] hover:text-[#D85A30] flex items-center gap-0.5">
                See all <ChevronRight size={12} />
              </Link>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#E0DED8] px-5">
              {["Hot topics", "Tech help", "Open seats", "Events"].map((tab, i) => (
                <button
                  key={tab}
                  className={cn(
                    "text-xs py-2.5 px-3 border-b-2 transition-colors",
                    i === 0
                      ? "border-[#D85A30] text-[#1a1a1a] font-medium"
                      : "border-transparent text-[#888780] hover:text-[#1a1a1a]"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="divide-y divide-[#E0DED8]">
              {forumPosts.map((post) => (
                <div key={post.id} className="flex gap-3 px-5 py-3 hover:bg-[#F5F4F0] transition-colors cursor-pointer">
                  <div className={cn("w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0", forumAvatarColors[post.authorInitials] ?? "bg-[#F1EFE8] text-[#888780]")}>
                    {post.authorInitials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] text-[#1a1a1a] truncate">{post.title}</div>
                    <div className="flex gap-3 text-[11px] text-[#888780] mt-0.5">
                      <span>{post.author}</span>
                      <span>{post.replies} replies</span>
                      <span>{timeAgo(post.postedAt)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Watchlist preview */}
          <div className="card">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E0DED8]">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a]">
                <Eye size={15} className="text-[#D85A30]" />
                My watchlist
              </div>
              <Link href="/account" className="text-xs text-[#888780] hover:text-[#D85A30] flex items-center gap-0.5">
                See all <ChevronRight size={12} />
              </Link>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#E0DED8] px-5">
              {["Watching (4)", "Saved (11)", "Messages (3)"].map((tab, i) => (
                <button
                  key={tab}
                  className={cn(
                    "text-xs py-2.5 px-3 border-b-2 transition-colors whitespace-nowrap",
                    i === 0
                      ? "border-[#D85A30] text-[#1a1a1a] font-medium"
                      : "border-transparent text-[#888780] hover:text-[#1a1a1a]"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="divide-y divide-[#E0DED8]">
              {listings.slice(0, 3).map((listing) => (
                <Link key={listing.id} href={`/listings/${listing.id}`} className="flex gap-3 px-5 py-3 items-center hover:bg-[#F5F4F0] transition-colors">
                  <div className="w-12 h-9 rounded bg-[#111] flex items-center justify-center text-lg opacity-30 shrink-0">🏎</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-medium text-[#1a1a1a] truncate">{listing.title}</div>
                    <div className="text-[10px] text-[#888780]">{listing.location} · Listed recently</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[13px] font-semibold text-[#1a1a1a]">
                      ${listing.price.toLocaleString()}
                    </div>
                    {listing.badge === "reduced" && (
                      <span className="badge badge-reduced text-[9px]">Reduced</span>
                    )}
                    {listing.badge === "new" && (
                      <span className="badge badge-new text-[9px]">New</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Sell CTA ─────────────────────────────────────────────────────── */}
      <div className="bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-white tracking-tight mb-1">
              Ready to sell your race car?
            </h2>
            <p className="text-sm text-white/40">
              Free to list. Reach thousands of serious buyers in the motorsport community.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button className="btn border-white/20 text-white hover:border-white/40">
              Learn more
            </button>
            <Link href="/sell" className="btn btn-primary">
              + Post a listing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

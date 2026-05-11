import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, MapPin, Calendar, Eye, Heart, Share2, FileText, Shield, Star, MessageCircle, Phone, Flag, CheckCircle } from "lucide-react";
import { listings } from "@/lib/data";
import { cn, formatPrice, timeAgo } from "@/lib/utils";
import MessageForm from "./MessageForm";

export function generateStaticParams() {
  return listings.map((l) => ({ id: l.id }));
}

export default function ListingDetailPage({ params }: { params: { id: string } }) {
  const listing = listings.find((l) => l.id === params.id);
  if (!listing) notFound();
  const { seller } = listing;

  const specs = [
    { label: "Year", value: listing.year?.toString() ?? "—" },
    { label: "Make / Model", value: listing.title.replace(listing.year?.toString() ?? "", "").trim() },
    { label: "Series / Class", value: listing.series ?? "—" },
    { label: "Engine", value: listing.engine ?? "—" },
    { label: "Mileage", value: listing.mileage ?? "—" },
    { label: "Transmission", value: listing.transmission ?? "—" },
    { label: "Color", value: listing.color ?? "—" },
    { label: "Condition", value: listing.condition ?? "—" },
  ];

  return (
    <div className="bg-[#F5F4F0] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#E0DED8]">
        <div className="max-w-7xl mx-auto px-5 py-2.5 flex items-center gap-1.5 text-xs text-[#888780]">
          <Link href="/" className="hover:text-[#D85A30] transition-colors">Home</Link>
          <ChevronRight size={11} />
          <Link href="/" className="hover:text-[#D85A30] transition-colors">Race Cars</Link>
          <ChevronRight size={11} />
          <Link href="/?make=radical" className="hover:text-[#D85A30] transition-colors">{listing.make}</Link>
          <ChevronRight size={11} />
          <span className="text-[#1a1a1a]">{listing.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 py-5">
        <div className="flex gap-5 items-start">

          {/* ── Left column ────────────────────────────────────────────── */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">

            {/* Gallery */}
            <div className="card overflow-hidden">
              <div className="grid grid-cols-2 grid-rows-[200px_100px]">
                {/* Main image */}
                <div className="bg-[#111] row-span-2 flex items-center justify-center">
                  <span className="text-7xl opacity-15 select-none">🏎</span>
                </div>
                {/* Thumbs */}
                {[1, 2].map((i) => (
                  <div key={i} className={cn("bg-[#1a1a1a] flex items-center justify-center relative", i === 2 && "")}>
                    <span className="text-4xl opacity-15 select-none">🏎</span>
                    {i === 2 && (
                      <div className="absolute inset-0 bg-black/55 flex items-center justify-center text-white text-sm font-medium cursor-pointer hover:bg-black/65 transition-colors">
                        +{listing.images - 2} photos
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Listing info */}
            <div className="card p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  {/* Badges */}
                  <div className="flex items-center gap-2 mb-2">
                    {listing.badge === "featured" && <span className="badge badge-featured">Featured</span>}
                    {listing.badge === "new" && <span className="badge badge-new">Just listed</span>}
                    {listing.badge === "reduced" && <span className="badge badge-reduced">Price reduced</span>}
                    {listing.badge === "pending" && <span className="badge badge-pending">Pending sale</span>}
                  </div>
                  <h1 className="text-xl font-semibold text-[#1a1a1a] tracking-tight mb-1">{listing.title}</h1>
                  <div className="flex items-center gap-4 text-xs text-[#888780]">
                    <span className="flex items-center gap-1"><MapPin size={11} /> {listing.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={11} /> Listed {timeAgo(listing.listedAt)}</span>
                    <span className="flex items-center gap-1"><Eye size={11} /> {listing.views} views</span>
                  </div>
                </div>
                <div className="flex gap-1.5 shrink-0">
                  <button className="btn btn-icon"><Heart size={14} /></button>
                  <button className="btn btn-icon"><Eye size={14} /></button>
                  <button className="btn btn-icon"><Share2 size={14} /></button>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-semibold tracking-tight text-[#1a1a1a]">
                  {formatPrice(listing.price)}
                </span>
                {listing.priceNote && (
                  <span className="text-sm text-[#888780]">{listing.priceNote}</span>
                )}
                {listing.originalPrice && (
                  <span className="text-sm text-[#888780] line-through">
                    {formatPrice(listing.originalPrice)}
                  </span>
                )}
              </div>

              <div className="border-t border-[#E0DED8] pt-4">
                <h2 className="text-sm font-semibold text-[#1a1a1a] mb-3 flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-[#D85A30]" />
                  Listing details
                </h2>
                <div className="grid grid-cols-2 gap-x-8">
                  {specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={cn("py-2.5", i < specs.length - 2 && "border-b border-[#E0DED8]")}
                    >
                      <div className="text-[10px] text-[#888780] mb-0.5">{spec.label}</div>
                      <div className="text-[13px] font-medium text-[#1a1a1a]">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="card p-5">
              <h2 className="text-sm font-semibold text-[#1a1a1a] mb-3 flex items-center gap-1.5">
                <FileText size={14} className="text-[#D85A30]" />
                Description
              </h2>
              <div className="text-[13px] text-[#888780] leading-relaxed whitespace-pre-line">
                {listing.description}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {listing.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Documents */}
            {listing.docCount > 0 && (
              <div className="card p-5">
                <h2 className="text-sm font-semibold text-[#1a1a1a] mb-3 flex items-center gap-1.5">
                  <FileText size={14} className="text-[#D85A30]" />
                  History &amp; documentation
                </h2>
                <div className="flex flex-col gap-2">
                  {["Maintenance log (PDF)", "Race results history", "Technical inspection cert"].slice(0, listing.docCount).map((doc) => (
                    <div key={doc} className="flex items-center justify-between p-3 bg-[#F5F4F0] rounded-lg">
                      <div className="flex items-center gap-2 text-[13px] text-[#1a1a1a]">
                        <FileText size={14} className="text-[#D85A30]" />
                        {doc}
                      </div>
                      <button className="btn text-xs py-1">View</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── Right column ───────────────────────────────────────────── */}
          <div className="w-64 shrink-0 flex flex-col gap-3">

            {/* Price & CTA */}
            <div className="card p-4">
              <div className="text-2xl font-semibold tracking-tight text-[#1a1a1a] mb-0.5">
                {formatPrice(listing.price)}
              </div>
              <div className="flex items-center gap-1 text-xs text-[#888780] mb-4">
                <MapPin size={11} />
                {listing.location}
              </div>

              <button className="w-full btn btn-primary py-2.5 text-sm mb-2 justify-center">
                <MessageCircle size={14} />
                Message seller
              </button>
              <button className="w-full btn py-2.5 text-sm mb-3 justify-center">
                <Phone size={14} />
                Request phone number
              </button>

              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { label: "Save", icon: Heart },
                  { label: "Watch", icon: Eye },
                  { label: "Share", icon: Share2 },
                ].map(({ label, icon: Icon }) => (
                  <button key={label} className="btn btn-ghost py-1.5 text-xs justify-center">
                    <Icon size={12} />
                    {label}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#888780] mt-3 pt-3 border-t border-[#E0DED8]">
                <span>Listing #RC-{listing.id.slice(-5).toUpperCase()}</span>
                <span>{listing.views} views</span>
              </div>
            </div>

            {/* Seller card */}
            <div className="card p-4">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#FAECE7] flex items-center justify-center text-sm font-bold text-[#712B13] shrink-0">
                  {seller.initials}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#1a1a1a]">{seller.username}</div>
                  {seller.verified && (
                    <div className="inline-flex items-center gap-1 bg-[#E1F5EE] text-[#085041] text-[10px] font-semibold px-2 py-0.5 rounded-full mt-0.5">
                      <Shield size={9} fill="#1D9E75" className="text-[#1D9E75]" />
                      RCFY Verified
                    </div>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-1 py-3 border-t border-b border-[#E0DED8] mb-3">
                {[
                  { val: seller.rating.toString(), label: "Rating" },
                  { val: seller.sales.toString(), label: "Sales" },
                  { val: seller.memberSince, label: "Member" },
                  { val: seller.responseTime, label: "Resp." },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-[13px] font-semibold text-[#1a1a1a] flex items-center justify-center gap-0.5">
                      {s.label === "Rating" && <Star size={10} className="text-[#EF9F27]" fill="#EF9F27" />}
                      {s.val}
                    </div>
                    <div className="text-[9px] text-[#888780]">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Bio */}
              <p className="text-[11px] text-[#888780] leading-relaxed mb-3">
                {seller.bio}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {seller.tags.map((tag) => (
                  <span key={tag} className="tag text-[10px]">{tag}</span>
                ))}
              </div>

              <button className="w-full btn btn-ghost text-xs py-2 justify-center">
                View seller profile
              </button>
            </div>

            {/* Message form */}
            <div className="card p-4" id="message">
              <h3 className="text-sm font-semibold text-[#1a1a1a] mb-3 flex items-center gap-1.5">
                <MessageCircle size={13} className="text-[#D85A30]" />
                Send a message
              </h3>
              <MessageForm listingTitle={listing.title} />

              <button className="w-full flex items-center justify-center gap-1 text-[11px] text-[#888780] hover:text-red-500 transition-colors mt-3">
                <Flag size={11} />
                Report this listing
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

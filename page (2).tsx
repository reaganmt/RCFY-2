"use client";

import Link from "next/link";
import { Heart, Eye, MapPin, MessageCircle, Star, Shield } from "lucide-react";
import { useState } from "react";
import { cn, formatPrice } from "@/lib/utils";
import type { Listing } from "@/lib/data";

interface ListingCardProps {
  listing: Listing;
}

const badgeConfig = {
  featured: { label: "Featured", className: "badge-featured" },
  reduced: { label: "Price reduced", className: "badge-reduced" },
  new: { label: "Just listed", className: "badge-new" },
  pending: { label: "Pending sale", className: "badge-pending" },
};

// Placeholder car image backgrounds per listing
const imgBg: Record<string, string> = {
  "radical-sr3-rsx-2021": "from-[#1a1a2e] to-[#111]",
  "spec-miata-mx5-2019": "from-[#1a1a10] to-[#0d0d08]",
  "porsche-992-gt3-cup-2022": "from-[#0f1a0f] to-[#0a0f0a]",
  "tatuus-f4-2020": "from-[#1a100a] to-[#0d0a07]",
  "ligier-js-f3-2021": "from-[#0a0a1a] to-[#08080f]",
};

export default function ListingCard({ listing }: ListingCardProps) {
  const [saved, setSaved] = useState(false);
  const [watched, setWatched] = useState(false);

  const badge = listing.badge ? badgeConfig[listing.badge] : null;
  const bg = imgBg[listing.id] ?? "from-[#111] to-[#1a1a1a]";

  return (
    <div className="card group hover:border-[#c0beb8] transition-colors">
      {/* Image */}
      <Link href={`/listings/${listing.id}`}>
        <div className={cn("relative h-[130px] bg-gradient-to-br", bg, "flex items-center justify-center")}>
          {/* Car emoji placeholder — real app would use <Image /> */}
          <span className="text-5xl opacity-15 select-none">🏎</span>

          {badge && (
            <span className={cn("badge absolute top-2 left-2", badge.className)}>
              {badge.label}
            </span>
          )}

          {/* Action buttons */}
          <div className="absolute top-2 right-2 flex gap-1">
            <button
              onClick={(e) => { e.preventDefault(); setSaved(!saved); }}
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-white transition-colors",
                saved ? "bg-[#D85A30]" : "bg-black/50 hover:bg-black/70"
              )}
              aria-label={saved ? "Unsave listing" : "Save listing"}
            >
              <Heart size={11} fill={saved ? "white" : "none"} />
            </button>
            <button
              onClick={(e) => { e.preventDefault(); setWatched(!watched); }}
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-white transition-colors",
                watched ? "bg-[#D85A30]" : "bg-black/50 hover:bg-black/70"
              )}
              aria-label={watched ? "Unwatch" : "Watch"}
            >
              <Eye size={11} />
            </button>
          </div>
        </div>
      </Link>

      {/* Body */}
      <div className="p-3">
        <Link href={`/listings/${listing.id}`}>
          <div className="font-semibold text-[13px] text-[#1a1a1a] leading-snug mb-0.5 group-hover:text-[#D85A30] transition-colors">
            {listing.title}
          </div>
          <div className="text-[11px] text-[#888780] mb-2">{listing.subtitle}</div>

          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-1.5">
              <span className="text-[17px] font-semibold tracking-tight text-[#1a1a1a]">
                {formatPrice(listing.price)}
              </span>
              {listing.priceNote && (
                <span className="text-[11px] text-[#888780]">{listing.priceNote}</span>
              )}
              {listing.originalPrice && (
                <span className="text-[11px] text-[#888780] line-through">
                  {formatPrice(listing.originalPrice)}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-[10px] text-[#888780]">
              <MapPin size={9} />
              {listing.location}
            </div>
          </div>
        </Link>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-[#E0DED8]">
          <div className="flex items-center gap-1.5">
            {/* Seller avatar */}
            <div className="w-5 h-5 rounded-full bg-[#FAECE7] flex items-center justify-center text-[9px] font-bold text-[#712B13]">
              {listing.seller.initials}
            </div>
            <span className="text-[10px] text-[#888780]">{listing.seller.username}</span>
            {listing.seller.verified && (
              <Shield size={9} className="text-[#1D9E75]" fill="#1D9E75" />
            )}
            <div className="flex items-center gap-0.5 text-[10px] text-[#888780]">
              <Star size={9} className="text-[#EF9F27]" fill="#EF9F27" />
              {listing.seller.rating}
            </div>
          </div>

          <Link
            href={`/listings/${listing.id}#message`}
            className={cn(
              "flex items-center gap-1 text-[10px] transition-colors",
              listing.badge === "pending"
                ? "text-[#888780] cursor-default pointer-events-none"
                : "text-[#D85A30] hover:text-[#c24f27]"
            )}
          >
            <MessageCircle size={10} />
            {listing.badge === "pending" ? "Pending" : "Message seller"}
          </Link>
        </div>
      </div>
    </div>
  );
}

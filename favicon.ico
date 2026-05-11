"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, MessageCircle, Heart, Eye, User, Plus, Flag } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Buy", href: "/" },
  { label: "Sell", href: "/sell" },
  { label: "Parts", href: "/parts" },
  { label: "Open Seats", href: "/seats" },
  { label: "Trailers", href: "/trailers" },
  { label: "Forum", href: "/forum" },
  { label: "Results", href: "/results" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#E0DED8]">
      <div className="flex items-center h-14 px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 mr-7 shrink-0">
          <Flag size={18} className="text-[#D85A30]" fill="#D85A30" />
          <span className="text-[15px] font-semibold tracking-tight text-[#1a1a1a]">
            Race Cars <span className="text-[#D85A30]">For You</span>
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center flex-1 overflow-x-auto scrollbar-hide">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn("nav-link", active && "nav-link-active")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button className="btn btn-icon relative" aria-label="Notifications">
            <Bell size={15} />
          </button>

          <button className="btn btn-icon relative" aria-label="Messages">
            <MessageCircle size={15} />
            {/* Unread dot */}
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#D85A30] border border-white" />
          </button>

          <button className="btn btn-icon" aria-label="Saved listings">
            <Heart size={15} />
          </button>

          <button className="btn btn-icon" aria-label="Watchlist">
            <Eye size={15} />
          </button>

          <Link href="/account" className="btn gap-1.5 ml-1">
            <User size={13} />
            Account
          </Link>

          <Link href="/sell" className="btn btn-primary gap-1.5">
            <Plus size={13} />
            Post a listing
          </Link>
        </div>
      </div>
    </nav>
  );
}

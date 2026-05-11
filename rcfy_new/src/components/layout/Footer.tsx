import Link from "next/link";
import { Flag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white mt-16">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-3">
              <Flag size={16} className="text-[#D85A30]" fill="#D85A30" />
              <span className="text-sm font-semibold tracking-tight">
                Race Cars <span className="text-[#D85A30]">For You</span>
              </span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              The premier classifieds marketplace for the motorsport community. Buy, sell, and connect.
            </p>
          </div>

          {/* Marketplace */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-3">
              Marketplace
            </div>
            <ul className="space-y-2">
              {["Browse listings", "Post a listing", "Parts", "Open seats", "Trailers"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-3">
              Community
            </div>
            <ul className="space-y-2">
              {["Forum", "Race results", "Events calendar", "Newsletter"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-wider text-white/30 mb-3">
              Company
            </div>
            <ul className="space-y-2">
              {["About us", "RCFY Verified", "Advertising", "Help & FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-xs text-white/50 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/25">
            © 2026 Race Cars For You. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy policy", "Terms of service", "Cookie settings"].map((item) => (
              <Link key={item} href="#" className="text-[11px] text-white/30 hover:text-white/60 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

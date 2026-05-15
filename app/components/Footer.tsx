"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Hizmetler", id: "services" },
  { label: "Portfolyo", id: "work" },
  { label: "Hakkımızda", id: "about" },
  { label: "İletişim", id: "contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-14 relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#000" }}
    >
      {/* Red glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(229,57,53,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-2">
              <span className="text-xl font-bold tracking-tight text-white">USN</span>
              <span className="text-xl font-bold tracking-tight" style={{ color: "#E53935" }}>
                Media
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full ml-1 glow-pulse"
                style={{ background: "#E53935" }}
              />
            </div>
            <p className="text-white/25 text-xs tracking-wide">
              Markanızı zirveye taşıyan yaratıcı ajans.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-6 text-sm">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                className="text-white/35 hover:text-white transition-colors duration-200 text-xs tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-white/20 text-xs">
            © {year} USN Media. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

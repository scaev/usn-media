"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Hizmetler", id: "services" },
  { label: "Portfolyo", id: "work" },
  { label: "Hakkımızda", id: "about" },
  { label: "İletişim", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating pill header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed z-50"
        style={{
          top: scrolled ? "10px" : 0,
          left: scrolled ? "16px" : 0,
          right: scrolled ? "16px" : 0,
          borderRadius: scrolled ? "100px" : 0,
          background: scrolled ? "rgba(6,6,6,0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(28px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(28px)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
          boxShadow: scrolled ? "0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)" : "none",
          transition: "top 0.5s cubic-bezier(0.16,1,0.3,1), left 0.5s cubic-bezier(0.16,1,0.3,1), right 0.5s cubic-bezier(0.16,1,0.3,1), border-radius 0.5s cubic-bezier(0.16,1,0.3,1), background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            padding: scrolled ? "10px 20px" : "20px 40px",
            transition: "padding 0.5s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              src="/logo.png"
              alt="USN Media"
              width={150}
              height={45}
              className="w-[100px] h-auto md:w-[120px]"
              priority
            />
          </button>

          {/* Desktop nav with magic underline */}
          <nav
            className="hidden md:flex items-center gap-7"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                onMouseEnter={() => setHoveredLink(link.id)}
                className="relative text-sm text-white/50 hover:text-white transition-colors duration-200 tracking-wide py-1"
              >
                {link.label}
                {hoveredLink === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-px"
                    style={{ background: "#E53935" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 28px rgba(229,57,53,0.45)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="text-sm font-semibold px-5 py-2 rounded-full text-white"
              style={{
                background: "#E53935",
                boxShadow: "0 0 20px rgba(229,57,53,0.3)",
              }}
            >
              Proje Başlat
            </motion.button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menü"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[1.5px] bg-white origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-[1.5px] bg-white"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[1.5px] bg-white origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-6"
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(229,57,53,0.06) 0%, transparent 70%)",
              }}
            />
            {links.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.08 + i * 0.07 }}
                onClick={() => scrollTo(link.id)}
                className="text-[2.6rem] font-bold tracking-tight hover:text-[#E53935] transition-colors duration-200"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.38 }}
              onClick={() => scrollTo("contact")}
              className="mt-6 font-semibold px-9 py-3.5 rounded-full text-base text-white"
              style={{ background: "#E53935", boxShadow: "0 0 28px rgba(229,57,53,0.4)" }}
            >
              Proje Başlat
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

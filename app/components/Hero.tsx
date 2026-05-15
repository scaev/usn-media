"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const headlineLines = [
  [{ word: "Markanızı", italic: false }, { word: "Zirveye", italic: true }],
  [{ word: "Taşıyoruz.", italic: false }],
];
const ticker = "MARKA KİMLİĞİ · WEB TASARIM · SOSYAL MEDYA YÖNETİMİ · MOTİON GRAFİK · DİJİTAL PAZARLAMA · ";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-x-hidden">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: "#E53935", opacity: 0.06 }} />
      </div>

      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 pt-32 pb-20">
        {/* Status tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 mb-10"
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#E53935" }} />
          <span className="text-sm text-white/50 tracking-widest uppercase">Proje Kabul Ediyoruz — 2026</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.95] tracking-tighter mb-10 overflow-visible"
        >
          {headlineLines.map((line, li) => (
            <div key={li} className="block">
              {line.map(({ word, italic }, wi) => (
                <motion.span key={wi} variants={wordVariants} className="inline-block mr-[0.2em]">
                  {italic ? (
                    <span className="italic font-light text-white/40">{word}</span>
                  ) : (
                    word
                  )}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.h1>

        {/* Sub row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <p className="max-w-md text-white/50 text-lg leading-relaxed">
            Dijital dünyada fark yaratın. USN Media ile markanız öne çıksın — yaratıcı tasarım, güçlü strateji ve etkili içeriklerle.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="font-semibold px-8 py-4 rounded-full text-base hover:scale-105 transition-transform duration-200 text-white"
              style={{ background: "#E53935" }}
            >
              Portfolyoyu Gör
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-white/20 text-white px-8 py-4 rounded-full text-base hover:border-white/60 transition-colors duration-200"
            >
              İletişime Geç
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex gap-12 mt-16 pt-12 border-t border-white/10"
        >
          {[
            { value: "150+", label: "Tamamlanan Proje" },
            { value: "6 Yıl", label: "Sektör Deneyimi" },
            { value: "80+", label: "Mutlu Müşteri" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-bold tracking-tight" style={{ color: "#E53935" }}>{s.value}</p>
              <p className="text-sm text-white/40 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="relative z-10 border-t border-b border-white/10 py-4 overflow-hidden bg-[#0f0f0f]"
      >
        <div className="flex whitespace-nowrap">
          <span className="marquee-track inline-flex text-sm font-medium tracking-widest text-white/30 uppercase">
            {(ticker + ticker).repeat(3)}
          </span>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";

const LINES: { text: string; style: "bold" | "italic" }[] = [
  { text: "MARKANIZI", style: "bold" },
  { text: "ZİRVEYE", style: "italic" },
  { text: "TAŞIYORUZ.", style: "bold" },
];

const TICKER =
  "MARKA KİMLİĞİ · WEB TASARIM · SOSYAL MEDYA · MOTİON GRAFİK · DİJİTAL PAZARLAMA · AI UGC · ";

const STATS = [
  { value: "150+", label: "Tamamlanan Proje" },
  { value: "6 Yıl", label: "Sektör Deneyimi" },
  { value: "80+", label: "Mutlu Müşteri" },
];

const charVariants: Variants = {
  hidden: { y: "115%", opacity: 0 },
  visible: (delay: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

function CharLine({
  text,
  italic,
  baseDelay,
}: {
  text: string;
  italic: boolean;
  baseDelay: number;
}) {
  return (
    <div className="overflow-hidden leading-[0.88]">
      <motion.div
        initial="hidden"
        animate="visible"
        className={`flex ${italic ? "italic font-light text-white/25" : "font-bold"}`}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={baseDelay + i * 0.028}
            variants={charVariants}
            className="inline-block"
            style={{ letterSpacing: "-0.04em" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseIn, setIsMouseIn] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseIn(true)}
      onMouseLeave={() => setIsMouseIn(false)}
    >
      {/* Mouse-tracking spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-700"
        style={{
          opacity: isMouseIn ? 1 : 0,
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(229,57,53,0.07), transparent 50%)`,
        }}
      />

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(229,57,53,0.09) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(229,57,53,0.05) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      {/* Decorative vertical lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 bottom-0 left-[8vw] w-px opacity-[0.05]"
          style={{ background: "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)" }}
        />
        <div
          className="absolute top-0 bottom-0 right-[8vw] w-px opacity-[0.05]"
          style={{ background: "linear-gradient(to bottom, transparent, white 20%, white 80%, transparent)" }}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 pt-36 pb-24 w-full"
      >
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center gap-2.5 mb-12"
        >
          <span
            className="w-2 h-2 rounded-full glow-pulse"
            style={{ background: "#E53935" }}
          />
          <span className="text-xs text-white/40 tracking-[0.22em] uppercase font-medium">
            Proje Kabul Ediyoruz — 2026
          </span>
        </motion.div>

        {/* Headline — character-by-character clip reveal */}
        <h1
          className="mb-12"
          style={{ fontSize: "clamp(3.6rem, 10.5vw, 11.5rem)" }}
        >
          {LINES.map((line, li) => (
            <CharLine
              key={li}
              text={line.text}
              italic={line.style === "italic"}
              baseDelay={0.35 + li * 0.18}
            />
          ))}
        </h1>

        {/* Sub row */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-0"
        >
          <p className="max-w-sm text-white/45 text-base leading-relaxed">
            Dijital dünyada fark yaratın. USN Media ile markanız öne çıksın
            — yaratıcı tasarım, güçlü strateji ve etkili içeriklerle.
          </p>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-semibold px-7 py-3.5 rounded-full text-sm text-white"
              style={{
                background: "#E53935",
                boxShadow: "0 0 28px rgba(229,57,53,0.35)",
              }}
            >
              Portfolyoyu Gör
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-white/15 text-white/70 px-7 py-3.5 rounded-full text-sm hover:border-white/40 hover:text-white transition-all duration-300"
            >
              İletişime Geç
            </motion.button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/[0.07]"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 + i * 0.1 }}
            >
              <p
                className="text-3xl font-bold tracking-tight"
                style={{ color: "#E53935", textShadow: "0 0 20px rgba(229,57,53,0.4)" }}
              >
                {s.value}
              </p>
              <p className="text-xs text-white/35 mt-1 tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.7 }}
        className="relative z-10 border-t border-b border-white/[0.06] py-3.5 overflow-hidden"
        style={{ background: "rgba(229,57,53,0.04)" }}
      >
        <div className="flex whitespace-nowrap">
          <span className="marquee-track inline-flex text-xs font-semibold tracking-[0.24em] text-white/25 uppercase">
            {(TICKER + TICKER).repeat(4)}
          </span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/20 tracking-[0.3em] uppercase">Keşfet</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(229,57,53,0.5), transparent)" }}
        />
      </motion.div>
    </section>
  );
}

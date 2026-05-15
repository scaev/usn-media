"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const categories = ["Tümü", "Marka", "Web", "Sosyal Medya", "Motion"];

const projects = [
  {
    id: 1,
    title: "Pulse Kozmetik",
    category: "Marka",
    year: "2025",
    gradient: "from-rose-900/50 via-pink-800/30 to-purple-900/50",
    bg: "#130810",
    accent: "#ff6b9d",
    size: "large",
  },
  {
    id: 2,
    title: "Arch Mimarlık",
    category: "Web",
    year: "2025",
    gradient: "from-blue-900/50 via-cyan-800/30 to-teal-900/50",
    bg: "#010c14",
    accent: "#00d4ff",
    size: "small",
  },
  {
    id: 3,
    title: "Volta Enerji",
    category: "Motion",
    year: "2024",
    gradient: "from-yellow-900/50 via-orange-800/30 to-red-900/50",
    bg: "#130b00",
    accent: "#ffb800",
    size: "small",
  },
  {
    id: 4,
    title: "Mermer Finans",
    category: "Sosyal Medya",
    year: "2024",
    gradient: "from-slate-800/70 via-zinc-700/30 to-stone-800/50",
    bg: "#0a0a0a",
    accent: "#d4d4d4",
    size: "small",
  },
  {
    id: 5,
    title: "Sōma Wellness",
    category: "Marka",
    year: "2024",
    gradient: "from-emerald-900/50 via-green-800/30 to-lime-900/50",
    bg: "#020c04",
    accent: "#6dff8a",
    size: "small",
  },
  {
    id: 6,
    title: "Drift Ajans",
    category: "Motion",
    year: "2025",
    gradient: "from-violet-900/50 via-purple-800/30 to-indigo-900/50",
    bg: "#07000f",
    accent: "#b069ff",
    size: "large",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = projects.filter(
    (p) => activeCategory === "Tümü" || p.category === activeCategory
  );

  return (
    <section id="work" ref={ref} className="py-36" style={{ background: "#050505" }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.22em] uppercase font-semibold mb-5"
              style={{ color: "#E53935" }}
            >
              Portfolyomuz
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.6rem,5.5vw,5.5rem)" }}
            >
              Seçilmiş
              <br />
              <span className="italic font-light text-white/30">projeler</span>
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-2 flex-wrap"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-semibold border tracking-wide transition-all duration-200"
                style={
                  activeCategory === cat
                    ? {
                        background: "#E53935",
                        color: "#fff",
                        borderColor: "#E53935",
                        boxShadow: "0 0 16px rgba(229,57,53,0.3)",
                      }
                    : {
                        borderColor: "rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.45)",
                        background: "transparent",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid with sibling-dimming */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const isLarge = project.size === "large";
              const colSpan = isLarge ? "md:col-span-7" : "md:col-span-5";
              const isDimmed = hoveredId !== null && hoveredId !== project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{
                    opacity: isDimmed ? 0.35 : 1,
                    scale: isDimmed ? 0.975 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{
                    duration: 0.4,
                    delay: hoveredId ? 0 : i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`${colSpan} group relative rounded-2xl overflow-hidden`}
                  style={{
                    minHeight: isLarge ? "500px" : "340px",
                    background: project.bg,
                  }}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                  {/* Glow orb */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-15 blur-3xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-30"
                    style={{ background: project.accent }}
                  />

                  {/* Hover bottom gradient sweep */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to top, ${project.accent}22 0%, transparent 55%)`,
                    }}
                  />

                  {/* Hover border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={hoveredId === project.id ? {
                      boxShadow: `inset 0 0 0 1px ${project.accent}40, 0 0 40px ${project.accent}18`,
                    } : {
                      boxShadow: "inset 0 0 0 0px transparent",
                    }}
                    transition={{ duration: 0.35 }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span
                        className="text-xs font-semibold px-3 py-1.5 rounded-full border tracking-wide"
                        style={{
                          color: project.accent,
                          borderColor: project.accent + "35",
                          background: project.accent + "12",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="text-white/25 text-xs font-mono">{project.year}</span>
                    </div>

                    <div>
                      {/* Project number — reveals on hover */}
                      <motion.p
                        className="text-xs font-mono tracking-[0.2em] mb-2"
                        style={{ color: project.accent + "99" }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={hoveredId === project.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                        transition={{ duration: 0.25 }}
                      >
                        {String(i + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
                      </motion.p>

                      <h3
                        className="font-bold tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-350"
                        style={{ fontSize: isLarge ? "clamp(1.6rem,2.5vw,2.2rem)" : "1.5rem" }}
                      >
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        <span className="text-sm text-white/55">Vaka çalışmasını gör</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3 8h10M9 4l4 4-4 4"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            opacity="0.55"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-14"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 border border-white/15 text-white/50 hover:text-white hover:border-white/40 px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-250"
          >
            Tüm projeleri gör
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

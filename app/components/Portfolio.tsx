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
    gradient: "from-rose-900/60 via-pink-800/40 to-purple-900/60",
    bg: "#1a0a12",
    accent: "#ff6b9d",
    size: "large",
  },
  {
    id: 2,
    title: "Arch Mimarlık",
    category: "Web",
    year: "2025",
    gradient: "from-blue-900/60 via-cyan-800/40 to-teal-900/60",
    bg: "#020f1a",
    accent: "#00d4ff",
    size: "small",
  },
  {
    id: 3,
    title: "Volta Enerji",
    category: "Motion",
    year: "2024",
    gradient: "from-yellow-900/60 via-orange-800/40 to-red-900/60",
    bg: "#1a0f00",
    accent: "#ffb800",
    size: "small",
  },
  {
    id: 4,
    title: "Mermer Finans",
    category: "Sosyal Medya",
    year: "2024",
    gradient: "from-slate-800/80 via-zinc-700/40 to-stone-800/60",
    bg: "#0f0f0f",
    accent: "#e8e8e8",
    size: "small",
  },
  {
    id: 5,
    title: "Sōma Wellness",
    category: "Marka",
    year: "2024",
    gradient: "from-emerald-900/60 via-green-800/40 to-lime-900/60",
    bg: "#030f06",
    accent: "#6dff8a",
    size: "small",
  },
  {
    id: 6,
    title: "Drift Ajans",
    category: "Motion",
    year: "2025",
    gradient: "from-violet-900/60 via-purple-800/40 to-indigo-900/60",
    bg: "#0a0014",
    accent: "#b069ff",
    size: "large",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filtered = projects.filter(
    (p) => activeCategory === "Tümü" || p.category === activeCategory
  );

  return (
    <section id="work" ref={ref} className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: "#E53935" }}
            >
              Portfolyomuz
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.95] tracking-tighter"
            >
              Seçilmiş
              <br />
              <span className="italic font-light text-white/40">projeler</span>
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-2 flex-wrap"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200"
                style={
                  activeCategory === cat
                    ? { background: "#E53935", color: "#fff", borderColor: "#E53935" }
                    : { borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.5)" }
                }
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const isLarge = project.size === "large";
              const colSpan = isLarge ? "md:col-span-7" : "md:col-span-5";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  className={`${colSpan} group relative rounded-2xl overflow-hidden cursor-pointer`}
                  style={{ minHeight: isLarge ? "480px" : "340px", background: project.bg }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full opacity-20 blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:opacity-30"
                    style={{ background: project.accent }}
                  />
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <span
                        className="text-xs font-medium px-3 py-1.5 rounded-full border"
                        style={{ color: project.accent, borderColor: project.accent + "40", background: project.accent + "15" }}
                      >
                        {project.category}
                      </span>
                      <span className="text-white/30 text-xs font-mono">{project.year}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-sm text-white/60">Vaka çalışmasını gör</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-colors duration-300" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <button className="flex items-center gap-3 border border-white/20 text-white/60 hover:text-white hover:border-white/50 px-8 py-4 rounded-full text-sm transition-all duration-200">
            Tüm projeleri gör
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

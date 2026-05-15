"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Marka Kimliği",
    description:
      "Markanızın ruhunu yansıtan güçlü görsel kimlikler tasarlıyoruz. Logo tasarımından renk paletine, tipografiden marka rehberine kadar her detayı titizlikle kurguluyoruz.",
    tags: ["Strateji", "Logo Tasarım", "Tipografi", "Marka Rehberi"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 16h12M16 10v12" stroke="#E53935" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Web Tasarım",
    description:
      "Kullanıcı deneyimini ön planda tutan, performanslı ve estetik dijital deneyimler üretiyoruz. Tasarımdan geliştirmeye kadar her aşamada yanınızdayız.",
    tags: ["UI/UX Tasarım", "Next.js", "Etkileşim Tasarımı", "CMS"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 12h24" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="10" r="1" fill="#E53935" />
        <circle cx="12" cy="10" r="1" fill="#E53935" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Sosyal Medya Yönetimi",
    description:
      "Instagram, TikTok, LinkedIn ve daha fazlasında markanızı büyütüyoruz. İçerik üretiminden topluluk yönetimine, reklam optimizasyonuna kadar kapsamlı hizmet sunuyoruz.",
    tags: ["İçerik Üretimi", "Reklam Yönetimi", "Analitik", "Topluluk"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="8" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 14.5l10-5M11 17.5l10 5" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "AI UGC Üretimi",
    description:
      "Yapay zeka ile özgün kullanıcı içerikleri üretin. Viral potansiyelli, marka uyumlu UGC videolar ve görseller — gerçek çekim maliyeti olmadan.",
    tags: ["AI İçerik", "UGC Video", "Viral Strateji", "Marka Uyumu"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l2.5 5.5L24 12l-5.5 2.5L16 20l-2.5-5.5L8 12l5.5-2.5L16 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 20l1.2 2.8L28 24l-2.8 1.2L24 28l-1.2-2.8L20 24l2.8-1.2L24 20z" stroke="#E53935" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Motion Grafik",
    description:
      "Reklamlardan sosyal medya içeriklerine, tanıtım filmlerinden ürün animasyonlarına — saniyeler içinde dikkat çeken görsel hikayeler yaratıyoruz.",
    tags: ["Animasyon", "After Effects", "3D", "Sosyal İçerik"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 8l20 8-20 8V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 16h6" stroke="#E53935" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-32 max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-widest uppercase mb-4"
            style={{ color: "#E53935" }}
          >
            Hizmetlerimiz
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.95] tracking-tighter"
          >
            Markanızı büyüten
            <br />
            <span className="italic font-light text-white/40">hizmetler</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-xs text-white/40 text-sm leading-relaxed"
        >
          Sunduğumuz her hizmet birbiriyle uyum içinde çalışarak markanız için tutarlı bir ekosistem oluşturur.
        </motion.p>
      </div>

      {/* Cards — 2×2 grid on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
        {services.map((svc, i) => (
          <motion.div
            key={svc.number}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="group bg-[#0a0a0a] p-10 flex flex-col gap-8 hover:bg-[#111] transition-colors duration-300 cursor-default md:last:col-span-2"
          >
            <div className="flex items-start justify-between">
              <span className="text-white/20 text-sm font-mono">{svc.number}</span>
              <span className="text-white/40 group-hover:text-white/70 transition-colors duration-300">
                {svc.icon}
              </span>
            </div>

            <div>
              <h3
                className="text-2xl font-bold mb-4 transition-colors duration-300"
                style={{ color: undefined }}
              >
                <span className="group-hover:text-[#E53935] transition-colors duration-300">{svc.title}</span>
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{svc.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {svc.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/40 border border-white/10 rounded-full px-3 py-1 group-hover:border-white/20 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-white/30 group-hover:text-[#E53935] transition-colors duration-300">
              <span>Daha fazla bilgi</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

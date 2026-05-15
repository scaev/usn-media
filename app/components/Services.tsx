"use client";

import { useRef, useState, useCallback, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Marka Kimliği",
    description:
      "Markanızın ruhunu yansıtan güçlü görsel kimlikler tasarlıyoruz. Logo tasarımından renk paletine, tipografiden marka rehberine kadar her detayı titizlikle kurguluyoruz.",
    tags: ["Strateji", "Logo Tasarım", "Tipografi", "Marka Rehberi"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
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
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
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
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
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
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
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
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M6 8l20 8-20 8V8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 16h6" stroke="#E53935" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

type Service = typeof services[number];

function ServiceCard({
  svc,
  index,
  inView,
}: {
  svc: Service & { icon: ReactNode };
  index: number;
  inView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (0.5 - relY) * 10, y: (relX - 0.5) * 10 });
    setSpotlight({ x: relX * 100, y: relY * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: 0.15 + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-2xl p-9 flex flex-col gap-7 md:last:col-span-2"
      style={{
        background: "rgba(255,255,255,0.025)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: isHovered ? "1px solid rgba(229,57,53,0.22)" : "1px solid rgba(255,255,255,0.07)",
        boxShadow: isHovered
          ? "0 0 40px rgba(229,57,53,0.07), inset 0 0 40px rgba(229,57,53,0.03)"
          : "none",
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.15s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        willChange: "transform",
      }}
    >
      {/* Mouse-following spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${spotlight.x}% ${spotlight.y}%, rgba(229,57,53,0.08), transparent 60%)`,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Large background number */}
      <span
        className="absolute -top-6 -right-3 font-bold leading-none select-none pointer-events-none transition-opacity duration-400"
        style={{
          fontSize: "11rem",
          color: "#E53935",
          opacity: isHovered ? 0.07 : 0.04,
        }}
      >
        {svc.number}
      </span>

      <div className="flex items-start justify-between relative z-10">
        <span className="text-white/20 text-xs font-mono tracking-widest">{svc.number}</span>
        <span className="text-white/30 group-hover:text-white/60 transition-colors duration-300">
          {svc.icon}
        </span>
      </div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-3 group-hover:text-[#E53935] transition-colors duration-300">
          {svc.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed">{svc.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto relative z-10">
        {svc.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-white/35 border border-white/[0.08] rounded-full px-3 py-1 group-hover:border-white/20 group-hover:text-white/55 transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 text-xs text-white/25 group-hover:text-[#E53935] transition-colors duration-300 relative z-10">
        <span className="tracking-wider">Daha fazla bilgi</span>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-36 bg-black">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.22em] uppercase font-semibold mb-5"
              style={{ color: "#E53935" }}
            >
              Hizmetlerimiz
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.6rem,5.5vw,5.5rem)" }}
            >
              Markanızı büyüten
              <br />
              <span className="italic font-light text-white/30">hizmetler</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-[260px] text-white/35 text-sm leading-relaxed"
          >
            Sunduğumuz her hizmet birbiriyle uyum içinde çalışarak markanız
            için tutarlı bir ekosistem oluşturur.
          </motion.p>
        </div>

        {/* 3D tilt card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((svc, i) => (
            <ServiceCard key={svc.number} svc={svc} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

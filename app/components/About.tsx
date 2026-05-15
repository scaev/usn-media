"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const values = [
  {
    title: "Kalite Önce Gelir",
    body: "Her piksel, her kare, her kelime özenle düşünülür. Hızdan değil, mükemmeliyetten taviz vermeyiz.",
  },
  {
    title: "Strateji Odaklı",
    body: "Harika tasarım, hedef kitlenizi, pazarı ve hedeflerinizi anlamakla başlar.",
  },
  {
    title: "Uzun Vadeli Büyüme",
    body: "Ürettiğimiz her şey, markanızla birlikte uzun vadede büyüyecek şekilde tasarlanır.",
  },
];

const team = [
  { name: "Kaan Karadağ", role: "Genel Direktör", initials: "KK", color: "#E53935" },
  { name: "Zeynep Gündüz", role: "Motion Tasarımcı", initials: "ZG", color: "#ff6b9d" },
  { name: "Eymen Kara", role: "Sosyal Medya Uzmanı", initials: "EK", color: "#00d4ff" },
  { name: "İsmail Baba", role: "UX/UI Tasarımcı", initials: "İB", color: "#ffb800" },
];

const stats = [
  { value: "150+", label: "Proje" },
  { value: "6", label: "Yıl" },
  { value: "80+", label: "Müşteri" },
  { value: "4", label: "Uzman" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} className="py-36 bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.22em] uppercase font-semibold mb-16"
          style={{ color: "#E53935" }}
        >
          Hakkımızda
        </motion.p>

        {/* Main split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
          <div className="relative">
            {/* Background USN text */}
            <span
              className="absolute -top-16 -left-8 font-bold leading-none select-none pointer-events-none opacity-[0.025]"
              style={{ fontSize: "22rem", color: "#E53935" }}
            >
              U
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 44 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold leading-[0.91] tracking-tight relative z-10"
              style={{ fontSize: "clamp(2.8rem,6vw,6rem)" }}
            >
              Türk markalarını
              <br />
              <span className="italic font-light text-white/30">dijital dünyada</span>
              <br />
              güçlendiriyoruz.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 44 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center gap-6 pt-2"
          >
            <p className="text-white/55 text-lg leading-relaxed">
              USN Media, 2018 yılında kuruldu. Türk işletmelerinin dijital
              dönüşümünü hızlandırmak ve uluslararası standartta yaratıcı
              hizmetler sunmak amacıyla yola çıktık.
            </p>
            <p className="text-white/35 leading-relaxed text-sm">
              Marka kimliğinden web tasarıma, sosyal medya yönetiminden motion
              grafiğe kadar sunduğumuz kapsamlı hizmetlerle Türk pazarında
              markanızı rakiplerinizin önüne geçiriyoruz. İstanbul merkezli
              ekibimiz, global trendleri yerel anlayışla buluşturuyor.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-px" style={{ background: "#E53935" }} />
              <span className="text-sm tracking-widest font-medium" style={{ color: "#E53935" }}>
                İstanbul · Ankara · Uzaktan
              </span>
            </div>
          </motion.div>
        </div>

        {/* Large stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-24"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.4 + i * 0.1 }}
              className="py-10 px-8 flex flex-col gap-1 group hover:bg-[#E53935]/5 transition-colors duration-300"
              style={{ background: "#000" }}
            >
              <span
                className="font-bold leading-none tracking-tight"
                style={{
                  fontSize: "clamp(3rem,6vw,5.5rem)",
                  color: "#E53935",
                  textShadow: "0 0 30px rgba(229,57,53,0.2)",
                }}
              >
                {s.value}
              </span>
              <span className="text-white/35 text-sm tracking-widest uppercase">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Values — glassmorphism cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-24">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 + i * 0.1 }}
              className="group relative rounded-2xl p-8 transition-all duration-350"
              style={{
                background: "rgba(255,255,255,0.025)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              whileHover={{
                borderColor: "rgba(229,57,53,0.2)",
                boxShadow: "0 0 30px rgba(229,57,53,0.05)",
              }}
            >
              <p
                className="text-xs tracking-[0.24em] uppercase font-semibold mb-5"
                style={{ color: "#E53935" }}
              >
                0{i + 1}
              </p>
              <h4 className="font-bold text-base mb-3 group-hover:text-[#E53935] transition-colors duration-300">
                {v.title}
              </h4>
              <p className="text-white/35 text-sm leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div ref={parallaxRef}>
          <motion.h3
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-xs text-white/30 tracking-[0.22em] uppercase mb-10"
          >
            Ekibimiz
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.6 + i * 0.1 }}
                className="group"
              >
                <div
                  className="w-full aspect-square rounded-2xl mb-4 relative overflow-hidden transition-all duration-400"
                  style={{
                    background: member.color + "12",
                    border: "1px solid " + member.color + "18",
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center text-4xl font-bold opacity-15 group-hover:opacity-30 transition-opacity duration-400"
                    style={{ color: member.color }}
                  >
                    {member.initials}
                  </div>
                  {/* Bottom glow */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-400"
                    style={{
                      background: `linear-gradient(to top, ${member.color}40, transparent)`,
                    }}
                  />
                  {/* Border glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ boxShadow: `0 0 20px ${member.color}25, inset 0 0 20px ${member.color}08` }}
                  />
                </div>
                <p className="font-semibold text-sm text-white/90">{member.name}</p>
                <p className="text-white/35 text-xs mt-0.5">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

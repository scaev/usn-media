"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  { title: "Kalite Önce Gelir", body: "Her piksel, her kare, her kelime özenle düşünülür. Hızdan değil, mükemmeliyetten taviz vermeyiz." },
  { title: "Strateji Odaklı", body: "Harika tasarım, hedef kitlenizi, pazarı ve hedeflerinizi anlamakla başlar." },
  { title: "Uzun Vadeli Büyüme", body: "Ürettiğimiz her şey, markanızla birlikte uzun vadede büyüyecek şekilde tasarlanır." },
];

const team = [
  { name: "Kaan Karadağ", role: "Genel Direktör", initials: "KK", color: "#E53935" },
  { name: "Zeynep Gündüz", role: "Motion Tasarımcı", initials: "ZG", color: "#ff6b9d" },
  { name: "Eymen Kara", role: "Sosyal Medya Uzmanı", initials: "EK", color: "#00d4ff" },
  { name: "İsmail Baba", role: "UX/UI Tasarımcı", initials: "İB", color: "#ffb800" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-32 max-w-7xl mx-auto px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-sm tracking-widest uppercase mb-16"
        style={{ color: "#E53935" }}
      >
        Hakkımızda
      </motion.p>

      {/* Main split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.95] tracking-tighter"
          >
            Türk markalarını
            <br />
            <span className="italic font-light text-white/40">dijital dünyada</span>
            <br />
            güçlendiriyoruz.
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="flex flex-col justify-center gap-6"
        >
          <p className="text-white/60 text-lg leading-relaxed">
            USN Media, 2018 yılında kuruldu. Türk işletmelerinin dijital dönüşümünü hızlandırmak ve uluslararası standartta yaratıcı hizmetler sunmak amacıyla yola çıktık.
          </p>
          <p className="text-white/40 leading-relaxed">
            Marka kimliğinden web tasarıma, sosyal medya yönetiminden motion grafiğe kadar sunduğumuz kapsamlı hizmetlerle Türk pazarında markanızı rakiplerinizin önüne geçiriyoruz. İstanbul merkezli ekibimiz, global trendleri yerel anlayışla buluşturuyor.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <div className="w-8 h-px" style={{ background: "#E53935" }} />
            <span className="text-sm tracking-wide" style={{ color: "#E53935" }}>İstanbul · Ankara · Uzaktan</span>
          </div>
        </motion.div>
      </div>

      {/* Values */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mb-24"
      >
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
            className="bg-[#0a0a0a] p-8 hover:bg-[#0f0f0f] transition-colors duration-300"
          >
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#E53935" }}>0{i + 1}</p>
            <h4 className="font-semibold text-lg mb-3">{v.title}</h4>
            <p className="text-white/40 text-sm leading-relaxed">{v.body}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Team */}
      <div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-white/30 tracking-widest uppercase mb-10"
        >
          Ekibimiz
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 + i * 0.1 }}
              className="group"
            >
              <div
                className="w-full aspect-square rounded-2xl mb-4 relative overflow-hidden"
                style={{ background: member.color + "15" }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center text-3xl font-bold opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ color: member.color }}
                >
                  {member.initials}
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30"
                  style={{ background: `linear-gradient(to top, ${member.color}30, transparent)` }}
                />
              </div>
              <p className="font-semibold text-sm">{member.name}</p>
              <p className="text-white/40 text-xs mt-0.5">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const contactInfo = [
  { label: "E-posta", value: "usnmediaofficial@gmail.com" },
  { label: "Telefon", value: "+90 (544) 496 4479" },
  { label: "Adres", value: "Levent, İstanbul, Türkiye" },
];

const budgetOptions = ["< ₺50K", "₺50K–₺150K", "₺150K–₺500K", "₺500K+"];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedBudget, setSelectedBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={ref} className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase mb-6"
          style={{ color: "#E53935" }}
        >
          İletişime Geç
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-[clamp(3rem,7vw,8rem)] font-bold leading-[0.9] tracking-tighter mb-20"
        >
          Birlikte
          <br />
          <span className="italic font-light text-white/30">harika şeyler</span>
          <br />
          yapalım.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#E5393520" }}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M7 16l7 7 11-11" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Mesajınız alındı.</h3>
                <p className="text-white/40">24 saat içinde size geri döneceğiz.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-white/40 tracking-widest uppercase">Adınız</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Adınız Soyadınız"
                      className="bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none transition-colors duration-200"
                      style={{ outlineColor: "#E53935" }}
                      onFocus={(e) => (e.target.style.borderColor = "#E53935")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-white/40 tracking-widest uppercase">E-posta</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="siz@sirket.com"
                      className="bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none transition-colors duration-200"
                      onFocus={(e) => (e.target.style.borderColor = "#E53935")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/40 tracking-widest uppercase">Bütçe Aralığı</label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedBudget(opt)}
                        className="px-4 py-2 rounded-full text-sm border transition-all duration-200"
                        style={
                          selectedBudget === opt
                            ? { background: "#E53935", color: "#fff", borderColor: "#E53935" }
                            : { borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.5)" }
                        }
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/40 tracking-widest uppercase">Projenizi Anlatın</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Ne yapmak istediğinizi anlatın..."
                    className="bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none transition-colors duration-200 resize-none"
                    onFocus={(e) => (e.target.style.borderColor = "#E53935")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>

                <button
                  type="submit"
                  className="self-start font-semibold px-10 py-4 rounded-full hover:scale-105 hover:bg-white hover:text-black transition-all duration-200 text-white"
                  style={{ background: "#E53935" }}
                >
                  Mesaj Gönder →
                </button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex flex-col gap-1 border-b border-white/10 pb-6">
                  <span className="text-xs text-white/30 tracking-widest uppercase">{info.label}</span>
                  <span className="text-white font-medium">{info.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#111] rounded-2xl p-8 border border-white/5">
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                Önce tanışmak ister misiniz? Ücretsiz 30 dakikalık keşif görüşmesi için randevu alın.
              </p>
              <button
                className="flex items-center gap-3 font-medium text-sm hover:gap-5 transition-all duration-200"
                style={{ color: "#E53935" }}
              >
                Görüşme Ayarla
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="flex gap-4">
              {["Instagram", "LinkedIn", "Twitter", "Behance"].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:border-[#E53935] hover:text-[#E53935] text-xs transition-all duration-200"
                >
                  {social[0]}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

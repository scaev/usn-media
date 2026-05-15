"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";


const contactInfo = [
  { label: "E-posta", value: "usnmediaofficial@gmail.com", href: "mailto:usnmediaofficial@gmail.com" },
  { label: "Telefon", value: "+90 (544) 496 4479", href: "tel:+905444964479" },
  { label: "Adres", value: "Levent, İstanbul, Türkiye", href: null },
];

const budgetOptions = ["< ₺50K", "₺50K–₺150K", "₺150K–₺500K", "₺500K+"];

const inputBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#fff",
  outline: "none",
  transition: "border-color 0.25s ease",
};

const inputFocus: React.CSSProperties = { borderColor: "#E53935" };
const inputBlur: React.CSSProperties = { borderColor: "rgba(255,255,255,0.08)" };

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", title: "", message: "", budget: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      emailjs.init("kzd2LJ4KXsBl9xCM5");
      await emailjs.send(
        "service_3p1p9ub",
        "template_hyIdo7j",
        {
          name: form.name,
          email: form.email,
          title: form.title,
          message: `${form.message}\n\nBütçe Aralığı: ${form.budget}`,
          time: new Date().toLocaleString('tr-TR'),
        },
        "kzd2LJ4KXsBl9xCM5"
      );
      setSubmitted(true);
      setForm({ name: "", email: "", title: "", message: "", budget: "" });
    } catch {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-36" style={{ background: "#050505" }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.22em] uppercase font-semibold mb-6"
          style={{ color: "#E53935" }}
        >
          İletişime Geç
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 44 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold leading-[0.88] tracking-tight mb-20"
          style={{ fontSize: "clamp(3rem,8vw,9rem)" }}
        >
          Birlikte
          <br />
          <span className="italic font-light text-white/25">harika şeyler</span>
          <br />
          yapalım.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-16 lg:gap-24">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center min-h-[400px] text-center gap-6"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(229,57,53,0.12)",
                    border: "1px solid rgba(229,57,53,0.3)",
                    boxShadow: "0 0 32px rgba(229,57,53,0.2)",
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                    <path d="M7 16l7 7 11-11" stroke="#E53935" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Mesajınız iletildi!</h3>
                <p className="text-white/35">En kısa sürede dönüş yapacağız.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-white/35 tracking-[0.18em] uppercase">Adınız</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Adınız Soyadınız"
                      className="rounded-xl px-4 py-3.5 text-sm placeholder:text-white/20"
                      style={inputBase}
                      onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, inputBlur)}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs text-white/35 tracking-[0.18em] uppercase">E-posta</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="siz@sirket.com"
                      className="rounded-xl px-4 py-3.5 text-sm placeholder:text-white/20"
                      style={inputBase}
                      onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                      onBlur={(e) => Object.assign(e.target.style, inputBlur)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/35 tracking-[0.18em] uppercase">Konu</label>
                  <input
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="Projenizin konusu"
                    className="rounded-xl px-4 py-3.5 text-sm placeholder:text-white/20"
                    style={inputBase}
                    onFocus={(e) => Object.assign(e.target.style, inputFocus)}
                    onBlur={(e) => Object.assign(e.target.style, inputBlur)}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs text-white/35 tracking-[0.18em] uppercase">Bütçe Aralığı</label>
                  <div className="flex flex-wrap gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setForm({ ...form, budget: opt })}
                        className="px-4 py-2 rounded-full text-xs font-semibold border tracking-wide transition-all duration-200"
                        style={
                          form.budget === opt
                            ? {
                                background: "#E53935",
                                color: "#fff",
                                borderColor: "#E53935",
                                boxShadow: "0 0 16px rgba(229,57,53,0.3)",
                              }
                            : {
                                borderColor: "rgba(255,255,255,0.1)",
                                color: "rgba(255,255,255,0.4)",
                                background: "transparent",
                              }
                        }
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs text-white/35 tracking-[0.18em] uppercase">Projenizi Anlatın</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Ne yapmak istediğinizi anlatın..."
                    className="rounded-xl px-4 py-3.5 text-sm placeholder:text-white/20 resize-none"
                    style={inputBase}
                    onFocus={(e) => Object.assign(e.target.style, { ...inputBase, ...inputFocus })}
                    onBlur={(e) => Object.assign(e.target.style, { ...inputBase, ...inputBlur })}
                  />
                </div>

                {error && (
                  <p className="text-sm" style={{ color: "#E53935" }}>{error}</p>
                )}

                <motion.button
                  whileHover={sending ? {} : { scale: 1.04 }}
                  whileTap={sending ? {} : { scale: 0.97 }}
                  type="submit"
                  disabled={sending}
                  className="self-start font-semibold px-10 py-4 rounded-full text-sm text-white flex items-center gap-2.5 disabled:opacity-70"
                  style={{
                    background: "#E53935",
                    boxShadow: "0 0 28px rgba(229,57,53,0.35)",
                  }}
                >
                  {sending ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    "Mesaj Gönder →"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10"
          >
            <div className="flex flex-col gap-5">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex flex-col gap-1.5 border-b pb-5"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xs text-white/25 tracking-[0.2em] uppercase">{info.label}</span>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-white/80 font-medium text-sm hover:text-[#E53935] transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-white/80 font-medium text-sm">{info.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-7 group hover:border-[rgba(229,57,53,0.2)] transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.025)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-sm text-white/40 leading-relaxed mb-5">
                Önce tanışmak ister misiniz? Ücretsiz 30 dakikalık keşif
                görüşmesi için randevu alın.
              </p>
              <button
                className="flex items-center gap-2 font-semibold text-sm hover:gap-4 transition-all duration-200"
                style={{ color: "#E53935" }}
              >
                Görüşme Ayarla
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="flex gap-3">
              {["In", "Li", "Tw", "Be"].map((s, i) => (
                <motion.button
                  key={s}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border flex items-center justify-center text-xs font-bold transition-all duration-200"
                  style={{
                    borderColor: "rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "#E53935";
                    (e.currentTarget as HTMLButtonElement).style.color = "#E53935";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 14px rgba(229,57,53,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.35)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  }}
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

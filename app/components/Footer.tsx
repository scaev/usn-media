"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-2xl font-bold tracking-tighter text-white">USN</span>
              <span className="text-2xl font-bold tracking-tighter" style={{ color: "#E53935" }}>Media</span>
              <span className="w-1.5 h-1.5 rounded-full ml-0.5" style={{ background: "#E53935" }} />
            </div>
            <p className="text-white/30 text-sm">Markanızı zirveye taşıyan yaratıcı ajans.</p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm text-white/40">
            {[
              { label: "Hizmetler", id: "services" },
              { label: "Portfolyo", id: "work" },
              { label: "Hakkımızda", id: "about" },
              { label: "İletişim", id: "contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: "smooth" })}
                className="hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          <p className="text-white/20 text-xs">
            © {year} USN Media. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

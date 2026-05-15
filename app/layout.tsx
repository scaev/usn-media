import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "USN Media — Dijital Pazarlama & Yaratıcı Ajans",
  description:
    "Türk pazarında markanızı zirveye taşıyoruz. Marka kimliği, web tasarım, sosyal medya yönetimi ve motion grafik hizmetleri.",
  openGraph: {
    title: "USN Media — Dijital Pazarlama & Yaratıcı Ajans",
    description:
      "Türk pazarında markanızı zirveye taşıyoruz. Marka kimliği, web tasarım, sosyal medya ve AI UGC üretimi.",
    url: "https://www.usn.media",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "USN Media — Dijital Pazarlama & Yaratıcı Ajans",
    description:
      "Türk pazarında markanızı zirveye taşıyoruz. Marka kimliği, web tasarım, sosyal medya ve AI UGC üretimi.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

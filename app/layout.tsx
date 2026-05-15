import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import MagneticCursor from "./components/MagneticCursor";
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full bg-black text-white antialiased overflow-x-hidden">
        <MagneticCursor />
        {children}
      </body>
    </html>
  );
}

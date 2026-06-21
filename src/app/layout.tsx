import type { Metadata } from "next";
import { Onest, Golos_Text } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
const onest = Onest({ variable: "--font-onest", subsets: ["latin", "cyrillic"], display: "swap", weight: ["400","500","600","700","800"] });
const golos = Golos_Text({ variable: "--font-golos", subsets: ["latin", "cyrillic"], display: "swap", weight: ["400","500","600","700"] });
export const metadata: Metadata = {
  title: "СТАНДАРТ — Медицинский стоматологический центр · Санкт-Петербург · с 2000",
  description: "Медицинский стоматологический центр «СТАНДАРТ» в Санкт-Петербурге с 2000 года. 2 филиала, рейтинг 49, 69 отзывов.",
  keywords: ["СТАНДАРТ", "стоматология Санкт-Петербург"],
  authors: [{ name: "Клиника «СТАНДАРТ»" }],
  icons: { icon: "/favicon.svg", apple: "/favicon.svg" },
  openGraph: { title: "СТАНДАРТ — Медицинский стоматологический центр в Петербурге с 2000 года", description: "2 филиала · рейтинг 49 · 69 отзывов.", siteName: "СТАНДАРТ", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (<html lang="ru" suppressHydrationWarning><body className={`${onest.variable} ${golos.variable} antialiased bg-arkadia-mist text-arkadia-graphite`}>{children}<Toaster /><SonnerToaster position="top-center" theme="light" toastOptions={{ style: { background: "#FFFFFF", color: "#1F2937", border: "1px solid #0D9488", borderRadius: "14px", fontFamily: "var(--font-golos)" } }} /></body></html>);
}

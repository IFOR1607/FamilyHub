import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Family Information Center (FIC)",
  description: "Platform Digital Keluarga Besar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-200 min-h-screen flex justify-center items-center p-0 sm:p-4 font-sans text-slate-800`}
      >
        {/* Frame HP Global untuk Semua Halaman */}
        <div className="w-full max-w-md bg-slate-100 min-h-screen sm:min-h-[844px] sm:rounded-[40px] shadow-2xl flex flex-col justify-between overflow-hidden relative border-4 border-slate-800">
          
          <Header />

          {/* Halaman yang sedang dibuka akan dirender di sini */}
          <div className="flex-1 overflow-y-auto pb-24 p-4">
            {children}
          </div>

          <BottomNav />
        </div>
      </body>
    </html>
  );
}
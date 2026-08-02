import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  themeColor: "#f8fafc", // Menyatu dengan background
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}

          min-h-dvh
          bg-slate-200

          flex
          justify-center

          sm:items-center
          items-start

          p-0
          sm:p-6

          antialiased
          font-sans
          text-slate-800
        `}
      >
        {/* Mobile Frame */}
        <div
          className="
            relative

            w-full
            max-w-md

            min-h-dvh
            sm:min-h-[844px]

            bg-gradient-to-b
            from-slate-50
            via-white
            to-slate-100

            overflow-hidden

            sm:rounded-[40px]

            border
            border-slate-200

            shadow-[0_30px_80px_rgba(15,23,42,.15)]

            flex
            flex-col
          "
        >

          <main
            className="
              flex-1
              overflow-y-auto

              px-4
              pt-2
              pb-28
            "
          >
            {children}
          </main>

          <BottomNav />
        </div>
      </body>
    </html>
  );
}
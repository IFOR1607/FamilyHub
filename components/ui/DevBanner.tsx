"use client";
import { useState, useEffect } from "react";

export default function DevBanner() {
  // Set target waktu countdown (misal 7 hari dari sekarang)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Tanggal target rilis versi penuh (bebas kamu sesuaikan)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-3.5 mb-4 backdrop-blur-sm relative overflow-hidden">
      {/* Glow Effect / Animasi Kelap-Kelip */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>

      <div className="flex flex-col gap-2 relative z-10">
        {/* Teks Animasi Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
            </span>
            <span className="text-xs font-bold text-amber-800 tracking-wide uppercase">
              Under Development
            </span>
          </div>
          <span className="text-[10px] bg-amber-200/80 text-amber-900 font-bold px-2 py-0.5 rounded-full">
            v0.1.0 Beta
          </span>
        </div>

        <p className="text-[11px] text-amber-900/80 font-medium leading-tight">
          🚀 Aplikasi sedang dalam tahap pengembangan aktif oleh Developer Keluarga.
        </p>

        {/* Countdown Timer */}
{/* Fitur Selanjutnya & Progress Bar */}
        <div className="pt-2 border-t border-amber-500/20 mt-0.5 space-y-1.5">
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-amber-800/70 font-semibold">🎯 Target Berikutnya:</span>
            <span className="font-bold text-amber-950 bg-amber-200/80 px-2 py-0.5 rounded-full">
              Halaman Detail Lokasi
            </span>
          </div>

          {/* Simple Progress Bar */}
          <div className="w-full bg-amber-200/60 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-amber-600 h-1.5 rounded-full transition-all duration-500" 
              style={{ width: "35%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";
import dynamic from "next/dynamic";
import { UserPlus, LocateFixed } from "lucide-react";

const DashboardMap = dynamic( () => import("@/components/maps/DashboardMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-slate-100 text-xs text-slate-400 font-medium animate-pulse">
        Memuat Peta...
      </div>
    ),
  }
);


export default function MapHeroCard() {
  // Simulasi data status online/offline tiap member
  const members = [
    { color: "bg-amber-300", name: "A", isOnline: true },
    { color: "bg-sky-300", name: "I", isOnline: true },
    { color: "bg-rose-300", name: "K", isOnline: true },
    { color: "bg-violet-300", name: "D", isOnline: false }, // contoh offline
    { color: "bg-emerald-300", name: "P", isOnline: true },
  ];

  // Hitung otomatis berapa member yang aktif
  const activeCount = members.filter((m) => m.isOnline).length;

  return (
    <div className="relative w-full h-56 overflow-hidden rounded-[28px] border border-white/60 shadow-[0_15px_45px_rgba(15,23,42,.08)] bg-slate-200">
      {/* REAL MAP CONTAINER */}
      <div className="absolute inset-0 z-0">
        <DashboardMap />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      {/* KIRI ATAS: STATUS ACTIVE COUNT */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2 rounded-full bg-white/80 backdrop-blur-md border border-white/50 px-3 py-1.5 shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        
        <span className="text-[11px] font-bold text-slate-700">
          {activeCount} Member Active
        </span>
      </div>

      {/* KANAN ATAS: RE-CENTER BUTTON */}
      <button
        onClick={() => alert("Mencari lokasi kamu...")}
        className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-white/50 shadow-sm flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
      >
        <LocateFixed size={16} className="text-slate-700" />
      </button>
 
      {/* KIRI BAWAH: AVATAR STACK + INDIKATOR STATUS ONLINE/OFFLINE */}
      <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur-md border border-white/50 p-1.5 pr-2.5 shadow-sm">
        {/* Tombol Add Mungil */}
        <button className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm hover:bg-emerald-600 transition-all">
          <UserPlus size={13} />
        </button>

        {/* Avatar Stack dengan Titik Ijo/Abu-abu */}
        <div className="flex -space-x-1.5">
          {members.map((item, index) => (
            <div key={index} className="relative">
              {/* Bulatan Avatar */}
              <div className={`w-7 h-7 rounded-full border-2 border-white ${item.color} shadow-sm flex items-center justify-center text-[9px] font-bold text-slate-700 ${!item.isOnline && "opacity-50 grayscale"}`}>
                {item.name}
              </div>

              {/* Titik Indikator Status di Pojok Kanan Bawah Avatar */}
              <span className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white ${item.isOnline ? "bg-emerald-500" : "bg-slate-400"}`}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
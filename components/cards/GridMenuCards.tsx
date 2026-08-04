import Link from "next/link";
import { Map, FolderLock, CalendarDays, ArrowRight, Wallet, Images, ShieldAlert} from "lucide-react";

export default function GridMenuCards() {
  return (
    <div className="grid grid-cols-2 gap-3.5 mt-4">
      {/* Location */}

<Link
  href="/location" 
  className="group bg-white/80 backdrop-blur-xl border border-white rounded-[26px] p-5 shadow-[0_10px_35px_rgba(15,23,42,.06)] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,.10)] transition-all duration-300 flex flex-col justify-between h-40">
  <div
    className=" w-12 h-12 rounded-2xl

    bg-gradient-to-br
    from-sky-500
    to-cyan-400

    flex
    items-center
    justify-center

    shadow-md
  "
  >
    <Map
      size={22}
      className="text-white"
      strokeWidth={2.3}
    />
  </div>

  <div>

    <h3 className="font-semibold text-[15px] tracking-tight text-slate-800">
      Lokasi Keluarga
    </h3>

    <p className="text-[12px] text-slate-500 mt-1 leading-relaxed">
      Lihat lokasi anggota keluarga secara realtime
    </p>

  </div>

  <div className="flex items-center justify-between">

    <span className="text-[13px] font-semibold text-slate-700">
      5 Lokasi Aktif
    </span>

    <ArrowRight
      size={18}
      className="
      text-slate-400
      group-hover:translate-x-1
      transition-all
      "
    />

  </div>
</Link>

      {/* Vault */}
<Link 
  href="/vault"
  className="group bg-white/80 backdrop-blur-xl border border-white rounded-[26px] p-5 shadow-[0_10px_35px_rgba(15,23,42,.06)] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,.10)] transition-all duration-300 flex flex-col justify-between h-40">
  
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-md">
    <FolderLock
      size={22}
      className="text-white"
      strokeWidth={2.3}
    />
  </div>

  <div>
    <h3 className="font-semibold text-[15px] tracking-tight text-slate-800">
      Family Vault
    </h3>

    <p className="text-[12px] text-slate-500 mt-1 leading-relaxed">
      Simpan seluruh dokumen penting keluarga
    </p>
  </div>

  <div className="flex items-center justify-between">
    <span className="text-[13px] font-semibold text-rose-500">
      1 Perlu Update
    </span>

    <ArrowRight
      size={18}
      className="
      text-slate-400
      group-hover:translate-x-1
      transition-all
      "
    />
  </div>
</Link>

      {/* Calendar */}
<Link
  href="/calendar"
  className="group bg-white/80 backdrop-blur-xl border border-white rounded-[26px] p-5 shadow-[0_10px_35px_rgba(15,23,42,.06)] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,.10)] transition-all duration-300 flex flex-col justify-between h-40">
  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-md">
    <CalendarDays
      size={22}
      className="text-white"
      strokeWidth={2.3}
    />
  </div>

  <div>
    <h3 className="font-semibold text-[15px] tracking-tight text-slate-800">
      Kalender
    </h3>

    <p className="text-[12px] text-slate-500 mt-1 leading-relaxed">
      Jadwal keluarga dan pengingat penting
    </p>
  </div>

  <div className="flex items-center justify-between">

    <span className="text-[13px] font-semibold text-emerald-600">
      2 Agenda Hari Ini
    </span>

    <ArrowRight
      size={18}
      className="
      text-slate-400
      group-hover:translate-x-1
      transition-all
      "
    />

  </div>
</Link>

      {/* Finance */}
<Link href="/finance" 
className="group bg-white/80 backdrop-blur-xl border border-white rounded-[26px] p-5 shadow-[0_10px_35px_rgba(15,23,42,.06)] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,.10)] transition-all duration-300 flex flex-col justify-between h-40">
  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center shadow-md">
    <Wallet
      size={22}
      className="text-white"
      strokeWidth={2.3}
    />
  </div>

  <div>
    <h3 className="font-semibold text-[15px] tracking-tight text-slate-800">
      Kas Keluarga
    </h3>

    <p className="text-[12px] text-slate-500 mt-1 leading-relaxed">
      Kelola keuangan bersama secara transparan
    </p>
  </div>

  <div className="flex items-center justify-between">

    <span className="text-[13px] font-semibold text-slate-700">
      Rp240.000
    </span>

    <ArrowRight
      size={18}
      className="
      text-slate-400
      group-hover:translate-x-1
      transition-all
      "
    />

  </div>
</Link>

      {/* Album */}
<Link 
  href="/album" 
  className="group bg-white/80 backdrop-blur-xl border border-white rounded-[26px] p-5 shadow-[0_10px_35px_rgba(15,23,42,.06)] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,.10)] transition-all duration-300 flex flex-col justify-between h-40">
  
  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-md">
    <Images
      size={22}
      className="text-white"
      strokeWidth={2.3}
    />
  </div>

  <div>
    <h3 className="font-semibold text-[15px] tracking-tight text-slate-800">
      Album Keluarga
    </h3>

    <p className="text-[12px] text-slate-500 mt-1 leading-relaxed">
      Simpan foto dan video keluarga
    </p>
  </div>

  <div className="flex items-center justify-between">
    <span className="text-[13px] font-semibold text-slate-700">
      148 File
    </span>

    <ArrowRight
      size={18}
      className="
      text-slate-400
      group-hover:translate-x-1
      transition-all
      "
    />
  </div>
</Link>

      {/* Emergency */}
<Link
  href="/emergency"
  className="group bg-gradient-to-br from-red-50 via-white to-rose-50 border border-red-100 rounded-[26px] p-5 shadow-[0_10px_35px_rgba(239,68,68,.08)] hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(239,68,68,.12)] transition-all duration-300 flex flex-col justify-between h-40">
  
  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center shadow-md">
    <ShieldAlert
      size={22}
      className="text-white"
      strokeWidth={2.3}
    />
  </div>

  <div>
    <h3 className="font-semibold text-[15px] tracking-tight text-red-700">
      Emergency Center
    </h3>

    <p className="text-[12px] text-red-500 mt-1 leading-relaxed">
      Bantuan cepat saat kondisi darurat
    </p>
  </div>

  <div className="flex items-center justify-between">

    <span className="text-[13px] font-semibold text-red-600">
      Siaga 24 Jam
    </span>

    <ArrowRight
      size={18}
      className="
      text-red-400
      group-hover:translate-x-1
      transition-all
      "
    />

  </div>
</Link>
    </div>

    
  );
}
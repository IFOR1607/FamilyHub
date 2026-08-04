import { ChevronDown, MapPin, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-white/70 border-b border-white/40 px-5 pt-5 pb-4">
      <div className="flex items-center justify-between">

        {/* Location */}

        <button className="flex items-center gap-3 bg-white/90 border border-slate-200/70 rounded-full px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,.06)] hover:shadow-[0_12px_40px_rgba(15,23,42,.10)] transition-all duration-300">
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-sky-500 to-cyan-400 flex items-center justify-center shadow-md">
            <MapPin size={18} className="text-white" strokeWidth={2.5} />
          </div>

          <div className="text-left leading-tight">
            <p className="text-[11px] text-slate-500 font-medium">Family</p>
            <h2 className="text-[14px] font-semibold tracking-tight text-slate-800">Keluarga Besar S.</h2>
          </div>

          <ChevronDown size={18} className="text-slate-400"/>
        </button>

        {/* Right Side */}

        <div className="flex items-center gap-3">

          {/* Notification */}

          <button className="relative w-11 h-11 rounded-full bg-white/90 border border-slate-200 shadow-[0_8px_25px_rgba(15,23,42,.06)] flex items-center justify-center hover:scale-105 transition-all">
            <Bell size={18} className="text-slate-600" />

            <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>

          {/* Avatar */}

          <button className="relative w-12 h-12 rounded-full bg-linear-to-br from-violet-500 via-sky-500 to-cyan-400 p-0.5 shadow-[0_10px_30px_rgba(59,130,246,.30)]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-sm font-semibold text-slate-700">RN</div>
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />
          </button>

        </div>
      </div>
    </header>
  );
}
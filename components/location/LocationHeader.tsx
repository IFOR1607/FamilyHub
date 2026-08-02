import {
  ArrowLeft,
  Search,
  Bell,
} from "lucide-react";

export default function LocationHeader() {
  return (
    <div className="absolute top-5 left-4 right-4 z-40">
      <div className="flex items-center gap-3">

        {/* Back */}
        <button
          className="
          w-11
          h-11
          rounded-2xl
          bg-white/90
          backdrop-blur-xl
          shadow-lg
          border
          border-white
          flex
          items-center
          justify-center
          "
        >
          <ArrowLeft size={20} />
        </button>

        {/* Search */}

        <div
          className="
          flex-1
          h-11
          rounded-2xl
          bg-white/90
          backdrop-blur-xl
          border
          border-white
          shadow-lg

          flex
          items-center

          px-4

          gap-3
          "
        >
          <Search
            size={18}
            className="text-slate-500"
          />

          <span className="text-sm text-slate-500">
            Cari anggota keluarga...
          </span>
        </div>

        {/* Notification */}

        <button
          className="
          w-11
          h-11
          rounded-2xl
          bg-white/90
          backdrop-blur-xl
          shadow-lg
          border
          border-white

          flex
          items-center
          justify-center
          "
        >
          <Bell size={19} />
        </button>

      </div>
    </div>
  );
}
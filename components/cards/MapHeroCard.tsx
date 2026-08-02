import {
  MapPinned,
  Users,
  UserPlus,
  LocateFixed,
} from "lucide-react";

export default function MapHeroCard() {
  return (
    <div
      className="
      relative
      w-full
      h-52
      overflow-hidden
      rounded-[28px]
      border
      border-white/60
      shadow-[0_15px_45px_rgba(15,23,42,.08)]
      bg-slate-200
    "
    >
      {/* ===========================
            GOOGLE MAPS CONTAINER
          =========================== */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(#cbd5e1_1px,transparent_1px)]
        [background-size:12px_12px]
        bg-slate-200
      "
      >
        {/* Nanti ganti menjadi Google Maps */}
      </div>

      {/* Dark Overlay */}

      <div
        className="
        absolute
        inset-0

        bg-gradient-to-b

        from-black/5
        via-transparent
        to-black/35
      "
      />

      {/* ===========================
            INFO CARD
          =========================== */}

      <div
        className="
        absolute
        top-4
        left-4

        backdrop-blur-xl

        bg-white/75

        border
        border-white/40

        rounded-2xl

        px-4
        py-3

        shadow-lg
      "
      >
        <div className="flex items-center gap-3">

          <div
            className="
            w-10
            h-10

            rounded-xl

            bg-gradient-to-br
            from-sky-500
            to-cyan-400

            flex
            items-center
            justify-center

            shadow-md
          "
          >
            <MapPinned
              className="text-white"
              size={20}
              strokeWidth={2.3}
            />
          </div>

          <div>
            <p className="text-[11px] text-slate-500 font-medium">
              Family Location
            </p>

            <h3 className="font-semibold text-[15px] text-slate-800 tracking-tight">
              5 Anggota Aktif
            </h3>
          </div>

        </div>
      </div>

      {/* ===========================
            QUICK BUTTON
          =========================== */}

      <button
        className="
        absolute

        top-4
        right-4

        w-12
        h-12

        rounded-2xl

        bg-white/75

        backdrop-blur-xl

        border
        border-white/40

        shadow-lg

        flex
        items-center
        justify-center

        hover:scale-105
        transition-all
      "
      >
        <LocateFixed
          size={20}
          className="text-slate-700"
        />
      </button>

      {/* ===========================
            AVATAR STACK
          =========================== */}

      <div
        className="
        absolute

        bottom-4
        left-4

        flex
        items-center

        rounded-full

        backdrop-blur-xl

        bg-white/75

        border
        border-white/40

        px-2
        py-2

        shadow-lg
      "
      >
        {/* Add */}

        <button
          className="
          w-10
          h-10

          rounded-full

          bg-gradient-to-br

          from-emerald-500
          to-teal-500

          flex
          items-center
          justify-center

          text-white

          shadow-md

          mr-2

          hover:scale-105

          transition-all
          "
        >
          <UserPlus size={18} />
        </button>

        {/* Avatar */}

        <div className="flex -space-x-3">

          {[
            "bg-amber-300",
            "bg-sky-300",
            "bg-rose-300",
            "bg-violet-300",
            "bg-emerald-300",
          ].map((color, index) => (
            <div
              key={index}
              className={`
                relative
                w-10
                h-10
                rounded-full
                border-[3px]
                border-white
                ${color}
                shadow-md
              `}
            >
              <span
                className="
                absolute
                bottom-0
                right-0

                w-3
                h-3

                rounded-full

                bg-emerald-500

                border-2
                border-white
                "
              />
            </div>
          ))}

        </div>
      </div>

      {/* ===========================
            LIVE STATUS
          =========================== */}

      <div
        className="
        absolute

        bottom-4
        right-4

        rounded-full

        bg-white/75

        backdrop-blur-xl

        border
        border-white/40

        px-4
        py-2

        shadow-lg
      "
      >
        <div className="flex items-center gap-2">

          <Users
            size={16}
            className="text-slate-600"
          />

          <span className="text-xs font-semibold text-slate-700">
            Live Tracking
          </span>

        </div>
      </div>
    </div>
  );
}
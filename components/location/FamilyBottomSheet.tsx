"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "@/contexts/LocationContext";
import { familyMembers } from "@/lib/dummy/family";

import {
  ChevronUp,
  ShieldCheck,
  MapPin,
  Clock3,
  ChevronRight,
} from "lucide-react";





export default function FamilyBottomSheet() {
    const [expanded, setExpanded] = useState(false);
    const {
        selectedMember,
        setSelectedMember,
    } = useLocation();
  return (
    <motion.div
    animate={{
    height: expanded ? "78%" : 280,
    }}

    transition={{
    type: "spring",
    stiffness: 260,
    damping: 28,
    }}
      className="
      absolute
      bottom-0
      left-0
      right-0

      bg-white/95
      backdrop-blur-2xl

      rounded-t-[34px]

      border-t
      border-white

      shadow-[0_-20px_60px_rgba(0,0,0,.15)]

      z-40

      overflow-hidden
      "
    >
      {/* Handle */}

        <button
        onClick={() => setExpanded(!expanded)}
        className="flex justify-center w-full py-3"
        >
        <div className="w-14 h-1.5 rounded-full bg-slate-300" />
        </button>

      {/* Header */}

      <div className="px-5">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="font-bold text-lg text-slate-800">
            {selectedMember.name}
            </h2>
            <div className="flex items-center gap-2 mt-1">

              <ShieldCheck
                size={16}
                className="text-emerald-600"
              />

            <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-700">
                {selectedMember.city}
            </span>

            <span className="text-xs text-slate-500">
                {selectedMember.distance} • {selectedMember.eta}
            </span>
            </div>

            </div>

          </div>

          <ChevronUp
            size={22}
            className="text-slate-500"
          />

        </div>

      </div>

      {/* List */}

      <div className="mt-5 px-4 space-y-3">

        {familyMembers.map((member) => (

            <button
            key={member.id}
            onClick={() => {
                setSelectedMember(member);
            }}
            className={`
                w-full
                rounded-2xl
                px-4
                py-3
                flex
                items-center
                justify-between
                transition-all

                ${
                selectedMember.id === member.id
                    ? "bg-sky-50 ring-2 ring-sky-400 shadow-sm"
                    : "bg-slate-50 hover:bg-slate-100"
                }
            `}
            >

            <div className="flex items-center gap-3">

              <div
                className={`
                w-11
                h-11
                rounded-full
                ${member.color}

                flex
                items-center
                justify-center

                text-white
                font-bold
                `}
              >
                {member.name[0]}
              </div>

              <div className="text-left">

                <div className="font-semibold text-slate-800">
                  {member.name}
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-500">

                  <MapPin size={13} />


                </div>

              </div>

            </div>

            <div className="text-right">

              <div className="font-semibold text-sm text-slate-800">
                {member.distance}
              </div>

              <div className="flex items-center justify-end gap-1 text-xs text-slate-500">

                <Clock3 size={13} />

                {member.eta}

              </div>

            </div>

          </button>

        ))}

      </div>

    </motion.div>
  );
}
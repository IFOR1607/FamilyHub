"use client";

import {
  ArrowLeft,
  Battery,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Route,
  Satellite,
} from "lucide-react";
import type { PointerEventHandler } from "react";
import { familyMembers } from "@/lib/dummy/family";

type FamilyMember = (typeof familyMembers)[number];

type MemberDetailProps = {
  member: FamilyMember;
  onBack: () => void;
  onDragStart: PointerEventHandler<HTMLDivElement>;
};

function MemberHeader({
  member,
  onBack,
  onDragStart,
}: MemberDetailProps) {
  const statusIndicatorClass =
    member.status === "Online" ? "bg-emerald-500" : "bg-slate-400";

  return (
    <div onPointerDown={onDragStart} className="touch-none">
      <button
        onClick={onBack}
        aria-label="Kembali ke daftar keluarga"
        className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100"
      >
        <ArrowLeft size={21} />
      </button>

      <div className="mt-2 text-center">
        <div
          className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full ${member.color} text-3xl font-bold text-white shadow-sm`}
        >
          {member.initial}
        </div>

        <h2 className="mt-4 text-xl font-bold text-slate-800">
          {member.name}
        </h2>

        <div className="mt-2 flex items-center justify-center gap-2 text-sm font-medium text-slate-600">
          <span className={`h-2.5 w-2.5 rounded-full ${statusIndicatorClass}`} />
          {member.status}
        </div>
      </div>
    </div>
  );
}

function LocationCard({ member }: Pick<MemberDetailProps, "member">) {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
          <MapPin size={19} />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Current Location
          </p>
          <p className="mt-1 truncate text-sm font-semibold text-slate-800">
            {member.address}
          </p>
          <p className="mt-1 text-sm text-slate-500">{member.city}</p>
        </div>
      </div>
    </section>
  );
}

function QuickInfoGrid({ member }: Pick<MemberDetailProps, "member">) {
  const items = [
    { label: "ETA", value: member.eta, Icon: Clock3 },
    { label: "Distance", value: member.distance, Icon: Route },
    { label: "Battery", value: `${member.battery}%`, Icon: Battery },
    { label: "GPS", value: member.gpsAccuracy, Icon: Satellite },
  ];

  return (
    <section className="grid grid-cols-2 gap-3">
      {items.map(({ label, value, Icon }) => (
        <div
          key={label}
          className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
        >
          <Icon size={18} className="text-sky-600" />
          <p className="mt-3 text-xs font-medium text-slate-400">{label}</p>
          <p className="mt-1 text-base font-bold text-slate-800">{value}</p>
        </div>
      ))}
    </section>
  );
}

function LastUpdateCard({ member }: Pick<MemberDetailProps, "member">) {
  return (
    <section className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
        <Clock3 size={19} />
      </div>

      <div>
        <p className="text-xs font-medium text-slate-400">Last Updated</p>
        <p className="mt-1 text-sm font-semibold text-slate-800">
          {member.lastUpdate}
        </p>
      </div>
    </section>
  );
}

function ActionButtons() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <button className="flex min-w-0 flex-col items-center justify-center gap-2 rounded-2xl bg-slate-800 px-3 py-3 text-xs font-semibold text-white transition-colors hover:bg-slate-700">
        <Navigation size={18} />
        Navigate
      </button>

      <button className="flex min-w-0 flex-col items-center justify-center gap-2 rounded-2xl bg-sky-50 px-3 py-3 text-xs font-semibold text-sky-700 transition-colors hover:bg-sky-100">
        <Phone size={18} />
        Call
      </button>

      <button className="flex min-w-0 flex-col items-center justify-center gap-2 rounded-2xl bg-sky-50 px-3 py-3 text-xs font-semibold text-sky-700 transition-colors hover:bg-sky-100">
        <MessageCircle size={18} />
        Message
      </button>
    </div>
  );
}

export default function MemberDetail({
  member,
  onBack,
  onDragStart,
}: MemberDetailProps) {
  return (
    <div className="space-y-4 px-5 pb-6">
      <MemberHeader member={member} onBack={onBack} onDragStart={onDragStart} />
      <LocationCard member={member} />
      <QuickInfoGrid member={member} />
      <LastUpdateCard member={member} />
      <ActionButtons />
    </div>
  );
}

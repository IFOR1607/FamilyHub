"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(
  () => import("./LeafletMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-slate-100">
        <span className="text-sm text-slate-500">
          Memuat peta...
        </span>
      </div>
    ),
  }
);

export default function LiveMap() {
  return <LeafletMap />;
}
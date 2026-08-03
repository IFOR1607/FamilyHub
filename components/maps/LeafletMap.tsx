"use client";

import { useEffect } from "react";
import { useLocation } from "@/contexts/LocationContext";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default icon issue di Leaflet + Next.js
const customAvatarIcon = (
  colorBg: string,
  initial: string,
  selected: boolean
) => {
  return L.divIcon({
    className: "custom-map-pin",
    html: `
      <div
        class="
          relative
          flex
          items-center
          justify-center
          rounded-full
          border-2
          border-white
          shadow-xl
          ${colorBg}
          ${
          selected
            ? "marker-selected scale-125 ring-4 ring-sky-400"
            : "scale-100"
        }
          transition-all
          duration-300
          w-9
          h-9
          font-bold
          text-xs
          text-slate-800
        "
      >
        ${initial}

        <span
          class="
            absolute
            -bottom-0.5
            -right-0.5
            w-2.5
            h-2.5
            rounded-full
            bg-emerald-500
            border
            border-white
          "
        ></span>
      </div>
    `,
    iconSize: selected ? [46, 46] : [36, 36],
    iconAnchor: selected ? [23, 23] : [18, 18],
  });
};
// Dummy Data Lokasi Anggota Keluarga
import { familyMembers } from "@/lib/dummy/family";

function MapController({ selectedMember }: { selectedMember: any }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedMember) return;

    map.flyTo(
      [selectedMember.lat, selectedMember.lng],
      12,
      {
        animate: true,
        duration: 1.2,
      }
    );
  }, [selectedMember, map]);

  return null;
}

export default function LiveMap() {

  const {
    selectedMember,
    setSelectedMember,
  } = useLocation();


  return (
    <MapContainer
      center={[-6.9175, 107.6191]} // Center awal (misal: Bandung)
      zoom={7}
      zoomControl={false}
      className="w-full h-full z-0"
    >
      {/* Style Peta Modern & Clean (CartoDB Positron - Mirip Google Maps Clean) */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />

      <MapController selectedMember={selectedMember} />

      {/* Marker Tiap Anggota Keluarga */}
      {familyMembers.map((member) => (
          <Marker
            key={member.id}
            position={[member.lat, member.lng]}
            icon={customAvatarIcon(
              member.color,
              member.initial,
              selectedMember?.id === member.id
            )}
            eventHandlers={{
              click: () => {
                setSelectedMember(member);
              },
            }}
          >
          <Popup className="custom-popup">
            <div className="p-1 text-center font-sans">
              <p className="font-bold text-xs text-slate-800">{member.name}</p>
              <p className="text-[10px] text-slate-500">📍 {member.city}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
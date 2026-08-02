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
const customAvatarIcon = (colorBg: string, initial: string) => {
  return L.divIcon({
    className: "custom-map-pin",
    html: `
      <div class="relative w-9 h-9 rounded-full border-2 border-white shadow-lg ${colorBg} flex items-center justify-center font-bold text-slate-800 text-xs">
        ${initial}
        <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-white"></span>
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
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
            icon={customAvatarIcon(member.color, member.initial)}
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
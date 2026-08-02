"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
const familyMembers = [
  { id: 1, name: "Ayah", city: "Bandung", lat: -6.9175, lng: 107.6191, color: "bg-amber-300", initial: "A" },
  { id: 2, name: "Ibu", city: "Bekasi", lat: -6.2383, lng: 106.9756, color: "bg-sky-300", initial: "I" },
  { id: 3, name: "Kakak", city: "Cikarang", lat: -6.2615, lng: 107.1528, color: "bg-rose-300", initial: "K" },
  { id: 4, name: "Adik", city: "Kuningan", lat: -6.9768, lng: 108.4835, color: "bg-violet-300", initial: "D" },
  { id: 5, name: "Paman", city: "Riau", lat: 0.5071, lng: 101.4478, color: "bg-emerald-300", initial: "P" },
];

export default function LiveMap() {
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

      {/* Marker Tiap Anggota Keluarga */}
      {familyMembers.map((member) => (
        <Marker
          key={member.id}
          position={[member.lat, member.lng]}
          icon={customAvatarIcon(member.color, member.initial)}
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
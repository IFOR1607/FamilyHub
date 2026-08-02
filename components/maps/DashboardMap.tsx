"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

const members = [
  {
    id: 1,
    lat: -6.9175,
    lng: 107.6191,
    color: "bg-amber-300",
    initial: "A",
  },
  {
    id: 2,
    lat: -6.2383,
    lng: 106.9756,
    color: "bg-sky-300",
    initial: "I",
  },
  {
    id: 3,
    lat: -6.2615,
    lng: 107.1528,
    color: "bg-rose-300",
    initial: "K",
  },
  {
    id: 4,
    lat: -6.9768,
    lng: 108.4835,
    color: "bg-violet-300",
    initial: "D",
  },
];

export default function DashboardMap() {
  return (
    <MapContainer
      center={[-6.7, 107.2]}
      zoom={7}
      zoomControl={false}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      keyboard={false}
      attributionControl={false}
      className="w-full h-full"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      {members.map((member) => (
        <Marker
          key={member.id}
          position={[member.lat, member.lng]}
          icon={customAvatarIcon(member.color, member.initial)}
        />
      ))}
    </MapContainer>
  );
}
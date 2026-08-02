"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  House,
  Map,
  FolderLock,
  Lightbulb,
  UserRound,
} from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: House,
    },
    {
      href: "/location",
      label: "Lokasi",
      icon: Map,
    },
    {
      href: "/vault",
      label: "Vault",
      icon: FolderLock,
    },
    {
      href: "/ideas",
      label: "Ideas",
      icon: Lightbulb,
    },
    {
      href: "/profile",
      label: "Profil",
      icon: UserRound,
    },
  ];

  return (
    <nav
      className="
      fixed
      bottom-5
      left-1/2
      -translate-x-1/2

      w-[92%]
      max-w-md

      bg-white/75
      backdrop-blur-2xl

      border
      border-white/70

      rounded-[28px]

      shadow-[0_15px_45px_rgba(15,23,42,.12)]

      px-3
      py-2

      flex
      justify-between
      items-center

      z-50
    "
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className="
            flex
            flex-col
            items-center
            gap-1

            flex-1
            "
          >
            <div
              className={`
              w-12
              h-12

              rounded-2xl

              flex
              items-center
              justify-center

              transition-all
              duration-300

              ${
                active
                  ? "bg-gradient-to-br from-sky-500 to-cyan-400 text-white shadow-lg shadow-sky-200 scale-105"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              }
            `}
            >
              <Icon size={21} strokeWidth={2.3} />
            </div>

            <span
              className={`
              text-[11px]
              font-medium
              transition-all

              ${
                active
                  ? "text-sky-600"
                  : "text-slate-500"
              }
            `}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
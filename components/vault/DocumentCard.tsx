"use client";

import {
  FileText,
  Lock,
  MoreVertical,
  CalendarDays,
  HardDrive,
} from "lucide-react";

import { VaultDocument } from "@/lib/vault/vault";

export type DocumentItem = VaultDocument;

interface DocumentCardProps {
  document: VaultDocument;
}

export default function DocumentCard({
  document,
}: DocumentCardProps) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      border
      border-slate-200
      shadow-sm
      hover:shadow-md
      transition-all
      "
    >
      {/* Preview */}
      <div
        className={`
          h-36
          ${document.previewColor}
          relative
          flex
          items-center
          justify-center
        `}
      >
        <FileText
          size={46}
          className="text-slate-400"
        />

        {document.isPrivate && (
          <div
            className="
            absolute
            bottom-3
            left-3

            flex
            items-center
            gap-1

            rounded-full
            bg-white/80

            px-2
            py-1

            text-[10px]
            font-medium
            backdrop-blur
          "
          >
            <Lock size={11} />

            Private
          </div>
        )}

        <button
          className="
          absolute
          top-3
          right-3

          w-8
          h-8

          rounded-full
          bg-white/80

          flex
          items-center
          justify-center

          backdrop-blur
          "
        >
          <MoreVertical size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">

        <h3 className="font-semibold text-slate-800">
          {document.title}
        </h3>

        <p className="text-xs text-slate-500 mt-1">
          {document.owner}
        </p>

        <div className="mt-4 space-y-2">

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <HardDrive size={13} />
            {document.size}
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <CalendarDays size={13} />
            {document.createdAt}
          </div>

        </div>

      </div>
    </div>
  );
}
"use client";

import { useMemo, useState } from "react";
import VaultSearch from "@/components/vault/VaultSearch";
import FilterCategory from "@/components/vault/FilterCategory";
import DocumentGrid from "@/components/vault/DocumentGrid";
import type { DocumentItem } from "@/components/vault/DocumentCard";

const sampleDocuments: DocumentItem[] = [
  {
    id: 1,
    title: "KTP Budi Setiadi",
    owner: "Baddie Setiadi",
    category: "KTP",
    size: "1.8 MB",
    createdAt: "02 Aug 2026",
    isPrivate: true,
    previewColor: "bg-sky-100",
  },
  {
    id: 2,
    title: "KK Keluarga Setiadi",
    owner: "Serena Gomez",
    category: "KK",
    size: "3.2 MB",
    createdAt: "15 Sep 2026",
    isPrivate: true,
    previewColor: "bg-amber-100",
  },
];

const categoryList = ["Semua", "KTP", "KK", "SIM", "NPWP", "BPJS", "Lainnya"];

export default function VaultPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredDocuments = useMemo(() => {
    return sampleDocuments.filter((document) => {
      const matchesSearch = [document.title, document.owner, document.category]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesCategory = activeCategory === "Semua" || document.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="pb-28 px-4">
      <VaultSearch value={search} onChange={setSearch} onReset={() => setSearch("")} />

      <div className="mt-5">
        <FilterCategory
          categories={categoryList}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Semua Dokumen</h2>
        <DocumentGrid documents={filteredDocuments} />
      </div>

      <button
        className="fixed bottom-24 right-6 w-14 h-14 rounded-full bg-sky-500 text-white text-3xl shadow-xl flex items-center justify-center active:scale-95 transition-all"
        type="button"
      >
        +
      </button>
    </div>
  );
}

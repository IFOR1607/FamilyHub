import { CloudUpload, ShieldCheck, Sparkles } from "lucide-react";

interface VaultHeaderProps {
  totalDocuments: number;
  onUpload?: () => void;
}

export default function VaultHeader({ totalDocuments, onUpload }: VaultHeaderProps) {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-500">Vault Keluarga</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Pusat Dokumen & Arsip</h1>
          <p className="text-sm leading-6 text-slate-600">
            Simpan semua surat penting keluarga dalam satu tempat. Cari cepat, filter berdasarkan anggota, dan kelola file dengan mudah.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <div className="rounded-3xl bg-slate-100 px-4 py-3 text-sm text-slate-700 shadow-sm">
            Total dokumen <span className="font-semibold text-slate-900">{totalDocuments}</span>
          </div>
          <button
            type="button"
            onClick={onUpload}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <CloudUpload className="h-4 w-4" />
            Upload Dokumen
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Penyimpanan</p>
          <p className="mt-3 text-lg font-semibold text-slate-900">2.4 GB</p>
          <p className="mt-1 text-sm text-slate-500">Sudah terpakai dari 5 GB</p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Aman</p>
          <div className="mt-3 flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-sky-500" />
            <div>
              <p className="text-lg font-semibold text-slate-900">Terenkripsi</p>
              <p className="text-sm text-slate-500">Hanya Anda dan keluarga dapat mengakses</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Aktivitas</p>
          <div className="mt-3 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <div>
              <p className="text-lg font-semibold text-slate-900">3 Dokumen Baru</p>
              <p className="text-sm text-slate-500">Ditambahkan minggu ini</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

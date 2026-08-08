import { FolderOpen } from "lucide-react";

export default function EmptyVault() {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
      <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-slate-100 text-slate-600">
        <FolderOpen className="h-8 w-8" />
      </div>
      <h2 className="text-xl font-semibold text-slate-900">Vault Kosong</h2>
      <p className="mt-2 text-sm text-slate-500">
        Belum ada dokumen yang cocok dengan filter saat ini. Coba hapus filter atau unggah dokumen baru.
      </p>
    </div>
  );
}

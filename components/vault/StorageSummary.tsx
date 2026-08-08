interface StorageSummaryProps {
  documents: number;
  categories: number;
  members: number;
  storageUsed: string;
}

export default function StorageSummary({ documents, categories, members, storageUsed }: StorageSummaryProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-sm font-medium text-slate-500">Dokumen</p>
        <p className="mt-3 text-3xl font-semibold text-slate-900">{documents}</p>
        <p className="mt-2 text-sm text-slate-500">Semua arsip tersedia</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-sm font-medium text-slate-500">Kategori</p>
        <p className="mt-3 text-3xl font-semibold text-slate-900">{categories}</p>
        <p className="mt-2 text-sm text-slate-500">Jenis dokumen yang tersimpan</p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-sm font-medium text-slate-500">Penyimpanan</p>
        <p className="mt-3 text-3xl font-semibold text-slate-900">{storageUsed}</p>
        <p className="mt-2 text-sm text-slate-500">Digunakan dari kuota vault</p>
      </div>
    </div>
  );
}

import { UploadCloud } from "lucide-react";

interface DocumentUploaderProps {
  onUpload?: () => void;
}

export default function DocumentUploader({ onUpload }: DocumentUploaderProps) {
  return (
    <section className="rounded-3xl border border-dashed border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-3xl bg-slate-100 text-slate-600">
        <UploadCloud className="h-8 w-8" />
      </div>
      <h2 className="text-lg font-semibold text-slate-900">Unggah dokumen keluarga</h2>
      <p className="mt-2 text-sm text-slate-500">
        Tarik dan lepas file atau pilih dari perangkat untuk menyimpan arsip penting secara aman.
      </p>
      <button
        type="button"
        onClick={onUpload}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
      >
        Unggah Dokumen
      </button>
    </section>
  );
}

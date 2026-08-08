import { X, Download, FileText, FileArchive } from "lucide-react";
import type { DocumentItem } from "./DocumentCard";

interface ConvertModalProps {
  open: boolean;
  document?: DocumentItem;
  onClose: () => void;
  onPdfConvert?: (document: DocumentItem) => void;
  onZipConvert?: (document: DocumentItem) => void;
}

export default function ConvertModal({
  open,
  document,
  onClose,
  onPdfConvert,
  onZipConvert,
}: ConvertModalProps) {
  if (!open || !document) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Konversi Dokumen</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-900">{document.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">
          Pilih format keluaran untuk dokumen ini. Konversi akan menghasilkan file siap diunduh tanpa mengubah data asli.
        </p>

        <div className="mt-5 grid gap-3">
          <button
            type="button"
            onClick={() => onPdfConvert?.(document)}
            className="inline-flex w-full items-center justify-between rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <span className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4" /> Konversi ke PDF
            </span>
            <Download className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => onZipConvert?.(document)}
            className="inline-flex w-full items-center justify-between rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            <span className="inline-flex items-center gap-2">
              <FileArchive className="h-4 w-4" /> Kompres ke ZIP
            </span>
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

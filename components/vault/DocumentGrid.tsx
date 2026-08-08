import type { DocumentItem } from "./DocumentCard";
import DocumentCard from "./DocumentCard";

interface DocumentGridProps {
  documents: DocumentItem[];
}

export default function DocumentGrid({
  documents,
}: DocumentGridProps) {
  if (!documents.length) {
    return null;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {documents.map((document) => (
        <DocumentCard key={document.id} document={document} />
      ))}
    </div>
  );
}

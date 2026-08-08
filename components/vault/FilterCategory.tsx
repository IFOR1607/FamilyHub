interface FilterCategoryProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function FilterCategory({ categories, activeCategory, onChange }: FilterCategoryProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">Kategori Dokumen</p>
          <p className="text-sm text-slate-500">Batas pencarian dokumen berdasarkan jenis.</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}

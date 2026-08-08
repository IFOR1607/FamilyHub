interface MemberFilterProps {
  members: string[];
  activeMember: string;
  onChange: (member: string) => void;
}

export default function MemberFilter({ members, activeMember, onChange }: MemberFilterProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">Filter Anggota</p>
          <p className="text-sm text-slate-500">Tampilkan dokumen berdasarkan pemilik.</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {members.map((member) => {
          const isActive = member === activeMember;
          return (
            <button
              key={member}
              type="button"
              onClick={() => onChange(member)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {member}
            </button>
          );
        })}
      </div>
    </div>
  );
}

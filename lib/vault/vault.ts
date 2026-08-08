export interface VaultDocument {
  id: number;
  title: string;
  owner: string;
  category: string;
  size: string;
  createdAt: string;
  isPrivate: boolean;
  previewColor: string;
}

export const vaultDocuments: VaultDocument[] = [
  {
    id: 1,
    title: "KTP Ayah",
    owner: "Ayah",
    category: "KTP",
    size: "1.8 MB",
    createdAt: "2 Agu 2026",
    isPrivate: true,
    previewColor: "bg-sky-100",
  },
  {
    id: 2,
    title: "KTP Ibu",
    owner: "Ibu",
    category: "KTP",
    size: "1.6 MB",
    createdAt: "2 Agu 2026",
    isPrivate: true,
    previewColor: "bg-pink-100",
  },
  {
    id: 3,
    title: "KK Keluarga",
    owner: "Keluarga",
    category: "KK",
    size: "3.2 MB",
    createdAt: "1 Agu 2026",
    isPrivate: true,
    previewColor: "bg-amber-100",
  },
  {
    id: 4,
    title: "SIM Ayah",
    owner: "Ayah",
    category: "SIM",
    size: "2.0 MB",
    createdAt: "30 Jul 2026",
    isPrivate: true,
    previewColor: "bg-emerald-100",
  },
  {
    id: 5,
    title: "NPWP Ayah",
    owner: "Ayah",
    category: "NPWP",
    size: "900 KB",
    createdAt: "28 Jul 2026",
    isPrivate: true,
    previewColor: "bg-violet-100",
  },
  {
    id: 6,
    title: "Paspor Kakak",
    owner: "Kakak",
    category: "Paspor",
    size: "2.4 MB",
    createdAt: "20 Jul 2026",
    isPrivate: true,
    previewColor: "bg-cyan-100",
  },
  {
    id: 7,
    title: "Ijazah Kakak",
    owner: "Kakak",
    category: "Ijazah",
    size: "5.6 MB",
    createdAt: "18 Jul 2026",
    isPrivate: true,
    previewColor: "bg-orange-100",
  },
  {
    id: 8,
    title: "Akta Lahir Adik",
    owner: "Adik",
    category: "Akta",
    size: "2.1 MB",
    createdAt: "10 Jul 2026",
    isPrivate: true,
    previewColor: "bg-indigo-100",
  },
];
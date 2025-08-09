import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BeritaDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [berita, setBerita] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/berita`)
        .then((res) => res.json())
        .then((json) => {
          const found = Array.isArray(json) ? json.find((b) => String(b.id) === String(id)) : null;
          setBerita(found || null);
        });
    }
  }, [id]);

  if (!berita) return <div className="p-8 text-center text-gray-500">Memuat...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2 text-green-700">{berita.judul}</h1>
      <div className="text-gray-500 text-sm mb-4">{new Date(berita.tanggal).toLocaleString()}</div>
      {berita.gambar && (
        <img src={`/uploads/${berita.gambar}`} alt={berita.judul} className="mb-4 w-full max-w-md rounded" />
      )}
      <div className="text-gray-800 whitespace-pre-line mb-8">{berita.isi}</div>
      <Link href="/berita" className="text-green-700 hover:underline">&lt; Kembali ke Daftar Berita</Link>
    </div>
  );
}

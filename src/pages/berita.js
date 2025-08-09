import { useEffect, useState } from "react";
import Link from "next/link";

export default function BeritaLanding() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/berita")
      .then((res) => res.json())
      .then((json) => setData(Array.isArray(json) ? json : []));
  }, []);

  return (
    <div className="max-w-2xl ml-8 mx-0 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-8">Berita Terkini Terkait Yayasan</h1>
      <div className="space-y-8">
        {data.map((b) => (
          <div key={b.id} className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row items-start gap-4">
            {b.gambar && (
              <img
                src={`/uploads/${b.gambar}`}
                alt={b.judul}
                className="w-32 h-32 object-cover rounded mb-2 md:mb-0"
              />
            )}
            <div className="flex-1">
              <div className="font-bold text-lg mb-1">{b.judul}</div>
              <div className="text-gray-500 text-sm mb-2">{new Date(b.tanggal).toLocaleDateString()}</div>
              <Link href={`/berita/${b.id}`}>
                <button className="text-green-700 underline text-sm hover:text-green-900">Baca Selengkapnya</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/" className="text-green-700 hover:underline">&lt; Kembali ke Beranda</Link>
      </div>
    </div>
  );
}

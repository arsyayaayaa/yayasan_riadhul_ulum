import { useEffect, useState, useRef } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

export default function AdminBerita() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [judul, setJudul] = useState('');
  const [isi, setIsi] = useState('');
  const [editId, setEditId] = useState(null);
  const [gambar, setGambar] = useState(null);
  const fileInputRef = useRef();

  const sidebarMenus = [
    { href: "/admin", title: "Dashboard", emoji: "🏠" },
    { href: "/admin/berita", title: "Kelola Berita", emoji: "📰" },
    { href: "/admin/visimisi", title: "Kelola Visi Misi", emoji: "🎯" },
    { href: "/admin/sekolah", title: "Kelola Informasi Sekolah", emoji: "🏫" },
    { href: "/admin/galeri", title: "Kelola Galeri/Foto", emoji: "🖼️" },
    { href: "/admin/psb", title: "Kelola PSB", emoji: "👨‍🎓" },
    { href: "/admin/users", title: "Profil Pengguna", emoji: "👤" },
  ];

  async function load() {
    const res = await fetch('/api/berita');
    setData(await res.json());
  }
  useEffect(() => { load(); }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    let gambarUrl = gambar;
    try {
      if (gambar && typeof gambar !== "string") {
        const formData = new FormData();
        formData.append('file', gambar);
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        if (!uploadRes.ok) {
          const err = await uploadRes.text();
          throw new Error('Upload gagal: ' + err);
        }
        const uploadData = await uploadRes.json();
        gambarUrl = uploadData.filename;
      }
      const url = '/api/berita';
      const method = editId ? 'PUT' : 'POST';
      const body = JSON.stringify(
        editId
          ? { id: editId, judul, isi, gambar: gambarUrl }
          : { judul, isi, gambar: gambarUrl }
      );
      const res = await fetch(url, { method, headers: {'Content-Type': 'application/json'}, body });
      if (!res.ok) {
        const err = await res.text();
        throw new Error('Simpan gagal: ' + err);
      }
      setJudul(''); setIsi(''); setEditId(null); setGambar(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      load();
    } catch (err) {
      console.error('Error saat submit:', err);
      alert('Terjadi error: ' + err.message);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Yakin ingin menghapus berita ini?")) return;
    await fetch('/api/berita', { method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ id }) });
    load();
  }

  function handleEdit(b) {
    setEditId(b.id);
    setJudul(b.judul);
    setIsi(b.isi);
    setGambar(b.gambar || null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function handleCancel() {
    setEditId(null);
    setJudul('');
    setIsi('');
    setGambar(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full max-w-full bg-gradient-to-tr from-[#e0fdf4] to-[#f4f6f8] rounded-none md:rounded-[32px] overflow-hidden shadow-none md:shadow-[0_8px_32px_rgba(76,222,128,0.10)]">
      <aside className="w-full md:w-[250px] bg-gradient-to-b from-[#4ade80] to-[#15803d] text-white min-h-[70px] md:min-h-screen py-5 md:py-9 pb-4 md:pb-6 flex flex-row md:flex-col items-center md:items-center justify-center md:justify-start shadow-none md:shadow-[2px_0_16px_rgba(76,222,128,0.10)] rounded-none md:rounded-tr-[32px] md:rounded-br-[32px] sticky top-0 z-10">
        <div className="text-xl md:text-2xl font-bold mb-0 md:mb-14 tracking-wider drop-shadow-[0_2px_12px_rgba(0,0,0,0.13)] font-sans hidden md:block">
          Admin Panel
        </div>
        <nav className="w-full flex-1">
          <ul className="flex flex-row md:flex-col w-full justify-center md:justify-start items-center md:items-stretch gap-1 md:gap-0 p-0 list-none">
            {sidebarMenus.map((menu) => {
              const isActive = router.pathname === menu.href;
              return (
                <li key={menu.href} className="mb-0 md:mb-2.5">
                  <Link href={menu.href} legacyBehavior>
                    <a
                      className={`flex items-center gap-2 md:gap-4 text-[#166534] no-underline text-[1rem] md:text-[1.08rem] px-4 md:px-9 py-2 md:py-3.5 rounded-xl font-medium transition-all cursor-pointer relative outline-none border-none
                        ${isActive ? "bg-[#bbf7d0] font-bold shadow-[0_2px_12px_#4ade8055] outline outline-2 outline-[#fff3]" : "bg-transparent"}
                        hover:bg-[#bbf7d0] hover:text-[#166534] hover:shadow-[0_2px_12px_#bbf7d055]`}
                    >
                      <span className="text-lg md:text-[1.4rem]">{menu.emoji}</span>
                      <span className="hidden md:inline">{menu.title}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4 md:p-10 bg-[#fafffb] rounded-none md:rounded-[24px] m-0 md:m-8 md:ml-0 shadow-none md:shadow-[0_4px_24px_rgba(76,222,128,0.07)] min-w-0 flex flex-col">
        <div className="w-full max-w-full md:max-w-4xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-[#15803d] mb-6 md:mb-8">Kelola Berita</h1>
          <form
            onSubmit={handleSubmit}
            className={`bg-white rounded-xl shadow p-4 md:p-6 mb-6 md:mb-8 flex flex-col gap-4 max-w-full md:max-w-xl mx-auto ${editId ? "border-2 border-[#4ade80]" : ""}`}
            encType="multipart/form-data"
          >
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-semibold mb-1 text-[#166534]">Judul Berita</label>
                <input
                  type="text"
                  value={judul}
                  onChange={e => setJudul(e.target.value)}
                  className="border border-[#bbf7d0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4ade80] text-base w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[#166534]">Isi Berita</label>
                <textarea
                  value={isi}
                  onChange={e => setIsi(e.target.value)}
                  className="border border-[#bbf7d0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4ade80] text-base min-h-[100px] w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[#166534]">Gambar</label>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={e => setGambar(e.target.files[0] || gambar)}
                  className="border border-[#bbf7d0] rounded-lg px-4 py-2 bg-white text-base w-full"
                />
                {editId && gambar && typeof gambar === "string" && (
                  <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <span>Current image: </span>
                    <a
                      href={`/uploads/${gambar}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#15803d] underline"
                    >
                      {gambar}
                    </a>
                  </div>
                )}
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  type="submit"
                  className={`px-5 py-2 rounded-lg font-semibold transition-all
                    ${editId ? "bg-[#4ade80] text-[#166534] hover:bg-[#22c55e]" : "bg-[#15803d] text-white hover:bg-[#166534]"}
                `}
                >
                  {editId ? "Update" : "Tambah"}
                </button>
                {editId && (
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-5 py-2 rounded-lg font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300"
                  >
                    Batal
                  </button>
                )}
              </div>
            </div>
          </form>

          <div className="overflow-x-auto rounded-xl shadow bg-white">
            <table className="min-w-[600px] md:min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-3 bg-[#bbf7d0] text-[#166534] font-bold text-left">Judul</th>
                  <th className="px-4 py-3 bg-[#bbf7d0] text-[#166534] font-bold text-left">Isi</th>
                  <th className="px-4 py-3 bg-[#bbf7d0] text-[#166534] font-bold text-left">Gambar</th>
                  <th className="px-4 py-3 bg-[#bbf7d0] text-[#166534] font-bold text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map(b => (
                  <tr key={b.id} className="even:bg-[#f4f6f8]">
                    <td className="px-4 py-2 align-top break-words max-w-[180px]">{b.judul}</td>
                    <td className="px-4 py-2 align-top break-words max-w-[220px]">{b.isi}</td>
                    <td className="px-4 py-2 align-top">
                      {b.gambar ? (
                        <a
                          href={`/uploads/${b.gambar}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`/uploads/${b.gambar}`}
                            alt={b.judul}
                            className="w-20 h-14 object-cover rounded shadow border border-[#bbf7d0]"
                          />
                        </a>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleEdit(b)}
                        className="px-4 py-1.5 rounded-lg bg-[#bbf7d0] text-[#166534] font-semibold mr-2 hover:bg-[#4ade80] transition-all"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(b.id)}
                        className="px-4 py-1.5 rounded-lg bg-red-100 text-red-700 font-semibold hover:bg-red-200 transition-all"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const sekolahTabs = [
  { id: "tk", label: "TK" },
  { id: "mi", label: "MI" },
  { id: "mts", label: "MTS" },
  { id: "majlis", label: "Majlis Ta'lim" },
];

export default function AdminSekolah() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("tk");
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ id: null, judul: "", url: "", isi: "", gambar: null });
  const [editMode, setEditMode] = useState(false);
  const fileInputRef = useRef();

  useEffect(() => {
    loadData();
    setEditMode(false);
    setForm({ id: null, judul: "", url: "", isi: "", gambar: null });
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, [activeTab]);

  async function loadData() {
    const res = await fetch(`/api/sekolah/${activeTab}`);
    const json = await res.json();
    setData(Array.isArray(json) ? json : json ? [json] : []);
  }

  function handleEdit(item) {
    setEditMode(true);
    setForm({ ...item, gambar: item.gambar || null });
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleDelete(id) {
    if (!window.confirm("Yakin ingin menghapus data ini?")) return;
    await fetch(`/api/sekolah/${activeTab}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    loadData();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let gambarUrl = form.gambar;
    // Jika gambar bertipe File (baru diupload), upload ke server
    if (form.gambar && typeof form.gambar !== "string") {
      const fd = new FormData();
      fd.append("file", form.gambar);
      const uploadRes = await fetch("/api/upload", { method: "POST", body: fd });
      if (uploadRes.ok) {
        const uploadData = await uploadRes.json();
        gambarUrl = uploadData.filename;
      }
    }
    // Jika gambar kosong (tidak diinput ulang), tetap gunakan gambar lama
    const payload = { ...form, gambar: gambarUrl };
    const method = editMode ? "PUT" : "POST";
    await fetch(`/api/sekolah/${activeTab}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setEditMode(false);
    setForm({ id: null, judul: "", url: "", isi: "", gambar: null });
    if (fileInputRef.current) fileInputRef.current.value = "";
    loadData();
  }

  const sidebarMenus = [
    { href: "/admin", title: "Dashboard", emoji: "🏠" },
    { href: "/admin/berita", title: "Kelola Berita", emoji: "📰" },
    { href: "/admin/visimisi", title: "Kelola Visi Misi", emoji: "🎯" },
    { href: "/admin/sekolah", title: "Kelola Informasi Sekolah", emoji: "🏫" },
    { href: "/admin/galeri", title: "Kelola Galeri/Foto", emoji: "🖼️" },
    { href: "/admin/psb", title: "Kelola PSB", emoji: "👨‍🎓" },
    { href: "/admin/users", title: "Profil Pengguna", emoji: "👤" },
  ];

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
          <h1 className="text-xl md:text-2xl font-bold text-[#15803d] mb-6 md:mb-8">Kelola Informasi Sekolah</h1>
          <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
            {sekolahTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-7 py-2 rounded-[24px] font-semibold text-[1rem] md:text-[1.05rem] transition-all
                  ${activeTab === tab.id
                    ? "bg-[#22c55e] text-white shadow-[0_2px_8px_#22c55e33]"
                    : "bg-[#e0ffe7] text-[#166534] hover:bg-[#bbf7d0]"}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-4 md:p-6 mb-6 md:mb-8 flex flex-col gap-4 max-w-full md:max-w-xl mx-auto">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-semibold mb-1 text-[#166534]">Judul</label>
                <input
                  type="text"
                  value={form.judul}
                  onChange={(e) => setForm({ ...form, judul: e.target.value })}
                  className="border border-[#bbf7d0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4ade80] text-base w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[#166534]">Sub Judul (URL)</label>
                <input
                  type="text"
                  value={form.url}
                  onChange={(e) => setForm({ ...form, url: e.target.value })}
                  className="border border-[#bbf7d0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4ade80] text-base w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[#166534]">Deskripsi</label>
                <textarea
                  value={form.isi}
                  onChange={(e) => setForm({ ...form, isi: e.target.value })}
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
                  onChange={(e) => setForm({ ...form, gambar: e.target.files[0] || form.gambar })}
                  className="border border-[#bbf7d0] rounded-lg px-4 py-2 bg-white text-base w-full"
                />
                {editMode && form.gambar && typeof form.gambar === "string" && (
                  <div className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                    <span>Current image: </span>
                    <a
                      href={`/uploads/${form.gambar}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#15803d] underline"
                    >
                      {form.gambar}
                    </a>
                  </div>
                )}
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  type="submit"
                  className={`px-5 py-2 rounded-lg font-semibold transition-all
                    ${editMode ? "bg-[#4ade80] text-[#166534] hover:bg-[#22c55e]" : "bg-[#15803d] text-white hover:bg-[#166534]"}
                  `}
                >
                  {editMode ? "Update" : "Tambah"}
                </button>
                {editMode && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditMode(false);
                      setForm({ id: null, judul: "", url: "", isi: "", gambar: null });
                      if (fileInputRef.current) fileInputRef.current.value = "";
                    }}
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
                  <th className="px-4 py-3 bg-[#bbf7d0] text-[#166534] font-bold text-left">Sub Judul</th>
                  <th className="px-4 py-3 bg-[#bbf7d0] text-[#166534] font-bold text-left">Deskripsi</th>
                  <th className="px-4 py-3 bg-[#bbf7d0] text-[#166534] font-bold text-left">Gambar</th>
                  <th className="px-4 py-3 bg-[#bbf7d0] text-[#166534] font-bold text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className="even:bg-[#f4f6f8]">
                    <td className="px-4 py-2 align-top break-words max-w-[180px]">{item.judul}</td>
                    <td className="px-4 py-2 align-top break-words max-w-[120px]">{item.url}</td>
                    <td className="px-4 py-2 align-top break-words max-w-[220px]">{item.isi}</td>
                    <td className="px-4 py-2 align-top">
                      {item.gambar && (
                        <a
                          href={`/uploads/${item.gambar}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#15803d] underline"
                        >
                          {item.gambar}
                        </a>
                      )}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => handleEdit(item)}
                        className="px-4 py-1.5 rounded-lg bg-[#bbf7d0] text-[#166534] font-semibold mr-2 hover:bg-[#4ade80] transition-all"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
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

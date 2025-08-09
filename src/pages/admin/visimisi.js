import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

export default function AdminVisiMisi() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    visi: '',
    misi: '',
    tujuan: ''
  });
  const [editMode, setEditMode] = useState(false);

  const sidebarMenus = [
    { href: "/admin", title: "Dashboard", emoji: "🏠" },
    { href: "/admin/berita", title: "Kelola Berita", emoji: "📰" },
    { href: "/admin/visimisi", title: "Kelola Visi Misi", emoji: "🎯" },
    { href: "/admin/sekolah", title: "Kelola Informasi Sekolah", emoji: "🏫" },
    { href: "/admin/galeri", title: "Kelola Galeri/Foto", emoji: "🖼️" },
    { href: "/admin/psb", title: "Kelola PSB", emoji: "👨‍🎓" },
    { href: "/admin/users", title: "Profil Pengguna", emoji: "👤" },
  ];

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const res = await fetch('/api/visimisi');
      const data = await res.json();
      setFormData(data);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch('/api/visimisi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to save');
      alert('Data berhasil disimpan');
      setEditMode(false);
      loadData();
    } catch (error) {
      alert('Error: ' + error.message);
    }
  }

  function handleEdit() {
    setEditMode(true);
  }

  function handleCancel() {
    setEditMode(false);
    loadData();
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
        <div className="w-full max-w-full md:max-w-[1000px] mx-auto">
          <h1 className="text-xl md:text-2xl font-bold text-[#15803d] mb-6 md:mb-8">Kelola Visi Misi</h1>
          {!editMode ? (
            <div className="bg-white rounded-xl shadow p-4 md:p-8 flex flex-col gap-6 max-w-full md:max-w-2xl mx-auto">
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-[#166534]">Visi</div>
                <div className="text-base text-gray-700 min-h-[40px] break-words">
                  {formData.visi || <span className="text-gray-400">Belum diisi</span>}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-[#166534]">Misi</div>
                <div className="text-base text-gray-700 min-h-[40px] break-words">
                  {formData.misi || <span className="text-gray-400">Belum diisi</span>}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-[#166534]">Tujuan</div>
                <div className="text-base text-gray-700 min-h-[40px] break-words">
                  {formData.tujuan || <span className="text-gray-400">Belum diisi</span>}
                </div>
              </div>
              <button
                className="mt-4 px-6 py-2 rounded-lg bg-[#4ade80] text-[#166534] font-semibold hover:bg-[#22c55e] transition-all w-fit self-end"
                onClick={handleEdit}
              >
                Edit
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-4 md:p-8 flex flex-col gap-6 max-w-full md:max-w-[900px] mx-auto">
              {['visi', 'misi', 'tujuan'].map((field) => (
                <div key={field} className="flex flex-col gap-2">
                  <label className="font-semibold text-[#166534]">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                  <textarea
                    value={formData[field]}
                    onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                    className="border border-[#bbf7d0] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4ade80] text-base min-h-[80px]"
                    placeholder={`Masukkan ${field}`}
                  />
                </div>
              ))}
              <div className="flex gap-3 mt-2">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-[#15803d] text-white font-semibold hover:bg-[#166534] transition-all"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-all"
                  onClick={handleCancel}
                >
                  Batal
                </button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
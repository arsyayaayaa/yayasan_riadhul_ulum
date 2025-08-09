import Link from "next/link";
import { useRouter } from "next/router";

export default function AdminDashboard() {
  const router = useRouter();
  const sidebarMenus = [
    { href: "/admin", title: "Dashboard", emoji: "🏠" },
    { href: "/admin/berita", title: "Kelola Berita", emoji: "📰" },
    { href: "/admin/visimisi", title: "Kelola Visi Misi", emoji: "🎯" },
    { href: "/admin/sekolah", title: "Kelola Informasi Sekolah", emoji: "🏫" },
    { href: "/admin/galeri", title: "Kelola Galeri/Foto", emoji: "🖼️" },
    { href: "/admin/psb", title: "Kelola PSB", emoji: "👨‍🎓" },
    { href: "/admin/users", title: "Profil Pengguna", emoji: "👤" },
  ];

  const menuItems = [
    { href: "/admin/berita", title: "Kelola Berita", emoji: "📰" },
    { href: "/admin/visimisi", title: "Kelola Visi Misi", emoji: "🎯" },
    { href: "/admin/sekolah", title: "Kelola Informasi Sekolah", emoji: "🏫" },
    { href: "/admin/galeri", title: "Kelola Galeri/Foto", emoji: "🖼️" },
    { href: "/admin/psb", title: "Kelola PSB", emoji: "👨‍🎓" },
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
                        ${
                          isActive
                            ? "bg-[#bbf7d0] font-bold shadow-[0_2px_12px_#4ade8055] outline outline-2 outline-[#fff3]"
                            : "bg-transparent"
                        }
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
        <h1 className="text-xl md:text-2xl font-bold text-[#15803d] mb-6 md:mb-8">
          Dashboard Admin
        </h1>
        <div className="flex flex-wrap gap-4 md:gap-7 mt-4">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} legacyBehavior>
              <a className="bg-gradient-to-tr from-[#e0ffe7] to-[#bbf7d0] rounded-[18px] shadow-[0_2px_12px_rgba(76,222,128,0.08)] px-4 md:px-5 py-6 md:py-8 min-w-[140px] md:min-w-[220px] flex-1 flex flex-col items-center text-center text-[#166534] no-underline border border-[#bbf7d0] transition-all cursor-pointer hover:shadow-[0_8px_32px_rgba(76,222,128,0.13)] hover:bg-gradient-to-tr hover:from-[#bbf7d0] hover:to-[#e0ffe7] hover:border-[#4ade80]">
                <span className="text-2xl md:text-[2.3rem] mb-2 md:mb-3 drop-shadow-[0_2px_2px_#4ade8033]">
                  {item.emoji}
                </span>
                <h2 className="text-base md:text-[1.22rem] font-bold m-0">{item.title}</h2>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
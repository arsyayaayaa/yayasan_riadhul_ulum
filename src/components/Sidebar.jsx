import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  { href: "/admin", title: "Dashboard", icon: "🏠" },
  { href: "/admin/berita", title: "Kelola Berita", icon: "📰" },
  { href: "/admin/visimisi", title: "Kelola Visi Misi", icon: "🎯" },
  { href: "/admin/sekolah", title: "Kelola Informasi Sekolah", icon: "🏫" },
  { href: "/admin/galeri", title: "Kelola Galeri/Foto", icon: "🖼️" },
  { href: "/admin/psb", title: "Kelola PSB", icon: "👨‍🎓" },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-64 bg-green-700 text-white min-h-screen p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-8">Admin Menu</h2>
      <nav className="flex flex-col space-y-4">
        {menuItems.map(({ href, title, icon }) => {
          const isActive = router.pathname === href;
          return (
            <Link key={href} href={href}>
              <a
                className={`flex items-center space-x-3 px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive ? "bg-green-900 font-semibold" : "hover:bg-green-800"
                }`}
              >
                <span className="text-xl">{icon}</span>
                <span>{title}</span>
              </a>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

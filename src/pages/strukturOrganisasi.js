import Image from "next/image";
import React from "react";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";

export default function strukturOrganisasi() {
  return (
    <div>
     {/* Header (tidak diubah) */}
          <nav className=" flex pl-3 pr-[60px] bg-[#ffffff]">
            <Image
              className=" w-[59px] h-[52px] m-[10px]"
              src="/logoYayasan.png"
              alt="logo"
              width={1500}
              height={200}
            />
            <div className="flex gap-[30px] pl-[15px]">
              <h1 className="pt-[12px] font-bold">
                YAYASAN RIADHUL ULUM
                <br /> AMPENAN
              </h1>
            </div>
            <div className="flex gap-[74px] pt-[20px] pl-[600px]">
              <Link
                href="/"
                className="text-[15px] font-bold flex items-center gap-1 text-[#1F581A]"
              >
                <span className="text-[15px] font-bold flex items-center gap-1">
                  Beranda
                  <i className="fa-solid fa-chevron-down text-[12px] mt-[2px]" />
                </span>
              </Link>
    
              <Dropdown
                title="Profile"
                items={[
                  { label: "Visi dan Misi", href: "/visi" },
                  { label: "Struktur Organisasi", href: "/strukturOrganisasi" },
                  { label: "Sejarah", href: "/sejarah" },
                  { label: "Kurikulum", href: "kurikulum" },
                  { label: "Penerimaan Siswa Baru", href: "psiswabaru" },
                ]}
              />
              <Dropdown
                title="Layanan"
                items={[
                  { label: "Taman Kanak-Kanak", href: "/tk" },
                  { label: "Madrasah Ibtidaiyah", href: "/mi" },
                  { label: "Madrasah Tsanawiyah", href: "/mts" },
                  { label: "Majlis Ta'lim", href: "/majlis" },
                ]}
              />
            </div>
          </nav>

      <div className="bg-[#D9D9D9] w-full py-[20px] pl-[60px]">
        <h1 className="text-[60px] text-[#1F581A] font-thin py">
          Struktur Oganisasi
        </h1>
      </div>

      <div className="bg-gray-100 py-10 px-5">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Pembina
        </h2>

        <div className="flex flex-col items-center space-y-6">
          {/* Kepala Yayasan */}
          <div className="bg-green-700 text-white px-6 py-3 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Ketua</h3>
            <p className="text-sm">Prof. DR. TGH. Lukman Al Hakim, MM</p>
          </div>

          {/* Wakil Kepala */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">Anggota</h3>
              <p className="text-sm">H. Ahmad Anwar Ismail, BA</p>
            </div>
            <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">Anggota</h3>
              <p className="text-sm">Nurdi</p>
            </div>
            <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">Anggota</h3>
              <p className="text-sm">Sawaludin, Spd, M.Si</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-5">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Pengurus
        </h2>

        <div className="flex flex-col items-center space-y-6">
          {/* Kepala Yayasan */}
          <div className="bg-green-700 text-white px-6 py-3 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Ketua Umum</h3>
            <p className="text-sm">H. Zaini Bidaya, SH., MH.</p>
          </div>

          {/* Wakil Kepala */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">Sekertaris Umum</h3>
              <p className="text-sm">Mashur, S.Pd.I</p>
            </div>
            <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">Ketua</h3>
              <p className="text-sm">H. Nazarudin S.Pd</p>
            </div>
            <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">bendahara Umum</h3>
              <p className="text-sm">H. Sadri</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-green-500 text-white px-4 py-3 rounded-xl shadow">
              <h4 className="font-semibold">Sekertaris</h4>
              <p className="text-sm">Usman, Spd., M.Si</p>
            </div>
            <div className="bg-green-500 text-white px-4 py-3 rounded-xl shadow">
              <h4 className="font-semibold">Bendahara</h4>
              <p className="text-sm">H. Minarso</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-5">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Pengawas
        </h2>

        <div className="flex flex-col items-center space-y-6">
          {/* Kepala Yayasan */}
          <div className="bg-green-700 text-white px-6 py-3 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">Ketua</h3>
            <p className="text-sm">H. Purwanto</p>
          </div>

          {/* Wakil Kepala */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">Sekertaris Umum</h3>
              <p className="text-sm">Mashur, S.Pd.I</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="bg-[#3f543f] w-full h-[200px] flex items-center justify-between px-[200px] pt-[100px]">
          <div>
            <h1 className="text-[#ffffff] font-bold pb-3 text-[20px] ">
              Kontak
            </h1>
            <p className="text-[#dbd8d8] font-thin text-[15px]">
              Jalan Ragigenep, Gg Dahlia Sintung, <br /> Kelurahan Banjar,
              Ampenan, Kota <br />
              Mataram, Nusa Tenggara Barat <br /> <br />
              Telepon: 0878-6503-1644 <br /> <br />
              Email : RiadhulUlum@gamil.com <br />
            </p>
          </div>

          <div>
            <p className="text-[#dbd8d8] font-thin text-[15px]">
              Telepon: 0878-6503-1644 <br />
              Email : RiadhulUlum@gamil.com <br />
            </p>
          </div>

          <div>
            <h1 className="text-[#ffffff] font-bold pb-3 text-[20px]">
              Layanan
            </h1>
            <p className="text-[#dbd8d8] font-thin text-[15px]">
              Taman Kanak-Kanak <br />
              Madrasah Ibtidaiyah <br />
              Madrasah Tsanawiyah <br />
              Majelis Taklim
            </p>
          </div>
        </div>

        <div className="bg-[#3f543f] text-white font-bold text-center pt-24 text-[15px] pb-5">
          2020 © YAYASAN RIADHUL ULUM. ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}
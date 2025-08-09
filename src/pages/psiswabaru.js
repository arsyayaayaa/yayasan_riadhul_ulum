import Image from "next/image";
import React from "react";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";

export default function Ppdb() {
  return (
    <div>
      {/* Header (tidak diubah) */}
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

      {/* JUDUL */}
      <section className="bg-gradient-to-r from-[#e5ffe5] via-[#D9D9D9] to-[#f2f2f2] w-full py-12 flex items-center justify-center shadow-inner">
        <div className="text-center">
          <h1 className="text-[44px] md:text-[60px] text-[#247536] font-extrabold tracking-wide drop-shadow-md uppercase">
            Penerimaan Peserta Didik Baru
          </h1>
          <p className="text-[#377c3b] text-lg mt-3 font-light italic max-w-2xl mx-auto">
            Bergabunglah bersama kami membangun generasi Islam yang cerdas dan berakhlak mulia!
          </p>
          <div className="mt-4 flex justify-center">
            <span className="inline-block w-24 h-2 rounded-full bg-gradient-to-r from-[#247536] to-[#5be584]" />
          </div>
        </div>
      </section>

      {/* GAMBAR */}
      <div className="flex justify-center -mt-10 mb-10 relative z-10">
        <div className="rounded-3xl shadow-2xl overflow-hidden border-4 border-[#1F581A]/20 max-w-4xl w-full bg-white h-[420px] md:h-[520px]">
          <img
            className="w-full h-full object-cover object-center"
            src="/ppdb.png"
            alt="Penerimaan Peserta Didik Baru"
          />
        </div>
      </div>

      {/* ISI */}
      <div className="px-[20px] md:px-[60px] pt-[10px] pb-16 flex flex-col items-center">
        <article className="bg-white/90 shadow-xl rounded-2xl max-w-3xl mx-auto p-8 border border-[#e5ffe5]">
          <h2 className="text-[#35732F] text-2xl md:text-3xl font-semibold mb-4 text-center">
            Penerimaan Peserta Didik Baru Di Yayasan Riadhul Ulum
          </h2>
          <ul className="mb-6 text-gray-700 text-base md:text-lg font-light list-disc space-y-3 pl-5">
            <li>
              <span className="font-semibold text-[#1F581A]">PPDB</span> Yayasan Riadhul Ulum membuka peluang bagi putra-putri Anda untuk bergabung di lingkungan pendidikan yang religius, berkualitas, dan berakhlak mulia.
            </li>
            <li>
              <span className="font-semibold">Jenjang pendaftaran:</span>
              <ul className="list-decimal pl-8 mt-1">
                <li>Taman Kanak-Kanak (TK)</li>
                <li>Kelas 1 Madrasah Ibtidaiyah (MI)</li>
                <li>Kelas 7 Madrasah Tsanawiyah (MTs)</li>
              </ul>
            </li>
            <li>
              Proses pendaftaran <span className="font-semibold">mudah, terbuka, dan transparan</span> serta dapat diakses oleh masyarakat umum.
            </li>
            <li>
              Kurikulum mengintegrasikan ilmu pengetahuan umum dan keislaman, disertai pembelajaran aktif, menyenangkan, serta berbasis karakter.
            </li>
            <li>
              <span className="font-semibold">Tenaga pendidik profesional</span> dan lingkungan belajar yang aman, nyaman, serta kondusif, siap membina generasi muda menjadi insan yang cerdas, bertakwa, dan siap menghadapi tantangan masa depan.
            </li>
          </ul>
    
        </article>
      </div>

      {/* Footer (tidak diubah) */}
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
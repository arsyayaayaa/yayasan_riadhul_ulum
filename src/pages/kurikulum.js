import Image from "next/image";
import React from "react";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";

export default function kurikulum() {
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
        <h1 className="text-[60px] text-[#1F581A] font-thin py">Kurikulum</h1>
      </div>

      <div>
        <img className="w-full h-[500px]" src="/LandingPage.png" alt="" />
      </div>

      <div className="px-[60px] pt-[50px]">
        <h2 className="bg-[#1F581A] text-white inline-block py-2 px-5 text-[20px] rounded">
          Kurikulum
        </h2>
        <div className="py-[15px]">
          {/* TK */}
          <div className="mb-7">
            <h3 className="text-[20px] text-[#35732F] font-bold mb-2">Taman Kanak-Kanak (TK)</h3>
            <div className="text-[18px] text-[#35732F]">
              Kurikulum TK Riadhul Ulum berfokus pada pengembangan karakter, akhlak mulia, dan keterampilan dasar anak melalui pendekatan bermain sambil belajar.
              <br />
              <span className="font-semibold">Muatan kurikulum:</span>
              <ul className="list-disc pl-6">
                <li>Pengenalan nilai-nilai Islam (doa, adab, hafalan surat pendek)</li>
                <li>Perkembangan motorik, kognitif, bahasa, dan sosial-emosional</li>
                <li>Aktivitas kreatif: seni, musik, dan keterampilan hidup sederhana</li>
              </ul>
              Kurikulum mengacu pada <span className="italic">Kurikulum Merdeka PAUD</span> dan dipadukan dengan muatan keislaman khas yayasan.
            </div>
          </div>
          {/* MI */}
          <div className="mb-7">
            <h3 className="text-[20px] text-[#35732F] font-bold mb-2">Madrasah Ibtidaiyah (MI)</h3>
            <div className="text-[18px] text-[#35732F]">
              MI Riadhul Ulum menerapkan <span className="font-semibold">Kurikulum Merdeka</span> yang diperkaya dengan kurikulum Madrasah Kementerian Agama RI.
              <br />
              <span className="font-semibold">Muatan kurikulum:</span>
              <ul className="list-disc pl-6">
                <li>Pelajaran umum: Matematika, IPA, IPS, Bahasa Indonesia, Bahasa Inggris</li>
                <li>Pelajaran agama Islam: Al-Qur'an Hadits, Fiqih, Akidah Akhlak, SKI, Bahasa Arab</li>
              </ul>
              Kurikulum bertujuan membentuk siswa yang cerdas, berakhlak, dan berwawasan luas.
            </div>
          </div>
          {/* MTs */}
          <div>
            <h3 className="text-[20px] text-[#35732F] font-bold mb-2">Madrasah Tsanawiyah (MTs)</h3>
            <div className="text-[18px] text-[#35732F]">
              MTs Riadhul Ulum mengadopsi <span className="font-semibold">Kurikulum Merdeka</span> dan kurikulum Madrasah Kemenag RI yang berorientasi pada penguatan keilmuan dan karakter Islami.
              <br />
              <span className="font-semibold">Muatan kurikulum:</span>
              <ul className="list-disc pl-6">
                <li>Pelajaran umum: Matematika, IPA, IPS, Bahasa Indonesia, Bahasa Inggris, TIK</li>
                <li>Pelajaran Agama: Al-Qur'an Hadits, Fiqih, Akidah Akhlak, SKI, Bahasa Arab</li>
              </ul>
              Lulusan diharapkan berilmu pengetahuan, berkarakter, dan siap melanjutkan ke jenjang lebih tinggi.
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

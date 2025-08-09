import Image from "next/image";
import React from "react";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";

export default function PesantrenRamadhan() {
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

      {/* Judul Section */}
      <section className="bg-gradient-to-r from-[#e5ffe5] via-[#D9D9D9] to-[#f2f2f2] w-full py-12 flex items-center justify-center shadow-inner">
        <div className="text-center">
          <h1 className="text-[48px] md:text-[60px] text-[#247536] font-extrabold tracking-wide drop-shadow-md uppercase">
            Pesantren Ramadhan
          </h1>
          <div className="mt-2 flex justify-center">
            <span className="inline-block w-24 h-2 rounded-full bg-gradient-to-r from-[#247536] to-[#5be584]" />
          </div>
        </div>
      </section>

    {/* Gambar lebih tinggi agar tidak terpotong */}
<div className="flex justify-center -mt-10 mb-10 relative z-10">
  <div className="rounded-3xl shadow-lg overflow-hidden border-4 border-[#247536]/20 max-w-5xl w-full bg-white h-[520px] md:h-[620px]">
    <Image
      src="/full.jpg"
      alt="Pesantren Ramadhan"
      fill
      className="object-cover rounded-3xl"
      style={{ objectPosition: "center" }}
    />
  </div>
</div>

      {/* Isi dengan card */}
      <div className="px-4 md:px-[60px] pt-[10px] pb-16 flex flex-col items-center">
        <article className="bg-[#f8fff8] shadow-md rounded-2xl max-w-3xl mx-auto p-8 border border-[#e5ffe5]">
          <h2 className="text-[#1F581A] text-xl md:text-2xl font-bold mb-4 text-center tracking-wide">
            PESANTREN RAMADHAN
          </h2>
          <p className="text-gray-800 text-base md:text-lg leading-relaxed font-light mb-6 text-justify">
            <span className="font-semibold text-[#35732F]">Pesantren Ramadhan</span> merupakan salah satu program rutin tahunan yang diselenggarakan setiap bulan Ramadhan. Kegiatan ini dilaksanakan selama <span className="font-semibold">tiga hari</span>, tepat sebelum siswa diliburkan untuk menyambut Hari Raya Idul Fitri.
            <br /><br />
            Program ini diikuti oleh seluruh siswa dan siswi dari <span className="font-semibold">kelas 4 MI hingga kelas 9 MTs</span>, dengan tujuan utama untuk memperkuat pemahaman keislaman, memperdalam ibadah, serta menanamkan nilai-nilai spiritual selama bulan suci Ramadhan.
            <br /><br />
            Selama kegiatan berlangsung, para peserta akan mengikuti berbagai aktivitas bernuansa islami seperti <span className="font-semibold">kajian keagamaan</span>, <span className="font-semibold">tadarus Al-Qur’an</span>, <span className="font-semibold">ceramah motivasi</span>, serta <span className="font-semibold">praktik ibadah harian</span>. Pesantren Ramadhan ini tidak hanya menjadi momen pembelajaran spiritual, tetapi juga sarana untuk membentuk karakter dan mempererat ukhuwah antar siswa.
          </p>
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
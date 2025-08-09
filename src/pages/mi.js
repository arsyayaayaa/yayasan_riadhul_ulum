import Image from "next/image";
import React, { useEffect, useState } from "react";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";

export default function MIPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/sekolah/mi")
      .then((res) => res.json())
      .then((json) => setData(Array.isArray(json) ? json : []));
  }, []);

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

      {data.map((item) => (
        <React.Fragment key={item.id}>
          {/* JUDUL */}
          <section className="bg-gradient-to-r from-[#D9D9D9] via-[#e8f5e9] to-[#d0f5c7] w-full py-[40px] px-[60px] flex items-center gap-6">
            <div>
              <h1 className="text-[54px] md:text-[70px] text-[#1F581A] font-extrabold tracking-tight drop-shadow-lg leading-tight">
                {item.judul || "Madrasah Ibtidaiyah"}
              </h1>
              <div className="mt-3 w-24 h-2 bg-gradient-to-r from-[#1F581A] to-[#5be584] rounded-full"></div>
            </div>
          </section>

          {/* GAMBAR */}
          <div className="flex justify-center -mt-12 mb-10 relative z-10">
            <div className="rounded-3xl shadow-2xl overflow-hidden border-4 border-[#1F581A]/20 max-w-4xl w-full">
              <img
                className="w-full h-[340px] md:h-[420px] object-cover object-center transition-transform duration-500 hover:scale-105"
                src={item.gambar ? `/uploads/${item.gambar}` : "/mi.png"}
                alt={item.judul || "Madrasah Ibtidaiyah"}
              />
            </div>
          </div>

          {/* ISI */}
          <div className="px-[20px] md:px-[60px] pt-[10px] pb-16 flex flex-col items-center">
            <article className="bg-white/90 shadow-xl rounded-2xl max-w-3xl mx-auto p-8 border border-[#e5ffe5]">
              <h2 className="text-[#35732F] text-2xl md:text-3xl font-semibold mb-4 text-center">
                {item.url || "Tentang MI Riadhul Ulum"}
              </h2>
              <div
                className="text-gray-700 text-base md:text-lg leading-relaxed font-light text-justify"
                dangerouslySetInnerHTML={{ __html: item.isi?.replace(/\n/g, "<br>") || "" }}
              />
            </article>
          </div>
        </React.Fragment>
      ))}

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
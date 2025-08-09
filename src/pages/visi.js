import Image from "next/image";
import React, { useEffect, useState } from "react";
import Dropdown from "@/components/Dropdown";
import Link from "next/link";

export default function Visi() {
  const [data, setData] = useState({ visi: "", misi: "", tujuan: "" });

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/visimisi");
        const visiMisiData = await res.json();
        setData(visiMisiData);
      } catch (error) {
        console.error("Error loading visi misi:", error);
      }
    }
    loadData();
  }, []);

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
          Visi dan Misi
        </h1>
      </div>

      <div className="px-[60px] pt-[50px] ">
        <h2 className="bg-[#1F581A] text-white inline-block py-2 px-5 text-[20px] rounded">
          V I S I
        </h2>
        <h3 className="py-[15px] text-[20px] text-[#35732F]">
          {data.visi}
        </h3>
      </div>

      <div className="px-[60px] pt-[20px]">
        <h2 className="bg-[#1F581A] text-white inline-block py-2 px-5 text-[20px] rounded">
          M I S I
        </h2>
        <h3
          className="py-[10px] text-[20px] text-[#35732F]"
          dangerouslySetInnerHTML={{
            __html: data.misi?.replace(/\n/g, "<br>"),
          }}
        ></h3>
      </div>

      <div className="px-[60px] pt-[50px] pb-[50px]">
        <h2 className="bg-[#1F581A] text-white inline-block py-2 px-5 text-[20px] rounded">
          TUJUAN
        </h2>
        <h3 className="py-[15px] text-[20px] text-[#35732F]">
          {data.tujuan}
        </h3>
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
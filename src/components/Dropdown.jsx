import React, { useState } from "react";

export default function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="text-[15px] font-normal text-[#263c72] flex items-center gap-1 pt-[15px]">
        {title}
        <i className="fa-solid fa-chevron-down text-[12px] mt-[2px]" />
      </button>

      {open && (
        <div className="absolute bg-[#1F581A] text-[#B8C8A0] shadow-md mt-2 rounded-md z-10 w-40">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm text-white hover:bg-[#B8C8A0] hover:text-[#1F581A]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

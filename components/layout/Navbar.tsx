"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="flex w-full max-w-[1440px] mx-auto h-[72px] sm:h-[88px] lg:h-[100px] px-4 sm:px-6 md:px-[42px] justify-between items-center">
        <div className="flex h-[50px] sm:h-[63px] justify-center items-center gap-2.5">
          <p className="text-white/80 text-center font-display text-[20px] sm:text-[22px] md:text-[25.6px] font-normal tracking-[2.56px] uppercase">
            SYNC
          </p>
        </div>
        <div className="hidden md:flex h-[63px] py-[10px] pr-[20px] pl-[1px] justify-center items-center gap-8 lg:gap-[90px]">
          <p className="text-white hover:underline cursor-pointer text-sm lg:text-base">SCHEDULE</p>
          <p className="text-white hover:underline cursor-pointer text-sm lg:text-base">ON-DEMAND</p>
          <p className="text-white hover:underline cursor-pointer text-sm lg:text-base">THE STUDIO</p>
        </div>
        <div className="hidden md:flex py-[10px] justify-end items-center gap-2.5">
          <p className="text-white hover:underline cursor-pointer text-sm lg:text-base">JOIN SYNC</p>
        </div>
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden absolute top-[72px] sm:top-[88px] left-0 right-0 bg-black/95 transition-all ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex flex-col items-center gap-6 py-8">
          <p className="text-white hover:underline cursor-pointer">SCHEDULE</p>
          <p className="text-white hover:underline cursor-pointer">ON-DEMAND</p>
          <p className="text-white hover:underline cursor-pointer">THE STUDIO</p>
          <p className="text-white hover:underline cursor-pointer">JOIN SYNC</p>
        </div>
      </div>
    </nav>
  );
}

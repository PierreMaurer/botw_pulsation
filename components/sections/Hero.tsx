"use client";

import { useRef, useEffect, useState } from "react";
import ButtonJOIN from "@/components/ui/Button";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSoundOn, setIsSoundOn] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
      videoRef.current.muted = false;
    }
  }, []);

  const handleSoundOn = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsSoundOn(true);
    }
  };

  const handleSoundOff = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsSoundOn(false);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-[35px]">
          <div className="flex flex-col gap-[50px] items-center">
            <p className="text-white/80 text-center font-['Syne'] text-[128.6px] font-normal tracking-[12.86px] uppercase leading-normal">SYNC</p>
            <p className="text-[var(--Primaire-Blanc,#F4F4F4)] text-center font-['Syne'] text-[25px] font-normal tracking-[2.5px] uppercase">YOUR DANCE, EVERY WHERE, EVERY TIME</p>
          </div>
          <ButtonJOIN>JOIN SYNC</ButtonJOIN>
        </div>
      </div>
      <div className="absolute left-[42px] bottom-[32px] z-10 flex flex-row items-center gap-1 text-[#F4F4F4] text-center font-sans text-[15.6px] font-light tracking-[1.56px] uppercase">
        <span className="mr-[17px]">SOUND</span>
        <span
          onClick={handleSoundOn}
          className={`cursor-pointer ${isSoundOn ? "opacity-100" : "opacity-50"}`}
        >
          ON
        </span>
        <span>/</span>
        <span
          onClick={handleSoundOff}
          className={`cursor-pointer ${!isSoundOn ? "opacity-100" : "opacity-50"}`}
        >
          OFF
        </span>
      </div>
    </section>
  );
}

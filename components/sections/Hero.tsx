"use client";

import { useRef, useLayoutEffect, useEffect, useState, useCallback } from "react";
import ButtonJOIN from "@/components/ui/Button";

function tryPlay(video: HTMLVideoElement | null) {
  if (!video) return;
  video.volume = 0.3;
  video.muted = true;
  video.play().catch(() => {});
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSoundOn, setIsSoundOn] = useState(false);

  useLayoutEffect(() => {
    tryPlay(videoRef.current);
  }, []);

  useEffect(() => {
    tryPlay(videoRef.current);
    const interval = setInterval(() => {
      const el = videoRef.current;
      if (el?.paused) tryPlay(el);
    }, 250);
    const stop = setTimeout(() => clearInterval(interval), 3000);
    return () => {
      clearTimeout(stop);
      clearInterval(interval);
    };
  }, []);

  const handleCanPlay = useCallback(() => {
    tryPlay(videoRef.current);
  }, []);

  const handleLoadedData = useCallback(() => {
    tryPlay(videoRef.current);
  }, []);

  const setVideoRef = useCallback((el: HTMLVideoElement | null) => {
    (videoRef as React.MutableRefObject<HTMLVideoElement | null>).current = el;
    if (el) tryPlay(el);
  }, []);

  const handleSoundOn = () => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
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
    <section className="relative h-screen w-full min-w-0 overflow-hidden">
      <video
        ref={setVideoRef}
        autoPlay
        loop
        playsInline
        muted
        preload="auto"
        onCanPlay={handleCanPlay}
        onLoadedData={handleLoadedData}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <div className="flex flex-col items-center gap-6 sm:gap-[35px]">
          <div className="flex flex-col gap-6 sm:gap-[50px] items-center">
            <p className="text-white/80 text-center font-['Syne'] text-[56px] sm:text-[80px] md:text-[100px] lg:text-[128.6px] font-normal tracking-[6px] sm:tracking-[10px] lg:tracking-[12.86px] uppercase leading-normal">SYNC</p>
            <p className="text-[var(--Primaire-Blanc,#F4F4F4)] text-center font-['Syne'] text-[14px] sm:text-[18px] md:text-[22px] lg:text-[25px] font-normal tracking-[1.5px] sm:tracking-[2.5px] uppercase max-w-[320px] sm:max-w-none">YOUR DANCE, EVERY WHERE, EVERY TIME</p>
          </div>
          <ButtonJOIN>JOIN SYNC</ButtonJOIN>
        </div>
      </div>
      <div className="absolute left-4 sm:left-6 lg:left-[42px] bottom-6 lg:bottom-[32px] z-10 flex flex-row items-center gap-1 text-[#F4F4F4] text-center font-sans text-[13px] sm:text-[15.6px] font-light tracking-[1.56px] uppercase">
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
      <div className="absolute left-1/2 bottom-2 sm:bottom-0 z-10 flex -translate-x-1/2 flex-col-reverse items-center gap-2 sm:gap-3">
        <div className="h-[40px] sm:h-[60px] w-[2px] bg-[var(--Primaire-Blanc,#F4F4F4)]" />
        <span className="text-center font-sans text-[13px] sm:text-[15.6px] font-light leading-normal tracking-[1.56px] uppercase text-[var(--Primaire-Blanc,#F4F4F4)]">
          SCROLL
        </span>
      </div>
    </section>
  );
}

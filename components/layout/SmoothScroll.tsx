"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const defaultOptions = {
  duration: 1.2,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  touchMultiplier: 2,
};

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={defaultOptions}>
      {children}
    </ReactLenis>
  );
}

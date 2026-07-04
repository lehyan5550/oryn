"use client";

import { useEffect, useRef } from "react";
import Logo from "./Logo";

const MAX_SHIFT = 120;

export default function HeroParallaxBackground() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY * 0.3, MAX_SHIFT);
        if (ref.current) {
          ref.current.style.transform = `translateY(${offset}px)`;
        }
        raf = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-x-0 -top-[10%] h-[130%] will-change-transform"
    >
      <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,#2a2a2a_0%,#111111_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.75)_100%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_1px,transparent_16px)]" />
      <Logo
        mark
        wordmark={false}
        light
        className="absolute right-[-6%] top-1/2 h-[70vh] -translate-y-1/2 opacity-[0.08]"
      />
    </div>
  );
}

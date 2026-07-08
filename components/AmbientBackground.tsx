"use client";

import { useEffect, useRef } from "react";

export default function AmbientBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const handleMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY + window.scrollY;
    };

    const animate = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${cx - 240}px, ${cy - 240}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid-slate bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]" />
      <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-brand-indigo/20 blur-3xl animate-blob" />
      <div className="absolute top-96 -right-24 w-[480px] h-[480px] rounded-full bg-brand-purple/20 blur-3xl animate-blob [animation-delay:-4s]" />
      <div className="absolute top-[160vh] left-1/3 w-[440px] h-[440px] rounded-full bg-brand-blue/15 blur-3xl animate-blob [animation-delay:-8s]" />
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[480px] h-[480px] rounded-full bg-brand-indigo/[0.06] blur-3xl hidden md:block"
      />
    </div>
  );
}

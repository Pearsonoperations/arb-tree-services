"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [
      { el: textRef.current, delay: 0 },
      { el: imgRef.current, delay: 150 },
    ];

    items.forEach(({ el }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = el === textRef.current ? "translateX(-60px)" : "translateX(60px)";
      el.style.transition = "opacity 0.9s ease-out, transform 0.9s ease-out";
    });

    const isMobile = window.innerWidth < 768;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el === textRef.current ? 0 : isMobile ? 150 : 700;
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          }, delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.3 }
    );

    items.forEach(({ el }) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-6 bg-[#EEF5F1] overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div ref={textRef}>
          <p className="text-base font-semibold tracking-widest text-[#16A34A] uppercase mb-3">
            About us
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1B4332] mb-6">
            40 years. Same standards.
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            ARB Tree Services has been caring for trees across Dudley and the West Midlands for over four decades. Every job we take on is treated the same — safe, clean, professional.
          </p>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            We're NVQ qualified arborists who work to BS 3998 — the British Standard for tree work. We carry full public liability insurance and hold a Waste Carriers Licence, so your garden is left exactly as we found it.
          </p>
          <p className="text-[#6B7280] leading-relaxed">
            No call centres. No subcontractors. Just an experienced local team who turn up when they say they will.
          </p>
        </div>

        <div ref={imgRef} className="rounded-3xl overflow-hidden aspect-square">
          <Image
            src="/about-hero.jpg"
            alt="ARB Tree Services team at work"
            width={600}
            height={600}
            className="w-full h-full object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

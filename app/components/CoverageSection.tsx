"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const areas = [
  "Dudley", "Wolverhampton", "Birmingham", "Stourbridge",
  "Halesowen", "Walsall", "Brierley Hill", "Tipton",
  "Sedgley", "Kingswinford", "Quarry Bank", "West Midlands",
];

export default function CoverageSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [
      { el: textRef.current, x: "-60px" },
      { el: mapRef.current, x: "60px" },
    ];
    items.forEach(({ el, x }) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = `translateX(${x})`;
      el.style.transition = "opacity 0.9s ease-out, transform 0.9s ease-out";
    });
    const isMobile = window.innerWidth < 768;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const delay = entry.target === mapRef.current ? (isMobile ? 150 : 700) : 0;
          setTimeout(() => {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateX(0)";
          }, delay);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );
    [textRef.current, mapRef.current].forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="areas" className="py-24 px-6 bg-[#D1E8D8] overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div ref={textRef}>
          <p className="text-base font-semibold tracking-widest text-[#16A34A] uppercase mb-3">
            Coverage
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1B4332] mb-4">
            Serving Dudley &amp; the West Midlands
          </h2>
          <p className="text-[#6B7280] mb-10 max-w-lg">
            Based in Dudley, we cover the entire West Midlands region. Not sure if we cover your area? Call us — chances are we do.
          </p>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="bg-white border border-[#E5E7EB] text-[#1B4332] font-semibold text-sm px-4 py-2 rounded-full"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
        <div ref={mapRef} className="rounded-3xl overflow-hidden">
          <Image
            src="/west-midlands-map.jpg"
            alt="West Midlands coverage map"
            width={600}
            height={450}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

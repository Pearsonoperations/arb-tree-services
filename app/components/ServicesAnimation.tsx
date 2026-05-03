"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const LEFT = ["Tree Felling", "Tree Removal", "Crown Thinning", "Hedge Cutting"];
const RIGHT = ["Crown Reduction", "Stump Grinding", "Deadwooding", "Emergency Callout"];

export default function ServicesAnimation() {
  const parentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;

    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const parent = parentRef.current;
      const section = sectionRef.current;
      if (!parent || !section) return;

      const leftItems = section.querySelectorAll<HTMLElement>(".svc-l");
      const rightItems = section.querySelectorAll<HTMLElement>(".svc-r");

      gsap.set(leftItems, { opacity: 0, x: -70 });
      gsap.set(rightItems, { opacity: 0, x: 70 });

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            // Trigger off the tall parent — CSS sticky handles visual pinning
            trigger: parent,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });

        for (let i = 0; i < 4; i++) {
          tl.to(leftItems[i], { opacity: 1, x: 0, duration: 0.4 }, i * 0.55);
          tl.to(rightItems[i], { opacity: 1, x: 0, duration: 0.4 }, i * 0.55);
        }
      }, parent);
    };

    init();
    return () => { try { ctx?.revert(); } catch (_) {} };
  }, []);

  return (
    // Tall parent gives scroll room. CSS sticky does the visual pinning — no GSAP pin, no z-index stacking issues.
    <div ref={parentRef} id="services" style={{ height: "calc(100vh + 1600px)", scrollMarginTop: "64px" }}>
      <section
        ref={sectionRef}
        className="bg-[#1B4332] overflow-hidden sticky top-0"
        style={{ height: "100vh" }}
      >
        <div className="h-full flex flex-col items-center justify-center max-w-5xl mx-auto px-6">
          <p className="text-base font-semibold tracking-widest text-[#16A34A] uppercase mb-3">
            What we do
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 md:mb-14 text-center">
            Tree surgery services
          </h2>

          {/* Desktop layout */}
          <div className="hidden md:flex items-center justify-between w-full gap-4">
            <div className="flex flex-col gap-9 flex-1 items-end">
              {LEFT.map((s, i) => (
                <div key={i} className="svc-l text-right">
                  <p className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-none">{s}</p>
                  <div className="h-px bg-[#16A34A]/60 mt-2" />
                </div>
              ))}
            </div>

            <div className="flex-shrink-0">
              <Image
                src="/tree-center.png"
                alt="Tree illustration"
                width={320}
                height={427}
                className="w-56 lg:w-80 h-auto"
                sizes="320px"
                priority
              />
            </div>

            <div className="flex flex-col gap-9 flex-1 items-start">
              {RIGHT.map((s, i) => (
                <div key={i} className="svc-r">
                  <p className="text-xl lg:text-2xl font-bold text-white tracking-tight leading-none">{s}</p>
                  <div className="h-px bg-[#16A34A]/60 mt-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile grid */}
          <div className="md:hidden grid grid-cols-2 gap-5 w-full">
            {[...LEFT, ...RIGHT].map((s, i) => (
              <div key={i} className="border-l-2 border-[#16A34A] pl-3">
                <p className="text-sm font-bold text-white leading-snug">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ScrollExpandHeroProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  subtitle?: string;
  scrollToExpand?: string;
  children?: ReactNode;
}

export default function ScrollExpandHero({
  mediaType = "image",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  subtitle,
  scrollToExpand,
  children,
}: ScrollExpandHeroProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const handleWheel = (e: Event) => {
      const we = e as globalThis.WheelEvent;
      if (mediaFullyExpanded && we.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        we.preventDefault();
      } else if (!mediaFullyExpanded) {
        we.preventDefault();
        const delta = we.deltaY * 0.0009;
        setScrollProgress((prev) => {
          const next = Math.min(Math.max(prev + delta, 0), 1);
          if (next >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
          else if (next < 0.75) setShowContent(false);
          return next;
        });
      }
    };

    const handleTouchStart = (e: Event) => {
      setTouchStartY((e as globalThis.TouchEvent).touches[0].clientY);
    };

    const handleTouchMove = (e: Event) => {
      const te = e as globalThis.TouchEvent;
      if (!touchStartY) return;
      const deltaY = touchStartY - te.touches[0].clientY;
      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        te.preventDefault();
      } else if (!mediaFullyExpanded) {
        te.preventDefault();
        const factor = deltaY < 0 ? 0.008 : 0.005;
        setScrollProgress((prev) => {
          const next = Math.min(Math.max(prev + deltaY * factor, 0), 1);
          if (next >= 1) { setMediaFullyExpanded(true); setShowContent(true); }
          else if (next < 0.75) setShowContent(false);
          return next;
        });
        setTouchStartY(te.touches[0].clientY);
      }
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded) window.scrollTo(0, 0);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mediaFullyExpanded, touchStartY]);

  const mediaW = 320 + scrollProgress * (isMobile ? 700 : 1300);
  const mediaH = 420 + scrollProgress * (isMobile ? 180 : 380);

  return (
    <div ref={sectionRef} className="overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">

          {/* Background fades out as media expands */}
          <motion.div
            className="absolute inset-0 z-0 h-full"
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt="Background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#1B4332]/50" />
          </motion.div>

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">

              {/* Expanding media */}
              <div
                className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden"
                style={{
                  width: `${mediaW}px`,
                  height: `${mediaH}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0 0 60px rgba(0,0,0,0.4)",
                  transition: "none",
                }}
              >
                {mediaType === "video" ? (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      src={mediaSrc}
                      poster={posterSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/40"
                      animate={{ opacity: 0.5 - scrollProgress * 0.4 }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={mediaSrc}
                      alt={title ?? "Hero"}
                      fill
                      className="object-cover"
                      priority
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/40"
                      animate={{ opacity: 0.5 - scrollProgress * 0.4 }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                )}
              </div>

              {/* Text — stays centered and visible throughout */}
              <div className="relative z-10 flex flex-col items-center text-center px-6 pointer-events-none">
                {subtitle && (
                  <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">
                    {subtitle}
                  </p>
                )}
                {title && (
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
                    {title}
                  </h1>
                )}
                {scrollToExpand && (
                  <p className="mt-6 text-white/60 text-sm font-medium tracking-widest uppercase">
                    {scrollToExpand}
                  </p>
                )}
              </div>

            </div>

            {/* Content revealed after full expansion */}
            <motion.section
              className="flex flex-col w-full px-8 py-16 md:px-16 md:py-24 items-center"
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}

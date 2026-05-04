"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideoExpand() {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const unlockedRef = useRef(false);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (unlockedRef.current) return;
      e.preventDefault();

      if (e.deltaY < 0) {
        progressRef.current = Math.max(progressRef.current - e.deltaY * -0.001, 0);
      } else {
        progressRef.current = Math.min(progressRef.current + e.deltaY * 0.001, 1);
      }

      setProgress(progressRef.current);

      if (progressRef.current >= 1) {
        unlockedRef.current = true;
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (unlockedRef.current) return;
      e.preventDefault();
      const deltaY = touchStartY.current - e.touches[0].clientY;
      progressRef.current = Math.min(Math.max(progressRef.current + deltaY * 0.005, 0), 1);
      setProgress(progressRef.current);
      touchStartY.current = e.touches[0].clientY;
      if (progressRef.current >= 1) {
        unlockedRef.current = true;
      }
    };

    const handleScroll = () => {
      if (!unlockedRef.current) window.scrollTo(0, 0);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const p = progress;
  const startW = 300;
  const startH = 200;
  const fullyExpanded = p >= 1;

  const style: React.CSSProperties = fullyExpanded
    ? {
        position: "absolute",
        inset: 0,
        zIndex: 5,
        overflow: "hidden",
      }
    : {
        position: "absolute",
        left: `calc(${(1 - p) * 50}% - ${(1 - p) * startW / 2}px)`,
        top: `calc(${(1 - p) * 40}% - ${(1 - p) * startH / 2}px)`,
        width: `calc(${(1 - p) * startW}px + ${p * 100}%)`,
        height: `calc(${(1 - p) * startH}px + ${p * 100}%)`,
        borderRadius: `${(1 - p) * 16}px`,
        opacity: p,
        zIndex: 5,
        overflow: "hidden",
        transition: "none",
      };

  return (
    <div style={style} className="pointer-events-none">
      <video
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}

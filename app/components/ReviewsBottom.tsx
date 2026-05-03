"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Mike B.",
    rating: 5,
    text: "Got three quotes. ARB weren't the cheapest but they were the most thorough — checked the tree, explained what needed doing and why. That's the difference 40 years makes.",
    date: "2 months ago",
  },
  {
    name: "Joanne P.",
    rating: 5,
    text: "Stump grinding done in under an hour on a tree I'd had out years ago. Tidy, quick, reasonable. Will be recommending to everyone.",
    date: "3 months ago",
  },
];

function Stars({ count }: { count: number }) {
  return <span className="text-[#16A34A] text-sm">{"★".repeat(count)}</span>;
}

export default function ReviewsBottom() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = Array.from(container.querySelectorAll<HTMLElement>("[data-animate]"));
    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          items.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 90);
          });
          observer.disconnect();
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-[#F7FAF8]">
      <div ref={containerRef} className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={i} data-animate className="bg-white rounded-2xl p-6">
              <Stars count={r.rating} />
              <p className="mt-3 text-[#111827] leading-relaxed">{r.text}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-sm text-[#1B4332]">{r.name}</span>
                <span className="text-xs text-[#6B7280]">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

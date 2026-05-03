"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Sean and his team were absolutely brilliant. Turned up on time, removed a huge oak that was overhanging our roof, and left the garden immaculate. Wouldn't use anyone else.",
    date: "2 weeks ago",
  },
  {
    name: "Dave T.",
    rating: 5,
    text: "Called on a Friday afternoon after a storm took down a large branch onto my fence. They were out the same day and sorted everything. Brilliant service, fair price.",
    date: "1 month ago",
  },
  {
    name: "Karen H.",
    rating: 5,
    text: "Used ARB twice now — once for a crown reduction and once for hedge cutting. Proper professionals. You can tell they know exactly what they're doing.",
    date: "6 weeks ago",
  },
];

function Stars({ count }: { count: number }) {
  return <span className="text-[#16A34A] text-sm">{"★".repeat(count)}</span>;
}

export default function ReviewsTop() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const cards = Array.from(grid.querySelectorAll<HTMLElement>("[data-card]"));
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, i * 100);
          });
          observer.disconnect();
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-[#EEF5F1]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-base font-semibold tracking-widest text-[#16A34A] uppercase mb-2">
            Google Reviews
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#1B4332]">
            100 reviews. 4.9 stars.
          </h2>
        </div>
        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} data-card className="bg-white rounded-2xl p-6">
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

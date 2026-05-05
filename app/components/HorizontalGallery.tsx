"use client";

import Image from "next/image";

const photos = [
  { src: "/hero-original.jpg", alt: "Manicured hedges and garden path" },
  { src: "/g-0942.jpg", alt: "Overgrown garden — before clearance" },
  { src: "/g-0950.jpg", alt: "Cleared garden — after clearance" },
  { src: "/g-2297.jpg", alt: "Tree surgery in progress" },
  { src: "/g-2602.jpg", alt: "Overgrown tree — before work" },
  { src: "/g-2603.jpg", alt: "Finished tree work — after" },
  { src: "/g-1943.jpg", alt: "Tree surgeon at work" },
  { src: "/g-0396.jpg", alt: "Before tree removal" },
  { src: "/g-0397.jpg", alt: "After tree removal" },
  { src: "/g-1940.jpg", alt: "Tree work completed" },
];

const loopPhotos = [...photos, ...photos];

export default function HorizontalGallery() {
  return (
    <section className="py-20 bg-[#F7FAF8] overflow-hidden">
      <div className="px-6 md:px-16 mb-10">
        <p className="text-base font-semibold tracking-widest text-[#16A34A] uppercase mb-2">
          Our Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332]">
          40 years. Thousands of jobs.
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="gallery-track flex gap-5" style={{ width: "max-content" }}>
          {loopPhotos.map((photo, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden"
              style={{ width: "380px", height: "480px" }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="380px"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

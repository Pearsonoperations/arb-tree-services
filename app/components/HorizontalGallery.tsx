"use client";

import Image from "next/image";

const photos = [
  { src: "/gallery-1.jpg", alt: "Tree surgeon climbing oak tree" },
  { src: "/gallery-2.jpg", alt: "Stump grinding in a residential garden" },
  { src: "/gallery-3.jpg", alt: "Team felling a conifer in a terraced garden" },
  { src: "/hero-original.jpg", alt: "Manicured hedges and garden path" },
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

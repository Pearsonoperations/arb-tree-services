"use client";

import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    q: "Are you fully insured?",
    a: "Yes. We carry full public liability insurance and all our team are NVQ qualified arborists. You get complete peace of mind on every job.",
  },
  {
    q: "Do I need planning permission to remove a tree?",
    a: "In most cases, no. However, trees covered by a Tree Preservation Order (TPO) or in a Conservation Area require permission from your local council. We'll check this for you before any work starts.",
  },
  {
    q: "How quickly can you respond to an emergency callout?",
    a: "We cover emergency storm damage and dangerous trees across Dudley and the wider West Midlands. Call us on 07986 173679 and we'll advise you straight away on urgency and availability.",
  },
  {
    q: "Will you clear up all the waste?",
    a: "Yes. We hold a Waste Carriers Licence and remove all timber, brash, and arisings from site. You won't be left with a mess.",
  },
  {
    q: "How much does tree surgery cost?",
    a: "Pricing depends on the size of the tree, access, and the work needed. We offer free no-obligation quotes — call 07986 173679 or message us and we'll come out and take a look.",
  },
  {
    q: "What areas do you cover?",
    a: "We're based in Dudley and work across the whole of the West Midlands — including Wolverhampton, Birmingham, Stourbridge, Halesowen, Walsall, and surrounding areas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const items = Array.from(container.querySelectorAll<HTMLElement>("[data-faq]"));
    const observers: IntersectionObserver[] = [];

    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        },
        { threshold: 0.6 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="faq" className="py-24 px-6 bg-[#EEF5F1]">
      <div className="max-w-3xl mx-auto">
        <div ref={containerRef}>
          <p data-faq className="text-base font-semibold tracking-widest text-[#16A34A] uppercase mb-3">
            FAQ
          </p>
          <h2 data-faq className="text-4xl md:text-6xl font-bold text-[#1B4332] mb-12">
            Common questions
          </h2>

          <div className="divide-y divide-[#E5E7EB]">
            {faqs.map((faq, i) => (
              <div key={i} data-faq>
                <button
                  className="w-full text-left py-5 flex items-center justify-between gap-4 group"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-semibold text-[#111827] group-hover:text-[#1B4332] transition-colors">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 text-[#16A34A]">
                    {openIndex === i ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </button>
                {openIndex === i && (
                  <p className="pb-5 text-[#6B7280] leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Nav from "./components/Nav";
import HorizontalGallery from "./components/HorizontalGallery";
import ServicesAnimation from "./components/ServicesAnimation";
import FAQ from "./components/FAQ";

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


const areas = [
  "Dudley", "Wolverhampton", "Birmingham", "Stourbridge",
  "Halesowen", "Walsall", "Brierley Hill", "Tipton",
  "Sedgley", "Kingswinford", "Quarry Bank", "West Midlands",
];

function Stars({ count }: { count: number }) {
  return (
    <span className="text-[#16A34A] text-sm">
      {"★".repeat(count)}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      <Nav />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-end pb-20">
        <Image
          src="/hero-original.jpg"
          alt="ARB Tree Services — professional tree surgeons"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1B4332]/45" />
        <div className="relative z-10 w-full px-6 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            ARB Tree Services
          </h1>
          <p className="text-white/90 text-lg font-bold mb-10 max-w-md">
            40 years experience. NVQ qualified. Fully insured. Call or WhatsApp Sean today for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07986173679"
              className="bg-white text-[#1B4332] font-bold text-xl px-10 py-4 rounded-full hover:bg-[#F7FAF8] transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              07986 173679
            </a>
            <a
              href="https://wa.me/447986173679"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold text-xl px-10 py-4 rounded-full hover:bg-[#22c55e] transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#1B4332] py-6 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          <div>
            <p className="text-2xl font-extrabold">40+</p>
            <p className="text-white/70 text-sm">Years experience</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold">4.9 ★</p>
            <p className="text-white/70 text-sm">100 Google reviews</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold">NVQ</p>
            <p className="text-white/70 text-sm">Qualified arborists</p>
          </div>
          <div>
            <p className="text-2xl font-extrabold">Insured</p>
            <p className="text-white/70 text-sm">Full public liability</p>
          </div>
        </div>
      </section>

      {/* 3 reviews */}
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
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6">
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

      {/* Auto-scroll gallery */}
      <HorizontalGallery />

      {/* Services animation — pinned */}
      <ServicesAnimation />

      {/* 2 more reviews after gallery */}
      <section className="py-20 px-6 bg-[#F7FAF8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {reviews.slice(3).map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-6">
              <Stars count={r.rating} />
              <p className="mt-3 text-[#111827] leading-relaxed">{r.text}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-sm text-[#1B4332]">{r.name}</span>
                <span className="text-xs text-[#6B7280]">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-[#EEF5F1]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
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
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/gallery-1.jpg"
              alt="ARB Tree Services team at work"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="py-24 px-6 bg-[#D1E8D8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
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
          <div className="rounded-3xl overflow-hidden">
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

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section id="contact" className="bg-[#1B4332] py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Need a tree surgeon in Dudley?
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            Free no-obligation quotes. Fast response. 40 years experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07986173679"
              className="bg-white text-[#1B4332] font-bold text-xl px-10 py-5 rounded-full hover:bg-[#F7FAF8] transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              07986 173679
            </a>
            <a
              href="https://wa.me/447986173679"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white font-bold text-xl px-10 py-5 rounded-full hover:bg-[#22c55e] transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] py-10 px-6 text-white/50 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-white mb-1">ARB Tree Services</p>
            <p>Dudley, West Midlands · NVQ Qualified · BS 3998 · Fully Insured</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:07986173679" className="text-white hover:text-[#16A34A] transition-colors font-semibold">
              07986 173679
            </a>
            <a
              href="https://wa.me/447986173679"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#22c55e] transition-colors inline-flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-white/10 text-center">
          <p>© {new Date().getFullYear()} ARB Tree Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

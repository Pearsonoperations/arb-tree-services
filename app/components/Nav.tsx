"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PHONE = "07986173679";
const PHONE_DISPLAY = "07986 173679";
const WA_URL = "https://wa.me/447986173679";

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const WAIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#EEF5F1] border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="ARB Tree Services"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-base font-medium text-[#111827] hover:text-[#16A34A] transition-colors">Services</a>
          <a href="#areas" className="text-base font-medium text-[#111827] hover:text-[#16A34A] transition-colors">Areas</a>
          <a href="#about" className="text-base font-medium text-[#111827] hover:text-[#16A34A] transition-colors">About</a>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="bg-[#1B4332] text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-[#14532D] transition-colors inline-flex items-center gap-2"
          >
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-[#22c55e] transition-colors inline-flex items-center gap-2"
          >
            <WAIcon />
            WhatsApp
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex md:hidden p-2 text-[#111827]"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-[#EEF5F1] px-6 py-4 flex flex-col gap-3">
          <a href="#services" onClick={() => setOpen(false)} className="text-base font-medium text-[#111827]">Services</a>
          <a href="#areas" onClick={() => setOpen(false)} className="text-base font-medium text-[#111827]">Areas</a>
          <a href="#about" onClick={() => setOpen(false)} className="text-base font-medium text-[#111827]">About</a>
          <div className="flex flex-col gap-3 pt-2">
            <a
              href={`tel:${PHONE}`}
              className="bg-[#1B4332] text-white text-base font-semibold px-5 py-3 rounded-full text-center hover:bg-[#14532D] transition-colors inline-flex items-center justify-center gap-2"
            >
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white text-base font-semibold px-5 py-3 rounded-full text-center hover:bg-[#22c55e] transition-colors inline-flex items-center justify-center gap-2"
            >
              <WAIcon />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

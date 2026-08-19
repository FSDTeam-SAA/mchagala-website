"use client";

import React from "react";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export const testimonialsQuotesData = [
  {
    id: "quote-1",
    text: '" Works exactly as advertised. Sales are up for the first time in 2 years. "',
  },
  {
    id: "quote-2",
    text: '"It\'s basically SEO but for Ai search. We\'re starting to show up in Ai."',
  },
  {
    id: "quote-3",
    text: '"We\'re seeing a rapid increase in traffic from Chat GPT. It works "',
  },
];

interface TestimonialsQuotesProps {
  quotes?: typeof testimonialsQuotesData;
}

// ==========================================
// 2. MAIN COMPONENT (MATCHING FIGMA BACKGROUND MESH)
// ==========================================
export default function TestimonialsQuotesRow({
  quotes = testimonialsQuotesData,
}: TestimonialsQuotesProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A1224] py-16 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
      {/* Background Glow Mesh from Figma Spec */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1636px] h-60 bg-slate-800/80 blur-[80px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-48 bg-[#1D4ED8]/20 blur-[90px] pointer-events-none rounded-full" />

      {/* Cards Container */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-8">
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="w-72 sm:w-80 min-h-[170px] p-8 sm:p-10 bg-slate-300/15 hover:bg-slate-300/20 backdrop-blur-md rounded-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-4 transition-all duration-300"
          >
            <p className="w-56 sm:w-60 text-center text-white/95 text-xs sm:text-[13.5px] font-normal leading-relaxed tracking-normal">
              {quote.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
"use client";

import React from "react";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export const quotesData = [
  {
    id: "1",
    text: '"The first truly innovative marketing idea of 2026"',
  },
  {
    id: "2",
    text: '"The only service we\'ve found that specifically targets LLMs"',
  },
  {
    id: "3",
    text: '"we\'re starting to get customers who said they found us in ChatGPT"',
  },
];

interface QuotesRowProps {
  quotes?: typeof quotesData;
}

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export default function QuotesRowSection({
  quotes = quotesData,
}: QuotesRowProps) {
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
            className="w-72 min-h-[170px] p-8 sm:p-10 bg-slate-300/15 hover:bg-slate-300/20 backdrop-blur-md rounded-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.25)] inline-flex flex-col justify-center items-center gap-4 transition-all duration-300"
          >
            <p className="w-52 text-center text-white/95 text-sm sm:text-base font-medium leading-relaxed tracking-normal">
              {quote.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
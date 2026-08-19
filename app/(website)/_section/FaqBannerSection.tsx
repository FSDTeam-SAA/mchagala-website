"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export const faqBannerData = {
  watermarkText: "FAQ",
  heading: "Frequently Asked Questions",
  buttonText: "Read our FAQ",
  buttonLink: "/faq",
};

interface FaqBannerProps {
  data?: typeof faqBannerData;
}

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export default function FaqBannerSection({
  data = faqBannerData,
}: FaqBannerProps) {
  return (
    <section className="relative w-full h-[360px] sm:h-[420px] md:h-[500px] overflow-hidden bg-gradient-to-r from-[#173864] via-[#101B33] to-[#0D1527] flex items-center justify-center select-none">
      
      {/* BACKGROUND WATERMARK "FAQ" TEXT */}
      <div className="absolute inset-0 flex items-center justify-center w-full pointer-events-none">
        <span className="text-white/[0.04] text-[200px] sm:text-[350px] md:text-[450px] font-black font-inter tracking-tight whitespace-nowrap select-none">
          {data.watermarkText}
        </span>
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 p-6 flex flex-col justify-center items-center gap-8 md:gap-12">
        <h2 className="text-center text-white text-3xl sm:text-4xl md:text-[56px] font-bold font-sans tracking-tight">
          {data.heading}
        </h2>
        
        <Link 
          href={data.buttonLink}
          className="px-8 py-3 md:px-10 md:py-4 bg-[#2F7BE8] rounded-md inline-flex justify-center items-center hover:bg-[#2563EB] transition-colors shadow-sm"
        >
          <span className="text-white text-sm md:text-base font-semibold font-sans">
            {data.buttonText}
          </span>
        </Link>
      </div>

    </section>
  );
}
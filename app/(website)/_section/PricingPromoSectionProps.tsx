"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "../_components/ParticlesBackground";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export const pricingPromoData = {
  heading: "Lock in your discount pricing!",
  subheading: "For small to mid-sized businesses.",
  description:
    "We're offering discounted pricing to a limited number of customers. Avoid the upcoming price increase by ordering today to lock-in your low price",
  cta: {
    label: "Order",
    href: "#order",
  },
  pricing: {
    originalPrice: "399 $",
    currentPrice: "$99",
    billingCycle: "/month",
    planType: "Monthly subscription",
    subtext: "Cancel anytime.",
  },
};

interface PricingPromoProps {
  data?: typeof pricingPromoData;
}

// ==========================================
// 2. MAIN COMPONENT (ACCURATE COLOR GRADIENT & PARTICLES)
// ==========================================
export default function PricingPromoSection({
  data = pricingPromoData,
}: PricingPromoProps) {
  return (
    <section
      id="packages"
      className="relative w-full min-h-[640px] lg:min-h-[720px] scroll-mt-24 overflow-hidden py-24 sm:py-32 px-6 sm:px-12 lg:px-20 font-sans text-white flex items-center justify-center"
      style={{
        background: `
          radial-gradient(ellipse 65% 55% at 88% 28%, rgba(45, 60, 140, 0.42) 0%, rgba(13, 21, 46, 0) 75%),
          radial-gradient(ellipse 90% 60% at 50% 100%, #152E5A 0%, #0D1D3A 40%, #070D1C 75%),
          #070D1C
        `,
      }}
    >
      {/* ---------------------------------------------------- */}
      {/* BACKGROUND PARTICLES & BOTTOM CONSTELLATION GLOW      */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-90 select-none">
        <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[120%] h-[400px] bg-gradient-to-t from-sky-400/20 via-blue-600/10 to-transparent blur-[120px] rounded-[100%]" />
      </div>
      <ParticlesBackground />

      {/* ---------------------------------------------------- */}
      {/* FOREGROUND 2-COLUMN CONTENT                          */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 w-full container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Texts & Order Button */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              {data.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-200 font-medium tracking-tight">
              {data.subheading}
            </p>
          </div>

          <p className="text-xs sm:text-[13px] text-slate-300/80 font-normal leading-relaxed max-w-[460px]">
            {data.description}
          </p>

          <div className="pt-2">
            <Link
              href={data.cta.href}
              className="inline-flex items-center justify-center h-11 px-8 rounded-xl bg-[#2575FC] hover:bg-[#1E62D4] text-white text-sm font-semibold shadow-[0_4px_24px_rgba(37,117,252,0.4)] border-none transition-all cursor-pointer"
            >
              {data.cta.label}
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Price Card Header */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
          
          {/* Strikethrough 399 $ with custom thin strike line */}
          <div className="relative inline-block mb-1">
            <span className="text-xl sm:text-2xl font-light text-slate-400/90 tracking-wide font-sans">
              {data.pricing.originalPrice}
            </span>
            <div className="absolute top-[52%] left-0 right-0 h-[1.5px] bg-slate-400/80 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Current $99/month */}
          <div className="flex items-baseline justify-center">
            <span className="text-6xl sm:text-7xl md:text-[84px] font-extrabold text-white tracking-tighter leading-none">
              {data.pricing.currentPrice}
            </span>
            <span className="text-xl sm:text-2xl font-semibold text-white/90 ml-1">
              {data.pricing.billingCycle}
            </span>
          </div>

          {/* Plan Type Title */}
          <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-1">
            {data.pricing.planType}
          </h3>

          {/* Cancellation Policy */}
          <p className="text-xs text-slate-400 font-normal">
            {data.pricing.subtext}
          </p>
        </div>

      </div>
    </section>
  );
}

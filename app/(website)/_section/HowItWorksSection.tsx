"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { ParticlesBackground } from "../_components/ParticlesBackground";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export const howItWorksData = {
  tag: "HOW DOES IT WORK?",
  title: "Teach AI how to understand your brand.",
  description:
    "BackTalk runs targeted conversations with AI platforms so they learn about\nyour brand and include you in recommendations.",
  videoCards: [
    {
      id: "1",
      title: "From invisible to included",
      author: "Jordan Tate · Northstar",
      thumbnail:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      videoUrl: "#",
    },
    {
      id: "2",
      title: "A new channel for demand",
      author: "Dev Shah · Overture",
      thumbnail:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      videoUrl: "#",
    },
  ],
};

interface HowItWorksProps {
  data?: typeof howItWorksData;
}

// ==========================================
// 2. MAIN COMPONENT WITH PARTICLE ANIMATION
// ==========================================
export default function HowItWorksSection({
  data = howItWorksData,
}: HowItWorksProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#070F20] py-24 sm:py-32 px-4 sm:px-8 lg:px-12 font-sans flex flex-col items-center justify-center">
      
      {/* ---------------------------------------------------- */}
      {/* BACKGROUND PARTICLES / TWINKLING STARS ANIMATION     */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Radial Ambient Glow Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#1D4ED8]/15 via-[#0284C7]/10 to-transparent blur-[140px] rounded-full" />
      </div>
      <ParticlesBackground />

      {/* ---------------------------------------------------- */}
      {/* FOREGROUND CONTENT                                   */}
      {/* ---------------------------------------------------- */}
      <div className="relative z-10 w-full container mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14 sm:mb-20 ">
          {/* Subtitle Badge Tag */}
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#38BDF8] uppercase block">
            {data.tag}
          </span>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            {data.title}
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-[#93C5FD] font-normal leading-relaxed whitespace-pre-line pt-1">
            {data.description}
          </p>
        </div>

        {/* Video Cards Grid (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {data.videoCards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-[#0D182E] rounded-2xl border border-slate-700/60 hover:border-slate-500/80 transition-all duration-300 overflow-hidden flex flex-col shadow-[0_12px_40px_rgba(0,0,0,0.4)] cursor-pointer"
            >
              {/* Video Thumbnail Box */}
              <div className="relative w-full h-[240px] sm:h-[270px] bg-slate-950 overflow-hidden">
                <Image
                  src={card.thumbnail}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Video Overlay */}
                <div className="absolute inset-0 bg-[#070F20]/40 group-hover:bg-[#070F20]/25 transition-colors duration-300" />

                {/* Center Cyan Play Button with Ripple Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#38BDF8] flex items-center justify-center text-white shadow-[0_0_24px_rgba(56,189,248,0.6)] group-hover:scale-110 group-hover:shadow-[0_0_32px_rgba(56,189,248,0.9)] transition-all duration-300">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Bottom Card Meta Details */}
              <div className="p-6 bg-[#0B1528] space-y-1.5 border-t border-slate-800/80">
                <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-normal">
                  {card.author}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "../_components/ParticlesBackground";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export const howItWorksFlowData = {
  header: {
    title: "How it Works.",
    subtitle: "We get Ai to recommend you.",
    description:
      "Ai decides which products and services to recommend based on user feedback. We provide feedback, on a large\nscale, using active users with demographics matching your target audience.",
  },
  stages: [
    {
      id: "awareness",
      title: "Awareness",
      subtitle: "Get researched",
      iconType: "focus",
      bullets: [
        "Get on Ai's radar.",
        "Part of the conversation.",
        "Visibility in Ai.",
      ],
      ctaText: "Learn More",
      ctaHref: "#awareness",
    },
    {
      id: "consideration",
      title: "Consideration",
      subtitle: "Get shortlisted.",
      iconType: "scale",
      bullets: [
        "Ai talks favorably of you.",
        "Ai pitches your brand.",
        "Seen as a viable option.",
      ],
      ctaText: "Learn More",
      ctaHref: "#consideration",
    },
    {
      id: "decision",
      title: "Decision",
      subtitle: "Get sales.",
      iconType: "target",
      bullets: [
        "Customer chooses you.",
        "Your brand gains authority.",
        "Confirms Ai's trust in you.",
      ],
      ctaText: "Learn More",
      ctaHref: "#decision",
    },
    {
      id: "advocacy",
      title: "Advocacy",
      subtitle: "Customers recommend you.",
      iconType: "share",
      bullets: [
        "Brand promoters.",
        "Powerful Ai signal.",
        "Customers sell you.",
      ],
      ctaText: "Learn More",
      ctaHref: "#advocacy",
    },
    {
      id: "consensus",
      title: "Consensus",
      subtitle: "Voice of a population group.",
      iconType: "network",
      bullets: [
        "Mass agreement.",
        "Common knowledge.",
        "You are the obvious choice.",
      ],
      ctaText: "Learn More",
      ctaHref: "#consensus",
    },
    {
      id: "retention",
      title: "Retention",
      subtitle: "Happy with their decision.",
      iconType: "growth",
      bullets: [
        "After-purchase positivity.",
        "Positive brand sentiment.",
        "Likely to buy again.",
      ],
      ctaText: "Learn More",
      ctaHref: "#retention",
    },
  ],
};

interface HowItWorksFlowProps {
  data?: typeof howItWorksFlowData;
}

// ==========================================
// 2. MINIMAL OUTLINE ICONS
// ==========================================
const StageIcon = ({ type }: { type: string }) => {
  const strokeClass = "stroke-slate-400/40 w-12 h-12 stroke-[1.25]";

  switch (type) {
    case "focus":
      return (
        <svg className={strokeClass} viewBox="0 0 48 48" fill="none">
          <path d="M14 8H8v6M34 8h6v6M14 40H8v-6M34 40h6v-6" strokeLinecap="round" />
          <circle cx="24" cy="24" r="6" />
          <path d="M28.5 28.5L34 34" strokeLinecap="round" />
        </svg>
      );
    case "scale":
      return (
        <svg className={strokeClass} viewBox="0 0 48 48" fill="none">
          <path d="M24 8v32M16 40h16M10 16l14-4 14 4" strokeLinecap="round" />
          <path d="M10 16l-4 10h8l-4-10zM38 16l-4 10h8l-4-10z" strokeLinejoin="round" />
        </svg>
      );
    case "target":
      return (
        <svg className={strokeClass} viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="16" strokeDasharray="3 3" />
          <circle cx="24" cy="24" r="11" />
          <circle cx="24" cy="24" r="6" />
          <circle cx="24" cy="24" r="2" fill="currentColor" className="fill-slate-400/40" />
        </svg>
      );
    case "share":
      return (
        <svg className={strokeClass} viewBox="0 0 48 48" fill="none">
          <circle cx="34" cy="14" r="5" />
          <circle cx="14" cy="24" r="5" />
          <circle cx="34" cy="34" r="5" />
          <path d="M18.5 21.5l11-5M18.5 26.5l11 5" strokeLinecap="round" />
        </svg>
      );
    case "network":
      return (
        <svg className={strokeClass} viewBox="0 0 48 48" fill="none">
          <circle cx="18" cy="18" r="4" />
          <circle cx="34" cy="32" r="4" />
          <path d="M18 22v14M18 22c4 8 10 10 12 10" strokeLinecap="round" />
        </svg>
      );
    case "growth":
      return (
        <svg className={strokeClass} viewBox="0 0 48 48" fill="none">
          <path d="M10 36l10-10 8 6 12-14" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 18h8v8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
};

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function HowItWorksFlowSection({
  data = howItWorksFlowData,
}: HowItWorksFlowProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#070F20] py-24 sm:py-32 px-4 sm:px-6 lg:px-10 font-sans text-white">
      
      {/* Background Radial Glow & Starfield Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-b from-[#1E40AF]/15 via-[#0284C7]/10 to-transparent blur-[140px] rounded-full" />
      </div>
      <ParticlesBackground />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto space-y-16 sm:space-y-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {data.header.title}
          </h2>
          <p className="text-base sm:text-lg font-semibold text-slate-200">
            {data.header.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed whitespace-pre-line pt-1">
            {data.header.description}
          </p>
        </div>

        {/* 6-Card Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {data.stages.map((stage) => (
            <div
              key={stage.id}
              className="bg-[#0B1528] rounded-2xl border border-slate-800/80 hover:border-slate-700/90 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between min-h-[290px] shadow-[0_8px_30px_rgba(0,0,0,0.3)] relative overflow-hidden"
            >
              {/* Card Top: Title & Right Subtle Line Icon */}
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 font-normal mt-1">
                      {stage.subtitle}
                    </p>
                  </div>
                  <div className="shrink-0 -mt-1 -mr-1">
                    <StageIcon type={stage.iconType} />
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-8">
                  {stage.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-slate-300 font-normal"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <Button
                  className="h-8 px-4 rounded-lg bg-[#2F7BE8] hover:bg-[#2563EB] text-white text-xs font-semibold shadow-none border-none transition-colors inline-flex items-center gap-1.5"
                >
                  <Link href={stage.ctaHref} className="flex gap-2">
                    <span>{stage.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
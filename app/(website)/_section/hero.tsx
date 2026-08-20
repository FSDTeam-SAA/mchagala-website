"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";


export const heroSectionData = {
  featuredTag: "AS FEATURED IN",
  featuredBrand: "Forbes.com",
  title: "Get Found in ChatGPT and AI Search",
  description:
    "BackTalk helps ambitious brands become visible, trusted, and recommended across the AI platforms your customers now use to decide.",
  bulletPoints: [
    "Built for modern brands",
    "Clear monthly reporting",
  ],
  primaryCta: {
    label: "Get started in 5 Minutes",
    href: "#get-started",
  },
  secondaryCta: {
    label: "Watch Demo",
    href: "#watch-demo",
  },
  platforms: [
    {
      id: "chatgpt",
      name: "ChatGPT",
      iconType: "chatgpt",
    },
    {
      id: "gemini",
      name: "Gemini",
      iconType: "gemini",
    },
    {
      id: "grok",
      name: "Grok",
      iconType: "grok",
    },
    {
      id: "perplexity",
      name: "Perplexity",
      iconType: "perplexity",
    },
    {
      id: "deepseek",
      name: "DeepSeek",
      iconType: "deepseek",
    },
    {
      id: "copilot",
      name: "Copilot",
      iconType: "copilot",
    },
  ],
};

interface HeroSectionProps {
  data?: typeof heroSectionData;
}


const PlatformIcon = ({ type }: { type: string }) => {
  const iconPaths: Record<string, string> = {
    chatgpt: "/icons/gpt.png",
    gemini: "/icons/gemeni.png",
    grok: "/icons/grok.png",
    perplexity: "/icons/perplexity.png",
    deepseek: "/icons/deepSeek.png",
    copilot: "/icons/copilot.png",
  };

  const src = iconPaths[type];

  return src ? (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="w-4 h-4 object-contain"
    />
  ) : null;
};

// ==========================================
// 3. MAIN HERO SECTION COMPONENT
// ==========================================
export default function HeroSection({
  data = heroSectionData,
}: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-[720px] lg:min-h-[780px] flex flex-col items-center justify-center overflow-hidden bg-[#030712] font-sans px-4 sm:px-6 lg:px-8 py-20">
      
      {/* ==================================================== */}
      {/* PURE CSS BACKGROUND: VERTICAL LIGHT SLATS + BLUE GLOW */}
      {/* ==================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Repeating Vertical Light Slats / Curtains */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 24px,
              rgba(37, 99, 235, 0.04) 25px,
              rgba(59, 130, 246, 0.16) 38px,
              rgba(37, 99, 235, 0.04) 50px,
              transparent 52px
            )`,
          }}
        />

        {/* Center Blue Ambient Glow Spheres */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[950px] h-[400px] bg-gradient-to-b from-[#1E40AF]/30 via-[#2563EB]/20 to-transparent blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#1D4ED8]/25 blur-[100px] rounded-full" />

        {/* Left & Right Edge Dark Vignettes */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-[#030712] via-[#030712]/80 to-transparent" />
        
        {/* Bottom Fade Out */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
      </div>

      {/* ==================================================== */}
      {/* FOREGROUND HERO CONTENT */}
      {/* ==================================================== */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Featured Tag: Forbes.com with thin lines */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 sm:w-12 h-[1px] bg-slate-700/60" />
          <div className="flex flex-col items-center">
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.25em] text-slate-400 mb-0.5">
              {data.featuredTag}
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white/90 italic">
              {data.featuredBrand}
            </span>
          </div>
          <div className="w-8 sm:w-12 h-[1px] bg-slate-700/60" />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] max-w-4xl drop-shadow-sm mb-6">
          {data.title}
        </h1>

        {/* Subtitle / Description */}
        <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-6 text-balance">
          {data.description}
        </p>

        {/* Checkmark Bullets Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-[13px] text-slate-300 font-normal mb-9">
          {data.bulletPoints.map((point, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-14">
          {/* Primary CTA Button */}
          <Button
            className="w-full sm:w-auto h-11 px-7 rounded-xl bg-[#2F7BE8] hover:bg-[#2563EB] text-white text-xs sm:text-sm font-semibold shadow-[0_4px_25px_rgba(37,99,235,0.4)] border-none transition-all cursor-pointer"
          >
            <Link href={data.primaryCta.href}>{data.primaryCta.label}</Link>
          </Button>

          {/* Secondary Outline CTA Button */}
          <Button
            variant="outline"
            className="w-full sm:w-auto h-11 px-7 rounded-xl bg-[#09152B]/80 hover:bg-[#0E2042] text-white border border-[#234A85] text-xs sm:text-sm font-semibold transition-all cursor-pointer"
          >
            <Link href={data.secondaryCta.href} className="text-white">{data.secondaryCta.label}</Link>
          </Button>
        </div>

        {/* Platform Integration Badges Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl  border border-white/[0.08] backdrop-blur-md shadow-2xl">
          {data.platforms.map((platform) => (
            <div
              key={platform.id}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.05] hover:border-white/15 hover:bg-white/[0.08] transition-all cursor-pointer select-none"
            >
              <PlatformIcon type={platform.iconType} />
              <span className="text-[11px] sm:text-xs font-medium text-slate-200">
                {platform.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
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

// ==========================================
// 2. AI PLATFORM ICONS
// ==========================================
const PlatformIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "chatgpt":
      return (
        <svg className="w-4 h-4 fill-current text-white/90" viewBox="0 0 24 24">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1638a.0804.0804 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.3927-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.407 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.6626zM8.3087 12.833l2.848-1.6416 2.848 1.6416v3.2833l-2.848 1.6416-2.848-1.6416z" />
        </svg>
      );
    case "gemini":
      return (
        <svg className="w-4 h-4 fill-current text-[#70A8FF]" viewBox="0 0 24 24">
          <path d="M12 24c-.3-4.5-2.5-8.5-6-10.5C9.5 11.5 11.7 7.5 12 0c.3 4.5 2.5 8.5 6 10.5-3.5 2-5.7 6-6 13.5z" />
        </svg>
      );
    case "grok":
      return (
        <svg className="w-4 h-4 stroke-current text-white/90" viewBox="0 0 24 24" fill="none" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <path d="M4.5 4.5L19.5 19.5" />
        </svg>
      );
    case "perplexity":
      return (
        <svg className="w-4 h-4 stroke-current text-[#22D3EE]" viewBox="0 0 24 24" fill="none" strokeWidth="2">
          <path d="M12 3v18M3 12h18M6.5 6.5l11 11M17.5 6.5l-11 11" strokeLinecap="round" />
        </svg>
      );
    case "deepseek":
      return (
        <svg className="w-4 h-4 fill-current text-[#3B82F6]" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.5 0-4.5-1.5-4.5-3.5s2-3.5 4.5-3.5 4.5 1.5 4.5 3.5-2 3.5-4.5 3.5z" />
        </svg>
      );
    case "copilot":
      return (
        <div className="w-3.5 h-3.5 rounded-xs bg-gradient-to-tr from-[#FF5E62] via-[#FFD97D] to-[#38EF7D]" />
      );
    default:
      return null;
  }
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
            <Link href={data.secondaryCta.href}>{data.secondaryCta.label}</Link>
          </Button>
        </div>

        {/* Platform Integration Badges Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-2xl">
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
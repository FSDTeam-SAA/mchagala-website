"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ParticlesBackground } from "../_components/ParticlesBackground";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export const aiEngineersSectionData = {
  header: {
    title: "Designed by Ai Engineers",
    subtitle: "We come from the top tech companies in the world.",
    logos: [
      { id: "icon-1", name: "Icon 1", iconType: "icon1" },
      { id: "icon-2", name: "Icon 2", iconType: "icon2" },
      { id: "icon-3", name: "Icon 3", iconType: "icon3" },
      { id: "icon-4", name: "Icon 4", iconType: "icon4" },
    ],
  },
  featureRows: [
    {
      id: "row-1",
      title: "Your customers are on Ai.\nYou aren't.",
      highlight: "Traditional marketing stopped working a year ago",
      description:
        "Search traffic has been steadily declining. Paid ads bring traffic but not customers. Your marketing spend is bleeding cash.",
      cta: {
        label: "Order Service Now",
        href: "#order",
      },
      image:
        "/icons/image1.jpg",
      imagePosition: "right", // Image on right, text on left
    },
    {
      id: "row-2",
      title: "The answer is getting\nrecommend by Ai.",
      highlight: "People buy what Ai recommends",
      description:
        "92% of customers use Ai to research products. You can influence what Ai says about you. Ai will actually sell products for you.",
      cta: {
        label: "Order Service Now",
        href: "#order",
      },
      image:
       "/icons/image2.jpg",
      imagePosition: "left", // Image on left, text on right
    },
  ],
};

interface AiEngineersProps {
  data?: typeof aiEngineersSectionData;
}

// ==========================================
// 2. BRAND LOGO ICONS
// ==========================================
const TechLogo = ({ type }: { type: string }) => {
  const iconPaths: Record<string, string> = {
    icon1: "/icons/icon1.png",
    icon2: "/icons/icon2.png",
    icon3: "/icons/icon3.png",
    icon4: "/icons/icon4.png",
  };
  const src = iconPaths[type];
  const iconSize = type === "icon2" || type === "icon3" ? "w-14 h-13" : "w-8 h-8";

  return src ? (
    <img src={src} alt="" aria-hidden="true" className={`${iconSize} object-contain`} />
  ) : null;
};

// ==========================================
// 3. MAIN SECTION COMPONENT
// ==========================================
export default function AiEngineersSection({
  data = aiEngineersSectionData,
}: AiEngineersProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#070F20] py-20 sm:py-28 px-4 sm:px-6 lg:px-12 font-sans text-white">
      
      {/* Background Ambience & Animated Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-[#1E40AF]/15 via-[#0284C7]/10 to-transparent blur-[140px] rounded-full" />
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#1D4ED8]/10 blur-[130px] rounded-full" />
      </div>
      <ParticlesBackground />

      <div className="relative z-10 container mx-auto space-y-24 sm:space-y-32">
        
        {/* TOP HEADER: TITLE + LOGO PILLS */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {data.header.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              {data.header.subtitle}
            </p>
          </div>

          {/* Brand Logo Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-2xl">
            {data.header.logos.map((logo) => (
              <div
                key={logo.id}
                className="h-20 sm:h-22 rounded-2xl bg-transparent border border-slate-700/60 hover:border-slate-500/80 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <TechLogo type={logo.iconType} />
              </div>
            ))}
          </div>
        </div>

        {/* 2 FEATURE ROWS WITH ALTERNATING LAYOUTS */}
        <div className="space-y-20 sm:space-y-28">
          {data.featureRows.map((row) => {
            const isImageLeft = row.imagePosition === "left";

            return (
              <div
                key={row.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* TEXT CONTENT BLOCK */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-[1.2] whitespace-pre-line tracking-tight">
                    {row.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {row.highlight}
                  </p>

                  <p className="text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed max-w-lg">
                    {row.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={row.cta.href}
                      className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-[#2F7BE8] hover:bg-[#2563EB] text-white text-xs sm:text-sm font-semibold shadow-[0_4px_20px_rgba(37,99,235,0.35)] border-none transition-all cursor-pointer"
                    >
                      {row.cta.label}
                    </Link>
                  </div>
                </div>

                {/* NEON-BORDERED IMAGE BLOCK */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative w-full h-[280px] sm:h-[340px] md:h-[360px] rounded-3xl overflow-hidden border-[1.5px] border-[#38BDF8]/60 bg-[#0B1528] shadow-[0_0_35px_rgba(56,189,248,0.18)]">
                    <Image
                      src={row.image}
                      alt={row.title.replace("\n", " ")}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#070F20]/25 pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

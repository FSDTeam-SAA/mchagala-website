"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ParticlesBackground } from "../_components/ParticlesBackground";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export const stepsSectionData = {
  title: "3 Steps",
  steps: [
    {
      stepNumber: 1,
      description:
        "Complete a questionnaire about your brand and customers",
    },
    {
      stepNumber: 2,
      description:
        "We select users that match your customers demographics.",
    },
    {
      stepNumber: 3,
      description:
        "We design a custom strategy and conversations begin.",
    },
  ],
  bottomSection: {
    heading: "That's it!",
    bullets: [
      "Every 30 days new conversations start",
      "We email a monthly report showing all our work",
    ],
  },
};

interface ThreeStepsSectionProps {
  data?: typeof stepsSectionData;
}

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export default function ThreeStepsSection({
  data = stepsSectionData,
}: ThreeStepsSectionProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#070F20] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-sans text-white flex flex-col items-center justify-center">
      {/* Background Ambient Glow & Star Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#1D4ED8]/15 via-[#0284C7]/10 to-transparent blur-[140px] rounded-full" />
      </div>
      <ParticlesBackground />

      <div className="relative z-10 w-full container mx-auto flex flex-col items-center space-y-14 sm:space-y-16">
        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center">
          {data.title}
        </h2>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {data.steps.map((step) => (
            <Card
              key={step.stepNumber}
              className="bg-[#101B34]/90 hover:bg-[#13203D] border border-slate-800/80 rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[260px] shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-200"
            >
              <CardContent className="p-0 flex flex-col items-center space-y-5">
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                  {step.stepNumber}
                </span>
                <p className="text-sm sm:text-[15px] text-slate-200 font-normal leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Feature Box: That's it! */}
        <div className="w-full max-w-2xl  border border-slate-800/90 rounded-2xl p-6 sm:p-7 flex flex-col items-center text-center shadow-lg">
          <h3 className="text-sm sm:text-base font-semibold text-white mb-5">
            {data.bottomSection.heading}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
            {data.bottomSection.bullets.map((bullet, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-[#13203B]/90 border border-slate-700/50 rounded-xl px-4 py-3.5 text-left"
              >
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 fill-[#38BDF8]/20" />
                <span className="text-xs sm:text-[13px] text-slate-300 font-normal leading-snug">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
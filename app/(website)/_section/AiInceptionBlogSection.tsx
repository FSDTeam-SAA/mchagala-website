"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export interface BlogPostItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  href: string;
}

export const blogSectionData = {
  heading: "Ai Inception Blog",
  subheading: "Information on Ai Inception",
  seeMoreCta: {
    label: "See More",
    href: "/blog",
  },
  posts: [
    {
      id: "1",
      title: "Title title title",
      description:
        "Search engines are no longer just looking for matching keywords. In 2026, they are smarter than ever...",
      imageUrl:
   "/icons/image3.jpg",
      ctaText: "Learn More",
      href: "/blog/post-1",
    },
    {
      id: "2",
      title: "Title title title",
      description:
        "Search engines are no longer just looking for matching keywords. In 2026, they are smarter than ever...",
      imageUrl:
       "/icons/image4.jpg",
      ctaText: "Learn More",
      href: "/blog/post-2",
    },
    {
      id: "3",
      title: "Title title title",
      description:
        "Search engines are no longer just looking for matching keywords. In 2026, they are smarter than ever...",
      imageUrl:
        "/icons/image5.jpg",
      ctaText: "Learn More",
      href: "/blog/post-3",
    },
  ],
};

interface AiInceptionBlogProps {
  data?: typeof blogSectionData;
}

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export default function AiInceptionBlogSection({
  data = blogSectionData,
}: AiInceptionBlogProps) {
  return (
    <section id="blog" className="relative w-full scroll-mt-24 overflow-hidden bg-[#101720] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 font-sans text-white">
      {/* Background Soft Blue Ambience */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#1D4ED8]/10 via-[#0284C7]/5 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10  container mx-auto flex flex-col items-center space-y-12 sm:space-y-14">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {data.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            {data.subheading}
          </p>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {data.posts.map((post) => (
            <Card
              key={post.id}
              className="bg-[#0D182E]/90 hover:bg-[#101D38] border border-slate-800/90 rounded-2xl overflow-hidden p-5 sm:p-6 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 group"
            >
              <CardContent className="p-0 space-y-5">
                {/* Thumbnail Image */}
                <div className="relative w-full h-[180px] sm:h-[190px] rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#070F20]/20 pointer-events-none" />
                </div>

                {/* Post Content */}
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </CardContent>

              {/* Learn More Link */}
              <div className="pt-6">
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white group-hover:gap-2 transition-all duration-200"
                >
                  <span>{post.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom "See More" Button */}
        <div className="pt-2">
          <Button
            className="h-11 px-8 rounded-xl bg-[#2F7BE8] hover:bg-[#2563EB] text-white text-xs sm:text-sm font-semibold shadow-[0_4px_24px_rgba(47,123,232,0.35)] border-none transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Link href={data.seeMoreCta.href} className="flex gap-2 items-center">
              <span>{data.seeMoreCta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

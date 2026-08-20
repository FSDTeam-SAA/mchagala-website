"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export const footerData = {
  ctaBanner: {
    heading: "Would You Pay $99 To Get Found In AI Search?",
    buttonText: "Get Started in 5 Minutes",
    buttonHref: "#get-started",
  },
  brand: {
    nameFirst: "Back",
    nameLast: "Talk",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the cimen book.",
  },
  hiring: {
    title: "We're Hiring!",
    links: [
      { label: "Ai UX Designer", href: "#" },
      { label: "Ai Solutions Architect", href: "#" },
      { label: "LLM Engineer", href: "#" },
      { label: "Prompt Engineer", href: "#" },
    ],
  },
  account: {
    title: "Log In",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Accessibility Statement", href: "#" },
      { label: "Contact Support", href: "#" },
    ],
  },
  socialLinks: [
    { id: "twitter", icon: FaTwitter, href: "https://twitter.com" },
    { id: "instagram", icon: FaInstagram, href: "https://instagram.com" },
    { id: "linkedin", icon: FaLinkedin, href: "https://linkedin.com" },
    { id: "facebook", icon: FaFacebook, href: "https://facebook.com" },
  ],
  copyright: "@ 2025 Back Talk. All Rights Reserved",
};

interface FooterProps {
  data?: typeof footerData;
}

// ==========================================
// 2. LOGO ICON SVG
// ==========================================
const BackTalkIcon = () => (
  <svg
    className="w-7 h-7 text-[#2F7BE8]"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 14.5C4 8.7 8.7 4 14.5 4H17.5C23.3 4 28 8.7 28 14.5C28 20.3 23.3 25 17.5 25H11.5L6 29V23.5C4.7 21 4 17.9 4 14.5Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="12" r="1.5" fill="currentColor" />
    <circle cx="18" cy="12" r="1.5" fill="currentColor" />
    <path
      d="M11.5 12H16.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="22" cy="17" r="1.5" fill="currentColor" />
    <circle cx="14" cy="17" r="1.5" fill="currentColor" />
    <path
      d="M10 17H12.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15.5 17H20.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// ==========================================
// 3. MAIN FOOTER COMPONENT
// ==========================================
export default function Footer({ data = footerData }: FooterProps) {
  return (
    <footer id="contact" className="w-full scroll-mt-24 bg-slate-800 font-sans text-white border-t border-slate-700/50">
      <div className="container mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* TOP CTA BANNER ROW */}
        <div className="py-14 sm:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug">
            {data.ctaBanner.heading}
          </h2>

          <div className="shrink-0">
            <Button
              className="h-12 px-7 rounded-xl bg-[#2F7BE8] hover:bg-[#2563EB] text-white text-sm font-semibold shadow-[0_4px_20px_rgba(47,123,232,0.35)] border-none transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <Link href={data.ctaBanner.buttonHref} className="flex items-center gap-2">
                <span>{data.ctaBanner.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* THIN HORIZONTAL DIVIDER */}
        <div className="w-full h-[1px] bg-slate-700/70" />

        {/* MAIN NAVIGATION & BRAND CONTENT */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Brand Info & Socials (Col 6) */}
          <div className="md:col-span-6 space-y-6 max-w-sm">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <BackTalkIcon />
              <span className="text-2xl font-bold tracking-tight text-white">
                {data.brand.nameFirst}
                <span className="text-[#2F7BE8]">{data.brand.nameLast}</span>
              </span>
            </Link>

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-slate-300/80 font-normal leading-relaxed">
              {data.brand.description}
            </p>

            {/* Circular Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {data.socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#2F7BE8] hover:bg-[#2563EB] flex items-center justify-center text-white transition-colors"
                  >
                    <Icon className="w-4 h-4 fill-current" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* We're Hiring! Links (Col 3) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {data.hiring.title}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-300 font-normal">
              {data.hiring.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Log In & Legal Links (Col 3) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {data.account.title}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-300 font-normal">
              {data.account.links.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM DIVIDER & COPYRIGHT */}
        <div className="w-full border-t border-slate-700/60 py-6 text-center">
          <p className="text-xs text-slate-300/80 font-normal">
            {data.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// ==========================================
// 1. JSON DATA CONFIGURATION
// ==========================================
export const navData = {
  brandName: {
    first: "Back",
    last: "Talk",
  },
  links: [
    { label: "Packages", href: "#packages" },
    { label: "FAQ", href: "#faq" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ],
  cta: {
    label: "Get Started",
    href: "#get-started",
  },
};

interface NavbarProps {
  data?: typeof navData;
}



export default function Navbar({ data = navData }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent font-sans absolute top-0 left-0 z-50">
      <div className="container mx-auto px-6 sm:px-10 lg:px-12 h-24 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group w-40 h-40">
          <Image src="/logo.png" alt="logo" width={900} height={900}  />
        </Link>

        {/* Desktop Navigation Links & Action Button */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {/* Navigation Links */}
          <nav className="flex items-center gap-6 lg:gap-10">
            {data.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] lg:text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            
            className="h-10 px-6 rounded-lg bg-[#2F7BE8] hover:bg-[#2563EB] text-white text-xs lg:text-sm font-medium shadow-[0_4px_16px_rgba(37,99,235,0.25)] transition-all cursor-pointer border-none"
          >
            <Link href={data.cta.href}>{data.cta.label}</Link>
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0D14]/95 backdrop-blur-lg border-b border-slate-800/80 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {data.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Button
              className="w-full h-10 rounded-lg bg-[#2F7BE8] hover:bg-[#2563EB] text-white text-sm font-medium"
            >
              <Link href={data.cta.href}>{data.cta.label}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
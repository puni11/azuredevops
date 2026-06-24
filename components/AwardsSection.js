"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck, Cloud, Server, SquareArrowDownRight, LucideAward } from "lucide-react";
import { DownloadIcon } from "@animateicons/react/huge";

// Data extracted from your second image
const awards = [
  "Best Training Providers",
  "Training Partner of the Year",
  "Third Best Retail Partner",
  "Best Red Hat Training Partner",
  "Best Amazing Partner of Red Hat",
  "Best Partner in GLS",
  "Red Hat's Leading Partner",
  "Best Placement Providers in Jaipur",
];

// Duplicating the array ensures a seamless infinite scroll loop
const marqueeItems = [...awards, ...awards];

export default function AwardsSection() {
  return (
    <section className=" bg-[#0a0f1c] text-white py-16 px-6 md:px-12 lg:px-24 flex items-center justify-center "
     style={{
            background: `
              linear-gradient(to bottom right, #0078d4 50%, #ffff 100%),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 900 900' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='10.0' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='120%25' filter='url(%23noiseFilter)' opacity='0.45'/%3E%3C/svg%3E")
            `,
            backgroundBlendMode: 'soft-light',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col space-y-8">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Expert-Led Courses Aligned with Certification Standards
          </h1>
          <p className="text-gray-50 text-sm leading-relaxed">
            Our expertly designed courses help you master essential DevOps skills
            while aligning with top industry certifications like Certified
            DevOps Engineer, Microsoft Azure DevOps Engineer and more. Led by experienced
            professionals, our training programs provide hands-on practice,
            real-world scenarios, and in-depth knowledge to ensure you are fully
            prepared to pass certification exams and advance your career.
          </p>

          {/* Technology Icons Row */}
       

          <div>
            <a href="#formSub" className="group relative overflow-hidden flex items-center justify-center w-fit md:w-fit px-18 py-3.5 text-sm md:text-base font-bold text-gray-50 rounded-md cursor-pointer bg-gradient-to-b from-gray-700 to-gray-950 shadow-lg">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/70 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <DownloadIcon size={16} duration={1} color="#fff" className="group-hover:animate-bounce" />
                Download Broucher
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: Review Cards & Marquee */}
        <div className="flex flex-col space-y-6 overflow-hidden">
          
          {/* Top Row: Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* G2 Card */}
            <div className="bg-[#ffff] backdrop-blur-md border border-[#fff]/20 rounded-md p-6 flex flex-col items-center justify-center space-y-3">
              <div className="w-12 h-12 bg-gray-50 text-gray-800 rounded-full flex items-center justify-center font-bold text-xl">
                JD
              </div>
              <div className="flex space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-800 text-sm">(4.7) based on 934 reviews</p>
            </div>

            {/* Trustpilot Card */}
            <div className="bg-[#ffffff] border border-[#ffffff]/20 rounded-md p-6 flex flex-col items-center justify-center space-y-3">
              <div className="flex items-center space-x-2 text-gray-800 text-xl font-bold">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="w-7 h-7"
  >
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.3 35 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6 7.1l6.3 5.3C39.8 36.5 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5z"
    />
  </svg>
</div>
              </div>
              <div className="flex space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-800 text-sm">4.9 out of 5 stars</p>
            </div>
          </div>

          {/* Bottom Row: Framer Motion Marquee Card */}
          <div className="bg-[#ffffff] border border-gray-200 rounded-md p-6 relative overflow-hidden flex items-center h-48">
            {/* Gradient masks for smooth fade effect on edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#ffffff] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex space-x-4 whitespace-nowrap"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 20, // Adjust speed by changing duration
              }}
            >
              {marqueeItems.map((award, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-700/10 px-6 py-4 rounded-sm flex items-center justify-center min-w-[250px]"
                >
                  {/* Red Hat / generic icon placeholder inside the award badge */}
                  <div className="w-8 h-8 bg-sky-500/20 rounded-full mr-3 flex-shrink-0 flex items-center justify-center">
                    <LucideAward size={16}  className="text-sky-700" />
                  </div>
                  <span className="text-xs text-gray-800 font-semibold whitespace-normal text-center leading-snug">
                    {award}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
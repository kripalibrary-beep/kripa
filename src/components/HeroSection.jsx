import React from 'react';
import libraryBg from "../assets/library-bg.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="w-full font-sans">
      {/* ── HERO ── */}
      {/* FIXED: Scaled height dynamically from h-[480px] on mobile up to h-[670px] on desktops */}
      <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[670px] overflow-hidden flex items-center justify-center lg:justify-start">
        
        {/* BG photo */}
        <img
          src={libraryBg}
          alt="Kripa Library interior"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark Tint Overlay */}
        {/* FIXED: Added a subtle background overlay tint to keep white text readable on varying background image states */}
        <div className="absolute inset-0 bg-black/40 lg:bg-black/30 z-10"></div>

        {/* Text content container */}
        {/* FIXED: Replaced absolute positioning parameters with fluid layout alignment wrappers */}
        <div className="relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-[90%] sm:max-w-[600px] px-4 lg:ml-[77px] xl:ml-[120px]">
          
          <h1 className="text-white font-extrabold leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] mb-4 tracking-tight">
            Welcome to<br className="hidden sm:inline" /> KRIPA LIBRARY
          </h1>

          <p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-[22px] font-normal mb-8 md:mb-10 max-w-md lg:max-w-none">
            Your peaceful space to Read, Study & Succeed.
          </p>

          <Link to="/contact" className="no-underline">
            <button className="flex items-center gap-2 bg-white text-black font-semibold text-base sm:text-lg lg:text-[20px] px-6 py-3 sm:px-8 sm:py-3.5 rounded-full border-0 hover:bg-gray-100 transition-all shadow-md cursor-pointer active:scale-95">
              Become a Member <span className="text-xl leading-none font-normal">›</span>
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
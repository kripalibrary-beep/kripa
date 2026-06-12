import React from 'react';

const heroBg = "https://ik.imagekit.io/manish07/assets/Events/fusion_festival_banner.jpg";

export default function EventHero() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] flex items-end bg-gray-900 overflow-hidden">
      {/* Background Image with slight zoom animation on load */}
      <img 
        src={heroBg} 
        alt="Kripa Library Events Banner" 
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-[10000ms] ease-out" 
      />
      
      {/* Dark overlay with linear gradient to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20"></div>
      
      {/* Content Container (Left-aligned as per Figma design) */}
      <div className="relative z-10 w-full max-w-[1298px] mx-auto px-6 sm:px-8 lg:px-12 pb-10 sm:pb-16 lg:pb-20 animate-fadeIn">
        <div className="flex flex-col gap-2.5 max-w-2xl">
          {/* Tagline with elegant blue indicator line */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-500 rounded-full"></span>
            <span className="text-[11px] sm:text-xs font-bold text-blue-400 tracking-[0.2em] uppercase">
              Kripa Library
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none">
            Events
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-200/90 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl mt-2">
            Stay connected with the latest happenings at your favorite study space.
          </p>
        </div>
      </div>
    </div>
  );
}

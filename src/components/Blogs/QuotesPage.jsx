import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QUOTES = [
  {
    id: 1,
    text: "The struggle you feel today creates the success you'll enjoy tomorrow.",
    author: "Unknown",
    gradient: "from-[#FFB6C1]/30 to-[#FFC0CB]/10",
    textHighlight: "text-rose-500"
  },
  {
    id: 2,
    text: "You'll never change your life until you change something you do daily. The secret of your success is found in your daily routine.",
    author: "Unknown",
    gradient: "from-[#87CEFA]/30 to-[#ADD8E6]/10",
    textHighlight: "text-blue-500"
  },
  {
    id: 3,
    text: "Behind every high achiever is a story of hard work and countless study sessions. Be the author of your success.",
    author: "Unknown",
    gradient: "from-[#98FB98]/30 to-[#90EE90]/10",
    textHighlight: "text-emerald-500"
  },
  {
    id: 4,
    text: "An exam is not the measure of your worth, but the reflection of your effort. Don't let stress take the seat where confidence belongs.",
    author: "Unknown",
    gradient: "from-[#FFE4B5]/30 to-[#FFDAB9]/10",
    textHighlight: "text-amber-500"
  },
  {
    id: 5,
    text: "It doesn't matter what others are doing, it matters what you are doing.",
    author: "Unknown",
    gradient: "from-[#DDA0DD]/30 to-[#E6E6FA]/10",
    textHighlight: "text-purple-500"
  }
];

export default function QuotesPage() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="relative w-full min-h-screen bg-[#F8F9FA] py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      
      {/* ── BACKGROUND GLOWS ── */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-400/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto z-10">
        
        {/* ── BACK BUTTON ── */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-all duration-300 group mb-8 cursor-pointer bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md"
        >
          <span className="text-base font-bold transform group-hover:-translate-x-1 transition-transform duration-300">
            ←
          </span>
          Back
        </button>

        {/* ── HEADER ── */}
        <div className="mb-12 md:mb-16 border-b border-gray-200/60 pb-6">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Inspirational Quotes
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            Discover powerful thoughts and timeless wisdom to elevate your mind.
          </p>
        </div>

        {/* ── QUOTES MASONRY ── */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {QUOTES.map((quote) => {
            const isHovered = hoveredId === quote.id;
            
            return (
              <div
                key={quote.id}
                onMouseEnter={() => setHoveredId(quote.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`break-inside-avoid relative w-full rounded-[2.5rem] p-8 sm:p-10 transition-all duration-700 transform ease-out cursor-default
                  bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden
                  ${isHovered ? '-translate-y-3 shadow-[0_20px_40px_rgb(0,0,0,0.08)] scale-[1.02]' : 'hover:shadow-md'}
                `}
              >
                {/* Colorful Gradient Overlay on Hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${quote.gradient} opacity-0 transition-opacity duration-700 pointer-events-none
                    ${isHovered ? 'opacity-100' : ''}
                  `} 
                />

                {/* Decorative Quote Icon Background */}
                <div className={`absolute -top-6 -right-4 text-[160px] font-serif font-black leading-none select-none pointer-events-none transition-all duration-700 opacity-5
                  text-slate-900 ${isHovered ? `scale-110 -rotate-12 opacity-10 ${quote.textHighlight}` : 'rotate-0'}`}>
                  "
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                  {/* Quote Text */}
                  <h3 className={`text-xl sm:text-2xl font-bold leading-snug tracking-tight text-slate-800 transition-colors duration-500`}>
                    "{quote.text}"
                  </h3>

                  {/* Bottom Author Section */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className={`h-[3px] rounded-full bg-slate-300 transition-all duration-700 ${isHovered ? `w-16 bg-current ${quote.textHighlight}` : 'w-8'}`}></div>
                    <span className={`text-sm font-bold tracking-[0.15em] uppercase text-slate-500 transition-colors duration-500 ${isHovered ? quote.textHighlight : ''}`}>
                      {quote.author}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

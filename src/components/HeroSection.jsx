import React, { useState } from 'react';
import { Link } from "react-router-dom";

import libraryBg from "../assets/library-bgg.png";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full font-sans">
      <div className="relative w-full min-h-[580px] lg:h-[606px] bg-gradient-to-br from-[#1E3A8A] via-[#3654FF] to-[#6B8DFF] overflow-hidden flex items-center py-12 lg:py-0">
        
        {/* Ambient Blur Circles for Figma Gradient Mesh Effect */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-15%] right-[15%] w-[35%] h-[35%] bg-[#6B8DFF]/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[20%] right-[-5%] w-[25%] h-[25%] bg-indigo-400/30 rounded-full blur-[90px] pointer-events-none"></div>

        {/* Outer Layout Wrapper Grid */}
        <div className="relative z-10 w-full max-w-[1298px] mx-auto px-6 sm:px-12 lg:px-[72px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content and Button */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-span-7">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-white text-xs sm:text-sm font-semibold mb-6">
              <span>📖</span> Premium Study Environment
            </div>

            {/* Main Title Heading */}
            <h1 className="text-white font-extrabold leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[56px] tracking-tight">
              Welcome to Kripa Library:
              <span className="block mt-2 font-black tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] text-blue-100">
                East Delhi's Premium Study Space
              </span>
            </h1>

            {/* Subtitle description */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mt-6 mb-8 max-w-xl">
              The best reading room in Mandawali. A premium 24-hour study library in East Delhi, offering a dedicated UPSC study room in Delhi.
            </p>

            {/* Action Call Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-slate-950 font-bold text-sm sm:text-base px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border-0 hover:bg-slate-50 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Become a Member
              <span className="text-lg leading-none font-bold">→</span>
            </button>
          </div>

          {/* Right Column: Library Rounded Photo Card */}
          <div className="w-full flex items-center justify-center lg:col-span-5">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden border-4 border-white/15 shadow-2xl group bg-white/5">
              <img
                src={libraryBg}
                alt="Modern study spaces designed for focus and productivity"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 text-center">
                <p className="text-white text-xs sm:text-sm font-medium tracking-wide">
                  Modern study spaces designed for focus and productivity
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Booking Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-4 sm:px-6 border-b border-gray-100 bg-gray-50/80">
              <h3 className="font-bold text-gray-800 text-lg">Book Your Seat</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-red-100 hover:text-red-600 text-gray-600 transition-colors"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 w-full bg-white">
              <iframe 
                src="https://www.focusdesk.in/library/f6cd1770-e936-4457-b2ef-bf17bce9f730/book?embed=true" 
                width="100%" 
                height="800px" 
                frameBorder="0" 
                style={{ border: '1px solid #eee', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                title="Book Your Seat"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
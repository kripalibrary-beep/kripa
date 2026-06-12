import React, { useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const galleryImages = [
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_97.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_97-1.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_98.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_98-1.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_99.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_99-1.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_100.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_101.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_102.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_103.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_104.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_105.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_106.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_107.png",
  "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_108.png"
];

export default function EventGallery({ onImageClick }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const showAll = searchParams.get('gallery') === 'all';
  
  const sectionRef = useRef(null);
  const prevShowAllRef = useRef(showAll);

  // Auto-scroll logic triggers whenever showAll transitions from expanded (true) to collapsed (false)
  useEffect(() => {
    if (prevShowAllRef.current && !showAll) {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    prevShowAllRef.current = showAll;
  }, [showAll]);

  const handleToggleShowAll = () => {
    const nextParams = new URLSearchParams(searchParams);
    if (showAll) {
      nextParams.delete('gallery');
    } else {
      nextParams.set('gallery', 'all');
    }
    setSearchParams(nextParams);
  };

  return (
    <div 
      ref={sectionRef}
      className="max-w-[1298px] mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 border-t border-gray-150 scroll-mt-20 animate-fadeIn"
    >
      
      {/* ── Title Header and See All Toggle ── */}
      <div className="flex flex-row justify-between items-end w-full mb-8">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#090D1A] leading-none tracking-tight">
            Photos Gallery
          </h2>
          <p className="text-xs sm:text-sm md:text-base font-normal text-gray-500 leading-relaxed m-0">
            Every chapter of our story, captured in a frame.
          </p>
        </div>

        {/* See All / Show Less Pill Button */}
        <button
          onClick={handleToggleShowAll}
          className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-gray-50 text-gray-600 hover:text-black font-extrabold text-xs sm:text-sm rounded-full border border-gray-200 shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
        >
          <span>{showAll ? "Show Less" : "See All"}</span>
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

      {/* ── CONDITIONAL RENDER: HORIZONTAL SCROLL VS GRID VIEW ── */}
      {!showAll ? (
        /* Horizontal scroll list displaying photos with figma spacing: 610x312px card, 79px gap */
        <div 
          className="flex gap-[79px] overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth scrollbar-hide -mx-1 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Scrollbar hide styling */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {galleryImages.map((imgUrl, index) => (
            <div 
              key={index}
              onClick={() => onImageClick(index)}
              className="group relative cursor-pointer overflow-hidden rounded-[16px] bg-slate-50 border border-gray-150 shrink-0 snap-start shadow-sm hover:shadow-md transition-all duration-300 w-[85vw] sm:w-[500px] lg:w-[610px] h-[250px] sm:h-[300px] lg:h-[312px]"
            >
              <img 
                src={imgUrl} 
                alt={`Library Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-103"
                loading="lazy"
              />
              {/* Hover overlay with search magnifier icon */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Full Expanded Multi-row Grid view (displays all 15 images) */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 animate-fadeIn justify-items-center">
          {galleryImages.map((imgUrl, index) => (
            <div 
              key={index}
              onClick={() => onImageClick(index)}
              className="group relative cursor-pointer overflow-hidden rounded-[16px] bg-slate-50 border border-gray-150 aspect-[4/3] w-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <img 
                src={imgUrl} 
                alt={`Library Gallery grid ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover search overlay */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

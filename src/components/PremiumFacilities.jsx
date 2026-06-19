import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Existing Imports
const acImg = "https://ik.imagekit.io/manish07/assets/facilities/ac.png";
const wifiImg = "https://ik.imagekit.io/manish07/assets/facilities/wifi1.png";
const lockerImg = "https://ik.imagekit.io/manish07/assets/facilities/lockmain.jpg";
const waterImg = "https://ik.imagekit.io/manish07/assets/facilities/water1.png";

// New Image Imports
import beverageImg from "../assets/Beverages.png";
import lunchImg from "../assets/lunch.png";
import premiumSeatsImg from "../assets/Premium Seats.png";
import spaciousImg from "../assets/Spacious.jpg";
import newspaperImg from "../assets/Newspaper.png";
import restImg from "../assets/bed.png";
import cctvImg from "../assets/Rest.png";

const facilitiesData = [
  { title: "Fully Air Conditioned", desc: "Separate AC for each wing.", img: acImg },
  { title: "Wi-Fi", desc: "Free High-Speed Wi-Fi.", img: wifiImg },
  { title: "Lockers", desc: "Lockers are available to keep your belongings safe.", img: lockerImg },
  { title: "RO Water", desc: "Hot, Cold & Normal water is available through a water dispenser.", img: waterImg },
  { title: "Beverages", desc: "Tea & Coffee available 24/7 via vending machine.", img: beverageImg },
  { title: "Lunch Room & Canteen", desc: "Dedicated neat & clean space for lunch.", img: lunchImg },
  { title: "Premium Seats", desc: "Personal seat & notice board.", img: premiumSeatsImg },
  { title: "Spacious Cabin", desc: "Individual charging port & separate LED lights for each cabin.", img: spaciousImg },
  { title: "Newspaper & Magazines", desc: "Everyday newspaper free for students.", img: newspaperImg },
  { title: "Rest Bed", desc: "Rest Bed for a quick power nap.", img: restImg },
  { title: "CCTV", desc: "24/7 surveillance for complete safety.", img: cctvImg },
];

export default function PremiumFacilities() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const scrollFraction = scrollLeft / (scrollWidth - clientWidth || 1);
      const totalItems = facilitiesData.length;
      let newIndex = Math.round(scrollFraction * (totalItems - 1));
      if (newIndex < 0) newIndex = 0;
      if (newIndex >= totalItems) newIndex = totalItems - 1;
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollTo = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.children[index + 1]; // +1 to skip <style> tag
      if (card) {
        const offset = card.offsetLeft - container.offsetLeft;
        container.scrollTo({ left: offset, behavior: 'smooth' });
      }
    }
  };

  const handleNext = () => {
    if (activeIndex < facilitiesData.length - 1) {
      scrollTo(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollTo(activeIndex - 1);
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-20 font-sans overflow-hidden">
      
      {/* ── Heading block ── */}
      <div className="px-4 sm:px-6 md:px-12 mb-8 md:mb-[40px] max-w-7xl mx-auto text-center sm:text-left">
        <h2 className="font-bold text-black leading-tight mb-2 text-3xl sm:text-4xl lg:text-[40px] tracking-tight">
          Exclusive Premium Facilities: Private Study Cabins & 24/7 Access
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Looking for a private study cabin near me? Focus on your goals, we'll take care of the comfort.
        </p>
      </div>

      {/* ── Native Scroll-Snap Container ── */}
      <div className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 px-1 -mx-1 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Webkit scrollbar cleaner utility */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {facilitiesData.map((item, index) => (
            <div 
              key={index} 
              className="snap-start shrink-0 w-[260px] sm:w-[290px] md:w-[300px] lg:w-[285px] flex flex-col group cursor-pointer bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden transition-all p-1"
            >
              
              {/* Image Container */}
              <div className="w-full rounded-[20px] sm:rounded-[28px] overflow-hidden bg-gray-100 h-[200px] sm:h-[220px] lg:h-[240px] relative shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle Overlay on hover */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Text Content */}
              <div className="mt-4 flex-grow flex flex-col justify-start px-1">
                <h3 className="font-bold text-black text-lg sm:text-[20px] mb-1.5 group-hover:text-blue-600 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-[14px] leading-relaxed m-0">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Left/Right Arrow Navigation */}
        <button 
          onClick={handlePrev}
          disabled={activeIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-gray-800 hover:text-blue-600 hover:scale-110 disabled:opacity-0 disabled:pointer-events-none transition-all duration-300"
          aria-label="Previous facility"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button 
          onClick={handleNext}
          disabled={activeIndex === facilitiesData.length - 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-gray-800 hover:text-blue-600 hover:scale-110 disabled:opacity-0 disabled:pointer-events-none transition-all duration-300"
          aria-label="Next facility"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-8 md:mt-12 px-4">
        {facilitiesData.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to facility ${index + 1}`}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === index 
                ? "w-8 sm:w-10 h-2 sm:h-2.5 bg-blue-600" 
                : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
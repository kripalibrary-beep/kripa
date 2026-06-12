import React, { useRef } from "react";

// Existing Imports
const acImg = "https://ik.imagekit.io/manish07/assets/facilities/ac.png";
const wifiImg = "https://ik.imagekit.io/manish07/assets/facilities/wifi1.png";
const lockerImg = "https://ik.imagekit.io/manish07/assets/facilities/lockmain.jpg";
const waterImg = "https://ik.imagekit.io/manish07/assets/facilities/water1.png";

// New Image Imports
const beverageImg = "https://ik.imagekit.io/manish07/assets/Beverages.png";
const lunchImg = "https://ik.imagekit.io/manish07/assets/lunch.png";
const premiumSeatsImg = "https://ik.imagekit.io/manish07/assets/Premium Seats.png";
const spaciousImg = "https://ik.imagekit.io/manish07/assets/Spacious.jpg";
const newspaperImg = "https://ik.imagekit.io/manish07/assets/Newspaper.png";
const restImg = "https://ik.imagekit.io/manish07/assets/bed.png";
const cctvImg = "https://ik.imagekit.io/manish07/assets/Rest.png"; // Note: Check if this asset path should be cctv.png or security.png!

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

  // Optional manual scroll trigger for a navigation control mechanism if needed later
  const handleScrollNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.firstChild.offsetWidth + 24; // Card width + gap spacing
      container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-12 md:py-20 font-sans overflow-hidden">
      
      {/* ── Heading block ── */}
      <div className="px-4 sm:px-6 md:px-12 mb-8 md:mb-[40px] max-w-7xl mx-auto text-center sm:text-left">
        <h2 className="font-bold text-black leading-tight mb-2 text-3xl sm:text-4xl lg:text-[40px] tracking-tight">
          Exclusive Premium Facilities
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Focus on your goals, we'll take care of the comfort.
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
      </div>

      {/* Optional: Navigation Helper Button */}
      {/* <div className="flex justify-center mt-4 px-4">
        <button 
          className="flex items-center gap-2.5 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95 text-gray-700 text-sm font-bold px-7 py-2.5 rounded-full shadow-sm"
          onClick={handleScrollNext}
        >
          <span>See More Facilities</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div> */}

    </section>
  );
}
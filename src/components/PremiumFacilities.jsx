import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// Existing Imports
import acImg from "../assets/facilities/ac.png";
import wifiImg from "../assets/facilities/wifi1.png";
import waterImg from "../assets/facilities/water1.png";
import lockerImg from "../assets/facilities/lockmain.jpg";

// New Image Imports
import beverageImg from "../assets/Beverages.png";
import lunchImg from "../assets/lunch.png";
import premiumSeatsImg from "../assets/Premium Seats.png";
import spaciousImg from "../assets/Spacious.jpg";
import newspaperImg from "../assets/Newspaper.png";
import restImg from "../assets/bed.png";
import cctvImg from "../assets/Rest.png"; 

const facilitiesData = [
  { title: "Fully Air Conditioned", desc: "Separate AC for each wings.", img: acImg },
  { title: "Wi-Fi", desc: "Free High Speed Wi-Fi.", img: wifiImg },
  { title: "Lockers", desc: "Lockers are available for keep your belongings safe.", img: lockerImg },
  { title: "RO Water", desc: "Hot, Cold & Normal water is available through water dispenser.", img: waterImg },
  { title: "Beverages", desc: "Tea & Coffee available 24/7 via vending machine.", img: beverageImg },
  { title: "Lunch Room & Canteen", desc: "Dedicated neat & clean space for lunch.", img: lunchImg },
  { title: "Premium Seats", desc: "Personal seat & notice board.", img: premiumSeatsImg },
  { title: "Spacious Cabin", desc: "Individual charging port & separate LED lights for each cabin.", img: spaciousImg },
  { title: "Newspaper & Magazines", desc: "Everyday newspaper free for students.", img: newspaperImg },
  { title: "Rest Bed", desc: "Rest Bed for power nap.", img: restImg },
  { title: "CCTV", desc: "24/7 surveillance.", img: cctvImg },
];

export default function PremiumFacilities() {
  return (
    <section className="w-full bg-white pt-20 pb-16 font-['Inter']">
      
      {/* ── Heading block ── */}
      <div className="px-6 lg:px-[48px] mb-[40px] max-w-7xl mx-auto">
        <h2 className="font-bold text-black leading-tight mb-2 text-[40px]">
          Exclusive Premium Facilities
        </h2>
        <p className="text-gray-500 text-sm">
          Focus on your goals, we'll take care of the comfort.
        </p>
      </div>

      {/* ── Carousel Wrapper ── */}
      <div className="px-6 lg:px-[48px] max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="facility-swiper !pb-16"
        >
          {facilitiesData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col group cursor-pointer">
                {/* Image Container */}
                <div className="w-full rounded-[32px] overflow-hidden bg-gray-100 h-[240px] relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Overlay on hover */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Text Content */}
                <div className="mt-5">
                  <h3 className="font-bold text-black text-[20px] mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ── Custom Swiper Styles ── */}
      <style>{`
        .facility-swiper .swiper-pagination-bullet-active {
          background: #2563eb !important; /* blue-600 */
          width: 24px !important;
          border-radius: 5px !important;
        }
        .facility-swiper .swiper-pagination-bullet {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
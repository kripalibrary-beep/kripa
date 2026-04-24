import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

/* --- Sub-Component (Card without Book Now) --- */

const PlanCard = ({ duration, unit, title, description, price, badge }) => (
  <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center h-full min-h-[380px]">
    {badge && (
      <div className="absolute -top-3 bg-white px-4 py-1 rounded-full shadow-md border border-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
        {badge}
      </div>
    )}
    
    <p className="text-gray-400 text-xs font-medium mb-1">Duration</p>
    
    <div className="flex items-baseline gap-1 mb-4">
      <span className="text-5xl font-bold text-gray-900">{duration}</span>
      <span className="text-gray-500 font-medium">{unit}</span>
    </div>

    <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
    
    <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
      {description}
    </p>

    <div className="mt-auto pt-4 border-t border-gray-50 w-full">
      <p className="text-green-600 font-bold text-sm">Original Price: {price}</p>
    </div>
  </div>
);

/* --- Main Component --- */

export default function ExplorePlans() {
  const swiperRef = useRef(null);

  const plans = [
    {
      duration: "01",
      unit: "day",
      title: "Single Day Pass",
      description: "Study at your own pace, this plan gives you the freedom to finish your work whenever you want in a quiet, relaxed spot.",
      price: "Rs. 50"
    },
    {
      duration: "Night",
      unit: "Plan",
      title: "Night Plan",
      description: "The Night Plan is built for those who find their focus after dark, allowing you to study at your own pace.",
      price: "Rs. 800"
    },
    {
      duration: "06",
      unit: "hrs",
      title: "Six Hours Access",
      description: "Boost your focus with 06 hours of daily access. It's the perfect choice for a quick, intense study session.",
      price: "Rs. 600"
    },
    {
      duration: "08",
      unit: "hrs",
      title: "Eight Hours Access",
      description: "The eight hour plan is our standard choice for dedicated exam preparation, giving you enough time to cover syllabus.",
      price: "Rs. 800"
    },
    {
      duration: "10",
      unit: "hrs",
      title: "Ten Hours Access",
      description: "This plan is designed for ambitious students aiming for big goals, uninterrupted stretch of quiet time.",
      price: "Rs. 900",
      badge: "Most Popular"
    },
    {
      duration: "12",
      unit: "hrs",
      title: "Twelve Hours Access",
      description: "This plan gives you a dedicated spot for the whole day it is perfect for deep focus and long study sessions.",
      price: "Rs. 1000"
    },
    {
      duration: "24",
      unit: "hrs",
      title: "24 Hours Access",
      description: "Whether you're a night owl or an early riser, the space is yours anytime, allowing you to study on your own terms.",
      price: "Rs. 1200"
    },
    {
      duration: "Premium",
      unit: "",
      title: "Premium Access",
      description: "Our premium plan features a private cabin with a very comfortable chair. It's built to keep you relaxed and focused.",
      price: "Rs. 1400",
      badge: "Full Access"
    },
    {
      duration: "04",
      unit: "months",
      title: "04 Months Plan",
      description: "Save big with our four months plan! Get a 20% discount and enjoy a steady, quiet place to study.",
      price: "For all monthly plans"
    } , 
    {
      duration: "06",
      unit: "months",
      title: "06 Months Plan",
      description: "Save big with our six months plan! Get a 20% discount and enjoy a steady, quiet place to study.",
      price: "For all monthly plans"
    }
    
    
  ];

  return (
    <section className="w-full bg-gray-50 py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-5xl font-bold text-gray-900 mb-3 leading-tight">
          Explore our Plans
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-16">
          Flexible plans designed to fit your workflow and Budget.
        </p>

        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {plans.map((plan, index) => (
            <SwiperSlide key={index}>
              <PlanCard {...plan} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-8">
          <button 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all active:scale-95 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-blue-200"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <span>⟨⟨</span>
            <span>Swipe</span>
            <span>⟩⟩</span>
          </button>
        </div>
      </div>
    </section>
  );
}
import React, { useState, useEffect } from "react";

// Icons
import communityIcon from "../assets/community.png";
import locationIcon from "../assets/location.png";
import peacefulIcon from "../assets/peaceful.png";
import securityIcon from "../assets/security.png";

// New Slide Images
import imgFour from "../assets/four.jpg";
import imgThree from "../assets/three.png";
import imgTwo from "../assets/two.jpg";

const FEATURES = [
  {
    icon: peacefulIcon,
    title: "Peaceful & Quiet Environment",
    desc: "A quiet place to focus on your goals without any noise.",
  },
  {
    icon: communityIcon,
    title: "Community & Growth",
    desc: "A community of serious aspirants to keep you motivated.",
  },
  {
    icon: locationIcon,
    title: "Convenient Location",
    desc: "Study at a place that's easy to reach and close to you.",
  },
  {
    icon: securityIcon,
    title: "Safe & Secure Environment",
    desc: "CCTV monitored and safe for everyone, day or night.",
  },
];

const SLIDES = [imgFour, imgThree, imgTwo];

export default function WhyChooseUs() {
  const [current, setCurrent] = useState(0);

  // ── AUTO SLIDE LOGIC ──
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 font-sans overflow-x-hidden">
      {/* FIXED: Changed rigid layout block to a clean, responsive flex column-to-row grid with standard max-width */}
      <div className="max-w-[1298px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
        
        {/* ── LEFT: Content Area ── */}
        {/* FIXED: Removed explicit w-[820px] constraint so content flows naturally on smaller breakpoints */}
        <div className="w-full lg:max-w-[700px] xl:max-w-[820px] flex flex-col text-center sm:text-left items-center sm:items-start">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-extrabold text-black leading-tight tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="w-full max-w-[380px] text-base sm:text-lg text-gray-500 font-medium leading-relaxed mb-8 md:mb-[41px]">
            The perfect space to turn your hard work into success.
          </p>

          {/* FIXED: Features Grid scales dynamically from 1 column on mobile to 2 columns on tablets/laptops */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 lg:gap-x-16 xl:gap-x-20 gap-y-10 w-full justify-items-center sm:justify-items-start">
            {FEATURES.map((f, i) => (
              <div key={i} className="max-w-[340px] flex flex-col items-center sm:items-start text-center sm:text-left group">
                <div className="w-14 h-14 sm:w-[72px] sm:h-[72px] bg-[#F8F9FA] border border-gray-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-sm transition-transform group-hover:scale-105">
                  <img src={f.icon} alt="" className="w-10 h-10 sm:w-14 sm:h-14 object-contain opacity-90" />
                </div>
                <h5 className="text-xl sm:text-[24px] font-bold text-black mb-2 sm:mb-3 tracking-tight">
                  {f.title}
                </h5>
                <p className="text-sm sm:text-[15px] text-gray-500 leading-relaxed font-normal">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Main Image Slider ── */}
        {/* FIXED: Stripped out explicit pixel sizing; uses responsive widths and fluid scaling heights (h-[300px] to h-[580px]) */}
        <div className="w-full max-w-[450px] lg:max-w-[480px] xl:max-w-[550px] h-[320px] sm:h-[420px] lg:h-[520px] xl:h-[580px] rounded-[24px] sm:rounded-[32px] lg:rounded-[45px] overflow-hidden shadow-xl bg-gray-100 shrink-0 mt-4 lg:mt-0">
          <img
            key={current}
            src={SLIDES[current]}
            alt="Library Facilities"
            className="w-full h-full object-cover animate-slideIn"
          />
        </div>

      </div>

      {/* CSS for a smooth fade effect between slides */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0.6; transform: scale(1.03); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
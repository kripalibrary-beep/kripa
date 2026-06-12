import React from "react";
// Replace these with the actual paths to your logo images!
const studentsIcon = "https://ik.imagekit.io/manish07/assets/About/students-icon.png";
const selectionsIcon = "https://ik.imagekit.io/manish07/assets/About/selections-icon.png";
const availabilityIcon = "https://ik.imagekit.io/manish07/assets/About/availability-icon.png";
const ratingIcon = "https://ik.imagekit.io/manish07/assets/About/rating-icon.png";

export default function TrustedStudySpace() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6">
      {/* Main Container - 1298px max width */}
      <div className="max-w-[1298px] mx-auto flex flex-col items-center gap-10 md:gap-[41px]">
        
        {/* Header Text Section */}
        <div className="flex flex-col items-center gap-3 text-center max-w-[511px]">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-black tracking-tight leading-tight">
            Your Trusted Study Space
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Kripa Library offers a quiet and focused environment to help students
            achieve their academic and career success.
          </p>
        </div>

        {/* FIXED: Changed flex-row into a highly predictable CSS Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 py-4 justify-items-center lg:justify-items-stretch">
          
          {/* Stat 1: Students Trusted */}
          <div className="flex items-center gap-4 w-full max-w-[260px] lg:max-w-none justify-start lg:justify-center">
            <div className="w-[85px] h-[82px] sm:w-[102px] sm:h-[99px] rounded-[24px] sm:rounded-[30px] bg-[#FDD8D8] flex items-center justify-center shrink-0">
              <img src={studentsIcon} alt="Students" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-red-500">2,500+</span>
              <span className="text-xs sm:text-sm text-gray-800 leading-snug mt-0.5">
                Students Trusted<br className="hidden sm:inline" /> Kripa Library
              </span>
            </div>
          </div>

          {/* Stat 2: Selections */}
          {/* FIXED: Replaced standard vertical dividers with border-l rules on the grid squares for clean layout breaks */}
          <div className="flex items-center gap-4 w-full max-w-[260px] lg:max-w-none justify-start lg:justify-center lg:border-l lg:border-gray-200 lg:pl-4">
            <div className="w-[85px] h-[82px] sm:w-[102px] sm:h-[99px] rounded-[24px] sm:rounded-[30px] bg-green-100 flex items-center justify-center shrink-0">
              <img src={selectionsIcon} alt="Selections" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-green-600">1,150+</span>
              <span className="text-xs sm:text-sm text-gray-800 leading-snug mt-0.5">
                Selections From<br className="hidden sm:inline" /> Our Library
              </span>
            </div>
          </div>

          {/* Stat 3: Availability */}
          <div className="flex items-center gap-4 w-full max-w-[260px] lg:max-w-none justify-start lg:justify-center sm:border-t sm:pt-6 lg:border-t-0 lg:pt-0 lg:border-l lg:border-gray-200 lg:pl-4">
            <div className="w-[85px] h-[82px] sm:w-[102px] sm:h-[99px] rounded-[24px] sm:rounded-[30px] bg-fuchsia-100 flex items-center justify-center shrink-0">
              <img src={availabilityIcon} alt="Availability" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-purple-700">24/7</span>
              <span className="text-xs sm:text-sm text-gray-800 leading-snug mt-0.5">
                Study Space<br className="hidden sm:inline" /> Always Available
              </span>
            </div>
          </div>

          {/* Stat 4: Rating */}
          <div className="flex items-center gap-4 w-full max-w-[260px] lg:max-w-none justify-start lg:justify-center sm:border-t sm:pt-6 lg:border-t-0 lg:pt-0 lg:border-l lg:border-gray-200 lg:pl-4">
            <div className="w-[85px] h-[82px] sm:w-[102px] sm:h-[99px] rounded-[24px] sm:rounded-[30px] bg-orange-100 flex items-center justify-center shrink-0">
              <img src={ratingIcon} alt="Rating" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-orange-500">4.8/5</span>
              <span className="text-xs sm:text-sm text-gray-800 leading-snug mt-0.5">
                Students Rating
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
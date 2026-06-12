import React from "react";
// Replace these with the actual paths to your images
const studyImage1 = "https://ik.imagekit.io/manish07/assets/About/study-space-1.jpg"; 
const studyImage2 = "https://ik.imagekit.io/manish07/assets/About/study-space-2.jpg"; 

export default function StudySpaceImages() {
  return (
    <section className="w-full bg-white py-6 md:py-10 px-4 sm:px-6">
      {/* Container matching Figma's 1298px width */}
      {/* FIXED: Changed flex-col md:flex-row to properly handle width and removed shrink-0 which forced extreme clipping on smaller viewports */}
      <div className="max-w-[1298px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-[78px]">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 lg:max-w-[610px]">
          <img
            src={studyImage1}
            alt="Students studying at desks"
            className="w-full h-[220px] sm:h-[280px] md:h-[300px] lg:h-[327px] object-cover rounded-[20px] md:rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          />
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 lg:max-w-[610px]">
          <img
            src={studyImage2}
            alt="Students studying on laptops"
            className="w-full h-[220px] sm:h-[280px] md:h-[300px] lg:h-[327px] object-cover rounded-[20px] md:rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          />
        </div>

      </div>
    </section>
  );
}
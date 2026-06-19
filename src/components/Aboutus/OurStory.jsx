import React from "react";
// Replace this import path with the actual path to your image
const storyImage = "https://ik.imagekit.io/manish07/assets/About/right.jpg"; 

export default function OurStory() {
  return (
    <section className="w-full bg-white py-10 md:py-16 px-4 sm:px-6">
      {/* Container matching Figma's 1298px max-width */}
      {/* Changed hardcoded gap-[157px] to a responsive gap scale, centered items globally on mobile */}
      <div className="max-w-[1298px] mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 md:gap-16 lg:gap-[100px] xl:gap-[157px]">
        
        {/* Left Side: Text Content */}
        {/* Removed strict max-width constraints on smaller viewports so text flows naturally */}
        <div className="w-full lg:max-w-[599px] flex flex-col">
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-black mb-6 md:mb-8 text-center lg:text-left">
            Our Story
          </h2>
          
          <p className="text-black text-base md:text-lg lg:text-[20px] leading-relaxed mb-8 md:mb-12 text-justify lg:text-left">
            We started this library with a simple purpose: to solve the real problems students
            face while studying. Lack of a peaceful environment, distractions at home, and the
            need to travel far for a good study space inspired us to take this step. Our aim was
            to create a dedicated place where focus becomes natural and consistency becomes
            easy.
          </p>

          {/* Vision Section */}
          <div className="mb-8 md:mb-10">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 md:mb-4">
              {/* Triangle Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black" className="shrink-0">
                <path d="M2 22L22 22L2 2V22Z" />
              </svg>
              <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-black">Vision</h3>
            </div>
            <p className="text-black text-base md:text-lg lg:text-[20px] leading-relaxed text-justify lg:text-left">
              Our vision is to build a focused culture in Mandawali with equal opportunities for all.
              We aim to create a community driven by dedication and success.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3 md:mb-4">
              {/* Triangle Icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black" className="shrink-0">
                <path d="M2 22L22 22L2 2V22Z" />
              </svg>
              <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-black">Mission</h3>
            </div>
            <p className="text-black text-base md:text-lg lg:text-[20px] leading-relaxed text-justify lg:text-left">
              Our mission is to provide affordable, high-quality facilities in a quiet and distraction-free
              environment, making study spaces accessible close to home.
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        {/* Adjusted width handling and added scaling height (h-[240px] up to h-[370px]) */}
        <div className="w-full sm:max-w-[500px] lg:max-w-[542px] lg:w-[542px] shrink-0">
          <img
            src={storyImage}
            alt="Inside Kripa Library"
            className="w-full h-[240px] sm:h-[320px] lg:h-[370px] object-cover rounded-[20px] md:rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
          />
        </div>

      </div>
    </section>
  );
}
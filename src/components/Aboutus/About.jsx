import React from "react";
// Replace this import path with the actual path and name of your image!
const aboutBanner = "https://ik.imagekit.io/manish07/assets/About/aboutus.jpeg";

// Import sub-components
import OurStory from "./OurStory.jsx";
import StudySpaceImages from "./StudySpaceImages.jsx";
import TrustedStudySpace from "./TrustedStudySpace.jsx";
import StudentsAchievements from "./StudentsAchievements.jsx";
import SEO from "../SEO";

export default function About() {
  return (
    <div className="w-full font-sans overflow-x-hidden">
      <SEO 
        title="About Us | Kripa Library - Top Reading Room in East Delhi"
        description="Learn about Kripa Library, the best study room in East Delhi. Discover our mission to provide the perfect learning environment with 24/7 access and private cabins."
      />
      {/* Hero Banner Section */}
      {/* Changed fixed h-[440px] to responsive heights: h-[250px] on mobile, h-[350px] on tablet, h-[440px] on laptop */}
      <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[440px] flex items-center justify-center">

        {/* Background Image */}
        <img
          src={aboutBanner}
          alt="Kripa Library Storefront"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay (Ensures the white text is readable over the image) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Centered Title */}
        {/* Adjusted text sizing: text-3xl on small mobile, text-4xl on mobile, text-5xl on tablet, text-6xl on laptop */}
        <h1 className="relative z-10 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-center px-4">
          About Us
        </h1>

      </div>

      {/* Sub-sections */}
      {/* Added responsive horizontal padding (px) to prevent text/content from touching the screen edges on mobile */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-8 md:py-12 space-y-12 md:space-y-20">
        
        <div className="w-full">
          <OurStory />
        </div>
        
        <div className="w-full">
          <StudySpaceImages />
        </div>
        
        <div className="w-full">
          <TrustedStudySpace />
        </div>
        
        <div className="w-full">
          <StudentsAchievements />
        </div>

      </div>
    </div>
  );
}
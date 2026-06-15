import React from 'react';
const blogBanner = "https://ik.imagekit.io/manish07/assets/Blog/blog-banner.png"; // Replace with your actual banner image path
import SmartStudyTips from './SmartStudyTips.jsx'; // Import the SmartStudyTips component
import RecentPosts from './RecentPosts.jsx'; // Import the RecentPosts component
import SEO from "../SEO";

export default function Blog() {
  return (
    <div className="w-full font-sans overflow-x-hidden">
      <SEO 
        title="Blogs & Study Resources | Kripa Library Delhi"
        description="Read study tips, biographies, motivation, self-development articles, and more. Fuel your UPSC and competitive exam preparation at Kripa Library."
      />

      {/* Hero Banner Section */}
      {/* FIXED: Scaled height responsively from h-[220px] on mobile to h-[440px] on desktops */}
      <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[440px] flex items-center justify-center">

        {/* Background Image */}
        <img
          src={blogBanner}
          alt="Our Blog"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay (Black at 50% opacity as per Figma) */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered Text Container */}
        {/* FIXED: Added horizontal safety padding (px-4) so text doesn't touch the edges of phone glass */}
        <div className="relative z-10 w-full max-w-[610px] px-4 flex flex-col items-center gap-2 text-center">
          {/* FIXED: Sized typography dynamically from text-3xl to text-5xl/6xl */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Our Blog
          </h1>
          <p className="text-white/90 text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed">
            Read the latest articles and tips
          </p>
        </div>

      </div>

      {/* Main Sections Content Container Layout Wrapper */}
      {/* FIXED: Unified responsive structural paddings (px-4 sm:px-6 md:px-8) and replaced arbitrary pb-15 with native pb-16 */}
      <div className="max-w-[1298px] mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-12 md:space-y-16">
        
        <div className="w-full">
          <SmartStudyTips />
        </div>
        
        <div className="w-full pb-4 md:pb-8">
          <RecentPosts />
        </div>

      </div>

    </div>
  );
}
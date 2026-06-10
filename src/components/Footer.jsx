import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white rounded-t-[40px] sm:rounded-t-[60px] md:rounded-t-[100px] border-t border-x border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] font-sans mt-12 md:mt-20">
      {/* ── Main Footer Container ── */}
      {/* FIXED: Scaled top padding (pt-12 to pt-20) down for mobile devices to prevent excessive dead space */}
      <div className="max-w-[1298px] mx-auto px-5 sm:px-8 md:px-12 pt-12 md:pt-20 pb-8">

        {/* Top Section: Brand & Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-12 md:mb-20">

          {/* Brand Section */}
          <div className="w-full lg:max-w-[340px] text-center lg:text-left">
            <h2 className="text-3xl sm:text-[40px] font-bold text-black mb-4 md:mb-6 leading-tight">
              Kripa Library
            </h2>
            <p className="font-normal text-sm text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              Kripa Library (often referred to as Kripa Library & Reading Room)
              is a popular private study space located in the Mandawali area of East
              Delhi.
            </p>
          </div>

          {/* Navigation Links Grid */}
          {/* FIXED: Swapped unpredictable nested flexbox for a clean, responsive 2-to-3 column CSS grid */}
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 md:gap-24 lg:gap-[100px] xl:gap-[120px] mt-4 lg:mt-0">

            {/* Column 1: Visit Us */}
            {/* col-span-2 forces address info to stretch across full width on mobile screens while aligning cleanly on tablets */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold text-black text-[15px] mb-2">Visit Us</h4>
              {/* Blue Divider */}
              <div className="w-10 h-[3px] bg-[#3B82F6] mb-4 md:mb-6"></div>
              
              <div className="font-normal text-sm text-gray-600 space-y-3 leading-relaxed">
                <p className="m-0">
                  168, Ground floor,<br />
                  Mandawali Pandit<br />
                  Mohalla, Front of Durga<br />
                  Mandir Delhi, 110092
                </p>
                <a href="mailto:kripalibrary@gmail.com" className="hover:text-blue-600 transition-colors block break-all underline">
                  kripalibrary@gmail.com
                </a>
                <a href="tel:7838004416" className="hover:text-blue-600 transition-colors block font-semibold text-gray-800">
                  +91 7838004416
                </a>
              </div>
            </div>

            {/* Column 2: Links */}
            <div>
              <h4 className="font-bold text-black text-[15px] mb-2">Links</h4>
              {/* Blue Divider */}
              <div className="w-10 h-[3px] bg-[#3B82F6] mb-4 md:mb-6"></div>
              
              {/* Changed static text to real Link objects for router compliance */}
              <ul className="font-normal text-sm text-gray-600 space-y-3 p-0 list-none m-0">
                <li><Link to="/" className="hover:text-blue-600 transition-colors no-underline text-inherit block">Home</Link></li>
                <li><Link to="/about" className="hover:text-blue-600 transition-colors no-underline text-inherit block">About Us</Link></li>
                <li><Link to="/events" className="hover:text-blue-600 transition-colors no-underline text-inherit block">Events</Link></li>
                <li><Link to="/blogs" className="hover:text-blue-600 transition-colors no-underline text-inherit block">Blogs</Link></li>
                <li><Link to="/contact" className="hover:text-blue-600 transition-colors no-underline text-inherit block">Contacts</Link></li>
              </ul>
            </div>

            {/* Column 3: Social */}
            <div>
              <h4 className="font-bold text-black text-[15px] mb-2">Social</h4>
              {/* Blue Divider */}
              <div className="w-10 h-[3px] bg-[#3B82F6] mb-4 md:mb-6"></div>
              
              <ul className="font-normal text-sm text-gray-600 space-y-3 p-0 list-none m-0">
                <li>
                  <a href="https://www.instagram.com/kripa_library/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors no-underline text-inherit block">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/p/Kripa-Library-Mandawali-61581788636814/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors no-underline text-inherit block">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@KripaLibrary" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors no-underline text-inherit block">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar Section */}
        {/* FIXED: Aligns text cleanly in center on mobile while flipping back to row alignment on desktops */}
        <div className="pt-6 md:pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm font-normal text-gray-500 text-center sm:text-left">
          <p className="m-0">© {new Date().getFullYear()} Kripa Library. All rights reserved.</p>
          <p className="hover:text-blue-600 cursor-pointer transition-colors m-0">Terms & Conditions</p>
        </div>
        
      </div>
    </footer>
  );
}
import React, { useState } from "react";
const logo = "https://ik.imagekit.io/manish07/assets/logo2.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  // State to manage mobile menu toggle open/close tracking
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full h-[81px] bg-white border-b border-gray-100 relative z-50">
      {/* Navbar Container */}
      {/* FIXED: Changed rigid px-[77px] to fluid px-4 sm:px-8 lg:px-[77px] */}
      <div className="w-full h-full flex items-center justify-between px-4 sm:px-8 lg:px-[77px]">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link to="/" onClick={closeMenu} className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center overflow-hidden cursor-pointer">
            <img
              src={logo}
              alt="Kripa Library Logo"
              className="w-full h-full object-contain scale-125 sm:scale-150"
            />
          </Link>

          <Link to="/" onClick={closeMenu} className="cursor-pointer">
            <span
              className="text-black font-semibold text-base sm:text-[18px] leading-tight whitespace-nowrap"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Kripa Library
            </span>
          </Link>
        </div>

        {/* Navigation Links - Desktop Version */}
        {/* FIXED: Hidden on mobile screens (`hidden`), visible on large screens (`lg:flex`) */}
        <ul className="hidden lg:flex items-center gap-10 list-none m-0 p-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-semibold text-blue-700 border-b-2 border-blue-700 pb-0.5 no-underline"
                  : "text-sm text-gray-500 hover:text-blue-700 transition-colors no-underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-semibold text-blue-700 border-b-2 border-blue-700 pb-0.5 no-underline"
                  : "text-sm text-gray-500 hover:text-blue-700 transition-colors no-underline"
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-semibold text-blue-700 border-b-2 border-blue-700 pb-0.5 no-underline"
                  : "text-sm text-gray-500 hover:text-blue-700 transition-colors no-underline"
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-semibold text-blue-700 border-b-2 border-blue-700 pb-0.5 no-underline"
                  : "text-sm text-gray-500 hover:text-blue-700 transition-colors no-underline"
              }
            >
              About
            </NavLink>
          </li>
        </ul>

        {/* Right Side Actions - Desktop Version */}
        {/* FIXED: Hidden on mobile screen layouts to save interface spacing */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "border border-blue-700 text-blue-700 text-sm px-5 py-1.5 rounded-full bg-transparent no-underline"
                : "border border-gray-400 text-gray-700 text-sm px-5 py-1.5 rounded-full bg-transparent hover:bg-gray-50 transition-colors no-underline"
            }
          >
            Contact Us
          </NavLink>
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Hamburger Trigger Menu Icon (Visible ONLY on Mobile & Tablet viewports) */}
        <div className="flex lg:hidden items-center gap-3">
          {/* User Profile avatar icon moved here for clear accessibility on mobile */}
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-700 focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              // Close Icon cross structure
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon stacked lines
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Drawer Overlay */}
      {/* FIXED: Smooth transition drawer container absolute injection */}
      <div
        className={`absolute top-[81px] left-0 w-full bg-white border-b border-gray-200 shadow-md lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col list-none m-0 px-6 py-4 gap-4">
          <li>
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-700 font-semibold no-underline block py-1" : "text-gray-600 no-underline block py-1"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-700 font-semibold no-underline block py-1" : "text-gray-600 no-underline block py-1"}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-700 font-semibold no-underline block py-1" : "text-gray-600 no-underline block py-1"}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-700 font-semibold no-underline block py-1" : "text-gray-600 no-underline block py-1"}>
              About
            </NavLink>
          </li>
          <li className="pt-2 border-t border-gray-100">
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "bg-blue-700 text-white text-center rounded-full block py-2 no-underline text-sm font-medium" : "border border-gray-400 text-gray-700 text-center rounded-full block py-2 no-underline text-sm font-medium"}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
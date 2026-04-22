import logo from "../assets/logo2.png";
import { useNavigate, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

//  import {Link} from "react-router-dom";

const NAV_LINKS = ["Home"];

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full h-[81px] flex items-center justify-between bg-white px-[77px] border-b border-gray-100">
      {/* Logo Section */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-14 h-19 flex items-center justify-center overflow-hidden pt-0">
          <img
            src={logo}
            alt="Kripa Library Logo"
            className="w-full h-full object-contain scale-150"
          />
        </div>


        <Link to="/" className="cursor-pointer">
          <span
            className="text-black font-semibold text-[18px] leading-tight whitespace-nowrap"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Kripa Library
          </span>
        </Link>
      </div>

      {/* Navigation Links */}

      <ul className="flex items-center gap-10 list-none">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-m font-semibold text-blue-700 border-b-2 border-blue-700 pb-0.5 no-underline"
                : "text-m text-gray-500 hover:text-blue-700 transition-colors no-underline"
            }
          >
            Home
          </NavLink>
        </li>
      </ul>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4 shrink-0">
        {/* import {NavLink} from "react-router-dom"; */}

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "border border-blue-700 text-blue-700 text-sm px-5 py-1.5 rounded-full bg-transparent underline"
              : "border border-gray-400 text-gray-700 text-sm px-5 py-1.5 rounded-full bg-transparent hover:bg-gray-50 transition-colors"
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
    </nav>
  );
}
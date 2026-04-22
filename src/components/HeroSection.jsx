import libraryBg from "../assets/library-bg.png";
// import Navbar from "./Navbar"; // Make sure the path to your new file is correct
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="w-full font-sans">
      {/* Render the separate Navbar component here */}
      {/* <Navbar /> */}

      {/* ── HERO ── */}
      <div className="relative w-full h-[670px] overflow-hidden">
        {/* BG photo */}
        <img
          src={libraryBg}
          alt="Kripa Library interior"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Text content */}
        <div className="absolute top-[200px] left-[120px] z-20 flex flex-col items-start w-[600px]">
          <h1 className="text-white font-bold text-left leading-[1.1] text-[80px] mb-3">
            Welcome to<br />KRIPA LIBRARY
          </h1>

          <p className="text-white/90 text-[22px] text-left font-normal mb-10">
            Your peaceful space to Read, Study & Succeed.
          </p>

          

          <Link to="/contact">
            <button className="flex items-center gap-2 bg-white text-black font-normal text-[20px] px-8 py-3.5 rounded-full border-0 hover:bg-gray-100 transition-all shadow-md cursor-pointer">
              Become a Member <span className="text-xl leading-none">›</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
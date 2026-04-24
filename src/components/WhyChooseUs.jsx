import { useState, useEffect } from "react";

// Icons
import communityIcon from "../assets/community.png";
import locationIcon from "../assets/location.png";
import peacefulIcon from "../assets/peaceful.png";
import securityIcon from "../assets/security.png";

// New Slide Images (Ensure these paths match your folder structure)
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

// Updated SLIDES with your new images
const SLIDES = [imgFour, imgThree, imgTwo];

export default function WhyChooseUs() {
  const [current, setCurrent] = useState(0);

  // ── AUTO SLIDE LOGIC ──
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 3500); // Changes image every 3.5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-[165px] px-10 lg:px-18 font-['Inter',_sans-serif]">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-start justify-between ">
        {/* ── LEFT: Content Area (No changes to design) ── */}
        <div className="w-[820px] flex flex-col ">
          <h2 className="text-[56px] font-extrabold text-black leading-[1.1] tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="w-[380px] text-[18px] text-gray-500 font-medium leading-relaxed mb-[41px]">
            The perfect space to turn your hard work into success.
          </p>

          <div className="grid grid-cols-2 gap-x-20 gap-y-12">
            {FEATURES.map((f, i) => (
              <div key={i} className="max-w-[340px] flex flex-col">
                <div className="w-[72px] h-[72px] bg-[#F8F9FA] border border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <img src={f.icon} alt="" className="w-14 h-14 object-contain opacity-90" />
                </div>
                <h5 className="text-[24px] font-bold text-black mb-3 tracking-tight">
                  {f.title}
                </h5>
                <p className="text-[15px] text-gray-500 leading-relaxed font-normal">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Main Image (Updated with your images + transition) ── */}
        <div className="w-[550px] h-[600px] rounded-[45px] overflow-hidden shadow-xl bg-gray-100">
          <img
            key={current} // Key helps React trigger the animation on image change
            src={SLIDES[current]}
            alt="Library Facilities"
            className="w-full h-full object-cover animate-slideIn"
          />
        </div>
      </div>

      {/* CSS for a smooth fade effect between slides */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0.6; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
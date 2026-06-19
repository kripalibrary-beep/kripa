import React, { useRef, useState } from "react";
import { Gift } from "lucide-react";

/* --- SVG Icons --- */
const Icons = {
  sun: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>,
  moon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>,
  lightning: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  star: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  infinity: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M8 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 0c2 0 3.5 1.5 4 2.5m8-2.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 0c-2 0-3.5 1.5-4 2.5m-4 2.5l4 3m-4-3l-4 3"/></svg>,
  crown: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><polygon points="2 4 5 17 12 20 19 17 22 4 16 8 12 2 8 8 2 4"/></svg>,
};

/* --- Standard Plan Card Component --- */
const PlanCard = ({ duration, unit, title, description, price, timeLabel, icon, colors, hasBorder }) => (
  <div className={`snap-start shrink-0 w-[285px] sm:w-[310px] relative bg-white rounded-[2rem] p-6 shadow-sm flex flex-col h-full min-h-[400px] ${hasBorder ? `border-2 ${colors.border}` : 'border border-gray-100'}`}>
    
    {/* Header Info */}
    <div className="flex justify-between items-start mb-6">
      <div className={`w-13 h-13 rounded-2xl flex items-center justify-center ${colors.bg} ${colors.text}`}>
        {Icons[icon]}
      </div>
      <div className="text-right">
        <p className="text-gray-400 text-[11px] font-semibold tracking-wider uppercase mb-0.5">Duration</p>
        <div className="flex items-baseline justify-end gap-0.5">
          <span className="text-3xl font-extrabold text-gray-900 leading-none">{duration}</span>
          {unit && <span className="text-gray-400 font-medium text-xs">{unit}</span>}
        </div>
        {timeLabel && <p className="text-gray-400 text-[10px] uppercase tracking-wider mt-1">{timeLabel}</p>}
      </div>
    </div>

    {/* Content */}
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 flex-grow">
      {description}
    </p>

    {/* Footer Pricing & CTA */}
    <div className="mt-auto">
      <p className="text-gray-400 text-[11px] mb-0.5">Original Price</p>
      <div className="mb-4">
        <span className={`text-lg font-bold ${colors.text}`}>{price}</span>
        {title === 'Single Day Pass' ? <span className="text-gray-400 text-xs"> / Day</span> : <span className="text-gray-400 text-xs"> / Month</span>}
      </div>
      
      <a 
        href="https://www.focusdesk.in/library/f6cd1770-e936-4457-b2ef-bf17bce9f730"
        className={`w-full py-3 rounded-xl text-sm font-semibold text-white transition-transform active:scale-95 flex items-center justify-center no-underline ${colors.btnBg}`}
      >
        Choose This Plan
      </a>
    </div>
  </div>
);

/* --- Main Layout Component --- */
export default function ExplorePlans() {
  const scrollContainerRef = useRef(null);
  const [showPlans, setShowPlans] = useState(false);

  const plans = [
    {
      duration: "∞",
      unit: "Cabin",
      title: "Premium Access",
      description: "Exclusive private cabin with an ergonomic chair, personal lighting and ultimate comfort for peak focus.",
      price: "Rs. 1400",
      icon: "crown",
      colors: { bg: "bg-yellow-50", text: "text-yellow-600", btnBg: "bg-[#e89c31]", border: "border-yellow-200" },
      hasBorder: false
    },
    {
      duration: "24",
      unit: "hrs",
      title: "24 Hours Access",
      description: "Round-the-clock access - your space is always ready whether you're an early bird or a night owl.",
      price: "Rs. 1200",
      icon: "infinity",
      colors: { bg: "bg-purple-50", text: "text-purple-500", btnBg: "bg-[#9b72f2]" },
    },
    {
      duration: "12",
      unit: "hrs",
      title: "Twelve Hours",
      description: "A full-day dedicated seat — perfect for deep focus, marathon sessions and thorough revision.",
      price: "Rs. 1000",
      icon: "clock",
      colors: { bg: "bg-orange-50", text: "text-orange-500", btnBg: "bg-[#f58a42]" },
    },
    {
      duration: "10",
      unit: "hrs",
      title: "Ten Hours",
      description: "For ambitious students chasing big goals — an extended stretch of uninterrupted, quiet study time.",
      price: "Rs. 900",
      icon: "clock",
      colors: { bg: "bg-emerald-50", text: "text-emerald-500", btnBg: "bg-[#38c49e]" },
    },
    {
      duration: "08",
      unit: "hrs",
      title: "Eight Hours",
      description: "Our most loved plan — the standard for serious exam prep with ample time to cover your full syllabus.",
      price: "Rs. 800",
      icon: "star",
      colors: { bg: "bg-red-50", text: "text-red-500", btnBg: "bg-[#ff2a2a]", border: "border-red-200" },
      hasBorder: true 
    },
    {
      duration: "06",
      unit: "hrs",
      title: "Six Hours",
      description: "A focused half-day session ideal for quick, intense study bursts to power through your material.",
      price: "Rs. 600",
      icon: "lightning",
      colors: { bg: "bg-cyan-50", text: "text-cyan-500", btnBg: "bg-[#3bcedb]" },
    },
    {
      duration: "Night",
      unit: "",
      timeLabel: "09 PM - 06 AM",
      title: "Night Plan",
      description: "Built for night owls — deep focus after dark when the world is quiet and distractions are minimal.",
      price: "Rs. 800",
      icon: "moon",
      colors: { bg: "bg-indigo-50", text: "text-indigo-500", btnBg: "bg-[#7b7cf1]" },
    },
    {
      duration: "01",
      unit: "day",
      title: "Single Day Pass",
      description: "Freedom to study whenever you want in a quiet, relaxed spot. Perfect for a one-time visit.",
      price: "Rs. 50",
      icon: "sun",
      colors: { bg: "bg-yellow-50", text: "text-yellow-500", btnBg: "bg-[#f5a623]" },
    }
  ];

  return (
    <section className="w-full bg-[#f8f9fc] py-12 md:py-16 px-4 sm:px-6 md:px-12 font-sans overflow-hidden min-h-[500px] flex flex-col justify-center">
      <style>{`
        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-8deg) scale(1.05); }
          50% { transform: rotate(8deg) scale(1.05); }
          75% { transform: rotate(-8deg) scale(1.05); }
        }
        .animate-shake {
          animation: shake 0.6s ease-in-out infinite;
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.95) translateY(30px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-pop-in {
          animation: popIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      
      <div className="max-w-5xl mx-auto w-full">
        {!showPlans ? (
          <div 
            className="flex flex-col items-center justify-center py-20 cursor-pointer group" 
            onClick={() => setShowPlans(true)}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <Gift className="w-32 h-32 text-blue-600 animate-shake relative z-10 drop-shadow-2xl transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-10 mb-3 tracking-tight transition-transform duration-300 group-hover:translate-y-1">
              Unwrap Your Success
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium animate-pulse">
              Click the gift box to reveal our exclusive study plans!
            </p>
          </div>
        ) : (
          <div className="animate-pop-in">
            {/* Header Block */}
            <div className="mb-8 text-center sm:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
                Explore our Plans
              </h2>
              <p className="text-sm text-gray-500">
                Flexible choices designed to fit your workflow and budget.
              </p>
            </div>

        {/* ── TOP LAYER: Scrollable Standard Plans ── */}
        <div className="relative mb-12">
          <div 
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto pb-6 pt-2 px-1 -mx-1 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            
            {plans.map((plan, index) => (
              <PlanCard key={index} {...plan} />
            ))}
          </div>
        </div>

        {/* ── BOTTOM LAYER: Dedicated Stacked Offer Card ── */}
        <div className="max-w-md mx-auto sm:max-w-none">
          <div className="relative bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2rem] p-6 md:p-8 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden text-white">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-white opacity-5 rounded-full -ml-10 -mb-10 blur-lg"></div>

            {/* Left Content Area */}
            <div className="relative z-10 flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
                <span className="bg-red-500 text-white text-[11px] font-extrabold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  SAVE 20%
                </span>
                <span className="text-blue-100 text-xs font-medium">Duration: 04 or 06 months</span>
              </div>

              <h3 className="text-xl md:text-2xl font-extrabold mb-3 leading-tight">
                04 or 06 Month Subscription Plan
              </h3>
              
              <p className="text-blue-100 text-xs md:text-sm leading-relaxed max-w-xl">
                Commit to your goals and save big! Lock in a <span className="text-yellow-300 font-bold">20% discount</span> across all monthly plans when you subscribe for 4 or 6 months. Consistency is the key to success.
              </p>
              
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-4 text-green-300 text-xs font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                <span>Applies on all monthly plans</span>
              </div>
            </div>

            {/* Right Action/Pricing Area */}
            <div className="relative z-10 shrink-0 flex flex-col items-center justify-center w-full sm:w-auto sm:border-l sm:border-white/10 sm:pl-8 pt-4 sm:pt-0">
              <p className="text-blue-200 text-[10px] uppercase tracking-widest font-bold mb-0.5">Save Up To</p>
              <p className="text-5xl font-black mb-4 tracking-tight">20%</p>
              
              <a 
                href="https://www.focusdesk.in/library/f6cd1770-e936-4457-b2ef-bf17bce9f730"
                className="w-full sm:px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-md hover:bg-blue-50 transition-all active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap text-sm no-underline"
              >
                <span>Get Started</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
</section>
  );
}
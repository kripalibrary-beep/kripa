import React from "react";
import { BookOpen, MapPin, ShieldCheck, Zap } from "lucide-react";

export default function AboutUsSEOContent() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50/50 border-t border-gray-100 py-20 md:py-32 px-4 sm:px-6 md:px-12 font-sans overflow-x-hidden relative">
      {/* Decorative background blur */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-[1298px] mx-auto relative z-10">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-24 max-w-[900px] mx-auto">
          <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-[0.2em] bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 px-5 py-2 rounded-full shadow-sm">
            Premium Study Space
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 leading-tight tracking-tight">
            About Kripa Library &amp; Reading Room
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2"></div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mt-6 max-w-3xl">
            Discover East Delhi's leading self-study center designed specifically to help students and serious exam aspirants unlock their highest productivity.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Rich Text Content */}
          <div className="flex flex-col gap-6 text-slate-700 text-base sm:text-[17px] leading-[1.8] text-justify sm:text-left relative">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-center sm:text-left mb-2">
              The Best Reading Room in Mandawali, East Delhi
            </h3>
            
            <p>
              Preparing for competitive exams requires hours of deep, uninterrupted focus. For many students in East Delhi, finding a quiet corner at home is a major challenge due to household noise, space constraints, and constant interruptions. 
              <strong className="text-blue-700 font-bold"> Kripa Library</strong> was founded to solve this exact problem. Located conveniently in Mandawali Pandit Mohalla, we offer a modern, highly-disciplined, and completely silent self-study environment. Our library serves as a dedicated academic sanctuary for students from Mandawali, Laxmi Nagar, Shakarpur, I.P. Extension, and surrounding regions.
            </p>

            <p>
              Whether you are preparing for the <strong className="text-slate-900 font-bold">UPSC Civil Services, SSC CGL, Banking, Chartered Accountancy (CA), CS, IIT JEE, NEET, or state level judicial exams</strong>, our facilities are custom-tailored to suit your schedule. With options for flexible shifts and a full 24/7 night study slot, we ensure that you have access to a clean and comfortable space exactly when your mind is most active. 
            </p>

            <div className="relative p-8 mt-4 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 rounded-3xl border border-blue-100/50 shadow-inner group">
              <div className="absolute -left-3 -top-3 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-serif text-3xl shadow-lg shadow-blue-500/30 group-hover:-rotate-12 transition-transform">"</div>
              <p className="italic text-slate-800 font-medium leading-relaxed relative z-10 text-lg">
                At Kripa Library, we believe that a library is more than just a desk and a chair; it is an incubator for success. Surrounding yourself with a community of like-minded, hard-working aspirants creates a natural ecosystem of peer motivation and consistency. This daily environment of focused study is what transforms ambitious aspirations into top ranks and exam selections.
              </p>
            </div>
          </div>

          {/* Right Column: Key Pillars (Structured Info) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {/* Pillar 1 */}
            <div className="bg-white border border-slate-100/80 rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm relative z-10">
                <BookOpen className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 text-xl mb-3 relative z-10 group-hover:text-blue-600 transition-colors">Focused Study Cabins</h4>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                Enjoy spacious, fully-partitioned private AC study cabins equipped with individual LED lights, dedicated power sockets, and comfortable ergonomic seating.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-slate-100/80 rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden mt-0 sm:mt-12">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-transparent rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm relative z-10">
                <Zap className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 text-xl mb-3 relative z-10 group-hover:text-emerald-600 transition-colors">High-Speed Connectivity</h4>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                Stay connected to online lectures, test series, and study materials with our redundant, ultra-fast dual-band fiber Wi-Fi network that never drops.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-slate-100/80 rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(245,158,11,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-50 to-transparent rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm relative z-10">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 text-xl mb-3 relative z-10 group-hover:text-amber-600 transition-colors">Safe &amp; Secure 24/7</h4>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                With constant CCTV surveillance and secure storage lockers for your laptops and study materials, we provide a safe study environment for everyone day and night.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white border border-slate-100/80 rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(225,29,72,0.08)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden mt-0 sm:mt-12">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-50 to-transparent rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm relative z-10">
                <MapPin className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-slate-900 text-xl mb-3 relative z-10 group-hover:text-rose-600 transition-colors">Convenient Location</h4>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">
                Situated at Ground Floor, 168 Mandawali Pandit Mohalla, directly opposite Durga Mandir. Easily accessible by local transport and metro routes.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}

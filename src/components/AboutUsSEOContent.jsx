import React from "react";
import { BookOpen, MapPin, ShieldCheck, Zap } from "lucide-react";

export default function AboutUsSEOContent() {
  return (
    <section className="w-full bg-[#fcfdfe] border-t border-gray-100 py-16 md:py-24 px-4 sm:px-6 md:px-12 font-sans overflow-x-hidden">
      <div className="max-w-[1298px] mx-auto">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-16 max-w-[800px] mx-auto">
          <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">
            Premium Study Space
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-slate-900 leading-tight">
            About Kripa Library &amp; Reading Room
          </h2>
          <div className="w-20 h-[3px] bg-blue-500 rounded-full mt-2"></div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mt-4">
            Discover East Delhi's leading self-study center designed specifically to help students and serious exam aspirants unlock their highest productivity.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Rich Text Content */}
          <div className="flex flex-col gap-6 text-slate-700 text-sm sm:text-[15px] leading-relaxed text-justify sm:text-left">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight text-center sm:text-left">
              The Best Reading Room in Mandawali, East Delhi
            </h3>
            
            <p>
              Preparing for competitive exams requires hours of deep, uninterrupted focus. For many students in East Delhi, finding a quiet corner at home is a major challenge due to household noise, space constraints, and constant interruptions. 
              <strong> Kripa Library</strong> was founded to solve this exact problem. Located conveniently in Mandawali Pandit Mohalla, we offer a modern, highly-disciplined, and completely silent self-study environment. Our library serves as a dedicated academic sanctuary for students from Mandawali, Laxmi Nagar, Shakarpur, I.P. Extension, and surrounding regions.
            </p>

            <p>
              Whether you are preparing for the <strong>UPSC Civil Services, SSC CGL, Banking, Chartered Accountancy (CA), CS, IIT JEE, NEET, or state level judicial exams</strong>, our facilities are custom-tailored to suit your schedule. With options for flexible shifts and a full 24/7 night study slot, we ensure that you have access to a clean and comfortable space exactly when your mind is most active. 
            </p>

            <p>
              At Kripa Library, we believe that a library is more than just a desk and a chair; it is an incubator for success. Surrounding yourself with a community of like-minded, hard-working aspirants creates a natural ecosystem of peer motivation and consistency. This daily environment of focused study is what transforms ambitious aspirations into top ranks and exam selections.
            </p>
          </div>

          {/* Right Column: Key Pillars (Structured Info) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-950 text-lg mb-2">Focused Study Cabins</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Enjoy spacious, fully-partitioned private AC study cabins equipped with individual LED lights, dedicated power sockets, and comfortable ergonomic seating.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-950 text-lg mb-2">High-Speed Connectivity</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Stay connected to online lectures, test series, and study materials with our redundant, ultra-fast dual-band fiber Wi-Fi network that never drops.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-950 text-lg mb-2">Safe &amp; Secure 24/7</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                With constant CCTV surveillance and secure storage lockers for your laptops and study materials, we provide a safe study environment for everyone day and night.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-950 text-lg mb-2">Convenient Location</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Situated at Ground Floor, 168 Mandawali Pandit Mohalla, directly opposite Durga Mandir. Easily accessible by local transport and metro routes.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed FAQ section embedded to bolster search visibility */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-8 text-center sm:text-left">
            Frequently Asked Questions (FAQs)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 className="font-bold text-slate-950 text-base mb-2">Q: What are the library timings and shifts?</h5>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A: Kripa Library is open 24 hours a day, 7 days a week. We offer multiple shift choices, including morning, afternoon, evening, and a dedicated 24-hour full-day plan to align with your personal study habits.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-950 text-base mb-2">Q: Are private cabins and power sockets available at each desk?</h5>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A: Yes! Every student seat is configured as a private wooden cabin partition, featuring an independent switch, LED light source, and a plug point for laptops, tablets, or mobile charging.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-950 text-base mb-2">Q: Is there a safe place to store my books?</h5>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A: Absolutely. Secure key-lockable lockers are available for rent to keep your study materials, textbooks, and notes safe, so you do not have to carry heavy bags back and forth.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-950 text-base mb-2">Q: Is the library safe for female students during night hours?</h5>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A: Yes, safety is our highest priority. The premises are fully monitored by high-definition CCTV cameras, are well-lit, and are located in a highly active and secure neighborhood in Mandawali.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

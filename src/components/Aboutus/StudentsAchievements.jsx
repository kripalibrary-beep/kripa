import React from 'react';
import deepaImg from '../../assets/Student-achivement/WhatsApp Image 2026-06-10 at 8.49.52 PM.jpeg';

export default function StudentsAchievements() {
  return (
    <section className="w-full bg-white py-10 md:py-16 px-4 font-sans relative">
      <div className="w-full max-w-[1000px] mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-16 mx-auto max-w-[600px]">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm">Student Success</span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-slate-900 leading-tight m-0">
            Proud Achievement
          </h2>
        </div>

        {/* Featured Card */}
        <div className="flex flex-col md:flex-row bg-white rounded-[32px] sm:rounded-[40px] shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-shadow duration-500 group">
          
          {/* Left: Image */}
          <div className="w-full md:w-2/5 h-[350px] md:h-auto relative overflow-hidden bg-slate-100 shrink-0">
            <img 
              src={deepaImg} 
              alt="Deepa" 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Optional overlay gradient for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-30"></div>
            
            {/* Mobile Badge (Visible on mobile, hides on desktop if needed, or keep for both) */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-white/50">
              <p className="text-blue-700 font-bold text-lg leading-none mb-1">AIR 118</p>
              <p className="text-slate-600 text-[10px] font-bold uppercase tracking-wider leading-none">NORCET 10</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-3/5 p-8 sm:p-12 md:p-16 flex flex-col justify-center relative bg-white">
            {/* Quote Icon Background */}
            <svg className="absolute top-6 left-6 sm:top-10 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 text-blue-50 opacity-60 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>

            <div className="relative z-10">
              <div className="flex gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-700 text-lg sm:text-[20px] md:text-[22px] leading-relaxed font-medium mb-10 italic">
                "Hello everyone I'm Deepa and I've cleared norcet 10 with AIR 118.... during my preparation journey i visited the library and I found a good space and environment for my preparation , I'm thankful."
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">Deepa</h3>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">Cleared NORCET 10</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
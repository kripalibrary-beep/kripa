import React from 'react';
import deepaImg from '../../assets/Student-achivement/WhatsApp Image 2026-06-10 at 8.49.52 PM.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const achievements = [
  {
    id: 1,
    name: 'Deepa',
    achievement: 'Cleared NORCET 10',
    badgeTitle: 'AIR 118',
    badgeSubtitle: 'NORCET 10',
    quote: "Hello everyone I'm Deepa and I've cleared norcet 10 with AIR 118.... during my preparation journey i visited the library and I found a good space and environment for my preparation , I'm thankful.",
    image: deepaImg
  },
  {
    id: 2,
    name: 'Successful Student',
    achievement: 'Selected as MTS in DDA',
    badgeTitle: 'MTS',
    badgeSubtitle: 'DDA',
    quote: "My journey at this library has been truly memorable. The peaceful environment helped me stay focused, and after months of preparation, I am happy to share I've been selected as MTS in DDA. This wouldn't have been possible without your support!",
    image: 'https://ik.imagekit.io/manish07/assets/Student-achivement/WhatsApp_Image_2026-06-15_at_6.54.46_PM_O4nPHVp0u.jpeg'
  }
];

export default function StudentsAchievements() {
  return (
    <section className="w-full bg-white pt-0 pb-10 md:pt-0 md:pb-16 px-4 font-sans relative -mt-4 md:-mt-8">
      <div className="w-full max-w-[1000px] mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center gap-3 mb-8 md:mb-10 mx-auto max-w-[600px]">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs sm:text-sm">Student Success</span>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-slate-900 leading-tight m-0">
            Proud Achievements
          </h2>
        </div>

        <div className="relative pb-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full !pb-12 h-full"
          >
            {achievements.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="flex flex-col md:flex-row bg-white rounded-[32px] sm:rounded-[40px] shadow-xl overflow-hidden border border-slate-100 transition-shadow duration-500 group mx-2 my-4 h-full">
                  
                  {/* Left: Image */}
                  <div className="w-full md:w-2/5 h-[300px] md:h-auto relative overflow-hidden bg-slate-100 shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Optional overlay gradient for blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 md:opacity-0 transition-opacity duration-300 md:group-hover:opacity-30"></div>
                    
                    {/* Mobile Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-white/50">
                      <p className="text-blue-700 font-bold text-lg leading-none mb-1">{item.badgeTitle}</p>
                      <p className="text-slate-600 text-[10px] font-bold uppercase tracking-wider leading-none">{item.badgeSubtitle}</p>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="w-full md:w-3/5 p-6 sm:p-10 md:p-10 flex flex-col justify-center relative bg-white">
                    {/* Quote Icon Background */}
                    <svg className="absolute top-6 left-6 sm:top-8 sm:left-8 w-12 sm:w-20 h-12 sm:h-20 text-blue-50 opacity-60 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>

                    <div className="relative z-10">
                      <div className="flex gap-1.5 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>

                      <div className="text-slate-700 text-base sm:text-lg md:text-[20px] leading-relaxed font-medium mb-6 italic whitespace-pre-wrap">
                        "{item.quote}"
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 pt-5 mt-auto">
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-1">{item.name}</h3>
                          <p className="text-blue-600 font-semibold text-xs sm:text-sm md:text-base">{item.achievement}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Global CSS for Swiper customized bullets */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #2563eb;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #2563eb;
          background: rgba(255,255,255,0.8);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 14px;
          font-weight: bold;
        }
      `}</style>
    </section>
  );
}
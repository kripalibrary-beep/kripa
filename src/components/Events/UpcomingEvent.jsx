import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const upcomingEventsData = [
  {
    id: 'ind-day',
    title: 'Independence Day Celebration',
    date: 'Coming Soon',
    time: 'Stay Tuned',
    desc: 'Join us for a meaningful and inspiring Independence Day Celebration. Engage in flag hoisting, quizzes, speeches, and poetry recitation.',
    image: 'https://ik.imagekit.io/manish07/assets/upcoming-event/WhatsApp_Image_2026-06-11_at_6.57.09_PM.jpeg',
    gradient: 'from-[#1E3A8A] via-[#3654FF] to-[#6B8DFF]',
    tag: 'National Event',
    fullDetails: (
      <div className="space-y-4 text-gray-700">
        <p className="text-lg font-semibold text-gray-900">
          🇮🇳 Coming Soon: Independence Day Celebration at Kripa Library
        </p>
        <p>
          Kripa Library is pleased to announce a special <strong>Independence Day Celebration</strong>, dedicated to honoring the spirit of freedom, patriotism, and national pride. Students are invited to participate in a variety of engaging activities that celebrate India's rich history and inspire a sense of responsibility towards the nation.
        </p>
        <div>
          <h4 className="font-bold text-lg mb-2 text-gray-900">🎯 Activities Planned</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>National Flag Hoisting Ceremony</li>
            <li>Independence Day Quiz Competition</li>
            <li>Patriotic Speech Presentations</li>
            <li>Poetry Recitation on Freedom and Nation Building</li>
            <li>Presentations on the Life Journey of Great Patriotic Figures and Freedom Fighters</li>
            <li>Sharing of Inspirational Stories from India's Freedom Movement</li>
            <li>Interactive Discussions on the Role of Youth in Building a Strong Nation</li>
          </ul>
        </div>
        <p>
          The event aims to encourage students to learn about the sacrifices made by our freedom fighters, understand the values of unity and democracy, and develop a deeper appreciation for the nation's heritage.
        </p>
      </div>
    )
  },
  {
    id: 'book-fair',
    title: 'Community Book Fair & Exchange',
    date: 'Coming Soon',
    time: 'Stay Tuned',
    desc: 'Explore academic resources, donate books, and share knowledge. Whether you have books to donate or are looking for books that can support your learning journey, this event is for you.',
    image: 'https://ik.imagekit.io/manish07/assets/upcoming-event/WhatsApp_Image_2026-06-11_at_6.53.01_PM.jpeg',
    gradient: 'from-[#064E3B] via-[#059669] to-[#34D399]',
    tag: 'Academic Drive',
    fullDetails: (
      <div className="space-y-4 text-gray-700">
        <p className="text-lg font-semibold text-gray-900">
          📚 Coming Soon: Community Book Fair & Book Exchange Drive
        </p>
        <p>
          Kripa Library is thrilled to host our <strong>Community Book Fair & Exchange Drive</strong>! 
          This initiative is designed to ensure that knowledge remains accessible to all. We invite readers, students, and educators to come together and participate in a meaningful exchange of educational and recreational resources.
        </p>
        <div>
          <h4 className="font-bold text-lg mb-2 text-gray-900">🎯 What to Expect</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Donate your old, gently used books to help peers in need.</li>
            <li>Find textbooks, reference materials, and novels at zero cost.</li>
            <li>Meet fellow book lovers and engage in literary discussions.</li>
            <li>Special academic guidance sessions for students.</li>
          </ul>
        </div>
        <p>
          Empowering students through learning and community collaboration is our core mission. Bring a book, take a book, and let's spread the joy of reading together!
        </p>
      </div>
    )
  },
  {
    id: 'ca-meetup',
    title: 'CA Aspirants & Professionals Meet-Up',
    date: 'Coming Soon',
    time: 'Stay Tuned',
    desc: 'Connect with CA professionals, discuss exam strategies, articleship, and career opportunities.',
    image: 'https://ik.imagekit.io/manish07/assets/upcoming-event/WhatsApp_Image_2026-06-11_at_6.47.18_PM.jpeg',
    gradient: 'from-[#7C2D12] via-[#D97706] to-[#FBBF24]',
    tag: 'Community Meet-Up',
    fullDetails: (
      <div className="space-y-4 text-gray-700">
        <p className="text-lg font-semibold text-gray-900">
          💼 Coming Soon: CA Aspirants & Professionals Meet-Up
        </p>
        <p>
          Are you preparing for your CA examinations or currently working as a professional? 
          Kripa Library presents an exclusive <strong>CA Aspirants & Professionals Meet-Up</strong>. This session is carefully crafted to bridge the gap between hard-working students and experienced Chartered Accountants.
        </p>
        <div>
          <h4 className="font-bold text-lg mb-2 text-gray-900">🎯 Key Highlights</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Expert strategies for tackling Foundation, Inter, and Final exams.</li>
            <li>Insights into securing top-tier Articleship opportunities.</li>
            <li>Networking with like-minded peers and successful alumni.</li>
            <li>Q&A session addressing common pitfalls and study routines.</li>
          </ul>
        </div>
        <p>
          Join us to build a strong community of focused learners. Whether you are just beginning your CA journey or preparing for advanced levels, this meet-up will help you learn from real experiences and build invaluable connections.
        </p>
      </div>
    )
  }
];

export default function UpcomingEvent({ onRegisterClick }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="w-full bg-white px-4 py-12 sm:py-16">
      <div className="max-w-[1298px] mx-auto">
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#090D1A] tracking-tight leading-none mb-3">
            Featured Upcoming Events
          </h2>
          <p className="text-gray-500 font-medium text-sm sm:text-base">
            Mark your calendars and join our vibrant community for these exciting celebrations.
          </p>
        </div>

        <div className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl border border-gray-100 group">
          
          <Swiper
            modules={[Autoplay, Pagination, EffectFade, Navigation]}
            effect="fade"
            speed={800}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            className="w-full h-auto min-h-[360px] sm:min-h-[420px]"
          >
            {upcomingEventsData.map((ev) => (
              <SwiperSlide key={ev.id}>
                <div className={`relative w-full h-full min-h-[360px] sm:min-h-[420px] bg-gradient-to-r ${ev.gradient} flex flex-col md:flex-row items-center justify-between p-8 sm:p-10 lg:p-14 gap-8 md:gap-12 overflow-hidden`}>
                  
                  {/* Abstract Background Shapes */}
                  <div className="absolute top-[-50px] left-[-50px] w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
                  <div className="absolute bottom-[-100px] right-[10%] w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"></div>

                  {/* Left Text Content */}
                  <div className="relative z-10 flex-1 flex flex-col gap-4 max-w-[650px]">
                    <span className="inline-block px-3 py-1 bg-white/20 text-white backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase border border-white/30 self-start">
                      {ev.tag}
                    </span>
                    
                    <h3 className="text-3xl sm:text-4xl lg:text-[46px] font-black leading-[1.1] tracking-tight text-white drop-shadow-sm">
                      {ev.title}
                    </h3>
                    
                    <p className="text-white/90 text-sm sm:text-[15px] font-medium leading-relaxed max-w-[580px] drop-shadow-sm">
                      {ev.desc}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10">
                        <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <span className="text-white font-bold text-sm">{ev.date}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/10">
                        <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-white font-bold text-sm">{ev.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Image/CTA Panel */}
                  <div className="relative z-10 shrink-0 w-full md:w-[360px] flex flex-col gap-4">
                    <div 
                      className="w-full h-[220px] sm:h-[260px] rounded-[20px] overflow-hidden shadow-2xl border-4 border-white/20 bg-white cursor-pointer group/img relative p-2"
                      onClick={() => setSelectedEvent(ev)}
                    >
                      <img 
                        src={ev.image} 
                        alt={ev.title}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-lg backdrop-blur-md">View Details</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => onRegisterClick({ eventName: ev.title, date: ev.date, time: ev.time })}
                      className="w-full py-3.5 bg-white text-gray-900 text-sm sm:text-base font-bold rounded-xl shadow-lg hover:bg-gray-50 hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 flex items-center justify-center gap-2 border border-white"
                    >
                      <span>Register Interest</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Arrows */}
            <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-black cursor-pointer shadow-lg border border-white/30 hidden md:flex">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-black cursor-pointer shadow-lg border border-white/30 hidden md:flex">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </Swiper>
          
        </div>
      </div>

      {/* Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-64 w-full bg-white p-4">
              <img 
                src={selectedEvent.image} 
                alt={selectedEvent.title} 
                className="w-full h-full object-contain"
              />
              <button 
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-black/10 hover:bg-black/20 text-black rounded-full p-2 backdrop-blur-sm transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 sm:p-8 border-t border-gray-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {selectedEvent.title}
              </h3>
              {selectedEvent.fullDetails}
              
              <div className="mt-8 flex justify-end gap-4">
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="px-6 py-2.5 rounded-xl font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    onRegisterClick({ eventName: selectedEvent.title, date: selectedEvent.date, time: selectedEvent.time });
                    setSelectedEvent(null);
                  }}
                  className="px-6 py-2.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors flex items-center gap-2"
                >
                  Register Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Click Outside to Close */}
          <div 
            className="absolute inset-0 z-[-1]" 
            onClick={() => setSelectedEvent(null)}
          ></div>
        </div>
      )}

    </section>
  );
}

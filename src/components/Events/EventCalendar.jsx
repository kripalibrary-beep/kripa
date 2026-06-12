import React, { useState, useRef } from 'react';

// Structured monthly events configuration for the full year of 2026 (9 events total)
const monthsConfig2026 = [
  {
    name: "January",
    days: 31,
    startDay: 4, // 0 = Sun, 1 = Mon, ..., 4 = Thu
    events: [
      { day: 1, title: "New Year Celebration" },
      { day: 26, title: "Republic Day - 2026" }
    ]
  },
  {
    name: "February",
    days: 28,
    startDay: 0, // Sun
    events: []
  },
  {
    name: "March",
    days: 31,
    startDay: 0, // Sun
    events: [
      { day: 15, title: "Annual Book Fair" }
    ]
  },
  {
    name: "April",
    days: 30,
    startDay: 3, // Wed
    events: [
      { day: 23, title: "World Book Day" }
    ]
  },
  {
    name: "May",
    days: 31,
    startDay: 5, // Fri
    events: []
  },
  {
    name: "June",
    days: 30,
    startDay: 1, // Mon
    events: [
      { day: 5, title: "World Environment Day" }
    ]
  },
  {
    name: "July",
    days: 31,
    startDay: 3, // Wed
    events: []
  },
  {
    name: "August",
    days: 31,
    startDay: 6, // Sat
    events: [
      { day: 15, title: "Independence Day Celebration" }
    ]
  },
  {
    name: "September",
    days: 30,
    startDay: 2, // Tue
    events: []
  },
  {
    name: "October",
    days: 31,
    startDay: 4, // Thu
    events: []
  },
  {
    name: "November",
    days: 30,
    startDay: 0, // Sun
    events: []
  },
  {
    name: "December",
    days: 31,
    startDay: 2, // Tue
    events: []
  }
];

// Weekday letters matching layout
const weekdays = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

// High-fidelity chronological events list complete with specific images and layout tags
const chronologicalEventsList = [
  { 
    id: 1, 
    title: "New Year Celebration", 
    date: "1 January 2026", 
    time: "10:00 AM - 12:30 PM", 
    location: "Main Library Room", 
    desc: "Start the year with academic resolutions, guidance panels, and morning sweets.", 
    status: "Completed",
    category: "Celebration",
    badgeColor: "#D97706", // Amber
    img: "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_97.png"
  },
  { 
    id: 2, 
    title: "Republic Day - 2026", 
    date: "26 January 2026", 
    time: "09:00 AM - 11:30 AM", 
    location: "Rooftop Garden", 
    desc: "Flag hoisting ceremony, patriotic poetry recital, and student gathering.", 
    status: "Completed",
    category: "National",
    badgeColor: "#059669", // Green
    img: "https://ik.imagekit.io/manish07/assets/Events/Milestones/independence_day_redfort.jpg"
  },
  { 
    id: 3, 
    title: "Annual Book Fair", 
    date: "15 March 2026", 
    time: "10:00 AM - 06:00 PM", 
    location: "Courtyard Exhibition", 
    desc: "Publishers show, books donation drive, and custom study materials desks.", 
    status: "Completed",
    category: "Academic",
    badgeColor: "#2563EB", // Blue
    img: "https://ik.imagekit.io/manish07/assets/Events/Milestones/students_studying.jpg"
  },
  { 
    id: 4, 
    title: "World Book Day", 
    date: "23 April 2026", 
    time: "11:00 AM - 02:00 PM", 
    location: "Literature Corner", 
    desc: "Open book discussion, reviews swapping, and library rewards ceremony.", 
    status: "Completed",
    category: "Academic",
    badgeColor: "#2563EB", // Blue
    img: "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_98.png"
  },
  { 
    id: 5, 
    title: "World Environment Day", 
    date: "5 June 2026", 
    time: "08:00 AM - 10:30 AM", 
    location: "Lawn & Neighborhood", 
    desc: "Join us in our annual tree planting drive. We are planting 50 green saplings to support campus greenery.", 
    status: "Completed",
    category: "Social",
    badgeColor: "#0D9488", // Teal
    img: "https://ik.imagekit.io/manish07/assets/Events/Gallery/Rectangle_99.png"
  },
  { 
    id: 6, 
    title: "Independence Day Celebration", 
    date: "15 August 2026", 
    time: "09:00 AM - 12:00 PM", 
    location: "Kripa Library", 
    desc: "Join us for a meaningful and inspiring Independence Day Celebration. Engage in flag hoisting, quizzes, speeches, and poetry recitation. Let us come together to celebrate the spirit of independence and remember the heroes who shaped our nation.", 
    status: "Upcoming",
    category: "National",
    badgeColor: "#059669", // Green
    img: "https://ik.imagekit.io/manish07/assets/upcoming-event/WhatsApp_Image_2026-06-11_at_6.57.09_PM.jpeg",
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
    id: 7, 
    title: "Community Book Fair & Exchange", 
    date: "Coming Soon", 
    time: "Stay Tuned", 
    location: "Kripa Library", 
    desc: "Explore academic resources, donate books, and share knowledge. Whether you have books to donate or are looking for books that can support your learning journey, this event is for you. Empowering students through learning and community collaboration.", 
    status: "Upcoming",
    category: "Academic",
    badgeColor: "#059669", // Green
    img: "https://ik.imagekit.io/manish07/assets/upcoming-event/WhatsApp_Image_2026-06-11_at_6.53.01_PM.jpeg",
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
    id: 8, 
    title: "CA Aspirants & Professionals Meet-Up", 
    date: "Coming Soon", 
    time: "Stay Tuned", 
    location: "Kripa Library", 
    desc: "Connect with CA professionals, discuss exam strategies, articleship, and career opportunities. Whether you are just beginning your CA journey or preparing for advanced levels, this meet-up will help you learn from real experiences.", 
    status: "Upcoming",
    category: "Community",
    badgeColor: "#D97706", // Amber
    img: "https://ik.imagekit.io/manish07/assets/upcoming-event/WhatsApp_Image_2026-06-11_at_6.47.18_PM.jpeg",
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

export default function EventCalendar({ onRegisterClick }) {
  const [activeTab, setActiveTab] = useState("list"); // "calendar" | "list"
  const [selectedEvent, setSelectedEvent] = useState(null);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -314, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 314, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#FAFAFA] px-6 sm:px-8 lg:px-12 py-12 sm:py-16 border-t border-gray-100">
      <div className="max-w-[1298px] mx-auto">

        {/* ── Tabs Header Control Bar ── */}
        <div className="hidden gap-4 mb-8 justify-center sm:justify-start">
          <button
            onClick={() => setActiveTab("calendar")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "calendar"
                ? "bg-[#E1F0FF] text-[#1E3A8A] shadow-sm border border-blue-100"
                : "text-gray-500 hover:text-gray-800 bg-white hover:bg-gray-50 border border-gray-200"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <span>Year Calendar</span>
          </button>
          
          <button
            onClick={() => setActiveTab("list")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "list"
                ? "bg-[#E1F0FF] text-[#1E3A8A] shadow-sm border border-blue-100"
                : "text-gray-500 hover:text-gray-800 bg-white hover:bg-gray-50 border border-gray-200"
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-3.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span>Event List</span>
          </button>
        </div>


        {/* ── YEAR CALENDAR TAB PANEL ── */}
        {activeTab === "calendar" && (
          <div className="flex flex-col w-full">
            
            {/* Header info with inline scroll buttons on right side */}
            <div className="flex flex-row justify-between items-end w-full mb-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] sm:text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">
                  Year Calendar
                </span>
                <h3 className="text-[#090D1A] font-extrabold text-3xl sm:text-4xl lg:text-[40px] tracking-tight leading-none">
                  2026
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-gray-400">
                  6 events scheduled this year
                </span>
              </div>

              {/* Scroll controls arrows matching Figma layout */}
              <div className="flex gap-2">
                <button 
                  onClick={scrollLeft}
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-black hover:border-gray-300 hover:shadow active:scale-95 transition-all cursor-pointer"
                  aria-label="Scroll left calendar cards"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={scrollRight}
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-black hover:border-gray-300 hover:shadow active:scale-95 transition-all cursor-pointer"
                  aria-label="Scroll right calendar cards"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Horizontal Month cards container with scroll snapping */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-[15px] overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth scrollbar-hide -mx-1 px-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {monthsConfig2026.map((monthData, monthIdx) => {
                const totalEvents = monthData.events.length;
                const offsetDays = Array.from({ length: monthData.startDay });
                const monthDays = Array.from({ length: monthData.days }, (_, i) => i + 1);

                return (
                  <div 
                    key={monthData.name}
                    className="w-[299px] h-[414px] shrink-0 bg-white border border-gray-150 rounded-[16px] p-5 flex flex-col justify-between select-none snap-start shadow-sm hover:shadow-md transition-shadow relative"
                  >
                    <div>
                      {/* Card Header */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-black text-base font-extrabold tracking-tight">
                          {monthData.name}
                        </span>
                        
                        {/* Event count gold-orange badge */}
                        {totalEvents > 0 && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FFF9E6] text-[#D97706] border border-[#FDE68A]">
                            <svg className="w-2.5 h-2.5 text-[#D97706]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10" />
                              <circle cx="12" cy="12" r="2" />
                            </svg>
                            <span>{totalEvents}</span>
                          </span>
                        )}
                      </div>

                      {/* Weekday labels */}
                      <div className="grid grid-cols-7 gap-y-1 text-center mb-2">
                        {weekdays.map(d => (
                          <span key={d} className="text-[10px] text-gray-400 font-bold tracking-wider">
                            {d}
                          </span>
                        ))}
                      </div>

                      {/* Days Grid */}
                      <div className="grid grid-cols-7 gap-y-0.5 text-center items-center">
                        {/* Empty cells before start of month */}
                        {offsetDays.map((_, idx) => (
                          <div key={`offset-${idx}`} className="w-8 h-8"></div>
                        ))}

                        {/* Calendar Days */}
                        {monthDays.map(day => {
                          const event = monthData.events.find(e => e.day === day);
                          
                          if (event) {
                            return (
                              <div 
                                key={`day-${day}`}
                                onClick={onRegisterClick}
                                className="flex items-center justify-center w-8 h-8 text-[13px] font-extrabold text-white bg-blue-600 cursor-pointer rounded-full hover:bg-blue-700 shadow-md shadow-blue-300/50 transition-all transform hover:scale-105"
                                title={event.title}
                              >
                                <span>{day}</span>
                              </div>
                            );
                          }

                          return (
                            <div 
                              key={`day-${day}`}
                              className="flex items-center justify-center w-8 h-8 text-xs font-semibold text-gray-700"
                            >
                              {day}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Card Footer - Events List */}
                    {totalEvents > 0 ? (
                      <div className="flex flex-col gap-1.5 shrink-0 mt-3">
                        {monthData.events.map(ev => (
                          <div 
                            key={ev.day}
                            onClick={onRegisterClick}
                            className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-1.5 flex items-center justify-between gap-2 cursor-pointer hover:bg-slate-100 transition-colors"
                          >
                            <div className="flex items-center gap-2 overflow-hidden">
                              <span className="w-5 h-5 rounded-md bg-[#E1F0FF] text-blue-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                                {ev.day}
                              </span>
                              <span className="text-[10.5px] font-bold text-gray-700 truncate leading-tight">
                                {ev.title}
                              </span>
                            </div>
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center text-[10px] font-bold text-gray-300 mt-6 pt-3 border-t border-gray-50 shrink-0">
                        No Events
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          </div>
        )}


        {/* ── EVENT LIST TAB PANEL Redesigned as a Grid of Cards ── */}
        {activeTab === "list" && (
          <div className="flex flex-col w-full animate-fadeIn">
            {/* Tab Header title */}
            <h3 className="text-[#090D1A] font-extrabold text-2xl sm:text-3xl lg:text-[32px] tracking-tight leading-none mb-8">
              Upcoming Events
            </h3>

            {/* Grid Container (w: 1298px maximum limit, cols gap: 42px, responsive columns layout) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[42px] justify-items-center">
              {chronologicalEventsList.filter(ev => ev.status === "Upcoming").map(ev => (
                <div
                  key={ev.id}
                  onClick={() => ev.status === "Upcoming" ? setSelectedEvent(ev) : alert("This event has already concluded. Keep checking back for future dates!")}
                  className="group w-full max-w-[293px] bg-white border border-gray-200 rounded-[16px] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none"
                  style={{ minHeight: '408px' }}
                >
                  {/* Card Image Cover block */}
                  <div className="w-full h-[200px] relative overflow-hidden bg-white shrink-0 p-2">
                    <img
                      src={ev.img}
                      alt={ev.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Top-left category tag badge */}
                    <span 
                      className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] font-extrabold shadow-sm border border-black/5" 
                      style={{ color: ev.badgeColor }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: ev.badgeColor }}></span>
                      <span>{ev.category}</span>
                    </span>
                  </div>

                  {/* Card Details information */}
                  <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between gap-3">
                    <div className="flex flex-col gap-1.5">
                      
                      {/* Title and Green arrow layout */}
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-black text-[15px] font-black leading-snug m-0 group-hover:text-blue-600 transition-colors">
                          {ev.title}
                        </h4>
                        
                        {/* Green Arrow indicator link */}
                        <span 
                          className="text-[#10B981] font-black text-lg select-none leading-none shrink-0 pl-1 group-hover:translate-x-0.5 transition-transform" 
                          style={{ fontFamily: "sans-serif" }}
                        >
                          ↗
                        </span>
                      </div>

                      {/* Date & Time with Icons */}
                      <div className="flex flex-col gap-1 mt-1 text-gray-500">
                        {/* Calendar info */}
                        <div className="flex items-center gap-1.5 text-[10.5px] font-extrabold">
                          <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                          <span>{ev.date}</span>
                        </div>
                        
                        {/* Clock info */}
                        <div className="flex items-center gap-1.5 text-[10.5px] font-extrabold">
                          <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{ev.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Clamped description paragraph */}
                    <p className="text-gray-400 text-[11px] font-normal leading-relaxed m-0 line-clamp-3">
                      {ev.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-64 w-full bg-white p-4">
              <img 
                src={selectedEvent.img} 
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
              {selectedEvent.fullDetails ? selectedEvent.fullDetails : <p className="text-gray-700">{selectedEvent.desc}</p>}
              
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

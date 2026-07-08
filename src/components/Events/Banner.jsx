import React, { useState, useEffect } from 'react';
import { db } from '../../config/firebaseClient';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';

// Import Modularized Section Components
import EventHero from './EventHero.jsx';
import UpcomingEvent from './UpcomingEvent.jsx';
import EventCalendar from './EventCalendar.jsx';
import EventGallery, { galleryImages } from './EventGallery.jsx';
import MilestonesMemories, { milestoneEvents } from './MilestonesMemories.jsx';
import SEO from '../SEO';

// Combine all images for unified fullscreen lightbox navigation
const allLightboxImages = [
  ...galleryImages,
  ...milestoneEvents.map(e => e.img)
];

export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const fetchRegisteredEvents = async () => {
    try {
      const userRaw = localStorage.getItem("kripa_student_profile");
      if (userRaw) {
        const userObj = JSON.parse(userRaw);
        const q = query(collection(db, 'registrations'), where('email', '==', userObj.email));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRegisteredEvents(data.map(reg => reg.eventTitle));
      }
    } catch (e) {
      console.error("Error fetching registrations in Banner.jsx:", e);
    }
  };

  useEffect(() => {
    fetchRegisteredEvents();
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    eventAddress: "",
    date: "",
    time: "",
    eventName: "",
    preparingFor: "Other"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      // Only allow numeric characters and max 10 digits
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email) {
      alert("Please fill out the required fields.");
      return;
    }

    try {
      const registrationData = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        eventId: formData.eventName.toLowerCase().replace(/\s+/g, '-'),
        eventTitle: formData.eventName,
        preparingFor: formData.preparingFor,
        date: formData.date,
        time: formData.time,
        createdAt: new Date().toISOString()
      };
      
      await addDoc(collection(db, 'registrations'), registrationData);

      setIsModalOpen(false);
      setIsSuccessModalOpen(true);
      setRegisteredEvents(prev => [...prev, formData.eventName]);

      // Clear values out safely
      setFormData({ 
        firstName: "", 
        lastName: "", 
        phone: "",
        email: "",
        eventAddress: "168, Ground floor, Mandawali Pandit Mohalla, Delhi - 110092",
        date: "15-08-2026 (Saturday)",
        time: "09:00 AM",
        eventName: "Independence Day Celebration",
        preparingFor: "Other"
      });

    } catch (error) {
      console.error("Event registration error:", error);
      alert(error.message || "Something went wrong, please try again.");
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev === 0 ? allLightboxImages.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev === allLightboxImages.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  const openRegistrationWithDefaultData = (details) => {
    const userRaw = localStorage.getItem("kripa_student_profile");
    if (!userRaw) {
      // User is not logged in, trigger the auth modal to force login
      window.dispatchEvent(new CustomEvent('open-auth-modal', { detail: { isSignUp: false } }));
      return;
    }

    let storedUser = null;
    try {
      storedUser = JSON.parse(userRaw);
    } catch (e) {
      console.error(e);
    }

    const nameParts = storedUser?.name ? storedUser.name.split(" ") : [];
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    setFormData({
      firstName: firstName,
      lastName: lastName,
      phone: storedUser?.phone || "",
      email: storedUser?.email || "",
      eventAddress: "168, Ground floor, Mandawali Pandit Mohalla, Delhi - 110092",
      date: details?.date && details.date !== "Coming Soon" ? details.date : "15-08-2026 (Saturday)",
      time: details?.time && details.time !== "Stay Tuned" ? details.time : "09:00 AM",
      eventName: details?.eventName || "Independence Day Celebration",
      preparingFor: storedUser?.preparingFor || "Other"
    });
    setIsModalOpen(true);
  };

  return (
    <div className="w-full font-sans overflow-x-hidden bg-white">
      <SEO 
        title="Events & Milestones | Kripa Library Mandawali"
        description="Explore our upcoming events, seminars, achievements, and memorable milestones. Join a vibrant community of exam aspirants in East Delhi."
      />

      {/* 1. Hero banner section with Fusion Festival background image */}
      <EventHero />

      {/* 2. Upcoming event section card with linear gradient and CTA register button */}
      <UpcomingEvent onRegisterClick={openRegistrationWithDefaultData} registeredEvents={registeredEvents} />

      {/* 3. Calendar & Event list schedule tracker tabs */}
      <EventCalendar onRegisterClick={openRegistrationWithDefaultData} registeredEvents={registeredEvents} />

      {/* 4. Milestones & Memories section displaying new ImageKit assets (RENDERED BEFORE GALLERY) */}
      <MilestonesMemories onImageClick={(index) => setLightboxIndex(galleryImages.length + index)} />

      {/* 5. Photo Gallery Grid of static library events (RENDERED AFTER MILESTONES) */}
      <EventGallery onImageClick={(index) => setLightboxIndex(index)} />


      {/* ── FORM REGISTRATION POPUP MODAL ── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fadeIn backdrop-blur-sm">
          <div className="bg-white w-full max-w-[90%] md:max-w-[800px] lg:max-w-[1217px] rounded-[24px] sm:rounded-[30px] border border-[#D9D9D9] shadow-2xl overflow-hidden animate-zoomIn max-h-[95vh] flex flex-col">
            <div className="w-full bg-[#E1F0FF] px-6 sm:px-8 py-4 flex items-center justify-between border-b border-[#D9D9D9] shrink-0">
              <span className="text-base sm:text-lg font-bold text-gray-800 tracking-wide w-full text-center pl-6">Online Event Registration</span>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-black text-2xl font-bold cursor-pointer p-1">&times;</button>
            </div>

            <form onSubmit={handleFormSubmit} className="p-6 sm:p-8 overflow-y-auto space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">First Name</label>
                  <input type="text" name="firstName" placeholder="e.g. John" value={formData.firstName} onChange={handleInputChange} required className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none focus:border-blue-500 text-sm" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Last Name (Optional)</label>
                  <input type="text" name="lastName" placeholder="e.g. Doe" value={formData.lastName} onChange={handleInputChange} className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none focus:border-blue-500 text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Phone Number</label>
                  <input type="tel" name="phone" placeholder="e.g. 9876543210" value={formData.phone} onChange={handleInputChange} required pattern="[0-9]{10}" minLength="10" maxLength="10" title="Please enter exactly 10 digits" className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none focus:border-blue-500 text-sm" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Email Address</label>
                  <input type="email" name="email" placeholder="e.g. name@gmail.com" value={formData.email} onChange={handleInputChange} required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="Please enter a valid email address ending in a domain like .com or .in" className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none focus:border-blue-500 text-sm" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">Event Address</label>
                <input type="text" name="eventAddress" value={formData.eventAddress} readOnly className="w-full h-11 bg-gray-50 border border-gray-200 text-gray-500 outline-none rounded-xl px-4 text-xs sm:text-sm cursor-not-allowed" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Date</label>
                  <input type="text" name="date" value={formData.date} readOnly className="w-full h-11 bg-gray-50 border border-gray-200 text-gray-500 outline-none rounded-xl px-4 text-sm cursor-not-allowed" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Time</label>
                  <input type="text" name="time" value={formData.time} readOnly className="w-full h-11 bg-gray-50 border border-gray-200 text-gray-500 outline-none rounded-xl px-4 text-sm cursor-not-allowed" />
                </div>
              </div>

               <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">Event Name</label>
                <input type="text" name="eventName" value={formData.eventName} readOnly className="w-full h-11 bg-gray-50 border border-gray-200 text-gray-500 outline-none rounded-xl px-4 text-sm cursor-not-allowed" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">Preparing For</label>
                <select name="preparingFor" value={formData.preparingFor} onChange={handleInputChange} className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none focus:border-blue-500 text-sm bg-white">
                  <option value="UPSC">UPSC</option>
                  <option value="SSC">SSC</option>
                  <option value="Banking">Banking</option>
                  <option value="CA/CS">CA/CS</option>
                  <option value="JEE/NEET">JEE/NEET</option>
                  <option value="Gate">Gate</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full h-12 bg-[#00082E] text-white font-bold tracking-widest text-sm rounded-xl uppercase shadow-md hover:bg-black transition-colors active:scale-[0.99] cursor-pointer">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* ── SUCCESS POPUP MODAL CARD ── */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fadeIn backdrop-blur-sm">
          <div className="relative bg-white w-full max-w-[90%] sm:max-w-[540px] md:max-w-[620px] rounded-[24px] sm:rounded-[32px] border border-gray-100 shadow-2xl p-8 sm:p-12 flex flex-col items-center justify-center text-center animate-zoomIn">
            <button
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute top-5 right-6 text-gray-400 hover:text-black text-2xl font-bold transition-colors cursor-pointer leading-none p-1"
              aria-label="Close Success Message PopUp Modal"
            >
              &times;
            </button>

            <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center mb-6 sm:mb-8 shrink-0">
              <div className="absolute inset-0 border-[10px] sm:border-[14px] border-gray-200 rounded-[28px] sm:rounded-[36px] rotate-12 opacity-80"></div>
              <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 bg-[#8CE38C] rounded-full flex items-center justify-center shadow-md animate-bounceSlow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-8 sm:h-8">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            <h3 className="text-black font-bold text-lg sm:text-[22px] leading-snug tracking-tight px-2 max-w-[420px]">
              Your registration details submitted successfully!
            </h3>
          </div>
        </div>
      )}


      {/* ── UNIFIED LIGHTBOX POPUP MODAL ── */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all active:scale-90 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Navigation Arrow */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev === 0 ? allLightboxImages.length - 1 : prev - 1));
            }}
            className="absolute left-4 sm:left-8 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all active:scale-90 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Area */}
          <div 
            className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={allLightboxImages[lightboxIndex]} 
              alt="Gallery image full screen"
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev === allLightboxImages.length - 1 ? 0 : prev + 1));
            }}
            className="absolute right-4 sm:right-8 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm transition-all active:scale-90 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-semibold tracking-wider">
            {lightboxIndex + 1} / {allLightboxImages.length}
          </div>
        </div>
      )}


      {/* ── KEYFRAME ANIMATION EXTENSIONS ── */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes bounceSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        
        .animate-fadeIn { animation: fadeIn 0.25s ease-out forwards; }
        .animate-zoomIn { animation: zoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-bounceSlow { animation: bounceSlow 2.5s ease-in-out infinite; }
      `}</style>

    </div>
  );
}
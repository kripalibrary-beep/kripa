import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";
import { chronologicalEventsList } from "./Events/EventCalendar";
import { auth, db } from "../config/firebaseClient";
import { signOut } from "firebase/auth";
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [myRegistrations, setMyRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [newPhone, setNewPhone] = useState("");

  useEffect(() => {
    // 1. Check if user is logged in
    const storedUser = localStorage.getItem("kripa_student_profile");
    if (!storedUser) {
      navigate("/"); // Redirect to home if not logged in
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);

    // 2. Fetch User's Registered Events
    const fetchMyRegistrations = async () => {
      try {
        const q = query(collection(db, 'registrations'), where('email', '==', parsedUser.email));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMyRegistrations(data);
      } catch (error) {
        console.error("Error fetching user registrations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyRegistrations();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("kripa_student_profile");
    navigate("/");
  };

  const handleUpdatePhone = async () => {
    if (!newPhone || newPhone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }
    try {
      const userDocRef = doc(db, 'profiles', user.id);
      await updateDoc(userDocRef, { phone: newPhone });
      
      const updatedUser = { ...user, phone: newPhone };
      setUser(updatedUser);
      localStorage.setItem("kripa_student_profile", JSON.stringify(updatedUser));
      setIsEditingPhone(false);
    } catch (err) {
      console.error(err);
      alert("Failed to update phone number.");
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20 pt-[80px]">
      <SEO title="Student Dashboard | Kripa Library" description="Manage your student profile and event registrations at Kripa Library." />
      
      {/* ── HEADER BANNER ── */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white w-full py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M42.7,-73.4C55.9,-65.4,67.6,-54.5,75.4,-41.4C83.2,-28.3,87.1,-14.2,85.6,-0.9C84.1,12.5,77.3,24.9,69.5,36.5C61.7,48.1,52.9,58.8,41.2,65.6C29.5,72.4,14.8,75.3,-0.1,75.1C-14.9,74.9,-29.8,71.6,-42.6,64.8C-55.4,58,-66.1,47.7,-74,35.2C-81.9,22.7,-87,7.9,-85.1,-6.1C-83.3,-20.1,-74.6,-33.4,-63.5,-42.9C-52.4,-52.4,-39,-58.2,-26.1,-65.5C-13.2,-72.8,-0.7,-81.7,12.8,-83.4C26.3,-85.2,40,-80,42.7,-73.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center text-3xl sm:text-5xl font-bold text-blue-800 shadow-xl border-4 border-white/20">
            {user.name?.slice(0, 2).toUpperCase() || 'U'}
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-white">Welcome, {user.name || 'Student'}!</h1>
            <p className="text-blue-200 text-sm sm:text-base font-medium">Student Profile Dashboard</p>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT GRID ── */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Profile Details */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Profile Details
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email Address</p>
                <p className="text-sm font-medium text-gray-800">{user.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone Number</p>
                {user.phone && !isEditingPhone ? (
                  <p className="text-sm font-medium text-gray-800 flex items-center justify-between">
                    {user.phone}
                    <button onClick={() => setIsEditingPhone(true)} className="text-xs text-blue-600 hover:underline bg-transparent border-none cursor-pointer font-semibold">Edit</button>
                  </p>
                ) : (
                  <div className="mt-2 bg-amber-50 border border-amber-200 p-4 rounded-2xl shadow-sm">
                    {!user.phone && (
                      <div className="flex items-start gap-2 mb-3">
                        <svg className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <p className="text-xs text-amber-800 font-bold leading-tight">Action Required: Please verify your phone number to complete your profile.</p>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <input 
                        type="tel" 
                        value={newPhone} 
                        onChange={(e) => setNewPhone(e.target.value)} 
                        placeholder="10-digit number" 
                        className="flex-1 min-w-0 h-10 border border-amber-300 rounded-xl px-3 text-sm outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 bg-white transition-all shadow-inner"
                      />
                      <button 
                        onClick={handleUpdatePhone}
                        className="shrink-0 h-10 bg-amber-500 hover:bg-amber-600 text-white px-5 text-sm font-bold rounded-xl transition-all shadow-sm shadow-amber-200 border-none cursor-pointer flex items-center justify-center gap-1"
                      >
                        <span>Save</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Target Exam</p>
                <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full border border-indigo-100">
                  {user.preparingFor}
                </span>
              </div>
            </div>

            <hr className="my-6 border-gray-100" />
            
            <button 
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-bold py-3 rounded-xl transition-colors border border-red-100"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              Logout Securely
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Registered Events & Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 border border-gray-100 h-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                My Registered Events
              </h3>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                {myRegistrations.length} Total
              </span>
            </div>

            {loading ? (
              <div className="flex items-center justify-center h-40">
                <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
            ) : myRegistrations.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center h-48 bg-gray-50 rounded-2xl border border-dashed border-gray-200 p-6">
                <svg className="w-12 h-12 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p className="text-gray-500 font-medium mb-1">No events registered yet.</p>
                <p className="text-xs text-gray-400">Join our upcoming seminars and workshops to see them here.</p>
                <button onClick={() => navigate('/events')} className="mt-4 text-blue-600 text-sm font-bold hover:underline">Explore Events &rarr;</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {myRegistrations.map((reg) => {
                  const eventData = chronologicalEventsList.find(e => e.title === reg.eventTitle) || {};
                  
                  // Use exact formatting as seen in the registration form
                  const eventDate = eventData.date === "15 August 2026" ? "15-08-2026 (Saturday)" : (eventData.date || "Date TBA");
                  const eventTime = eventData.time && eventData.time.includes("09:00 AM") ? "09:00 AM" : (eventData.time || "Time TBA");
                  const eventLocation = "168, Ground floor, Mandawali Pandit Mohalla, Delhi - 110092";

                  return (
                    <div key={reg.id} className="group p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-blue-100 transition-all flex flex-col">
                      <div className="flex justify-between items-start mb-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold shadow-sm group-hover:scale-110 transition-transform">
                          ✓
                        </div>
                        <span className="text-[10px] font-bold tracking-wider text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">CONFIRMED</span>
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-3 line-clamp-2 leading-snug">{reg.eventTitle}</h4>
                      
                      <div className="space-y-2 mt-auto bg-gray-50/80 p-3 rounded-xl border border-gray-100/50">
                        <div className="flex items-center justify-between gap-2 text-xs text-gray-600">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span className="font-medium text-gray-800">{eventDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="font-medium text-gray-800">{eventTime}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-xs text-gray-600 pt-1">
                          <svg className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          <span className="leading-tight">{eventLocation}</span>
                        </div>
                      </div>
                      
                      <p className="text-[10px] text-gray-400 flex items-center gap-1.5 mt-3 pt-3 border-t border-gray-100">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Registered on {new Date(reg.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

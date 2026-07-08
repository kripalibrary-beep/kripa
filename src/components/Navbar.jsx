import React, { useState, useEffect } from "react";
const logo = "https://ik.imagekit.io/manish07/assets/logo2.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth, db, googleProvider } from "../config/firebaseClient";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { doc, setDoc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [myRegistrations, setMyRegistrations] = useState([]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Load user from localStorage on mount and setup global auth trigger
  useEffect(() => {
    const storedUser = localStorage.getItem("kripa_student_profile");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const handleOpenAuth = () => {
      setShowAuthModal(true);
    };
    window.addEventListener('open-auth-modal', handleOpenAuth);

    // Firebase Auth Listener
    const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Check if profile exists in Firestore
          const userDocRef = doc(db, 'profiles', firebaseUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          let profileData = {};
          if (userDocSnap.exists()) {
            profileData = userDocSnap.data();
          } else {
            // Create new profile in Firestore
            profileData = {
              id: firebaseUser.uid,
              email: firebaseUser.email,
              name: firebaseUser.displayName || "User",
              phone: "",
              preparingFor: "Other",
              createdAt: new Date().toISOString()
            };
            await setDoc(userDocRef, profileData);
          }
          
          localStorage.setItem("kripa_student_profile", JSON.stringify(profileData));
          setUser(profileData);
          setShowAuthModal(false);
        } catch (error) {
          console.error("Error syncing profile:", error);
        }
      } else {
        localStorage.removeItem("kripa_student_profile");
        setUser(null);
      }
    });

    return () => {
      window.removeEventListener('open-auth-modal', handleOpenAuth);
      unsubscribeAuth();
    };
  }, []);

  // Fetch student's registrations from Firestore
  const fetchMyRegistrations = async (email) => {
    try {
      const q = query(collection(db, 'registrations'), where('email', '==', email));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMyRegistrations(data);
    } catch (error) {
      console.error("Error fetching user registrations:", error);
    }
  };

  const handleProfileClick = () => {
    if (user) {
      navigate('/dashboard');
      closeMenu();
    } else {
      setShowAuthModal(true);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("kripa_student_profile");
    setUser(null);
    setShowDropdown(false);
    setMyRegistrations([]);
    alert("Logged out successfully.");
  };

  return (
    <nav className="w-full h-[81px] bg-white border-b border-gray-100 relative z-50">
      <div className="w-full h-full flex items-center justify-between px-4 sm:px-8 lg:px-[77px]">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link to="/" onClick={closeMenu} className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center overflow-hidden cursor-pointer">
            <img src={logo} alt="Kripa Library Logo" className="w-full h-full object-contain scale-125 sm:scale-150" />
          </Link>
          <Link to="/" onClick={closeMenu} className="cursor-pointer">
            <span className="text-black font-semibold text-base sm:text-[18px] leading-tight whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif" }}>
              Kripa Library
            </span>
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="hidden lg:flex items-center gap-10 list-none m-0 p-0">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-sm font-semibold text-blue-700 border-b-2 border-blue-700 pb-0.5 no-underline" : "text-sm text-gray-500 hover:text-blue-700 transition-colors no-underline"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={({ isActive }) => isActive ? "text-sm font-semibold text-blue-700 border-b-2 border-blue-700 pb-0.5 no-underline" : "text-sm text-gray-500 hover:text-blue-700 transition-colors no-underline"}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" className={({ isActive }) => isActive ? "text-sm font-semibold text-blue-700 border-b-2 border-blue-700 pb-0.5 no-underline" : "text-sm text-gray-500 hover:text-blue-700 transition-colors no-underline"}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-sm font-semibold text-blue-700 border-b-2 border-blue-700 pb-0.5 no-underline" : "text-sm text-gray-500 hover:text-blue-700 transition-colors no-underline"}>
              About
            </NavLink>
          </li>
        </ul>

        {/* Right Actions - Desktop */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 relative">
          <NavLink to="/contact" className={({ isActive }) => isActive ? "border border-blue-700 text-blue-700 text-sm px-5 py-1.5 rounded-full bg-transparent no-underline" : "border border-gray-400 text-gray-700 text-sm px-5 py-1.5 rounded-full bg-transparent hover:bg-gray-50 transition-colors no-underline"}>
            Contact Us
          </NavLink>

          <button onClick={handleProfileClick} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-blue-700 cursor-pointer transition-colors bg-transparent">
            {user ? (
              <span className="text-xs font-bold text-blue-700 uppercase">{user.name?.slice(0, 2) || 'U'}</span>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>

          {/* User Profile Dropdown Menu */}
          {showDropdown && user && (
            <div className="absolute right-0 top-12 w-80 bg-white border border-gray-150 shadow-2xl rounded-2xl p-5 z-50 text-left animate-fadeIn">
              <div className="border-b border-gray-100 pb-3 mb-3">
                <h4 className="text-gray-900 font-bold text-base">{user.name}</h4>
                <p className="text-xs text-gray-500">{user.email}</p>
                <p className="text-xs text-gray-500">Phone: {user.phone}</p>
                <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded mt-1">Preparing for: {user.preparingFor}</span>
              </div>
              <div className="max-h-40 overflow-y-auto mb-3">
                <h5 className="text-xs font-bold text-gray-700 mb-1.5">My Registered Events</h5>
                {myRegistrations.length === 0 ? (
                  <p className="text-xs text-gray-400 italic">No registrations found.</p>
                ) : (
                  <ul className="space-y-1.5 list-none p-0 m-0">
                    {myRegistrations.map((reg) => (
                      <li key={reg.id} className="text-xs text-gray-700 bg-gray-50 p-2 rounded border border-gray-100">
                        <div className="font-semibold text-gray-800">{reg.eventTitle}</div>
                        <div className="text-[10px] text-gray-400">Registered: {new Date(reg.createdAt).toLocaleDateString()}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button onClick={handleLogout} className="w-full bg-red-50 text-red-600 hover:bg-red-100 py-1.5 rounded-lg text-xs font-semibold border-none cursor-pointer transition-colors">
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Hamburger Menu - Mobile */}
        <div className="flex lg:hidden items-center gap-3">
          <button onClick={handleProfileClick} className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-blue-700 cursor-pointer bg-transparent">
            {user ? (
              <span className="text-xs font-bold text-blue-700 uppercase">{user.name?.slice(0, 2) || 'U'}</span>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
          
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-700 focus:outline-none p-1" aria-label="Toggle Menu">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`absolute top-[81px] left-0 w-full bg-white border-b border-gray-200 shadow-md lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <ul className="flex flex-col list-none m-0 px-6 py-4 gap-4">
          <li>
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-700 font-semibold no-underline block py-1" : "text-gray-600 no-underline block py-1"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-700 font-semibold no-underline block py-1" : "text-gray-600 no-underline block py-1"}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-700 font-semibold no-underline block py-1" : "text-gray-600 no-underline block py-1"}>
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "text-blue-700 font-semibold no-underline block py-1" : "text-gray-600 no-underline block py-1"}>
              About
            </NavLink>
          </li>
          <li className="pt-2 border-t border-gray-100">
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "bg-blue-700 text-white text-center rounded-full block py-2 no-underline text-sm font-medium" : "border border-gray-400 text-gray-700 text-center rounded-full block py-2 no-underline text-sm font-medium"}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* ── USER AUTHENTICATION MODAL (LOGIN / REGISTER) ── */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-[420px] rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-2xl flex flex-col relative text-left">
            <button onClick={() => setShowAuthModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl font-bold bg-transparent border-none cursor-pointer">&times;</button>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Student Login</h3>
            <p className="text-xs text-gray-500 mb-6">Continue with your Google account to view your profile and registered events.</p>

            <button 
              onClick={handleGoogleLogin} 
              className="w-full h-11 bg-white border border-gray-300 text-gray-700 font-semibold text-sm rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
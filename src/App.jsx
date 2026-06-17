import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SEO from "./components/SEO";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ExplorePlans from "./components/plan/ExplorePlans";
import PremiumFacilities from "./components/PremiumFacilities";
import ContactSection from "./components/ContactSection";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Page Route Imports
import About from "./components/Aboutus/About";
import Blog from "./components/Blogs/Blog";
import Events from "./components/Events/Banner";
import BlogDetail from './components/Blogs/Blog1details';
import PoemsPage from './components/Blogs/PoemsPage';
import BiographyPage from './components/Blogs/BiographyPage';
import QuotesPage from './components/Blogs/QuotesPage';
import MotivationPage from './components/Blogs/MotivationPage';
import SelfDevelopmentPage from './components/Blogs/SelfDevelopmentPage';
import AboutUsSEOContent from "./components/AboutUsSEOContent";




// ── UTILITY COMPONENT: Scroll To Top ──
// FIXED: Automatically forces the browser engine to snap back up to position X:0, Y:0 on any path routing change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
// ── FAQ SCHEMA FOR HOME PAGE SEO ──
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Kripa Library open 24 hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer round-the-clock access with our 24-Hour Plan, as well as a dedicated Night Plan from 09 PM to 06 AM for students who prefer studying after dark."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a safe place to keep my books and laptop?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, lockers are available to keep your belongings secure. Our premises are also monitored by 24/7 CCTV surveillance."
      }
    }
  ]
};

// ── LIBRARY BUSINESS SCHEMA FOR HOME PAGE SEO ──
const librarySchema = {
  "@context": "https://schema.org",
  "@type": "Library",
  "@id": "https://www.kripalibrary.com/#library",
  "name": "Kripa Library & Reading Room",
  "image": "https://ik.imagekit.io/manish07/assets/logo2.png",
  "url": "https://www.kripalibrary.com/",
  "telephone": "+917838004416",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "168, Ground floor, Mandawali Pandit Mohalla, Front of Durga Mandir",
    "addressLocality": "East Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110092",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6253",
    "longitude": "77.2913"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/kripa_library/",
    "https://www.facebook.com/p/Kripa-Library-Mandawali-61581788636814/",
    "https://www.youtube.com/@KripaLibrary"
  ]
};

const combinedSchema = [librarySchema, faqSchema];

function App() {
  return (
    <Router>
      {/* Active Scroll Injection inside routing wrapper context */}
      <ScrollToTop />

      <div className="w-full overflow-x-hidden flex flex-col min-h-screen bg-white">

        {/* Render Navbar OUTSIDE Routes so it appears on every page */}
        <Navbar />

        {/* Main Content Area (Expands to push footer down if content is short) */}
        <div className="flex-grow w-full">
          <Routes>
            {/* Main Home Page Route */}
            <Route
              path="/"
              element={
                <>
                  <SEO 
                    title="Kripa Library | Premium 24/7 Reading Room in Mandawali, East Delhi"
                    description="Looking for a peaceful study space in East Delhi? Kripa Library in Mandawali offers 24/7 access, private AC cabins, high-speed Wi-Fi, and a safe environment for UPSC and exam prep. Book your seat today!"
                    schema={combinedSchema}
                  />
                  <HeroSection />
                  <WhyChooseUs />
                  <ExplorePlans />
                  <PremiumFacilities />
                  <ContactSection />
                  <AboutUsSEOContent />
                  <Testimonials />
                </>
              }
            />

            {/* Sub-Page Navigation Routing Directives */}
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/topics/poems" element={<PoemsPage />} />
            <Route path="/topics/biography" element={<BiographyPage />} />
            <Route path="/topics/quotes" element={<QuotesPage />} />
            <Route path="/topics/motivation" element={<MotivationPage />} />
            <Route path="/topics/self-development" element={<SelfDevelopmentPage />} />


          </Routes>
        </div>

        {/* Render Footer OUTSIDE Routes so it appears on every page */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
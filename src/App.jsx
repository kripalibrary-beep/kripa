import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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




// ── UTILITY COMPONENT: Scroll To Top ──
// FIXED: Automatically forces the browser engine to snap back up to position X:0, Y:0 on any path routing change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
                  <HeroSection />
                  <WhyChooseUs />
                  <ExplorePlans />
                  <PremiumFacilities />
                  <ContactSection />
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


          </Routes>
        </div>

        {/* Render Footer OUTSIDE Routes so it appears on every page */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
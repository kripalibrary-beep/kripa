import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
// import PlanC from "./components/plan/cards/PlanCard";
import ExplorePlans from "./components/plan/ExplorePlans";
import PremiumFacilities from "./components/PremiumFacilities";
import ContactSection from "./components/ContactSection";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs"; // Import the new file
import Footer from "./components/Footer"; // Import the Footer component
import Navbar from "./components/Navbar"; // Import the Navbar component

// import ContactUs from "./components/contactus";



function App() {
  return (
    <Router>
      <div className="w-full overflow-x-hidden">
        <Routes>
          {/* Main Home Page Route */}
          <Route path="/" element={
            <>
              {/* Render the Navbar at the top of the home page */}
              <Navbar />
              <HeroSection />
              <WhyChooseUs />
              <ExplorePlans />
              <PremiumFacilities />
              <ContactSection />
              <Testimonials />
              <Footer />
            </>
          } />

          {/* New Contact Page Route */}
          {/* <Route path="/home" element={<HeroSection />} /> */}
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
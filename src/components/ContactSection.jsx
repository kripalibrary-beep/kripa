import React, { useState } from 'react';
import illustration from '../assets/contact-illustration.png';

const CONCERNS = ["Plans", "Facilities", "Membership", "Events Info", "Others"];

export default function Contactsection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedIn: "Plans",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // --- Phone Number Logic ---
    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
      }
      return;
    }

    // Default behavior for other fields
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const scriptURL = import.meta.env.VITE_SCRIPT_URL;
      
      await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      alert('Query submitted successfully!');
      setFormData({ name: "", email: "", phone: "", interestedIn: "Plans", message: "" });
    } catch (error) {
      console.error(error);
      alert('Something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-10 md:py-16 px-4 sm:px-6 lg:px-12 font-sans">
      {/* Section Header */}
      {/* FIXED: Scaled typography sizes and aligned text center on smaller devices */}
      <div className="max-w-7xl mx-auto mb-6 md:mb-10 text-center sm:text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-black leading-tight tracking-tight">
          Assistance
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Get quick and easy support whenever you need.
        </p>
      </div>

      {/* Main Container Card */}
      {/* FIXED: Reduced extreme border-radius on mobile layout cards to maximize display real estate */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-sm border border-black/5 bg-[#E1F0FF] min-h-[560px]">
        
        {/* LEFT: Illustration Section */}
        {/* FIXED: Hidden on ultra-small displays, centers perfectly when stacked on tablets */}
        <div className="w-full lg:w-[45%] flex items-center justify-center p-6 sm:p-8 lg:pl-10 bg-[#D4E9FF] lg:bg-transparent">
          <img
            src={illustration}
            alt="Support"
            className="w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] h-auto object-contain pointer-events-none"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* RIGHT: Form Input Wrapper */}
        {/* FIXED: Replaced brittle asymmetric spacing rules with responsive tailwind padding metrics */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center p-5 sm:p-8 md:p-12 lg:p-[60px_80px_60px_40px]">
          <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-black leading-tight mb-2 text-center sm:text-left">
            "Need Help? We're Here for You"
          </h3>
          <p className="text-gray-600 text-sm sm:text-[15px] mb-6 md:mb-8 text-center sm:text-left">
            We're just a message away. Let us assist you.
          </p>

          {/* Concerns Radio Selection */}
          <div className="mb-6">
            <p className="text-black text-[15px] font-semibold mb-3 text-center sm:text-left">
              What is your concern related to?
            </p>
            {/* FIXED: Centers concerns items cleanly when stacked on small viewports */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center sm:justify-start">
              {CONCERNS.map((c) => (
                <label key={c} className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="interestedIn"
                    value={c}
                    checked={formData.interestedIn === c}
                    onChange={handleChange}
                    className="w-5 h-5 accent-blue-600 cursor-pointer"
                  />
                  <span className="text-gray-700 text-sm font-medium group-hover:text-black transition-colors">
                    {c}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Form Input Elements */}
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-[52px] sm:h-[56px] bg-white rounded-2xl px-5 sm:px-6 outline-none border border-transparent focus:border-blue-400 transition-all text-sm sm:text-[15px]"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Enter your Mobile No."
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full sm:flex-1 h-[52px] sm:h-[56px] bg-white rounded-2xl px-5 sm:px-6 outline-none border border-transparent focus:border-blue-400 transition-all text-sm sm:text-[15px]"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full sm:flex-1 h-[52px] sm:h-[56px] bg-white rounded-2xl px-5 sm:px-6 outline-none border border-transparent focus:border-blue-400 transition-all text-sm sm:text-[15px]"
              />
            </div>

            <textarea
              name="message"
              placeholder="Describe your concern & request here...."
              value={formData.message}
              onChange={handleChange}
              className="w-full h-[120px] sm:h-[140px] bg-white rounded-2xl p-5 sm:p-6 outline-none border border-transparent focus:border-blue-400 transition-all resize-none text-sm sm:text-[15px]"
            />
          </div>

          {/* Actions Button Footnote Row */}
          {/* FIXED: Flex layouts drop down and occupy full width smoothly on mobile screens */}
          <div className="flex flex-row items-center justify-end mt-6 md:mt-8 gap-6 sm:gap-12">
            <button 
              type="button" 
              className="text-gray-600 text-sm sm:text-[15px] font-semibold hover:text-black transition-colors"
              onClick={() => setFormData({name: "", email: "", phone: "", interestedIn: "Plans", message: ""})}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-[120px] h-[50px] sm:h-[54px] bg-white text-black font-bold text-sm sm:text-[15px] rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all active:scale-95 disabled:bg-gray-200"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
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
      // Use Regex to remove any character that is NOT a digit (\D)
      const numericValue = value.replace(/\D/g, "");
      
      // Optional: Limit to 10 digits
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
      }
      return; // Stop execution here for the phone field
    }

    // Default behavior for other fields
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const scriptURL = import.meta.env.VITE_SCRIPT_URL;
      
      // Sending JSON as plain text to bypass CORS preflight
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
    <section className="w-full bg-white py-16 px-6 lg:px-12 font-inter">
      <div className="max-w-7xl mx-auto mb-8">
        <h2 className="text-[40px] font-bold text-black leading-tight tracking-tight">Assistance</h2>
        <p className="text-[14px] text-gray-500 mt-1">Get quick and easy support whenever you need.</p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch rounded-[32px] overflow-hidden shadow-sm border border-black/5 bg-[#E1F0FF] min-h-[560px]">
        
        {/* LEFT: Illustration */}
        <div className="lg:w-[45%] flex items-center justify-center p-8 lg:pl-10">
          <img
            src={illustration}
            alt="Support"
            className="w-full max-w-[420px] h-auto object-contain pointer-events-none"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>

        {/* RIGHT: Form */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center p-8 lg:p-[60px_80px_60px_20px]">
          <h3 className="text-[32px] font-bold text-black leading-tight mb-2">"Need Help? We're Here for You"</h3>
          <p className="text-gray-600 text-[15px] mb-8">We're just a message away. Let us assist you.</p>

          {/* Radio Buttons */}
          <div className="mb-6">
            <p className="text-black text-[15px] font-semibold mb-4">What is your concern related to?</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
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
                  <span className="text-gray-700 text-[14px] font-medium group-hover:text-black transition-colors">{c}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-[56px] bg-white rounded-2xl px-6 outline-none border-none text-[15px]"
            />

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="tel" // Opens numeric keypad on mobile
                name="phone"
                placeholder="Enter your Mobile No."
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 h-[56px] bg-white rounded-2xl px-6 outline-none border-none text-[15px]"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your e-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-1 h-[56px] bg-white rounded-2xl px-6 outline-none border-none text-[15px]"
              />
            </div>

            <textarea
              name="message"
              placeholder="Describe your concern & request here...."
              value={formData.message}
              onChange={handleChange}
              className="w-full h-[140px] bg-white rounded-2xl p-6 outline-none border-none resize-none text-[15px]"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end mt-8 gap-12">
            <button 
              type="button" 
              className="text-gray-600 text-[15px] font-semibold hover:text-black transition-colors"
              onClick={() => setFormData({name: "", email: "", phone: "", interestedIn: "Plans", message: ""})}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black font-bold text-[15px] rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all active:scale-95 disabled:bg-gray-200"
              style={{ width: "120px", height: "54px" }}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
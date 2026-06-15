import React, { useState } from "react";
import ContactSection from "./ContactSection";
import SEO from "./SEO";
const whatsappIcon = "https://ik.imagekit.io/manish07/assets/whatsapp.png";
const phoneIcon = "https://ik.imagekit.io/manish07/assets/phone.png";
const instagramIcon = "https://ik.imagekit.io/manish07/assets/instagram.png";
const facebookIcon = "https://ik.imagekit.io/manish07/assets/facebook.png";

const leftImage = "https://ik.imagekit.io/manish07/assets/left.png";   // person sitting at desk
const rightImage = "https://ik.imagekit.io/manish07/assets/right.png"; // person standing with laptop

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interestedIn: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // --- 2 Minute Rate Limiting ---
        const COOLDOWN = 2 * 60 * 1000;
        const lastSubmit = localStorage.getItem("kripa_last_submit");
        const now = Date.now();

        if (lastSubmit && (now - parseInt(lastSubmit)) < COOLDOWN) {
            const remaining = Math.ceil((COOLDOWN - (now - parseInt(lastSubmit))) / 1000);
            alert(`You already sent a request. Please wait ${remaining} seconds.`);
            return;
        }

        setIsSubmitting(true);
        try {
            const scriptURL = import.meta.env.VITE_SCRIPT_URL;
            // FIXED: Removed 'no-cors' mode so your backend API can properly capture the JSON payload structure
            await fetch(scriptURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            localStorage.setItem("kripa_last_submit", Date.now().toString());
            alert('Query submitted successfully!');
            setFormData({ name: "", email: "", phone: "", interestedIn: "", message: "" });
        } catch (error) {
            console.error("Submission error:", error);
            alert('Something went wrong, please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full min-h-screen bg-[#f7f7f7] font-sans text-gray-900 overflow-x-hidden">
            <SEO 
                title="Contact Us | Book Your Private Study Cabin at Kripa Library"
                description="Get in touch with Kripa Library in Mandawali, East Delhi. Find our location, contact number, or reserve your study seat/cabin today!"
            />
            
            {/* --- Hero & Graphic Section --- */}
            {/* FIXED: Keeps components stacked on mobile views and displays decorative illustrations side-by-side on desktops */}
            <section className="w-full bg-gradient-to-b from-[#E1F0FF] to-[#f7f7f7] py-12 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                    
                    {/* Left Graphic Element */}
                    <div className="hidden md:block w-1/4 max-w-[200px]">
                        <img src={leftImage} alt="Studying at desk" className="w-full h-auto object-contain opacity-80" />
                    </div>

                    {/* Central Hero Slogan */}
                    <div className="flex-1 text-center max-w-xl px-2">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
                            Connect With Us
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
                            Have questions about slots, pricing, or facilities? Our team is standing by to help build your perfect workspace environment.
                        </p>
                    </div>

                    {/* Right Graphic Element */}
                    <div className="hidden md:block w-1/4 max-w-[200px]">
                        <img src={rightImage} alt="Working on laptop" className="w-full h-auto object-contain opacity-80" />
                    </div>
                </div>
            </section>

            {/* --- Map and Info Section --- */}
            <section className="py-10 md:py-16 px-4 sm:px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 md:mb-12">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                            Mandawali, Delhi (India)
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-black">
                            Get in touch with Kripa Library
                        </h2>
                    </div>

                    {/* Info and Grid Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        
                        {/* Interactive Info Card */}
                        <div className="bg-gray-50 border border-gray-100 rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <h3 className="text-gray-400 text-xs mb-1.5 uppercase tracking-widest font-bold">Address</h3>
                                    <p className="font-semibold text-gray-800 text-sm sm:text-base leading-relaxed">
                                        168, Ground floor, Mandawali Pandit Mohalla, Front of Durga Mandir, Delhi, 110092
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-xs mb-1.5 uppercase tracking-widest font-bold">E-mail</h3>
                                    <a href="mailto:kripalibrary@gmail.com" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors underline break-all text-sm sm:text-base">
                                        kripalibrary@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-xs mb-1.5 uppercase tracking-widest font-bold">Phone Number</h3>
                                    <a href="tel:7838004416" className="font-bold text-gray-900 text-lg sm:text-xl hover:text-blue-700 transition-colors inline-block">
                                        +91 7838004416
                                    </a>
                                </div>
                            </div>

                            {/* Social Media Link Items Wrapper Grid */}
                            {/* FIXED: Dynamic grid cells scaling cleanly across very small phone screens */}
                            <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-8 pt-6 border-t border-gray-200">
                                <SocialLink href="https://wa.me/917838004416?text=Hi" icon={whatsappIcon} label="WhatsApp" />
                                <SocialLink href="tel:7838004416" icon={phoneIcon} label="Phone" />
                                <SocialLink href="https://www.instagram.com/kripa_library/" icon={instagramIcon} label="Instagram" />
                                <SocialLink href="https://www.facebook.com/p/Kripa-Library-Mandawali-61581788636814/" icon={facebookIcon} label="Facebook" />
                            </div>
                        </div>

                        {/* Embed Location Map Container Block */}
                        <div className="w-full h-[320px] sm:h-[400px] bg-gray-100 rounded-[24px] sm:rounded-[30px] shadow-sm overflow-hidden border border-gray-100">
                            {/* FIXED: Upgraded secure maps link parameters schema format */}
                            <iframe
                                title="Kripa Library Location"
                                src="https://maps.google.com/maps?q=Kripa%20Library%20Mandawali%20Pandit%20Mohalla&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Embedded inline Contact query box */}
            <div className="bg-[#f7f7f7]">
                 <ContactSection />
            </div>
        </div>
    );
};

// Helper Component for Social Links
const SocialLink = ({ href, icon, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-1.5 text-center">
        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center transition-transform group-hover:scale-105">
             <img src={icon} alt={label} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
        </div>
        <span className="text-[10px] font-bold text-gray-400 group-hover:text-gray-700 transition-colors truncate w-full max-w-[65px]">
            {label}
        </span>
    </a>
);

export default ContactUs;
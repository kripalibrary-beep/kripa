import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import whatsappIcon from "../assets/whatsapp.png";
import phoneIcon from "../assets/phone.png";
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";


import leftImage from "../assets/left.png";   // person sitting at desk
import rightImage from "../assets/right.png"; // person standing with laptop

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
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
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
        <div className="min-h-screen bg-[#f7f7f7] font-inter text-gray-900">
            <Navbar />

            {/* --- Hero & Form Section --- */}

            {/* --- Map and Info Section --- */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-xs text-gray-400 uppercase tracking-widest">
                            MandaWali, Delhi (India)
                        </span>
                        <h2 className="text-3xl font-bold mt-1">
                            Get in touch with Kripa Library
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Info Card */}
                        <div className="bg-white border border-gray-200 rounded-[30px] shadow-sm p-8 md:p-10 flex flex-col justify-between min-h-[400px]">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-gray-400 text-xs mb-2 uppercase tracking-widest font-bold">Address</h3>
                                    <p className="font-semibold text-gray-800">
                                        168, Ground floor, Mandawali Pandit Mohalla, Front of Durga Mandir Delhi, 110092
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-xs mb-2 uppercase tracking-widest font-bold">E-mail</h3>
                                    <p className="font-semibold text-blue-600 underline">
                                        kripalibrary@gmail.com
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-gray-400 text-xs mb-2 uppercase tracking-widest font-bold">Phone Number</h3>
                                    <p className="font-semibold text-gray-800 text-xl"> 7838004416</p>
                                </div>
                            </div>

                            {/* Social Icons */}
                            <div className="grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-100">
                                <SocialLink href="https://wa.me/917838004416?text=Hi" icon={whatsappIcon} label="WhatsApp" />
                               <SocialLink href="tel:7838004416" icon={phoneIcon} label="Phone" />
                                <SocialLink href="https://www.instagram.com/kripa_library/" icon={instagramIcon} label="Instagram" />
                                <SocialLink href="https://www.facebook.com/p/Kripa-Library-Mandawali-61581788636814/" icon={facebookIcon} label="Facebook" />
                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full h-[400px] bg-gray-200 rounded-[30px] shadow-sm overflow-hidden">
                            <iframe
                                title="Kripa Library Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.925184285888!2d77.2944611!3d28.6291029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf599573cea1d%3A0x621966c612f07566!2sKripa%20Library!5e0!3m2!1sen!2sin!4v1713812000000!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>



           <ContactSection />

            <Footer />
        </div>
    );
};

// Helper Component for Social Links
const SocialLink = ({ href, icon, label }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
        <img src={icon} alt={label} className="w-10 h-10 object-contain transition-transform group-hover:scale-110" />
        <span className="text-[10px] font-bold text-gray-500 group-hover:text-gray-800">{label}</span>
    </a>
);

export default ContactUs;
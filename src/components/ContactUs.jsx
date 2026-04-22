import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import whatsappIcon from "../assets/whatsapp.png";
import phoneIcon from "../assets/phone.png";
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
// const apiUrl = import.meta.env.VITE_API_URL;

const ContactUs = () => {
    // 1. Initialize State for Form Data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interestedIn: "",
        message: ""
    });

    // 2. Handle Input Changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // 3. Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Replace with your actual Google Apps Script URL
            const scriptURL = import.meta.env.VITE_SCRIPT_URL;

            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors', // required for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            alert('Query submitted successfully!');
            // Reset Form
            setFormData({
                name: "",
                email: "",
                phone: "",
                interestedIn: "",
                message: ""
            });

        } catch (error) {
            console.error("Submission error:", error);
            alert('Something went wrong, please try again.');
        }
    };

    return (
        <div className="min-h-screen bg-[#f7f7f7] font-inter text-gray-900">
            <Navbar />

            {/* --- 1. Hero & Form Section --- */}
            <section className="relative py-16 px-6 text-center max-w-4xl mx-auto">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                    Kripa Library <span className="text-black">Contact us</span>
                </span>
                <h1 className="text-4xl font-bold mt-2 mb-4">Contact us</h1>
                <p className="text-gray-600 mb-12">
                    Get in touch and ask us anything. Looking for a quiet corner to study,{" "}
                    <br /> feel free to contact us.
                </p>

                {/* Form Container */}
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            className="p-4 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="E-mail address"
                            required
                            className="p-4 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone number"
                            className="p-4 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            name="interestedIn"
                            value={formData.interestedIn}
                            onChange={handleChange}
                            placeholder="Interested in"
                            className="p-4 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help?"
                            className="p-4 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2 h-32"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Request a Call
                    </button>
                </form>

                <p className="text-[14px] text-gray-700 mt-6 px-10 text-center max-w-md mx-auto leading-relaxed">
                    By clicking, you agree to our{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline">
                        Terms & Conditions
                    </span>
                    ,{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline block">
                        Privacy and Data Protection Policy
                    </span>
                </p>
            </section>

            {/* --- 2. Map and Info Section --- */}
            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-xs text-gray-400 uppercase">
                            MandaWali, Delhi (India)
                        </span>
                        <h2 className="text-3xl font-bold">
                            Get in touch with Kripa Library
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Info Card */}
                        <div className="w-full h-[395px] max-w-[510px] min-h-[380px] bg-white border border-[#d9d9d9] rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-8 md:p-10 flex flex-col justify-between">
                            <div>
                                <div className="mb-6">
                                    <h3 className="text-gray-400 text-sm mb-1 uppercase tracking-tight">Address</h3>
                                    <p className="font-medium text-[15px] leading-snug">
                                        168, Ground floor, Mandawali Pandit Mohalla, Front of Durga
                                        Mandir Delhi, 110092
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-gray-400 text-sm mb-1 uppercase tracking-tight">E-mail</h3>
                                    <p className="font-medium text-blue-600 underline text-[15px]">
                                        kripalibrary@gmail.com
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-[#767676] text-sm mb-1 uppercase tracking-tight">Phone Number</h3>
                                    <p className="font-medium text-[15px] text-black">9354610893</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-2 mt-auto pt-4 border-t border-gray-100">
                                <a href="https://wa.me/919354610893" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                                    <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform group-hover:scale-110" />
                                    <span className="text-[10px] md:text-xs font-semibold text-gray-700">WhatsApp</span>
                                </a>
                                <a href="tel:9354610893" className="group flex flex-col items-center gap-2">
                                    <img src={phoneIcon} alt="Phone" className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform group-hover:scale-110" />
                                    <span className="text-[10px] md:text-xs font-semibold text-gray-700">Phone</span>
                                </a>
                                <a href="https://www.instagram.com/kripa_library/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                                    <img src={instagramIcon} alt="Instagram" className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform group-hover:scale-110" />
                                    <span className="text-[10px] md:text-xs font-semibold text-gray-700">Instagram</span>
                                </a>
                                <a href="https://www.facebook.com/p/Kripa-Library-Mandawali-61581788636814/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                                    <img src={facebookIcon} alt="Facebook" className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform group-hover:scale-110" />
                                    <span className="text-[10px] md:text-xs font-semibold text-gray-700">Facebook</span>
                                </a>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full lg:w-[742px] h-[387px] bg-[#d9d9d9] rounded-[30px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden">
                            <iframe
                                title="Kripa Library Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.217351654366!2d77.2946522!3d28.6232491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb518296317b%3A0xc3316d95392d46e3!2sKripa%20Library!5e0!3m2!1sen!2sin!4v1710000000000"
                                className="w-full h-full border-0"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;
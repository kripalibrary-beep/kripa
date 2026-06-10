import React, { useState } from 'react';
import eventBanner from '../../assets/Events/independentlogo.png';

export default function Events() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        eventAddress: "",
        date: "",
        time: "",
        eventName: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.email) {
            alert("Please fill out the required fields.");
            return;
        }

        // ── TIMEOUT CONFIGURATION ──
        // Create an instance of AbortController to handle network cancellation signals
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30000ms = 30 seconds

        try {
            const scriptURL = import.meta.env.VITE_SCRIPT_URL;

            if (!scriptURL) {
                alert("Configuration error. Please try again later.");
                clearTimeout(timeoutId); // Clean up the timer
                return;
            }

            // Convert metrics into standard URL parameter blocks
            const urlEncodedData = new URLSearchParams();
            Object.keys(formData).forEach((key) => {
                urlEncodedData.append(key, formData[key]);
            });

            // Pass the controller signal directly into the fetch configuration block
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                signal: controller.signal, // Connects the abort trigger signal to this request
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlEncodedData.toString(),
            });

            // Clear the timeout safety timer immediately since the request succeeded!
            clearTimeout(timeoutId);

            // Smoothly flip popup states to show your custom visual success modal
            setIsModalOpen(false);
            setIsSuccessModalOpen(true);

            // Clear values out safely for the next user
            setFormData({ firstName: "", lastName: "", email: "", eventAddress: "", date: "", time: "", eventName: "" });

        } catch (error) {
            // Clear the timer in case a non-timeout error happened quickly
            clearTimeout(timeoutId);

            // FIXED: Check if the error was triggered explicitly by our 30-second abort signal
            if (error.name === 'AbortError') {
                console.error("Network request timed out after 30 seconds.");
                alert("The server is taking a bit longer than usual to respond. Your details might still register, but please check your network connection and try again if it doesn't show up!");
            } else {
                console.error("Sheet insertion error:", error);
                alert("Something went wrong, please try again.");
            }
        }
    };

    return (
        <div className="w-full font-sans overflow-x-hidden">

            {/* ── HERO BANNER SECTION ── */}
            <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[440px] flex items-center justify-center">
                <img src={eventBanner} alt="Independence Day 2026" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 flex flex-col items-center text-center px-4">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-2">
                        Independence Day - 2026
                    </h1>
                    <p className="text-white/90 text-sm sm:text-base font-medium mb-6">Date: 15-08-2026</p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-8 py-2.5 bg-white text-black text-sm sm:text-[15px] font-bold rounded-full shadow-md hover:bg-gray-100 transition-all active:scale-95 cursor-pointer"
                    >
                        Register Here
                    </button>
                </div>
            </div>

            {/* ── FORM REGISTRATION POPUP MODAL ── */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fadeIn backdrop-blur-sm">
                    <div className="bg-white w-full max-w-[90%] md:max-w-[800px] lg:max-w-[1217px] rounded-[24px] sm:rounded-[30px] border border-[#D9D9D9] shadow-2xl overflow-hidden animate-zoomIn max-h-[95vh] flex flex-col">
                        <div className="w-full bg-[#E1F0FF] px-6 sm:px-8 py-4 flex items-center justify-between border-b border-[#D9D9D9] shrink-0">
                            <span className="text-base sm:text-lg font-bold text-gray-800 tracking-wide w-full text-center pl-6">Online Event Registration</span>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-black text-2xl font-bold cursor-pointer p-1">&times;</button>
                        </div>

                        <form onSubmit={handleFormSubmit} className="p-6 sm:p-8 overflow-y-auto space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs sm:text-sm font-semibold text-gray-700">First Name</label>
                                    <input type="text" name="firstName" placeholder="e.g. John" value={formData.firstName} onChange={handleInputChange} required className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none focus:border-blue-500 text-sm" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs sm:text-sm font-semibold text-gray-700">Last Name</label>
                                    <input type="text" name="lastName" placeholder="e.g. Doe" value={formData.lastName} onChange={handleInputChange} required className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none focus:border-blue-500 text-sm" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs sm:text-sm font-semibold text-gray-700">Email Address</label>
                                <input type="email" name="email" placeholder="e.g. name@gmail.com" value={formData.email} onChange={handleInputChange} required className="w-full h-11 border border-gray-300 rounded-xl px-4 outline-none focus:border-blue-500 text-sm" />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs sm:text-sm font-semibold text-gray-700">Event Address</label>
                                <input type="text" name="eventAddress" placeholder="168, Ground floor, Mandawali Pandit Mohalla..." value={formData.eventAddress} onChange={handleInputChange} required className="w-full h-11 bg-white border border-gray-300 focus:border-blue-500 outline-none rounded-xl px-4 text-gray-800 text-xs sm:text-sm" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs sm:text-sm font-semibold text-gray-700">Date</label>
                                    <input type="text" name="date" placeholder="e.g. 15-08-2026 (Saturday)" value={formData.date} onChange={handleInputChange} required className="w-full h-11 bg-white border border-gray-300 focus:border-blue-500 outline-none rounded-xl px-4 text-gray-800 text-sm" />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs sm:text-sm font-semibold text-gray-700">Time</label>
                                    <input type="text" name="time" placeholder="e.g. 09:00 AM" value={formData.time} onChange={handleInputChange} required className="w-full h-11 bg-white border border-gray-300 focus:border-blue-500 outline-none rounded-xl px-4 text-gray-800 text-sm" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs sm:text-sm font-semibold text-gray-700">Event Name</label>
                                <input type="text" name="eventName" placeholder="e.g. Independence Day Celebration" value={formData.eventName} onChange={handleInputChange} required className="w-full h-11 bg-white border border-gray-300 focus:border-blue-500 outline-none rounded-xl px-4 text-gray-800 text-sm" />
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="w-full h-12 bg-[#00082E] text-white font-bold tracking-widest text-sm rounded-xl uppercase shadow-md hover:bg-black transition-colors active:scale-[0.99] cursor-pointer">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            {/* ── NEW: FIXED VISUAL SUCCESS POPUP CARD MODAL ── */}
            {/* SPEC COMPLIANCE: Matches your exact layout drawing frame properties */}
            {isSuccessModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fadeIn backdrop-blur-sm">

                    <div className="relative bg-white w-full max-w-[90%] sm:max-w-[540px] md:max-w-[620px] rounded-[24px] sm:rounded-[32px] border border-gray-100 shadow-2xl p-8 sm:p-12 flex flex-col items-center justify-center text-center animate-zoomIn">

                        {/* Top Right Close Button Button (x) */}
                        <button
                            onClick={() => setIsSuccessModalOpen(false)}
                            className="absolute top-5 right-6 text-gray-400 hover:text-black text-2xl font-bold transition-colors cursor-pointer leading-none p-1"
                            aria-label="Close Success Message PopUp Modal"
                        >
                            &times;
                        </button>

                        {/* Custom Success Checkmark Icon Asset Graphic Block */}
                        <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center mb-6 sm:mb-8 shrink-0">
                            {/* Outer grey background emblem path container */}
                            <div className="absolute inset-0 border-[10px] sm:border-[14px] border-gray-200 rounded-[28px] sm:rounded-[36px] rotate-12 opacity-80"></div>
                            {/* Inner glowing bright green dot badge wrapper */}
                            <div className="relative z-10 w-12 h-12 sm:w-16 sm:h-16 bg-[#8CE38C] rounded-full flex items-center justify-center shadow-md animate-bounceSlow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" className="sm:w-8 sm:h-8">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                        </div>

                        {/* Success Label Text Section */}
                        <h3 className="text-black font-bold text-lg sm:text-[22px] leading-snug tracking-tight px-2 max-w-[420px]">
                            Your registration details submitted successfully!
                        </h3>

                    </div>

                </div>
            )}

            {/* ── KEYFRAME ANIMATION EXTENSIONS ── */}
            <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        @keyframes bounceSlow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        
        .animate-fadeIn { animation: fadeIn 0.25s ease-out forwards; }
        .animate-zoomIn { animation: zoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-bounceSlow { animation: bounceSlow 2.5s ease-in-out infinite; }
      `}</style>
        </div>
    );
}
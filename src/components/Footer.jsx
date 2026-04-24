import React from 'react';

export default function Footer() {
    const sectionStyle = { fontFamily: "'Inter', sans-serif" };

    return (
        <footer className="mx-auto bg-white rounded-t-[100px] border-t border-x border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]" style={sectionStyle}>
            {/* ── Main Footer Card ── */}
            <div className="w-full max-w-full mx-auto px-12 py-16">

                <div className="flex justify-between items-start mb-20">

                    {/* Brand Section */}
                    <div className="max-w-[340px]">
                        <h2 className="text-[40px] font-bold text-black mb-8">
                            Kripa Library
                        </h2>
                        <p className="font-normal text-[14px] leading-[1.6]">
                            Kripa Library (often referred to as Kripa Library & Reading Room)
                            is a popular private study space located in the Mandawali area of East Delhi.
                        </p>
                    </div>

                    {/* Navigation Links Grid */}
                    {/* Navigation Links Grid */}
                    {/* Increased gap from 40 to 60 (15rem) for more breathing room */}
                    <div className="flex gap-60">

                        {/* Visit Us */}
                        <div>
                            <h4 className="font-bold text-black text-[15px] mb-2">Visit Us</h4>
                            <div className="w-[56px] h-[3px] bg-blue-600 mb-8"></div>
                            <div className="font-normal text-[14px] space-y-4 leading-relaxed">
                                <p>168, Ground floor,<br />Mandawali Pandit<br />Mohalla, Front of Durga<br />Mandir Delhi, 110092</p>
                                <p className="hover:text-blue-600 cursor-pointer transition-colors">kripalibrary@gmail.com</p>
                                <p>7838004416</p>
                            </div>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="font-bold text-black text-[16px] mb-2">Links</h4>
                            <div className="w-[56px] h-[3px] bg-blue-600 mb-8"></div>
                            <ul className="font-normal text-[14px] space-y-4">
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Home</li>
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">About Us</li>
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Events</li>
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Blogs</li>
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Contacts</li>
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Profile</li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="font-bold text-black text-[16px] mb-2">Social</h4>
                            <div className="w-[56px] h-[3px] bg-blue-600 mb-8"></div>
                            <ul className="font-normal text-[14px] space-y-4">
                                <li>
                                    <a href="https://www.instagram.com/kripa_library/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 cursor-pointer transition-colors">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/p/Kripa-Library-Mandawali-61581788636814/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 cursor-pointer transition-colors">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/@KripaLibrary" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 cursor-pointer transition-colors">
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 flex justify-between items-center text-[14px] font-normal font-medium">
                    <p>© Copyrights. All rights reserved</p>
                    <p className="hover:text-black cursor-pointer transition-colors">Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
}
import React, { useState } from "react";
import { Plus } from "lucide-react";
import faqImage from "../assets/FAQs.avif";

const faqs = [
  {
    question: "What are the library timings and shifts?",
    answer: "Kripa Library is open 24 hours a day, 7 days a week. We offer multiple shift choices, including morning, afternoon, evening, and a dedicated 24-hour full-day plan to align with your personal study habits."
  },
  {
    question: "Are private cabins and power sockets available at each desk?",
    answer: "Yes! Every student seat is configured as a private wooden cabin partition, featuring an independent switch, LED light source, and a plug point for laptops, tablets, or mobile charging."
  },
  {
    question: "Is there a safe place to store my books?",
    answer: "Absolutely. Secure key-lockable lockers are available for rent to keep your study materials, textbooks, and notes safe, so you do not have to carry heavy bags back and forth."
  },
  {
    question: "Is the library safe for female students during night hours?",
    answer: "Yes, safety is our highest priority. The premises are fully monitored by high-definition CCTV cameras, are well-lit, and are located in a highly active and secure neighborhood in Mandawali."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-full bg-white border-t border-gray-100 py-16 md:py-24 px-4 sm:px-6 md:px-12 font-sans overflow-x-hidden">
      <div className="max-w-[1298px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Title and Accordions */}
          <div className="w-full lg:w-[55%] flex flex-col">
            <div className="mb-8 text-center lg:text-left">
              <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mt-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                Find answers to common questions about our timing, facilities, locker systems, and safety policies.
              </p>
            </div>
            
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-t-2xl"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-blue-600 transition-colors duration-200">
                        {faq.question}
                      </span>
                      <div className={`w-8 h-8 rounded-full bg-slate-50 text-slate-500 flex items-center justify-center transition-all duration-300 shrink-0 ml-4 group-hover:bg-blue-50 group-hover:text-blue-600 ${isOpen ? 'bg-blue-50 text-blue-600' : ''}`}>
                        <Plus
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        />
                      </div>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50/50 pt-3">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-[45%] flex items-center justify-center">
            <div className="w-full max-w-[480px] lg:max-w-none group">
              <img
                src={faqImage}
                alt="Frequently Asked Questions"
                className="w-full h-auto object-contain pointer-events-none"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

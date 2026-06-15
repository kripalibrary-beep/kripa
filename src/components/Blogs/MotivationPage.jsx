import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SEO from '../SEO';

const MOTIVATIONS = [
  {
    id: 1,
    title: "Why Today Matters",
    excerpt: "Every successful person once had a day when they decided to start. That day can be today. Many students postpone their studies, thinking they will work harder tomorrow.",
    content: (
      <>
        <p className="mb-4">
          Every successful person once had a day when they decided to start. That day can be today. Many students postpone their studies, thinking they will work harder tomorrow. But success is built on what you do today, not what you plan for tomorrow.
        </p>
        <p className="mb-4">
          A single chapter completed today is better than a perfect study plan that never begins. Every page you read and every concept you learn brings you one step closer to your goal.
        </p>
        <p className="font-bold text-slate-800">
          Remember: <span className="font-normal text-slate-700">Today's effort becomes tomorrow's achievement.</span>
        </p>
      </>
    ),
    imagePath: "https://ik.imagekit.io/manish07/assets/Blog/motivation1_new.png",
    imageAlt: "Today matters"
  },
  {
    id: 2,
    title: "One More Hour of Study",
    excerpt: "There are times when you feel tired and want to stop studying. At that moment, challenge yourself to study for just one more hour.",
    content: (
      <>
        <p className="mb-4">
          There are times when you feel tired and want to stop studying. At that moment, challenge yourself to study for just one more hour.
        </p>
        <p className="mb-4">
          That extra hour can help you revise an important topic, solve additional questions, or strengthen weak areas. Over weeks and months, these extra hours add up and create a huge difference.
        </p>
        <p className="mb-4">
          Many successful students are not necessarily smarter; they simply put in a little more effort every day.
        </p>
        <p className="font-bold text-slate-800">
          Remember: <span className="font-normal text-slate-700">One more hour today can save many hours of regret tomorrow.</span>
        </p>
      </>
    ),
    imagePath: "https://ik.imagekit.io/manish07/assets/Blog/motivation2_new.png",
    imageAlt: "One more quiet hour"
  },
  {
    id: 3,
    title: "The Power of Consistency",
    excerpt: "Success is rarely the result of a single day of hard work. It is the result of small efforts repeated every day.",
    content: (
      <>
        <p className="mb-4">
          Success is rarely the result of a single day of hard work. It is the result of small efforts repeated every day.
        </p>
        <p className="mb-4">
          Studying for three hours daily is more effective than studying for fifteen hours once a week. Consistency helps your mind retain information, build habits, and improve gradually.
        </p>
        <p className="mb-4">
          Even on days when motivation is low, continue studying. Discipline will take you further than motivation ever can.
        </p>
        <p className="font-bold text-slate-800">
          Remember: <span className="font-normal text-slate-700">Consistency turns ordinary effort into extraordinary results.</span>
        </p>
      </>
    ),
    imagePath: "https://ik.imagekit.io/manish07/assets/Blog/motivation3_new.png",
    imageAlt: "The power of consistency"
  },
  {
    id: 4,
    title: "Winners Don't Quit",
    excerpt: "Every student faces challenges. Difficult subjects, low scores, and moments of self-doubt are part of the journey.",
    content: (
      <>
        <p className="mb-4">
          Every student faces challenges. Difficult subjects, low scores, and moments of self-doubt are part of the journey.
        </p>
        <p className="mb-4">
          What separates winners from others is not talent but persistence. Winners keep going when things become difficult. They learn from mistakes and continue moving forward.
        </p>
        <p className="mb-4">
          Every failure contains a lesson. Every setback is a chance to improve.
        </p>
        <p className="font-bold text-slate-800">
          Remember: <span className="font-normal text-slate-700">Winners are not those who never fail; they are those who never quit.</span>
        </p>
      </>
    ),
    imagePath: "https://ik.imagekit.io/manish07/assets/Blog/motivation4_new.png",
    imageAlt: "Winners don't quit"
  },
  {
    id: 5,
    title: "Small Steps, Big Results",
    excerpt: "Big goals can seem overwhelming. Instead of focusing on the entire journey, focus on the next step.",
    content: (
      <>
        <p className="mb-4">
          Big goals can seem overwhelming. Instead of focusing on the entire journey, focus on the next step.
        </p>
        <p className="mb-4">
          Study one chapter. Solve one test. Learn one concept. Small actions performed consistently lead to remarkable achievements.
        </p>
        <p className="mb-4">
          A building is constructed brick by brick, and success is built effort by effort.
        </p>
        <p className="font-bold text-slate-800">
          Remember: <span className="font-normal text-slate-700">Small daily improvements create life-changing results.</span>
        </p>
      </>
    ),
    imagePath: "https://ik.imagekit.io/manish07/assets/Blog/motivation5_new.png",
    imageAlt: "Small steps, big results"
  }
];

// ─── Detail View ──────────────────────────────────────────────────────────────
function MotivationDetail({ motivation, onBack }) {
  return (
    <div className="w-full min-h-screen bg-white py-10 md:py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-[867px] mx-auto">
        <div className="w-full bg-white border border-[#D9D9D9] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-sm">

          {/* Hero Image */}
          <div className="w-full h-[240px] sm:h-[320px] md:h-[380px] relative overflow-hidden bg-slate-100">
            <img
              src={motivation.imagePath}
              alt={motivation.imageAlt}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = `https://placehold.co/800x450/e2e8f0/64748b?text=Image+Placeholder+%0A+(${motivation.imageAlt})`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 pb-6 sm:pb-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
                Motivation
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                {motivation.title}
              </h1>
            </div>
          </div>

          {/* Body */}
          <div className="px-6 sm:px-8 md:px-10 pt-7 pb-10">
            {/* Back button */}
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-600 transition-colors group mb-7"
            >
              <span className="text-base leading-none group-hover:-translate-x-1 transition-transform">←</span>
              Back to Motivation
            </button>

            {/* Content */}
            <div className="text-[15px] sm:text-base text-gray-700 leading-relaxed">
              {motivation.content}
            </div>

            {/* Divider */}
            <hr className="my-8 border-gray-200" />

            {/* Footer CTA */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-5 sm:p-7 text-center">
              <h3 className="text-base font-bold text-blue-900 mb-1">
                Stay motivated and focused
              </h3>
              <p className="text-sm text-blue-700 mb-4">
                Kripa Library provides the perfect environment to apply these principles and achieve your goals.
              </p>
              <button className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-95 transition-all">
                Join Kripa Library →
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ─── List Card ────────────────────────────────────────────────────────────────
function MotivationCard({ motivation, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full flex flex-col sm:flex-row bg-white border border-[#D9D9D9] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
    >
      {/* Image */}
      <div className="w-full sm:w-[220px] md:w-[260px] h-[200px] sm:h-auto shrink-0 overflow-hidden bg-slate-50 flex items-center justify-center p-4">
        <img
          src={motivation.imagePath}
          alt={motivation.imageAlt}
          className="w-full h-full object-contain rounded-xl"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = `https://placehold.co/800x450/e2e8f0/64748b?text=Image+Placeholder+%0A+(${motivation.imageAlt})`;
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">
            Motivation
          </span>
          <h3 className="font-bold text-xl md:text-2xl text-black leading-snug mb-3 group-hover:text-blue-600 transition-colors">
            {motivation.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
            {motivation.excerpt}
          </p>
        </div>

        <div className="flex justify-end mt-6">
          <button className="w-[110px] h-[36px] rounded-full border border-gray-300 text-[13px] font-semibold text-black flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all active:scale-95">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function MotivationPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  const selected = selectedId ? MOTIVATIONS.find(m => m.id === Number(selectedId)) : null;

  // Scroll to top when post selection changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedId]);

  if (selected) {
    return (
      <>
        <SEO 
          title={`Motivation: ${selected.title} | Kripa Library`}
          description={selected.excerpt}
        />
        <MotivationDetail motivation={selected} onBack={() => setSearchParams({})} />
      </>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] py-10 md:py-16 px-4 sm:px-6 font-sans">
      <SEO 
        title="Daily Motivation for Exams | Kripa Library"
        description="Stay motivated for UPSC, SSC, and other competitive exams with powerful articles from Kripa Library."
      />
      <div className="max-w-[1000px] mx-auto">
        
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors group mb-6"
        >
          <span className="text-base leading-none group-hover:-translate-x-1 transition-transform">←</span>
          Back
        </button>

        {/* Heading */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-black mb-2 leading-tight">
            Motivation
          </h2>
          <p className="text-sm text-gray-500">Find the drive and persistence to keep pushing forward on your journey.</p>
        </div>

        {/* List */}
        <div className="flex flex-col gap-6">
          {MOTIVATIONS.map((motivation) => (
            <MotivationCard
              key={motivation.id}
              motivation={motivation}
              onClick={() => setSearchParams({ id: motivation.id })}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { useNavigate } from 'react-router-dom';

const MOTIVATIONS = [
  {
    id: 1,
    title: "Why Today Matters",
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
    imagePath: "/src/assets/Blog/motivation1.png",
    imageAlt: "Today matters"
  },
  {
    id: 2,
    title: "One More Hour of Study",
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
    imagePath: "/src/assets/Blog/motivation2.png",
    imageAlt: "One more quiet hour"
  },
  {
    id: 3,
    title: "The Power of Consistency",
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
    imagePath: "/src/assets/Blog/motivation3.png",
    imageAlt: "The power of consistency"
  },
  {
    id: 4,
    title: "Winners Don't Quit",
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
    imagePath: "/src/assets/Blog/motivation4.png",
    imageAlt: "Winners don't quit"
  },
  {
    id: 5,
    title: "Small Steps, Big Results",
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
    imagePath: "/src/assets/Blog/motivation5.png",
    imageAlt: "Small steps, big results"
  }
];

export default function MotivationPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[1000px] mx-auto">
        
        {/* ── BACK BUTTON ── */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition-all duration-300 group mb-8 cursor-pointer bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md"
        >
          <span className="text-base font-bold transform group-hover:-translate-x-1 transition-transform duration-300">
            ←
          </span>
          Back
        </button>

        {/* ── HEADER ── */}
        <div className="mb-12 md:mb-16 border-b border-gray-200/60 pb-6">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-3">
            Motivation
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            Find the drive and persistence to keep pushing forward on your journey.
          </p>
        </div>

        {/* ── MOTIVATION ARTICLES LIST ── */}
        <div className="flex flex-col gap-16 md:gap-24">
          {MOTIVATIONS.map((item) => (
            <div key={item.id} className="flex flex-col bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100/60 hover:shadow-lg transition-shadow duration-300">
              
              {/* Image Section */}
              <div className="w-full bg-slate-50 flex items-center justify-center p-8 border-b border-slate-100">
                <div className="relative w-full max-w-2xl aspect-video rounded-xl overflow-hidden bg-slate-200 shadow-inner flex items-center justify-center">
                  <img 
                    src={item.imagePath} 
                    alt={item.imageAlt}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = `https://placehold.co/800x450/e2e8f0/64748b?text=Image+Placeholder+%0A+(${item.imageAlt})`;
                    }}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 sm:p-10 md:p-12">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                  {item.title}
                </h3>
                
                <div className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {item.content}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SELF_DEVELOPMENTS = [
  {
    id: 1,
    title: "How to Develop Mental Toughness",
    excerpt: "Mental toughness is the ability to stay strong and focused even when things become difficult. Every student faces challenges such as tough subjects, exam pressure...",
    paragraph1: "Mental toughness is the ability to stay strong and focused even when things become difficult. Every student faces challenges such as tough subjects, exam pressure, low scores, and distractions. What separates successful students from others is their ability to keep moving forward despite these obstacles.",
    paragraph2: "Developing mental toughness starts with accepting challenges instead of avoiding them. View every setback as an opportunity to learn and improve. Build discipline by studying consistently, even on days when motivation is low.",
    paragraph3: "A mentally strong student understands that success is a long journey. They do not give up after one failure or become overconfident after one success. Instead, they remain focused on their goals and continue improving every day.",
    takeaway: "Mental toughness is built through persistence, discipline, and the courage to keep going when things get difficult.",
    imagePath1: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165623.png",
    imageAlt1: "How to Develop Mental Toughness - Main View",
    imagePath2: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165623.png",
    imageAlt2: "How to Develop Mental Toughness - Detail View"
  },
  {
    id: 2,
    title: "How to Improve Focus and Concentration",
    excerpt: "Focus is one of the most important skills for academic success. In today's world, students are constantly surrounded by distractions such as social media...",
    paragraph1: "Focus is one of the most important skills for academic success. In today's world, students are constantly surrounded by distractions such as social media, notifications, and entertainment.",
    paragraph2: "To improve concentration, create a dedicated study environment free from distractions. Set clear goals for each study session and work on one task at a time. Short breaks between study sessions can also help maintain focus.",
    paragraph3: "Practices such as meditation, mindfulness, and deep breathing exercises improve mental clarity and attention span. The more you train your mind to focus, the stronger your concentration becomes.",
    takeaway: "Focus grows stronger through practice, consistency, and a distraction-free environment.",
    imagePath1: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165629.png",
    imageAlt1: "How to Improve Focus and Concentration - Main View",
    imagePath2: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165629.png",
    imageAlt2: "How to Improve Focus and Concentration - Detail View"
  },
  {
    id: 3,
    title: "The Power of Time Management",
    excerpt: "Time is one of the most valuable resources a student possesses. Every student has the same 24 hours in a day, but successful students use their time wisely...",
    paragraph1: "Time is one of the most valuable resources a student possesses. Every student has the same 24 hours in a day, but successful students use their time wisely.",
    paragraph2: "Good time management starts with planning. Create a daily schedule that includes study sessions, revision, exercise, and rest. Prioritize important tasks and avoid wasting time on activities that do not contribute to your goals.",
    paragraph3: "Breaking large tasks into smaller manageable steps makes them easier to complete. Consistent planning reduces stress and increases productivity.",
    takeaway: "Managing your time effectively allows you to achieve more with less stress.",
    imagePath1: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165636.png",
    imageAlt1: "The Power of Time Management - Main View",
    imagePath2: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165636.png",
    imageAlt2: "The Power of Time Management - Detail View"
  },
  {
    id: 4,
    title: "Why Sleep Is Essential for Student Success",
    excerpt: "Many students believe that sacrificing sleep leads to better results. However, sleep is essential for learning, memory, and concentration...",
    paragraph1: "Many students believe that sacrificing sleep leads to better results. However, sleep is essential for learning, memory, and concentration.",
    paragraph2: "During sleep, the brain processes information learned throughout the day and strengthens memory. Lack of sleep reduces focus, increases stress, and negatively affects academic performance.",
    paragraph3: "Most students require 7–9 hours of quality sleep each night. A healthy sleep schedule improves energy levels, mood, and overall productivity.",
    takeaway: "Sleep is not wasted time; it is an investment in better learning and performance.",
    imagePath1: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165645.png",
    imageAlt1: "Why Sleep Is Essential for Student Success - Main View",
    imagePath2: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165645.png",
    imageAlt2: "Why Sleep Is Essential for Student Success - Detail View"
  },
  {
    id: 5,
    title: "Building Effective Communication Skills",
    excerpt: "Communication is a valuable skill that benefits students in academics, interviews, and professional life. The ability to express ideas clearly and confidently...",
    paragraph1: "Communication is a valuable skill that benefits students in academics, interviews, and professional life. The ability to express ideas clearly and confidently creates opportunities for success.",
    paragraph2: "Good communication involves both speaking and listening. Practice speaking confidently, maintain eye contact, and organize your thoughts before expressing them.",
    paragraph3: "Reading books, participating in discussions, and giving presentations can significantly improve communication skills. Strong communication helps students build relationships and perform better in interviews and group discussions.",
    takeaway: "Effective communication builds confidence and opens doors to future opportunities.",
    imagePath1: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165655.png",
    imageAlt1: "Building Effective Communication Skills - Main View",
    imagePath2: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165655.png",
    imageAlt2: "Building Effective Communication Skills - Detail View"
  },
  {
    id: 6,
    title: "How to Build Self-Confidence",
    excerpt: "Self-confidence is believing in your ability to achieve your goals. It does not mean being perfect; it means trusting yourself even when facing challenges.",
    paragraph1: "Self-confidence is believing in your ability to achieve your goals. It does not mean being perfect; it means trusting yourself even when facing challenges.",
    paragraph2: "Confidence grows through preparation and action. Every chapter completed, every test attempted, and every challenge overcome strengthens your belief in yourself.",
    paragraph3: "Avoid comparing yourself to others. Focus on your own progress and celebrate small achievements. Positive self-talk and consistent effort are powerful confidence builders.",
    takeaway: "Confidence is built through action, preparation, and self-belief.",
    imagePath1: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165703.png",
    imageAlt1: "How to Build Self-Confidence - Main View",
    imagePath2: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165703.png",
    imageAlt2: "How to Build Self-Confidence - Detail View"
  },
  {
    id: 7,
    title: "Choosing the Right Career Path",
    excerpt: "Choosing a career is one of the most important decisions in life. The right career aligns with your interests, strengths, values, and long-term goals.",
    paragraph1: "Choosing a career is one of the most important decisions in life. The right career aligns with your interests, strengths, values, and long-term goals.",
    paragraph2: "Take time to explore different fields, understand job opportunities, and identify your passions. Seek guidance from mentors, teachers, and professionals who can provide valuable insights.",
    paragraph3: "Remember that career success is not only about income but also about personal satisfaction and growth.",
    takeaway: "Choose a career that matches your strengths, interests, and aspirations.",
    imagePath1: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_184921.png",
    imageAlt1: "Choosing the Right Career Path - Main View",
    imagePath2: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_184921.png",
    imageAlt2: "Choosing the Right Career Path - Detail View"
  },
  {
    id: 8,
    title: "Managing Stress and Anxiety as a Student",
    excerpt: "Stress and anxiety are common during exams and academic preparation. While a small amount of stress can motivate you, excessive stress can affect performance...",
    paragraph1: "Stress and anxiety are common during exams and academic preparation. While a small amount of stress can motivate you, excessive stress can affect performance and well-being.",
    paragraph2: "Managing stress begins with proper planning and preparation. Regular exercise, healthy sleep, and relaxation techniques such as deep breathing can significantly reduce anxiety.",
    paragraph3: "Avoid comparing yourself with others and focus on your own progress. Remember that exams are important, but they do not define your entire future.",
    takeaway: "Preparation, healthy habits, and a positive mindset are the best tools for managing stress and anxiety.",
    imagePath1: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165724.png",
    imageAlt1: "Managing Stress and Anxiety as a Student - Main View",
    imagePath2: "https://ik.imagekit.io/manish07/assets/Blog/Self_Development/Screenshot_2026-06-11_165724.png",
    imageAlt2: "Managing Stress and Anxiety as a Student - Detail View"
  }
];

// ─── Detail View ──────────────────────────────────────────────────────────────
function SelfDevelopmentDetail({ post, onBack }) {
  return (
    <div className="w-full min-h-screen bg-white py-10 md:py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-[867px] mx-auto">
        <div className="w-full bg-white border border-[#D9D9D9] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-sm">

          {/* Hero Image (Image 1) */}
          <div className="w-full h-[240px] sm:h-[320px] md:h-[380px] relative overflow-hidden bg-slate-100">
            <img
              src={post.imagePath1}
              alt={post.imageAlt1}
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/800x450/e2e8f0/64748b?text=Image+1+Placeholder+%0A+(${post.imageAlt1})`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 pb-6 sm:pb-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
                Self Development
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                {post.title}
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
              Back to Self Development
            </button>

            {/* Paragraph 1 & 2 */}
            <div className="text-[15px] sm:text-base text-gray-700 leading-relaxed mb-6 space-y-4">
              <p>{post.paragraph1}</p>
              <p>{post.paragraph2}</p>
            </div>

            {/* Paragraph 3 */}
            <div className="text-[15px] sm:text-base text-gray-700 leading-relaxed mb-6">
              <p>{post.paragraph3}</p>
            </div>

            {/* Key Takeaway box */}
            <div className="mt-6 rounded-2xl bg-blue-50 border border-blue-200 px-6 py-5">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                Key Takeaway
              </p>
              <p className="text-[15px] sm:text-base font-semibold text-blue-800 italic leading-snug">
                "{post.takeaway}"
              </p>
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
function SelfDevelopmentCard({ post, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full flex flex-col sm:flex-row bg-white border border-[#D9D9D9] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
    >
      {/* Image */}
      <div className="w-full sm:w-[220px] md:w-[260px] h-[200px] sm:h-auto shrink-0 overflow-hidden bg-slate-50 flex items-center justify-center p-4">
        <img
          src={post.imagePath1}
          alt={post.imageAlt1}
          className="w-full h-full object-contain rounded-xl"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/800x450/e2e8f0/64748b?text=Image+1+Placeholder+%0A+(${post.imageAlt1})`;
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">
            Self Development
          </span>
          <h3 className="font-bold text-xl md:text-2xl text-black leading-snug mb-3 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
            {post.excerpt}
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
export default function SelfDevelopmentPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = searchParams.get('id');

  const selected = selectedId ? SELF_DEVELOPMENTS.find(s => s.id === Number(selectedId)) : null;

  // Scroll to top when selection changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedId]);

  if (selected) {
    return <SelfDevelopmentDetail post={selected} onBack={() => setSearchParams({})} />;
  }

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] py-10 md:py-16 px-4 sm:px-6 font-sans">
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
            Self Development
          </h2>
          <p className="text-sm text-gray-500">Learn essential skills to develop yourself and achieve your maximum potential.</p>
        </div>

        {/* List */}
        <div className="flex flex-col gap-6">
          {SELF_DEVELOPMENTS.map((post) => (
            <SelfDevelopmentCard
              key={post.id}
              post={post}
              onClick={() => setSearchParams({ id: post.id })}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

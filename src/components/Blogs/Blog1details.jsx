import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Blog 1 hero + content images
const postImg1 = "https://ik.imagekit.io/manish07/assets/Blog/blog1-inner3.png";
const blog1Img1 = "https://ik.imagekit.io/manish07/assets/Blog/blog1-inner1.png";
const blog1Img2 = "https://ik.imagekit.io/manish07/assets/Blog/blog1-inner2.png";
const blog1Img3 = "https://ik.imagekit.io/manish07/assets/Blog/blog1-inner3.png";

// Blog 2 hero + content images
const postImg2 = "https://ik.imagekit.io/manish07/assets/Blog/blog2-inner2.png";
const blog2Img1 = "https://ik.imagekit.io/manish07/assets/Blog/blog2-inner1.png";
const blog2Img2 = "https://ik.imagekit.io/manish07/assets/Blog/blog2-inner2.png";
const blog2Img3 = "https://ik.imagekit.io/manish07/assets/Blog/blog2-inner3.png";

// Blog 3 hero + content images
const postImg3 = "https://ik.imagekit.io/manish07/assets/Blog/blog3-inner1.png";
const blog3Img1 = "https://ik.imagekit.io/manish07/assets/Blog/blog3-inner1.png";
const blog3Img2 = "https://ik.imagekit.io/manish07/assets/Blog/blog3-inner2.png";

const BLOGS = [
  {
    id: 1,
    title: "Building Discipline: The Secret to Exam Success",
    date: "15-08-2026",
    topic: "Motivation",
    heroImage: postImg1,
    intro:
      "Every student feels motivated at the beginning. The real challenge is continuing when motivation disappears. That's where discipline makes the difference.",
    sections: [
      {
        type: "heading",
        text: "🎯 Motivation Starts You, Discipline Finishes the Journey",
      },
      {
        type: "paragraph",
        text: "Every student feels motivated at the beginning of their preparation. The excitement of a new goal, a fresh timetable, and the dream of success all feel energising. But motivation is an emotion — it rises and falls. The real question is: what carries you forward when motivation disappears?",
      },
      {
        type: "image",
        src: blog1Img1,
        alt: "Student studying with discipline",
      },
      {
        type: "heading",
        text: "Why Discipline Matters",
      },
      {
        type: "list",
        items: [
          "Studying even when you don't feel like it",
          "Following a routine consistently",
          "Staying away from distractions",
          "Focusing on your long-term goals",
        ],
      },
      {
        type: "paragraph",
        text: "Success in exams is built through small daily efforts, not occasional bursts of motivation. A student who studies regularly for a few hours every day often achieves more than someone who studies intensely only once in a while.",
      },
      {
        type: "image",
        src: blog1Img2,
        alt: "Consistent daily study routine",
      },
      {
        type: "heading",
        text: "Beat Distractions",
      },
      {
        type: "paragraph",
        text: "Put your phone away, follow a study schedule, and choose a quiet environment. Every focused study session brings you one step closer to your goal. Distractions don't just steal minutes — they break the deep focus required for retention and understanding.",
      },
      {
        type: "image",
        src: blog1Img3,
        alt: "Distraction-free study space",
      },
      {
        type: "heading",
        text: "Remember",
      },
      {
        type: "paragraph",
        text: "You don't have to be perfect. You just have to be consistent. Progress over perfection is the mindset that separates toppers from the rest. Small wins, sustained over time, compound into extraordinary results.",
      },
      // Removed the duplicate blog1Img1 entry here to keep layout clean
      {
        type: "heading",
        text: "Final Thought",
      },
      {
        type: "quote",
        text: "Discipline is choosing what you want most over what you want now.",
      },
      {
        type: "paragraph",
        text: "Stay consistent, trust the process, and success will follow. Looking for a peaceful place to stay focused? Kripa Library offers a quiet and disciplined study environment designed for serious students preparing for exams.",
      },
    ],
  },
  {
    id: 2,
    title: "Most Common Mistakes Students Make in Competitive Exams",
    date: "15-08-2026",
    topic: "Self Development",
    heroImage: postImg2,
    intro:
      "Competitive exams are not just a test of knowledge — they are a test of strategy, consistency, and discipline. Many students work hard but still miss success because of a few common mistakes.",
    sections: [
      {
        type: "heading",
        text: "Common Mistakes Students Make",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Studying Without a Plan",
            text: "Random studying leads to confusion. A clear timetable helps you cover the syllabus effectively.",
          },
          {
            title: "Ignoring Revision",
            text: "Many students keep learning new topics but forget to revise old ones. Revision is the key to retention.",
          },
        ],
      },
      {
        type: "image",
        src: blog2Img1,
        alt: "Student planning a study schedule",
      },
      {
        type: "numbered",
        startFrom: 3,
        items: [
          {
            title: "Too Many Distractions",
            text: "Mobile phones, social media, and unnecessary breaks can reduce productivity significantly.",
          },
          {
            title: "Avoiding Mock Tests",
            text: "Mock tests help improve speed, accuracy, and time management. Skipping them is a costly mistake.",
          },
        ],
      },
      {
        type: "image",
        src: blog2Img2,
        alt: "Student taking a mock test",
      },
      {
        type: "numbered",
        startFrom: 5,
        items: [
          {
            title: "Comparing Yourself to Others",
            text: "Everyone has a different learning pace. Focus on your own progress instead of competing with others.",
          },
        ],
      },
      {
        type: "image",
        src: blog2Img3,
        alt: "Focused student studying",
      },
      {
        type: "heading",
        text: "The Winning Formula",
      },
      {
        type: "checklist",
        items: [
          "Study with a plan",
          "Revise regularly",
          "Practice mock tests",
          "Stay consistent",
          "Believe in yourself",
        ],
      },
      // Removed the duplicate blog2Img1 entry here to prevent image repetition
      {
        type: "heading",
        text: "Final Thought",
      },
      {
        type: "paragraph",
        text: "Success in competitive exams doesn't come from avoiding failure — it comes from learning from your mistakes and improving every day.",
      },
      {
        type: "quote",
        text: "Every topper was once a beginner. Stay focused, stay disciplined, and keep moving forward.",
      },
    ],
  },
  {
    id: 3,
    title: "Silent Study Environment: Why It Matters for Exam Success",
    date: "15-08-2026",
    topic: "Inspiration",
    heroImage: postImg3,
    intro:
      "Preparing for competitive exams requires more than just hard work — it requires deep focus. Even the best study plan can fail if you're constantly distracted. That's why a silent study environment is one of the biggest advantages for students aiming for success.",
    sections: [
      {
        type: "heading",
        text: "Better Focus, Better Results",
      },
      {
        type: "paragraph",
        text: "A quiet environment helps your mind concentrate on what truly matters. With fewer distractions, you can achieve more in less time.",
      },
      {
        type: "list",
        items: [
          "Understand concepts faster",
          "Remember information longer",
          "Study more effectively",
          "Complete your goals on time",
        ],
      },
      {
        type: "image",
        src: blog3Img1,
        alt: "Student studying in a silent environment",
      },
      {
        type: "heading",
        text: "Fewer Distractions, More Productivity",
      },
      {
        type: "paragraph",
        text: "Constant noise, phone notifications, and interruptions break concentration. A silent study space allows you to stay fully engaged with your books and preparation.",
      },
      {
        type: "image",
        src: blog3Img2,
        alt: "Distraction-free study space",
      },
      {
        type: "heading",
        text: "A Habit of Success",
      },
      {
        type: "paragraph",
        text: "Many top-performing students prefer libraries and study rooms because they provide a disciplined atmosphere that encourages consistency and focus.",
      },
      // Removed duplicate blog3Img1 reference here
      {
        type: "heading",
        text: "Final Thought",
      },
      {
        type: "paragraph",
        text: "Success in exams is often determined by how well you can focus. A silent environment reduces distractions, improves concentration, and helps you make the most of every study session.",
      },
      {
        type: "quote",
        text: "The quieter your surroundings, the stronger your focus becomes.",
      },
      // Removed duplicate blog3Img2 reference here to maintain uniquely populated layouts
    ],
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = BLOGS.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
        <h1 className="text-3xl font-bold text-gray-800">Post Not Found</h1>
        <p className="text-gray-500">The blog post you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-2 px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white py-10 md:py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-[867px] mx-auto">
        <div className="w-full bg-white border border-[#D9D9D9] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-sm">
          
          {/* Hero Image inside the card */}
          <div className="w-full h-[220px] sm:h-[300px] md:h-[360px] relative overflow-hidden">
            <img
              src={blog.heroImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 pb-6 sm:pb-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
                {blog.topic}
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                {blog.title}
              </h1>
              <p className="text-xs text-gray-300 mt-1">Published: {blog.date}</p>
            </div>
          </div>

          {/* Article Body inside the card */}
          <div className="px-6 sm:px-8 md:px-10 pt-7 pb-10">

            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-600 transition-colors group mb-7"
            >
              <span className="text-base leading-none group-hover:-translate-x-1 transition-transform">←</span>
              Back to Blog
            </button>

            {/* Intro lead */}
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-4 mb-8 italic">
              {blog.intro}
            </p>

            {/* Dynamic sections */}
            {blog.sections.map((section, idx) => {
              switch (section.type) {
                case 'heading':
                  return (
                    <h2
                      key={idx}
                      className="text-lg sm:text-xl font-bold text-gray-900 mt-8 mb-3 leading-snug"
                    >
                      {section.text}
                    </h2>
                  );

                case 'paragraph':
                  return (
                    <p
                      key={idx}
                      className="text-[14px] sm:text-[15px] text-gray-700 leading-relaxed mb-4"
                    >
                      {section.text}
                    </p>
                  );

                case 'list':
                  return (
                    <ul key={idx} className="mb-5 space-y-2 pl-1">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-gray-700">
                          <span className="mt-[6px] w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );

                case 'numbered':
                  return (
                    <ol key={idx} className="mb-5 space-y-4 pl-1">
                      {section.items.map((item, i) => {
                        const num = (section.startFrom || 1) + i;
                        return (
                          <li key={i} className="flex items-start gap-4">
                            <span className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {num}
                            </span>
                            <div>
                              <p className="text-[14px] sm:text-[15px] font-semibold text-gray-900 mb-0.5">{item.title}</p>
                              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">{item.text}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                  );

                case 'checklist':
                  return (
                    <ul key={idx} className="mb-5 space-y-2 pl-1">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-[14px] sm:text-[15px] text-gray-700 font-medium">
                          <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 text-xs font-bold flex items-center justify-center shrink-0">✔</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );

                case 'image':
                  return (
                    <div key={idx} className="my-6 rounded-2xl overflow-hidden border border-[#D9D9D9]">
                      <img
                        src={section.src}
                        alt={section.alt}
                        className="w-full object-cover max-h-[340px]"
                      />
                    </div>
                  );

                case 'quote':
                  return (
                    <blockquote
                      key={idx}
                      className="my-7 py-5 px-5 sm:px-7 bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl"
                    >
                      <p className="text-base sm:text-lg font-semibold text-blue-800 leading-snug italic">
                        "{section.text}"
                      </p>
                    </blockquote>
                  );

                default:
                  return null;
              }
            })}

            {/* Divider */}
            <hr className="my-8 border-gray-200" />

            {/* Footer CTA */}
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-5 sm:p-7 text-center">
              <h3 className="text-base font-bold text-blue-900 mb-1">
                Looking for a focused study environment?
              </h3>
              <p className="text-sm text-blue-700 mb-4">
                Kripa Library offers a quiet, disciplined space designed for serious exam aspirants.
              </p>
              <button className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-95 transition-all">
                Visit Kripa Library →
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
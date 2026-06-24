import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../SEO';

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

import postImg5 from '../../assets/Blog/blog/005371cf4ac7194675cc9791dc903cb42a5f525a-1066x1066.avif';

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
  {
    id: 4,
    title: "UPSC 2026 Prep: Why Reading Rooms in East Delhi are the Secret Weapon for Success",
    date: "17-06-2026",
    topic: "UPSC Prep",
    heroImage: postImg1,
    intro:
      "Preparing for the UPSC Civil Services Examination (CSE) is a long-term marathon, not a sprint. Success in UPSC 2026 demands not just high-quality books, but an environment that supports 8 to 10 hours of daily focused self-study. Let's look at why local reading rooms in East Delhi, like Kripa Library, have become the secret weapon for IAS and IPS aspirants.",
    sections: [
      {
        type: "heading",
        text: "📚 The UPSC Marathon: Consistency Over Everything",
      },
      {
        type: "paragraph",
        text: "The syllabus for the UPSC Civil Services Examination is vast, covering everything from history and geography to current affairs and CSAT. While buying the right books and joining premium coaching classes is a start, the actual battle is won during self-study. A candidate needs to maintain a strict daily routine for 12-18 months. Without a highly-disciplined environment, it is incredibly easy to lose consistency.",
      },
      {
        type: "heading",
        text: "🏡 Why Studying at Home Can Hold You Back",
      },
      {
        type: "paragraph",
        text: "For many students in East Delhi localities like Mandawali, Laxmi Nagar, or Shakarpur, studying at home is filled with subtle distractions. The doorbell ringing, family conversations, social invitations, household chores, or simply the proximity of your bed can break your focus. In UPSC preparation, even a 10-minute distraction can derail a deep-work flow state that took 30 minutes to enter.",
      },
      {
        type: "heading",
        text: "🚀 The Reading Room Advantage for IAS/IPS Aspirants",
      },
      {
        type: "paragraph",
        text: "A professional reading room serves as a dedicated cognitive workspace. When you enter a library, your brain receives a psychological trigger: 'It is time to work.' Here is how a premium reading room elevates your preparation:",
      },
      {
        type: "list",
        items: [
          "Complete, pin-drop silence that allows you to read heavy texts (like Laxmikanth or Spectrum) without distraction.",
          "Peer Motivation: Seeing other students studying intensely for hours pushes you to work harder and study longer.",
          "Custom Shift Timing: Whether you study best in the early morning or prefer the quiet of a 24-hour night shift, reading rooms fit your biological clock.",
          "High-Speed Internet: Redundant, fast Wi-Fi makes downloading PDFs, watching online lectures, and taking online mock tests completely seamless."
        ],
      },
      {
        type: "heading",
        text: "💡 Key Features to Look For in an East Delhi Study Room",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Private Study Cabins",
            text: "Individual partition walls are essential to prevent eye-strain and visual distractions from other students sitting next to you.",
          },
          {
            title: "Ergonomic Chairs",
            text: "Since you will be sitting for 8+ hours daily, proper lumbar and neck support is vital to prevent back pain and physical exhaustion.",
          },
          {
            title: "Dedicated Power Outlets",
            text: "Ensure each cabin has a separate power plug so your laptop, iPad, or mobile phone remains fully charged during online classes.",
          }
        ],
      },
      {
        type: "quote",
        text: "UPSC preparation is 10% gathering resources and 90% maintaining a distraction-free environment to digest them.",
      },
      {
        type: "heading",
        text: "Final Thought",
      },
      {
        type: "paragraph",
        text: "If you are targeting UPSC 2026 or other competitive exams, invest in a dedicated study space. Kripa Library in Mandawali, East Delhi offers 24/7 access, soundproof environments, and premium cabin seating specifically designed to maximize your exam preparation productivity.",
      },
    ],
  },
  {
    id: 5,
    title: "The Aliganj Fire Tragedy: Why Student Safety in Commercial Study Spaces Can No Longer Be Ignored",
    date: "23-06-2026",
    topic: "Awareness",
    heroImage: postImg5,
    intro:
      "The recent devastating fire in the Aliganj area of Lucknow has sent shockwaves through the student and teaching communities. What started as a regular Monday afternoon for dozens of young aspirants inside a commercial building turned into a horrific nightmare, claiming at least 15 young lives due to severe suffocation and trapping.",
    sections: [
      {
        type: "paragraph",
        text: "As a platform dedicated to helping students find safe, productive spaces to study, we at librarynear.com are deeply heartbroken by this entirely preventable tragedy. Our deepest condolences go out to the grieving families.",
      },
      {
        type: "paragraph",
        text: "But beyond grief, this incident demands a hard, urgent conversation about the hidden dangers lurking in the unregulated 'commercial libraries' mushrooming across our cities.",
      },
      {
        type: "heading",
        text: "The Reality of Commercial 'Learning Spaces'",
      },
      {
        type: "paragraph",
        text: "In competitive exam hubs, private digital libraries have become essential sanctuaries for students. They offer air conditioning, high-speed Wi-Fi, and a quiet environment to study for hours.",
      },
      {
        type: "paragraph",
        text: "However, as the Aliganj incident revealed, many of these spaces are death traps operating under the radar:",
      },
      {
        type: "list",
        items: [
          "Residential vs. Commercial Violations: The building involved was officially approved only for residential use but was packed with a library, an animation center, a coaching hub, and a gaming zone.",
          "Single Exit Points: High-density study rooms are frequently crammed into tight spaces with only one narrow staircase, making emergency evacuation impossible.",
          "Zero Smoke Ventilation: To keep AC rooms quiet and cool, windows are often permanently sealed, blocked by plywood, or covered with soundproofing material. When the fire broke out in the AC duct, toxic smoke had nowhere to go, causing rapid suffocation.",
        ],
      },
      {
        type: "heading",
        text: "A Safety Checklist for Students: How to Evaluate Your Study Space",
      },
      {
        type: "paragraph",
        text: "As students, your focus should be on your exams, not whether the roof over your head is safe. However, until strict enforcement is locked in place, you must audit your own study environments.",
      },
      {
        type: "paragraph",
        text: "Before paying a monthly fee at a local private library or coaching center, check for these five critical safety factors:",
      },
      {
        type: "numbered",
        items: [
          {
            title: "Are there at least two clear exits?",
            text: "Never study in a basement or upper floor that relies on a single, narrow staircase. Look for a clearly marked, unobstructed secondary fire exit.",
          },
          {
            title: "Can the windows actually open?",
            text: "Avoid completely sealed glass structures or rooms where windows are blocked by heavy iron grills that cannot be unlatched from the inside.",
          },
          {
            title: "Are smoke alarms and fire extinguishers visible?",
            text: "Look around the room. Are there functional smoke detectors on the ceiling? Is there a fire extinguisher nearby, and is the pressure gauge in the green zone?",
          },
          {
            title: "Is the electrical wiring exposed or overloaded?",
            text: "Air conditioners, dozens of charging laptops, and heavy lighting put immense strain on commercial grids. If you see sparking, loose wires, or frequent trips, report it immediately.",
          },
          {
            title: "Does the building have a Fire NOC?",
            text: "Don’t be afraid to ask the library owner or manager if they possess a valid Fire Safety No-Objection Certificate (NOC). A legitimate business will have no issue showing it to you.",
          },
        ],
      },
      {
        type: "heading",
        text: "Demanding Accountability",
      },
      {
        type: "paragraph",
        text: "The government has initiated a high-level Special Investigation Team (SIT) probe and arrested building owners, but administrative action after a disaster cannot bring back lost lives.",
      },
      {
        type: "paragraph",
        text: "We need a systemic overhaul. Local development authorities must strictly audit every private digital library, coaching institute, and study hall. If a space lacks proper fire escapes, ventilation, or safety clearances, it should not be allowed to operate—period.",
      },
      {
        type: "heading",
        text: "Final Thought",
      },
      {
        type: "paragraph",
        text: "To our student community: Your dreams are incredibly important, but your life is irreplaceable. Be vigilant about where you sit down to study. If you notice a library operating under dangerous, cramped conditions, raise your voice, report it to local authorities, and look for a safer space.",
      },
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
      <SEO 
        title={`${blog.title} | Kripa Library`}
        description={blog.intro}
      />
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
import React, { useState, useEffect, useRef } from 'react';

// Replace these with your actual image paths for all 8 blogs
const img1 = "https://ik.imagekit.io/manish07/assets/Blog/study-tips/Screenshot_2026-06-11_183346.png";
const img2 = "https://ik.imagekit.io/manish07/assets/Blog/study-tips/Screenshot_2026-06-11_183217.png";
const img3 = "https://ik.imagekit.io/manish07/assets/Blog/study-tips/Screenshot_2026-06-11_183246.png";
const img4 = "https://ik.imagekit.io/manish07/assets/Blog/study-tips/Screenshot_2026-06-11_183252.png";
const img5 = "https://ik.imagekit.io/manish07/assets/Blog/study-tips/Screenshot_2026-06-11_183257.png";
const img6 = "https://ik.imagekit.io/manish07/assets/Blog/study-tips/Screenshot_2026-06-11_183302.png";
const img7 = "https://ik.imagekit.io/manish07/assets/Blog/study-tips/Screenshot_2026-06-11_183318.png"; // Add your 7th image
const img8 = "https://ik.imagekit.io/manish07/assets/Blog/study-tips/Screenshot_2026-06-11_183324.png";   // Add your 8th image   



export default function SmartStudyTips() {
  const blogPosts = [
    { 
      id: 1, 
      title: "1. Choose a Proper Study Environment", 
      date: "15-08-2026", 
      image: img1,
      content: (
        <div className="text-gray-800 space-y-5">
          <p className="text-base sm:text-lg leading-relaxed">
            Your environment plays a fundamental role in your concentration level and overall study efficiency. It is a scientifically proven psychological fact that your brain associates physical locations with specific habits and activities. If you try to study on your bed, your brain will naturally release sleep-inducing hormones, making you feel lethargic and easily distracted within minutes.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            To maximize your output, you must intentionally design your space. A high-quality study room should always be:
          </p>
          <ul className="list-disc pl-8 text-base sm:text-lg space-y-2">
            <li><strong>Completely quiet and disciplined:</strong> Free from unpredictable household noises, television sounds, and casual family conversations.</li>
            <li><strong>Comfortable yet ergonomic:</strong> Invest in a good desk and a proper chair that supports your posture, ensuring you don't suffer from back pain or neck strain during long hours of preparation.</li>
            <li><strong>Perfectly well-lit:</strong> Utilize natural sunlight during the day if possible, or use a bright, cool-toned LED desk lamp at night to prevent eye fatigue.</li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed">
            If your home environment is too noisy or chaotic, moving to a structured place like a <strong>study library in Delhi</strong> is highly recommended. Being surrounded by other focused peers creates a positive peer pressure that helps students stay serious and maintain extreme consistency in their preparation journey.
          </p>
        </div>
      )
    },
    { 
      id: 2, 
      title: "2. Keep Mobile Phones Away While Studying", 
      date: "16-08-2026", 
      image: img2, 
      content: (
        <div className="text-gray-800 space-y-5">
          <p className="text-base sm:text-lg leading-relaxed">
            Mobile phones are undeniably the biggest distraction for modern students. App developers specifically design social media and games to trigger dopamine hits in your brain, making it incredibly hard to put the phone down once you pick it up. Even having the phone visible on your desk drains your cognitive energy, as your brain actively has to work to ignore it.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            To gain absolute control over this major distraction, strictly follow these habits:
          </p>
          <ul className="list-disc pl-8 text-base sm:text-lg space-y-2">
            <li><strong>Use Airplane Mode:</strong> Keep your phone on silent, "Do Not Disturb," or ideally airplane mode to stop incoming notifications completely.</li>
            <li><strong>Create Physical Distance:</strong> Do not keep the phone on your desk. Put it inside your backpack, zip it up, or leave it in another room. Out of sight means out of mind.</li>
            <li><strong>Use App Blockers:</strong> If you use your phone or tablet for studying, install apps that temporarily block social media and entertainment apps during your study hours.</li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed">
            Remember, even a quick 30-second check of a notification can break your "flow state," requiring up to 15 to 20 minutes for your brain to regain that same level of deep focus.
          </p>
        </div>
      ) 
    },
    { 
      id: 3, 
      title: "3. Follow a Fixed Study Schedule", 
      date: "17-08-2026", 
      image: img3, 
      content: (
        <div className="text-gray-800 space-y-5">
          <p className="text-base sm:text-lg leading-relaxed">
            Without a proper, written routine, it becomes incredibly easy to lose focus and waste the day deciding what to study. A fixed schedule removes decision fatigue. When your brain knows exactly what it is supposed to be doing at 10:00 AM, it naturally falls into a rhythm, reducing procrastination.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            To build a sustainable and highly effective routine, try this method:
          </p>
          <ul className="list-disc pl-8 text-base sm:text-lg space-y-2">
            <li><strong>Use Time Blocks:</strong> Study in fixed, focused time blocks of 50 to 60 minutes. Do not try to study for three hours straight, as your brain's retention drops significantly after an hour.</li>
            <li><strong>Mandatory Short Breaks:</strong> Take strict, short breaks of 5 to 10 minutes between blocks. Step away from your desk to stretch or get water.</li>
            <li><strong>Set Daily Micro-Goals:</strong> Before you even open a book, write down 3 to 4 specific topics you want to complete that day. Knowing the finish line keeps you motivated.</li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed">
            A disciplined routine trains your biological clock. Eventually, sitting down to study at your designated times will feel effortless, and your concentration will improve naturally.
          </p>
        </div>
      ) 
    },
    { 
      id: 4, 
      title: "4. Train Your Mind for Better Focus", 
      date: "18-08-2026", 
      image: img4, 
      content: (
        <div className="text-gray-800 space-y-5">
          <p className="text-base sm:text-lg leading-relaxed">
            A common misconception is that focus is an innate talent—something you are either born with or not. In reality, focus is exactly like a muscle. If you haven't been using it, it will be weak. But with consistent, daily training, it can be developed to sustain hours of deep, uninterrupted learning.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            You can dramatically improve your mental stamina by incorporating these practices:
          </p>
          <ul className="list-disc pl-8 text-base sm:text-lg space-y-2">
            <li><strong>Daily Mindfulness:</strong> Practice deep breathing exercises or meditation for just 5 to 10 minutes every morning. This trains your brain to notice when it gets distracted and bring its attention back to the present moment.</li>
            <li><strong>Build Momentum:</strong> Start your study sessions with easier, more interesting topics to build your confidence and get into the zone, before tackling the hardest subjects.</li>
            <li><strong>Progressive Overload:</strong> If you can currently only focus for 20 minutes, don't force a 2-hour session. Study for 20 minutes this week, 25 minutes next week, and gradually increase your duration.</li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed">
            Over time, your mind becomes incredibly stable. You will find yourself reading complex materials without your thoughts constantly wandering away.
          </p>
        </div>
      ) 
    },
    { 
      id: 5, 
      title: "5. Keep Your Study Table Clean and Simple", 
      date: "19-08-2026", 
      image: img5, 
      content: (
        <div className="text-gray-800 space-y-5">
          <p className="text-base sm:text-lg leading-relaxed">
            There is a very famous saying: "A cluttered desk represents a cluttered mind." When your study area is overflowing with old papers, wrappers, multiple random books, and unnecessary gadgets, it creates visual noise. Your brain is forced to process all of these items subconsciously, which drains the mental energy you should be using to study.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Embrace minimalism for your study environment. Ensure your desk contains absolutely nothing but:
          </p>
          <ul className="list-disc pl-8 text-base sm:text-lg space-y-2">
            <li><strong>Current Materials Only:</strong> The specific textbook, notebook, and syllabus for the exact subject you are studying right now. Put all other books on a shelf.</li>
            <li><strong>Essential Stationery:</strong> Keep a few pens, a highlighter, and a pencil. You do not need an overflowing pencil case.</li>
            <li><strong>Hydration:</strong> A simple water bottle to keep you hydrated without needing to constantly leave the room.</li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed">
            Take 2 minutes at the end of every day to clear your desk. Sitting down to a perfectly clean, empty space the next morning provides a massive psychological boost and immediate mental clarity.
          </p>
        </div>
      ) 
    },
    { 
      id: 6, 
      title: "6. Avoid Talking and Unnecessary Interaction", 
      date: "20-08-2026", 
      image: img6, 
      content: (
        <div className="text-gray-800 space-y-5">
          <p className="text-base sm:text-lg leading-relaxed">
            Human interaction is wonderful, but during study hours, it is the enemy of deep work. Many students make the mistake of studying in groups that quickly turn into gossip sessions, or they sit in areas where family members constantly walk by and ask questions. Even small, seemingly harmless conversations can completely derail your train of thought.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            To protect your focus, you must set strict boundaries:
          </p>
          <ul className="list-disc pl-8 text-base sm:text-lg space-y-2">
            <li><strong>Zero Chatting Rule:</strong> Make a firm decision to avoid chatting, texting, or making phone calls during your dedicated study blocks.</li>
            <li><strong>Library Etiquette:</strong> If you are in a study room or library, respect the silence. Treat it as a sacred space for learning. If you must discuss a doubt with a friend, step completely outside the study zone.</li>
            <li><strong>Communicate Boundaries:</strong> Politely inform your family members or roommates of your study schedule so they know not to disturb you during those hours.</li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed">
            Staying locked in "study mode" without external social interruptions is vital for digesting complex competitive exam syllabuses efficiently.
          </p>
        </div>
      ) 
    },
    { 
      id: 7, 
      title: "7. Take Proper Breaks", 
      date: "21-08-2026", 
      image: img7, 
      content: (
        <div className="text-gray-800 space-y-5">
          <p className="text-base sm:text-lg leading-relaxed">
            It is a massive misconception that studying for six hours straight without moving makes you a better student. In reality, continuous, unbroken studying leads to severe mental fatigue, burnout, and a sharp drop in memory retention. Your brain requires downtime to process and store the information you just read into your long-term memory.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            However, not all breaks are equal. Taking a break to scroll through Instagram will actually drain your brain further. Follow this protocol instead:
          </p>
          <ul className="list-disc pl-8 text-base sm:text-lg space-y-2">
            <li><strong>The 45-60 Rule:</strong> Study intensely for 45 to 60 minutes, and then immediately stop.</li>
            <li><strong>Take Active Breaks:</strong> Use your 5 to 10-minute break to stand up, stretch your back, walk around the room, and drink a glass of water to oxygenate your brain.</li>
            <li><strong>Rest Your Eyes:</strong> Follow the 20-20-20 rule. Look at something 20 feet away for 20 seconds to relax your eye muscles, especially if you study on a laptop.</li>
          </ul>
          <p className="text-base sm:text-lg leading-relaxed">
            Proper, screen-free breaks will refresh your nervous system, ensuring you return to the next study session with just as much energy as the first.
          </p>
        </div>
      ) 
    },
    { 
      id: 8, 
      title: "8. Stay Consistent, Not Perfect", 
      date: "22-08-2026", 
      image: img8, 
      content: (
        <div className="text-gray-800 space-y-5">
          <p className="text-base sm:text-lg leading-relaxed">
            Many ambitious students fall into the trap of perfectionism. They create an impossibly strict 14-hour study timetable, fail to follow it by day three, get completely demoralized, and end up studying nothing for the rest of the week. This all-or-nothing mindset is the quickest way to fail competitive exams.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Success in exams like UPSC, SSC, or banking is a marathon, not a sprint. Instead of perfection, strive for relentless consistency:
          </p>
          <ul className="list-disc pl-8 text-base sm:text-lg space-y-2">
            <li><strong>Value Daily Output:</strong> Realize that studying a highly focused 5 hours every single day is vastly superior to studying 12 hours one day and zero hours the next.</li>
            <li><strong>Forgive Bad Days:</strong> If you get sick, distracted, or have an off-day, do not panic. Simply reset and ensure you get back on track the very next morning.</li>
            <li><strong>Track Your Progress:</strong> Keep a simple calendar and cross off the days you hit your minimum study targets. Watching that chain grow will keep you motivated.</li>
          </ul>
          
          <div className="pt-6 mt-6 border-t border-gray-200">
            <h4 className="text-2xl font-bold text-black mb-4">Final Thoughts</h4>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Avoiding distractions is not about sheer willpower or forcing yourself to suffer—it is about intelligently building systems, forming habits, and intentionally choosing the right environment. A peaceful, disciplined study space does the heavy lifting for you, greatly improving your performance and results.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              If you are studying from home and struggling to find peace, looking for a dedicated quiet study room in Delhi or near the Mandawali area can be the turning point in your preparation.
            </p>
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl shadow-sm">
              <p className="text-lg leading-relaxed font-semibold text-blue-800">
                At Kripa Library, students get a completely silent, highly focused, and professionally disciplined environment. It is custom-designed for serious aspirants aiming for exam success without the everyday distractions of the outside world.
              </p>
            </div>
          </div>
        </div>
      ) 
    },
  ];

  const [selectedPostId, setSelectedPostId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const scrollContainerRef = useRef(null);
  const modalScrollRef = useRef(null);
  const leftContentScrollRef = useRef(null);

  // ── DYNAMIC BREAKPOINT DETECTOR ──
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedPostId !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPostId]);

  // Scroll modal back to top when active post changes
  useEffect(() => {
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (leftContentScrollRef.current) {
      leftContentScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedPostId]);

  const maxIndex = Math.max(0, blogPosts.length - cardsToShow);

  const handleScrollSync = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    const estimatedIndex = Math.round(scrollLeft / (clientWidth / cardsToShow));
    if (estimatedIndex !== currentIndex && estimatedIndex <= maxIndex) {
      setCurrentIndex(estimatedIndex);
    }
  };

  const scrollToCard = (index) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth / cardsToShow;
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const targetIndex = Math.max(currentIndex - 1, 0);
    scrollToCard(targetIndex);
  };

  const handleNext = () => {
    const targetIndex = Math.min(currentIndex + 1, maxIndex);
    scrollToCard(targetIndex);
  };

  const selectedPost = blogPosts.find(post => post.id === selectedPostId);

  return (
    <section className="relative w-full bg-white py-10 md:py-16 px-4 sm:px-6 font-sans overflow-hidden">
      {/* ── CAROUSEL VIEW (Background) ── */}
      <div className="max-w-[1298px] mx-auto flex flex-col gap-6 md:gap-[41px]">
        
        {/* Header Section */}
        <div className="text-center sm:text-left max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-black mb-3 leading-tight tracking-tight">
            Smart Study Tips
          </h2>
          <p className="text-sm sm:text-lg font-normal text-gray-500 leading-relaxed">
            Practical tips to help you study smarter every day.
          </p>
        </div>

        {/* Carousel Window Container */}
        <div className="relative w-full px-1 py-2">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScrollSync}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-4"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {blogPosts.map((post) => (
              <div 
                key={post.id} 
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 flex flex-col px-2 sm:px-3 snap-start"
              >
                {/* Image Container Card */}
                <div className="w-full h-[200px] sm:h-[220px] lg:h-[240px] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-sm mb-4 bg-white shrink-0 p-2">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-contain rounded-[18px] sm:rounded-[22px] transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                {/* Content Box */}
                <div className="flex flex-col flex-grow items-start">
                  <h3 className="text-base sm:text-[17px] font-bold text-black leading-snug mb-2 min-h-[48px] line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-[14px] text-gray-500 mb-4 font-medium">
                    Date: {post.date}
                  </p>
                  
                  <button 
                    onClick={() => setSelectedPostId(post.id)}
                    className="w-[99px] h-[32px] rounded-full border border-gray-300 text-[12px] font-semibold text-black flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95 mt-auto"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        {maxIndex > 0 && (
          <div className="flex justify-center items-center gap-6 mt-2">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 transition-all ${
                currentIndex === 0 
                  ? 'opacity-30 cursor-not-allowed bg-gray-50' 
                  : 'bg-white hover:bg-gray-100 active:scale-90 shadow-sm'
              }`}
              aria-label="Previous Slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button 
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 transition-all ${
                currentIndex === maxIndex 
                  ? 'opacity-30 cursor-not-allowed bg-gray-50' 
                  : 'bg-white hover:bg-gray-100 active:scale-90 shadow-sm'
              }`}
              aria-label="Next Slide"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* ── MODAL POPUP VIEW ── */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setSelectedPostId(null)}
        >
          {/* Modal Container */}
          <div 
            ref={modalScrollRef}
            className="w-full max-w-[1400px] h-full max-h-[92vh] bg-[#FAFAFA] rounded-[32px] shadow-2xl overflow-y-auto lg:overflow-hidden scrollbar-none relative flex flex-col"
            onClick={(e) => e.stopPropagation()} 
          >
            
            {/* Sticky Header with Close Button */}
            <div className="sticky top-0 right-0 z-10 flex justify-end p-5 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA] to-transparent">
              <button 
                onClick={() => setSelectedPostId(null)}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 shadow-md transition-transform active:scale-90 border border-gray-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content Split */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 px-8 pb-12 sm:px-12 lg:h-0 lg:flex-grow lg:pb-8">
              
              {/* Left Content Area (Blog Detail) */}
              <div 
                ref={leftContentScrollRef}
                className="lg:w-2/3 bg-white p-8 sm:p-12 rounded-[32px] shadow-sm border border-gray-200 lg:h-full lg:overflow-y-auto scrollbar-none"
              >
                <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8 leading-tight">
                  {selectedPost.title}
                </h1>
                
                <div className="w-full h-[300px] sm:h-[450px] mb-10 rounded-2xl overflow-hidden bg-white shadow-inner p-4">
                   <img 
                     src={selectedPost.image} 
                     alt={selectedPost.title} 
                     className="w-full h-full object-contain rounded-xl transition-transform duration-700 hover:scale-105"
                   />
                </div>

                <div className="prose max-w-none text-gray-700">
                  {selectedPost.content}
                </div>
              </div>

              {/* Right Sidebar Area (Popular Posts) */}
              <div className="lg:w-1/3 lg:h-full lg:overflow-y-auto scrollbar-none">
                <div className="bg-white p-8 sm:p-10 rounded-[32px] shadow-sm border border-gray-200">
                  <h3 className="text-2xl font-bold text-black mb-8">Popular Tips</h3>
                  
                  <div className="flex flex-col gap-3">
                    {/* Maps ALL remaining posts */}
                    {blogPosts.filter(p => p.id !== selectedPost.id).map((post) => (
                      <div 
                        key={post.id} 
                        className="flex items-center gap-5 cursor-pointer group p-4 -mx-4 rounded-2xl hover:bg-gray-50 transition-all border-b border-gray-100 last:border-0"
                        onClick={() => setSelectedPostId(post.id)}
                      >
                        <div className="overflow-hidden rounded-lg flex-shrink-0 shadow-sm">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-[90px] h-[65px] object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-gray-700 group-hover:text-blue-600 line-clamp-2 transition-colors">
                          {post.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Shared scrollbar hiding CSS for both carousel and modal */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
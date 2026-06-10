import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const POEMS = [
  {
    id: 1,
    title: "Your Best",
    lines: [
      "If you always try your best",
      "Then you'll never have to wonder",
      "About what you could have done",
      "If you'd summoned all your thunder.",
      "",
      "And if your best",
      "Was not as good",
      "As you hoped it would be,",
      "You still could say,",
      "“I gave today",
      "All that I had in me.”",
    ],
  },
  {
    id: 2,
    title: "YOU CAN",
    lines: [
      "If you think you’re beaten, you are…",
      "If you think you dare not, you don’t…",
      "If you like to win…but think you can’t…",
      "It’s almost a cinch, YOU WON’T !!",
      "",
      "If you think you’ll lose, you’re lost…",
      "For out in the world you’ll find…",
      "Success begins with a fellow’s will…",
      "It’s all in a state of mind.",
      "",
      "If you think you’re outclassed, you are…",
      "You’ve got to think high to rise…",
      "You’ve got to be sure of yourself before…",
      "You can ever win the prize.",
      "",
      "Life’s battles don’t always go…",
      "To the stronger or faster man…",
      "But sooner or later the one who wins…",
      "IS THE ONE WHO THINKS HE CAN !!!",
    ],
  },
];

export default function PoemsPage() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 to-gray-100 py-12 md:py-20 px-4 sm:px-6 font-sans antialiased">
      <div className="max-w-[1200px] mx-auto">

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
            Literary Works
          </h2>
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            Explore inspired verses on perseverance, mindset, and personal growth.
          </p>
        </div>

        {/* ── POEMS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          {POEMS.map((poem) => {
            const isHovered = hoveredId === poem.id;
            
            return (
              <div
                key={poem.id}
                onMouseEnter={() => setHoveredId(poem.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative w-full bg-white border rounded-[24px] p-8 sm:p-10 transition-all duration-500 transform ease-out
                  ${isHovered 
                    ? 'border-blue-400 shadow-[0_20px_40px_rgba(59,130,246,0.08)] -translate-y-2' 
                    : 'border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
                  }`}
              >
                {/* Visual Accent Element: Floating Quote Graphic */}
                <div className={`absolute top-6 right-8 text-6xl font-serif font-bold select-none pointer-events-none transition-colors duration-500 
                  ${isHovered ? 'text-blue-100' : 'text-slate-100'}`}>
                  “
                </div>

                {/* Animated Interactive Top Border Tracker Strip */}
                <div className="absolute top-0 left-8 right-8 h-[3px] bg-slate-100 overflow-hidden rounded-full">
                  <div className={`h-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-700 ease-out 
                    ${isHovered ? 'w-full' : 'w-0'}`} 
                  />
                </div>

                {/* Poem Metadata */}
                <div className="text-center mb-8">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight mb-2">
                    {poem.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium italic text-blue-500/80 tracking-wide">
                    {poem.author}
                  </p>
                </div>

                {/* Divider Line */}
                <div className="relative flex items-center justify-center mb-8">
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                  <div className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-500 
                    ${isHovered ? 'bg-blue-500 scale-125' : 'bg-slate-300'}`} 
                  />
                </div>

                {/* Poem Lines Stanza Container */}
                <div className="flex flex-col items-center gap-1">
                  {poem.lines.map((line, i) =>
                    line === "" ? (
                      <div key={i} className="h-6 w-full" aria-hidden="true" />
                    ) : (
                      <p
                        key={i}
                        className={`text-[15px] sm:text-[16px] text-slate-700 font-medium leading-relaxed text-center w-full transition-colors duration-300
                          ${isHovered ? 'text-slate-900' : 'text-slate-700'}`}
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
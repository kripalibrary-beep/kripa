import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IKImage, IKContext } from 'imagekitio-react';

// ─── ImageKit Config ──────────────────────────────────────────────────────────
// Replace with your actual ImageKit URL endpoint from your dashboard
// e.g. https://ik.imagekit.io/your_imagekit_id
const IK_URL = "https://ik.imagekit.io/manish07";

// ─── Data ─────────────────────────────────────────────────────────────────────
// `image` is the file path inside your ImageKit media library
// e.g. if you uploaded to /Biography/kalam.png → write "/Biography/kalam.png"
const BIOGRAPHIES = [
  {
    id: 1,
    name: "Dr. A.P.J. Abdul Kalam",
    subtitle: "The People's President",
    born: "October 15, 1931 · Rameswaram, Tamil Nadu",
    image: "/Biography/kalam.png",
    lesson: "Success comes from determination, continuous learning, and believing in your dreams.",
    paragraphs: [
      "Dr. A.P.J. Abdul Kalam was one of India's most respected scientists and the 11th President of India. Born on October 15, 1931, in Rameswaram, Tamil Nadu, he came from a humble family and sold newspapers during his childhood to support his education.",
      "Despite financial difficulties, Kalam remained dedicated to his studies. He pursued aerospace engineering and later joined India's space and defense programs. His contributions to missile technology earned him the title \"Missile Man of India.\"",
      "In 2002, he became the President of India and was loved by people across the country, especially students. He spent much of his time encouraging young people to dream big and work hard.",
    ],
  },
  {
    id: 2,
    name: "Swami Vivekananda",
    subtitle: "The Power of Focus and Confidence",
    born: "January 12, 1863 · Kolkata",
    image: "/Biography/vivekananda.png",
    lesson: "Concentration, confidence, and hard work are the foundations of success.",
    paragraphs: [
      "Swami Vivekananda was a great Indian philosopher, spiritual leader, and youth icon. Born on January 12, 1863, in Kolkata, he showed exceptional intelligence and curiosity from a young age.",
      "He became a disciple of Sri Ramakrishna and dedicated his life to spreading the message of self-confidence, discipline, and service to humanity. In 1893, he represented India at the Parliament of the World's Religions in Chicago, where his speech earned worldwide admiration.",
      "Vivekananda strongly believed that education should build character and strengthen the mind. His teachings continue to inspire millions of students around the world.",
    ],
  },
  {
    id: 3,
    name: "Dr. B.R. Ambedkar",
    subtitle: "The Champion of Education",
    born: "April 14, 1891 · Mhow, Madhya Pradesh",
    image: "/Biography/ambedkar.png",
    lesson: "Education is the most powerful tool for overcoming challenges and creating opportunities.",
    paragraphs: [
      "Dr. Bhimrao Ramji Ambedkar was born on April 14, 1891, in Mhow, Madhya Pradesh. Despite facing social discrimination and hardships, he remained committed to education and became one of India's greatest scholars.",
      "He earned degrees from prestigious institutions such as Columbia University and the London School of Economics. Dr. Ambedkar played a key role in drafting the Constitution of India and worked tirelessly for equality and social justice.",
      "His life demonstrates how education can empower individuals and transform society.",
    ],
  },
  {
    id: 4,
    name: "Kalpana Chawla",
    subtitle: "Reaching for the Stars",
    born: "1962 · Karnal, Haryana",
    image: "/Biography/kalpana.png",
    lesson: "Never let your background limit your ambitions. Dream big and work relentlessly toward your goals.",
    paragraphs: [
      "Born in Karnal, Haryana, in 1962, Kalpana Chawla dreamed of flying from an early age. Her passion for aviation led her to study aerospace engineering and eventually move to the United States to pursue higher education.",
      "In 1997, she became the first woman of Indian origin to travel to space as a NASA astronaut. Her achievements inspired millions of young people across the world.",
      "Although she tragically lost her life during the Space Shuttle Columbia mission in 2003, her legacy continues to motivate future generations.",
    ],
  },
  {
    id: 5,
    name: "Srinivasa Ramanujan",
    subtitle: "The Mathematical Genius",
    born: "1887 · Tamil Nadu",
    image: "/Biography/ramanujan.png",
    lesson: "Passion, curiosity, and dedication can help you achieve greatness even in difficult circumstances.",
    paragraphs: [
      "Srinivasa Ramanujan was born in 1887 in Tamil Nadu and displayed extraordinary mathematical talent from a very young age. Despite having limited formal training and facing financial difficulties, he developed remarkable mathematical theories and formulas.",
      "His work attracted the attention of renowned mathematician G.H. Hardy, who invited him to England. Ramanujan made significant contributions to number theory, infinite series, and mathematical analysis.",
      "Today, he is remembered as one of the greatest mathematicians in history.",
    ],
  },
];

// ─── Reusable IKImage wrapper ─────────────────────────────────────────────────
// Handles loading transform + fallback automatically
function BioImage({ path, alt, className }) {
  return (
    <IKContext urlEndpoint={IK_URL}>
      <IKImage
        path={path}
        alt={alt}
        className={className}
        transformation={[{ quality: 80 }]}
        loading="lazy"
        lqip={{ active: true, quality: 10 }}
      />
    </IKContext>
  );
}

// ─── Detail View ──────────────────────────────────────────────────────────────
function BiographyDetail({ bio, onBack }) {
  return (
    <div className="w-full min-h-screen bg-white py-10 md:py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-[867px] mx-auto">
        <div className="w-full bg-white border border-[#D9D9D9] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-sm">

          {/* Hero Image */}
          <div className="w-full h-[240px] sm:h-[320px] md:h-[380px] relative overflow-hidden">
            <BioImage
              path={bio.image}
              alt={bio.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-8 pb-6 sm:pb-8">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
                Biography
              </span>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                {bio.name}
              </h1>
              <p className="text-sm text-blue-200 mt-1 font-medium">{bio.subtitle}</p>
              <p className="text-xs text-gray-300 mt-1">Born: {bio.born}</p>
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
              Back to Biographies
            </button>

            {/* Paragraphs */}
            {bio.paragraphs.map((para, i) => (
              <p key={i} className="text-[14px] sm:text-[15px] text-gray-700 leading-relaxed mb-4">
                {para}
              </p>
            ))}

            {/* Lesson box */}
            <div className="mt-6 rounded-2xl bg-blue-50 border border-blue-200 px-6 py-5">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                Lesson for Students
              </p>
              <p className="text-[15px] sm:text-base font-semibold text-blue-800 italic leading-snug">
                "{bio.lesson}"
              </p>
            </div>

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

// ─── List Card ────────────────────────────────────────────────────────────────
function BiographyCard({ bio, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full flex flex-col sm:flex-row bg-white border border-[#D9D9D9] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
    >
      {/* ImageKit image */}
      <div className="w-full sm:w-[180px] md:w-[200px] h-[180px] sm:h-auto shrink-0 overflow-hidden">
        <BioImage
          path={bio.image}
          alt={bio.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1 block">
            Biography
          </span>
          <h3 className="font-bold text-base md:text-[18px] text-black leading-snug mb-1 group-hover:text-blue-600 transition-colors">
            {bio.name}
          </h3>
          <p className="text-xs text-gray-400 mb-3">{bio.born}</p>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {bio.paragraphs[0]}
          </p>
        </div>

        <div className="flex justify-end mt-4">
          <button className="w-[99px] h-[32px] rounded-full border border-gray-300 text-[12px] font-semibold text-black flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all active:scale-95">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function BiographyPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  if (selected) {
    return <BiographyDetail bio={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="w-full min-h-screen bg-white py-10 md:py-16 px-4 sm:px-6 font-sans">
      <div className="max-w-[1298px] mx-auto">

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-blue-600 transition-colors group mb-6"
        >
          <span className="text-base leading-none group-hover:-translate-x-1 transition-transform">←</span>
          Back
        </button>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-black mb-2 leading-tight">
          Biography
        </h2>
        <p className="text-sm text-gray-400 mb-8">{BIOGRAPHIES.length} inspiring stories</p>

        {/* List */}
        <div className="flex flex-col gap-6 lg:max-w-[867px]">
          {BIOGRAPHIES.map((bio) => (
            <BiographyCard
              key={bio.id}
              bio={bio}
              onClick={() => setSelected(bio)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
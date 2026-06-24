import React from 'react';
import { useNavigate } from 'react-router-dom';

// Replace with your actual image paths
const postImg1 = "https://ik.imagekit.io/manish07/assets/Blog/recentpost1.png";
const postImg2 = "https://ik.imagekit.io/manish07/assets/Blog/recentpost2.png";
const postImg3 = "https://ik.imagekit.io/manish07/assets/Blog/recentpost3.png";

import postImg5 from '../../assets/Blog/blog/005371cf4ac7194675cc9791dc903cb42a5f525a-1066x1066.avif';

export default function RecentPosts() {
  const navigate = useNavigate();

  const posts = [
    {
      id: 5,
      title: "The Aliganj Fire Tragedy: Why Student Safety in Commercial Study Spaces Can No Longer Be Ignored",
      date: "23-06-2026",
      text: "The recent devastating fire in the Aliganj area of Lucknow has sent shockwaves through the student and teaching communities...",
      image: postImg5
    }
  ];

  const topics = [
    { label: "Poems",           path: "/topics/poems" },
    { label: "Quotes",          path: "/topics/quotes" },
    { label: "Biography",       path: "/topics/biography" },
    { label: "Motivation",      path: "/topics/motivation" },
    { label: "Self Development", path: "/topics/self-development" },
  ];

  return (
    <section className="w-full bg-white pt-2 pb-4 md:pt-4 md:pb-8 px-4 sm:px-6 font-sans overflow-x-hidden relative z-10">
      {/* Main Container */}
      <div className="max-w-[1298px] mx-auto flex flex-col lg:flex-row justify-center gap-10 lg:gap-[50px] xl:gap-[78px]">

        {/* Left Column: Recent Posts */}
        <div className="w-full lg:max-w-[810px] xl:max-w-[867px] flex flex-col mx-auto">

          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-black mb-6 md:mb-[41px] leading-tight text-center sm:text-left">
            Recent Posts
          </h2>

          <div className="flex flex-col gap-8 md:gap-10">
            {posts.map((post) => (
              <div
                key={post.id}
                className="w-full flex flex-col md:flex-row items-center bg-white border border-[#D9D9D9] rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4 md:p-6"
              >
                {/* --- CLEAN CIRCULAR IMAGE WRAPPER (OUTLINE REMOVED) --- */}
                <div className="w-[200px] sm:w-[240px] md:w-[260px] xl:w-[280px] aspect-square shrink-0 overflow-hidden rounded-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-between flex-grow w-full">
                  <div>
                    {/* Clickable title */}
                    <h3
                      onClick={() => navigate(`/blog/${post.id}`)}
                      className="font-bold text-base md:text-[18px] text-black leading-snug mb-2 cursor-pointer hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-[14px] text-gray-500 mb-3 font-medium">
                      Date: {post.date}
                    </p>

                    <p className="text-sm md:text-[14px] text-gray-700 leading-relaxed mb-6">
                      {post.text}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className="flex justify-end w-full mt-auto">
                    <button
                      onClick={() => navigate(`/blog/${post.id}`)}
                      className="w-[99px] h-[32px] rounded-full border border-gray-300 text-[12px] font-semibold text-black flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all active:scale-95"
                    >
                      Read More
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Topics Sidebar
        <div className="w-full lg:w-[320px] xl:w-[353px] shrink-0 mt-4 lg:mt-[81px]">
          <div className="w-full bg-white border border-[#D9D9D9] rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl sm:text-[24px] font-bold text-black mb-4 sm:mb-6">
              Topics
            </h3>

            <ul className="flex flex-col p-0 m-0 list-none">
              {topics.map((topic, index) => (
                <li
                  key={index}
                  onClick={() => navigate(topic.path)}
                  className={`py-3 text-sm sm:text-[15px] font-normal text-gray-500 cursor-pointer hover:text-blue-600 transition-colors ${
                    index !== topics.length - 1 ? 'border-b border-[#E5E5E5]' : ''
                  }`}
                >
                  {topic.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        */}

      </div>
    </section>
  );
}
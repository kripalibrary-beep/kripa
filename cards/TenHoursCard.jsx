import React from 'react';

const TenHoursCard = () => {
  return (
    <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center h-full">
      <div className="absolute -top-3 bg-white px-4 py-1 rounded-full shadow-md border border-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
        Most Popular
      </div>
      <p className="text-gray-400 text-xs font-medium mb-1">Duration</p>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-5xl font-bold text-gray-900">10</span>
        <span className="text-gray-500 font-medium">hrs</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">Ten Hours Access</h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
        This plan is designed for ambitious students aiming for big goals, uninterrupted stretch of quiet time.
      </p>
      <p className="text-green-600 font-bold text-sm mb-6">Original Price: Rs. 900</p>
      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
        Book Now
      </button>
    </div>
  );
};

export default TenHoursCard;
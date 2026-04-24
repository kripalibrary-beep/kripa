import React from 'react';

const PremiumCard = () => {
  return (
    <div className="relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center h-full">
      <div className="absolute -top-3 bg-white px-4 py-1 rounded-full shadow-md border border-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
        Full Access
      </div>
      <p className="text-gray-400 text-xs font-medium mb-1">Duration</p>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">Premium</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">Premium Access</h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
        Our premium plan features a private cabin with a very comfortable chair. It's built to keep you relaxed and focused.
      </p>
      <p className="text-green-600 font-bold text-sm mb-6">Original Price: Rs. 1400</p>
      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
        Book Now
      </button>
    </div>
  );
};

export default PremiumCard;
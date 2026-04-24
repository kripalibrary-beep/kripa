import React from 'react';

const TwentyFourHoursCard = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center h-full">
      <p className="text-gray-400 text-xs font-medium mb-1">Duration</p>
      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-5xl font-bold text-gray-900">24</span>
        <span className="text-gray-500 font-medium">hrs</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">24 Hours Access</h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-6 flex-grow">
        Whether you're a night owl or an early riser, the space is yours anytime, allowing you to study on your own terms.
      </p>
      <p className="text-green-600 font-bold text-sm mb-6">Original Price: Rs. 1200</p>
      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
        Book Now
      </button>
    </div>
  );
};

export default TwentyFourHoursCard;
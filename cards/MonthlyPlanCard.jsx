import React from 'react';

const MonthlyPlanCard = () => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center h-full">
      <p className="text-gray-400 text-xs font-medium mb-1">Duration</p>
      <div className="flex items-baseline gap-1 mb-4 text-center">
        <span className="text-4xl font-bold text-gray-900 leading-tight">04 or 06</span>
        <span className="text-gray-500 font-medium text-xs">months</span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">04 or 06 Months Plan</h3>
      <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-grow">
        Save big with our four or six months plan! Get a <span className="text-red-500 font-bold">20% discount</span> and enjoy a steady, quiet place to study.
      </p>
      <p className="text-gray-600 font-medium text-xs mb-6 italic">For all monthly plans</p>
      <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
        Book Now
      </button>
    </div>
  );
};

export default MonthlyPlanCard;
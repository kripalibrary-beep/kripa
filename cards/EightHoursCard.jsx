// components/plan/cards/EightHoursCard.jsx
import PlanCard from "./PlanCard";

export default function EightHoursCard() {
  return (
    <PlanCard>
      <p className="text-xs text-gray-400 font-medium mb-1">Duration</p>

      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-5xl font-bold text-gray-900">08</span>
        <span className="text-sm text-gray-500">hrs</span>
      </div>

      <h3 className="text-base font-bold text-gray-900 mb-3">
        Eight Hours Access
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        The eight hour plan is our standard choice for dedicated exam
        preparation, giving you enough time to cover syllabus.
      </p>

      <p className="text-sm font-semibold text-green-600 mt-auto">
        Original Price: Rs. 800
      </p>
    </PlanCard>
  );
}



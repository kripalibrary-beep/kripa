// components/plan/cards/SixHoursCard.jsx
import PlanCard from "./PlanCard";

export default function SixHoursCard() {
  return (
    <PlanCard>
      <p className="text-xs text-gray-400 font-medium mb-1">Duration</p>

      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-5xl font-bold text-gray-900">06</span>
        <span className="text-sm text-gray-500">hrs</span>
      </div>

      <h3 className="text-base font-bold text-gray-900 mb-3">
        Six Hours Access
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        Boost your focus with 06 hours of daily access. it's the prefect choice
        for a quick, intense study session.
      </p>

      <p className="text-sm font-semibold text-green-600 mt-auto">
        Original Price: Rs. 600
      </p>
    </PlanCard>
  );
}
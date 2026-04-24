// components/plan/cards/SingleDayCard.jsx
import PlanCard from "./PlanCard";

export default function SingleDayCard() {
  return (
    <PlanCard>
      <p className="text-xs text-gray-400 font-medium mb-1">Duration</p>

      <div className="flex items-baseline gap-1 mb-4">
        <span className="text-5xl font-bold text-gray-900">01</span>
        <span className="text-sm text-gray-500">day</span>
      </div>

      <h3 className="text-base font-bold text-gray-900 mb-3">
        Single Day Pass
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        Study at your own pace, this plan gives you the freedom to finish your
        work whenever you want in a quiet, relaxed spot.
      </p>

      <p className="text-sm font-semibold text-green-600 mt-auto">
        Original Price: Rs. 50
      </p>
    </PlanCard>
  );
}
// components/plan/cards/NightPlanCard.jsx
import PlanCard from "./PlanCard";

export default function NightPlanCard() {
  return (
    // We add border-none to override any default borders
    <PlanCard highlighted={false} className="border-none shadow-none"> 
      <p className="text-xs text-gray-400 font-medium mb-1">Duration</p>

      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-4xl font-bold text-gray-900">Night Plan</span>
      </div>

      <p className="text-sm text-gray-500 mb-4">09:00 Pm - 06:00 AM</p>

      <h3 className="text-base font-bold text-gray-900 mb-3">
        Night Plan
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-6">
        The Night Plan is built for those who find their focus after dark,
        allowing you to study at your own pace.
      </p>

      <p className="text-sm font-semibold text-green-600 mt-auto">
        Original Price: Rs. 800
      </p>
    </PlanCard>
  );
}
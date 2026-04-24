// components/plan/cards/PlanCard.jsx
// Base card shell — all plan cards use this wrapper

export default function PlanCard({ children, highlighted = false }) {
  return (
    <div
      className={`
        flex flex-col items-center text-center bg-white rounded-2xl p-6
        ${highlighted
          ? "border-2 border-gray-800 shadow-md"
          : "border border-gray-200 shadow-sm"
        }
      `}
    >
      {children}
    </div>
  );
}
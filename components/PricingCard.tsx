import { PrimePlan } from "@/types/plans"

interface PricingCardProps {
  plan: PrimePlan
}

export default function PricingCard({ plan }: PricingCardProps) {
  const handleSelectPlan = () => {
    const checkoutUrl = `https://plenti.app/checkout?plan=${plan.price}&duration=${plan.duration}&type=prime`
    window.location.href = checkoutUrl
  }

  return (
    <div
      className={`relative bg-white rounded-lg shadow-lg p-8 flex flex-col ${
        plan.isPopular
          ? "border-2 border-[#2D5BFF] transform scale-105"
          : "border border-gray-200"
      }`}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#10B981] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
            MOST POPULAR
          </span>
        </div>
      )}

      {/* Plan Name */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>

        {/* Price */}
        <div className="mb-2">
          <span className="text-4xl font-bold text-[#2D5BFF]">{plan.price} zł</span>
          <span className="text-gray-600">/miesiąc</span>
        </div>

        {/* Duration Badge */}
        <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
          12 miesięcy
        </div>
      </div>

      {/* Benefits List */}
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-[#10B981] mr-3 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={handleSelectPlan}
        className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
          plan.isPopular
            ? "bg-[#2D5BFF] hover:bg-[#1e4ad8] text-white shadow-lg hover:shadow-xl transform hover:scale-105"
            : "bg-gray-100 hover:bg-gray-200 text-gray-900"
        }`}
        aria-label={`Wybierz plan ${plan.name}`}
      >
        Wybierz plan
      </button>
    </div>
  )
}

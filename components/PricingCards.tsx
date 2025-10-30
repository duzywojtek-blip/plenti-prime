import { PRIME_PLANS } from "@/constants/plans"
import PricingCard from "./PricingCard"

export default function PricingCards() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Wybierz swój plan Prime
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wszystkie plany obejmują 12-miesięczną subskrypcję z miesięczną płatnością
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {PRIME_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-3xl mx-auto">
            * Wszystkie ceny zawierają VAT. Niewykorzystany kredyt kumuluje się przez okres trwania subskrypcji.
            Zniżki Prime łączą się z promocjami sezonowymi.
          </p>
        </div>
      </div>
    </section>
  )
}

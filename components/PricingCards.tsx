import { PRIME_PLANS } from "@/constants/plans"
import PricingCard from "./PricingCard"

export default function PricingCards() {
  return (
    <section id="pricing" style={{ backgroundColor: 'var(--color-grey-05)', paddingTop: 'var(--spacing-large-0)', paddingBottom: 'var(--spacing-large-0)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" style={{ marginBottom: 'var(--spacing-large-0)' }}>
          <h2 className="font-bold mb-4" style={{ fontSize: 'var(--font-size-h3)', lineHeight: 'var(--line-height-h3)', color: 'var(--color-black)' }}>
            Wybierz swój plan Prime
          </h2>
          <p className="max-w-2xl mx-auto" style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', color: 'var(--color-grey-00)' }}>
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
        <div className="text-center" style={{ marginTop: 'var(--spacing-large-0)' }}>
          <p className="max-w-3xl mx-auto" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-grey-00)' }}>
            * Wszystkie ceny zawierają VAT. Niewykorzystany kredyt kumuluje się przez okres trwania subskrypcji.
            Zniżki Prime łączą się z promocjami sezonowymi.
          </p>
        </div>
      </div>
    </section>
  )
}

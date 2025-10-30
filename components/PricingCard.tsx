"use client"

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
      className={`relative flex flex-col transition-all duration-200 ${
        plan.isPopular ? "transform scale-105" : ""
      }`}
      style={{
        backgroundColor: 'var(--color-white)',
        borderRadius: 'var(--radius-medium-0)',
        boxShadow: 'var(--shadow-select)',
        padding: 'var(--spacing-medium-3)',
        border: plan.isPopular ? '2px solid var(--color-purple)' : '1px solid var(--color-grey-04)'
      }}
      onMouseEnter={(e) => !plan.isPopular && (e.currentTarget.style.boxShadow = 'var(--shadow-drop-active)')}
      onMouseLeave={(e) => !plan.isPopular && (e.currentTarget.style.boxShadow = 'var(--shadow-select)')}
    >
      {/* Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span
            style={{
              backgroundColor: 'var(--color-purple)',
              color: 'var(--color-white)',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: '500',
              boxShadow: 'var(--shadow-drop)',
              whiteSpace: 'nowrap'
            }}
          >
            Najczęściej wybierane
          </span>
        </div>
      )}

      {/* Plan Name */}
      <div className="text-center mb-6">
        <h3 className="font-bold mb-2" style={{ fontSize: 'var(--font-size-h4)', lineHeight: 'var(--line-height-h4)', color: 'var(--color-black)' }}>
          {plan.name}
        </h3>

        {/* Price */}
        <div className="mb-2">
          <span className="font-bold" style={{ fontSize: '36px', color: 'var(--color-purple)' }}>{plan.price} zł</span>
          <span style={{ color: 'var(--color-grey-00)' }}>/miesiąc</span>
        </div>

        {/* Duration Badge */}
        <div
          className="inline-block font-medium"
          style={{
            backgroundColor: 'var(--color-light-purple)',
            color: 'var(--color-black)',
            padding: '6px 16px',
            borderRadius: '9999px',
            fontSize: 'var(--font-size-small)'
          }}
        >
          12 miesięcy
        </div>
      </div>

      {/* Benefits List */}
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: 'var(--color-success)' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span style={{ color: 'var(--color-grey-00)', fontSize: 'var(--font-size-base)' }}>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={handleSelectPlan}
        className={`w-full font-semibold transition-all duration-200 ${
          plan.isPopular ? "" : "border-2"
        }`}
        style={{
          padding: '16px 24px',
          borderRadius: 'var(--radius-medium-0)',
          fontSize: 'var(--font-size-base)',
          ...(plan.isPopular ? {
            backgroundColor: 'var(--color-purple)',
            color: 'var(--color-white)',
            boxShadow: 'var(--shadow-drop)'
          } : {
            backgroundColor: 'transparent',
            color: 'var(--color-purple)',
            borderColor: 'var(--color-purple)'
          })
        }}
        onMouseEnter={(e) => {
          if (plan.isPopular) {
            e.currentTarget.style.backgroundColor = 'var(--color-dark-purple)'
            e.currentTarget.style.boxShadow = 'var(--shadow-drop-active)'
          } else {
            e.currentTarget.style.backgroundColor = 'var(--color-very-light-purple)'
          }
        }}
        onMouseLeave={(e) => {
          if (plan.isPopular) {
            e.currentTarget.style.backgroundColor = 'var(--color-purple)'
            e.currentTarget.style.boxShadow = 'var(--shadow-drop)'
          } else {
            e.currentTarget.style.backgroundColor = 'transparent'
          }
        }}
        aria-label={`Wybierz plan ${plan.name}`}
      >
        Wybierz plan
      </button>
    </div>
  )
}

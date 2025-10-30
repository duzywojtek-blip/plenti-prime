"use client"

import { useState } from "react"
import { FAQ_ITEMS } from "@/constants/plans"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section style={{ backgroundColor: 'var(--color-grey-05)', paddingTop: 'var(--spacing-large-0)', paddingBottom: 'var(--spacing-large-0)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" style={{ marginBottom: 'var(--spacing-large-0)' }}>
          <h2 className="font-bold mb-4" style={{ fontSize: 'var(--font-size-h3)', lineHeight: 'var(--line-height-h3)', color: 'var(--color-black)' }}>
            Często zadawane pytania
          </h2>
          <p className="max-w-2xl mx-auto" style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', color: 'var(--color-grey-00)' }}>
            Wszystko, co musisz wiedzieć o Plenti Prime
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden border"
              style={{
                backgroundColor: 'var(--color-white)',
                borderRadius: 'var(--radius-medium-0)',
                boxShadow: 'var(--shadow-select)',
                borderColor: 'var(--color-grey-04)'
              }}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left flex items-center justify-between transition-colors"
                style={{
                  padding: 'var(--spacing-medium-2)',
                  backgroundColor: openIndex === index ? 'var(--color-very-light-purple)' : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.backgroundColor = 'var(--color-grey-05)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold pr-8" style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-black)' }}>
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--color-purple)' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="leading-relaxed" style={{ padding: '0 var(--spacing-medium-2) var(--spacing-medium-2)', fontSize: 'var(--font-size-base)', color: 'var(--color-grey-00)' }}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

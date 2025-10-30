import { BENEFITS } from "@/constants/plans"

const iconComponents = {
  wallet: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      />
    </svg>
  ),
  shield: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  discount: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  truck: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
}

export default function Benefits() {
  return (
    <section className="bg-white" style={{ paddingTop: 'var(--spacing-large-0)', paddingBottom: 'var(--spacing-large-0)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" style={{ marginBottom: 'var(--spacing-large-0)' }}>
          <h2 className="font-bold mb-4" style={{ fontSize: 'var(--font-size-h3)', lineHeight: 'var(--line-height-h3)', color: 'var(--color-black)' }}>
            Dlaczego Plenti Prime?
          </h2>
          <p className="max-w-2xl mx-auto" style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', color: 'var(--color-grey-00)' }}>
            Ekskluzywne korzyści dla najbardziej aktywnych użytkowników
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border transition-all duration-200 hover:shadow-[var(--shadow-drop)]"
              style={{
                backgroundColor: 'var(--color-very-light-purple)',
                borderRadius: 'var(--radius-medium-0)',
                borderColor: 'var(--color-grey-04)',
                padding: '12px 16px'
              }}
            >
              <div style={{ color: 'var(--color-purple)' }}>
                {iconComponents[benefit.icon as keyof typeof iconComponents]}
              </div>
              <span className="font-medium" style={{ fontSize: 'var(--font-size-small)', lineHeight: 'var(--line-height-small)', color: 'var(--color-black)' }}>
                {benefit.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

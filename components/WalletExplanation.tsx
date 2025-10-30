export default function WalletExplanation() {
  const steps = [
    {
      number: "1",
      title: "Dostajesz miesięczny kredyt",
      description:
        "Na początku każdego miesiąca otrzymujesz pełną kwotę kredytu zgodną z Twoim planem (100-1000 zł)",
      icon: "💳",
    },
    {
      number: "2",
      title: "Wykorzystujesz na wynajmy",
      description:
        "Używaj kredytu na wynajem sprzętu sportowego. Twoje zniżki Prime są automatycznie naliczane",
      icon: "🎿",
    },
    {
      number: "3",
      title: "Niewykorzystany kredyt się kumuluje",
      description:
        "Jeśli nie wykorzystasz całego kredytu, przenosi się on na kolejny miesiąc i kumuluje przez cały rok",
      icon: "💰",
    },
  ]

  return (
    <section className="bg-white" style={{ paddingTop: 'var(--spacing-large-2)', paddingBottom: 'var(--spacing-large-2)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" style={{ marginBottom: 'var(--spacing-large-0)' }}>
          <h2 className="font-bold mb-4" style={{ fontSize: 'var(--font-size-h2)', lineHeight: 'var(--line-height-h2)', color: 'var(--color-black)' }}>
            Jak działa Twój Wallet?
          </h2>
          <p className="max-w-2xl mx-auto" style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', color: 'var(--color-grey-00)' }}>
            Prosty i przejrzysty system miesięcznego kredytu
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Step Number Circle */}
              <div
                className="flex items-center justify-center mx-auto mb-4 font-bold"
                style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: 'var(--color-purple)',
                  borderRadius: '50%',
                  color: 'var(--color-white)',
                  fontSize: 'var(--font-size-h2)',
                  lineHeight: 'var(--line-height-h2)'
                }}
              >
                {step.number}
              </div>

              <h3 className="font-semibold mb-2" style={{ fontSize: 'var(--font-size-h4)', lineHeight: 'var(--line-height-h4)', color: 'var(--color-black)' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', color: 'var(--color-grey-00)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer Box */}
        <div
          className="max-w-4xl mx-auto border"
          style={{
            backgroundColor: 'var(--color-very-light-purple)',
            borderColor: 'var(--color-light-purple)',
            borderRadius: 'var(--radius-medium-0)',
            padding: 'var(--spacing-medium-2)'
          }}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: 'var(--color-purple)' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="leading-relaxed" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-black)' }}>
                <strong>Ważne:</strong> Skumulowany kredyt wygasa po zakończeniu
                rocznej subskrypcji:{" "}
                <strong>31 marca</strong> (dla subskrypcji kończących się
                VII-XII) lub <strong>30 września</strong> (dla subskrypcji
                kończących się I-VI).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

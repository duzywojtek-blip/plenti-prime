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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Jak działa Twój Wallet?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Prosty i przejrzysty system miesięcznego kredytu
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Connector Line (hidden on mobile) */}
              {step.number !== "3" && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-gray-200 z-0" />
              )}

              <div className="relative z-10 text-center">
                {/* Step Number Circle */}
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <span className="text-4xl">{step.icon}</span>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2D5BFF] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Box */}
        <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-[#2D5BFF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
              <p className="text-sm text-gray-700 leading-relaxed">
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

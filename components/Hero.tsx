"use client"

export default function Hero() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative bg-gradient-to-b from-[var(--color-grey-05)] to-white" style={{ paddingTop: 'var(--spacing-large-2)', paddingBottom: 'var(--spacing-large-2)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            <h1 className="font-bold mb-6 leading-tight" style={{ fontSize: 'clamp(40px, 6vw, var(--font-size-h1))', lineHeight: 'var(--line-height-h1)', color: 'var(--color-black)' }}>
              Plenti Prime
            </h1>

            <p className="font-medium mb-4" style={{ fontSize: 'clamp(20px, 3vw, var(--font-size-h4))', lineHeight: 'var(--line-height-h4)', color: 'var(--color-grey-00)' }}>
              Subskrypcja sprzętu elektronicznego
            </p>

            <p className="mb-8 max-w-xl" style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)', color: 'var(--color-grey-00)' }}>
              Miesięczna subskrypcja na wynajem produktów elektronicznych.
              Nieograniczone zniżki i rozszerzone Plenti Care 90%.
            </p>

            <button
              onClick={scrollToPricing}
              className="inline-block font-semibold transition-all duration-200"
              style={{
                padding: '16px 32px',
                backgroundColor: 'var(--color-purple)',
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-medium-0)',
                boxShadow: 'var(--shadow-drop)',
                fontSize: 'var(--font-size-base)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-dark-purple)'
                e.currentTarget.style.boxShadow = 'var(--shadow-drop-active)'
                e.currentTarget.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-purple)'
                e.currentTarget.style.boxShadow = 'var(--shadow-drop)'
                e.currentTarget.style.transform = 'scale(1)'
              }}
              aria-label="Zobacz dostępne plany subskrypcji"
            >
              Zobacz plany
            </button>
          </div>

          {/* Right Column - Visual */}
          <div className="relative max-w-[600px] mx-auto">
            <img
              src="/vr-hero.jpg"
              alt="Mężczyzna w okularach VR korzystający z produktów elektronicznych"
              className="w-full h-auto object-cover"
              style={{
                borderRadius: 'var(--radius-medium-0)',
                boxShadow: 'var(--shadow-drop)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

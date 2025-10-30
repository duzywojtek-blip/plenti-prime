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
              Ekskluzywne zniżki i rozszerzone Plenti Care 90%.
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
          <div className="relative">
            <div
              className="bg-gradient-to-br from-[var(--color-light-purple)] to-[var(--color-very-light-purple)]"
              style={{
                borderRadius: 'var(--radius-medium-0)',
                padding: 'var(--spacing-large-0)',
                boxShadow: 'var(--shadow-select)'
              }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">💻📱⌨️</div>
                <p className="font-semibold" style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-black)' }}>
                  Laptopy • Tablety • Telefony • Akcesoria
                </p>
                <p className="mt-2" style={{ fontSize: 'var(--font-size-base)', color: 'var(--color-grey-00)' }}>
                  Wypożycz najnowszy sprzęt elektroniczny
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div
                  className="text-center"
                  style={{
                    backgroundColor: 'var(--color-white)',
                    borderRadius: 'var(--radius-small-0)',
                    padding: 'var(--spacing-medium-0)',
                    boxShadow: 'var(--shadow-select)'
                  }}
                >
                  <p className="font-bold" style={{ fontSize: '24px', color: 'var(--color-purple)' }}>1000+</p>
                  <p className="mt-1" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-grey-00)' }}>Produktów</p>
                </div>
                <div
                  className="text-center"
                  style={{
                    backgroundColor: 'var(--color-white)',
                    borderRadius: 'var(--radius-small-0)',
                    padding: 'var(--spacing-medium-0)',
                    boxShadow: 'var(--shadow-select)'
                  }}
                >
                  <p className="font-bold" style={{ fontSize: '24px', color: 'var(--color-success)' }}>90%</p>
                  <p className="mt-1" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-grey-00)' }}>Ochrona</p>
                </div>
                <div
                  className="text-center"
                  style={{
                    backgroundColor: 'var(--color-white)',
                    borderRadius: 'var(--radius-small-0)',
                    padding: 'var(--spacing-medium-0)',
                    boxShadow: 'var(--shadow-select)'
                  }}
                >
                  <p className="font-bold" style={{ fontSize: '24px', color: 'var(--color-purple)' }}>15%</p>
                  <p className="mt-1" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-grey-00)' }}>Zniżka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

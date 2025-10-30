"use client"

export default function Hero() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              🏆 Subskrypcja Premium
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Plenti Prime
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
              Subskrypcja Premium na Wynajem Sprzętu Elektronicznego
            </p>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Miesięczny budżet na wynajem laptopów, tabletów i akcesoriów.
              Ekskluzywne zniżki i rozszerzone Plenti Care 90%.
            </p>

            <button
              onClick={scrollToPricing}
              className="inline-block bg-[#2D5BFF] hover:bg-[#1e4ad8] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              aria-label="Zobacz dostępne plany subskrypcji"
            >
              Zobacz plany
            </button>

            <p className="mt-6 text-sm text-gray-500">
              ✓ Bez ukrytych kosztów &nbsp;·&nbsp; ✓ Anuluj kiedy chcesz &nbsp;·&nbsp; ✓ 12 miesięcy
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-12 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">💻📱⌨️</div>
                <p className="text-gray-700 font-semibold text-lg">
                  Laptopy • Tablety • Telefony • Akcesoria
                </p>
                <p className="text-gray-600 mt-2">
                  Wypożycz najnowszy sprzęt elektroniczny
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <p className="text-2xl font-bold text-[#2D5BFF]">1000+</p>
                  <p className="text-xs text-gray-600 mt-1">Produktów</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <p className="text-2xl font-bold text-[#10B981]">90%</p>
                  <p className="text-xs text-gray-600 mt-1">Ochrona</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center shadow">
                  <p className="text-2xl font-bold text-[#2D5BFF]">15%</p>
                  <p className="text-xs text-gray-600 mt-1">Zniżka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

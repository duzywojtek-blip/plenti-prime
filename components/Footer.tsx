"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', paddingTop: 'var(--spacing-large-0)', paddingBottom: 'var(--spacing-large-0)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: 'var(--color-purple)' }}>
                <span className="font-bold text-lg" style={{ color: 'var(--color-white)' }}>P</span>
              </div>
              <span className="text-xl font-bold">Plenti Prime</span>
            </div>
            <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-grey-00)' }}>
              Subskrypcja premium na wynajem sprzętu elektronicznego. Miesięczny
              budżet, ekskluzywne zniżki i rozszerzona ochrona.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="font-semibold mb-4">Przydatne linki</h3>
            <ul className="space-y-2" style={{ fontSize: 'var(--font-size-small)' }}>
              <li>
                <a
                  href="https://plenti.app"
                  className="transition-colors"
                  style={{ color: 'var(--color-grey-00)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-grey-00)'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plenti.app
                </a>
              </li>
              <li>
                <a
                  href="https://plenti.app/regulamin"
                  className="transition-colors"
                  style={{ color: 'var(--color-grey-00)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-grey-00)'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Regulamin Prime
                </a>
              </li>
              <li>
                <a
                  href="https://plenti.app/polityka-prywatnosci"
                  className="transition-colors"
                  style={{ color: 'var(--color-grey-00)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-grey-00)'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Polityka prywatności
                </a>
              </li>
              <li>
                <a
                  href="https://plenti.app/faq"
                  className="transition-colors"
                  style={{ color: 'var(--color-grey-00)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-white)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-grey-00)'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-grey-00)' }}>
              <li>Email: prime@plenti.app</li>
              <li>Telefon: +48 123 456 789</li>
              <li>Wsparcie: poniedziałek - piątek, 9:00 - 17:00</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t pt-8" style={{ borderColor: 'rgba(94, 112, 135, 0.2)', paddingTop: 'var(--spacing-medium-3)' }}>
          {/* Legal Disclaimer */}
          <div className="mb-6 leading-relaxed" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-grey-00)' }}>
            <p>
              * Subskrypcja Plenti Prime trwa 12 miesięcy z miesięczną
              płatnością. Miesięczny kredyt na wynajem jest równy kwocie
              subskrypcji. Niewykorzystany kredyt kumuluje się przez cały okres
              subskrypcji. Skumulowany kredyt wygasa 31 marca (dla subskrypcji
              kończących się VII-XII) lub 30 września (dla subskrypcji
              kończących się I-VI) po zakończeniu rocznej subskrypcji. Zniżki
              Prime łączą się z promocjami sezonowymi. Plenti Care 90% obejmuje
              ochronę sprzętu do 90% wartości.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-grey-00)' }}>
            <p>© {currentYear} Plenti. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

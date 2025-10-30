export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#2D5BFF] rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold">Plenti Prime</span>
            </div>
            <p className="text-gray-400 text-sm">
              Subskrypcja premium na wynajem sprzętu sportowego. Miesięczny
              budżet, ekskluzywne zniżki i rozszerzona ochrona.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h3 className="font-semibold mb-4">Przydatne linki</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://plenti.app"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plenti.app
                </a>
              </li>
              <li>
                <a
                  href="https://plenti.app/regulamin"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Regulamin Prime
                </a>
              </li>
              <li>
                <a
                  href="https://plenti.app/polityka-prywatnosci"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Polityka prywatności
                </a>
              </li>
              <li>
                <a
                  href="https://plenti.app/faq"
                  className="text-gray-400 hover:text-white transition-colors"
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
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: prime@plenti.app</li>
              <li>Telefon: +48 123 456 789</li>
              <li>Wsparcie: poniedziałek - piątek, 9:00 - 17:00</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Legal Disclaimer */}
          <div className="mb-6 text-xs text-gray-500 leading-relaxed">
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
          <div className="text-center text-sm text-gray-400">
            <p>© {currentYear} Plenti. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

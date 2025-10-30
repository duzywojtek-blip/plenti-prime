# Plenti Prime - Landing Page

Landing page dla systemu subskrypcji premium Plenti Prime.

## 🚀 Technologie

- **Next.js 14** - React framework z App Router
- **TypeScript** - Typowanie statyczne
- **Tailwind CSS** - Utility-first CSS framework
- **React** - Biblioteka UI

## 📦 Wymagania

- **Node.js 18+**
- **npm** lub **yarn**

## 🛠️ Instalacja

```bash
# Klonowanie repozytorium
git clone https://github.com/duzywojtek-blip/plenti-prime.git
cd plenti-prime

# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev
```

Aplikacja będzie dostępna pod adresem: http://localhost:3000

## 📁 Struktura projektu

```
plenti-prime/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout z SEO meta tags
│   ├── page.tsx             # Główna strona
│   └── globals.css          # Globalne style
├── components/              # Komponenty React
│   ├── Hero.tsx             # Sekcja hero
│   ├── Benefits.tsx         # Korzyści (4 kafelki)
│   ├── PricingCards.tsx     # Grid kart cenowych
│   ├── PricingCard.tsx      # Pojedyncza karta planu
│   ├── WalletExplanation.tsx # Wyjaśnienie Wallet
│   ├── FAQ.tsx              # Często zadawane pytania
│   └── Footer.tsx           # Stopka z regulaminem
├── types/                   # TypeScript types
│   └── plans.ts             # Interfejsy dla planów
├── constants/               # Stałe i dane
│   └── plans.ts             # Definicje planów Prime
├── public/                  # Statyczne assety
│   └── images/              # Obrazy
└── README.md                # Dokumentacja
```

## 🎨 Design System

### Kolory
- **Primary**: `#2D5BFF` (niebieski)
- **Accent/Success**: `#10B981` (zielony)
- **Text**: `#1F2937` (ciemny szary)
- **Background**: `#FFFFFF` (biały), `#F9FAFB` (jasny szary)

### Typografia
- Font: **Inter** (system fonts fallback)
- Rozmiary: `text-sm` do `text-6xl`

### Komponenty
- Zaokrąglenia: `rounded-lg` (8px)
- Cienie: `shadow-sm`, `shadow-lg`
- Spacing: generous padding/margin

## 📋 Plany Subskrypcji

### STARTER - 100 zł/miesiąc
- 100 zł kredytu miesięcznie
- Plenti Care 90%
- 5% stała zniżka
- 1 darmowa dostawa/rok
- Priorytetowa obsługa

### ADVANCED - 200 zł/miesiąc
- 200 zł kredytu miesięcznie
- Plenti Care 90%
- 8% stała zniżka
- 2 darmowe dostawy/rok
- Priorytetowa obsługa
- Early access do promocji

### PRO - 500 zł/miesiąc
- 500 zł kredytu miesięcznie
- Plenti Care 90%
- 12% stała zniżka
- 3 darmowe dostawy/rok
- Dedykowany opiekun
- Early access do premier
- Priorytetowa rezerwacja

### PREMIUM - 1000 zł/miesiąc ⭐ (MOST POPULAR)
- 1000 zł kredytu miesięcznie
- Plenti Care 90%
- 15% stała zniżka
- 5 darmowych dostaw/rok
- Dedykowany opiekun VIP
- Pierwszeństwo dostępu do premier
- Unlimited priorytetowa rezerwacja
- Ekskluzywne zaproszenia na eventy

## 🔗 Przekierowanie do Checkout

Po kliknięciu "Wybierz plan", użytkownik jest przekierowany do:

```
https://plenti.app/checkout?plan={AMOUNT}&duration=12&type=prime
```

Gdzie `{AMOUNT}` to: 100, 200, 500, lub 1000

## 🚀 Build Production

```bash
# Build produkcyjny
npm run build

# Start serwera produkcyjnego
npm start
```

Build generuje folder `.next/` z zoptymalizowaną aplikacją.

## 🌐 Deployment & Integracja z plenti.app

### Hosting: `plenti.app/prime`

Ta aplikacja będzie zintegrowana z główną platformą plenti.app przez zespół IT/Product.

### Konfiguracja (dla zespołu IT)

#### 1. Reverse Proxy
Skonfiguruj reverse proxy, aby ścieżka `/prime` wskazywała na ten Next.js:

```nginx
# Przykład nginx
location /prime {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

#### 2. Next.js basePath (opcjonalnie)
Jeśli wymagane, dodaj w `next.config.ts`:

```typescript
const nextConfig = {
  basePath: '/prime',
  assetPrefix: '/prime',
}
```

#### 3. Współdzielenie cookies
Jeśli potrzebne dla analytics/auth:
- Ustaw cookies na domenie `.plenti.app`
- Skonfiguruj CORS jeśli są API calls

#### 4. Environment Variables
Dodaj w `.env.local` (jeśli potrzebne):
```env
NEXT_PUBLIC_API_URL=https://plenti.app/api
NEXT_PUBLIC_ANALYTICS_ID=xxx
```

### Wymagania systemowe
- **Node.js**: 18+
- **Port**: 3000 (lub inny)
- **Memory**: ~512MB RAM
- **CPU**: 1 core

### Build time
- ~30-60 sekund
- Output: `.next/` folder

## 📱 Responsywność

Landing page jest w pełni responsywny:
- **Mobile**: 1 kolumna
- **Tablet** (md): 2 kolumny
- **Desktop** (lg): 4 kolumny (pricing cards)

## ♿ Accessibility

- ARIA labels na interaktywnych elementach
- Keyboard navigation (FAQ accordion)
- Semantic HTML
- Color contrast WCAG AA compliant

## 🔍 SEO

- Meta tags: title, description, keywords
- Open Graph tags dla social media
- Semantic HTML structure
- Mobile-friendly
- Fast page load (<2s)

## 📞 Kontakt

W przypadku pytań technicznych:
- Email: prime@plenti.app
- GitHub Issues: https://github.com/duzywojtek-blip/plenti-prime/issues

## 📄 Licencja

© 2025 Plenti. Wszystkie prawa zastrzeżone.

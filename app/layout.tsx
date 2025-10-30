import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Plenti Prime - Subskrypcja Premium na Wynajem Sprzętu Sportowego",
  description:
    "Miesięczny budżet, ekskluzywne zniżki do 15% i rozszerzone Plenti Care 90%. Wypożycz najlepszy sprzęt sportowy z subskrypcją Prime.",
  keywords:
    "plenti prime, wynajem sprzętu sportowego, subskrypcja, narty, snowboardy, zniżki, plenti care",
  authors: [{ name: "Plenti" }],
  openGraph: {
    title: "Plenti Prime - Subskrypcja Premium",
    description:
      "Miesięczny budżet na wynajem sprzętu, ekskluzywne zniżki i rozszerzona ochrona",
    url: "https://plenti.app/prime",
    siteName: "Plenti Prime",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}

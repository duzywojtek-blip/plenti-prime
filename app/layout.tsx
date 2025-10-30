import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Plenti Prime - Subskrypcja sprzętu elektronicznego",
  description:
    "Miesięczna subskrypcja na wynajem produktów elektronicznych. Nieograniczone zniżki do 15% i rozszerzone Plenti Care 90%. Laptopy, tablety, telefony dla domu i firm.",
  keywords:
    "plenti prime, wynajem sprzętu elektronicznego, subskrypcja, laptopy, tablety, telefony, akcesoria, zniżki, plenti care",
  authors: [{ name: "Plenti" }],
  openGraph: {
    title: "Plenti Prime - Subskrypcja sprzętu elektronicznego",
    description:
      "Miesięczna subskrypcja na wynajem produktów elektronicznych. Nieograniczone zniżki i rozszerzona ochrona",
    url: "https://plenti.app/prime",
    siteName: "Plenti Prime",
    locale: "pl_PL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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

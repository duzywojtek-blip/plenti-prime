import Hero from "@/components/Hero"
import Benefits from "@/components/Benefits"
import PricingCards from "@/components/PricingCards"
import WalletExplanation from "@/components/WalletExplanation"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <PricingCards />
      <WalletExplanation />
      <FAQ />
      <Footer />
    </main>
  )
}

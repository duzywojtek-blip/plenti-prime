"use client"

import { useSearchParams } from "next/navigation"
import { useState, Suspense } from "react"

function CheckoutContent() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "500"
  const duration = searchParams.get("duration") || "12"
  const type = searchParams.get("type") || "prime"

  const [deliveryMethod, setDeliveryMethod] = useState<"pickup" | "courier" | "paczkomat">("pickup")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "blik" | "transfer">("card")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    postalCode: "",
    city: "",
  })

  // Price calculation
  const basePrice = parseInt(plan)
  const originalPrice = Math.round(basePrice * 1.35) // Show 35% higher original price
  const deliveryCost = deliveryMethod === "pickup" ? 0 : deliveryMethod === "paczkomat" ? 14 : 25
  const totalPrice = basePrice + deliveryCost

  const handleSubmit = () => {
    console.log("Order submitted:", { plan, duration, type, deliveryMethod, paymentMethod, formData })
    // TODO: Redirect to payment gateway or success page
  }

  return (
    <div style={{ backgroundColor: "var(--color-grey-05)", minHeight: "100vh", paddingTop: "var(--spacing-large-0)", paddingBottom: "var(--spacing-large-0)" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "800px" }}>
        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {/* Step 1 - Active */}
            <div className="flex items-center">
              <div
                className="flex items-center justify-center font-semibold"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-purple)",
                  color: "var(--color-white)",
                  fontSize: "18px",
                }}
              >
                1
              </div>
              <span className="ml-3 font-medium" style={{ color: "var(--color-black)", fontSize: "var(--font-size-base)" }}>
                Płatność
              </span>
            </div>

            {/* Connector Line */}
            <div style={{ width: "60px", height: "2px", backgroundColor: "var(--color-grey-04)", margin: "0 16px" }} />

            {/* Step 2 - Inactive */}
            <div className="flex items-center">
              <div
                className="flex items-center justify-center font-semibold"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-grey-04)",
                  color: "var(--color-grey-00)",
                  fontSize: "18px",
                }}
              >
                2
              </div>
              <span className="ml-3 font-medium" style={{ color: "var(--color-grey-00)", fontSize: "var(--font-size-base)" }}>
                Weryfikacja
              </span>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div
          style={{
            backgroundColor: "var(--color-white)",
            borderRadius: "var(--radius-medium-0)",
            boxShadow: "var(--shadow-select)",
            padding: "32px",
          }}
        >
          {/* Order Summary */}
          <div className="mb-8">
            <h2 className="font-bold mb-4" style={{ fontSize: "var(--font-size-h4)", lineHeight: "var(--line-height-h4)", color: "var(--color-black)" }}>
              Podsumowanie
            </h2>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span style={{ fontSize: "var(--font-size-base)", color: "var(--color-grey-00)" }}>Wynajem Plenti Prime ({duration} miesięcy)</span>
                <div className="flex items-center gap-2">
                  <span style={{ fontSize: "var(--font-size-base)", color: "var(--color-grey-00)", textDecoration: "line-through" }}>
                    {originalPrice} zł
                  </span>
                  <span className="font-bold" style={{ fontSize: "var(--font-size-base)", color: "var(--color-danger)" }}>
                    {basePrice} zł
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span style={{ fontSize: "var(--font-size-base)", color: "var(--color-grey-00)" }}>Dostawa zamówień</span>
                <span style={{ fontSize: "var(--font-size-base)", color: "var(--color-grey-00)" }}>
                  {deliveryCost === 0 ? "--" : `${deliveryCost}`} zł
                </span>
              </div>

              <div style={{ height: "1px", backgroundColor: "var(--color-grey-04)", margin: "16px 0" }} />

              <div className="flex justify-between items-center">
                <span className="font-bold" style={{ fontSize: "20px", color: "var(--color-black)" }}>Do zapłaty:</span>
                <span className="font-bold" style={{ fontSize: "24px", color: "var(--color-purple)" }}>{totalPrice} zł</span>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div
            className="mb-8"
            style={{
              backgroundColor: "var(--color-light-purple)",
              borderRadius: "var(--radius-medium-0)",
              padding: "16px",
            }}
          >
            <p style={{ fontSize: "var(--font-size-small)", lineHeight: "var(--line-height-small)", color: "var(--color-purple)" }}>
              Opłatę pobierzemy dopiero po zmianie statusów zamówień na &apos;W realizacji&apos;. O każdej płatności powiadomimy Cię w wiadomości e-mail.
            </p>
          </div>

          {/* Delivery Method Section */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4" style={{ fontSize: "18px", color: "var(--color-black)" }}>Metoda dostawy</h3>
            <div className="space-y-3">
              {[
                { id: "pickup", label: "Odbiór osobisty", cost: "0 zł" },
                { id: "courier", label: "Kurier", cost: "25 zł" },
                { id: "paczkomat", label: "Paczkomat", cost: "14 zł" },
              ].map((method) => (
                <label
                  key={method.id}
                  className="flex items-center p-4 cursor-pointer border"
                  style={{
                    borderRadius: "var(--radius-small-0)",
                    borderColor: deliveryMethod === method.id ? "var(--color-purple)" : "var(--color-grey-04)",
                    backgroundColor: deliveryMethod === method.id ? "var(--color-very-light-purple)" : "transparent",
                  }}
                >
                  <input
                    type="radio"
                    name="delivery"
                    value={method.id}
                    checked={deliveryMethod === method.id}
                    onChange={(e) => setDeliveryMethod(e.target.value as any)}
                    className="mr-3"
                    style={{ accentColor: "var(--color-purple)" }}
                  />
                  <span className="flex-grow" style={{ fontSize: "var(--font-size-base)", color: "var(--color-black)" }}>
                    {method.label}
                  </span>
                  <span style={{ fontSize: "var(--font-size-base)", color: "var(--color-grey-00)" }}>{method.cost}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Billing Information */}
          <div className="mb-6">
            <h3 className="font-semibold mb-4" style={{ fontSize: "18px", color: "var(--color-black)" }}>Dane do faktury</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Imię"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="border p-3"
                style={{
                  borderRadius: "var(--radius-small-0)",
                  borderColor: "var(--color-grey-04)",
                  fontSize: "var(--font-size-base)",
                }}
              />
              <input
                type="text"
                placeholder="Nazwisko"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="border p-3"
                style={{
                  borderRadius: "var(--radius-small-0)",
                  borderColor: "var(--color-grey-04)",
                  fontSize: "var(--font-size-base)",
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border p-3"
                style={{
                  borderRadius: "var(--radius-small-0)",
                  borderColor: "var(--color-grey-04)",
                  fontSize: "var(--font-size-base)",
                }}
              />
              <input
                type="tel"
                placeholder="Telefon"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border p-3"
                style={{
                  borderRadius: "var(--radius-small-0)",
                  borderColor: "var(--color-grey-04)",
                  fontSize: "var(--font-size-base)",
                }}
              />
            </div>
          </div>

          {/* Delivery Address (conditional) */}
          {deliveryMethod !== "pickup" && (
            <div className="mb-6">
              <h3 className="font-semibold mb-4" style={{ fontSize: "18px", color: "var(--color-black)" }}>Adres dostawy</h3>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Ulica i numer"
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  className="border p-3"
                  style={{
                    borderRadius: "var(--radius-small-0)",
                    borderColor: "var(--color-grey-04)",
                    fontSize: "var(--font-size-base)",
                  }}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Kod pocztowy"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="border p-3"
                    style={{
                      borderRadius: "var(--radius-small-0)",
                      borderColor: "var(--color-grey-04)",
                      fontSize: "var(--font-size-base)",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Miasto"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="border p-3"
                    style={{
                      borderRadius: "var(--radius-small-0)",
                      borderColor: "var(--color-grey-04)",
                      fontSize: "var(--font-size-base)",
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Payment Method */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4" style={{ fontSize: "18px", color: "var(--color-black)" }}>Metoda płatności</h3>
            <div className="space-y-3">
              {[
                { id: "card", label: "Karta płatnicza", icon: "💳" },
                { id: "blik", label: "BLIK", icon: "📱" },
                { id: "transfer", label: "Przelew bankowy", icon: "🏦" },
              ].map((method) => (
                <label
                  key={method.id}
                  className="flex items-center p-4 cursor-pointer border"
                  style={{
                    borderRadius: "var(--radius-small-0)",
                    borderColor: paymentMethod === method.id ? "var(--color-purple)" : "var(--color-grey-04)",
                    backgroundColor: paymentMethod === method.id ? "var(--color-very-light-purple)" : "transparent",
                  }}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="mr-3"
                    style={{ accentColor: "var(--color-purple)" }}
                  />
                  <span className="text-2xl mr-3">{method.icon}</span>
                  <span style={{ fontSize: "var(--font-size-base)", color: "var(--color-black)" }}>{method.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full font-semibold transition-all duration-200"
            style={{
              padding: "16px",
              backgroundColor: "var(--color-purple)",
              color: "var(--color-white)",
              borderRadius: "var(--radius-medium-0)",
              fontSize: "var(--font-size-base)",
              boxShadow: "var(--shadow-drop)",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-dark-purple)"
              e.currentTarget.style.boxShadow = "var(--shadow-drop-active)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-purple)"
              e.currentTarget.style.boxShadow = "var(--shadow-drop)"
            }}
          >
            Zamawiam
          </button>

          {/* Payment Icons */}
          <div className="mt-6 text-center">
            <p className="mb-3" style={{ fontSize: "var(--font-size-small)", color: "var(--color-grey-00)" }}>
              Bezpieczne płatności
            </p>
            <div className="flex items-center justify-center gap-4">
              <span style={{ fontSize: "24px" }}>💳</span>
              <span style={{ fontSize: "24px" }}>💰</span>
              <span style={{ fontSize: "24px" }}>🍎</span>
              <span style={{ fontSize: "24px" }}>📱</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}

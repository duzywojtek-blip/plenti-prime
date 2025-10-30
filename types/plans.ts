export interface PrimePlan {
  id: string
  name: string
  price: number
  duration: number
  isPopular?: boolean
  monthlyCredit: number
  plentiCare: number
  discount: number
  freeDeliveries: number
  benefits: string[]
}

export interface Benefit {
  icon: string
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

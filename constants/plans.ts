import { PrimePlan, Benefit, FAQItem } from "@/types/plans"

export const PRIME_PLANS: PrimePlan[] = [
  {
    id: "starter",
    name: "STARTER",
    price: 100,
    duration: 12,
    monthlyCredit: 100,
    plentiCare: 90,
    discount: 5,
    freeDeliveries: 1,
    benefits: [
      "100 zł kredytu miesięcznie",
      "Plenti Care 90%",
      "5% stała zniżka",
      "1 darmowa dostawa/rok",
      "Priorytetowa obsługa",
    ],
  },
  {
    id: "advanced",
    name: "ADVANCED",
    price: 200,
    duration: 12,
    monthlyCredit: 200,
    plentiCare: 90,
    discount: 8,
    freeDeliveries: 2,
    benefits: [
      "200 zł kredytu miesięcznie",
      "Plenti Care 90%",
      "8% stała zniżka",
      "2 darmowe dostawy/rok",
      "Priorytetowa obsługa",
      "Early access do promocji",
    ],
  },
  {
    id: "pro",
    name: "PRO",
    price: 500,
    duration: 12,
    monthlyCredit: 500,
    plentiCare: 90,
    discount: 12,
    freeDeliveries: 3,
    benefits: [
      "500 zł kredytu miesięcznie",
      "Plenti Care 90%",
      "12% stała zniżka",
      "3 darmowe dostawy/rok",
      "Dedykowany opiekun",
      "Early access do premier",
      "Priorytetowa rezerwacja",
    ],
  },
  {
    id: "premium",
    name: "PREMIUM",
    price: 1000,
    duration: 12,
    isPopular: true,
    monthlyCredit: 1000,
    plentiCare: 90,
    discount: 15,
    freeDeliveries: 5,
    benefits: [
      "1000 zł kredytu miesięcznie",
      "Plenti Care 90%",
      "15% stała zniżka",
      "5 darmowych dostaw/rok",
      "Dedykowany opiekun VIP",
      "Pierwszeństwo dostępu do premier",
      "Unlimited priorytetowa rezerwacja",
      "Ekskluzywne zaproszenia na eventy",
    ],
  },
]

export const BENEFITS: Benefit[] = [
  {
    icon: "wallet",
    title: "Miesięczny kredyt",
    description: "Otrzymuj miesięczny budżet na wynajem sprzętu sportowego",
  },
  {
    icon: "shield",
    title: "Plenti Care 90%",
    description: "Rozszerzona ochrona sprzętu do 90% wartości (zamiast 80%)",
  },
  {
    icon: "discount",
    title: "Stałe zniżki do 15%",
    description: "Ekskluzywne rabaty na wszystkie wynajmy przez cały rok",
  },
  {
    icon: "truck",
    title: "Darmowe dostawy",
    description: "Bezpłatne dostawy i early access do nowych produktów",
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Jak długo trwa subskrypcja?",
    answer:
      "Subskrypcja Plenti Prime trwa 12 miesięcy z miesięczną płatnością. Po zakończeniu okresu możesz odnowić subskrypcję na kolejny rok.",
  },
  {
    question: "Co się dzieje z niewykorzystanym kredytem?",
    answer:
      "Niewykorzystany kredyt kumuluje się przez cały okres 12-miesięcznej subskrypcji. Skumulowany kredyt wygasa 31 marca (dla subskrypcji kończących się VII-XII) lub 30 września (dla subskrypcji kończących się I-VI) po zakończeniu rocznej subskrypcji.",
  },
  {
    question: "Czy mogę anulować subskrypcję?",
    answer:
      "Subskrypcja Prime to zobowiązanie na 12 miesięcy. Możesz anulować subskrypcję, jednak nie otrzymasz zwrotu za niewykorzystane miesiące. Niewykorzystany kredyt pozostanie dostępny do końca okresu subskrypcji.",
  },
  {
    question: "Jak działa Plenti Care 90%?",
    answer:
      "Plenti Care 90% to rozszerzona ochrona sprzętu, która pokrywa do 90% wartości w przypadku uszkodzenia lub kradzieży (standardowo 80%). Dotyczy wszystkich wynajmów dokonanych z kontem Prime.",
  },
  {
    question: "Czy zniżki łączą się z promocjami?",
    answer:
      "Tak! Twoja zniżka Prime (5-15% w zależności od planu) łączy się z promocjami sezonowymi i specjalnymi ofertami Plenti. To oznacza jeszcze większe oszczędności.",
  },
]

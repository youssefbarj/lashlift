"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const contraindications = [
  {
    id: 1,
    title: "INFECTIONS ET INFLAMMATIONS OCULAIRES",
    image: "/images/infections-oculaires.png",
    description:
      "Les infections actives peuvent se propager ou s'aggraver avec les produits chimiques. La proximité avec les yeux infectés crée un risque de contamination et de complications graves.",
    category: "Ophtalmologie",
  },
  {
    id: 2,
    title: "CHIRURGIES ET PROCÉDURES RÉCENTES",
    image: "/images/chirurgies-recentes.png",
    description:
      "La peau et les tissus ont besoin de temps pour guérir complètement. Les produits chimiques peuvent interférer avec la cicatrisation et causer des complications.",
    category: "Cicatrisation",
  },
  {
    id: 3,
    title: "MÉDICAMENTS ET TRAITEMENTS",
    image: "/images/medicaments-traitements.png",
    description:
      "Certains médicaments affectent la coagulation du sang ou la sensibilité de la peau. Les interactions peuvent causer des saignements ou des réactions imprévisibles.",
    category: "Médications",
  },
  {
    id: 4,
    title: "PROBLÈMES DE PEAU",
    image: "/images/problemes-peau.png",
    description:
      "Les conditions comme l'eczéma ou le psoriasis créent une barrière cutanée compromise. Les produits chimiques peuvent déclencher des poussées inflammatoires.",
    category: "Dermatologie",
  },
  {
    id: 5,
    title: "GROSSESSE ET CHANGEMENTS HORMONAUX",
    image: "/images/grossesse-hormonaux.png",
    description:
      "Les changements hormonaux affectent la réaction de la peau et des poils. Les résultats peuvent être imprévisibles et la sécurité pendant la grossesse n'est pas établie.",
    category: "Maternité",
  },
  {
    id: 6,
    title: "ALLERGIES ET SENSIBILITÉS",
    image: "/images/allergies-composants.png",
    description:
      "Les personnes allergiques risquent des réactions graves : gonflements, éruptions, difficultés respiratoires. Un test de patch raté indique un risque élevé.",
    category: "Allergies",
  },
  {
    id: 7,
    title: "MALADIES CHRONIQUES",
    image: "/images/maladies-dermatologiques.png",
    description:
      "Ces conditions affectent la circulation, la cicatrisation et la réponse immunitaire. Le risque de complications est significativement augmenté.",
    category: "Pathologies chroniques",
  },
  {
    id: 8,
    title: "LENTILLES DE CONTACT ET ÉQUIPEMENT OCULAIRE",
    image: "/images/lentilles-equipement.png",
    description:
      "Les lentilles doivent être retirées pour permettre un rinçage oculaire d'urgence si nécessaire. L'équipement oculaire peut interférer avec la sécurité du traitement.",
    category: "Équipement oculaire",
  },
]

export default function ContraindicationsGrid() {
  const [hasInteracted, setHasInteracted] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setShowHints(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [hasInteracted])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = Number.parseInt(entry.target.getAttribute("data-card-id") || "0")
            setVisibleCards((prev) => new Set([...prev, cardId]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    const cards = gridRef.current?.querySelectorAll("[data-card-id]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const handleCardHover = () => {
    if (!hasInteracted) {
      setHasInteracted(true)
      setShowHints(false)
    }
  }

  return (
    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {contraindications.map((item, index) => (
        <div
          key={item.id}
          data-card-id={item.id}
          className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden border-2 border-red-100 hover:border-red-300 hover:scale-105 transform ${
            visibleCards.has(item.id) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: `${index * 80}ms`,
          }}
          onMouseEnter={handleCardHover}
        >
          {showHints && !hasInteracted && (
            <div className="absolute top-3 left-3 z-10 opacity-50 transition-opacity duration-200 group-hover:opacity-0">
              <Image src="/images/cursor-icon.png" alt="Hover hint" width={20} height={20} className="drop-shadow-md" />
            </div>
          )}

          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 transition-transform duration-200 group-hover:scale-110">
            ATTENTION
          </div>

          <div className="relative h-64 overflow-hidden bg-gradient-to-br from-red-50 to-red-100">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-red-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 ease-out" />
          </div>

          <div className="p-6">
            <div className="mb-2">
              <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded-full transition-colors duration-200 group-hover:bg-red-200">
                {item.category}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-200">
              {item.title}
            </h3>
          </div>

          <div className="absolute inset-0 bg-red-600 bg-opacity-95 text-white p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out flex flex-col justify-center transform translate-y-2 group-hover:translate-y-0">
            <div className="text-center">
              <div className="mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 transition-transform duration-200 group-hover:scale-110">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-2">Pourquoi cette contre-indication ?</h4>
              </div>
              <p className="text-sm leading-relaxed text-white text-opacity-90">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

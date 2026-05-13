import ContraindicationsGrid from "./components/contraindications-grid"

export default function MicrobladingContraindicationsPage() {
  return (
    <div className="min-h-screen pb-12" style={{ backgroundColor: "#E6D9FF" }}>
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Contre-indications au Lash & Brow Lifting
          </h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Le lash lifting et brow lifting sont déconseillés dans les cas suivants.
          </p>
        </header>

        {/* Contraindications Grid */}
        <ContraindicationsGrid />

        {/* Warning footer */}
        <div className="mt-12 bg-red-50 border-l-4 border-red-500 p-6 mx-4 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Responsabilité professionnelle</h3>
              <p className="text-red-700">
                En tant que professionnel, il est de votre responsabilité de détecter ces contre-indications lors de la
                consultation préalable. Un questionnaire médical complet et une évaluation visuelle sont essentiels pour
                la sécurité de vos clients lors des traitements de lash et brow lifting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

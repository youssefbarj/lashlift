import { SkinProblemsGrid } from "./components/skin-problems-grid"

export default function SkinProblemsPage() {
  return (
    <div className="min-h-screen px-4" style={{ backgroundColor: "#E6D9FF" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header section - no top spacing */}
        <div className="text-center mb-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Ces problèmes que vos clients veulent absolument résoudre
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            On utilise le <em className="italic">microneedling</em> pour traiter efficacement de nombreuses
            imperfections cutanées telles que :
          </p>
        </div>

        {/* Grid section */}
        <SkinProblemsGrid />
      </div>
    </div>
  )
}

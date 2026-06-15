import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BarChart3, Map, History } from "lucide-react"

export default function ExplorarPage() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-white flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h1 className="font-pixel text-2xl uppercase mb-12 text-center sm:text-left" style={{ textShadow: "2px 2px 0 #6b21a8" }}>
            Explorar o Ecossistema
          </h1>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-neutral-900/50 p-6">
              <Map className="h-6 w-6 text-purple-500 mb-4" />
              <h2 className="text-md font-bold uppercase tracking-wide mb-2">Dynmap (Mapa Web)</h2>
              <p className="text-sm text-neutral-400 mb-4">Visualize todas as claims, construções e bases industriais em tempo real direto pelo navegador.</p>
              <button disabled className="text-xs font-bold text-neutral-600 cursor-not-allowed">EM BREVE</button>
            </div>

            <div className="border border-neutral-800 bg-neutral-900/50 p-6">
              <BarChart3 className="h-6 w-6 text-purple-500 mb-4" />
              <h2 className="text-md font-bold uppercase tracking-wide mb-2">Estatísticas Operacionais</h2>
              <p className="text-sm text-neutral-400 mb-4">Acompanhe métricas de TPS, ping médio e ranking dos jogadores com mais tempo online.</p>
              <button disabled className="text-xs font-bold text-neutral-600 cursor-not-allowed">EM BREVE</button>
            </div>

            <div className="border border-neutral-800 bg-neutral-900/50 p-6">
              <History className="h-6 w-6 text-purple-500 mb-4" />
              <h2 className="text-md font-bold uppercase tracking-wide mb-2">Histórico de Updates</h2>
              <p className="text-sm text-neutral-400 mb-4">Logs completos de atualizações de mods, correções de bugs e banimentos de itens instáveis.</p>
              <button disabled className="text-xs font-bold text-neutral-600 cursor-not-allowed">EM BREVE</button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check, X } from "lucide-react"

const PERMS = ["Tag Exclusiva no Chat", "Acesso ao /fly", "Kit Semanal Avançado", "Prioridade na Fila", "Comando /chunkload", "Suporte VIP Discord"]

const RANKS = [
  { name: "Ouro", price: "R$ 19,90", values: [true, true, true, false, false, false], border: "border-amber-600/40" },
  { name: "Diamante", price: "R$ 39,90", values: [true, true, true, true, true, false], border: "border-cyan-600/40" },
  { name: "Esmeralda", price: "R$ 59,90", values: [true, true, true, true, true, true], border: "border-emerald-600/40", highlight: true },
]

export default function RanksPage() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-white flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="font-pixel text-2xl uppercase sm:text-4xl" style={{ textShadow: "3px 3px 0 #6b21a8" }}>
              Vantagens dos Ranks
            </h1>
            <p className="mt-4 text-neutral-400">Compare os benefícios e escolha a melhor categoria para impulsionar sua automação.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
            {RANKS.map((rank) => (
              <div key={rank.name} className={`border-2 ${rank.highlight ? 'border-purple-600 bg-purple-950/10' : 'border-neutral-800 bg-neutral-900/30'} p-6 sm:p-8 flex flex-col`}>
                <h2 className="text-xl font-bold uppercase tracking-wider">{rank.name}</h2>
                <p className="mt-2 text-2xl font-mono font-bold text-purple-400">{rank.price}<span className="text-xs text-neutral-500 font-sans">/mês</span></p>
                
                <ul className="mt-6 space-y-4 border-t border-neutral-800 pt-6 flex-1">
                  {PERMS.map((perm, index) => (
                    <li key={perm} className="flex items-center gap-3 text-sm text-neutral-300">
                      {rank.values[index] ? (
                        <Check className="h-4 w-4 text-green-500 shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-red-500 shrink-0" />
                      )}
                      {perm}
                    </li>
                  ))}
                </ul>
                <a href="/loja" className="mt-8 block text-center bg-purple-600 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-purple-500 transition-colors">
                  Adquirir Cargo
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MessageSquare, HelpCircle } from "lucide-react"

export default function SuportePage() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-white flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="font-pixel text-2xl uppercase sm:text-3xl" style={{ textShadow: "2px 2px 0 #6b21a8" }}>
              Central de Ajuda
            </h1>
            <p className="mt-3 text-neutral-400">Teve problemas com sua entrega automática ou encontrou bugs de blocos? Estamos aqui.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-12">
            <div className="border border-neutral-800 bg-neutral-900/20 p-6 flex flex-col items-center text-center">
              <MessageSquare className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-bold uppercase tracking-wider text-sm">Discord Oficial</h3>
              <p className="text-xs text-neutral-400 mt-2 mb-4 leading-relaxed">Abra um ticket na aba de suporte de nossa guilda para falar com moderadores.</p>
              <a href="#" className="mt-auto bg-purple-600 px-4 py-2 text-xs font-bold hover:bg-purple-500 transition-colors">ENTRAR NO DISCORD</a>
            </div>

            <div className="border border-neutral-800 bg-neutral-900/20 p-6 flex flex-col items-center text-center">
              <HelpCircle className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-bold uppercase tracking-wider text-sm">Termos de Compra</h3>
              <p className="text-xs text-neutral-400 mt-2 mb-4 leading-relaxed">Entenda nossas políticas de reembolso de itens virtuais e regras de conduta.</p>
              <a href="#" className="mt-auto border border-neutral-700 px-4 py-2 text-xs font-bold hover:border-neutral-500 transition-colors">LER DIRETRIZES</a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
"use client"

import { useState } from "react"
import { useCartStore } from "@/lib/store"
import { useRouter } from "next/navigation"
import { CreditCard, QrCode, Coins, Loader2 } from "lucide-react"

export default function CheckoutPage() {
  const { items, getCartTotal, clearCart } = useCartStore()
  const router = useRouter()
  
  const [nick, setNick] = useState("")
  const [method, setMethod] = useState<"pix" | "card" | "lucoin">("pix")
  const [loading, setLoading] = useState(false)

  async function handleCheckout(e: React.FormEvent) {
    e.preventDefault()
    if (!nick) return alert("Digite seu nick do Minecraft!")
    
    setLoading(true)
    
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nick, items, method, total: getCartTotal() }),
      })
      
      const data = await res.json()
      
      if (data.success) {
        clearCart()
        router.push(`/success?orderId=${data.orderId}`)
      } else {
        alert("Erro ao processar compra.")
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-neutral-950 text-white">
        <p>Seu carrinho está vazio. <a href="/" className="text-purple-400 underline">Voltar à loja</a></p>
      </div>
    )
  }

  return (
    <div className="min-h-dvh bg-neutral-950 py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-xl sm:p-10">
        <h1 className="font-pixel text-2xl text-white mb-8">FINALIZAR PEDIDO</h1>
        
        <form onSubmit={handleCheckout} className="space-y-8">
          {/* Sessão do Jogador */}
          <section>
            <h2 className="text-lg font-bold text-neutral-300 mb-4">1. Identificação no Servidor</h2>
            <div className="space-y-2">
              <label htmlFor="nick" className="text-sm text-neutral-400">Nickname (Exatamente como está no jogo)</label>
              <input 
                id="nick"
                type="text" 
                required
                value={nick}
                onChange={(e) => setNick(e.target.value)}
                placeholder="Ex: Steve"
                className="w-full border-2 border-neutral-700 bg-neutral-950 px-4 py-3 text-white focus:border-purple-500 focus:outline-none"
              />
            </div>
          </section>

          {/* Métodos de Pagamento */}
          <section>
            <h2 className="text-lg font-bold text-neutral-300 mb-4">2. Pagamento</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => setMethod("pix")}
                className={`flex flex-col items-center gap-2 border-2 p-4 transition-colors ${method === "pix" ? "border-green-500 bg-green-500/10 text-green-400" : "border-neutral-700 text-neutral-400 hover:border-neutral-500"}`}
              >
                <QrCode className="h-6 w-6" />
                <span className="font-bold text-sm">PIX</span>
              </button>
              <button
                type="button"
                onClick={() => setMethod("card")}
                className={`flex flex-col items-center gap-2 border-2 p-4 transition-colors ${method === "card" ? "border-purple-500 bg-purple-500/10 text-purple-400" : "border-neutral-700 text-neutral-400 hover:border-neutral-500"}`}
              >
                <CreditCard className="h-6 w-6" />
                <span className="font-bold text-sm">Cartão</span>
              </button>
              <button
                type="button"
                onClick={() => setMethod("lucoin")}
                className={`flex flex-col items-center gap-2 border-2 p-4 transition-colors ${method === "lucoin" ? "border-amber-500 bg-amber-500/10 text-amber-400" : "border-neutral-700 text-neutral-400 hover:border-neutral-500"}`}
              >
                <Coins className="h-6 w-6" />
                <span className="font-bold text-sm">LuCoin (LCN)</span>
              </button>
            </div>
          </section>

          {/* Resumo e Submit */}
          <div className="border-t border-neutral-800 pt-6">
            <button 
              type="submit" 
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 bg-purple-600 py-4 font-bold text-white transition-colors hover:bg-purple-500 disabled:opacity-50"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "CONFIRMAR PAGAMENTO"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
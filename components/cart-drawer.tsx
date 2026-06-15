"use client"

import { useCartStore } from "@/lib/store"
import { X, Trash2, ChevronRight, Plus, Minus } from "lucide-react"
import { useRouter } from "next/navigation"

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

export function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, getCartTotal } = useCartStore()
  const router = useRouter()

  if (!isOpen) return null

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
      <div 
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200" 
        onClick={toggleCart}
      />

      <div className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-md flex-col border-l border-neutral-800 bg-neutral-950 shadow-2xl animate-in slide-in-from-right duration-200">
        
        <div className="flex items-center justify-between border-b border-neutral-800 p-4">
          <div className="flex items-center gap-2">
            <h2 className="font-pixel text-sm uppercase tracking-wider text-white" style={{ textShadow: "1px 1px 0 #6b21a8" }}>
              Seu Inventário
            </h2>
            <span className="bg-purple-600/20 text-purple-400 px-2 py-0.5 text-xs font-bold border border-purple-500/30">
              {totalItems}
            </span>
          </div>
          <button 
            onClick={toggleCart} 
            className="text-neutral-400 hover:text-white transition-colors p-1 hover:bg-neutral-900 rounded"
            aria-label="Fechar carrinho"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <p className="text-sm font-pixel text-neutral-500 uppercase tracking-wide">O inventário está vazio</p>
              <p className="text-xs text-neutral-400 mt-2">Adicione alguns pacotes ou utilitários na loja.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li 
                  key={item.id} 
                  className="flex gap-4 border border-neutral-800 bg-neutral-900/40 p-3 items-center justify-between hover:border-neutral-700 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-white truncate uppercase tracking-wide">{item.name}</h3>
                    <p className="text-xs text-neutral-400 mt-0.5 truncate">{item.tagline}</p>
                    
                    <div className="flex items-center gap-1.5 mt-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="border border-neutral-700 bg-neutral-950 p-1 text-neutral-400 hover:text-white hover:border-purple-500 transition-colors"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-xs font-mono font-bold text-white w-7 text-center bg-neutral-950 border border-neutral-800 py-0.5">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="border border-neutral-700 bg-neutral-950 p-1 text-neutral-400 hover:text-white hover:border-purple-500 transition-colors"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3 ml-4">
                    <button 
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-neutral-500 hover:text-red-500 transition-colors p-1"
                      title="Remover item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <span className="text-sm font-bold text-purple-400 font-mono">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-neutral-800 p-4 bg-neutral-900/80 backdrop-blur-sm">
            <div className="mb-4 flex justify-between items-baseline">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Subtotal:</span>
              <span className="text-xl font-bold text-purple-400 font-mono">
                {formatPrice(getCartTotal())}
              </span>
            </div>
            <button
              onClick={() => {
                toggleCart()
                router.push('/checkout')
              }}
              className="flex w-full items-center justify-center gap-2 bg-purple-600 px-4 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-purple-500 active:bg-purple-700"
            >
              PROSSEGUIR PARA O CHECKOUT
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </>
  )
}
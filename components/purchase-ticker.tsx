"use client"

import { useEffect, useState } from "react"
import { ShoppingBag } from "lucide-react"

const PURCHASES = [
  { player: "Jogador_Sniper", item: "Rank Ouro" },
  { player: "xX_Creeper_Xx", item: "Chave Mística (x10)" },
  { player: "DiamondMiner", item: "Rank VIP Diamante" },
  { player: "NoobMaster69", item: "Mega Booster 3x" },
  { player: "EnderQueen", item: "Caixa Presente Sazonal" },
]

export function PurchaseTicker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % PURCHASES.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const current = PURCHASES[index]

  return (
    <div className="mx-auto mb-20 flex max-w-md items-center gap-3 border border-neutral-800 bg-neutral-900/60 px-4 py-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-purple-600/40 bg-purple-600/10">
        <ShoppingBag className="h-4 w-4 text-purple-400" aria-hidden="true" />
      </span>
      <p className="text-sm text-neutral-400" aria-live="polite">
        <span className="font-semibold text-neutral-50">{current.player}</span>{" "}
        acabou de comprar{" "}
        <span className="font-semibold text-purple-400">{current.item}</span>
      </p>
    </div>
  )
}

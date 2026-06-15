"use client"

import { useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Store } from "@/components/store"
import { PurchaseTicker } from "@/components/purchase-ticker"
import { Footer } from "@/components/footer"
import { CartToast } from "@/components/cart-toast"
import type { Product } from "@/lib/products"

export default function Page() {
  const [cartCount, setCartCount] = useState(2)
  const [toast, setToast] = useState({ show: false, message: "" })
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleAdd(product: Product) {
    setCartCount((c) => c + 1)
    setToast({ show: true, message: `${product.name} adicionado ao carrinho!` })
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(
      () => setToast((t) => ({ ...t, show: false })),
      2500,
    )
  }

  return (
    <div className="min-h-dvh bg-neutral-950">
      <Navbar cartCount={cartCount} />
      <main>
        <Hero />
        <Store onAdd={handleAdd} />
        <PurchaseTicker />
      </main>
      <Footer />
      <CartToast show={toast.show} message={toast.message} />
    </div>
  )
}

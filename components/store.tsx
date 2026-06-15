"use client"

import { useMemo, useState } from "react"
import { FILTERS, PRODUCTS, type Category, type Product } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function Store() {
  const [active, setActive] = useState<Category | "all">("all")

  const filtered = useMemo(
    () =>
      active === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === active),
    [active],
  )

  return (
    <section id="loja" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="text-center">
        <h2
          className="font-pixel text-2xl uppercase text-white sm:text-4xl"
          style={{ textShadow: "3px 3px 0 #6b21a8" }}
        >
          Descubra Nossa Loja
        </h2>
        <p className="mt-5 text-pretty text-neutral-400">
          Escolha seu upgrade e receba na hora, direto no servidor.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((filter) => {
          const isActive = active === filter.key
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActive(filter.key)}
              className={`border-2 px-4 py-2 text-xs font-bold tracking-wide transition-colors ${
                isActive
                  ? "border-purple-600 bg-purple-600 text-white"
                  : "border-neutral-700 text-neutral-300 hover:border-neutral-500 hover:text-white"
              }`}
            >
              {filter.label.toUpperCase()}
            </button>
          )
        })}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

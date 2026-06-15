"use client"

import { Image } from "./ui/Image"
import { Check, ChevronRight } from "lucide-react"
import type { Product } from "@/lib/products"
import { useCartStore } from "@/lib/store"

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem)

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden border-2 border-neutral-800 transition-colors group-hover:border-purple-600">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute left-2 top-2 flex flex-col gap-1.5">
          {product.discount && (
            <span className="bg-red-600 px-2 py-1 text-[11px] font-bold tracking-wide text-white">
              -{product.discount}%
            </span>
          )}
          {product.badge === "bestseller" && (
            <span className="bg-purple-600 px-2 py-1 text-[11px] font-bold tracking-wide text-white">
              MAIS VENDIDO
            </span>
          )}
          {product.badge === "novo" && (
            <span className="bg-fuchsia-500 px-2 py-1 text-[11px] font-bold tracking-wide text-white">
              NOVO
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <h3 className="text-lg font-bold text-white">{product.name}</h3>
        <p className="mt-1 text-sm text-neutral-400">{product.tagline}</p>

        <ul className="mt-3 space-y-1.5">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-neutral-400">
              <Check className="h-4 w-4 shrink-0 text-purple-500" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-sm text-neutral-500 line-through">
            {formatPrice(product.oldPrice)}
          </span>
          <span className="text-xl font-bold text-purple-400">
            {formatPrice(product.price)}
          </span>
        </div>

        <button
          type="button"
          onClick={() => addItem(product)}
          className="group/btn mt-4 flex w-full items-center justify-center gap-2 bg-purple-600 px-4 py-2.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-purple-500"
        >
          COMPRAR
          <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
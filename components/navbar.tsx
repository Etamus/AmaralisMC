"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, Search, ShoppingCart, User, Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "JOGOS", hasMenu: true },
  { label: "LOJA", hasMenu: true },
  { label: "RANKS", hasMenu: true },
  { label: "EXPLORAR", hasMenu: true },
  { label: "SUPORTE", hasMenu: false },
]

export function Navbar({ cartCount }: { cartCount: number }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-900/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center" aria-label="AMALARIS início">
            <span
              className="font-pixel text-sm tracking-tight text-neutral-50 sm:text-base"
              style={{ textShadow: "2px 2px 0 #6b21a8" }}
            >
              AMALARIS
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                className="flex items-center gap-1 rounded px-3 py-2 text-xs font-bold tracking-wide text-neutral-300 transition-colors hover:text-white"
              >
                {link.label}
                {link.hasMenu && <ChevronDown className="h-3.5 w-3.5 text-purple-500" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#loja"
            className="group hidden items-center gap-2 border-2 border-purple-600 px-4 py-2 text-xs font-bold tracking-wide text-purple-400 transition-colors hover:bg-purple-600 hover:text-white sm:flex"
          >
            COMPRAR AGORA
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <button
            aria-label="Buscar"
            className="hidden rounded p-2 text-neutral-300 transition-colors hover:text-white sm:block"
          >
            <Search className="h-5 w-5" />
          </button>

          <button
            aria-label={`Carrinho com ${cartCount} itens`}
            className="relative rounded p-2 text-neutral-300 transition-colors hover:text-white"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-purple-600 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            aria-label="Conta"
            className="hidden items-center gap-1.5 rounded p-2 text-xs font-bold tracking-wide text-neutral-300 transition-colors hover:text-white sm:flex"
          >
            <User className="h-5 w-5" />
            CONTA
          </button>

          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded p-2 text-neutral-300 transition-colors hover:text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-neutral-800 bg-neutral-900 px-4 py-2 lg:hidden" aria-label="Menu móvel">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              className="flex w-full items-center justify-between px-2 py-3 text-sm font-bold tracking-wide text-neutral-300 transition-colors hover:text-white"
            >
              {link.label}
              {link.hasMenu && <ChevronRight className="h-4 w-4 text-purple-500" />}
            </button>
          ))}
          <a
            href="#loja"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 border-2 border-purple-600 px-4 py-3 text-xs font-bold tracking-wide text-purple-400"
          >
            COMPRAR AGORA
            <ChevronRight className="h-4 w-4" />
          </a>
        </nav>
      )}
    </header>
  )
}

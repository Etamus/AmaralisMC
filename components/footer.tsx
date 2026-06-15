"use client"

import { CreditCard, Landmark, MessageCircle, Wallet } from "lucide-react"

const LINKS = [
  "Termos de Serviço",
  "Política de Reembolso",
  "Privacidade",
  "Suporte",
]

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-sm">
            <span
              className="font-pixel text-sm text-neutral-50"
              style={{ textShadow: "2px 2px 0 #15803d" }}
            >
              AMALARIS
            </span>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Pagamentos processados com segurança. Todos os itens são entregues
              automaticamente no servidor após a confirmação.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 bg-[#5865F2] px-6 py-3 text-sm font-bold tracking-wide text-white transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              ENTRE NO DISCORD
            </a>
            <div className="flex items-center gap-3 text-neutral-500">
              <CreditCard className="h-6 w-6" aria-hidden="true" />
              <Wallet className="h-6 w-6" aria-hidden="true" />
              <Landmark className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-sm text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} AMALARIS. Não afiliado à Mojang/Microsoft.</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="transition-colors hover:text-neutral-200">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

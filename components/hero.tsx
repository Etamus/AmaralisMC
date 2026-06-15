"use client"

import { useState } from "react"
import { Image } from "./ui/Image"
import { ChevronRight, Copy, Check, Users } from "lucide-react"

const SERVER_IP = "play.AMALARIS.com.br"

export function Hero() {
  const [copied, setCopied] = useState(false)

  function copyIp() {
    navigator.clipboard?.writeText(SERVER_IP).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Paisagem épica do servidor de Minecraft ao pôr do sol"
        fill
        priority
        className="-z-10 object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950/80 to-transparent" />

      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16">
        <div className="w-full max-w-xl border border-neutral-700/60 bg-neutral-950/85 p-6 backdrop-blur-sm sm:p-8">
          <div className="mb-4 inline-flex items-center gap-2 border border-green-500/40 bg-green-500/10 px-3 py-1 text-xs font-bold tracking-wide text-green-400">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            1.248 JOGADORES ONLINE
          </div>

          <h1
            className="font-pixel text-2xl leading-relaxed text-white sm:text-3xl"
            style={{ textShadow: "3px 3px 0 #15803d" }}
          >
            APOIE O SERVIDOR
          </h1>

          <p className="mt-4 text-pretty leading-relaxed text-neutral-300">
            Adquira ranks, chaves e boosters exclusivos com entrega automática e
            segura. Evolua sua jornada e ajude a manter o servidor sempre online.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#loja"
              className="group flex items-center justify-center gap-2 bg-green-500 px-6 py-3 text-sm font-bold tracking-wide text-neutral-950 transition-colors hover:bg-green-400"
            >
              VER LOJA
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              onClick={copyIp}
              className="flex items-center justify-center gap-2 border-2 border-neutral-600 px-6 py-3 text-sm font-bold tracking-wide text-neutral-200 transition-colors hover:border-green-500 hover:text-green-400"
            >
              {copied ? <Check className="h-4 w-4 text-green-400" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              {copied ? "IP COPIADO!" : SERVER_IP}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

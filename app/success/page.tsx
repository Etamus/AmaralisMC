"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-neutral-950 p-4 text-center">
      <CheckCircle className="mb-6 h-20 w-20 text-green-500" />
      <h1 className="font-pixel text-3xl text-white mb-4">PAGAMENTO APROVADO!</h1>
      <p className="text-neutral-400 max-w-md mx-auto mb-8 text-pretty">
        Obrigado por apoiar o Amalaris! Seus itens serão entregues automaticamente no servidor em até 5 minutos.
      </p>
      {orderId && (
        <p className="mb-8 text-sm text-neutral-500 font-mono">
          ID do Pedido: {orderId}
        </p>
      )}
      <Link 
        href="/"
        className="bg-neutral-800 px-6 py-3 font-bold text-white hover:bg-neutral-700 transition-colors border border-neutral-700"
      >
        VOLTAR PARA A LOJA
      </Link>
    </div>
  )
}
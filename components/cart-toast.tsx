"use client"

import { CheckCircle2 } from "lucide-react"

export function CartToast({ show, message }: { show: boolean; message: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 border-2 border-green-500 bg-neutral-900 px-4 py-3 transition-all duration-300 ease-in-out ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <CheckCircle2 className="h-5 w-5 text-green-400" aria-hidden="true" />
      <span className="text-sm font-medium text-neutral-50">{message}</span>
    </div>
  )
}

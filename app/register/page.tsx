"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      })
      const data = await res.json()

      if (data.success) {
        alert("Conta criada com sucesso!")
        router.push("/login")
      } else {
        alert(data.error || "Erro ao registrar usuário.")
      }
    } catch {
      alert("Falha de processamento.");
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-dvh bg-neutral-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-sm">
        <div className="text-center mb-8">
          <Link href="/" className="font-pixel text-lg text-white block mb-2" style={{ textShadow: "2px 2px 0 #6b21a8" }}>
            AMALARIS
          </Link>
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Criar Novo Cadastro</h2>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Nome Completo</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 px-3 py-2.5 text-sm text-white focus:border-purple-500 focus:outline-none"
              placeholder="Seu nome"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">E-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 px-3 py-2.5 text-sm text-white focus:border-purple-500 focus:outline-none"
              placeholder="exemplo@email.com"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Senha</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 px-3 py-2.5 text-sm text-white focus:border-purple-500 focus:outline-none"
              placeholder="Mínimo 6 caracteres"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-500 font-bold text-sm text-white py-3 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "FINALIZAR CADASTRO"}
          </button>
        </form>

        <p className="text-xs text-center text-neutral-500 mt-6">
          Já possui registro?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Faça login por aqui
          </Link>
        </p>
      </div>
    </div>
  )
}
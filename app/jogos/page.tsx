import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Cpu, Eye, Swords, Compass } from "lucide-react"

const MODES = [
  {
    title: "Sobrevivência Tech",
    desc: "Automação industrial completa com canos, reatores e fábricas massivas sem lag utilizando os principais mods técnicos.",
    icon: Cpu,
  },
  {
    title: "Magia Divina",
    desc: "Domine rituais arcanos e feitiçaria avançada para moldar a realidade e criar ferramentas indestrutíveis.",
    icon: Compass,
  },
  {
    title: "Dungeons & Chefes",
    desc: "Enfrente instâncias customizadas com monstros de progressão de nível avançada e recompensas raras.",
    icon: Swords,
  },
]

export default function JogosPage() {
  return (
    <div className="min-h-dvh bg-neutral-950 text-white flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="font-pixel text-2xl uppercase tracking-wide sm:text-4xl" style={{ textShadow: "3px 3px 0 #6b21a8" }}>
              Nossos Modos de Jogo
            </h1>
            <p className="mt-4 text-neutral-400 text-pretty">
              O Amalaris expande a experiência do modpack All The Mods com uma infraestrutura otimizada de alta performance.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MODES.map((mode) => (
              <div key={mode.title} className="border border-neutral-800 bg-neutral-900/40 p-6 hover:border-purple-600 transition-colors">
                <mode.icon className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{mode.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed text-pretty">{mode.desc}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
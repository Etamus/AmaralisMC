export type Category = "ranks" | "crates" | "boosters"

export type Product = {
  id: string
  name: string
  category: Category
  /** short genre-style subtitle, like the minecraft.net game cards */
  tagline: string
  image: string
  oldPrice: number
  price: number
  discount?: number
  badge?: "bestseller" | "novo"
  features: string[]
}

export const CATEGORY_LABELS: Record<Category | "all", string> = {
  all: "Todos",
  ranks: "Ranks VIP",
  crates: "Chaves",
  boosters: "Boosters",
}

export const PRODUCTS: Product[] = [
  {
    id: "rank-diamante",
    name: "Rank VIP Diamante",
    category: "ranks",
    tagline: "Rank Premium • Acesso Total",
    image: "/images/rank-diamante.png",
    oldPrice: 99.9,
    price: 79.9,
    discount: 20,
    badge: "bestseller",
    features: ["Fly habilitado", "Kit diário exclusivo", "Tag [DIAMANTE]"],
  },
  {
    id: "rank-ouro",
    name: "Rank VIP Ouro",
    category: "ranks",
    tagline: "Rank Intermediário • Vantagens",
    image: "/images/rank-ouro.png",
    oldPrice: 59.9,
    price: 49.9,
    features: ["Acesso a /hat", "Kit semanal", "Tag [OURO]"],
  },
  {
    id: "rank-esmeralda",
    name: "Rank VIP Esmeralda",
    category: "ranks",
    tagline: "Rank Supremo • Todos os Perks",
    image: "/images/rank-esmeralda.png",
    oldPrice: 149.9,
    price: 119.9,
    discount: 20,
    features: ["Todos os perks", "Home extra (x10)", "Suporte prioritário"],
  },
  {
    id: "chave-mistica",
    name: "Chave Mística (x10)",
    category: "crates",
    tagline: "Caixa • Itens Raros",
    image: "/images/chave-mistica.png",
    oldPrice: 39.9,
    price: 29.9,
    discount: 25,
    badge: "bestseller",
    features: ["Itens raros garantidos", "Chance de itens lendários", "Entrega automática"],
  },
  {
    id: "chave-lendaria",
    name: "Chave Lendária (x5)",
    category: "crates",
    tagline: "Caixa • Recompensas Exclusivas",
    image: "/images/chave-lendaria.png",
    oldPrice: 69.9,
    price: 54.9,
    badge: "novo",
    features: ["Recompensas exclusivas", "Cosméticos animados", "Moedas bônus"],
  },
  {
    id: "caixa-presente",
    name: "Caixa Presente Sazonal",
    category: "crates",
    tagline: "Caixa • Edição Limitada",
    image: "/images/caixa-presente.png",
    oldPrice: 44.9,
    price: 34.9,
    discount: 22,
    features: ["Itens do evento", "Skins limitadas", "Edição colecionável"],
  },
  {
    id: "booster-xp",
    name: "Booster de XP 2x (7d)",
    category: "boosters",
    tagline: "Booster • 7 Dias",
    image: "/images/booster-xp.png",
    oldPrice: 24.9,
    price: 19.9,
    features: ["XP em dobro por 7 dias", "Funciona offline", "Acumulável"],
  },
  {
    id: "booster-mega",
    name: "Mega Booster 3x (30d)",
    category: "boosters",
    tagline: "Booster • 30 Dias",
    image: "/images/booster-mega.png",
    oldPrice: 89.9,
    price: 64.9,
    discount: 28,
    badge: "bestseller",
    features: ["XP e money 3x", "Válido por 30 dias", "Prioridade na fila"],
  },
]

export const FILTERS: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "ranks", label: "Ranks VIP" },
  { key: "crates", label: "Chaves" },
  { key: "boosters", label: "Boosters" },
]

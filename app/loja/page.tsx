import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Store } from "@/components/store"
import { CartDrawer } from "@/components/cart-drawer"

export default function LojaPage() {
  return (
    <div className="min-h-dvh bg-neutral-950">
      <Navbar />
      <CartDrawer />
      <main className="pt-6">
        <Store />
      </main>
      <Footer />
    </div>
  )
}
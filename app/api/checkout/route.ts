import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { nick, items, method, total } = body

    // 1. Validação básica de payload
    if (!nick || !items || items.length === 0) {
      return NextResponse.json(
        { error: "Dados inválidos ou carrinho vazio" },
        { status: 400 }
      )
    }

    // 2. TODO Backend (Integração Futura):
    // - Recalcular o valor total pegando os precos do DB para evitar manipulação no front
    // - Verificar se o Nick existe na API da Mojang (opcional, mas recomendado)
    // - Inserir o Pedido no Banco de Dados (Prisma) com status "PENDENTE"
    
    // 3. Roteamento de Meio de Pagamento
    if (method === "pix" || method === "card") {
      // TODO: Gerar preference/intent em Gateway de Pagamento (MercadoPago/Stripe)
      // O webhook do gateway é quem vai avisar o servidor para entregar os itens.
    } else if (method === "lucoin") {
      // TODO: Debitar o valor na carteira LCN do usuário via API proprietária.
      // Se saldo suficiente -> Aprova na hora.
    }

    // Simulando processamento bem-sucedido
    const mockOrderId = `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    return NextResponse.json({ 
      success: true, 
      orderId: mockOrderId,
      message: "Pedido criado com sucesso" 
    })

  } catch (error) {
    console.error("[CHECKOUT_ERROR]", error)
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    )
  }
}
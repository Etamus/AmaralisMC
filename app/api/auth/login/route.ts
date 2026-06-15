import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes" }, { status: 400 })
    }

    // TODO: Injetar consulta de usuário via Prisma
    // const user = await prisma.user.findUnique({ where: { email } })
    // const match = await bcrypt.compare(password, user.password)

    // Simulação temporária de sucesso
    return NextResponse.json({
      success: true,
      user: { email, name: "Jogador Amalaris" }
    })
  } catch (error) {
    return NextResponse.json({ error: "Erro interno no servidor auth" }, { status: 500 })
  }
}
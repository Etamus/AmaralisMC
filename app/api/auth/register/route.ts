import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Campos em branco detectados" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "A senha precisa ter pelo menos 6 caracteres" }, { status: 400 })
    }

    // TODO: Injetar persistência criptografada via Prisma
    // const hashedPassword = await bcrypt.hash(password, 10)
    // await prisma.user.create({ data: { name, email, password: hashedPassword } })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Falha catastrófica ao criar cadastro" }, { status: 500 })
  }
}
import { NextResponse } from "next/server"
import { db } from "@/db"
import { users } from "@/db/schema"
import bcrypt from "bcrypt"
import short from "short-uuid"

export async function POST(req: Request) {
  const { name, email, password } = await req.json()
  const hashedPassword = await bcrypt.hash(password, 10);
  const shortId = short.generate();

  try {
    const [user] = await db
      .insert(users)
      .values({
        id: shortId,
        name,
        email,
        password: hashedPassword,
      })
      .returning({ id: users.id, name: users.name, email: users.email })

    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json({ error: "User registration failed" }, { status: 500 })
  }
}


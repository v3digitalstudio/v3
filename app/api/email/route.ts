import { NextResponse } from "next/server"
import V3WelcomeEmail from "@/emails/welcome"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { email } = await request.json()

  try {
    await resend.sendEmail({
      from: process.env.MAIL_FROM || "",
      to: email,
      subject: "Welcome - V3 Digital Studio",
      react: V3WelcomeEmail({ email }),
    })
    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      }
    )
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`Failed to send email: ${e.message}`)
    }
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    )
  }
}

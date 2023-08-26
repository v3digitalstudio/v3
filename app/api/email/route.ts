import { NextResponse } from "next/server"
import ContactEmail from "@/emails/contact"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(request: Request) {
  // const { firstName, email } = await request.json()

  try {
    await resend.sendEmail({
      // from: process.env.MAIL_FROM || "",
      // to: email,
      from: "onboarding@resend.dev",
      to: "frankie@v3digital.studio",
      subject: "Test email from V3 Digital Studio",
      react: ContactEmail(),
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

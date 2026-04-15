import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 })
    }

    const serviceLabels: Record<string, string> = {
      redesign: "Website Redesign",
      custom: "Custom Web Solution",
      app: "App Development",
      hosting: "Managed Hosting",
      "not-sure": "Not Sure Yet",
      other: "Other",
    }

    await resend.emails.send({
      from: "ColeWebSolutions Contact Form <contact@colewebsolutions.com>",
      to: "matt@colewebsolutions.com",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0f172a;">
          <h2 style="color: #1d4ed8; margin-bottom: 4px;">New Contact Form Submission</h2>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 140px; color: #475569;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #475569;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1d4ed8;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #475569;">Phone</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>` : ""}
            ${company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #475569;">Company</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>` : ""}
            ${service ? `
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #475569;">Service</td>
              <td style="padding: 8px 0;">${serviceLabels[service] ?? service}</td>
            </tr>` : ""}
          </table>

          ${message ? `
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="font-weight: 600; color: #475569; margin: 0 0 8px;">Message</p>
          <p style="margin: 0; white-space: pre-wrap; color: #0f172a;">${message}</p>` : ""}

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">Sent from colewebsolutions.com</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}

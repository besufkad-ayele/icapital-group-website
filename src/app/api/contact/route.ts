import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";

// Zod schema for backend validation
const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000),
});

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.errors },
        { status: 400 },
      );
    }

    // Send email using Resend and React Email
    const { name, email, subject, message } = parsed.data;
    try {
      // Main notification email to your team
      await resend.emails.send({
        from: "Acme <onboarding@resend.dev>", // Change to your verified sender
        to: ["ayebesufkad@gmail.com"], // Change to your recipient(s)
        subject: `Contact Form: ${subject}`,
        react: ContactEmail({ name, email, subject, message }),
      });
      // Auto-reply logic removed for now
    } catch (emailError) {
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, message: "Message received!" });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

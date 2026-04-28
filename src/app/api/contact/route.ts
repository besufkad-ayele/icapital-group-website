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
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    
    if (!parsed.success) {
      console.error("Validation error:", parsed.error.errors);
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.errors },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = parsed.data;
    
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "") {
      console.log("RESEND_API_KEY not configured - logging contact form submission");
      console.log("Contact Form Submission:", { name, email, subject, message });
      
      // Return success for testing without email sending
      return NextResponse.json({ 
        success: true, 
        message: "Message received! We'll get back to you soon. (Email service in testing mode)" 
      });
    }

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      // Send email using Resend and React Email
      const emailResult = await resend.emails.send({
        from: "onboarding@resend.dev", // Use Resend's verified test domain
        to: ["ayebesufkad@gmail.com"], // Recipient email
        subject: `i-Capital Contact: ${subject}`,
        react: ContactEmail({ name, email, subject, message }),
      });
      
      console.log("Email sent successfully:", emailResult);
      
      return NextResponse.json({ 
        success: true, 
        message: "Message received! We'll get back to you soon." 
      });
      
    } catch (emailError: any) {
      console.error("Email sending error:", emailError);
      
      // Log detailed error information
      if (emailError.response) {
        console.error("Error response:", emailError.response.data);
      }
      
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ 
      error: "Server error. Please try again." 
    }, { status: 500 });
  }
}

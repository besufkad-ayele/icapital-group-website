import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";

// Disable caching for this API route since it handles form submissions
export const dynamic = "force-dynamic";

// Rate limiting store (in production, use Redis)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

// Zod schema for backend validation
const contactSchema = z.object({
  name: z.string().min(2).max(50).regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000),
});

// Simple rate limiting function
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // 5 requests per window

  const record = rateLimit.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

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
    
    // Sanitize input (basic HTML escape)
    const sanitizedData = {
      name: name.replace(/[<>]/g, ''),
      email: email.toLowerCase().trim(),
      subject: subject.replace(/[<>]/g, ''),
      message: message.replace(/[<>]/g, '')
    };
    
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "") {
      return NextResponse.json({ 
        success: true, 
        message: "Message received! We'll get back to you soon. (Email service in testing mode)" 
      });
    }

    const recipientEmail = process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@icapital.com";

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || "contact@icapital.com",
        to: [recipientEmail],
        subject: `i-Capital Contact: ${sanitizedData.subject}`,
        react: ContactEmail(sanitizedData),
      });
      
      return NextResponse.json({ 
        success: true, 
        message: "Message received! We'll get back to you soon." 
      });
      
    } catch (emailError: any) {
      console.error("Email sending error:", emailError.message);
      
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 },
      );
    }
  } catch (error: any) {
    console.error("Contact API error:", error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
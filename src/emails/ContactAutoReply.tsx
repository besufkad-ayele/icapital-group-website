import {
  Html,
  Head,
  Preview,
  Section,
  Text,
  Img,
  Container,
} from "@react-email/components";
import * as React from "react";

interface ContactAutoReplyProps {
  name: string;
  subject: string;
  message: string;
}

export const ContactAutoReply = ({
  name,
  subject,
  message,
}: ContactAutoReplyProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting The iCapital Africa Institute</Preview>
      <Section style={{ background: "#f6f6f6", padding: "40px 0" }}>
        <Container
          style={{
            background: "#fff",
            borderRadius: 8,
            maxWidth: 480,
            margin: "0 auto",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            padding: 32,
          }}
        >
          <Img
            src="/images/i-logo.png"
            alt="iCapital Institute Logo"
            width={120}
            style={{ margin: "0 auto 24px auto", display: "block" }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#1F3758",
              marginBottom: 16,
            }}
          >
            Thank you, {name}!
          </Text>
          <Text style={{ fontSize: 16, color: "#333", marginBottom: 16 }}>
            We have received your message and appreciate you reaching out to The
            iCapital Africa Institute. Our team will review your inquiry and get
            back to you as soon as possible.
          </Text>
          <Text style={{ fontSize: 16, color: "#333", marginBottom: 8 }}>
            <strong>Your Subject:</strong> {subject}
          </Text>
          <Text style={{ fontSize: 16, color: "#333", marginBottom: 16 }}>
            <strong>Your Message:</strong>
            <br />
            {message}
          </Text>
          <Text style={{ fontSize: 16, color: "#333", marginBottom: 16 }}>
            If you have any further questions, feel free to reply to this email
            or contact us at{" "}
            <a href="mailto:contact@icapitalafrica.org">
              contact@icapitalafrica.org
            </a>
            .
          </Text>
          <Text style={{ fontSize: 14, color: "#888", marginTop: 32 }}>
            Best regards,
            <br />
            The iCapital Africa Institute Team
          </Text>
        </Container>
      </Section>
    </Html>
  );
};

export default ContactAutoReply;

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

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
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
            New Contact Form Submission
          </Text>
          <Text style={{ fontSize: 16, color: "#333", marginBottom: 8 }}>
            <strong>Name:</strong> {name}
          </Text>
          <Text style={{ fontSize: 16, color: "#333", marginBottom: 8 }}>
            <strong>Email:</strong> {email}
          </Text>
          <Text style={{ fontSize: 16, color: "#333", marginBottom: 8 }}>
            <strong>Subject:</strong> {subject}
          </Text>
          <Text style={{ fontSize: 16, color: "#333", marginBottom: 16 }}>
            <strong>Message:</strong>
            <br />
            {message}
          </Text>
          <Text style={{ fontSize: 14, color: "#888", marginTop: 32 }}>
            &copy; {new Date().getFullYear()} The iCapital Africa Institute
          </Text>
        </Container>
      </Section>
    </Html>
  );
};

export default ContactEmail;

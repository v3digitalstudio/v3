import * as React from "react"
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface V3WelcomeEmailProps {
  email: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ""

export const V3WelcomeEmail = ({ email }: V3WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>A modern development and design agency.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/images/v3-logo-light.png`}
          width="100"
          height="100"
          alt="V3 Logo"
          style={logo}
        />
        <Text style={paragraph}>Hey {email},</Text>
        <Text style={paragraph}>
          Welcome to V3 Digital Studio&apos;s updates. We&apos;ll never spam.
          <br />
          Only the interesting stuff.
        </Text>
        <Section style={btnContainer}>
          <Button
            pX={12}
            pY={12}
            style={button}
            href="https://www.v3digital.studio/contact"
          >
            Let&apos;s Work Together!
          </Button>
        </Section>
        <Text style={paragraph}>
          Cheers!
          <br />
          V3 Digital Studio
        </Text>
        <Hr style={hr} />
        <Text style={footer}>All Rights Reserved</Text>
      </Container>
    </Body>
  </Html>
)

export default V3WelcomeEmail

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
}

const logo = {
  margin: "0 auto",
  marginBottom: "40px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const btnContainer = {
  textAlign: "start" as const,
}

const button = {
  backgroundColor: "#5c63ab",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "12px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  marginTop: "12px",
  marginBottom: "12px",
}

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
}

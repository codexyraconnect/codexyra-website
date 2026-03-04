import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://codexyra.vercel.app"),

  title: {
    default: "Codexyra | Modern Websites for Growing Businesses",
    template: "%s | Codexyra",
  },

  description:
    "Codexyra is a modern web development agency based in Punjab, India. We design and build premium websites, e-commerce stores, and custom web applications for businesses across India and globally.",

  keywords: [
    "Codexyra",
    "Web Development Agency India",
    "Website Development Punjab",
    "Ecommerce Website Development",
    "Next.js Website Development",
    "Business Website Development",
    "Web Design Agency",
  ],

  authors: [{ name: "Codexyra", url: "https://codexyra.vercel.app" }],
  creator: "Codexyra",
  publisher: "Codexyra",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Codexyra | Modern Websites for Growing Businesses",
    description:
      "Codexyra builds modern business websites, e-commerce platforms, and custom web applications.",
    url: "https://codexyra.vercel.app",
    siteName: "Codexyra",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Codexyra Web Development Agency",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Codexyra | Modern Websites for Growing Businesses",
    description:
      "Web development agency building modern websites, e-commerce stores, and web applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "ADD_GOOGLE_VERIFICATION_CODE_HERE",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}

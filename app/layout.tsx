import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import "@/styles/globals.scss"
import type { Metadata } from "next"
import { Inter, Sofia_Sans } from "next/font/google"
import Head from "next/head"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const sofia_sans = Sofia_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sofia-sans",
})

export const metadata: Metadata = {
  title: "Coingarage | Crypto, Banking & Trading, Exchange",
  description:
    "Coingarage is your gateway to the future of finance, offering a seamless and secure way to buy, sell, and trade cryptocurrencies.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sofia_sans.variable}`}>
      <body>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

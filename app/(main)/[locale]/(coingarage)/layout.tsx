import { unstable_setRequestLocale } from "next-intl/server"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import "@/styles/globals.scss"
import type { Metadata } from "next"

import { locales } from "@/config"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: "Coingarage Finance | Crypto, Banking & Trading, Exchange",
  description:
    "Coingarage Finance is your gateway to the future of finance, offering a seamless and secure way to buy, sell, and trade cryptocurrencies.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
}

const IS_PRODUCTION = process.env.NODE_ENV === "production"

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  return (
    <>
      <Header />
      <div className="flex min-h-screen flex-col justify-between">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  )
}

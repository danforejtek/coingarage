import { unstable_setRequestLocale } from "next-intl/server"
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import "@/styles/globals.scss"
import type { Metadata } from "next"

import { locales } from "@/config"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: "Crypto Simply & Safely | Coingarage",
  description:
    "Discover a higher level of financial privacy and freedom than traditional banking systems offer In the simple and secure environment of our exchange. We are an exchange based in the heart of European union. The first to introduce regulation That will make crypto explode here!",
  keywords: "crypto, exchange, bitcoin, ethereum, crypto exchange, crypto trading, crypto wallet, crypto",
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
      {/* <Header /> */}
      <div className="flex min-h-screen flex-col justify-between">
        <div className="flex-1">{children}</div>
        <Footer />
      </div>
    </>
  )
}

import { unstable_setRequestLocale } from "next-intl/server"
import "@/styles/globals.scss"
import type { Metadata } from "next"

import { locales } from "@/config"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: "EEZY TRADER | Crypto, Banking & Trading, Exchange",
  description:
    "EEZY TRADER is your gateway to the future of finance, offering a seamless and secure way to buy, sell, and trade cryptocurrencies.",
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
  return <div>
    <div className="primary-gradient absolute left-0 top-0 -z-10 h-[100vh] w-full"></div>
    {children}
    </div>
}

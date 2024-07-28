import "@/styles/globals.scss"
import { unstable_setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"

import HeaderFinance from "@/components/layout/HeaderFinance"
import FooterFinance from "@/components/layout/FooterFinance"

import { locales } from "@/config"
import { ContactUsWidget } from "@/app/(main)/[locale]/finance/components/contact-us-widget"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: "Coingarage Finance | Crypto, Banking & Trading, Exchange",
  description:
    "Coingarage is your gateway to the future of finance, offering a seamless and secure way to buy, sell, and trade cryptocurrencies.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
}

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
      <div className="tertiary-gradient absolute left-0 top-0 -z-10 h-[100vh] w-full"></div>
      <HeaderFinance />
      <div className="flex min-h-screen flex-col justify-between">
        <div className="flex-1">{children}</div>
        <div className="fixed bottom-0 right-0">
          <ContactUsWidget />
        </div>
        <FooterFinance />
      </div>
    </>
  )
}

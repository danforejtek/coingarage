import { ThemeProvider } from "@/components/theme-provider"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import "@/styles/globals.scss"
import type { Metadata } from "next"
import { Inter, Sofia_Sans } from "next/font/google"
// import { Toaster } from "@/components/ui/toaster"
import { Toaster } from "@/components/ui/sonner"
import GoogleAnalytics from "@/components/google-analytics"
// import UmamiAnalytics from "@/components/UmamiAnalytics"

import { locales, metaLanguagePaths } from "@/config"
import GoogleTagManager from "@/components/google-tag-manager"
import { Suspense } from "react"
import { headers } from "next/headers"
import { SmartlookScript } from "@/components/smartlook-script"
import { Providers } from "@/components/layout/providers"

export const metadata: Metadata = {
  metadataBase: new URL("https://coingarage.io"),
  title: {
    template: "%s | Coingarage",
    default: "Coingarage",
  },
  alternates: {
    canonical: "./",
    languages: metaLanguagePaths,
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

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

const IS_PRODUCTION = process.env.NODE_ENV === "production"

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale)
  const messages = useMessages()
  const headersList = headers()
  const hostname = headersList.get("x-forwarded-host")
  const isFinance = process.env.FINANCE_DOMAIN === hostname

  return (
    <html lang={locale} className={`${inter.variable} ${sofia_sans.variable}`} suppressHydrationWarning>
      <Suspense fallback={null}>
        <GoogleAnalytics isFinance={isFinance} />
        {/* <GoogleTagManager isFinance={isFinance} /> */}
        {isFinance ? <SmartlookScript /> : null}
      </Suspense>
      <body>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
            <Toaster richColors />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  )
}

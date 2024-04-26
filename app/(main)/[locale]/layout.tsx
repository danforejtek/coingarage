import { ThemeProvider } from "@/components/theme-provider"
import { NextIntlClientProvider, useMessages } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import "@/styles/globals.scss"
import type { Metadata } from "next"
import { Inter, Sofia_Sans } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import GoogleAnalytics from "@/components/GoogleAnalytics"
// import UmamiAnalytics from "@/components/UmamiAnalytics"

import { locales } from "@/config"
import GoogleTagManager from "@/components/GoogleTagManager"
import { Suspense } from "react"

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
  return (
    <html lang={locale} className={`${inter.variable} ${sofia_sans.variable}`} suppressHydrationWarning>
      <body>
        <Suspense fallback={null}>
          <GoogleAnalytics />
          <GoogleTagManager />
        </Suspense>
        {/* <UmamiAnalytics isProd={IS_PRODUCTION} /> */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

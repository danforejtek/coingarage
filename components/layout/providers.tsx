"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { MetaMaskProvider } from "@metamask/sdk-react"

export function Providers({ children, locale, ...props }) {
  const host = typeof window !== "undefined" ? window.location.host : "defaultHost"
  const sdkOptions = {
    logging: { developerMode: true },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Coingarage",
      url: host, // using the host constant defined above
    },
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <MetaMaskProvider sdkOptions={sdkOptions}>{children}</MetaMaskProvider>
    </ThemeProvider>
  )
}

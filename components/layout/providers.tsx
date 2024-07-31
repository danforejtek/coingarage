"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { MetaMaskProvider } from "@metamask/sdk-react"

type ProvidersProps = {
  children: React.ReactNode
  locale: string
}

export function Providers({ children, locale }: ProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  )

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <MetaMaskProvider sdkOptions={sdkOptions}>{children}</MetaMaskProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

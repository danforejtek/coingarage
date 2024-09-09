"use client"

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { ReactNode } from "react"
import { WagmiProvider, type Locale } from "wagmi"
import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains"

const config = getDefaultConfig({
  appName: "Coingarage",
  projectId: process.env.NEXT_PUBLIC_CONNECT_WALLET_PROJECT_ID,
  chains: [polygon],
  ssr: true, // If your dApp uses server side rendering (SSR)
})

export const WalletProviders = ({ children, locale }: { children: ReactNode; locale: Locale }) => {
  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider locale={locale}>{children}</RainbowKitProvider>
    </WagmiProvider>
  )
}

"use client"

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { ReactNode } from "react"
import { WagmiProvider, cookieStorage, createConfig, createStorage, http, type Locale } from "wagmi"
import { polygon, mainnet, bsc } from "wagmi/chains"

const config = getDefaultConfig({
  appName: "Coingarage",
  projectId: process.env.NEXT_PUBLIC_CONNECT_WALLET_PROJECT_ID,
  chains: [polygon, mainnet, bsc],
  ssr: true,
  logging: true, // Enable logging for debugging
  storage: createStorage({
    storage: cookieStorage,
  }),
})

export const WalletProviders = ({ children, locale }: { children: ReactNode; locale: Locale }) => {
  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider locale={locale}>{children}</RainbowKitProvider>
    </WagmiProvider>
  )
}

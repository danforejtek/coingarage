"use client"

import { getDefaultConfig, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit"
import { ReactNode } from "react"
import { WagmiProvider, cookieStorage, createConfig, createStorage, http, type Locale } from "wagmi"
import { polygon, mainnet, bsc } from "wagmi/chains"
import { GaraStoreProvider } from "@/lib/store/provider"
import { getRpcNode } from "@/app/api/gara/lib/utils"

const config = getDefaultConfig({
  appName: "Coingarage",
  projectId: process.env.NEXT_PUBLIC_CONNECT_WALLET_PROJECT_ID,
  chains: [polygon, mainnet, bsc],
  transports: {
    [mainnet.id]: getRpcNode(mainnet.name),
    [polygon.id]: getRpcNode(polygon.name),
    [bsc.id]: getRpcNode(bsc.name),
  },
  ssr: true,
  // logging: true, // Enable logging for debugging
  storage: createStorage({
    storage: cookieStorage,
  }),
})

export const WalletProviders = ({ children, locale }: { children: ReactNode; locale: Locale }) => {
  return (
    <GaraStoreProvider>
      <WagmiProvider config={config}>
        <RainbowKitProvider theme={darkTheme()} locale={locale}>
          {children}
        </RainbowKitProvider>
      </WagmiProvider>
    </GaraStoreProvider>
  )
}

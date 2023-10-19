import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Buy Crypto | Coingarage",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

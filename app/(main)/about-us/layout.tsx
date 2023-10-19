import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Coingarage",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

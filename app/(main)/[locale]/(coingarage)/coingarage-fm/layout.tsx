import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coingarage FM",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="primary-gradient absolute left-0 top-0 -z-10 h-[100vh] w-full"></div>
      {children}
    </div>
  )
}

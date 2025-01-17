import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Earn | Coingarage",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div id="btcsaving-layout" className="btcsaving-gradient absolute left-0 top-0 -z-10 h-[100vh] w-full"></div>
      {children}
    </div>
  )
}

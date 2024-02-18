import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Buy Crypto | Coingarage",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div
        className="absolute left-0 top-0 -z-10 h-[100vh] w-full"
        // style={{
        //   background: "linear-gradient(to top, rgba(217, 217, 217, 0.00) 60%, rgba(255, 31, 112, 0.22) 100%)",
        // }}
      ></div>
      {children}
    </div>
  )
}

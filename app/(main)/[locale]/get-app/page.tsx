"use client"
import GetApp from "@/components/promo/GetApp"
import { useOs } from "@/hooks/use-os"
import { useEffect } from "react"

export default function Home() {
  const os = useOs()

  useEffect(() => {
    if (os === "ios") window.location.href = "https://apps.apple.com/cz/app/coingarage/id1672974634"
    if (os === "android") window.location.href = "https://play.google.com/store/apps/details?id=io.coingarage.app"
  }, [os])

  return (
    <div className="container mx-auto mt-12 max-w-[900px]">
      <GetApp />
    </div>
  )
}

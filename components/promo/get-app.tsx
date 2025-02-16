"use client"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function GetApp({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("")
  useEffect(() => {
    setTheme(resolvedTheme !== "dark" ? "" : "dark/")
  }, [resolvedTheme])
  const t = useTranslations("App")
  return (
    <div className={cn(className)}>
      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row md:items-start">
        <div className="scale-100 transition duration-300 ease-in-out hover:skew-x-3 hover:scale-110">
          <Image
            src="/images/promo/phone_3d.png"
            className="animate-slow-bounce"
            alt="Get App"
            width={180}
            height={366}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="mb-6 font-heading text-3xl font-bold">{t("name")}</h2>
          <div className="flex flex-row items-center gap-4 rounded-2xl bg-primary/5 p-6 dark:bg-foreground/5 md:gap-16 md:p-8">
            <Image src="/qr/get-app.svg" alt="Get App" width={134} height={134} className="rounded-xl bg-white p-1" />
            <div className="flex flex-col gap-4">
              <a
                href="https://apps.apple.com/cz/app/coingarage/id1672974634"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md p-2 hover:bg-primary/10 dark:hover:bg-background/30"
              >
                <div className="flex flex-row items-center gap-4">
                  <Image src={`/icons/main/${theme}app_store.svg`} alt="App Store" width={32} height={32} />
                  <div className="font-heading font-bold">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=io.coingarage.app"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-md p-2 hover:bg-primary/10 dark:hover:bg-background/30"
              >
                <div className="flex flex-row items-center gap-4">
                  <Image src={`/icons/main/${theme}google_play.svg`} alt="Play Store" width={32} height={32} />
                  <div className="font-heading font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div className="ml-10 mt-4 font-heading font-bold">
            {t("scanQrCode")}
            <br />
            {t("toDownloadApp")}
          </div>
        </div>
      </div>
    </div>
  )
}

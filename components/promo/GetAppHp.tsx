"use client"
import Heading from "@/components/Heading"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

export const GetAppHp = () => {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("")
  useEffect(() => {
    setTheme(resolvedTheme !== "dark" ? "" : "dark/")
  }, [resolvedTheme])
  const t = useTranslations("App")

  return (
    <div>
      <Heading tag="h2" size="4xl" className="mb-12">
        {t("name")}
      </Heading>
      <p className="text-md mb-4 text-justify text-neutral-600 dark:text-neutral-300 lg:text-left">{t("text")}</p>
      <div className="mt-8 flex flex-row justify-between gap-4 md:justify-start">
        <div className="flex flex-row gap-8">
          <a
            href="https://apps.apple.com/cz/app/coingarage/id1672974634"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md p-2 hover:bg-primary/10"
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
            className="rounded-md p-2 hover:bg-primary/10"
          >
            <div className="flex flex-row items-center gap-4">
              <Image src={`/icons/main/${theme}google_play.svg`} alt="Play Store" width={32} height={32} />
              <div className="font-heading font-bold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

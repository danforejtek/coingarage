"use client"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Safety() {
  const t = useTranslations("security")
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("")
  useEffect(() => {
    setTheme(resolvedTheme !== "dark" ? "" : "dark/")
  }, [resolvedTheme])

  return (
    <section className="container mx-auto mt-28">
      <h3 className="text-center font-heading text-4xl">{t("heading")}</h3>
      <div className="mt-12">
        <div className="grid grid-flow-row gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex min-h-[232px] flex-col gap-4 rounded-xl border border-neutral-300/30 px-8 py-10 shadow-md transition-all transition-all hover:shadow-primary md:min-h-[280px]">
            <div className="flex items-start justify-between gap-4">
              <h5 className="font-heading text-2xl font-bold">{t("security")}</h5>
              <Image src={`/icons/security/${theme}security.svg`} alt="" width={32} height={38} />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{t("securityText")}</p>
          </div>
          <div className="flex min-h-[232px] flex-col gap-4 rounded-xl border border-neutral-300/30 px-8 py-10 shadow-md transition-all hover:shadow-primary md:min-h-[280px]">
            <div className="flex items-start justify-between gap-4">
              <h5 className="font-heading text-2xl font-bold">{t("protection")}</h5>
              <Image src={`/icons/security/${theme}user_security.svg`} alt="" width={32} height={38} />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{t("protectionText")}</p>
          </div>
          <div className="flex min-h-[232px] flex-col gap-4 rounded-xl border border-neutral-300/30 px-8 py-10 shadow-md transition-all hover:shadow-primary md:min-h-[280px]">
            <div className="flex items-start justify-between gap-4">
              <h5 className="font-heading text-2xl font-bold">{t("fundsSecurity")}</h5>
              <Image src={`/icons/security/${theme}finrock.svg`} alt="" width={28} height={37} />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{t("fundsSecurityText")}</p>
          </div>
          <div className="flex min-h-[232px] flex-col gap-4 rounded-xl border border-neutral-300/30 px-8 py-10 shadow-md transition-all hover:shadow-primary md:min-h-[280px]">
            <div className="flex items-start justify-between gap-4">
              <h5 className="font-heading text-2xl font-bold">{t("monitoring")}</h5>
              <Image src={`/icons/security/${theme}monitoring.svg`} alt="" width={32} height={29} />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{t("monitoringText")}</p>
          </div>
          <div className="flex min-h-[232px] flex-col gap-4 rounded-xl border border-neutral-300/30 px-8 py-10 shadow-md transition-all hover:shadow-primary md:min-h-[280px]">
            <div className="flex items-start justify-between gap-4">
              <h5 className="font-heading text-2xl font-bold">{t("secureByDesign")}</h5>
              <Image src={`/icons/security/${theme}lock.svg`} alt="" width={30} height={36} />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{t("secureByDesignText")}</p>
          </div>
          <div className="flex flex-col items-center gap-4 rounded-xl px-8 py-10">
            <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
              <div>
                <Image src={`/logo/coingarage_icon_gradient.png`} alt="Logo" width={130} height={74} />
              </div>
              <Button variant="default" size="lg" className="text-md font-bold" asChild>
                <a href="https://trade.coingarage.io/signup">Get Started</a>
              </Button>
            </div>
            <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-300">{t("heading")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

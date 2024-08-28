"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Card } from "../ui/card"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"

const FunctionsAndSettings = () => {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("")
  useEffect(() => {
    setTheme(resolvedTheme !== "dark" ? "" : "dark/")
  }, [resolvedTheme])
  const t = useTranslations("eezyTrader.functions")

  return (
    <div className="mt-28 lg:flex lg:justify-between">
      <div className="mt-8 max-w-[507px]">
        <h3 className="mb-5 max-w-[396px] text-4xl font-bold">{t("header")}</h3>
        <p className="mb-10">{t("text")}</p>
        <Button className="w-64">{t("startBtn")}</Button>
      </div>

      <div className="mt-24 flex flex-row flex-wrap justify-center gap-4 lg:grid lg:grid-cols-5 lg:grid-rows-1 lg:gap-5">
        <div className="flex flex-col gap-6 lg:mt-14">
          <Card className="flex h-32 w-32 flex-col items-center justify-between py-3">
            <Image width={65} height={65} src="/images/eezy-trader/functions/dca.svg" alt="dca" />
            <p className="text-lg">{t("functionFields.1")}</p>
          </Card>

          <Card className="flex h-40 w-32 flex-col items-center justify-between py-3">
            <Image width={65} height={65} src="/images/eezy-trader/functions/referral.svg" alt="referral" />
            <p className="mt-4 text-center text-lg">{t("functionFields.6")}</p>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <Card className="flex h-32 w-32 flex-col items-center justify-between py-3">
            <Image width={65} height={65} src="/images/eezy-trader/functions/grid.svg" alt="grid" />
            <p className="text-lg">{t("functionFields.2")}</p>
          </Card>

          <Card className="flex h-40 w-32 flex-col items-center justify-between py-3 lg:h-32">
            <Image width={65} height={65} src="/images/eezy-trader/functions/pairs.svg" alt="pairs" />
            <p className="mt-4 text-center text-lg">{t("functionFields.7")}</p>
          </Card>
        </div>

        <div className="flex flex-col gap-6 lg:mt-14">
          <Card className="flex h-32 w-32 flex-col items-center justify-between py-3">
            <Image width={65} height={65} src="/images/eezy-trader/functions/bot.svg" alt="bot" />
            <p className="text-lg">{t("functionFields.3")}</p>
          </Card>

          <Card className="flex h-40 w-32 flex-col items-center justify-between py-3">
            <Image width={65} height={65} src="/images/eezy-trader/functions/file.svg" alt="file" />
            <p className="mt-4 text-center text-lg">{t("functionFields.8")}</p>
          </Card>
        </div>

        <div className="flex flex-col gap-6 lg:mt-28">
          <Card className="flex h-32 w-32 flex-col items-center justify-between py-3">
            <Image
              width={65}
              height={65}
              src="/images/eezy-trader/functions/long.svg"
              alt="long"
              className="text-white"
            />
            <p className="text-lg">{t("functionFields.5")}</p>
          </Card>

          <Card className="flex w-32 flex-col items-center justify-between py-3">
            <Image width={65} height={65} src="/images/eezy-trader/functions/saveStrategy.svg" alt="saveStrategy" />
            <p className="mt-4 px-1 text-center text-lg">{t("functionFields.9")}</p>
          </Card>
        </div>

        <div className="flex flex-col gap-6 lg:mt-14">
          <Card className="flex h-32 w-32 flex-col items-center justify-between py-3">
            <Image width={65} height={65} src="/images/eezy-trader/functions/short.svg" alt="short" />
            <p className="text-lg">{t("functionFields.5")}</p>
          </Card>

          <Card className="flex h-40 w-32 flex-col items-center justify-between py-3 lg:h-32">
            <Image width={65} height={65} src="/images/eezy-trader/functions/knowledgeBase.svg" alt="knowledgeBase" />
            <p className="mt-4 text-center text-lg">{t("functionFields.10")}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default FunctionsAndSettings

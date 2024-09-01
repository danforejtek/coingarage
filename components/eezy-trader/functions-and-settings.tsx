"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Card } from "../ui/card"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import DcaSvg from "@/public/images/eezy-trader/functions/dca.svg"
import ReferralSvg from "@/public/images/eezy-trader/functions/referral.svg"
import GridSvg from "@/public/images/eezy-trader/functions/grid.svg"
import PairsSvg from "@/public/images/eezy-trader/functions/pairs.svg"
import BotSvg from "@/public/images/eezy-trader/functions/bot.svg"
import FileSvg from "@/public/images/eezy-trader/functions/file.svg"
import LongSvg from "@/public/images/eezy-trader/functions/long.svg"
import SaveStrategySvg from "@/public/images/eezy-trader/functions/saveStrategy.svg"
import ShortSvg from "@/public/images/eezy-trader/functions/short.svg"
import KnowledgeBaseSvg from "@/public/images/eezy-trader/functions/knowledgeBase.svg"

const FunctionsAndSettings = () => {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("")

  useEffect(() => {
    setTheme(resolvedTheme !== "dark" ? "light" : "dark")
  }, [resolvedTheme])
  const t = useTranslations("eezyTrader.functions")

  return (
    <div className="mt-28 lg:flex lg:justify-between">
      <div className="mt-8 max-w-[507px]">
        <h3 className="mb-5 max-w-[396px] font-heading text-4xl font-bold">{t("header")}</h3>
        <p className="mb-10 font-heading">{t("text")}</p>
        <Button className="w-64">{t("startBtn")}</Button>
      </div>

      <div className="mt-24 flex flex-row flex-wrap justify-center gap-4 lg:grid lg:grid-cols-5 lg:grid-rows-1 lg:gap-5">
        <div className="flex flex-col gap-6 lg:mt-14">
          <Card className="flex h-32 w-32 flex-col items-center justify-between py-3">
            <DcaSvg className="dark:fill-white" />
            <p className="text-lg">{t("functionFields.1")}</p>
          </Card>

          <Card className="flex h-40 w-32 flex-col items-center justify-between py-3">
            <ReferralSvg className="dark:fill-white" />
            <p className="mt-4 text-center text-lg">{t("functionFields.6")}</p>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <Card className="flex h-32 w-32 flex-col items-center justify-between py-3">
            <GridSvg className="dark:fill-white" />
            <p className="text-lg">{t("functionFields.2")}</p>
          </Card>

          <Card className="flex h-40 w-32 flex-col items-center justify-between py-3 lg:h-32">
            <PairsSvg className="dark:fill-white" />
            <p className="mt-4 text-center text-lg">{t("functionFields.7")}</p>
          </Card>
        </div>

        <div className="flex flex-col gap-6 lg:mt-14">
          <Card className="flex h-32 w-32 flex-col items-center justify-between py-3">
            <BotSvg className="dark:fill-white" />
            <p className="text-lg">{t("functionFields.3")}</p>
          </Card>

          <Card className="flex h-40 w-32 flex-col items-center justify-between py-3">
            <FileSvg className="dark:fill-white" />
            <p className="mt-4 text-center text-lg">{t("functionFields.8")}</p>
          </Card>
        </div>

        <div className="flex flex-col gap-6 lg:mt-28">
          <Card className="flex h-32 w-32 flex-col items-center justify-between py-3">
            <LongSvg className="dark:fill-white" />
            <p className="text-lg">{t("functionFields.4")}</p>
          </Card>

          <Card className="flex w-32 flex-col items-center justify-between py-3">
            <SaveStrategySvg className="dark:fill-white" />
            <p className="mt-4 px-1 text-center text-lg">{t("functionFields.9")}</p>
          </Card>
        </div>

        <div className="flex flex-col gap-6 lg:mt-14">
          <Card className="flex h-32 w-32 flex-col items-center justify-between py-3">
            <ShortSvg className="dark:fill-white" />
            <p className="text-lg">{t("functionFields.5")}</p>
          </Card>

          <Card className="flex h-40 w-32 flex-col items-center justify-between py-3 lg:h-32">
            <KnowledgeBaseSvg className="dark:fill-white" />
            <p className="mt-4 text-center text-lg">{t("functionFields.10")}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default FunctionsAndSettings

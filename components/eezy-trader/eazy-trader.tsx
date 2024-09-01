"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import FinanceSvg from "@/public/images/eezy-trader/icons/finance.svg"
import EffectivitySvg from "@/public/images/eezy-trader/icons/effectivity.svg"
import NeverSleepSvg from "@/public/images/eezy-trader/icons/neversleep.svg"
import Strategy from "@/public/images/eezy-trader/icons/strategy.svg"
import Emotional from "@/public/images/eezy-trader/icons/emotional.svg"

const EezyTrader = () => {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("")

  useEffect(() => {
    setTheme(resolvedTheme !== "dark" ? "light" : "dark")
  }, [resolvedTheme])

  const etMain = useTranslations("eezyTrader.main")

  return (
    <div className="container">
      <div className="flex pl-12 xl:pl-2">
        <div className="mt-6 flex w-1/2 flex-col gap-4 lg:mt-56">
          <h3 className="text-left font-heading text-3xl md:text-4xl lg:text-5xl"> {etMain("header")} </h3>
          <p> {etMain("text")} </p>
          <Button className="mt-12 w-64 md:mt-4">{etMain("startBtn")}</Button>
        </div>

        <div className="mt-40 w-1/3 xl:w-1/2">
          <Image
            width={612}
            height={574}
            src="/images/eezy-trader/images/robotcomputer.png"
            alt="robot"
            className="z-5"
          />
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-5 mt-12 flex w-full flex-col gap-6 px-8 md:px-12 lg:flex-row lg:px-4 xl:mt-0">
          <Card className="flex w-full flex-col gap-4 border-white px-7 pb-10 pt-8 text-center lg:min-h-72">
            <FinanceSvg className="mx-auto dark:fill-white" />
            <p className="text-primary">{etMain("cards.1.header")}</p>
            <p>{etMain("cards.1.text")}</p>
          </Card>
          <Card className="flex w-full flex-col gap-4 border-white px-7 pb-10 pt-8 text-center lg:min-h-72">
            <EffectivitySvg className="mx-auto dark:fill-white" />
            <p className="text-primary">{etMain("cards.2.header")}</p>
            <p>{etMain("cards.2.text")}</p>
          </Card>
          <Card className="flex w-full flex-col gap-4 border-white px-7 pb-10 pt-8 text-center lg:min-h-72">
            <NeverSleepSvg className="mx-auto dark:fill-white" />
            <p className="text-primary">{etMain("cards.3.header")}</p>
            <p>{etMain("cards.3.text")}</p>
          </Card>
          <Card className="flex w-full flex-col gap-4 border-white px-7 pb-10 pt-8 text-center lg:min-h-72">
            <Emotional className="mx-auto dark:fill-white" />
            <p className="text-primary">{etMain("cards.4.header")}</p>
            <p>{etMain("cards.4.text")}</p>
          </Card>
          <Card className="flex w-full flex-col gap-4 border-white px-7 pb-10 pt-8 text-center lg:min-h-72">
            <Strategy className="mx-auto dark:fill-white" />
            <p className="text-primary">{etMain("cards.5.header")} </p>
            <p>{etMain("cards.5.text")}</p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default EezyTrader

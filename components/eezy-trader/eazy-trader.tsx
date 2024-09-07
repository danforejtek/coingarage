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
      <div className="">
        <div className="mt-6 flex flex-col gap-4 lg:mt-16 lg:w-1/2">
          <h3 className="text-left font-heading text-3xl font-bold md:text-4xl lg:text-5xl"> {etMain("header")} </h3>
          <p className="pr-[40%] md:pr-[30%] lg:pr-0">{etMain("text")}</p>
          <div className="justify-left mt-16 flex w-full flex-row">
            <Button className="mx-auto mt-8 min-w-64 border-white md:mt-4 ">{etMain("startBtn")}</Button>
          </div>
        </div>
      </div>

      <div className="mt-20 flex w-full flex-row flex-wrap items-center justify-center gap-6 sm:mt-48 md:mt-32">
        <Card className="flex w-full max-w-[244px] flex-col gap-4 border bg-background px-7 pb-10 pt-8 text-center lg:min-h-72">
          <FinanceSvg className="mx-auto dark:fill-white" />
          <p className="text-primary">{etMain("cards.1.header")}</p>
          <p>{etMain("cards.1.text")}</p>
        </Card>
        <Card className="flex w-full max-w-[244px] flex-col gap-4 border bg-background px-7 pb-10 pt-8 text-center lg:min-h-72">
          <EffectivitySvg className="mx-auto dark:fill-white" />
          <p className="text-primary">{etMain("cards.2.header")}</p>
          <p>{etMain("cards.2.text")}</p>
        </Card>
        <Card className="flex w-full max-w-[244px] flex-col gap-4 border bg-background px-7 pb-10 pt-8 text-center lg:min-h-72">
          <NeverSleepSvg className="mx-auto dark:fill-white" />
          <p className="text-primary">{etMain("cards.3.header")}</p>
          <p>{etMain("cards.3.text")}</p>
        </Card>
        <Card className="flex w-full max-w-[244px] flex-col gap-4 border bg-background px-7 pb-10 pt-8 text-center lg:min-h-72">
          <Emotional className="mx-auto dark:fill-white" />
          <p className="text-primary">{etMain("cards.4.header")}</p>
          <p>{etMain("cards.4.text")}</p>
        </Card>
        <Card className="flex w-full max-w-[244px] flex-col gap-4 border bg-background px-7 pb-10 pt-8 text-center lg:min-h-72">
          <Strategy className="mx-auto dark:fill-white" />
          <p className="text-primary">{etMain("cards.5.header")} </p>
          <p>{etMain("cards.5.text")}</p>
        </Card>
      </div>
    </div>
  )
}

export default EezyTrader

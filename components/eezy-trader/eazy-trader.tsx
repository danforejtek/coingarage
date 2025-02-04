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

  const cards = [
    { svg: <FinanceSvg className="mx-auto dark:fill-white" /> },
    { svg: <EffectivitySvg className="mx-auto dark:fill-white" /> },
    { svg: <NeverSleepSvg className="mx-auto dark:fill-white" /> },
    { svg: <Emotional className="mx-auto dark:fill-white" /> },
    { svg: <Strategy className="mx-auto dark:fill-white" /> },
  ]

  return (
    <div className="container">
      <div className="">
        <div className="mt-6 flex flex-col gap-4 lg:mt-16 lg:w-1/2">
          <h3 className="text-left font-heading text-3xl font-bold md:text-4xl lg:text-5xl"> {etMain("header")} </h3>
          <p className="pr-[24%] sm:pr-[40%] md:pr-[30%] lg:pr-0">{etMain("text")}</p>
          <div className="justify-left mt-20 flex w-full flex-row">
            <Button className="mt-3 sm:mt-12 w-36 h-auto sm:min-w-64 md:mt-4 ">{etMain("startBtn")}</Button>
          </div>
        </div>
      </div>

      <div className="mt-[30vw] flex gap-[4%] w-full flex-row flex-wrap justify-center sm:gap-6 sm:mt-48 md:mt-32 items-stretch">
        {cards.map((card, index) => (
          <Card
            key={index}
            className="flex mb-[4vw] sm:mb-0 p-6 w-full max-w-[48%] sm:max-w-[244px] flex-col sm:gap-4 border-none bg-backgroundMuted sm:px-7 sm:pb-10 sm:pt-8 text-center lg:min-h-72"
          >
            {card.svg}
            <p className="text-primary">{etMain(`cards.${index + 1}.header`)}</p>
            <p>{etMain(`cards.${index + 1}.text`)}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default EezyTrader

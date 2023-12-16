"use client"
import Image from "next/image"
import Heading from "./Heading"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"

const up = "text-green-500"
const down = "text-red-500"

// const usd = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
// })

const percents = new Intl.NumberFormat("en-US", {
  style: "percent",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const TraderCard = ({ name, image, followers, roi, followersPln }) => {
  const t = useTranslations("DiscoverMoreProducts")
  return (
    <div className="w-56 rounded-xl bg-white p-4 dark:bg-gray-800">
      <div className="grid grid-cols-[44px_1fr] gap-4">
        <div>
          <Image src={image} alt="avatar" width={44} height={44} />
        </div>
        <div>
          <div className="flex flex-col gap-2 text-lg font-medium">{name}</div>
          <div className="text-xs text-neutral-500">
            {followers} {t("eezyTrader.followers")}
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="font-heading font-bold">{t("eezyTrader.bestTraders.7DROI")}</div>
        <span className={cn("text-sm text-neutral-400", roi > 0 ? up : down)}>{percents.format(roi)}</span>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="font-heading font-bold">{t("eezyTrader.bestTraders.7DFollowersPnL")}</div>
        <span className={cn("text-sm text-neutral-400", followersPln > 0 ? up : down)}>
          {percents.format(followersPln)}
        </span>
      </div>
      <div>
        <Button variant="ghost" className="mt-8 w-full p-0 font-bold text-primary hover:bg-transparent">
          <div className="flex w-full flex-row justify-between font-heading text-base">
            <span>{t("eezyTrader.bestTraders.copy")}</span>
            <span>
              <ChevronRight width="16px" />
            </span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default function GeniusTrader() {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("")
  useEffect(() => {
    setTheme(resolvedTheme !== "dark" ? "" : "dark/")
  }, [resolvedTheme])
  const t = useTranslations("DiscoverMoreProducts")

  return (
    <>
      <Heading tag="h2" size="4xl" className="mb-8">
        {t("name")}
      </Heading>

      <div className="rounded-2xl bg-neutral-100 p-10 dark:bg-backgroundMuted">
        <div className="flex flex-row flex-wrap justify-center gap-8 lg:justify-between">
          <div>
            <Heading tag="h3" size="3xl">
              {t("eezyTrader.name")}
            </Heading>
            <div className="mt-8 font-heading text-lg text-primary">{t("eezyTrader.text")}</div>
            <div className="flex flex-row gap-8">
              <div className="mt-4 flex flex-col">
                <div className="font-heading text-2xl font-bold">32,200</div>
                <div className="text-sm text-neutral-500">{t("eezyTrader.masterTraders")}</div>
              </div>
              <div className="mt-4 flex flex-col ">
                <div className="font-heading text-2xl font-bold">320,200</div>
                <div className="text-sm text-neutral-500">{t("eezyTrader.followers")}</div>
              </div>
            </div>
            <Link href="/trading-bot">
              <Button variant="default" size="lg" className="text-md mt-12 font-bold lg:mt-48">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="mt-8">
            <div className="font-heading text-lg text-primary">{t("eezyTrader.masterTraders")}</div>
            <div className="flex flex-col gap-8 sm:flex-row">
              <TraderCard
                name="John Moon"
                image="/images/avatars/zombie.png"
                followers="245"
                followersPln={1.0447}
                roi={1.0447}
              />
              <TraderCard
                name="Toni Crypto"
                image="/images/avatars/batman.png"
                followers="245"
                followersPln={0.5004}
                roi={0.5004}
              />
            </div>
          </div>
          <div className="mt-8 max-w-[280px] md:mt-0">
            <div className="flex flex-col gap-12">
              <div className="grid grid-cols-[44px_1fr] gap-4">
                <Image src={`/icons/main/${theme}bot.svg`} alt="avatar" width={48} height={48} />
                <div>
                  <div className="font-heading text-lg font-bold text-primary">
                    {t("eezyTrader.features.tradingBot.name")}
                  </div>
                  <div className="font-heading text-base text-black dark:text-gray-100">
                    {t("eezyTrader.features.tradingBot.text")}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[44px_1fr] gap-4">
                <Image src={`/icons/main/${theme}take_profit.svg`} alt="avatar" width={48} height={48} />
                <div>
                  <div className="font-heading text-lg font-bold text-primary">
                    {t("eezyTrader.features.takeProfit.name")}
                  </div>
                  <div className="font-heading text-base text-black dark:text-gray-100">
                    {t("eezyTrader.features.takeProfit.text")}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[44px_1fr] gap-4">
                <Image src={`/icons/main/${theme}copy_trading.svg`} alt="avatar" width={48} height={48} />
                <div>
                  <div className="font-heading text-lg font-bold text-primary">
                    {t("eezyTrader.features.copyTrading.name")}
                  </div>
                  <div className="font-heading text-base text-black dark:text-gray-100">
                    {t("eezyTrader.features.copyTrading.text")}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[44px_1fr] gap-4">
                <Image src={`/icons/main/${theme}spot_trading.svg`} alt="avatar" width={48} height={48} />
                <div>
                  <div className="font-heading text-lg font-bold text-primary">
                    {t("eezyTrader.features.bargain.name")}
                  </div>
                  <div className="font-heading text-base text-black dark:text-gray-100">
                    {t("eezyTrader.features.bargain.text")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

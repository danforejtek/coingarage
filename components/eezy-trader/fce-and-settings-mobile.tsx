import React, { useEffect, useState } from "react"
import { Card } from "../ui/card"
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
import { useTheme } from "next-themes"
import { useTranslations } from "next-intl"

type Props = {}

const functionCards = [
  { svg: DcaSvg, titleKey: "functionFields.1" },
  { svg: ReferralSvg, titleKey: "functionFields.6" },
  { svg: GridSvg, titleKey: "functionFields.2" },
  { svg: PairsSvg, titleKey: "functionFields.7" },
  { svg: BotSvg, titleKey: "functionFields.3" },
  { svg: FileSvg, titleKey: "functionFields.8" },
  { svg: LongSvg, titleKey: "functionFields.4" },
  { svg: SaveStrategySvg, titleKey: "functionFields.9" },
  { svg: ShortSvg, titleKey: "functionFields.5" },
  { svg: KnowledgeBaseSvg, titleKey: "functionFields.10" },
]

const FceAndSettingsMobile = (props: Props) => {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("")

  useEffect(() => {
    setTheme(resolvedTheme !== "dark" ? "light" : "dark")
  }, [resolvedTheme])
  const t = useTranslations("eezyTrader.functions")

  return (
    <div className="mt-4 flex flex-wrap justify-center gap-6">
      {functionCards.map((card, index) => (
        <Card key={index} className="flex border-0 h-[150px] w-32 flex-col items-center justify-between py-3 dark:bg-[#1D1E25]">
          <card.svg className="dark:fill-white" />
          <p className="mt-1 px-2 text-center text-lg md:mt-4">{t(card.titleKey)}</p>
        </Card>
      ))}
    </div>
  )
}

export default FceAndSettingsMobile

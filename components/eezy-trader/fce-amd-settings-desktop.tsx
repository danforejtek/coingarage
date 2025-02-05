import { useMediaQuery } from "@mantine/hooks"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
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

const FceAndSettingsDesktop = () => {
  const { resolvedTheme } = useTheme()
  const [theme, setTheme] = useState("")

  useEffect(() => {
    setTheme(resolvedTheme !== "dark" ? "light" : "dark")
  }, [resolvedTheme])
  const t = useTranslations("eezyTrader.functions")
  
  const cardClass = "flex h-auto border-0 w-32 flex-col items-center justify-between py-3 px-2 dark:bg-[#1D1E25]"
  const captionClass = "mt-4 text-lg text-center"
  const svgClass = "dark:fill-white"

  return (
    <>
      <div className="flex flex-col gap-6 lg:mt-14">
        <Card className={cardClass}>
          <DcaSvg className={svgClass} />
          <p className={captionClass}>{t("functionFields.1")}</p>
        </Card>

        <Card className={cardClass}>
          <ReferralSvg className={svgClass} />
          <p className={captionClass}>{t("functionFields.6")}</p>
        </Card>
      </div>

      <div className="flex flex-col gap-6">
        <Card className={cardClass}>
          <GridSvg className={svgClass} />
          <p className={captionClass}>{t("functionFields.2")}</p>
        </Card>

        <Card className={cardClass}>
          <PairsSvg className={svgClass} />
          <p className={captionClass}>{t("functionFields.7")}</p>
        </Card>
      </div>

      <div className="flex flex-col gap-6 lg:mt-14">
        <Card className={cardClass}>
          <BotSvg className={svgClass} />
          <p className={captionClass}>{t("functionFields.3")}</p>
        </Card>

        <Card className={cardClass}>
          <FileSvg className={svgClass} />
          <p className={captionClass}>{t("functionFields.8")}</p>
        </Card>
      </div>

      <div className="flex flex-col gap-6 lg:mt-28">
        <Card className={cardClass}>
          <LongSvg className={svgClass} />
          <p className={captionClass}>{t("functionFields.4")}</p>
        </Card>

        <Card className={cardClass}>
          <SaveStrategySvg className={svgClass} />
          <p className={captionClass}>{t("functionFields.9")}</p>
        </Card>
      </div>

      <div className="flex flex-col gap-6 lg:mt-14">
        <Card className={cardClass}>
          <ShortSvg className={svgClass} />
          <p className={captionClass}>{t("functionFields.5")}</p>
        </Card>

        <Card className={cardClass}>
          <KnowledgeBaseSvg className={svgClass} />
          <p className={captionClass}>{t("functionFields.10")}</p>
        </Card>
      </div>
    </>
  )
}

export default FceAndSettingsDesktop

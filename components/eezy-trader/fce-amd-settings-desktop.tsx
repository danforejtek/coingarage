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

  return (
    <>
      <div className="flex flex-col gap-6 lg:mt-14">
        <Card className="flex h-32 w-32 flex-col items-center justify-between py-3 dark:bg-[#1D1E25]">
          <DcaSvg className="dark:fill-white" />
          <p className="text-lg">{t("functionFields.1")}</p>
        </Card>

        <Card className="flex h-40 w-32 flex-col items-center justify-between py-3 dark:bg-[#1D1E25]">
          <ReferralSvg className="dark:fill-white" />
          <p className="mt-4 text-center text-lg">{t("functionFields.6")}</p>
        </Card>
      </div>

      <div className="flex flex-col gap-6">
        <Card className="flex h-32 w-32 flex-col items-center justify-between py-3 dark:bg-[#1D1E25]">
          <GridSvg className="dark:fill-white" />
          <p className="text-lg">{t("functionFields.2")}</p>
        </Card>

        <Card className="flex h-40 w-32 flex-col items-center justify-between py-3 dark:bg-[#1D1E25] lg:h-32">
          <PairsSvg className="dark:fill-white" />
          <p className="mt-4 text-center text-lg">{t("functionFields.7")}</p>
        </Card>
      </div>

      <div className="flex flex-col gap-6 lg:mt-14">
        <Card className="flex h-32 w-32 flex-col items-center justify-between py-3 dark:bg-[#1D1E25]">
          <BotSvg className="dark:fill-white" />
          <p className="text-lg">{t("functionFields.3")}</p>
        </Card>

        <Card className="flex h-40 w-32 flex-col items-center justify-between py-3 dark:bg-[#1D1E25]">
          <FileSvg className="dark:fill-white" />
          <p className="mt-4 text-center text-lg">{t("functionFields.8")}</p>
        </Card>
      </div>

      <div className="flex flex-col gap-6 lg:mt-28">
        <Card className="flex h-32 w-32 flex-col items-center justify-between py-3 dark:bg-[#1D1E25]">
          <LongSvg className="dark:fill-white" />
          <p className="text-lg">{t("functionFields.4")}</p>
        </Card>

        <Card className="flex w-32 flex-col items-center justify-between py-3 dark:bg-[#1D1E25]">
          <SaveStrategySvg className="dark:fill-white" />
          <p className="mt-4 px-1 text-center text-lg">{t("functionFields.9")}</p>
        </Card>
      </div>

      <div className="flex flex-col gap-6 lg:mt-14">
        <Card className="flex h-32 w-32 flex-col items-center justify-between py-3 dark:bg-[#1D1E25]">
          <ShortSvg className="dark:fill-white" />
          <p className="text-lg">{t("functionFields.5")}</p>
        </Card>

        <Card className="flex h-40 w-32 flex-col items-center justify-between py-3 dark:bg-[#1D1E25] lg:h-32">
          <KnowledgeBaseSvg className="dark:fill-white" />
          <p className="mt-4 text-center text-lg">{t("functionFields.10")}</p>
        </Card>
      </div>
    </>
  )
}

export default FceAndSettingsDesktop

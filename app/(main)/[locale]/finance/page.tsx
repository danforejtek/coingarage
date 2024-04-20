import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
// import Figure from "@/components/Figure"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Heading from "@/components/Heading"
import TradingIcon from "@/public/images/finance/icons/trading.svg"
import AcademyIcon from "@/public/images/finance/icons/academy.svg"
import BitcoinSavingsIcon from "@/public/images/finance/icons/bitcoinSavings.svg"
import CoinListingIcon from "@/public/images/finance/icons/coinListing.svg"
import CryptoCardIcon from "@/public/images/finance/icons/cryptoCard.svg"
import GaraCoinIcon from "@/public/images/finance/icons/garaCoin.svg"
import MobileAppIcon from "@/public/images/finance/icons/mobileApp.svg"
import NftIcon from "@/public/images/finance/icons/nft.svg"
import ReferralIcon from "@/public/images/finance/icons/referral.svg"
import TradingBotIcon from "@/public/images/finance/icons/tradingBot.svg"
import StakingIcon from "@/public/images/finance/icons/staking.svg"

export const IconFigure = ({
  status,
  caption,
  children,
}: {
  status: string
  caption: string
  children: React.ReactNode
}) => {
  const statusImage =
    status === "done"
      ? "/images/finance/icons/done.svg"
      : status === "inDevelopment"
        ? "/images/finance/icons/inDevelopment.svg"
        : "/images/finance/icons/planned.svg"
  return (
    <figure className="rounded-lg border px-2 pb-6 pt-2">
      <div className="flex flex-row-reverse">
        <Image src={statusImage} width={18} height={18} alt="" />
      </div>
      <div className="px-6 py-2">{children}</div>
      <figcaption className="text-center font-heading">{caption}</figcaption>
    </figure>
  )
}

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("finance")

  return (
    <main className="relative">
      <section className="container mx-auto mt-8 flex flex-wrap items-center justify-center gap-12 lg:grid lg:grid-cols-2 lg:flex-row lg:items-start xl:mt-20 xl:justify-between xl:gap-6">
        <div>
          <div className="w-full max-w-[500px]">
            <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">
              <div>{t("nameLine1")}</div>
              <div>{t("nameLine2")}</div>
              <div className="text-primary">{t("nameLine3")}</div>
            </h1>
            <p className="text-md mb-4 text-justify text-neutral-600 dark:text-neutral-300 lg:text-left">
              {t.rich("mainText", { b: (chunks) => <b>{chunks}</b> })}
            </p>
          </div>
          <div className="w-full max-w-[500px]">
            <div className="mt-8 flex flex-row flex-wrap gap-4">
              <Button variant="default" size="lg" className="text-md w-full sm:w-max" asChild>
                <a href="https://trade.coingarage.io/signup">{t("signUp")}</a>
              </Button>
              <Button variant="outlinePrimary" size="lg" className="text-md w-full font-bold sm:w-max" asChild>
                <a href="https://www.coingarage-finance.com/en">{t("becomeAShareholder")}</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="absolute right-[-100px] top-[180px] -z-10 h-[470px] w-[774px] max-w-[96vw] xl:top-[0px]">
            <Image src="/images/fin.svg" alt="" className="scale-x-[-1] object-contain" fill={true} />
          </div>
          <div className="container mx-auto flex flex-col-reverse xl:flex-row">
            <div className="mt-12 flex flex-1 justify-center xl:mt-0 xl:justify-start">
              <Image src="/images/finance/laptop.png" className="animate-slow-bounce" alt="" width={924} height={503} />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto mt-12 flex max-w-[1200px] flex-col items-center px-8">
        <p className="mb-6 mt-20 text-center font-heading text-4xl font-bold">{t("developement.header")}</p>
        <p className="text-center">{t("developement.subtext")}</p>
        <ul className="mt-12 flex flex-row gap-16 font-heading">
          <li className="inline-flex items-center gap-4">
            {t("developement.done")}
            <Image src="/images/finance/icons/done.svg" width={18} height={18} alt="" />
          </li>
          <li className="inline-flex items-center gap-4">
            {t("developement.developement")}
            <Image src="/images/finance/icons/inDevelopment.svg" width={18} height={18} alt="" />
          </li>
          <li className="inline-flex items-center gap-4">
            {t("developement.planned")}
            <Image src="/images/finance/icons/planned.svg" width={18} height={18} alt="" />
          </li>
        </ul>
        <div className="mt-12 flex grid-cols-6 grid-rows-2 flex-row flex-wrap gap-5 xl:grid">
          <IconFigure status="done" caption={t("developement.list.box1")}>
            <TradingIcon width="67px" height="64px" />
          </IconFigure>
          <IconFigure status="done" caption={t("developement.list.box2")}>
            <TradingBotIcon width="67px" height="64px" />
          </IconFigure>
          <IconFigure status="done" caption={t("developement.list.box3")}>
            <MobileAppIcon width="67px" height="64px" />
          </IconFigure>
          <IconFigure status="done" caption={t("developement.list.box4")}>
            <GaraCoinIcon width="67px" height="64px" />
          </IconFigure>
          <IconFigure status="done" caption={t("developement.list.box5")}>
            <CoinListingIcon width="67px" height="64px" />
          </IconFigure>
          <IconFigure status="done" caption={t("developement.list.box6")}>
            <ReferralIcon width="67px" height="64px" />
          </IconFigure>
          <IconFigure status="inDevelopment" caption={t("developement.list.box7")}>
            <BitcoinSavingsIcon width="67px" height="64px" />
          </IconFigure>
          <IconFigure status="inDevelopment" caption={t("developement.list.box8")}>
            <TradingIcon width="67px" height="64px" />
          </IconFigure>
          <IconFigure status="inDevelopment" caption={t("developement.list.box9")}>
            <AcademyIcon width="67px" height="64px" />
          </IconFigure>
          <IconFigure status="planned" caption={t("developement.list.box10")}>
            <StakingIcon width="67px" height="64px" />
          </IconFigure>
          <IconFigure status="planned" caption={t("developement.list.box11")}>
            <NftIcon width="67px" height="64px" />
          </IconFigure>
          <IconFigure status="planned" caption={t("developement.list.box12")}>
            <CryptoCardIcon width="67px" height="64px" />
          </IconFigure>
        </div>
      </section>
    </main>
  )
}

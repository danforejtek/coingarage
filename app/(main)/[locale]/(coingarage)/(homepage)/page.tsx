import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
// import Figure from "@/components/Figure"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Heading from "@/components/Heading"
import CryptoMarketTable from "@/components/CryptoMarketTable"
// import Link from "next/link"
import Faq from "@/components/Faq"
import GetGara from "@/components/promo/GetGara"
import GetApp from "@/components/promo/GetApp"
import Advantages from "@/components/promo/Advantages"
import Motivation from "@/components/promo/Motivation"
import NewsFeed from "@/components/NewsFeed"
import CryptoStats from "@/components/CryptoStats"
import GeniusTrader from "@/components/GeniusTrader"
import { GetAppHp } from "@/components/promo/GetAppHp"
import { ClaimGaraModal } from "@/components/promo/ClaimGaraModal"
import { RegistrationHelp } from "@/components/promo/RegistrationHelp"
import { Safety } from "@/components/promo/Safety"

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("CryptoLandingPage")
  return (
    <main>
      <section className="container mx-auto mt-8 flex flex-wrap items-center justify-center gap-12 lg:grid lg:grid-cols-2 lg:flex-row lg:items-start xl:mt-20 xl:justify-between xl:gap-6">
        <div>
          <ClaimGaraModal />
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
          <div>
            <GetGara className="mt-16" />
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
            <div className="mt-4 inline-flex justify-center">
              <RegistrationHelp />
            </div>
          </div>
        </div>
        <div className="grid-col-2 grid">
          <GetApp />
          <NewsFeed className="mt-8" />
        </div>
      </section>
      <Motivation />
      <section id="hot-coins" className="container mx-auto mt-28">
        <CryptoMarketTable />
        <div className="mt-12">
          <CryptoStats />
        </div>
      </section>
      <Advantages />
      <Safety />
      <section className="relative mt-28 md:mt-44">
        <div className="absolute left-0 top-[180px] -z-10 h-[822px] w-[1000px] max-w-[96vw] xl:-top-[68px]">
          <Image src="/images/fin.svg" alt="" fill={true} style={{ objectFit: "contain" }} />
        </div>
        <div className="container mx-auto flex flex-col-reverse xl:flex-row">
          <div className="mt-12 flex flex-1 justify-center xl:mt-0 xl:justify-start">
            <Image src="/images/promo/phone_3d.png" className="animate-slow-bounce" alt="" width={350} height={712} />
            <div className="ml-12 hidden h-full flex-col justify-center md:flex">
              <Image src="/qr/get-app.svg" alt="Get App" width={224} height={224} className="rounded-xl bg-white p-1" />
              <div className="mt-4 text-center font-heading font-bold text-white ">
                {t("scanQrCode")}
                <br />
                {t("toDownloadApp")}
              </div>
            </div>
          </div>
          <div className="mt-20 max-w-[500px] md:mt-0">
            <GetAppHp />
          </div>
        </div>
      </section>
      <section className="container mx-auto mt-28">
        <GeniusTrader />
      </section>
      <section id="faq" className="container mx-auto my-32 xl:mt-36">
        <Heading tag="h2" className="mb-12">
          FAQ
        </Heading>
        <Faq />
      </section>
    </main>
  )
}

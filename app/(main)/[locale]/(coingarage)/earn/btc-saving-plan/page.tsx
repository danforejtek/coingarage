// import Figure from "@/components/Figure"
import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
// import { useTranslations } from "next-intl"
import Image from "next/image"
import SavingsWidget from "./savings-widget"
import { BenefitCarousel } from "../../../finance/components/benefit-carousel"
import BtcSavingsSvg from "./btc-saving-svg"
import BtcLossSection from "./btc-loss-section"



export default function Affiliate({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("eezy-trader.BtcSaving")


  return (
    <main className="relative">
      <section id="What-is-a-Bitcoin-Saving-Plan" className="container flex items-center justify-between mx-auto mt-16">
        <div className="w-[60%] sm:w-[50%] max-w-[620px] p-4">
          <h1 className="h1-caption mr-[-66%] sm:mr-0 mb-6">
            {t("whatIsSavingPlan.header")}
          </h1>
          <p className="mb-4 text-lg text-text-neutral-600 dark:text-neutral-300 lg:text-left">
            {t.rich("whatIsSavingPlan.text", {
              b: (text) => <span className="font-bold text-primary">{text}</span>,
            })}
          </p>
          <div className="">
            <Button variant="default" size="lg" className="mt-8" asChild>
              <a href="https://trade.coingarage.io/login">{t("whatIsSavingPlan.btn")}</a>
            </Button>
          </div>
        </div>

        <div className="w-[40%] mr-[-16px] xl:mr-0  overflow-hidden">
          <Image src="/images/eezy-trader/images/pig_pink.png" alt="" width={463} height={448} className="w-80 sm:w-[544px] max-w-[563px] " />
        </div>

      </section>

      {/* ----------- Benefits section */}

      <section id="four-benefits" className="container flex justify-between mx-auto mb-36 mt-28">
        <BenefitCarousel />
      </section>


      {/* ----------- DCA strategy */}

      <section id="What-is-a-Bitcoin-Saving-Plan"
        className="container mx-auto mt-16 flex flex-col justify-center items-start sm:flex-row sm:justify-between sm:gap-[2%] lg:gap-[10%]">
        <div className="w-full p-4 sm:w-1/2">

          <h2 className="mb-6 h2-caption">
            {t("whatIsDCA.header")}
          </h2>
          <p className="common-text">
            {t("whatIsDCA.text")}
          </p>
          <h3 className="mb-2 h3-caption-primary mt-7">{t("whatIsDCA.benefits.header")}</h3>
          <ul className="unlist">
            <li className="common-text"><strong>{t("whatIsDCA.benefits.benefit1").split(":")[0]}</strong>:{t("whatIsDCA.benefits.benefit1").split(":")[1]}</li>
            <li className="common-text"><strong>{t("whatIsDCA.benefits.benefit2").split(":")[0]}</strong>:{t("whatIsDCA.benefits.benefit2").split(":")[1]}</li>
            <li className="common-text"><strong>{t("whatIsDCA.benefits.benefit3").split(":")[0]}</strong>:{t("whatIsDCA.benefits.benefit3").split(":")[1]}</li>
          </ul>

        </div>

        {/* ----------- Savings Widget */}
        <div className="flex flex-col items-center justify-start w-full sm:w-1/2">
          <SavingsWidget />
        </div>
      </section>


      {/* ----------- dynamic DCA */}
      <section className="container">
        <div id="dynamic-DCA" className="p-5 mx-auto mt-16 rounded-xlg bg-card sm:p-10">
          <h2 className="mb-3 h2-caption sm:mb-8">{t("whatIsDCA.dynamicDCA.header")}</h2>
          <p className="sm:w-[496px] sm:max-w-[50%] mb-2">{t("whatIsDCA.dynamicDCA.text1")}</p>
          <p className="sm:w-[750px] sm:max-w-[75%] mb-2">{t("whatIsDCA.dynamicDCA.text2")}</p>
          <p className="sm:w-[1050px] sm:max-w-[100%] mb-2">{t("whatIsDCA.dynamicDCA.text3")}</p>
        </div>
      </section>

      {/* ----------- Calculate your loss + Graph */}

      <div className="container mx-auto mt-16">
        <h3 className="mb-1 h3-caption-primary ml-4">
          {t("dcaCalculator.subheader")}
        </h3>
        <h2 className="mb-6 h2-caption  ml-4">
          {t("dcaCalculator.header")}
        </h2>
      </div>

      <BtcLossSection></BtcLossSection>

      

      {/* ----------- extra buy strategy */}

      <section id="extra-buy-strategy"
        className="container mx-auto mt-16 flex flex-col justify-center items-start sm:flex-row sm:justify-between sm:gap-[2%] lg:gap-[10%]">
        <div className="w-full p-4 sm:w-1/2">

          <h2 className="mb-6 h2-caption">
            {t("extraDCA.header")}
          </h2>
          <p className="common-text">
            {t("extraDCA.text")}
          </p>
          <h3 className="mb-2 font-bold h3-caption mt-7">{t("extraDCA.howItWorks.header")}</h3>
          <ul className="ordered-list">
            <li className="common-text"><strong>{t("extraDCA.howItWorks.work1").split(":")[0]}</strong>:{t("extraDCA.howItWorks.work1").split(":")[1]}</li>
            <li className="common-text"><strong>{t("extraDCA.howItWorks.work2").split(":")[0]}</strong>:{t("extraDCA.howItWorks.work2").split(":")[1]}</li>
            <li className="common-text"><strong>{t("extraDCA.howItWorks.work3").split(":")[0]}</strong>:{t("extraDCA.howItWorks.work3").split(":")[1]}</li>
          </ul>

          <h3 className="mb-2 font-bold h3-caption mt-7">{t("extraDCA.whyAdvantageous.header")}</h3>
          <ul className="ordered-list">
            <li className="common-text"><strong>{t("extraDCA.whyAdvantageous.advantageous1").split(":")[0]}</strong>:{t("extraDCA.whyAdvantageous.advantageous1").split(":")[1]}</li>
            <li className="common-text"><strong>{t("extraDCA.whyAdvantageous.advantageous2").split(":")[0]}</strong>:{t("extraDCA.whyAdvantageous.advantageous2").split(":")[1]}</li>
            <li className="common-text"><strong>{t("extraDCA.whyAdvantageous.advantageous3").split(":")[0]}</strong>:{t("extraDCA.whyAdvantageous.advantageous3").split(":")[1]}</li>
          </ul>

        </div>

        {/* ----------- savings Graph */}
        <div className="relative flex flex-col items-center justify-start w-full h-[500px] sm:w-1/2">

          <BtcSavingsSvg />
        </div>
      </section>


    </main>
  )
}

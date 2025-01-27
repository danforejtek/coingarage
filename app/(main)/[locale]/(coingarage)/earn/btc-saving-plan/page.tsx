// import Figure from "@/components/Figure"
import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
// import { useTranslations } from "next-intl"
import Image from "next/image"
import SavingsWidget from "./savings-widget"
import { BenefitCarousel } from "./benefit-carousel"
import BtcSavingsSvg from "./btc-saving-svg"
import BtcLossSection from "./btc-loss-section"

export default function Affiliate({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("eezy-trader.BtcSaving")
  const t2 = useTranslations("eezy-trader.homepage")

  return (
    <main className="relative">
      <section
        id="What-is-a-Bitcoin-Saving-Plan"
        className="container mx-auto mt-16 flex items-center justify-between pr-0"
      >
        <div className="w-[60%] box-content max-w-[620px] p-4 sm:w-[50%]">
          <h1 className="h1-caption mb-6 mr-[-66%] sm:mr-0">{t("whatIsSavingPlan.header")}</h1>
          <p className="text-text-neutral-600 mb-4 text-lg dark:text-neutral-300 lg:text-left">
            {t.rich("whatIsSavingPlan.text", {
              b: (text) => <span className="font-bold text-primary">{text}</span>,
            })}
          </p>
          <div className="">
            <Button variant="default" size="lg" className="mt-8" asChild>
              <a href="https://trade.coingarage.io/auto-buy/create-plan">{t("whatIsSavingPlan.btn")}</a>
            </Button>
          </div>
        </div>

        <div className="w-[40%] overflow-hidden  xl:mr-0">
          <Image
            src="/images/eezy-trader/images/pig_pink.png"
            alt=""
            width={463}
            height={448}
            className="w-80 max-w-[563px] sm:w-[500px] "
          />
        </div>
      </section>

      {/* ----------- Benefits section */}

      <section id="four-benefits" className="container mx-auto mb-16 sm:mb-24 mt-28 flex justify-between">
        <BenefitCarousel />
      </section>

      {/* ----------- DCA strategy */}
      <section className="bg-backgroundMuted py-6 p-3 sm:py-[136px]">
        <section
          id="What-is-a-DCA"
          className="container mx-auto flex flex-col items-start justify-center sm:flex-row sm:justify-between sm:gap-[2%] lg:gap-[10%]"
        >
          <div className="w-full p-4 sm:w-1/2">
            <h2 className="h2-caption mb-6">{t("whatIsDCA.header")}</h2>
            <p className="common-text">{t("whatIsDCA.text")}</p>
            <h3 className="h3-caption-primary mb-2 mt-7">{t("whatIsDCA.benefits.header")}</h3>
            <ul className="unlist">
              <li className="common-text">
                <strong>{t("whatIsDCA.benefits.benefit1").split(":")[0]}</strong>:
                {t("whatIsDCA.benefits.benefit1").split(":")[1]}
              </li>
              <li className="common-text">
                <strong>{t("whatIsDCA.benefits.benefit2").split(":")[0]}</strong>:
                {t("whatIsDCA.benefits.benefit2").split(":")[1]}
              </li>
              <li className="common-text">
                <strong>{t("whatIsDCA.benefits.benefit3").split(":")[0]}</strong>:
                {t("whatIsDCA.benefits.benefit3").split(":")[1]}
              </li>
            </ul>
          </div>

          {/* ----------- Savings Widget */}
          <div className="flex w-full flex-col items-center justify-start sm:w-1/2">
            <SavingsWidget />
          </div>
        </section>

        {/* ----------- dynamic DCA */}
        <section className="container">
          <div id="dynamic-DCA" className="mx-auto mt-16 rounded-xlg bg-background p-5 sm:p-10">
            <h2 className="h2-caption mb-3 sm:mb-8">{t("whatIsDCA.dynamicDCA.header")}</h2>
            <p className="mb-2 sm:w-[496px] sm:max-w-[50%]">{t("whatIsDCA.dynamicDCA.text1")}</p>
            <p className="mb-2 sm:w-[750px] sm:max-w-[75%]">{t("whatIsDCA.dynamicDCA.text2")}</p>
            <p className="mb-2 sm:w-[1050px] sm:max-w-[100%]">{t("whatIsDCA.dynamicDCA.text3")}</p>
          </div>
        </section>
      </section>

      {/* ----------- Calculate your loss + Graph */}

      <div className="container mx-auto mt-16 sm:mt-24">
        <h3 className="h3-caption-primary mb-1 ml-4">{t("dcaCalculator.subheader")}</h3>
        <h2 className="h2-caption mb-6  ml-4">{t("dcaCalculator.header")}</h2>
      </div>

      <BtcLossSection></BtcLossSection>

      {/* ----------- extra buy strategy */}

      <section
        id="extra-buy-strategy"
        className="container mx-auto mt-16 flex flex-col items-start justify-center sm:pt-24 sm:gap-[2%] lg:flex-row lg:justify-between xl:gap-[10%]"
      >
        <div className="w-full p-4 lg:w-1/2">
          <h2 className="h2-caption mb-6">{t("extraDCA.header")}</h2>
          <p className="common-text">{t("extraDCA.text")}</p>
          <h3 className="h3-caption mb-2 mt-7 font-bold">{t("extraDCA.howItWorks.header")}</h3>
          <ul className="ordered-list">
            <li className="common-text">
              <strong>{t("extraDCA.howItWorks.work1").split(":")[0]}</strong>:
              {t("extraDCA.howItWorks.work1").split(":")[1]}
            </li>
            <li className="common-text">
              <strong>{t("extraDCA.howItWorks.work2").split(":")[0]}</strong>:
              {t("extraDCA.howItWorks.work2").split(":")[1]}
            </li>
            <li className="common-text">
              <strong>{t("extraDCA.howItWorks.work3").split(":")[0]}</strong>:
              {t("extraDCA.howItWorks.work3").split(":")[1]}
            </li>
          </ul>

          <h3 className="h3-caption mb-2 mt-7 font-bold">{t("extraDCA.whyAdvantageous.header")}</h3>
          <ul className="ordered-list">
            <li className="common-text">
              <strong>{t("extraDCA.whyAdvantageous.advantageous1").split(":")[0]}</strong>:
              {t("extraDCA.whyAdvantageous.advantageous1").split(":")[1]}
            </li>
            <li className="common-text">
              <strong>{t("extraDCA.whyAdvantageous.advantageous2").split(":")[0]}</strong>:
              {t("extraDCA.whyAdvantageous.advantageous2").split(":")[1]}
            </li>
            <li className="common-text">
              <strong>{t("extraDCA.whyAdvantageous.advantageous3").split(":")[0]}</strong>:
              {t("extraDCA.whyAdvantageous.advantageous3").split(":")[1]}
            </li>
          </ul>
        </div>

        {/* ----------- savings Graph */}
        <div className="w-full lg:w-1/2">
          <BtcSavingsSvg />
        </div>
      </section>

      <section id="faq" className="container mx-auto my-32 max-w-[1000px] xl:mt-36">
        <p className="text-center text-3xl font-bold">FAQ</p>
        <Accordion type="multiple" className="mt-12">
          <AccordionItem value={`item-1`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t2("faq.question1")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{t2("faq.answer1")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-2`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t2("faq.question2")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{t2("faq.answer2")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-3`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t2("faq.question3")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{t2("faq.answer3")}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}

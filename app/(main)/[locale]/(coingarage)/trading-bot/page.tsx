// import Figure from "@/components/Figure"
import { unstable_setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Figure from "@/components/figure"
import { TopPerformers } from "@/components/eezy-trader/top-performers"
import { SubscriptionPlans } from "@/components/eezy-trader/subscription-plans"
import Link from "next/link"

export default function Affiliate({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  // const t = useTranslations("Affiliate")
  const t = useTranslations("eezy-trader.homepage")
  const tAfi = useTranslations("eezy-trader.affiliate")
  return (
    <main className="relative">
      <section className="container mx-auto mt-12 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:mt-28 xl:justify-between">
        <div className="w-full max-w-[500px] p-4">
          <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">{t("main.header")}</h1>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {t.rich("results.header", { b: (text) => <span className="font-bold text-primary">{text}</span> })}
          </p>
          <div className="flex flex-col justify-center gap-2">
            <Button variant="default" size="lg" className="mt-8" asChild>
              <a href="https://trade.coingarage.io/login">{t("trialBtn")}</a>
            </Button>
            <p className="text-center text-sm">{t("main.noCreditCard")}</p>
          </div>
        </div>

        <div className="mt-16 flex w-1/2 flex-col items-center justify-start xl:mt-0">
          <Image src="/logo/coingarage_eezytrader.svg" alt="" width={260} height={600} />
        </div>
      </section>
      <section className="flex flex-col items-center px-8">
        <p className="mb-6 mt-20 text-center font-heading text-4xl font-bold">{t("start.header")}</p>
        <p className="text-center">{t("start.subText")}</p>
      </section>
      <section className="container mx-auto mt-20 flex flex-col items-center lg:flex-row">
        <div className="relative flex flex-col flex-wrap justify-center gap-8 lg:w-1/2 xl:justify-between">
          <span className="absolute left-[94px] top-0 h-full w-1 bg-tertiary/20"></span>
          <span className="absolute bottom-0 left-[102px] h-[18px] w-1 rotate-45 bg-tertiary/20"></span>
          <span className="absolute bottom-0 left-[86px] h-[18px] w-1 -rotate-45 bg-tertiary/20"></span>
          <Figure
            icon="/images/eezy-trader/icons/login.svg"
            direction="horizontal"
            caption={t("start.steps.1")}
            iconSize={65}
            className="w-full gap-16 lg:w-[400px]"
            textClassName="text-primary"
          />
          <Figure
            icon="/images/eezy-trader/icons/signUp.svg"
            direction="horizontal"
            caption={t("start.steps.2")}
            iconSize={65}
            className="w-full gap-16 lg:w-[400px]"
            textClassName="text-primary"
          />
          <Figure
            icon="/images/eezy-trader/icons/subAccount.svg"
            direction="horizontal"
            caption={t("start.steps.3")}
            iconSize={65}
            className="w-full gap-16 lg:w-[400px]"
            textClassName="text-primary"
          />
          <Figure
            icon="/images/eezy-trader/icons/createStrategy.svg"
            direction="horizontal"
            caption={t("start.steps.4")}
            iconSize={65}
            className="w-full gap-16 lg:w-[400px]"
            textClassName="text-primary"
          />
          <Figure
            icon="/images/eezy-trader/icons/runBot.svg"
            direction="horizontal"
            caption={t("start.steps.5")}
            iconSize={65}
            className="w-full gap-16 lg:w-[400px]"
            textClassName="text-primary"
          />
        </div>
        <div className="mt-24 w-full lg:mt-0 lg:w-[450px]">
          <TopPerformers heading={t("results.topPerformers")} />
        </div>
      </section>
      <div className="mt-12 bg-tertiary/25 py-12 dark:bg-tertiary/10 xl:mt-28">
        <section className="container mx-auto flex flex-col flex-wrap items-center justify-center lg:flex-row xl:justify-between">
          <div className="w-full max-w-[500px] p-4">
            <h1 className="mb-6 flex flex-col gap-3 font-heading text-4xl font-bold">
              <div className="text-4xl text-primary">{tAfi("main.header1")}</div>
              <div>{tAfi("main.header2")}</div>
            </h1>
            <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
              {tAfi.rich("main.subText", {
                b: (text) => <span className="font-bold text-primary">{text}</span>,
              })}
            </p>
            <div className="">
              <Button variant="default" size="lg" className="mt-8" asChild>
                <Link href="/earn">{tAfi("btnAffiliate")}</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 flex w-1/2 flex-col items-center justify-start xl:mt-0">
            <Image src="/images/affiliate-levels.png" alt="" width={600} height={600} />
          </div>
        </section>
      </div>
      <section className="container mx-auto my-24">
        <SubscriptionPlans />
      </section>
      <section className="container relative mx-auto my-32 max-w-[1000px] xl:mt-36">
        <p className="text-center font-heading text-lg font-bold">{t("trusting.subHeader")}</p>
        <p className="text-center font-heading text-4xl font-bold text-primary">{t("trusting.header")}</p>
        <div className="z-10 mt-24 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 rounded-lg bg-tertiary/20 p-8 dark:bg-tertiary/20">
          <div className="text-md flex h-20 flex-1 items-center justify-between rounded-md bg-background px-8 font-heading font-bold text-foreground">
            {t("trusting.columns.1")}
            <Image src="/images/eezy-trader/icons/longShort.svg" width={28} height={28} alt="" />
          </div>
          <div className="text-md flex h-20 flex-1 items-center justify-between rounded-md bg-background px-8 font-heading font-bold text-foreground">
            {t("trusting.columns.2")}
            <Image src="/images/eezy-trader/icons/trailingProfit.svg" width={28} height={28} alt="" />
          </div>
          <div className="text-md flex h-20 flex-1 items-center justify-between rounded-md bg-background px-8 font-heading font-bold text-foreground">
            {t("trusting.columns.3")}
            <Image src="/images/eezy-trader/icons/dcaGrid.svg" width={28} height={28} alt="" />
          </div>
          <div className="text-md flex h-20 flex-1 items-center justify-between rounded-md bg-background px-8 font-heading font-bold text-foreground">
            {t("trusting.columns.4")}
            <Image src="/images/eezy-trader/icons/saveStrategy.svg" width={28} height={28} alt="" />
          </div>
          <div className="text-md flex h-20 flex-1 items-center justify-between rounded-md bg-background px-8 font-heading font-bold text-foreground">
            {t("trusting.columns.5")}
            <Image src="/images/eezy-trader/icons/startingByAi.svg" width={28} height={28} alt="" />
          </div>
          <div className="text-md flex h-20 flex-1 items-center justify-between rounded-md bg-background px-8 font-heading font-bold text-foreground">
            {t("trusting.columns.6")}
            <Image src="/images/eezy-trader/icons/copyTrading.svg" width={28} height={28} alt="" />
          </div>
          <div className="text-md flex h-20 flex-1 items-center justify-between rounded-md bg-background px-8 font-heading font-bold text-foreground">
            {t("trusting.columns.7")}
            <Image src="/images/eezy-trader/icons/100Pairs.svg" width={28} height={28} alt="" />
          </div>
          <div className="text-md flex h-20 flex-1 items-center justify-between rounded-md bg-background px-8 font-heading font-bold text-foreground">
            {t("trusting.columns.8")}
            <Image src="/images/eezy-trader/icons/technicalIndicators.svg" width={28} height={28} alt="" />
          </div>
          <div className="text-md flex h-20 flex-1 items-center justify-between rounded-md bg-background px-8 font-heading font-bold text-foreground">
            {t("trusting.columns.9")}
            <Image src="/images/eezy-trader/icons/99bots.svg" width={28} height={28} alt="" />
          </div>
        </div>
      </section>

      <section className="container mx-auto flex flex-col flex-wrap items-center justify-center lg:flex-row xl:justify-between">
        <div className="w-full max-w-[600px] p-4">
          <h1 className="mb-6 flex flex-col gap-3 font-heading text-4xl font-bold">
            <div className="text-3xl">{tAfi("setupTradingBot.name")}</div>
            <div className="text-primary">{tAfi("setupTradingBot.claim")}</div>
          </h1>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {tAfi.rich("setupTradingBot.text1", {
              b: (text) => <span className="font-bold text-primary">{text}</span>,
            })}
          </p>
          <div>
            <Button variant="default" size="lg" className="mt-8" asChild>
              <Link href="/eezy-trader/knowledge-base">{tAfi("btnAffiliate")}</Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 flex w-1/2 flex-col items-center justify-start xl:mt-0">
          <Image src="/images/eezy-trader/images/setupTradingBot.svg" alt="" width={450} height={450} />
        </div>
      </section>

      <section id="faq" className="container mx-auto my-32 max-w-[1000px] xl:mt-36">
        <p className="text-center text-3xl font-bold">FAQ</p>
        <Accordion type="multiple" className="mt-12">
          <AccordionItem value={`item-1`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t("faq.question1")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{t("faq.answer1")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-2`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t("faq.question2")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{t("faq.answer2")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-3`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t("faq.question3")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{t("faq.answer3")}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}

// import Figure from "@/components/Figure"
import { unstable_setRequestLocale } from "next-intl/server"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SubscriptionPlans } from "@/components/eezy-trader/subscription-plans"
import Link from "next/link"
import EezyTrader from "@/components/eezy-trader/eazy-trader"
import BestTraders from "@/components/eezy-trader/best-traders"
import FiveSteps from "@/components/eezy-trader/five-steps"
import FunctionsAndSettings from "@/components/eezy-trader/functions-and-settings"
import EasySettings from "@/components/eezy-trader/easy-settings"
import CustomerReviews from "@/components/eezy-trader/customer-reviews"
import KnowledgeSvg from "@/public/images/eezy-trader/images/setupTradingBot.svg"

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  // const t = useTranslations("Affiliate")
  const t = useTranslations("eezy-trader.homepage")
  const tAfi = useTranslations("eezy-trader.affiliate")
  return (
    <main className="relative overflow-hidden">
      <div id="robot-image" className="absolute -right-[110px] top-[260px] -z-40 h-[330px] w-[338px] md:right-0 md:top-[100px] lg:right-[-100px] lg:top-0 lg:h-[574px] lg:w-[612px] xl:right-[60px]">
        <Image src="/images/eezy-trader/images/robotcomputer.png" alt="" fill={true} style={{ objectFit: "cover" }} />
      </div>
      {/* <div className="absolute right-0 top-[300px] -z-10 h-[260px] w-[290px] max-w-[96vw] lg:top-[300px] lg:w-[509px] xl:w-[789px]">
        <Image src="/images/eezy-trader/images/red-vector.svg" fill={true} style={{ objectFit: "cover" }} alt="" />
      </div> */}
      <div className="absolute right-[-150px] top-[326px] -z-50 h-[270px] w-[774px] max-w-[96vw] overflow-hidden sm:right-[-200px] sm:top-[320px] sm:h-[300px] md:-right-[260px] md:top-[190px] lg:top-[24px] lg:h-[577px] lg:w-[843px]">
        <Image src="/images/eezy-trader/images/red-vector.svg" alt="" className="object-contain" fill={true} />
      </div>
      {/* Easy trader main section with cards and h3 */}
      <section className="mb-20">
        <EezyTrader />
      </section>

      {/* Best traders component */}
      <section className="mt-20 w-full overflow-x-hidden bg-tertiary/25 pb-20 pt-20 dark:bg-[#26272B] md:mt-16 lg:mt-0">
        <BestTraders />
      </section>

      {/* What they say - reviews */}
      <section className="container mx-auto mb-8 px-5 md:px-8 lg:px-16">
        <CustomerReviews />
      </section>

      {/* Lots of functions and settings */}
      <section className="container">
        <FunctionsAndSettings />
      </section>

      {/* EasySettings settings */}
      <section className="w-full bg-tertiary/25 dark:bg-[#26272B]">
        <EasySettings />
      </section>

      {/* Five steps */}
      <section className="container mx-auto mt-16 flex flex-col items-center pb-4 sm:mt-28">
        <FiveSteps />
      </section>

      {/* Subscribtions */}
      <section className="container mx-auto my-24">
        <SubscriptionPlans />
      </section>

      {/* Referal program */}
      <div className="mt-12 bg-tertiary/25 py-12 dark:bg-[#26272B] xl:mt-28">
        <section className="container mx-auto flex flex-col-reverse flex-wrap items-center justify-center lg:flex-row xl:justify-between">
          <div className="mt-16 flex w-full flex-col items-center justify-start pl-4 lg:w-1/2 xl:mt-0">
            <Image src="/images/eezy-trader/images/referalMain.svg" alt="" width={675} height={497} />
          </div>
          <div className="w-full max-w-[500px] p-4">
            <h1 className="mb-6 flex flex-col gap-3 font-heading text-4xl font-bold">
              <div className="text-3xl text-primary">{tAfi("main.header1")}</div>
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
        </section>
      </div>

      <section className="container mx-auto mt-2 flex flex-col flex-wrap items-center justify-center md:mt-8 lg:flex-row xl:justify-between">
        <div className="mt-12 w-full max-w-[800px] p-4">
          <h1 className="font-heading text-3xl font-bold text-primary">Knowledge Base</h1>
          <h1 className="mb-6 flex flex-col gap-3 font-heading text-4xl font-bold">
            <div className="text-4xl">{tAfi("setupTradingBot.name")}</div>
            <div className="text-4xl">{tAfi("setupTradingBot.claim")}</div>
          </h1>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {tAfi.rich("setupTradingBot.text1", {
              b: (text) => <span className="font-heading text-primary">{text}</span>,
            })}
          </p>
          <div>
            <Button variant="default" size="lg" className="mt-8 px-10" asChild>
              <Link href="/eezy-trader/knowledge-base">{tAfi("btnAffiliate")}</Link>
            </Button>
          </div>
        </div>
        <div className="mt-0 xl:mt-16 flex h-80 w-80 flex-col items-center justify-start sm:h-[450px] sm:w-[450px] xl:mt-0">
          <KnowledgeSvg />
        </div>
      </section>

      <section id="faq" className="container mx-auto my-16 max-w-[1000px] xl:mt-24">
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

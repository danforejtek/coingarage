// import Figure from "@/components/Figure"
import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
// import { useTranslations } from "next-intl"
import Image from "next/image"

export default function Affiliate({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("eezy-trader.affiliate")
  const tAfi = useTranslations("Affiliate")

  return (
    <main className="relative">
      <section className="container mx-auto mt-16 flex flex-col flex-wrap items-center justify-center lg:flex-row xl:justify-between">
        <div className="w-full max-w-[500px] p-4">
          <h1 className="mb-6 flex flex-col gap-3 font-heading text-4xl font-bold">
            <div className="text-4xl text-primary">{t("main.header1")}</div>
            <div>{t("main.header2")}</div>
          </h1>
          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {t.rich("main.subText", {
              b: (text) => <span className="font-bold text-primary">{text}</span>,
            })}
          </p>
          <div className="">
            <Button variant="default" size="lg" className="mt-8" asChild>
              <a href="https://trade.coingarage.io/login">{t("btnAffiliate")}</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 flex w-full flex-col items-center justify-start lg:w-1/2 xl:mt-0">
          <Image src="/images/eezy-trader/images/affiliate_numbers.svg" alt="" width={460} height={460} />
        </div>
      </section>

      <section className="container mx-auto mb-36 mt-28">
        <h2 className="text-center font-heading text-4xl font-bold">{tAfi("reward")}</h2>
        <div className="flex flex-col items-center justify-between gap-12 pt-16 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col flex-wrap items-center justify-center gap-10 lg:w-1/2">
            {/* <p className="text-primary">From first level you get 15%, from second 10% and from third 5%.</p> */}
            <Image src="/images/affiliate-levels.png" alt="Affiliate Levels" width={650} height={345} />
            {/* <p className="text-md text-text-neutral-600 mb-4 max-w-[725px] dark:text-neutral-300">{tAfi("warning")}</p> */}
          </div>
          <div className="mt-12 flex w-full max-w-[650px] flex-col gap-6 lg:mt-0 lg:w-1/2">
            <p className="ml-14 font-heading text-2xl font-bold text-primary">{t("example")}</p>
            <div className="grid grid-cols-[24px_1fr] items-center gap-8">
              <div className="font-heading text-4xl font-bold text-tertiary">1</div>
              <p className="font-heading text-lg ">{t("levels.text1")}</p>
            </div>
            <div className="grid grid-cols-[24px_1fr] items-center gap-8">
              <div className="font-heading text-4xl font-bold text-tertiary">2</div>
              <p className="font-heading text-lg ">{t("levels.text2")}</p>
            </div>
            <div className="grid grid-cols-[24px_1fr] items-center gap-8">
              <div className="font-heading text-4xl font-bold text-tertiary">3</div>
              <p className="font-heading text-lg ">{t("levels.text3")}</p>
            </div>
            <p className="ml-14 text-sm text-tertiary">{t("disclaimer")}</p>
          </div>
        </div>
      </section>

      <section className="bg-tertiary/25 py-12 dark:bg-tertiary/10 lg:py-24">
        <div className="container mx-auto max-w-[1200px]">
          <p className="text-center font-heading text-4xl font-bold">How to get started</p>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="flex min-h-[340px] max-w-[340px] flex-col items-center gap-6 rounded-lg bg-background p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-heading text-2xl font-bold text-white">
                1
              </div>
              <span className="text-center text-lg font-bold">{t("getStarted.header2")}</span>
              <p className="text-center text-sm">{t("getStarted.subText1")}</p>
            </div>
            <div className="flex min-h-[340px] max-w-[340px] flex-col items-center gap-6 rounded-lg bg-background p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-heading text-2xl font-bold text-white">
                2
              </div>
              <span className="text-center text-lg font-bold">{t("getStarted.header2")}</span>
              <p className="text-center text-sm">{t("getStarted.subText2")}</p>
            </div>
            <div className="flex min-h-[340px] max-w-[340px] flex-col items-center gap-6 rounded-lg bg-background p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-heading text-2xl font-bold text-white">
                3
              </div>
              <span className="text-center text-lg font-bold">{t("getStarted.header3")}</span>
              <p className="text-center text-sm">{t("getStarted.subText3")}</p>
            </div>
          </div>
          <div className="mx-auto max-w-[500px]">
            <p className="mt-12 text-center text-sm text-primary ">{t("getStarted.disclaimer")}</p>
          </div>
          <div className="flex flex-row justify-center">
            <Button variant="default" size="lg" className="mt-8" asChild>
              <a href="https://trade.coingarage.io/login">Get your referral</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto my-32 max-w-[1000px] xl:mt-36">
        <p className="text-center font-heading text-4xl font-bold">FAQ</p>
        <Accordion type="multiple" className="mt-12 w-full">
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
          <AccordionItem value={`item-4`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t("faq.question4")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">
              {t("faq.answer4")}
              <br />
              <br />
              <ul>
                <li>{t("faq.levels.1")}</li>
                <li>
                  <li>{t("faq.levels.2")}</li>
                </li>
                <li>
                  <li>{t("faq.levels.3")}</li>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}

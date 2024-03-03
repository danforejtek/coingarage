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
  return (
    <main className="relative">
      <section className="container mx-auto flex flex-col flex-wrap items-center justify-center lg:flex-row xl:justify-between">
        <div className="w-full max-w-[600px] p-4">
          <h1 className="mb-6 flex flex-col gap-3 font-heading text-5xl font-bold">
            {t("main.header1")}
            <br />
            {t("main.header2")}
          </h1>

          <p className="text-text-neutral-600 mb-4 text-justify text-lg dark:text-neutral-300 lg:text-left">
            {t.rich("main.subText", { b: (text) => <span className="font-bold text-violet">{text}</span> })}
          </p>

          <div className="mt-12 flex flex-row-reverse">
            <Button variant="violet" className="px-10">
              {t("btnAffiliate")}
            </Button>
          </div>
        </div>
        <div className="flex max-w-[600px] items-center justify-end lg:mt-16 xl:mt-0">
          <Image
            src="/images/eezy-trader/images/affiliate.svg"
            // className="animate-slow-bounce"
            alt=""
            width={600}
            height={600}
          />
        </div>
      </section>

      <section className="bg-violet-200/30 py-24 dark:bg-violet-200/10">
        <div className="container mx-auto max-w-[1200px]">
          <p className="text-center text-3xl font-bold">How to get started</p>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="flex min-h-[340px] max-w-[340px] flex-col items-center gap-6 rounded-lg bg-background p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet text-xl font-bold text-white">
                1
              </div>
              <span className="text-center text-lg font-bold">{t("getStarted.header2")}</span>
              <p className="text-center">{t("getStarted.subText1")}</p>
            </div>
            <div className="flex min-h-[340px] max-w-[340px] flex-col items-center gap-6 rounded-lg bg-background p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet text-xl font-bold text-white">
                2
              </div>
              <span className="text-center text-lg font-bold">{t("getStarted.header2")}</span>
              <p className="text-center">{t("getStarted.subText2")}</p>
            </div>
            <div className="flex min-h-[340px] max-w-[340px] flex-col items-center gap-6 rounded-lg bg-background p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet text-xl font-bold text-white">
                3
              </div>
              <span className="text-center text-lg font-bold">{t("getStarted.header3")}</span>
              <p className="text-center">{t("getStarted.subText3")}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto my-32 xl:mt-36">
        <p className="text-center text-3xl font-bold">FAQ</p>
        <Accordion type="multiple" className="mt-12 w-full">
          <AccordionItem value={`item-1`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t("fag.question1")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{t("fag.answer1")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-2`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t("fag.question2")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{t("fag.answer2")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-3`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t("fag.question3")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{t("fag.answer3")}</AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-4`} className="mb-8 rounded border-b-0 px-8 shadow-md dark:bg-backgroundMuted">
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t("fag.question4")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">
              {t("fag.answer4")}
              <br />
              <br />
              <ul>
                <li>{t("fag.levels.1")}</li>
                <li>
                  <li>{t("fag.levels.2")}</li>
                </li>
                <li>
                  <li>{t("fag.levels.3")}</li>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}

import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"
// import Heading from "@/components/Heading"
// import Faq from "@/components/Faq"
import Image from "next/image"
// import { ClaimGaraModal } from "@/components/promo/ClaimGaraModal"
import { Button } from "@/components/ui/button"
import Figure from "@/components/Figure"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TopPerformers } from "@/components/eezy-trader/top-performers"

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations("eezy-trader.homepage")
  return (
    <main>
      <section className="container mx-auto mt-8 flex flex-col flex-wrap items-center justify-center gap-12 pt-12">
        <Image src="/images/eezy-trader/logo/eezy.png" width={914} height={388} alt="logo" />
        <p className="font-bold">{t("main.header")}</p>
        <div className="flex flex-col justify-center gap-2">
          <Button variant="violet" size="lg" className="mt-8">
            {t("trialBtn")}
          </Button>
          <p className="text-center text-sm">{t("main.noCreditCard")}</p>
        </div>
        <p className="max-w-[800px] text-center text-xl">
          {t.rich("results.header", { b: (text) => <span className="font-bold text-violet">{text}</span> })}
        </p>
      </section>
      <section className="container mx-auto my-32 grid max-w-[800px] grid-cols-2 gap-6 xl:mt-36">
        <TopPerformers heading={t("results.topPerformers")} />
        {/* <TopPairs /> */}
      </section>
      <section className="container relative mx-auto my-32 max-w-[1000px] xl:mt-36">
        <p className="text-center text-lg font-bold">{t("trusting.subHeader")}</p>
        <p className="text-center text-2xl font-bold text-violet">{t("trusting.header")}</p>
        <div className="z-10 mt-24 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 rounded-lg bg-violet-50 p-8 dark:bg-violet-200/40">
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            {t("trusting.columns.1")}
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            {t("trusting.columns.2")}
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            {t("trusting.columns.3")}
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            {t("trusting.columns.4")}
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            {t("trusting.columns.5")}
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            {t("trusting.columns.6")}
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            {t("trusting.columns.7")}
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            {t("trusting.columns.8")}
          </div>
          <div className="flex h-24 flex-1 items-center justify-center rounded-md bg-white/80 text-black">
            {t("trusting.columns.9")}
          </div>
        </div>
        <Image
          src="/images/eezy-trader/images/slingshot.png"
          alt=""
          width={380}
          height={380}
          className="absolute -right-[0%] top-[18%] -z-10 -translate-y-1/2 transform select-none"
        />
      </section>
      <section className="relative my-32 xl:mt-36">
        <Image
          src="/images/eezy-trader/images/safe-box.png"
          width={400}
          height={400}
          alt="phone"
          className="absolute -left-16 top-0 hidden rotate-[20deg] select-none lg:block"
        />
        <div className="container mx-auto grid max-w-[800px] ">
          <p className="text-3xl font-bold">{t("investment.header")}</p>
        </div>
        <div className="absolute right-0 top-40 hidden h-10 w-[504px] grid-cols-2 items-center gap-2 rounded-l-xl bg-violet px-8 text-left font-bold text-white lg:grid">
          {t("investment.free7Days")}
          <span className="inline-flex w-full items-center gap-2 overflow-hidden">
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
            <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
            <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
            <div className="h-[6px] w-[6px] rounded-full bg-white"></div>
            <div className="h-[8px] w-[8px] rounded-full bg-white"></div>
            <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
            {/* <div className="h-[8px] w-[8px] rounded-full bg-white"></div> */}
          </span>
        </div>
      </section>
      <section className="container mx-auto my-32 xl:mt-36">
        <div className="relative mx-auto h-[180px] w-full lg:h-[300px] lg:w-[600px]">
          <div className="absolute left-0 top-[44%] flex flex-row items-center font-bold lg:-left-6 lg:text-2xl">
            <span className="mr-2 text-3xl font-bold text-violet">1</span> {t("investment.howToConnect.register")}
          </div>
          <div className="absolute -top-6 left-[44%] flex flex-col items-center font-bold lg:text-2xl">
            <span className="mr-2 text-3xl font-bold text-violet">2</span> {t("investment.howToConnect.connect")}
          </div>
          <div className="absolute right-0 top-[44%] flex flex-row items-center font-bold lg:-right-10 lg:text-2xl">
            <span className="mr-2 text-3xl font-bold text-violet">3</span>
            {t("investment.howToConnect.startTrading")}
          </div>
          <Image
            src="/images/eezy-trader/images/ellipse.png"
            alt=""
            fill={true}
            style={{ objectFit: "contain", zIndex: -1 }}
            className="select-none"
          />
          <Image
            src="/images/eezy-trader/images/security.png"
            alt="phone"
            width={160}
            height={160}
            className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 select-none"
          />
        </div>
        <div className="flex flex-row-reverse">
          <Button variant="violet" className="px-10">
            {t("trialBtn")}
          </Button>
        </div>
      </section>
      <section className="bg-violet-200/30 py-24 dark:bg-violet-200/10">
        <div className="container relative mx-auto">
          <div className="lg:w-1/2">
            <div>
              <Image src={`/logo/coingarage_icon_gradient.png`} alt="Logo" width={130} height={74} />
            </div>
            <h3
              className="mt-8 flex flex-col gap-2 text-4xl font-bold"
              dangerouslySetInnerHTML={{ __html: t.raw("login.header") }}
            ></h3>
            <p className="mt-12 max-w-[410px]">
              {t.rich("login.subText", { b: (text) => <span className="font-bold text-violet">{text}</span> })}
            </p>
          </div>
          <div className="lg:w-1/2"></div>
          <Image
            src="/images/eezy-trader/images/startup.png"
            alt=""
            width={400}
            height={400}
            className="absolute right-0 top-[50%] -z-10 -translate-y-1/2 transform select-none lg:-right-[2%] lg:left-[50%] lg:top-[50%] lg:-translate-x-1/2"
          />
        </div>
      </section>
      <section className="container mx-auto mt-16 lg:mt-28">
        <div className="container mx-auto grid max-w-[800px] ">
          <p className="pl-16 text-center text-3xl font-bold">{t("start.header")}</p>
          <p className="mt-8 text-center text-xl">{t("start.subText")}</p>
        </div>
        <div className="mt-12 flex w-full flex-row flex-wrap justify-center gap-8 xl:justify-between">
          <Figure icon="/images/eezy-trader/images/presentation.gif" caption={t("start.steps.1")} iconSize={180} />
          <Figure icon="/images/eezy-trader/images/money-bag.gif" caption={t("start.steps.2")} iconSize={180} />
          <Figure icon="/images/eezy-trader/images/computer.gif" caption={t("start.steps.3")} iconSize={180} />
          <Figure icon="/images/eezy-trader/images/target.gif" caption={t("start.steps.4")} iconSize={180} />
          <Figure icon="/images/eezy-trader/images/rocket.gif" caption={t("start.steps.5")} iconSize={180} />
        </div>
      </section>
      <div className="mt-12 flex flex-row justify-center">
        <Button variant="violet" className="px-10">
          {t("trialBtn")}
        </Button>
      </div>
      <section id="faq" className="container mx-auto my-32 xl:mt-36">
        <p className="text-center text-3xl font-bold">FAQ</p>
        <Accordion type="multiple" className="mt-12 w-full">
          <AccordionItem
            value={`item-1`}
            className="mb-8 rounded border border-b-0 border-neutral-100 px-8 shadow-md dark:bg-backgroundMuted"
          >
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t("faq.question1")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{t("faq.answer1")}</AccordionContent>
          </AccordionItem>
          <AccordionItem
            value={`item-2`}
            className="mb-8 rounded border border-b-0 border-neutral-100 px-8 shadow-md dark:bg-backgroundMuted"
          >
            <AccordionTrigger className="text-left text-lg">
              <span className="mr-6">{t("faq.question2")}</span>
            </AccordionTrigger>
            <AccordionContent className="text-md">{t("faq.answer2")}</AccordionContent>
          </AccordionItem>
          <AccordionItem
            value={`item-3`}
            className="mb-8 rounded border border-b-0 border-neutral-100 px-8 shadow-md dark:bg-backgroundMuted"
          >
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
